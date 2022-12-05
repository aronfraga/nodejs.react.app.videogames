export default function filterGenre(select, store) {
    if(select !== 'All') {
      return store.filter((data) => data.genre.find((data) => data === select));
    }
  return store;
}