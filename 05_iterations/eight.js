const myNums = [1,2,3]
//const mytotal = myNums.reduce(function(acc,currval){
    //console.log(`acc:${acc} and currval: ${currval}`);
    
    //return acc + currval
//},0)
//console.log(mytotal);
const mytotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(mytotal);


const shoppingcart = [
     {
        itemname : "py course",
        price:999
     },
     {
        itemname : "js course",
        price: 1000
     },
     {
        itemname : "java course",
        price:2000
     },
     {
        itemname : " cpp course",
        price:3000
     }

]
const pricetopay = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log(pricetopay);


