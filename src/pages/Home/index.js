import { useState } from 'react';
import ResultView from '../../components/organism/ResultView';
import { BandDetails, BandList, BandImage, BandsItem } from './Home.styles';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const { albums, bands, searchQuery } = props;
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  let filteredBands = bands;

  const handleFilterQuery = (filter) => {
      setQuery(filter);
  };

  const handleBandClick = (id) => {
       navigate(`/band/id/${id}`);
  };

  // Apply filter if query is not empty
  if (searchQuery) {
      filteredBands = bands.filter((band) =>
          band.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }

  // Apply order by name if query is "name"
  if (query === 'name') {
      filteredBands = filteredBands.slice().sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
  }

  // Apply order by rate if query is "rate"
  if (query === 'rate') {
      filteredBands = filteredBands.slice().sort((a, b) => b.numPlays - a.numPlays);
  }

  return (
    <>
      <ResultView bands={filteredBands} onFilterQuery={handleFilterQuery} />
      <BandList>
        {filteredBands &&
          filteredBands.map((item, i) => {
            const filter = albums && albums.filter(alb => alb.band === item.id);
            const imag = filter && filter.length ? filter[0].image : item.image;

            return (
              <BandsItem key={i} onClick={() => handleBandClick(item.id)}>
                <BandImage src={imag} alt='Band Cover' />
                <BandDetails>
                  <h3>{item.name}</h3>
                  <p>{item.numPlays} Plays</p>
                </BandDetails>
              </BandsItem>
            )
          })}
      </BandList>
    </>
  );
}
