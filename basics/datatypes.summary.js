//primitie datatype
// 7 types : string,number , boolean , null 
const score = 100
const scoreValue = 100.3
const isloggedin = false
const outsidetemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(anotherid == id);
const bigNumber = 345356543n
// reference (non primitive)
// array, objects,functions
// declaration of array
const heros = ["maharanpratap", "shivaji" , " gurugovindsingh"];
// objects
let myobj = {
      name: "yogesh",
      age:  22,

}
// functions
const myfunction = function(){
    console.log("hello yogi")
}
console.log(typeof bigNumber)
console.log(typeof outsidetemp);


// *****************
// stack(primitive) , heap(non primitive)
let myyoutubename = "yogeshwarbhardwaj"
let anothername = myyoutubename
anothername = "chai or code"
console.log(myyoutubename)
console.log(anothername);
let userone = {
    email:"bhardwajyogeshwar@gmail.com",
    upi : "user@ybl"

}
let usertwo = userone
usertwo.email = "bhardwaj@gmail.com"
console.log(userone.email)
console.log(usertwo.email);





