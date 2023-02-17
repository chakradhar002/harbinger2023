// const rankings = (array) => {
//   array.sort((a, b) =>
//     a.ranking < b.ranking ? -1 : a.ranking == b.ranking ? 0 : 1
//   );
//   return array;
// };

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

const aishwarya = {
  name: "Aishwarya",
  ranking: 9,
};

const amol = {
  name: "Amol",
  ranking: 10,
};

const aditya = {
  name: "Aditya",
  ranking: 20,
};

console.log(highestRanking([aishwarya, amol, aditya]));
