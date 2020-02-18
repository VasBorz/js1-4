
// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var obj = {
    units: '',
    dozens: '',
    hundreds: '',
    sl : function slicer(number){
        if (Number.isInteger(number)){
            if (number >= 999){
                alert('The number is higher then 999, Please try again' + obj.units + obj.dozens + obj.hundreds);
            }else{
                let digits = (""+number).split("");

                if(digits.length >= 1 ) this.units = digits[0];
                if(digits.length >= 2 ) this.dozens = digits[1];
                if(digits.length >= 3 ) this.hundreds = digits[2];
                console.log(this);
            }
        }else{
            alert('The number is not correct, Please try again');
            console.log(this);
        }
    }
};

// 1) Variant with random number
var number = Math.floor((Math.random() * 999) + 1);
obj.sl(number);

// 2) Variant with enter number
var number2 = +prompt('Enter your number',123);
obj.sl(number2);


// 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)


// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»