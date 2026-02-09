let globalPlayer={
    id:0,
    name:"john",
    health:100

};

const player1={...globalPlayer};
player1.health=50

console.log(globalPlayer)
console.log(player1)
