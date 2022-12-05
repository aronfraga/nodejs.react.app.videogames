export default function filterCrazy(store) {
  return store.filter((data) => data.genre.find((data) => (data === 'Puzzle') || (data === 'Casual')));
}