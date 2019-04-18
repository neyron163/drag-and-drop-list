// doing swap in array
export const swap = (array, index, object) => array.splice(index, 1, object);

// clone element from array
export const clone = (array, prevIndex, nextIndex) => {
    const prev = array.slice(prevIndex, prevIndex + 1);
    const next = array.slice(nextIndex, nextIndex + 1);
    return [prev[0], next[0]];
}