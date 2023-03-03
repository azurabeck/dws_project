import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HeaderButtonBack, HeaderImage, HeaderWrap, HeaderNav } from './Navbar.styles';
import Logo from '../../../assets/images/logo.png';
import PropTypes from 'prop-types';
import Search from '../../molecules/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Navbar = ({ onSearchChange }) => {
  const [hasId, setHasId] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    setHasId(location.pathname.includes('id'));
  }, [location.pathname]);

  return (
    <HeaderWrap>
      <HeaderNav hasId={hasId}>
        {!hasId && <Search handleSearch={onSearchChange} />}
        {hasId && <HeaderButtonBack onClick={() => navigate(-1)}><ArrowBackIosIcon /></HeaderButtonBack>}

        <Link to="/" onClick={() => setHasId(false)}>
          <HeaderImage src={Logo} alt="Company brand" />
        </Link>
      </HeaderNav>
    </HeaderWrap>
  );
};

Navbar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Navbar;
