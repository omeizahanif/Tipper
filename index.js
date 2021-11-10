const billInput = document.getElementById("bill");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twenty_five");
const fifty = document.getElementById("fifty");
const customInput = document.getElementById("custom");
const numPeople = document.getElementById("people");
const tipPerPerson = document.getElementById("tip_person");
const totalPerPerson = document.getElementById("total_person");
const resetBtn = document.getElementById("reset");
const tipCategory = document.getElementsByClassName("tip-category")[0];
console.log(tipCategory.children);

function tipCalculator(tipPercent) {
    let bill = parseFloat(billInput.value);
    let numberOfPeople = parseInt(numPeople.value);
    let tipAmount = bill * (tipPercent / 100);
    if (numberOfPeople) {
        let tipForEachPerson = (tipAmount / numberOfPeople);
        tipPerPerson.textContent = `$${tipForEachPerson.toFixed(2)}`;
        totalPerPerson.textContent = `$${((bill/numberOfPeople) + tipForEachPerson).toFixed(2)}`;
    } else {
        return false;
    }
    
    
    return true;
}


five.addEventListener("click", function(e) {
    tipCategory.children.forEach(function(child) {
        child.classList.remove("active");
        five.classList.add("active");
    })
    
    tipCalculator(5);
})

ten.addEventListener("click", function(e) {
    tipCalculator(10);
})

fifteen.addEventListener("click", function(e) {
    tipCalculator(15);
})

twentyFive.addEventListener("click", function(e) {
    tipCalculator(25);
})

fifty.addEventListener("click", function(e) {
    tipCalculator(50);
})

customInput.addEventListener("input", function(e) {
    let customValue = parseFloat(customInput.value);
    tipCalculator(customValue);
})





