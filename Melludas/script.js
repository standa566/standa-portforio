//1
gsap.registerPlugin(ScrollTrigger);
//2 tvorba animace
gsap.to('.box',{
    x: 200,
    duration: 1
})





let promenna1 =1;
var promenna2 ='ahoj';

function vypisPrumer(znamkaMatika, znamkaWebovka, znamkachemie){
var prumer = znamkaMatika + znamkaWebovka + znamkachemie /3;
console.log(prumer);
}
vypisPrumer(2,1,2)
// || nebo
// != neni rovno 
// == rovno
let array =[2,1,2]
function vypisPrumer(array){
   if(array == null || array === null){
    alert("pozor, je tu null")
   }else{
    for(let i = 0; i <array.lenght; i++)
    {
    console.log(array[i])
    }
   }
}
    vypisPrumer(pole)
    vypisPrumer(polePrazne);