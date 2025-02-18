console.log("D: test started");

function test(form1, form2, form3, popup) {
    popup[0].style = "display: block";
    popup[1].style = "display: block";
    
    var scoreAll = 0;
    var score1 = 0;
    // TEST1CHEK

    if(form1[0].value != "" && form1[1].value != "") {
        popup[3].style = "display: block";
        if(form1[0].value == 1) {
            score1 += 1;
            scoreAll += 1;
            popup[4].innerHTML = "<p style='color:green;'>HNO<sub>4</sub> - это кислота<p>";
        } else {
            if(form1[0].value == 2) {
                popup[4].innerHTML = "<p style='color:red;'>Mg(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
            } else if(form1[0].value == 3) {
                popup[4].innerHTML = "<p style='color:red;'>ZnO - Исключение – амфотерный оксид.<p>";
            } else if(form1[0].value == 4) {
                popup[4].innerHTML = "<p style='color:red;'>KHSO<sub>4</sub> - Катион + H<sup>+</sup> + анион – кислая соль.<p>";
            } else {
                popup[4].innerHTML = "<p style='color:red;'>CaO - Металл со ст. ок. +2 и О<sup>-2</sup> – основный оксид.<p>";
            }
        };
        if (form1[1].value == 5) {
            score1 += 1;
            scoreAll += 1;
            popup[4].innerHTML += "<p style='color:green;'>CaO - Металл со ст. ок. +2 и О<sup>-2</sup> – основный оксид.<p>";
        }else {
            if(form1[1].value == 2) {
                popup[4].innerHTML += "<p style='color:red;'>Mg(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
            } else if(form1[1].value == 3) {
                popup[4].innerHTML += "<p style='color:red;'>ZnO - Исключение – амфотерный оксид.<p>";
            } else if(form1[1].value == 4) {
                popup[4].innerHTML += "<p style='color:red;'>KHSO<sub>4</sub> - Катион + H<sup>+</sup> + анион – кислая соль.<p>";
            } else {
                popup[4].innerHTML += "<p style='color:red;'>HNO<sub>4</sub> - это кислота<p>";
            }
        };
    } else {
        popup[3].style = "display: block";
        popup[4].innerHTML = "<p style='color:red;'>Не все поля заполнены<p>";
    }

     // TEST2CHEK

     if(form2[0].value != "" && form2[1].value != "") {
        if(form2[0].value == 4) {
            score1 += 1;
            scoreAll += 1;
            popup[5].innerHTML = "<p style='color:green;'>Ba(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
        } else {
            if(form2[0].value == 2) {
                popup[5].innerHTML = "<p style='color:red;'>H<sub>2</sub>SIO<sub>3</sub> - В начале стоит водород – это кислота.<p>";
            } else if(form2[0].value == 3) {
                popup[5].innerHTML = "<p style='color:red;'>MgO - Металл со ст. ок. +2 и О-2 – основный оксид.<p>";
            } else if(form2[0].value == 5) {
                popup[5].innerHTML = "<p style='color:red;'>Cr<sub>2</sub>O<sub>3</sub> - Металл со ст. ок. +3 и О-2 – амфотерный оксид.<p>";
            } else {
                popup[5].innerHTML = "<p style='color:red;'>Cu(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
            }
        };
        if (form2[1].value == 5) {
            score1 += 1;
            scoreAll += 1;
            popup[5].innerHTML += "<p style='color:green;'>Cr<sub>2</sub>O<sub>3</sub> Металл со ст. ок. +3 и О-2 – амфотерный оксид.<p>";
        }else {
            if(form2[1].value == 2) {
                popup[5].innerHTML += "<p style='color:red;'>H<sub>2</sub>SIO<sub>3</sub> - В начале стоит водород – это кислота.<p>";
            } else if(form2[1].value == 3) {
                popup[5].innerHTML += "<p style='color:red;'>MgO - Металл со ст. ок. +2 и О-2 – основный оксид.<p>";
            } else if(form2[1].value == 4) {
                popup[5].innerHTML += "<p style='color:red;'>Ba(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
            } else {
                popup[5].innerHTML += "<p style='color:red;'>Cu(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
            }
        };
    } else {
        popup[3].style = "display: block";
        popup[5].innerHTML = "<p style='color:red;'>Не все поля заполнены<p>";
    }

// TEST3AN

if(form3[0].value != "" && form3[1].value != "") {
    if(form3[0].value == 4) {
        score1 += 1;
        scoreAll += 1;
        popup[6].innerHTML = "<p style='color:green;'>NaClo<sub>4</sub> - Металл + кислотный остаток от кислоты HClO4 – средняя соль.<p>";
    } else {
        if(form3[0].value == 2) {
            popup[6].innerHTML = "<p style='color:red;'>Al(OH)<sub>3</sub> - Металл со ст. ок. +3 и ОН-группа – амфотерный гидроксид.<p>";
        } else if(form3[0].value == 3) {
            popup[6].innerHTML = "<p style='color:red;'>ZnO - Исключение – амфотерный оксид.<p>";
        } else if(form3[0].value == 5) {
            popup[6].innerHTML = "<p style='color:red;'>FeO - Металл со ст. ок. +2 и О-2 – основный оксид.<p>";
        } else {
            popup[6].innerHTML = "<p style='color:red;'>Ca(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
        }
    };
    if (form3[1].value == 3) {
        score1 += 1;
        scoreAll += 1;
        popup[6].innerHTML += "<p style='color:green;'>ZnO - Исключение – амфотерный оксид.<p>";
    }else {
        if(form3[1].value == 2) {
            popup[6].innerHTML += "<p style='color:red;'>Al(OH)<sub>3</sub> - Металл со ст. ок. +3 и ОН-группа – амфотерный гидроксид.<p>";
        } else if(form3[1].value == 5) {
            popup[6].innerHTML += "<p style='color:red;'>FeO - Металл со ст. ок. +2 и О-2 – основный оксид.<p>";
        } else if(form3[1].value == 4) {
            popup[6].innerHTML += "<p style='color:red;'>NaClo<sub>4</sub> - Металл + кислотный остаток от кислоты HClO4 – средняя соль.<p>";
        } else {
            popup[6].innerHTML = "<p style='color:red;'>Ca(OH)<sub>2</sub> - Металл со ст. ок. +2 и ОН-группа – основание.<p>";
        };
    };
} else {
    popup[3].style = "display: block";
    popup[6].innerHTML = "<p style='color:red;'>Не все поля заполнены<p>";
}

    popup[2].innerHTML = `Общий балл: ${scoreAll}/6`;
}

function clspopup(popup) {
    popup[0].style = "display: none";
    popup[1].style = "display: none";
}