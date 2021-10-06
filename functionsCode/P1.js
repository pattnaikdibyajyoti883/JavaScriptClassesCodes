
function myNewCar(car)
{
    car.model="Audi";
    car.color = "white";
    car.year = 2021
}
var myCar = {
    model:"honda",
    color:"grey",
    year:1998
}
myNewCar(myCar);
console.log(myCar);
// output
// { model: 'Audi', color: 'white', year: 2021 }