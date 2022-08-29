//cambia dinamicamnete fontfamily/color de cada letra/color del background
let body = document.body;
body.style.backgroundColor = rgbColorGenerator();

let titleWrapper = document.createElement('div');
titleWrapper.style.margin = ".5rem";
body.appendChild(titleWrapper);

//Array con un string de cada letra
let txt = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH";
let titleArr = txt.split("");
//console.log(titleArr);

let title;
for(let i = 0; i < titleArr.length; i++){
    //console.log(letter)
    title = document.createElement('p');
    title.classList.add(`letter-${i}`, "full-title");
    title.textContent = titleArr[i];
    title.style.display = "inline";
    title.style.fontSize = "8vw";
    title.style.color = rgbColorGenerator();
    //title.style.fontFamily = "montserrat, sans-serif";
    titleWrapper.appendChild(title);
}

const famFonts = ["Aldrich", "Lato", "Montserrat", "Nunito", "Oswald", "Raleway Dots", "Raleway", "Roboto"];
let indexFamFonts = 0;

const randomFontFamInterval = function(){
    let titleArr2 = document.querySelectorAll(".full-title");
    //console.log(titleArr2);
    for(title of titleArr2){
        title.style.fontFamily = `${famFonts[indexFamFonts]}`;
    }
    if(indexFamFonts < (famFonts.length - 1)){
        indexFamFonts++;
    } else {
        indexFamFonts = 0;
    }
}
setInterval(randomFontFamInterval, 2000);

const randomLetterColorInterval = function(){
    for(let i = 0; i < titleArr.length; i++){
        title = document.querySelector(`.letter-${i}`)
        title.style.color = rgbColorGenerator(); 
    }
};
setInterval(randomLetterColorInterval, 2000);

const randomBodyColorInterval = function(){
    body.style.backgroundColor = rgbColorGenerator(); 
};
setInterval(randomBodyColorInterval, 2000);

/* RANDOM RGB COLOR GENERATOR */
function rgbColorGenerator(){
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    return `RGB(${num1},${num2},${num3})`;
}

