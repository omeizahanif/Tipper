const billInput = document.getElementById("bill");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twenty_five");
const fifty = document.getElementById("fifty");
const customInput = document.getElementById("custom").value;
const numPeople = document.getElementById("people").value;
const tipPerPerson = document.getElementById("tip_person");
const totalPerPerson = document.getElementById("total_person");
const resetBtn = document.getElementById("reset");
let tipAmount = 0;
const tipAmountPerPerson = tipAmount / numPeople;
const totalAmoutPerPerson = (billInput + tipAmount) / numPeople;


function calcTipAmount(bill, tip) {
    return bill * tip
}

function selectTip(percent) {
    switch(percent) {
        case 5:
            return 5 / 100;
            break;
        case 10:
            return 10 / 100;
            break;
        case 15:
            return 15 / 100;
            break;
        case 25:
            return 25 / 100;
            break;
        case 50:
            return 50 / 100;
            break;
        default:
            return percent / 100;

    }
}

five.addEventListener("click", function(e) {
    tipAmount = calcTipAmount(parseFloat(billInput.value), selectTip(5));
    console.log(tipAmount);
})

ten.addEventListener("click", function(e) {
    tipAmount = (calcTipAmount(parseFloat(billInput.value), selectTip(10))).toFixed(2);
    console.log(tipAmount)
})

fifteen.addEventListener("click", function(e) {
    tipAmount = calcTipAmount(parseFloat(billInput.value), selectTip(15));
    console.log(tipAmount)
})

twentyFive.addEventListener("click", function(e) {
    tipAmount = calcTipAmount(parseFloat(billInput.value), selectTip(25));
    console.log(tipAmount)
})

fifty.addEventListener("click", function(e) {
    tipAmount = calcTipAmount(parseFloat(billInput.value), selectTip(50));
    console.log(tipAmount)
})






