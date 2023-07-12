console.log("Módulo 1 - Semana 5 - Aula 1");

/*function somaDoisValores(a, b){
    var resultadoDaSoma = a+b;
    return resultadoDaSoma


var retorno = somaDoisValores(3,5)

console.log(retorno);
}*/

function f(x, y){
const resultado = x * 2 - y
return resultado;
}

const retorno = f(6, 8);
console.log(retorno);

// Exemplo de função passageira sem nome, função de POP-UP

(function nomeDaFuncao(){
    console.log("Função de uso único!")
})();

// Funções que recebem outras funções como parâmetros - Arrow functions
// Comparação Arrow Function
const funcaoComum = function funcaoComum(){
    console.log("Função comum")
}
funcaoComum();

const funcaoArrow = () => {
    console.log("Função arrow") 
};

funcaoArrow()
