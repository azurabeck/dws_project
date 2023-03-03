import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands'

const initialState = {
  album: [],
  bands: [],
  bandInfo: [],
  status: 'idle',
  error: null,
};

export const bandsSlice = createSlice({
  name: 'bands',
  initialState,
  reducers: {
    fetchBandsStart: state => {
      state.status = 'loading';
    },
    fetchBandsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.bands = action.payload;
    },
    fetchBandsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    fetchBandsDetailsStart: state => {
      state.status = 'loading';
    },
    fetchBandsDetailsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.bandInfo = action.payload;
    },
    fetchBandsDetailsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    fetchBandsAlbumStart: state => {
      state.status = 'loading';
    },
    fetchBandsAlbumSuccess: (state, action) => {
      state.status = 'succeeded';
      state.album = action.payload;
    },
    fetchBandsAlbumFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    setBands(state, action) {
      state.bands = action.payload;
    }
  },
});

export const { 
  fetchBandsStart, fetchBandsSuccess, fetchBandsFailure,  
  fetchBandsDetailsStart, fetchBandsDetailsSuccess, fetchBandsDetailsFailure,
  fetchBandsAlbumStart, fetchBandsAlbumSuccess, fetchBandsAlbumFailure,
  setBands } = bandsSlice.actions;

export const fetchBands = () => async dispatch => {
  dispatch(fetchBandsStart());
  try {
    const response = await axios.get(URL);
    dispatch(fetchBandsSuccess(response.data));
  } catch (error) {
    dispatch(fetchBandsFailure(error.message));
  }
};

export const fetchBandsDetails = (id) => async dispatch => {
  dispatch(fetchBandsDetailsStart());
  try {
    const response = await axios.get(`${URL}/${id}`);
    dispatch(fetchBandsDetailsSuccess(response.data));
  } catch (error) {
    dispatch(fetchBandsDetailsFailure(error.message));
  }
};

export const fetchBandsAlbum = () => async dispatch => {
  dispatch(fetchBandsAlbumStart());
  try {
    const response = await axios.get('https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/albums');
    dispatch(fetchBandsAlbumSuccess(response.data));
  } catch (error) {
    dispatch(fetchBandsAlbumFailure(error.message));
  }
};



export default bandsSlice.reducer;
