// singleton object 
//const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "3434abcd"
tinderuser.name = "yogy"
tinderuser.isloggedin = false

console.log(tinderuser);
const regularuser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yogeshwar",
            lastname: "bhardwaj"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {4:"a",5:"b"}
//const obj4 = {obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2}
//console.log(obj4);
const users = [
    {
        id:1,
        email: "y@gmail.com"
    },
    {
        id:1,
        email: "y@gmail.com" 
    },
    {
         id:1,
        email: "y@gmail.com"
    },
{
     id:1,
        email: "y@gmail.com"
}

]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('islogged'));








