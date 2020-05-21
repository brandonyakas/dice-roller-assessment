let dieRolls = [] 

let rollButton = document.querySelector("#roll")

let showAllButton = document.querySelector("#show-all")

let sumOfRolls = document.querySelector("#sum")

let dice = document.querySelector("#num-of-dice")

let allRolls = document.querySelector("#all-rolls")

let allRollNumbers=[]

rollButton.addEventListener("click", function() {

    let numOfDice = dice.value 

    let index = 0

    dieRolls = []

    while (index < numOfDice) {

        index ++;

        let x = Math.floor(Math.random() *6) + 1;

        console.log(x)

        dieRolls.push(x)

        console.log(dieRolls)
    }

    sumOfRolls.innerHTML = dieRolls.reduce((a, b) => a + b, 0)

} )

showAllButton.addEventListener("click", function() {

    numOfDice = dice.value 

    index = 0

    while (index < numOfDice) {

    index ++;
    
    allRollNumbers.push('<li>' + dieRolls[0] + '</li>')

    dieRolls.shift()

    }

    console.log(dieRolls)

    allRolls.innerHTML = (allRollNumbers)

} )

let resetButton = document.querySelector("#reset")

resetButton.addEventListener("click", function() {

    allRolls.innerHTML = 0;

    sumOfRolls.innerHTML = 0;

} )

