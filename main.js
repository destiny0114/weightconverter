let textinput = document.querySelector('#textInput');
let bodyoutput = document.getElementById('output');

window.onload = function () {
    bodyoutput.style.display = 'none';
    textinput.value = '';
}

textinput.addEventListener('input', function (event) {
    let pounds = (function () {
        let num = event.target.value;

        bodyoutput.style.display = !num ? 'none' : 'block';

        return {
            toStone: function () {
                let output = document.querySelector('.stoneOutput');
                let result = (num / 14).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toUSton: function () {
                let output = document.querySelector('.ustonOutput');
                let result = (num / 2000).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toImperialton: function () {
                let output = document.querySelector('.itOutput');
                let result = (num / 2240).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toMicrogram: function () {
                let output = document.querySelector('.microgramOutput');
                let result = (num * Number('4.536e+8')).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toMilligram: function () {
                let output = document.querySelector('.milligramOutput');
                let result = (num * Number('453592.37')).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toGram: function () {
                let output = document.querySelector('.gramOutput');
                let result = (num * Number('453.592')).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toKilogram: function () {
                let output = document.querySelector('.kilogramOutput');
                let result = (num / Number('2.205')).toFixed(8);

                output.innerHTML = !result ? '' : result;
            },
            toTonne: function () {
                let output = document.querySelector('.tonneOutput');
                let result = (num / Number('2204.623')).toFixed(8);

                output.innerHTML = !result ? '' : result;
            }
        }
    })();

    pounds.toStone();
    pounds.toUSton();
    pounds.toImperialton();
    pounds.toMicrogram();
    pounds.toMilligram();
    pounds.toGram();
    pounds.toKilogram();
    pounds.toTonne();
});

function outer() {

    var b = 10;
    function inner() {

        var a = 20;
        console.log(a + b);
    }
    return inner;
}