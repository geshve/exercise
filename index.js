var title = "Titanic";
// console.log(title)
let sum = 0;
// console.log(sum)
let boolean = true;
// console.log(boolean)
const title3 = "192.168.0.2/255.255.255.0";
// console.log(title3)
let array = [
    sum, title3, boolean
]
// console.log(array)
let object = {
    sum: 40,
    title3: "bruv",
    boolean: true
}
//console.log(object)
const displayItems = (passedArray) => {
    for (let item of passedArray) {
    console.log(item)
    }
}
displayItems(array)

function func(){
    return "Success"
}

const is0dd = () => {
    return "Success"
}

let data = [
    10,
    12,
    34,
    67,
    5,
    34,
    99,
    99,
    100
]

let filteredData = [];
for(let element of data){
    if (element > 15){
        filteredData.push(element)
    }
}
//console.log(filteredData)

const filteredArray = data.filter((element )=>{
    if (element >= 34 && element <= 80){
        return element;
    }
})
console.log(filteredArray)

const mappedData = data.map((element) => {
    if(element === 34){
        element = 43
    }
    return element
})
//console.log(mappedData)

const found = data.find((element) =>{
    if (element === 99){
        return element
    }
})

console.log(found)