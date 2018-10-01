function getReceipt() {
    var text1 = "<h3>You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");


    for (var i = 0; i <sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize+"<br/>";
        }
    }

    if (selectedSize === "Personal Pie") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pie") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pie") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pie") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;

    getSauce(runningTotal, text1);
   
};

function getSauce(runningTotal, text1) {

    var sauceArray = document.getElementsByClassName("sauce");
    for(var i = 0; i<sauceArray.length; i++) {
        if (sauceArray[i].checked) {
            var sauceSelected = sauceArray[i].value;
            text1 += sauceSelected+"<br/>";
        }
    }

    getCrust(runningTotal, text1);
}

function getCrust(runningTotal, text1){
    var crustCost = 0;
    var crustArray = document.getElementsByClassName("crust");

    for (var crust = 0; crust<crustArray.length; crust++) {
        if (crustArray[crust].checked) {
            var crustSelected = crustArray[crust].value;
            text1 += crustSelected+"<br/>";
        }
    }

    if (crustSelected === "Cheese Stuffed Crust") {
        crustCost = 3;
    }

    runningTotal += crustCost;
    getCheese(runningTotal, text1);
};

function getCheese(runningTotal, text1) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");

    for (var ch = 0; ch<cheeseArray.length; ch++) {
        if (cheeseArray[ch].checked) {
            var cheeseSelection = cheeseArray[ch].value;
            text1 += cheeseSelection+"<br/>";
        }
        if (cheeseSelection === "Extra Cheese") {
            cheeseTotal = 3;
        }
    }
    runningTotal += cheeseTotal;
    getVeggies(runningTotal, text1);
};

function getVeggies(runningTotal, text1) {
    var veggieTotal = 0;
    var selectedVeggies = [];
    var veggieArray = document.getElementsByClassName("veggie");

    for (var i=0; i<veggieArray.length; i++) {
        if(veggieArray[i].checked) {
            selectedVeggies.push(veggieArray[i].value);
            text1 += veggieArray[i].value+"<br/>";
        }
    }

    var veggieCount = selectedVeggies.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount-1);
    } else {
        veggieTotal = 0;
    }

    runningTotal += veggieTotal;
    getMeat(runningTotal, text1);
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat =[];
    var meatArray = document.getElementsByClassName("meats");

for (var j = 0; j <meatArray.length; j++) {
    if (meatArray[j].checked) {
        selectedMeat.push(meatArray[j].value);
        text1 += meatArray[j].value + "<br/>";
    }
}

var meatCount = selectedMeat.length;
if (meatCount > 1) {
    meatTotal = (meatCount -1);
} else {
    meatTotal = 0;
}

runningTotal += meatTotal;

document.getElementById("showText").innerHTML = text1;
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
event.preventDefault();
};


