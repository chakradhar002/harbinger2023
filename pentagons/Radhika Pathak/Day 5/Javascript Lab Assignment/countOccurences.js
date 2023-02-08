// approach 1
function countOccurance(arrayToSearch, elementsToSearch) {
  document.write('<br>arrayToSearch: ', arrayToSearch);
  document.write('<br>elementsToSearch: ', elementsToSearch);
  let count = 0;
  for(let curElement of arrayToSearch) {
    if(curElement === elementsToSearch) {
      count++;
    }
  }
  document.write('<br>search count:', count);
  return count;
} 

// approach 2 using ternary operator
/*function count(arrayToSearch, elementsToSearch) {

  return arrayToSearch.reduce((countAccumulator, curentSearchElement) => {
    let countOccurances = (curentSearchElement === elementsToSearch) ? 1 : 0;
     document.write('countAccumulator', countAccumulator, 'arrayToSearch', arrayToSearch, 'elementsToSearch', elementsToSearch,);
    return countAccumulator + countOccurances;
  },0)
}*/

const myarray = [1, 2, 3,4,5,6,7,5,6,5];
const count_occur = (countOccurance(myarray, 5));
document.write('<br>Count: ', count_occur);

/*const ageArray = [21, 25, 22, 25, 30, 25, 30];
const ageCount = (count(ageArray, -25));
document.write('ageCount: ', ageCount);*/