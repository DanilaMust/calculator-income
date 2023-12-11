const   incomeSalary = document.getElementById('income-salary'),
        incomeFreelance = document.getElementById('income-freelance'),
        incomeStipend = document.getElementById('income-stipend'),
        incomeDonation = document.getElementById('income-donation');
        
const   costsFood = document.getElementById('expenses-food'),
        costsClothes = document.getElementById('expense-clothes'),
        costsTransport = document.getElementById('expenses-transport'),
        costsEntertainments = document.getElementById('expenses-entertainments');

const   availableMonthInput = document.getElementById('available-month'),
        availableDayInput = document.getElementById('available-day'),
        availableYearInput = document.getElementById('available-year');

let availableMonth, availableDay, availableYear;

const   bankRange = document.getElementById('bank-range'),
        // bankPercents = document.getElementById('bank-percents'),
        cashflowSaveInput = document.getElementById('cashflow-save'),
        cashflowSpendInput = document.getElementById('cashflow-spend');

let     cashflowSave = 0,
        bankPercents = 0;

const allInputs = document.querySelectorAll('.input');
for (i of allInputs) {
    i.addEventListener('input', () => {
        countIncomeMoney();
        calculationPercents();

        // i.value == '' ? i.value = 0 : i.value=i.value
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countIncomeMoney = () => {
    const allIncomeMoney = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeStipend) + strToNum(incomeDonation);
    const allCostsMoney = strToNum(costsFood) + strToNum(costsClothes) + strToNum(costsTransport) + strToNum(costsEntertainments);
    availableMonth = allIncomeMoney - allCostsMoney;
    availableMonthInput.value = availableMonth;
}

bankRange.addEventListener('input', e => {
    const bankPercentsElement = document.getElementById('bank-percents');
    bankPercents = e.target.value;
    bankPercentsElement.innerHTML = bankPercents;
    calculationPercents();
}) 

const calculationPercents = () => {
    cashflowSave = ((availableMonth * bankPercents) / 100).toFixed();
    cashflowSaveInput.value = cashflowSave;

    // cashflowSpendInput = availableMonth - cashflowSave;
    cashflowSpendInput.value = availableMonth - cashflowSave;

    availableDay = (cashflowSpendInput.value / 30).toFixed();
    availableDayInput.value = availableDay;

    availableYear = cashflowSave * 12;
    availableYearInput.value = availableYear;
}

