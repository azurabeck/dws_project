import { useState, useEffect } from 'react';
import { FilterButton, FilterImage, FilterMenu, ResultFound, ResultWrap } from './ResultView.styles';
import OrderByImage from '../../../assets/images/order_by.png';

const ResultView = ({ bands, onFilterQuery }) => {

const [isFilterEnable , setFilterEnable] = useState(false)
const [query, setQuery] = useState('');
const resultLength = bands && bands.length;

const handleFilterQuery = (filter) => {
  setQuery(filter);
};

const Filter = () => {
  // Create the filte menu component. Should change this to Molecules
  return (
    <FilterMenu>
      <li onClick={() => handleFilterQuery('name')}>Ordem Alfabética</li>
      <li onClick={() => handleFilterQuery('rate')}>Popularidade</li>
  </FilterMenu>
  )
}

useEffect(() => {
  // Callback to update Home.js
  onFilterQuery(query);
}, [query, onFilterQuery]);

return (
  <ResultWrap>
    <ResultFound>
    {resultLength > 1
        ? `${resultLength} Resultados Encontrados`
        : `${resultLength} Resultado Encontrado`}
    </ResultFound>
    <FilterButton onClick={() => setFilterEnable(!isFilterEnable)}>
      <FilterImage src={OrderByImage} alt='Filter Icon' />
      {
       isFilterEnable && Filter()
      }

    </FilterButton>
  </ResultWrap>
);
};

export default ResultView;