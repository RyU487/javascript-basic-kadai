const date = new Date(2022, 8, 22);
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(year+'年'+ month+'月'+day+'日');