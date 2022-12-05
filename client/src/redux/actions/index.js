import axios from 'axios';
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_GAME_DETAILS = 'GET_GAME_DETAIL';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const POST_NEW_GAME = 'POST_NEW_GAME';
export const SEARCH_GAME = 'SEARCH_GAME';
export const SET_PAGE = 'SET_PAGE_SEARCH';
export const SET_PLATFORM_SELECTED = 'SET_SELECTED';
export const SET_GENRES_SELECTED = 'SET_GENRES_SELECTED';
export const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS';
export const DROP_PLATFORM_SELECTED = 'DROP_PLATFORM_SELECTED';
export const DROP_GENRES_SELECTED = 'DROP_GENRES_SELECTED';
export const DELETE_GAME_CREATED = 'DELETE_GAME_CREATED';
export const UPDATE_GAME_CREATED = 'UPDATE_GAME_CREATED';
export const CLEAN_PLATFORM = 'CLEAN_SELECT';
export const CLEAN_GENRES = 'CLEAN_GENRES';
export const CLEAN_ALL_GAMES = 'CLEAN_ALLGAMES';
export const CLEAN_DETAIL_GAME = 'CLEAN_DETAIL_GAME';
export const CLEAN_SEARCH_GAME = 'CLEAN_SEARCH_GAME';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_STORAGE = 'FILTER_BY_STORAGE';
export const FILTER_RESET = 'FILTER_RESET';
export const FILTER_BY_GENRE_SEARCH = 'FILTER_BY_GENRE_SEARCH';
export const FILTER_BY_STORAGE_SEARCH = 'FILTER_BY_STORAGE_SEARCH';
export const FILTER_RESET_SEARCH = 'FILTER_RESET_SEARCH';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const ORDER_BY_NAME_SEARCH = 'ORDER_BY_NAME_SEARCH';
export const ORDER_BY_RATING_SEARCH = 'ORDER_BY_RATING_SEARCH';

export const getAllGames = () => {
  return async (dispatch) => {
    const response = await axios.get('/videogames');
    return dispatch({ type: GET_ALL_GAMES, payload: response.data });
  }
}

export const getGameDetails = (id) => {
  return async (dispatch) => {
    const response = await axios.get('/videogame/' + id);
    return dispatch({ type: GET_GAME_DETAILS, payload: response.data });
  }
}

export const getAllGenres = () => {
  return async (dispatch) => {
    const response = await axios.get('/genres');
    return dispatch({ type: GET_ALL_GENRES, payload: response.data });
  }
}

export const postNewGame = (data) => {
  return async (dispatch) => {
    await axios.post('/videogames', data);
    return dispatch({ type: DELETE_GAME_CREATED });
  }
}

export const searchGame = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/videogames?name=' + data);
      return dispatch({ type: SEARCH_GAME, payload: response.data });
    } catch (error) {
      return dispatch({ type: SEARCH_GAME, payload: [] });
    }
  }
}

export const deleteGameCreated = (id) => {
  return async (dispatch) => {
    await axios.delete('/videogame/' + id);
    return dispatch({ type: DELETE_GAME_CREATED });
  }
}

export const updateGameCreated = (data, id) => {
  return async (dispatch) => {
    await axios.put('/videogame/' + id, data);
    return dispatch({ type: UPDATE_GAME_CREATED });
  }
}

export const setPage = (data) => {
  return (dispatch) => {
    return dispatch({ type: SET_PAGE, payload: data });
  }
}

export const setPlatformSelected = (data) => {
  return (dispatch) => {
    return dispatch({ type: SET_PLATFORM_SELECTED, payload: data });
  }
}

export const setGenresSelected = (data) => {
  return (dispatch) => {
    return dispatch({ type: SET_GENRES_SELECTED, payload: data });
  }
}

export const setSearchStatus = (data) => {
  return (dispatch) => {
    return dispatch({ type: SET_SEARCH_STATUS, payload: data });
  }
}

export const dropPlatformSelected = (data) => {
  return (dispatch) => {
    return dispatch({ type: DROP_PLATFORM_SELECTED, payload: data });
  }
}

export const dropGenresSelected = (data) => {
  return (dispatch) => {
    return dispatch({ type: DROP_GENRES_SELECTED, payload: data });
  }
}

export const cleanPlatforms = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_PLATFORM, payload: [] });
  }
}

export const cleanGenres = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_GENRES, payload: [] });
  }
}

export const cleanAllGames = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_ALL_GAMES, payload: [] });
  }
}

export const cleanDetailGame = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_DETAIL_GAME, payload: [] });
  }
}

export const cleanSearchGame = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAN_SEARCH_GAME, payload: [] });
  }
}

export const filterByGenre = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_GENRE, payload: data });
  }
}

export const filterByStorage = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_STORAGE, payload: data });
  }
}

export const filterReset = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_RESET, payload: data });
  }
}

export const filterByGenreSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_GENRE_SEARCH, payload: data });
  }
}

export const filterByStorageSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_STORAGE_SEARCH, payload: data });
  }
}

export const filterResetSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_RESET_SEARCH, payload: data });
  }
}

export const orderByName = (data) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_BY_NAME, payload: data });
  }
}

export const orderByRating = (data) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_BY_RATING, payload: data });
  }
}

export const orderByNameSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_BY_NAME_SEARCH, payload: data });
  }
}

export const orderByRatingSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_BY_RATING_SEARCH, payload: data });
  }
}




