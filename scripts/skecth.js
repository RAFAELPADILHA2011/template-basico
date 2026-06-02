//#region VARIAVEIS

const tamanhoCanvasX = 400;
const tamanhoCanvasY = 400;

//#endregion

//#region FUNÇÕES DO P5 JS

function setup() {
    createCanvas(tamanhoCanvasX, tamanhoCanvasY);
    
    suaFuncao();
}

function draw() {
    background(220);
}

//#endregion

//#region MINHAS FUNÇÕES

function suaFuncao() {
    console.log("Olá, Mundo!!!");
}

//#endregion