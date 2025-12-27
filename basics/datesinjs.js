// dates 
let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toDateString);
//console.log(mydate.toLocaleString);
//console.log(typeof mydate);






//let mycreateddate = new Date(2025,0,3)
//console.log(mycreateddate);
//let mycreateddate = new Date(2023,0,23,5,3)
//console.log(mycreateddate.toLocaleString());
let mycreateddate = new Date("01-14-2023")
//console.log(mycreateddate);
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate =  new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time `
newDate.toLocaleString('deafault',{
    weekday: "long"
     
})   
















