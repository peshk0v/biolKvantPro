console.log("JS STARTED!!!");

var ansvers = [1, 2, 3, 2, 1];

function subl() {
    var score = 0;
    var q1TXTS = [document.getElementById("anst1_1"), document.getElementById("anst1_2"), document.getElementById("anst1_3")];
    var q2TXTS = [document.getElementById("anst2_1"), document.getElementById("anst2_2"), document.getElementById("anst2_3")];
    var q3TXTS = [document.getElementById("anst3_1"), document.getElementById("anst3_2"), document.getElementById("anst3_3")];
    var q4TXTS = [document.getElementById("anst4_1"), document.getElementById("anst4_2"), document.getElementById("anst4_3")];
    var q5TXTS = [document.getElementById("anst5_1"), document.getElementById("anst5_2"), document.getElementById("anst5_3")];

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === '' + ansvers[0]) {
        score++;
        q1TXTS[ansvers[0]-1].className = "anstxtT";
        for (var i = 0; i < q1TXTS.length; i++) {
            if (q1TXTS[i].className === "anstxt") {
                q1TXTS[i].className = "anstxtF";
            }
        }
    } else {
        for (var i = 0; i < q1TXTS.length; i++) {
            if (i === ansvers[0]-1) {
                q1TXTS[i].className = "anstxtT";
            } else {
                q1TXTS[i].className = "anstxtF";
            }
        }
    }
    if (q2 && q2.value === '' + ansvers[1]) {
        score++;
        q2TXTS[ansvers[1]-1].className = "anstxtT";
        for (var i = 0; i < q2TXTS.length; i++) {
            if (q2TXTS[i].className === "anstxt") {
                q2TXTS[i].className = "anstxtF";
            }
        }
    } else {
        for (var i = 0; i < q2TXTS.length; i++) {
            if (i === ansvers[1]-1) {
                q2TXTS[i].className = "anstxtT";
            } else {
                q2TXTS[i].className = "anstxtF";
            }
        }
    }
    if (q3 && q3.value === '' + ansvers[2]) {
        score++;
        q3TXTS[ansvers[2]-1].className = "anstxtT";
        for (var i = 0; i < q3TXTS.length; i++) {
            if (q3TXTS[i].className === "anstxt") {
                q3TXTS[i].className = "anstxtF";
            }
        }
    } else {
        for (var i = 0; i < q3TXTS.length; i++) {
            if (i === ansvers[2]-1) {
                q3TXTS[i].className = "anstxtT";
            } else {
                q3TXTS[i].className = "anstxtF";
            }
        }
    }
    if (q4 && q4.value === '' + ansvers[3]) {
        score++;
        q4TXTS[ansvers[3]-1].className = "anstxtT";
        for (var i = 0; i < q4TXTS.length; i++) {
            if (q4TXTS[i].className === "anstxt") {
                q4TXTS[i].className = "anstxtF";
            }
        }
    } else {
        for (var i = 0; i < q4TXTS.length; i++) {
            if (i === ansvers[3]-1) {
                q4TXTS[i].className = "anstxtT";
            } else {
                q4TXTS[i].className = "anstxtF";
            }
        }
    }
    if (q5 && q5.value === '' + ansvers[4]) {
        score++;
        q5TXTS[ansvers[4]-1].className = "anstxtT";
        for (var i = 0; i < q5TXTS.length; i++) {
            if (q5TXTS[i].className === "anstxt") {
                q5TXTS[i].className = "anstxtF";
            }
        }
    } else {
        for (var i = 0; i < q5TXTS.length; i++) {
            if (i === ansvers[4]-1) {
                q5TXTS[i].className = "anstxtT";
            } else {
                q5TXTS[i].className = "anstxtF";
            }
        }
    }

    var ansByUsr = confirm("Ваш результат: " + score + " из 5\nВы желаете посмотреть правильные ответы?");

    if (ansByUsr) {} else {
        window.location = "http://127.0.0.1:5500";
    }
    // alert("Ваш результат: " + score + " из 5");
};

console.log(ans1_1.value);
