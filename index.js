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

