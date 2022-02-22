let title: string = "hui"
//let title2: boolean = "jokes"
let age: number = 10
let boolean: boolean = true
let array: string[] = ["dasjdba", "syvdays", "iasduhau"]

type User ={
    id: number;
    name: string;
    isActive: boolean;
}

let user: User = {
    id: 1,
    name: "Eiden",
    isActive: true
}

type Movie = {
    id: number,
    name: string,
    main_actor: string,
    film: string
}
console.log(user.name)

enum CAR_TYPES{
    SEDAN= "sedan",
    COMBI = "combi",
    HATCHBACK = "hatchback"
}

class Car {
    protected type: CAR_TYPES = "" as CAR_TYPES;

    constructor() {
    }

    setType(type: CAR_TYPES): void{
        this.type = type
        console.log(this.type)
    }
    getType(): CAR_TYPES{
        return this.type
    }
}

enum MERCEDES_COLOR_TYPES{
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}

class Mercedes extends Car{
    private color: MERCEDES_COLOR_TYPES = "" as MERCEDES_COLOR_TYPES;

    setColor(color: MERCEDES_COLOR_TYPES): void{
        this.color = color
    }
    getColor(): MERCEDES_COLOR_TYPES{
        return this.color
    }
}

const car = new Car();
car.setType(CAR_TYPES.SEDAN)
//console.log(car.getType());
const mercedes = new Mercedes();
mercedes.setType(CAR_TYPES.COMBI);
mercedes.setColor(MERCEDES_COLOR_TYPES.GREEN)
//console.log(mercedes.getType(),mercedes.getColor())

const wait = async () => {
    return new  Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(3)
        },2000)
    })
}

(async () =>{
    console.log(1)
    console.log(2)
    console.log(await wait())
    console.log(4)
})()
