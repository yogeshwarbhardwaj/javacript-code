const name = "yogesh"
const repocount = 50
//console.log(name + repocount + "value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gamename = new String("yogesh.bh")
//console.log(gamename[0]);
//console.log(gamename.__proto__);
//console.log(gamename.length);
//console.log(gamename.toUpperCase);
//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('h'));
const newString = gamename.substring(-8,4)
console.log(newString);
const anotherstring = gamename.slice(-8,4)
console.log(anotherstring);
const newStringone = "  suresh "
console.log(newStringone.trim())
console.log(newStringone);
const url = "https:yogesh.com/yogesh%25 bhardwaj"
console.log(url.replace('%25',''));
console.log(url.includes('yog'))
console.log(gamename.split('-'))












