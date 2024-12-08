let question_number = -1;
const questions = [
    "1. JavaScript działa tylko w przeglądarce internetowej.",
    "2. JavaScript jest językiem programowania wysokiego poziomu.",
    "3. Słowo kluczowe var w JavaScript ma zakres funkcji, a nie bloku.",
    "4. W JavaScript można tworzyć zmienne bez użycia słów kluczowych var, let lub const.",
    "5. JavaScript i Java to to samo.",
    "6. Które z ponizszych są metodami tablic w JavaScript?",
    "7. Które z poniższych to prawidłowe typy danych w JavaScript?",
    "8. Które właściwości DOM pozwalają pobrać element HTML?",
    "9. Które z poniższych pętli istnieją w JavaScript?",
    "10. Które operatory są używane do porównań w JavaScript?",
    "11. Jak nazywa się metoda służąca do dodawania elementu na końcu tablicy w JavaScript?<br>Odpowiedz jednym wyrazem.",
    "12. Jakim słowem kluczowym deklaruje się stałe zmienne w JavaScript?<br>Odpowiedz jednym wyrazem.",
    "13. Jaki typ danych w JavaScript reprezentuje wartość prawda lub fałsz?<br>Odpowiedz jednym wyrazem.",
    "14. Jak nazywa się metoda używana do ustawiania opóźnienia w JavaScript?<br>Odpowiedz jednym wyrazem.",
    "15. Jak nazywa się właściwość służąca do pobierania liczby elementów w tablicy?<br>Odpowiedz jednym wyrazem.",
];
const answers_a = [
    "push()",
    "undefined",
    "selectByName",
    "while",
    "!=",
];
const answers_b = [
    "remove()",
    "null",
    "queryselector",
    "iterate",
    "=",
];
const answers_c = [
    "pop()",
    "void",
    "findElement",
    "for",
    "==",
];
const answers_d = [
    "add()",
    "text",
    "getElementById",
    "loop",
    "===",
];
let remember_answers = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
};

//===============================================================================================================================================================================================================================================================

function start() {
    user_name = document.getElementById("user_name").value;

    //zabezpieczenia w podawaniu imienia i nazwiska

    if (user_name == "") {
        alert("Musisz podać swoje imię i nazwisko");
    } else if (isNaN(user_name) == false) {
        alert("Imię i nazwisko nie może zawierać cyfr");
    } else {
        //rozpoczęcie quizu
        question_number += 1;
        console.log(question_number + 1)
        document.getElementById("question").innerHTML = questions[question_number];
        document.getElementById("user_input").remove();
        document.getElementById("start").remove();
        document.getElementById("answers_tf").style.visibility = "visible";
        document.getElementById("answers_tf").style.position = "relative";
        document.getElementById("navigators").style.visibility = "visible";
    }
}

//===============================================================================================================================================================================================================================================================

function prawda() {
    document.getElementById("f1").style.backgroundColor = "#9c9595";
    document.getElementById("f2").style.backgroundColor = "#c9c3c3";
}

function falsz() {
    document.getElementById("f2").style.backgroundColor = "#9c9595";
    document.getElementById("f1").style.backgroundColor = "#c9c3c3";
}

//===============================================================================================================================================================================================================================================================

