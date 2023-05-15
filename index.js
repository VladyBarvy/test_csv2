import _ from 'lodash';

export default function solution(content){
  // BEGIN
  //console.log(content);

  // step 1
  const data = content.split('\r\n');
  const info = data.slice(1);
  const numberOfChessGame = info.length;
  const normData = info.map(game => game.split(','));
  console.log(numberOfChessGame);

  // step 2
  const ratedGamesTrue = normData.filter((game) => game[1] === 'TRUE');
  const ratedGamesFalse = normData.filter((game) => game[1] === 'FALSE');
  const numberRGT = ratedGamesTrue.length;
  const numberRGF = ratedGamesFalse.length;
  const ratio_True_False = `${numberRGT} : ${numberRGF}`;
  console.log(ratio_True_False);

  // step 3
console.log(normData[1][13])


  // END
}