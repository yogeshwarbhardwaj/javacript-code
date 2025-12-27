  const hinduheros = ['shivaji','maharanapratap','sambhaji']
  const sikhheros = ['guruteghbahadur', 'gururgovindsingh','babafatehsingh']
  //hinduheros.push(sikhheros)
 // console.log(hinduheros);
  //console.log(hinduheros[3] [2]);
  //const allheros = hinduheros.concat(sikhheros)
  //console.log(allheros);
  const allnewheros = [...hinduheros,...sikhheros]
  //console.log(allnewheros);
  const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
  const real_another_array = another_array.flat(Infinity)
  console.log(real_another_array);

  console.log((Array.isArray("hitesh")));
  console.log((Array.from("hitesh")));
  console.log(Array.from({name:"hitesh"})); // interesting
  let score = 100
  let score1 = 200
  let score2 = 300
  console.log(Array.of(score1,score2,score));
  
  
  

  

  
  
   