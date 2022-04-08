const header = document.querySelector('.header')
const answerOne = document.querySelector('.answer-one')
const answerTwo = document.querySelector('.answer-two')
const answerThree = document.querySelector('.answer-three')
const buttonFst = document.querySelector('.button-fst')
const buttonSnd = document.querySelector('.button-snd')
const buttonTrd = document.querySelector('.button-thrd')
const questionSecond = document.querySelector('.question__second')
const questionThird = document.querySelector('.question__third')

const answers = ['ясен хуй!', 'да ну нахуй', 'я в завязке!', 'чо пить будем?']
const drinks = ['коньяк', 'водочки', 'пивас', 'сэмыч', 'ерша', 'Blazer']
const makers = ['Клюковка', 'Ныкшевка', 'Пэпсовка']

buttonFst.onclick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
    answerOne.textContent = randomAnswer
    header.style.backgroundImage = "none"
    if (randomAnswer === answers[3]) {
        questionSecond.style.display = 'block'
    }
    else {
        questionSecond.style.display = 'none'
        answerTwo.innerHTML = ''
        questionThird.style.display = 'none'
        answerThree.innerHTML = ''
        
    }
}

buttonSnd.onclick = () => {
    const randomDrinks = drinks[Math.floor(Math.random() * drinks.length)]
    answerTwo.textContent = randomDrinks
    if (randomDrinks === drinks[0]) {
        header.style.backgroundImage = "url(./img/konjak.jpg)";
    } else
    if (randomDrinks === drinks[1]) {
        header.style.backgroundImage = "url(./img/vodka.jpg)";
    } else
    if (randomDrinks === drinks[2]) {
        header.style.backgroundImage = "url(./img/beer.jpg)";
    } else
    if (randomDrinks === drinks[3]) {
        questionThird.style.display = 'block'
        header.style.backgroundImage = "url(./img/moonshine.jpg)";
    } else
    if (randomDrinks === drinks[4]) {
        header.style.backgroundImage = "url(./img/ersh.jpg)";
    } else
    if (randomDrinks === drinks[5]) {
        header.style.backgroundImage = "url(./img/blazer.jpg)";
    } else
    if (randomDrinks !== drinks[3]) {
        questionThird.style.display = 'none'
        answerThree.innerHTML = ''
    }
}

buttonTrd.onclick = () => {
    const randomMaker = makers[Math.floor(Math.random() * makers.length)]
    answerThree.textContent = randomMaker

    if (randomMaker === makers[0]) {
        header.style.backgroundImage = "url(./img/kluka.jpg)";
        header.style.backgroundPosition = "55% 0";
    } else

    if (randomMaker === makers[1]) {
        header.style.backgroundImage = "url(./img/niksh.jpg)";
        header.style.backgroundPosition = "55% 70%";
    } else

    if (randomMaker === makers[2]) {
        header.style.backgroundImage = "url(./img/peps.jpg)";
        header.style.backgroundPosition = "55% 50%";
    }
}
