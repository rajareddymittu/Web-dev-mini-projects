var monthlyInvestment = 20000;
var AnnualInterestRate = 12;
var years = 5;
// wait till inputamountbyrange is loaded
document.addEventListener("DOMContentLoaded", function () {
    var amountByRange = document.getElementById("inputAmountByRange");
    var amountByValue = document.getElementById("inputAmountByValue");
    var InterestByRange = document.getElementById("inputInterestRateByRange");
    var InterestByValue = document.getElementById("inputInterestRateByValue");
    var yearsByRange = document.getElementById("inputYearsByRange");
    var yearsByValue = document.getElementById("inputYearsByValue");

    document.getElementById("inputAmountByRange").addEventListener("change", function (e) {
        monthlyInvestment = e.target.value;
        amountByValue.value = e.target.value
        calculateSip();
        console.log("monthlyInvestment", monthlyInvestment);
    });
    document.getElementById("inputAmountByValue").addEventListener("change", function (e) {
        monthlyInvestment = e.target.value;
        amountByRange.value = e.target.value;
        calculateSip();
        console.log("monthlyInvestment", monthlyInvestment);
    });
    document.getElementById("inputInterestRateByRange").addEventListener("change", function (e) {
        AnnualInterestRate = e.target.value;
        InterestByValue.value = e.target.value;
        calculateSip();
        console.log("AnnualInterestRate", AnnualInterestRate);
    }
    );
    document.getElementById("inputInterestRateByValue").addEventListener("change", function (e) {
        AnnualInterestRate = e.target.value;
        InterestByRange.value = e.target.value;
        calculateSip();
        console.log("AnnualInterestRate", AnnualInterestRate);
    });
    document.getElementById("inputYearsByRange").addEventListener("change", function (e) {
        years = e.target.value;
        yearsByValue.value = e.target.value;
        calculateSip();
        console.log("years", years);
    }
    );
    document.getElementById("inputYearsByValue").addEventListener("change", function (e) {
        years = e.target.value;
        yearsByRange.value = e.target.value;
        calculateSip();
        console.log("years", years);
    }
    );
    function changeInvestment() {
        monthlyInvestment = amount;
        calculateSip();
        console.log("monthlyInvestment", monthlyInvestment);
    }
    function calculateSip() {
        console.log("monthlySip", monthlyInvestment);
        console.log("AnnualInterestRate", AnnualInterestRate);
        console.log("years", years);

        let sip=0.0;
        let totalInvestment = (monthlyInvestment * 12 * years);
        let monthlyInterest = (AnnualInterestRate / 12 / 100);
        let totalInterest = 0;
        console.log("type of sip", typeof sip);
        console.log("type of monthlyInterest", typeof monthlyInterest);
        console.log("type of totalInvestment", typeof totalInvestment);
        
        sip = Number(sip);
        monthlyInterest = Number(monthlyInterest);
        monthlyInvestment = Number(monthlyInvestment);
        for (var i = 0; i < years * 12; i++) {
            sip = sip + monthlyInvestment;
            sip = sip + (sip * monthlyInterest);
            console.log(sip);
            console.log("type of sip",typeof sip);
        }
        totalInterest = sip - totalInvestment;
        console.log(sip);
        sip = sip.toFixed(0);
        sip=sip.toString();
        // place commas in indan style for every 2 digits of interest
        // but 3 digits at the end
        sip=sip.substring(0,sip.length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",")+"," + sip.substring(sip.length-3);
        document.getElementById("totalInvestment").value = sip;
    };
    calculateSip();


});
