let arr = [
    {
        name: 'ELBEKJON'
    },

    {
        name: 'ORIF'
    },

    {
        name: 'javohir'
    },

    {
        name: 'wer'
    },

    {
        name: 'SARVAR'
    },

    {
        name: 'GULCHEHRA'
    },

    {
        name: 'JOB'
    },

    {
        name: 'MALIK'
    }

]
let new1 = []
function user(hhh){
// let new1 = []
for( let i = 0; i < arr.length; i++){
    if(arr[i].name.length > 5){
        new1.push(arr[i].name)
    }
}
}
user()
console.log(new1, 'Ismlari uzuligi 5 dan katta');

let new2 = []
function addNew(subject){
for( let i = 0; i < arr.length; i++){
    if(arr[i].name.length < 5){
        new2.push(arr[i].name)
    }
}
}
addNew()
console.log(new2, 'Ismlari uzuligi 5 dan kichik');


let new3 = []
function addOld(){
for( let i = 0; i < arr.length; i++){
    if(arr[i].name.length == 5){
        new3.push(arr[i].name)
    }
}
}
addOld()
console.log(new3, 'Ismlari uzuligi 5 ga teng');

// // -------- 2- usul ------------


for(let i = 0; i < arr.length; i++){
    if(arr[i].name.length > 5){
        console.log(arr[i].name, "ismini uzunligi 5 dan katta");
    }
    else if(arr[i].name.length = 5 ){
        console.log(arr[i].name, "ismini uzunligi 5 ga teng"); 
    }
    else {
        console.log(arr[i].name, '5 dan kichik');
    }
}


function sayHello(hhh){
for(let i = 0; i < arr.length; i++){
    if(arr[i].name.length > 5){
        console.log(arr[i].name, "ismini uzunligi 5 dan katta");
    }
    else if(arr[i].name.length = 5 ){
        console.log(arr[i].name, "ismini uzunligi 5 ga teng"); 
    }
    else {
        console.log(arr[i].name, '5 dan kichik');
    }
}
}

sayHello()