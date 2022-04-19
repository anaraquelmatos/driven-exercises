const luckyNumber = randomNumber(2,12);
const firstNumber = randomNumber(1,2);
const secondNumber = randomNumber(1,6);

console.log(`Seu número da sorte é: ${luckyNumber}`);
console.log("Jogando dados...");

setTimeout(() => {
    console.log(`Você tirou ${firstNumber} no primeiro dado`);
}, 2000)

setTimeout(() => {
    console.log(`Você tirou ${secondNumber} no segundo dado`);
}, 4000)

setTimeout(() => {
    const sum = firstNumber + secondNumber;
    if(firstNumber === secondNumber || sum === luckyNumber){
        console.log(`Você ganhou`);
    }else{
        console.log(`Você perdeu`);  
    }
    
}, 5000)

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}