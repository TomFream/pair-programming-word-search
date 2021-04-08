// Pair programming with Mitch Kenward and Tom Fream

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  if (letters.length === 0) return false;

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    }
  // Transpose
  let finalArray = [];
  let holderArray = [];
  let count = 0;
    
  for (let i = 0; i < letters[0].length; i++) {
    for (const elm of letters) {
      holderArray.push(elm[count]);
    }
    finalArray.push(holderArray);
    count += 1;
    holderArray = [];
  }

  const verticalJoin = finalArray.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;