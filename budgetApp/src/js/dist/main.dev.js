"use strict";

var startBtn = document.getElementById('start');
var value = document.querySelectorAll('div[class$="-value"]');
var expenses = document.querySelectorAll('.expenses-item');
var dataBtn = document.querySelectorAll(".data > button");
var btnExpTag = document.getElementsByTagName("button")[0];
var btnOptExpTag = document.getElementsByTagName("button")[1];
var btnCntTag = document.getElementsByTagName("button")[2];
var optExpItem = document.querySelectorAll(".optionalexpenses-item");
var chooseInc = document.querySelector(".choose-income");
var savings = document.querySelector("#savings");
var chooseSum = document.querySelector(".choose-sum");
var percent = document.querySelector("#percent");
var yearValue = document.querySelector(".year-value");
var monthValue = document.querySelector(".month-value");
var dayValue = document.querySelector(".day-value");
var money, time;
startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  value[0].textContent = money.toFixed();
  appData.budget = money;
  appData.timeData = time;
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDay();
  console.log(yearValue.value);
});
var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
      var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = prompt("Во сколько обойдется?", "");

      if (typeof a === 'string' && typeof a != null && typeof b != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
  },
  detectLevel: function detectLevel() {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Ошибочка...!");
    }
  },
  checkSavings: function checkSavings() {
    if (appData.savings == true) {
      var save = +prompt("Какова сумма накоплений?"),
          _percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * _percent;
      alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function chooseOptExpenses() {
    for (var i = 1; i <= 3; i++) {
      var questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function chooseIncome() {
    var items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }

    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  }
};