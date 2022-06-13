let checkBtn = document.querySelector(".check");
let attempsSpan = document.querySelector("span")
let words = [
    "веник",
    "букашка",
    "лента",
    "вертолет",
    "борода",
    "шприц",
    "пальма",
    "табло",
    "зимовка",
    "посох",
    "ацетон",
    "купюра",
    "кирпич",
    "белка",
    "башмак",
    "кнопка",
    "лак",
    "конверт",
    "веер",
    "сюрприз",
    "ключ",
    "пелёнка",
    "пингвин",
    "корона",
    "желе",
    "самолёт",
    "цыплёнок",
    "чернила",
    "хвост",
    "приемник",
    "секунда",
    "поролон",
    "коньки",
    "свеча",
    "фольга",
    "керосин",
    "рюмка",
    "джинн",
    "ириска",
    "волна",
    "локатор",
    "пюре",
    "этикетка",
    "пиявка",
    "ручей",
    "стрелка",
    "кувшин",
    "тыква",
    "волан",
    "крепость",
    "валенки",
    "вихрь",
    "ласты",
    "банк",
    "драчун",
    "антрекот",
    "наушники",
    "самокат",
    "водопад",
    "ярмарка",
    "сушка",
    "Китай",
    "звонок",
    "студия",
    "прививка",
    "пила",
    "заря",
    "пружина",
    "карась",
    "степь",
    "танго",
    "яйцо",
    "вагон",
    "майка",
    "снегопад",
    "район",
    "конура",
    "лилия",
    "ступенька",
    "пробка",
    "десерт",
    "ралли",
    "карантин",
    "вулкан",
    "утюг",
    "муравей",
    "сальто",
    "дупло",
    "мотор",
    "писк",
    "сметана",
    "розетка",
    "линейка",
    "подвал",
    "лесник",
    "парус",];
let word = words[Math.floor(Math.random()*words.length)];
let letters = [];
let wordInput = document.querySelector(".word")
let letInput = document.querySelector(".letter");
let attempts = 3
let startBtn = document.querySelector(".start")
checkBtn.disabled = true
checkBtn.onclick = function () {
    let userWord = "";
    let letter = letInput.value;
    if(letter == "") {
        alert("Напишите букву. Пожалуйста!")

    }
    letters.push(letter);
    console.log(letters);
    for (let i = 0; i < word.length; i = i + 1) {
        if (letters.indexOf(word[i]) == -1) {
            userWord = userWord + "*";
        } else {
            userWord = userWord + word[i];
        
        }
     
    }
    if(word.indexOf(letter) == -1) {
        attempts = attempts -1
        attempsSpan.textContent = attempts
    }
    wordInput.value = userWord
    // for (let i = 1; i<20;i = i + 2) {
    //     console.log(i)
    // }
    // for (let i = 1; i<10;i = i + 0.5) {
    //     console.log(i)
    // }
    if(wordInput.value == word) {
        alert("Молодец Ты угадал все слово!")
        checkBtn.disabled = true
        startBtn.disabled = false
    }
    if(attempts == 0){
        checkBtn.disabled = true
        startBtn.disabled = false
        alert("Увы ты проиграл нажми НАЧАТЬ ИГРУ")
        wordInput.value = word
    } 
};
startBtn.onclick = function () {
    word = words [Math.floor(Math.random()*words.length)]
    startBtn.disabled = true
    checkBtn.disabled = false
    attempts = word.length
    attempsSpan.textContent = attempts
    letters = [];
    letInput.value = ""
    wordInput.value = ""
    for (let i = 0; i < word.length; i = i + 1) {
        wordInput.value = wordInput.value + "*"
    }
}
// 1) Показать правильное слово когда человек проигрывать 
// 2) Когда нажимается новая игра давать новое секретное слово


