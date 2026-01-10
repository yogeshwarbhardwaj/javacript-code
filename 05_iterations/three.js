// for of 
//[" "," "," "]
//[{},{},{}]
const arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
    
}
const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
    
    
}

// Maps
const map = new Map()
map.set('In', "india")
map.set('us',"united states of america")
map.set('fr', "france")
map.set('IN', "india")
//console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
    
}

const myobject = {
    game1: 'NFS',
    game2: 'spiderman'
}
///for (const [key,value] of myobject) {
   // console.log(key,':-', value);
    
    
//}
