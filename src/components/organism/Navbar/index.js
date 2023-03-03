import { Link } from 'react-router-dom';
import { HeaderImage, HeaderWrap, HeaderNav } from './Navbar.styles';
import Logo from '../../../assets/images/logo.png';
import PropTypes from 'prop-types';
import Search from '../../molecules/Search';

const Navbar = ({ onSearchChange }) => {

  return (
    <HeaderWrap>
      <HeaderNav>
        <Search handleSearch={onSearchChange} />
        <Link to='/'>
          <HeaderImage src={Logo} alt='Company brand' />
        </Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

Navbar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Navbar;
