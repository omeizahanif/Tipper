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
const tipSelectors = [...tipCategory.children];
/**
 * a function to calculate the tip amount,
 * the tip amount per person and the total
 * bill per person.
 * @param {number} tipPercent 
 */
function tipCalculator(tipPercent) {
    let bill = parseFloat(billInput.value);
    let numberOfPeople = parseInt(numPeople.value);
    let tipAmount = bill * (tipPercent / 100);
    if (numberOfPeople) {
        let tipForEachPerson = (tipAmount / numberOfPeople);
        tipPerPerson.textContent = `$${tipForEachPerson.toFixed(2)}`;
        totalPerPerson.textContent = `$${((bill/numberOfPeople) + tipForEachPerson).toFixed(2)}`;
    }
    
    return true;
}

function setActiveState(id) {
    if (id !== customInput) customInput.value = "";
    for (let tipSelector of tipSelectors) {
        tipSelector.classList.remove("active");
    }
    id.classList.add("active");
}

five.addEventListener("click", function(e) {
    setActiveState(five);
    return tipCalculator(5);
})

ten.addEventListener("click", function(e) {
    setActiveState(ten);
    return tipCalculator(10);
})

fifteen.addEventListener("click", function(e) {
    setActiveState(fifteen);
    return tipCalculator(15);
})

twentyFive.addEventListener("click", function(e) {
    setActiveState(twentyFive);
    return tipCalculator(25);
})

fifty.addEventListener("click", function(e) {
    setActiveState(fifty);
    return tipCalculator(50);
})

customInput.addEventListener("input", function(e) {
    let customValue = parseFloat(customInput.value) || 0;
    setActiveState(customInput);
    return tipCalculator(customValue);
})

numPeople.addEventListener("input", function(e) {
    let customValue = parseFloat(customInput.value) || 0;
    if (customValue > 0 ) return tipCalculator(customValue);

    for (let tipSelector of tipSelectors) {    
        if (tipSelector.classList.contains("active")) {
            let tipValue = parseInt(tipSelector.dataset.number);
            return tipCalculator(tipValue);
        }
    }
})

resetBtn.addEventListener("click", function(e) {
    billInput.value = "";
    customInput.value = "";
    numPeople.value = "";
    tipPerPerson.textContent = `$0.00`;
    totalPerPerson.textContent = `$0.00`;
})