function next() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let d = document.getElementById("d");
    let multiple_answers = 0;


    //sprawdzanie zaznaczonych odpowiedzi
    if (question_number >= 0 && question_number <= 4) {
        if (document.getElementById("prawda").checked) {
            remember_answers[question_number + 1] = "prawda";
        } else if (document.getElementById("falsz").checked) {
            remember_answers[question_number + 1] = "falsz";
        }
    } else if (question_number >= 5 && question_number <= 9) {
        if (a.checked === false && b.checked === false && c.checked === false && d.checked === false) {
            remember_answers[question_number + 1] = "";
            multiple_answers = 0;
        } else if (a.checked === true && b.checked === true && c.checked === false && d.checked === false) {
            remember_answers[question_number + 1] = "ab";
            multiple_answers = 2;
        } else if (a.checked === true && b.checked === false && c.checked === true && d.checked === false) {
            remember_answers[question_number + 1] = "ac";
            multiple_answers = 2;
        } else if (a.checked === true && b.checked === false && c.checked === false && d.checked === true) {
            remember_answers[question_number + 1] = "ad";
            multiple_answers = 2;
        } else if (a.checked === false && b.checked === true && c.checked === true && d.checked === false) {
            remember_answers[question_number + 1] = "bc";
            multiple_answers = 2;
        } else if (a.checked === false && b.checked === true && c.checked === false && d.checked === true) {
            remember_answers[question_number + 1] = "bd";
            multiple_answers = 2;
        } else if (a.checked === false && b.checked === false && c.checked === true && d.checked === true) {
            remember_answers[question_number + 1] = "cd";
            multiple_answers = 2;
        } else if (a.checked === true && b.checked === false && c.checked === false && d.checked === false) {
            remember_answers[question_number + 1] = "a";
            multiple_answers = 1;
        } else if (a.checked === false && b.checked === true && c.checked === false && d.checked === false) {
            remember_answers[question_number + 1] = "b";
            multiple_answers = 1;
        } else if (a.checked === false && b.checked === false && c.checked === true && d.checked === false) {
            remember_answers[question_number + 1] = "c";
            multiple_answers = 1;
        } else if (a.checked === false && b.checked === false && c.checked === false && d.checked === true) {
            remember_answers[question_number + 1] = "d";
            multiple_answers = 1;
        } else {
            multiple_answers = 3;
        }
    } else {
        if (document.getElementById("text") != "") {
            remember_answers[question_number + 1] = document.getElementById("text").value;
        } else {
            remember_answers[question_number + 1] = "";
        }
    }
    

    //abcd zabezpieczenie
    if (multiple_answers > 2) {
        alert("Wybrałeś za dużo odpowiedzi");
    } else {
        question_number += 1;
        console.log(question_number);
    }
    

    //zmiany pytań

    //abcd
    if (question_number === 5) {
        document.getElementById("f1").style.transition = "0s";
        document.getElementById("f2").style.transition = "0s";
        document.getElementById("prawda").checked = false;
        document.getElementById("falsz").checked = false;
        document.getElementById("answers_tf").style.position = "absolute";
        document.getElementById("answers_tf").style.visibility = "hidden";
        document.getElementById("answers_multiple").style.position = "relative";
        document.getElementById("answers_multiple").style.visibility = "visible";
        document.getElementById("navigators").style.marginTop = "5.35vh";
    }
    
    //otwarte
    if (question_number === 10) {
        document.getElementById("answers_multiple").style.position = "absolute";
        document.getElementById("answers_multiple").style.visibility = "hidden";
        document.getElementById("answers_word").style.position = "relative";
        document.getElementById("answers_word").style.visibility = "visible";
        document.getElementById("navigators").style.marginTop = "8.55vh";
    }
    
    //przycisk zakończenia quizu
    if (question_number === 14) {
        document.getElementById("next").style.position = "absolute";
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("next").style.transition = "0s";
        document.getElementById("end").style.position = "relative";
        document.getElementById("end").style.visibility = "visible";
    } else {
        document.getElementById("next").innerHTML = "Następne pytanie";
    }

    //odpowiednie pytanie
    document.getElementById("question").innerHTML = questions[question_number];


    //uzupełnianie odpowiedzi jeśli wcześniej były uzupełnione

    //prawda fałsz
    if (question_number >= 0 && question_number <= 4) {
        if (remember_answers[question_number + 1] === "prawda") {
            document.getElementById("prawda").checked = true;
            document.getElementById("f1").style.backgroundColor = "#9c9595";
            document.getElementById("f2").style.backgroundColor = "#c9c3c3";
        } else if (remember_answers[question_number + 1] === "falsz") {
            document.getElementById("falsz").checked = true;
            document.getElementById("f1").style.backgroundColor = "#c9c3c3";
            document.getElementById("f2").style.backgroundColor = "#9c9595";
        } else {
            document.getElementById("prawda").checked = false;
            document.getElementById("falsz").checked = false;
            document.getElementById("f1").style.backgroundColor = "#c9c3c3";
            document.getElementById("f2").style.backgroundColor = "#c9c3c3";
        }
    } 
    
    //abcd
    else if (question_number >= 5 && question_number <= 9) {
        if (question_number === 5) {
            document.getElementById("answer_a").innerHTML = answers_a[0];
            document.getElementById("answer_b").innerHTML = answers_b[0];
            document.getElementById("answer_c").innerHTML = answers_c[0];
            document.getElementById("answer_d").innerHTML = answers_d[0];
        }
        if (question_number === 6) {
            document.getElementById("answer_a").innerHTML = answers_a[1];
            document.getElementById("answer_b").innerHTML = answers_b[1];
            document.getElementById("answer_c").innerHTML = answers_c[1];
            document.getElementById("answer_d").innerHTML = answers_d[1];
        }
        if (question_number === 7) {
            document.getElementById("answer_a").innerHTML = answers_a[2];
            document.getElementById("answer_b").innerHTML = answers_b[2];
            document.getElementById("answer_c").innerHTML = answers_c[2];
            document.getElementById("answer_d").innerHTML = answers_d[2];
        }
        if (question_number === 8) {
            document.getElementById("answer_a").innerHTML = answers_a[3];
            document.getElementById("answer_b").innerHTML = answers_b[3];
            document.getElementById("answer_c").innerHTML = answers_c[3];
            document.getElementById("answer_d").innerHTML = answers_d[3];
        }
        if (question_number === 9) {
            document.getElementById("answer_a").innerHTML = answers_a[4];
            document.getElementById("answer_b").innerHTML = answers_b[4];
            document.getElementById("answer_c").innerHTML = answers_c[4];
            document.getElementById("answer_d").innerHTML = answers_d[4];
        }
        if (remember_answers[question_number + 1] === "ab") {
            a.checked = true;
            b.checked = true;
            c.checked = false;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "ac") {
            a.checked = true;
            b.checked = false;
            c.checked = true;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "ad") {
            a.checked = true;
            b.checked = false;
            c.checked = false;
            d.checked = true;
        } else if (remember_answers[question_number + 1] === "bc") {
            a.checked = false;
            b.checked = true;
            c.checked = true;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "bd") {
            a.checked = false;
            b.checked = true;
            c.checked = false;
            d.checked = true;
        } else if (remember_answers[question_number + 1] === "cd") {
            a.checked = false;
            b.checked = false;
            c.checked = true;
            d.checked = true;
        } else if (remember_answers[question_number + 1] === "a") {
            a.checked = true;
            b.checked = false;
            c.checked = false;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "b") {
            a.checked = false;
            b.checked = true;
            c.checked = false;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "c") {
            a.checked = false;
            b.checked = false;
            c.checked = true;
            d.checked = false;
        } else if (remember_answers[question_number + 1] === "d") {
            a.checked = false;
            b.checked = false;
            c.checked = false;
            d.checked = true;
        } else if (remember_answers[question_number + 1] === "") {
            a.checked = false;
            b.checked = false;
            c.checked = false;
            d.checked = false;
        }
    } 
    
    //otwarte
    else {
        if (remember_answers[question_number + 1] != "") {
            document.getElementById("text").value = remember_answers[question_number + 1];
        } else {
            document.getElementById("text").value = "";
        }
    }

    console.log(remember_answers);
}

