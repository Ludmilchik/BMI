const person = {
  activity: 1.375,
  weight: 61,
  growth: 177,
  // start: function () {
  //   this.gender = prompt('Укажите свой пол? (1 - мужской, 2 - женский')

  //   if (this.gender !== '1' && this.gender !== '2') {
  //     alert("Вы ввели неверные данные")
  //     this.gender = prompt('Укажите свой пол? (1 - мужской, 2 - женский')
  //   }

  //   this.age = +prompt("Введите свой возраст?");
  //   if (check(this.age)) {
  //     this.age = +prompt("Введите свой возраст?");
  //   }
  // },
  start: function (item) {
    this.gender = prompt('Укажите свой пол? (1 - мужской, 2 - женский')
    this.age = +prompt("Введите свой возраст?");
    if(this.item !== '1' && this.item !== '2' ){
      alert("Вы ввели неверные данные")
      this.item = prompt(`Введите свой ${item}`)
    }
  },

  getBMI() {
    if (this.age && this.weight && this.growth) {
      alert('Запустите метод start')
    }

    this.BMI = Math.pow((this.weight / this.growth), 2) * 100;
  },
  getDailyCalorie() {
    if (this.age && this.weight && this.growth && this.activity && this.gender) {
      alert('Запустите метод start')
    }

    if (this.gender === '1') {
      this.dailyCalorie = (10 * this.weight) + (6.25 * this.growth) - (5 * this.age) + 5 * this.activity
    } else {
      this.dailyCalorie = (10 * this.weight) + (6.25 * this.growth) - (5 * this.age) - 161 * this.activity
    }
  }
}

function check(param) {
  if (param == '' || param < 0 || isNaN(param)) {
    alert('Вы ввели неверные данные')
    return true
  }
}

// person.start()
// console.log(person);

let gender;
let activity;
let age;
let weight;
let growth;
const form = document.forms.main;
const inputAge = form.age;
const inputWeight = form.weight;
const inputGrowth = form.growth;

const btnResult = document.querySelector('#step-result')

function check(param) {
  if (param.validity.rangeOverflow || param.validity.rangeUnderflow) {
    alert('Вы ввели неверные данные');
    param.value = ''
  }
}

function getBMI(weight, growth) {
  return (Math.pow((weight / growth), 2) * 100).toFixed(1);
}

function getDailyCalorie(weight, growth, activity, age) {

  if (gender === 'man') {
    return (10 * weight) + (6.25 * growth) - (5 * age) + 5 * activity
  } else {
    return (10 * weight) + (6.25 * growth) - (5 * age) - 161 * activity
  }
}

document.querySelector('.calculator-gender__items').addEventListener('click', (e) => {
  document.querySelectorAll('.calculator-gender__item').forEach((i) => {
    i.classList.remove('active')
  })
  e.target.parentElement.classList.add('active')
})


document.querySelector('#step-1-btn').addEventListener('click', (e) => {
  e.preventDefault();
  gender = form.gender.value;
  document.querySelector('#step-1').style.display = 'none'
  document.querySelector('#step-2').style.display = 'block'
})


document.querySelector('.calculator-activity__items').addEventListener('click', (e) => {
  document.querySelectorAll('.calculator-activity__item').forEach((i) => {
    i.classList.remove('active')
  })
  e.target.parentElement.classList.add('active')
})

document.querySelector('#step-2-btn').addEventListener('click', (e) => {
  e.preventDefault();
  activity = form.activity.value;
  document.querySelector('#step-2').style.display = 'none'
  document.querySelector('#step-3').style.display = 'block'
})

inputAge.addEventListener('blur', () => {
  check(inputAge);
  age = inputAge.value;
})

inputWeight.addEventListener('blur', () => {
  check(inputWeight);
  weight = inputWeight.value;
  if (growth && weight && age) {
    btnResult.removeAttribute('disabled')
  }
})

inputGrowth.addEventListener('blur', () => {
  check(inputGrowth);
  growth = inputGrowth.value;
})

btnResult.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#step-3').style.display = 'none'
  document.querySelector('#calculator-result').style.display = 'block'
  document.querySelector('#imt-value').innerText = getBMI(weight, growth)
  document.querySelector('#nc').innerHTML = getDailyCalorie(weight, growth, activity, age)
})




