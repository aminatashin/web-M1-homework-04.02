let header = function(a){
    console.log(`-------------------${a}----------------------`)
}
header(21)
let x = 'John'
let y = 'Doe'
console.log('Joh <> Doe')
header(22)
let student = {
    name : "Davide" , 
    surname : "calabri", 
    email : "Davide@gmail.com"

}
console.log(student)

header(23)
delete student.email
console.log(student)

header(24)

let arr = ['a','b','c','e','f','g','d','s','t','o']
console.log(arr)

header(25)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

header(26)

let newArr = []

for (let i= 0 ; i< 101 ; i++){
  
 newArr.push(i)

    
 console.log(newArr)
    
}


let any = function(a,b){
    if(a.length > b.length){
        return a
    }
}




header(30)


let greates = function([a,b],[c,d]){
    if((a+b)>(c+d)){
        return [a,b]
    }else{
        return [c,d]
    }
}
greates([1,2],[3,4])

header(31)
const onLoad = function() {
}
let containerHtml = document.getElementById('container')

header(32)
let tdNode = document.querySelectorAll('td')

header(33)

const tdInside = function(){

let insideVariable = document.querySelectorAll('td')

for (let allTd of insideVariable){
    console.log(allTd.innerText)
}

}
header(34)

const changeHeader = function(name){

    let h1Header = document.getElementById('header')
    h1Header.innerText = `--${name}--`
}
header(36)

let tableChange = function() {
    let tableAccess = document.getElementById('table')

}



