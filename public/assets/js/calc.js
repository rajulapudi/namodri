var moneySlider = document.getElementById("slider-money");
var dateSlider = document.getElementById("slider-date");

noUiSlider.create(moneySlider, {
  animate: true,
  animationDuration: 300,
  start: [100000],
  step: 5000,
  range: {
    min: [25000],
    max: [500000],
  },
});
noUiSlider.create(dateSlider, {
  animate: true,
  animationDuration: 300,
  start: [12],
  step: 1,
  range: {
    min: [1],
    max: [48],
  },
});

/*переменные для полей вывода чисел*/
var stepSliderValueElement = document.getElementById("summa");
var dataValueElement = document.getElementById("data");
var returnValueElement = document.getElementById("return");
var returnDateElement = document.getElementById("returnDate");
var today = new Date();
var month;
var rate,
  valuePercent,
  rateValueElement = document.getElementById("percent");
/*переменные для полученных значений ползунков*/
var valueMoney, valueDate, valueReturn, dateReturn, valueRate;

function getRateValue(sum) {
  if (true) {
    rate = 0.0825;
  } else {
    switch (sum) {
      case 10000:
        rate = 0.0152;
        break;
      case 11000:
        rate = 0.0152;
        break;
      case 12000:
        rate = 0.0144;
        break;
      case 13000:
        rate = 0.0144;
        break;
      case 14000:
        rate = 0.0136;
        break;
      case 15000:
        rate = 0.0128;
        break;
      default:
        rate = 0.007;
    }
  }
}

/*полученние значений с ползунков*/

function getElemantValue() {
  valueMoney = moneySlider.noUiSlider.get();
  valueDate = dateSlider.noUiSlider.get();
  getRateValue(Math.round(valueMoney));
  valueReturn = valueMoney * (1 + rate * (valueDate / 12));
  dateReturn = new Date(
    today.getFullYear(),
    today.getMonth() + Math.round(valueDate)
  );
}

/*вывод значений с ползунков*/

dateSlider.noUiSlider.on("update", function (values, handle) {
  getElemantValue();
  dataValueElement.innerHTML = Math.round(valueDate) + " months";
  returnValueElement.innerHTML = Math.round(valueReturn) + " /-";
  /*значение месяца*/
  switch (dateReturn.getMonth()) {
    case 0:
      month = "jan";
      break;
    case 1:
      month = "feb";
      break;
    case 2:
      month = "mar";
      break;
    case 3:
      month = "apr";
      break;
    case 4:
      month = "may";
      break;
    case 5:
      month = "jun";
      break;
    case 6:
      month = "july";
      break;
    case 7:
      month = "aug";
      break;
    case 8:
      month = "sep";
      break;
    case 9:
      month = "oct";
      break;
    case 10:
      month = "nov";
      break;
    case 11:
      month = "dec";
      break;
    default:
      month = " ";
  }
  returnDateElement.innerHTML = month + " " + dateReturn.getFullYear();
});

moneySlider.noUiSlider.on("update", function (values, handle) {
  getElemantValue();
  stepSliderValueElement.innerHTML = Math.round(valueMoney) + " /-";
  returnValueElement.innerHTML = Math.round(valueReturn) + " /-";
  valueRate = rate * 100;
  rateValueElement.innerHTML = valueRate.toFixed(2) + " %";
});
