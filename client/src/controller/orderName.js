export default function orderName(select, store, storeCopy) {
  if(select === 'az') {
    return store.sort((a, b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
      return 0;
    })
  }
  if(select === 'za') {
    return store.sort((a, b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
      return 0;
    })
  }
  return storeCopy;
}