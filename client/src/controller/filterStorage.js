export default function filterStorage(select, store) {  
  if(select !== 'All'){
    if(select === 'Created') {
      return store.filter((data) => data.created === true);
    } else {
      return store.filter((data) => data.created === false);
    }
  }
  return store;
}