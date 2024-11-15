console.log("JS STARTED!!!");

var ansvers = {"q1": "a","q2": "a", "q3": "a", "q4": "a", "q5": "a"}

function subl() {
    var score = 0;
    
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === ansvers["q1"]) {
        score++;
    }
    if (q2 && q2.value === ansvers["q2"]) {
        score++;
    }
    if (q3 && q3.value === ansvers["q3"]) {
        score++;
    }
    if (q4 && q4.value === ansvers["q4"]) {
        score++;
    }
    if (q5 && q5.value === ansvers["q5"]) {
        score++;
    }

    alert("Ваш результат: " + score + " из 5");
};

console.log(ans1_1.value);
