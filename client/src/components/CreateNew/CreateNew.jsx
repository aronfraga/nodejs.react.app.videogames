import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { allPlatforms } from '../../memoryPlatforms';
import { getAllGenres } from '../../redux/actions/index';
import { setPlatformSelected } from '../../redux/actions/index';
import { dropPlatformSelected } from '../../redux/actions/index';
import { setGenresSelected } from '../../redux/actions/index';
import { dropGenresSelected } from '../../redux/actions/index';
import { postNewGame } from '../../redux/actions/index';
import { cleanPlatforms } from '../../redux/actions/index';
import { cleanGenres } from '../../redux/actions/index';
import { cleanAllGames } from '../../redux/actions/index';
import { getAllGames } from '../../redux/actions';
import NavBarBack from '../NavBarBack/NavBarBack';
import Loader from '../Loader/Loader';
import Select from './Select/Select';
import './CreateNew.css';

export default function CreateNew() {
  
  const memoryPlatforms = allPlatforms;
  const dispatch = useDispatch();
  const history = useHistory();
  const memoryGames = useSelector((state) => state.allGames);
  const storeGenres = useSelector((state) => state.genres);
  const storePlatforms = useSelector((state) => state.platforms);
  const memoryGenres = useSelector((state) => state.allGenres)?.map((data) => data.name);
  const [ check, setCheck ] = useState('');
  const [ checkContainer, setCheckContainer ] = useState(false);
  let [ input, setInput ] = useState({
    name: '',
    release_date: '',
    image: '',
    rating: '',
    description: '',
  });

  useEffect(()=> {
    dispatch(getAllGenres());
    return () => {
      dispatch(getAllGames());  
      dispatch(getAllGenres());
    }
  }, [dispatch]);

  function handlerInput(event) {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
  }
  
  function handlerValidate() {
    const error = {};
    const nameRepeated = memoryGames.filter((data) => data.name.toLowerCase() === input.name.toLowerCase());
    if(!input.name) error.name = true;
    if(Object.entries(nameRepeated).length > 0) error.name = true;
    if(!input.release_date) error.release_date = true;
    if(!input.image) error.image = true;
    if(!((!input.rating && isNaN(input.rating)) || ((input.rating > 0 && input.rating < 6)))) error.rating = true;
    if(!input.description) error.image = true;
    if(storePlatforms.length === 0) error.Platforms = true;
    if(storeGenres.length === 0) error.genres = true;
    return Object.entries(error).length === 0?true:false;
  } 

  function handlerRating() {
    return (!input.rating && isNaN(input.rating)) || ((input.rating > 0 && input.rating < 6))?true:false;
  }

  function handlerAdd(event) {
    event.preventDefault();
    if(handlerValidate()){
      const cacheGenres = storeGenres.map((data) => data.genres);
      const cachePlatforms = storePlatforms.map((data) => data.platform);
      const cache = {
        name: input.name,
        release_date: input.release_date,
        image: input.image,
        rating: parseInt(input.rating),
        platforms: cachePlatforms,
        genre: cacheGenres,
        description: input.description 
      }
      dispatch(postNewGame(cache));
      setCheck(...check, 'The game was saved, Please Wait...');
      setCheckContainer(...check, true)
      setTimeout(() => {dispatch(cleanPlatforms())}, 2500);
      setTimeout(() => {dispatch(cleanGenres())}, 2500);
      setTimeout(() => {dispatch(cleanAllGames())}, 2000);
      setTimeout(() => {history.goBack()}, 2300);
    }
  }

  if(memoryGenres.length > 0) {
    return (
      <>
        <nav className='createNewNavBarBack'>
          <NavBarBack />
        </nav>
        <div className='spaceCreateNew'>
          <div className={checkContainer?'formContainerValidate':'formContainer'}>
            <h1 className='formTitle'>CREATE NEW GAME</h1>
            <form onSubmit={(event) => handlerAdd(event)}>
              <div className='formInputContainer'>
                <input placeholder='Choise a name...' className={!input.name?'inputBoxError':'inputBox'} type='text' name='name' onChange={handlerInput} value={input.name} />
              </div>
                <div className='formInputContainer'>
                <input className={!input.release_date?'inputBoxError':'inputBox'} type="date" name='release_date' onChange={handlerInput} value={input.release_date} />
              </div>
              <div className='formInputContainer'>
                <input placeholder='Paste an image link...' className={!input.image?'inputBoxError':'inputBox'} type='text' name='image' onChange={handlerInput} value={input.image} />
              </div>
              <div className='formInputContainer'>
                <input placeholder='Put a rating between 1 and 5...' className={handlerRating()?'inputBox':'inputBoxError'} type='text' name='rating' onChange={handlerInput} value={input.rating} />
              </div>
              <div>
                <Select memory={memoryPlatforms} set={setPlatformSelected} drop={dropPlatformSelected} store={storePlatforms} type={'platform'} key={0} />
                <Select memory={memoryGenres} set={setGenresSelected} drop={dropGenresSelected} store={storeGenres} type={'genres'} key={1} />
              </div>
              <div className='formInputContainer'>
                <textarea placeholder='We need a little description...' className={!input.description?'textBoxError':'textBox'} name='description' onChange={handlerInput} value={input.description} />
              </div>
              <button className={handlerValidate()?'btnForm':'btnFormDisabled'} type='submit' disabled={!handlerValidate()}>Create</button>
              <h1 className='titleResponse'>{check}</h1>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    return <Loader /> 
  }
}
