import { GET_ALL_GAMES } from '../actions';
import { GET_GAME_DETAILS } from '../actions';
import { GET_ALL_GENRES } from '../actions';
import { POST_NEW_GAME } from '../actions/index';
import { SEARCH_GAME } from '../actions/index';
import { SET_PAGE } from '../actions/index';
import { SET_PLATFORM_SELECTED } from '../actions/index';
import { SET_GENRES_SELECTED } from '../actions/index';
import { SET_SEARCH_STATUS } from '../actions/index';
import { DROP_PLATFORM_SELECTED } from '../actions/index';
import { DROP_GENRES_SELECTED } from '../actions/index';
import { DELETE_GAME_CREATED } from '../actions/index';
import { UPDATE_GAME_CREATED } from '../actions/index';
import { CLEAN_PLATFORM } from '../actions/index';
import { CLEAN_GENRES } from '../actions/index';
import { CLEAN_ALL_GAMES } from '../actions/index';
import { CLEAN_DETAIL_GAME } from '../actions/index';
import { CLEAN_SEARCH_GAME } from '../actions/index';
import { FILTER_BY_GENRE } from '../actions/index';
import { FILTER_BY_STORAGE } from '../actions/index';
import { FILTER_RESET } from '../actions/index';
import { FILTER_BY_GENRE_SEARCH } from '../actions/index';
import { FILTER_BY_STORAGE_SEARCH } from '../actions/index';
import { FILTER_RESET_SEARCH } from '../actions/index';
import { ORDER_BY_NAME } from '../actions/index';
import { ORDER_BY_RATING } from '../actions/index';
import { ORDER_BY_NAME_SEARCH } from '../actions/index';
import { ORDER_BY_RATING_SEARCH } from '../actions/index';

const initialState = {
  allGames: [],
  copyAllGames: [],
  cacheGames: [],
  cacheSearchGame: [],
  gameDetails: [],
  allGenres: [],
  platforms: [],
  genres: [],
  search: [],
  copySearch: [],
  currentPage: 1,
  searchStatus: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES: 
      return { ...state, allGames: action.payload, copyAllGames: [...action.payload] };
    case GET_GAME_DETAILS:
      return { ...state, gameDetails: action.payload };
    case GET_ALL_GENRES:
      return { ...state, allGenres: action.payload };
    case POST_NEW_GAME:
      return { ...state };
    case SEARCH_GAME:
      return { ...state, search: action.payload, copySearch: [...action.payload] };
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_PLATFORM_SELECTED:
      return { ...state, platforms: [...state.platforms, action.payload] };
    case SET_GENRES_SELECTED:
      return { ...state, genres: [...state.genres, action.payload] };
    case SET_SEARCH_STATUS:
      return { ...state, searchStatus: action.payload };
    case DROP_PLATFORM_SELECTED:
      return { ...state, platforms: state.platforms.filter((data) => data.platform !== action.payload) };
    case DROP_GENRES_SELECTED:
      return { ...state, genres: state.genres.filter((data) => data.genres !== action.payload) };
    case DELETE_GAME_CREATED:
      return { ...state };
    case UPDATE_GAME_CREATED:
      return { ...state };
    case CLEAN_PLATFORM:
      return { ...state, platforms: action.payload };
    case CLEAN_GENRES:
      return { ...state, genres: action.payload };    
    case CLEAN_ALL_GAMES:
      return { ...state, allGames: action.payload, copyAllGames: action.payload };   
    case CLEAN_DETAIL_GAME:
      return { ...state, gameDetails: action.payload };
    case CLEAN_SEARCH_GAME:
      return { ...state, search: action.payload, copySearch: action.payload };
    case FILTER_BY_GENRE:
      return { ...state, allGames: action.payload }; 
    case FILTER_BY_STORAGE:
      return { ...state, cacheGames: action.payload, allGames: action.payload };
    case FILTER_RESET:
      return { ...state, allGames: action.payload };
    case FILTER_BY_GENRE_SEARCH:
      return { ...state, search: action.payload };
    case FILTER_BY_STORAGE_SEARCH:
      return { ...state, cacheSearchGame: action.payload, search: action.payload };
    case FILTER_RESET_SEARCH:
      return { ...state, search: action.payload };
    case ORDER_BY_NAME:
      return { ...state, allGames: action.payload };
    case ORDER_BY_RATING:
      return { ...state, allGames: action.payload };
    case ORDER_BY_NAME_SEARCH:
      return { ...state, search: action.payload };
    case ORDER_BY_RATING_SEARCH:
      return { ...state, search: action.payload };
    default: 
      return { ...state };
  } 
}

export default reducer;
