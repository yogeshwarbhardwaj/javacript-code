//var c = 300
let a = 300
if(true){
    // block scope and outside this is a global scope 
    let a = 10
    const b = 20


}

//console.log(a);
//console.log(b);
function one(){
    const username = "yogiadityanath"
    function two(){
        const website = "my yt"
        console.log(username);
        
    }
     //console.log(website)
     two()
}
//one()

if(true){
    const username = "yogeshwar bhardwaj"
    if(true){
        const website = "youtube"
        console.log(username + website);
    }   
    //console.log(website);
     
}
//console.log(username);

// +++++++++++ instresting +++++++++++++
//console.log(addtwo(5));

function addtwo (num){
    return num + 1
}

//two(3)
const two = function(num){
    return num + 2
}
//console.log(two(3));





