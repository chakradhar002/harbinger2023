const highestRanking = (array) => {
    array.sort((first, second) => {
      if (first.ranking < second.ranking) {
        return `${first.name} has highest rank`;
      } else if (first.ranking == second.ranking) {
        return `Both have same rank`;
      } else {
        return `${second.name} has highest rank`;
      }
    });
    return array;
  };
  
  const obj1 = {
    name: "abc",
    ranking: 9,
  };
  
  const obj2 = {
    name: "def",
    ranking: 10,
  };
  
  const obj3 = {
    name: "xyz",
    ranking: 2,
  };
  
  console.log(highestRanking([obj1,obj2,obj3]));
  