//===============================================================================================================================================================================================================================================================

function previous() {
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let d = document.getElementById("d");

    if (document.getElementById("prawda").checked) {
        remember_answers[question_number + 1] = "prawda";
    } else if (document.getElementById("falsz").checked) {
        remember_answers[question_number + 1] = "falsz";
    }


    //zmiana pytań

    //prawda fałsz
    if (question_number === 5) {
        document.getElementById("answers_tf").style.position = "relative";
        document.getElementById("answers_tf").style.visibility = "visible";
        document.getElementById("answers_multiple").style.position = "absolute";
        document.getElementById("answers_multiple").style.visibility = "hidden";
        document.getElementById("navigators").style.marginTop = "15vh";
    }

    //abcd
    if (question_number === 10) {
        document.getElementById("answers_multiple").style.position = "relative";
        document.getElementById("answers_multiple").style.visibility = "visible";
        document.getElementById("answers_word").style.position = "absolute";
        document.getElementById("answers_word").style.visibility = "hidden";
        document.getElementById("navigators").style.marginTop = "5.5vh";
    }


    //zabezpieczenie na początku quizu
    if (question_number === 0) {
        console.log("No previous questions");
    } else {
        question_number -= 1;
        console.log(question_number);

        //odpowiednie pytanie
        document.getElementById("question").innerHTML = questions[question_number];


        //sprawdzanie odpowiedzi jeśli były wcześniej uzupełnione

        //prawda fałsz
        if (question_number >= 0 && question_number <= 4) {
            if (remember_answers[question_number + 1] === "prawda") {
                document.getElementById("prawda").checked = true;
                document.getElementById("f1").style.backgroundColor = "#9c9595";
                document.getElementById("f2").style.backgroundColor = "#c9c3c3";
            } else if (remember_answers[question_number + 1] === "falsz") {
                document.getElementById("falsz").checked = true;
                document.getElementById("f1").style.backgroundColor = "#c9c3c3";
                document.getElementById("f2").style.backgroundColor = "#9c9595";
            } else {
                document.getElementById("prawda").checked = false;
                document.getElementById("falsz").checked = false;
                document.getElementById("f1").style.backgroundColor = "#c9c3c3";
                document.getElementById("f2").style.backgroundColor = "#c9c3c3";
            }
        } 
        
        //abcd
        else if (question_number >= 5 && question_number <= 9) {
            if (question_number === 5) {
                document.getElementById("answer_a").innerHTML = answers_a[0];
                document.getElementById("answer_b").innerHTML = answers_b[0];
                document.getElementById("answer_c").innerHTML = answers_c[0];
                document.getElementById("answer_d").innerHTML = answers_d[0];
            }
            if (question_number === 6) {
                document.getElementById("answer_a").innerHTML = answers_a[1];
                document.getElementById("answer_b").innerHTML = answers_b[1];
                document.getElementById("answer_c").innerHTML = answers_c[1];
                document.getElementById("answer_d").innerHTML = answers_d[1];
            }
            if (question_number === 7) {
                document.getElementById("answer_a").innerHTML = answers_a[2];
                document.getElementById("answer_b").innerHTML = answers_b[2];
                document.getElementById("answer_c").innerHTML = answers_c[2];
                document.getElementById("answer_d").innerHTML = answers_d[2];
            }
            if (question_number === 8) {
                document.getElementById("answer_a").innerHTML = answers_a[3];
                document.getElementById("answer_b").innerHTML = answers_b[3];
                document.getElementById("answer_c").innerHTML = answers_c[3];
                document.getElementById("answer_d").innerHTML = answers_d[3];
            }
            if (question_number === 9) {
                document.getElementById("answer_a").innerHTML = answers_a[4];
                document.getElementById("answer_b").innerHTML = answers_b[4];
                document.getElementById("answer_c").innerHTML = answers_c[4];
                document.getElementById("answer_d").innerHTML = answers_d[4];
            }
            if (remember_answers[question_number + 1] === "") {
                a.checked = false;
                b.checked = false;
                c.checked = false;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "ab") {
                a.checked = true;
                b.checked = true;
                c.checked = false;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "ac") {
                a.checked = true;
                b.checked = false;
                c.checked = true;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "ad") {
                a.checked = true;
                b.checked = false;
                c.checked = false;
                d.checked = true;
            } else if (remember_answers[question_number + 1] === "bc") {
                a.checked = false;
                b.checked = true;
                c.checked = true;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "bd") {
                a.checked = false;
                b.checked = true;
                c.checked = false;
                d.checked = true;
            } else if (remember_answers[question_number + 1] === "cd") {
                a.checked = false;
                b.checked = false;
                c.checked = true;
                d.checked = true;
            } else if (remember_answers[question_number + 1] === "a") {
                a.checked = true;
                b.checked = false;
                c.checked = false;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "b") {
                a.checked = false;
                b.checked = true;
                c.checked = false;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "c") {
                a.checked = false;
                b.checked = false;
                c.checked = true;
                d.checked = false;
            } else if (remember_answers[question_number + 1] === "d") {
                a.checked = false;
                b.checked = false;
                c.checked = false;
                d.checked = true;
            }
        } 
        
        //otwarte
        else {
            if (remember_answers[question_number + 1] != "") {
                document.getElementById("text").value = remember_answers[question_number + 1];
            } else {
                document.getElementById("text").value = "";
            }
        }
    }

    //ukrycie przycisku zakończenia quizu
    if (question_number != 14) {
        document.getElementById("next").style.position = "relative";
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("end").style.transition = "0s";
        document.getElementById("end").style.position = "absolute";
        document.getElementById("end").style.visibility = "hidden";
    }

    console.log(remember_answers);
}

