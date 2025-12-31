const user = {
    username: "yogeshwar",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
       // console.log(this);
        
        
    }
}
//user.welcomemessage()
//user.username = "yogi"
//user.welcomemessage()
// this isused to access current context
//console.log(this);

//function chai(){
  //  let username = "hitesh"
    //console.log(this.username);
    
//}
//chai()
//const chai = function chai(){
  //  let username = "hitesh"
    //console.log(this.username);
    
//}
//chai ()
//const chai = () =>{
   // let username = "yogeshwar"
    //console.log(this.username);
    
//}
//chai()

// arrow function
//const addtwo = (num1,num2) => {
    //return num1 + num2
//}
//console.log(addtwo(2,3))

// implicit function
//const addtwo = (num1,num2) => num1 + num2
//const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username : "yogeshwar"})
console.log(addtwo(2,3))



