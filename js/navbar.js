var a = document.getElementById("LoginBtn");
var b = document.getElementById("Cadastrobtn");
var x = document.getElementById("login");
var y = document.getElementById("cadastro");

function login() {

    x.style.left = "4px"
    y.style.right = "-520px"
    a.className +- "botao-branco"
    b.className += "botao-nav"
    x.style.opacity = 1
    y.style.opacity = 0
}


function cadastro() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "botao-branco";
    b.className += "botao-nav";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function functionmenu(){

        var i = document.getElementById("navMenu");
        
        if(i.className === "nav-menu"){
        i.className += " responsive"
        }else{
            i.className = "nav-menu"
        }

}