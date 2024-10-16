const inputField = document.querySelector(".input-field");
const convertButton = document.querySelector(".convert-button");
const displayBox = document.querySelector(".display-box");
let num = 0;

convertButton.addEventListener("click", () => {
    num = parseInt(inputField.value);  
    displayBox.innerText = ArabicToRoman(num);
});

function ArabicToRoman(num) {
    if (Math.floor(num) != num) {
        return "Please enter a valid number";
    }
    if (num <= 0) {
        return "Please enter a number greater than or equal to 1";
    }
    if (num >= 4000) {
        return "Please enter a number less than or equal to 3999";
    }
    if (num / 1000 >= 1) {
        if (num - 1000 == 0)
            return "M";
        else if (num % 1000 == 0)
            return ArabicToRoman(num - 1000) + "M";
        else
            return ArabicToRoman(Math.floor(num / 1000) * 1000) + ArabicToRoman(num - Math.floor(num / 1000) * 1000);
    }
    else if(num/100 >= 1){   
        if(num - 100 == 0)
            return "C";
        else if(num - 400 == 0)
            return "CD";
        else if(num - 500 == 0)
            return "D";
        else if(num - 900 == 0)
            return "CM";
        else if(num % 100 == 0)
            return ArabicToRoman(num - 100) + "C";
        else 
            return ArabicToRoman(Math.floor(num/100)*100) + ArabicToRoman(num-(Math.floor(num/100)*100));
    }
    else if(num/10 >= 1){
        if(num - 10 == 0)
            return "X";
        else if(num - 40 == 0)
            return "XL";
        else if(num - 50 == 0)
            return "L";
        else if(num - 90 == 0)
            return "XC";
        else if(num % 10 == 0)
            return ArabicToRoman(num - 10) + "X";
        else 
            return ArabicToRoman(Math.floor(num/10)*10) + ArabicToRoman(num-(Math.floor(num/10)*10));
    }
    else {
        if(num - 1 == 0)
            return "I";
        else if(num - 4 == 0)
            return "IV";
        else if(num - 5 == 0)
            return "V";
        else if(num - 9 == 0)
            return "IX";
        else{
            return ArabicToRoman(num - 1) + "I";
        }
    }
}



