let startBtn = document.getElementById('start');
let valueClass = document.querySelectorAll('div[class$="-value"]');
let expenses = document.querySelectorAll('.expenses-item');
let dataBtn = document.querySelectorAll(".data > button");
let btnExpTag = document.getElementsByTagName("button")[0];
let btnOptExpTag = document.getElementsByTagName("button")[1];
let btnCntTag = document.getElementsByTagName("button")[2];
let optExpItem = document.querySelectorAll(".optionalexpenses-item");
let chooseInc = document.querySelector(".choose-income");
let savings =  document.querySelector("#savings");
let chooseSum = document.querySelector(".choose-sum");
let percent = document.querySelector("#percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
};

startBtn.addEventListener('click',function(){
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    valueClass[0].textContent = money.toFixed();
    appData.budget = money;
    appData.timeData = time;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()  + 1;
    dayValue.value= new Date(Date.parse(time)).getDay();
});
btnExpTag.addEventListener('click',function(){
     let sum = 0;
     for (let i = 0; i < expenses.length; i++) {
        let a = expenses[i].value,
            b = expenses[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
            sum += +b;
            
        } else {
            console.log ("bad result");
            i--;
        }
        valueClass[3].textContent = sum;
    
    }
}),
btnOptExpTag.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i <= optExpItem.length; i++) {
        let a = optExpItem[i].value;
        appData.optionalExpenses = a;
        sum += +a;
        valueClass[4].textContent = sum;

    }
});
btnCntTag.addEventListener('click', function(){
    if(appData.budget != undefined){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            valueClass[1].textContent = appData.moneyPerDay;
            if (appData.moneyPerDay < 100) {
                valueClass[2].textContent = "Это минимальный уровень достатка!";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            
                valueClass[2].textContent = "Это средний уровень достатка!";
            } else if (appData.moneyPerDay > 2000) {
                valueClass[2].textContent = "Это высокий уровень достатка!";
            } else {
                valueClass[2].textContent = "Ошибочка...!";
            }
    }else{
        valueClass[1].textContent = 'Произошла ошибка';
    }
});
chooseInc.addEventListener('input', function(){
    let items = chooseInc.value;
    appData.income = items.split(", ");
    appData.income.sort();
    valueClass[5].textContent = appData.income;
}); 
chooseSum.addEventListener('input', function(){
    if (savings.checked){
        let sum = +chooseSum.value;
        let varPercent = +percent.value;
        appData.monthIncome = sum/100/12 * varPercent;
        appData.yearIncome = sum/100 * varPercent;
        valueClass[6].textContent = appData.monthIncome.toFixed(1);
        valueClass[7].textContent = appData.yearIncome.toFixed(1);

    }
});
percent.addEventListener('input',function(){
    if (savings.checked){
        let sum = +chooseSum.value;
        let varPercent = +percent.value;
        appData.monthIncome = sum/100/12 * varPercent;
        appData.yearIncome = sum/100 * varPercent;
        valueClass[6].textContent = appData.monthIncome.toFixed(1);
        valueClass[7].textContent = appData.yearIncome.toFixed(1);
    }
});