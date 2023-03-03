  /* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react'
import { fetchBandsAlbum, fetchBandsDetails } from '../../services/bandsSlice';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { GridContainer, BandAbout, BandCover , BandDiscography, BandDiscoCarroussel, BandPlusSeparator, BandSpecs , BandSpecsWrapper } from './BandInfo.styles';
import AddIcon from '@mui/icons-material/Add';

export default function BandInfo() {

  const [isAboutOpen , setAboutOpen] = useState(false)
  const [ discography , getDiscography ] = useState([])
  const dispatch = useDispatch()
  const params = useParams()
  const bandInfo = useSelector((state) => state.bands.bandInfo);  
  const albums = useSelector((state) => state.bands.album);  
  
  // GET THE ARTIST ALBUM 
  useEffect(() => {
    const filteredAlbums = albums.filter((item) => item.band.includes(bandInfo.id))
    getDiscography(filteredAlbums)
  }, [albums, bandInfo.id])

  useEffect(() => { 
    dispatch(fetchBandsDetails(params.id)) 
    dispatch(fetchBandsAlbum()) 
  }, [dispatch, params.id]);
      
  return (
    <>
       <BandCover image={bandInfo.image}> 
          <h2>{bandInfo.name}</h2>
       </BandCover>
       <BandSpecsWrapper>
          <BandSpecs>
              <p className='--1'>{bandInfo.genre}</p>
              <div className='ImageWrapper'>
                <img src={bandInfo.image} alt='Band Avatar' />
              </div> 
              <p className='--2'>{bandInfo.numPlays}</p>            
          </BandSpecs>
          <BandAbout 
            isAboutOpen={isAboutOpen}
            onClick={() => setAboutOpen(!isAboutOpen)}>{bandInfo.biography}</BandAbout>
          <BandPlusSeparator onClick={() => setAboutOpen(!isAboutOpen)}>
              <label />  <AddIcon />  <label />
          </BandPlusSeparator>
          <BandDiscography>
                <h3>Albuns</h3>

                <GridContainer>
                    <BandDiscoCarroussel>
                      {
                        discography && discography.map((item, i) => {
                          const date = new Date(item.releasedDate);
                          const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

                          return (
                            <div className='card' key={i}>
                              <img className='card__image' src={item.image} alt=''/>
                              <div className='card__content'>
                                  <h2>{item.name}</h2>
                                  <p>{formattedDate}</p>
                              </div>
                            </div>
                        )})
                      }
                    </BandDiscoCarroussel>                  
                </GridContainer>


          </BandDiscography>
       </BandSpecsWrapper>

       

    </>
  )
}