//===============================================================================================================================================================================================================================================================


//===============================================================================================================================================================================================================================================================

function end() {
    let number_of_answers = 0;
    let score = 0;


    //dodanie odpowiedzi ostatniego pytania

    if (document.getElementById("text") != "") {
        remember_answers[question_number + 1] = document.getElementById("text").value;
    } else {
        remember_answers[question_number + 1] = "";
    }


    //sprawdzenie czy użytkownik odpowiedział na wszystkie pytania

    for (let i = 1; i <= 15; i++) {
        if (i > 0 && i <= 5) {
            if (remember_answers[i] != "") {
                number_of_answers += 1;
                console.log(remember_answers[i], number_of_answers);
            } else {
                number_of_answers += 0;
                console.log(remember_answers[i], number_of_answers);
            }
        } else if (i >= 5 && i <= 10) {
            if (remember_answers[i].length === 1) {
                number_of_answers += 1;
                console.log(remember_answers[i], number_of_answers);
            } else if (remember_answers[i].length === 2) {
                number_of_answers += 2;
                console.log(remember_answers[i], number_of_answers);
            } else {
                number_of_answers += 0;
                console.log(remember_answers[i], number_of_answers);
            }
        } else {
            if (remember_answers[i] != "") {
                number_of_answers += 1;
                console.log(remember_answers[i], number_of_answers);
            } else {
                number_of_answers += 0;
                console.log(remember_answers[i], number_of_answers);
            }
        }
    }
    

    //obliczenie wyniku

    if (remember_answers[1] === "falsz") {
        score += 1;
        console.log(remember_answers[1], score)
    } else {
        score += 0;
        console.log(remember_answers[1], score)
    }
    if (remember_answers[2] === "prawda") {
        score += 1;
        console.log(remember_answers[2], score)
    } else {
        score += 0;
        console.log(remember_answers[2], score)
    }
    if (remember_answers[3] === "prawda") {
        score += 1;
        console.log(remember_answers[3], score)
    } else {
        score += 0;
        console.log(remember_answers[3], score)
    }
    if (remember_answers[4] == "prawda") {
        score += 1;
        console.log(remember_answers[4], score)
    } else {
        score += 0;
        console.log(remember_answers[4], score)
    }
    if (remember_answers[5] == "falsz") {
        score += 1;
        console.log(remember_answers[5], score)
    } else {
        score += 0;
        console.log(remember_answers[5], score)
    }
    if (remember_answers[6] === "ac") {
        score += 2;
        console.log(remember_answers[6], score)
    } else if (remember_answers[6] === "ab" || remember_answers[6] === "ad" || remember_answers[6] === "bc" || remember_answers[6] === "cd") {
        score += 1;
        console.log(remember_answers[6], score)
    } else {
        score += 0;
        console.log(remember_answers[6], score)
    }
    if (remember_answers[7] === "ab") {
        score += 2;
        console.log(remember_answers[7], score)
    } else if (remember_answers[7] === "ac" || remember_answers[7] === "ad" || remember_answers[7] === "bc" || remember_answers[7] === "bd") {
        score += 1;
        console.log(remember_answers[7], score)
    } else {
        score += 0;
        console.log(remember_answers[7], score)
    }
    if (remember_answers[8] === "bd") {
        score += 2;
        console.log(remember_answers[8], score)
    } else if (remember_answers[8] === "ab" || remember_answers[8] === "bc" || remember_answers[8] === "bd" || remember_answers[8] === "cd") {
        score += 1;
        console.log(remember_answers[8], score)
    } else {
        score += 0;
        console.log(remember_answers[8], score)
    }
    if (remember_answers[9] === "ac") {
        score += 2;
        console.log(remember_answers[9], score)
    } else if (remember_answers[9] === "ab" || remember_answers[9] === "bc" || remember_answers[9] === "bd" || remember_answers[9] === "cd") {
        score += 1;
        console.log(remember_answers[9], score)
    } else {
        score += 0;
        console.log(remember_answers[9], score)
    }
    if (remember_answers[10] === "cd") {
        score += 2;
        console.log(remember_answers[10], score)
    } else if (remember_answers[10] === "ac" || remember_answers[10] === "ad" || remember_answers[10] === "bc" || remember_answers[10] === "bd") {
        score += 1;
        console.log(remember_answers[10], score)
    } else {
        score += 0;
        console.log(remember_answers[10], score)
    }
    if (remember_answers[11].toLowerCase() == "push" || remember_answers[11].toLowerCase() == "push()") {
        score += 2;
        console.log(remember_answers[11], score)
    } else {
        score += 0;
        console.log(remember_answers[11], score)
    }
    if (remember_answers[12].toLowerCase() == "const") {
        score += 2;
        console.log(remember_answers[12], score)
    } else {
        score += 0;
        console.log(remember_answers[12], score)
    }
    if (remember_answers[13].toLowerCase() == "bootlean") {
        score += 2;
        console.log(remember_answers[13], score)
    } else {
        score += 0;
        console.log(remember_answers[13], score)
    }
    if (remember_answers[14].toLowerCase() == "settimeout" || remember_answers[14] == "settimeout()") {
        score += 2;
        console.log(remember_answers[14], score)
    } else {
        score += 0;
        console.log(remember_answers[14], score)
    }
    if (remember_answers[15].toLowerCase() == "length") {
        score += 2;
        console.log(remember_answers[15], score)
    } else {
        score += 0;
        console.log(remember_answers[15], score)
    }


    if (number_of_answers != 20) {
        alert("Nie wybrałeś wszystkich odpowiedzi");
    } else {
        //ukrywanie i usuwanie niepotrzebnych elementów i pokazywanie potrzebnych
        document.getElementById("question").style.position = "absolute";
        document.getElementById("question").style.visibility = "hidden";
        document.getElementById("text").remove();
        document.getElementById("previous").remove();
        document.getElementById("next").remove();
        document.getElementById("end").remove();
        document.getElementById("score_text").style.position = "relative";
        document.getElementById("score_text").style.visibility = "visible";
        //wyświetlenie tekstu gratulującego
        document.getElementById("score_text").innerHTML = user_name + "<br>Skończyłeś Quiz wiedzy o Javascript<br>Twój wynik to: " + score + "/25 punktów" + '<br><button id="check_score" onclick="check_score()">Sprawdź wyniki</button><button id="refresh" onclick="refresh()">Zagraj ponownie</button>';
    }
}

