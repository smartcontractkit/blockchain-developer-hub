// @ts-check
/** 
@param {Array} array - The array to get random items from
@param {Number} numItemsToTake - The number of items to get
@returns {Array} - An array of random items from the given array
*/
export function getRandomItemsFromArray(array, numItemsToTake) {
  /** @type {Array}  */
  let result = new Array(numItemsToTake);

  /** @type {number}  */
  let arrayLength = array.length;

  /** @type {Array}  */
  let taken = new Array(arrayLength);

  if (numItemsToTake > arrayLength) return array;
  while (numItemsToTake--) {
    /** @type {number}  */
    const x = Math.floor(Math.random() * arrayLength);

    result[numItemsToTake] = array[x in taken ? taken[x] : x];
    taken[x] = --arrayLength in taken ? taken[arrayLength] : arrayLength;
  }
  return result;
}
