export default function orderRating(select, store, storeCopy) { 
    if(select === 'lower') return store.sort((a, b) => a.rating - b.rating);
    if(select === 'higher') return store.sort((a, b) => b.rating - a.rating);
  return storeCopy;
}