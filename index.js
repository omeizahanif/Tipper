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
    } else {
        alert("Number of people can't be zero")
    }
    
    return true;
}

function setActiveState(id) {
    const tipSelectors = [...tipCategory.children];
    for (let tipSelector of tipSelectors) {
        tipSelector.classList.remove("active");
    }
    id.classList.add("active");
}

five.addEventListener("click", function(e) {
    setActiveState(five);
    //tipCalculator(5);
})

ten.addEventListener("click", function(e) {
    setActiveState(ten);
    //tipCalculator(10);
})

fifteen.addEventListener("click", function(e) {
    setActiveState(fifteen);
    //tipCalculator(15);
})

twentyFive.addEventListener("click", function(e) {
    setActiveState(twentyFive);
    //tipCalculator(25);
})

fifty.addEventListener("click", function(e) {
    setActiveState(fifty);
    //tipCalculator(50);
})

customInput.addEventListener("input", function(e) {
    let customValue = parseFloat(customInput.value);
    setActiveState(customInput);
    //tipCalculator(customValue);
})

/*numPeople.addEventListener("input", function(e) {

})*/

resetBtn.addEventListener("click", function(e) {
    billInput.value = "";
    customInput.value = "";
    numPeople.value = "";
})




