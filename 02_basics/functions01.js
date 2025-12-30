function myname(){
    console.log("yogeshwar");
    
}
// myname this is reference of function and my name() this is execution of function
//myname()
//function addtwonumbers(number1, number2){
  //  console.log(number1 + number2);
    
//}
function addtwonumbers(number1, number2){
//let result = number1 + number2
//return result
return number1 + number2


    
}
 const result = addtwonumbers(3,5)
 //console.log("result :", result);

 function loginusermessage( username = "yogi"){
    if(!username ){
        console.log("please enter a user name ")
        return 
    }
    return `${username} just logged in`
 }
 //console.log(loginusermessage("yogeshwar"));
 //console.log(loginusermessage()) // undefined just logged in
 

 function calculatorcartprice(val1, val2,...num1){
    return num1

 }
 //console.log(calculatorcartprice(200,300,400 ,500));


 const user = {
    username: "yogeshwar",
    price : 199
 }
 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
 handleobject(user)


 