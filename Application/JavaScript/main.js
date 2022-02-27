// Declares the variables

var goalButton1 = document.getElementById("goal-option1");
var goalButton2 = document.getElementById("goal-option2");
var goalButton3 = document.getElementById("goal-option3");
var goalButton4 = document.getElementById("goal-option4");
var goalButton5 = document.getElementById("goal-option5");
var goalButton6 = document.getElementById("goal-option6");

var goal1p = document.getElementById("description1");
var goal2p = document.getElementById("description2");
var goal3p = document.getElementById("description3");
var goal4p = document.getElementById("description4");
var goal5p = document.getElementById("description5");
var goal6p = document.getElementById("description6");

var mod1 = document.getElementById("mod1");
var mod2 = document.getElementById("mod2");
var mod3 = document.getElementById("mod3");
var mod4 = document.getElementById("mod4");

var class1 = document.getElementById("class1");
var class2 = document.getElementById("class2");
var class3 = document.getElementById("class3");
var class4 = document.getElementById("class4");

// Functions that opens and close the goals <p> 

let showGoal1 = function () {
    goal1p.style.display = "block";
    goal2p.style.display = "none";
    goal3p.style.display = "none";
    goal4p.style.display = "none";
    goal5p.style.display = "none";
    goal6p.style.display = "none";

    mod1.innerHTML = ("Módulo 1 - Como estudar nos EUA - Aspectos básicos");
    mod2.innerHTML = ("Módulo 1 - Como estudar nos EUA - Aspectos básicos");
    mod3.innerHTML = ("Módulo 1 - Como estudar nos EUA - Aspectos básicos");
    mod4.innerHTML = ("Módulo 1 - Como estudar nos EUA - Aspectos básicos");

    class1.innerHTML = ("Aula 1 - O que é Application?");
    class2.innerHTML = ("Aula 2 - Quais são as documentações necessárias?");
    class3.innerHTML = ("Aula 3 - Provas e testes necessários");
    class4.innerHTML = ("Aula 4 - Como encontrar as melhores Univerisades para o seu perfil");
}

goalButton1.onclick = showGoal1;

let showGoal2 = function () {
        goal2p.style.display = "block";
        goal1p.style.display = "none";
        goal3p.style.display = "none";
        goal4p.style.display = "none";
        goal5p.style.display = "none";
        goal6p.style.display = "none";

        mod1.innerHTML = ("Módulo 2 - Bolsas de Estudos");
        mod2.innerHTML = ("Módulo 2 - Bolsas de Estudos");
        mod3.innerHTML = ("Módulo 2 - Bolsas de Estudos");
        mod4.innerHTML = ("Módulo 2 - Bolsas de Estudos");

        class1.innerHTML = ("Aula 1 - Tipos de Bolsas de Estudos");
        class2.innerHTML = ("Aula 2 - Aspectos das Bolsas Acadêmicas");
        class3.innerHTML = ("Aula 3 - Aspetos das Bolsas Esportivas");
        class4.innerHTML = ("Aula 4 - Como conquistar uma Bolsas de Estudos");
    } 

    goalButton2.onclick = showGoal2;

    let showGoal3 = function () {
            goal3p.style.display = "block";
            goal1p.style.display = "none";
            goal2p.style.display = "none";
            goal4p.style.display = "none";
            goal5p.style.display = "none";
            goal6p.style.display = "none";

            mod1.innerHTML = ("Módulo 3 - Tênis nos EUA");
            mod2.innerHTML = ("Módulo 3 - Tênis nos EUA");
            mod3.innerHTML = ("Módulo 3 - Tênis nos EUA");
            mod4.innerHTML = ("Módulo 3 - Tênis nos EUA");

            class1.innerHTML = ("Aula 1 - Divisões Competitivas");
            class2.innerHTML = ("Aula 2 - Qual a melhor divisão de acordo com o objetivo");
            class3.innerHTML = ("Aula 3 - A importância do CR");
            class4.innerHTML = ("Aula 4 - Utilizando as ferramentas de pesquisa da Sphera Academy");
        }

        goalButton3.onclick = showGoal3;

    let showGoal4 = function () {
        goal4p.style.display = "block";
        goal1p.style.display = "none";
        goal2p.style.display = "none";
        goal3p.style.display = "none";
        goal5p.style.display = "none";
        goal6p.style.display = "none";

        mod1.innerHTML = ("Módulo 4 - Por trás do sucesso");
        mod2.innerHTML = ("Módulo 4 - Por trás do sucesso");
        mod3.innerHTML = ("Módulo 4 - Por trás do sucesso");
        mod4.innerHTML = ("Módulo 4 - Por trás do sucesso");

        class1.innerHTML = ("Aula 1 - O que eu preciso para ser aprovado?");
        class2.innerHTML = ("Aula 2 - Conheça o Rafael, jogador de Tênis na Stanford Unitesity");
        class3.innerHTML = ("Aula 3 - Conheça o João, jogador de Tênis na Tennessee Technological University");
        class4.innerHTML = ("Aula 4 - Como utilizar a ferramenta de Mentores da Sphera Academy");
    }

    goalButton4.onclick = showGoal4;

    let showGoal5 = function () {
        goal5p.style.display = "block";
        goal1p.style.display = "none";
        goal2p.style.display = "none";
        goal3p.style.display = "none";
        goal4p.style.display = "none";
        goal6p.style.display = "none";

        mod1.innerHTML = ("Módulo 5 - Curso TOEFL");
        mod2.innerHTML = ("Módulo 5 - Curso TOEFL");
        mod3.innerHTML = ("Módulo 6 - Curso SAT");
        mod4.innerHTML = ("Módulo 6 - Curso SAT");

        class1.innerHTML = ("Aula 1 - O que é o TOEFL? ");
        class2.innerHTML = ("Aula 2 - Como se registrar para o TOEFL");
        class3.innerHTML = ("Aula 1 - O que é o SAT");
        class4.innerHTML = ("Aula 2 - Como se registrar para o SAT");
    }

    goalButton5.onclick = showGoal5;

    let showGoal6 = function () {
        goal6p.style.display = "block";
        goal1p.style.display = "none";
        goal2p.style.display = "none";
        goal3p.style.display = "none";
        goal4p.style.display = "none";
        goal5p.style.display = "none";

        mod1.innerHTML = ("Módulo 7 - Comunidade Sphera Academy");
        mod2.innerHTML = ("Módulo 7 - Comunidade Sphera Academy");
        mod3.innerHTML = ("Módulo 8 - Após a Faculdade");
        mod4.innerHTML = ("Módulo 8 - Após a Faculdade");

        class1.innerHTML = ("Aula 1 - A importância de fazer conexões");
        class2.innerHTML = ("Aula 2 - Como utilizar a comunidade da Sphera Academy");
        class3.innerHTML = ("Aula 1 - Como conseguir um emprego no campus durante a Faculdade");
        class4.innerHTML = ("Aula 2 - Como conseguir um emprego fora do campus durante a Faculdade");
    }

    goalButton6.onclick = showGoal6;

// Functions that changes the mod and classes acording to the goal