//===============================================================================================================================================================================================================================================================

function check_score() {
    alert("Chuj cie to ale pytać sie możesz");
    //ukrywanie niepotrzebnych elementów i pokazywanie potrzebnych
    document.getElementById("question").style.position = "relative";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("question").style.fontSize = "5rem";
    document.getElementById("question").innerHTML = "Wyniki Quizu";
    document.getElementById("question").style.marginTop = "5vh";
    document.getElementById("score_text").remove();
    document.getElementById("scores").style.position = "relative";
    document.getElementById("scores").style.visibility = "visible";


    //Sprawdzanie prawda/fałsz

    info = "";
    info += questions[0] + "<br>";

    if (remember_answers[1] == "falsz") {
        info += "<span id='danon'>Prawda</span><br><span id='correct'>Fałsz</span><br><br>";
    } else if (remember_answers[1] == "prawda") {
        info += "<span id='incorrect'>Prawda</span><br><span id='correct'>Fałsz</span><br><br>";
    }


    info += questions[1] + "<br>";

    if (remember_answers[2] == "prawda") {
        info += "<span id='correct'>Prawda</span><br><span id='danon'>Fałsz</span><br><br>";
    } else if (remember_answers[2] == "falsz") {
        info += "<span id='correct'>Prawda</span><br><span id='incorrect'>Fałsz</span><br><br>";
    }


    info += questions[2] + "<br>";

    if (remember_answers[3] == "prawda") {
        info += "<span id='correct'>Prawda</span><br><span id='danon'>Fałsz</span><br><br>";
    } else if (remember_answers[3] == "falsz") {
        info += "<span id='correct'>Prawda</span><br><span id='incorrect'>Fałsz</span><br><br>";
    }


    info += questions[3] + "<br>";

    if (remember_answers[4] == "prawda") {
        info += "<span id='correct'>Prawda</span><br><span id='danon'>Fałsz</span><br><br>";
    } else if (remember_answers[4] == "falsz") {
        info += "<span id='correct'>Prawda</span><br><span id='incorrect'>Fałsz</span><br><br>";
    }


    info += questions[4] + "<br>";

    if (remember_answers[5] == "falsz") {
        info += "<span id='danon'>Prawda</span><br><span id='correct'>Fałsz</span><br><br>";
    } else if (remember_answers[5] == "prawda") {
        info += "<span id='incorrect'>Prawda</span><br><span id='correct'>Fałsz</span><br><br>";
    }


    //sprawdzanie abcd

    info += questions[5] + "<br>";

    if (remember_answers[6] == "ab") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='incorrect'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='danon'>" + answers_d[0] + "</span><br><br>";
    } else if (remember_answers[6] == "ac") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='danon'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='danon'>" + answers_d[0] + "</span><br><br>";
    } else if (remember_answers[6] == "ad") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='danon'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='incorrect'>" + answers_d[0] + "</span><br><br>";
    } else if (remember_answers[6] == "bc") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='incorrect'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='danon'>" + answers_d[0] + "</span><br><br>";
    } else if (remember_answers[6] == "bd") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='incorrect'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='incorrect'>" + answers_d[0] + "</span><br><br>";
    } else if (remember_answers[6] == "cd") {
        info += "<span id='correct'>" + answers_a[0] + "</span><br><span id='danon'>" + answers_b[0] + "</span><br><span id='correct'>" + answers_c[0] + "</span><br><span id='incorrect'>" + answers_d[0] + "</span><br><br>";
    }


    info += questions[6] + "<br>";

    if (remember_answers[7] == "ab") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='danon'>" + answers_c[1] + "</span><br><span id='danon'>" + answers_d[1] + "</span><br><br>";
    } else if (remember_answers[7] == "ac") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='incorrect'>" + answers_c[1] + "</span><br><span id='danon'>" + answers_d[1] + "</span><br><br>";
    } else if (remember_answers[7] == "ad") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='danon'>" + answers_c[1] + "</span><br><span id='incorrect'>" + answers_d[1] + "</span><br><br>";
    } else if (remember_answers[7] == "bc") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='incorrect'>" + answers_c[1] + "</span><br><span id='danon'>" + answers_d[1] + "</span><br><br>";
    } else if (remember_answers[7] == "bd") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='danon'>" + answers_c[1] + "</span><br><span id='incorrect'>" + answers_d[1] + "</span><br><br>";
    } else if (remember_answers[7] == "cd") {
        info += "<span id='correct'>" + answers_a[1] + "</span><br><span id='correct'>" + answers_b[1] + "</span><br><span id='incorrect'>" + answers_c[1] + "</span><br><span id='incorrect'>" + answers_d[1] + "</span><br><br>";
    }


    info += questions[7] + "<br>";

    if (remember_answers[8] == "ab") {
        info += "<span id='incorrect'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='danon'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    } else if (remember_answers[8] == "ac") {
        info += "<span id='incorrect'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='incorrect'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    } else if (remember_answers[8] == "ad") {
        info += "<span id='incorrect'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='danon'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    } else if (remember_answers[8] == "bc") {
        info += "<span id='danon'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='incorrect'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    } else if (remember_answers[8] == "bd") {
        info += "<span id='danon'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='danon'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    } else if (remember_answers[8] == "cd") {
        info += "<span id='danon'>" + answers_a[2] + "</span><br><span id='correct'>" + answers_b[2] + "</span><br><span id='incorrect'>" + answers_c[2] + "</span><br><span id='correct'>" + answers_d[2] + "</span><br><br>";
    }


    info += questions[8] + "<br>";

    if (remember_answers[9] == "ab") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='incorrect'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='danon'>" + answers_d[3] + "</span><br><br>";
    } else if (remember_answers[9] == "ac") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='danon'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='danon'>" + answers_d[3] + "</span><br><br>";
    } else if (remember_answers[9] == "ad") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='danon'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='incorrect'>" + answers_d[3] + "</span><br><br>";
    } else if (remember_answers[9] == "bc") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='incorrect'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='danon'>" + answers_d[3] + "</span><br><br>";
    } else if (remember_answers[9] == "bd") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='incorrect'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='incorrect'>" + answers_d[3] + "</span><br><br>";
    } else if (remember_answers[9] == "cd") {
        info += "<span id='correct'>" + answers_a[3] + "</span><br><span id='danon'>" + answers_b[3] + "</span><br><span id='correct'>" + answers_c[3] + "</span><br><span id='incorrect'>" + answers_d[3] + "</span><br><br>";
    }


    info += questions[9] + "<br>";

    if (remember_answers[10] == "ab") {
        info += "<span id='incorrect'>" + answers_a[4] + "</span><br><span id='incorrect'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    } else if (remember_answers[10] == "ac") {
        info += "<span id='incorrect'>" + answers_a[4] + "</span><br><span id='danon'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    } else if (remember_answers[10] == "ad") {
        info += "<span id='incorrect'>" + answers_a[4] + "</span><br><span id='danon'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    } else if (remember_answers[10] == "bc") {
        info += "<span id='danon'>" + answers_a[4] + "</span><br><span id='incorrect'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    } else if (remember_answers[10] == "bd") {
        info += "<span id='danon'>" + answers_a[4] + "</span><br><span id='incorrect'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    } else if (remember_answers[10] == "cd") {
        info += "<span id='danon'>" + answers_a[4] + "</span><br><span id='danon'>" + answers_b[4] + "</span><br><span id='correct'>" + answers_c[4] + "</span><br><span id='correct'>" + answers_d[4] + "</span><br><br>";
    }


    //sprawdzanie tekstowych

    info += questions[10] + "<br>";

    if (remember_answers[11].toLowerCase() == "push") {
        info += "<span id='correct'>" + remember_answers[11] + "</span><br><br>";
    } else if (remember_answers[11].toLowerCase() == "push()") {
        info += "<span id='correct'>" + remember_answers[11] + "</span><br><br>";
    } else {
        info += "<span id='correct'>push/push()</span><br><span id='incorrect'>" + remember_answers[11] + "</span><br><br>";
    }


    info += questions[11] + "<br>";

    if (remember_answers[12].toLowerCase() == "const") {
        info += "<span id='correct'>" + remember_answers[12] + "</span><br><br>";
    } else {
        info += "<span id='correct'>const</span><br><span id='incorrect'>" + remember_answers[12] + "</span><br><br>";
    }


    info += questions[12] + "<br>";

    if (remember_answers[13].toLowerCase() == "bootlean") {
        info += "<span id='correct'>" + remember_answers[13] + "</span><br><br>";
    } else {
        info += "<span id='correct'>bootlean</span><br><span id='incorrect'>" + remember_answers[13] + "</span><br><br>";
    }


    info += questions[13] + "<br>";

    if (remember_answers[14].toLowerCase() == "settimeout") {
        info += "<span id='correct'>" + remember_answers[14] + "</span><br><br>";
    } else if (remember_answers[14].toLowerCase() == "settimeout()") {
        info += "<span id='correct'>" + remember_answers[14] + "</span><br><br>";
    } else {
        info += "<span id='correct'>settimeout/settimeout()</span><br><span id='incorrect'>" + remember_answers[14] + "</span><br><br>";
    }


    info += questions[14] + "<br>";

    if (remember_answers[15].toLowerCase() == "length") {
        info += "<span id='correct'>" + remember_answers[15] + "</span><br><br>";
    } else {
        info += "<span id='correct'>length</span><br><span id='incorrect'>" + remember_answers[15] + "</span><br><br>";
    }




    document.getElementById("scores").innerHTML = info;
}

//===============================================================================================================================================================================================================================================================

function refresh() {
    location.reload();
}