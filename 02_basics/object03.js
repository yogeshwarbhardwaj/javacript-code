// singleton
//object.create 
// object literals
const mysym = Symbol("key1")
const jsuser = {
    name: "yogeshwar",
    "full name" : "yogeshwar bhadwaj",
    [mysym] : "mykey1",
    age:20,
    location: "jaipur",
    email: "bhardwajyogeshwar@google.com",
    isloggedin:false,
    lastlogindays:["Monday","saturday"]

}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);
jsuser.email = "yogesh@chatgpt.com"
Object(jsuser)
jsuser.email = "yogesh@linkedin.com"
console.log(jsuser);
jsuser.greeting = function() {
    console.log("hello js user");
    
    
}
console.log((jsuser.greeting()));
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jsuser.greetingtwo());







