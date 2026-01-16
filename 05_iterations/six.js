//const coding = ["js","ruby","java","python","cpp"]
//const values = coding.forEach((item) => {
    //console.log(item)
  //  return item

//})
//console.log(values);

//const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num) => {
  //  return num > 4
//})

//const newNums = []
//myNums.forEach((num) => {
    //if(num > 4){
      //  newNums.push(num)
    //}
//})
//console.log(newNums);

const books = [
    {title:'bookone',genre:'fiction',publish:1981,edition:2004},
    {title:'booktwo',genre:'non fiction',publish:1992,edition:2008},
    {title:'bookthree',genre:'history',publish:1999,edition:2007},
    {title:'bookfour',genre:'non fiction',publish:1989,edition:2010},
    {title:'bookfive',genre:'science',publish:2009,edition:2014},
    {title:'booksix',genre:'fiction',publish:1987,edition:2010},
    {title:'bookseven',genre:'history',publish:1986,edition:1996},
    {title:'bookeight',genre:'science',publish:2011,edition:2016}


];
let userbooks = books.filter((bk) => bk.genre === 'history')
userbooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre === 'history'})

console.log(userbooks);


