//FUNÇÕES ANÔNIMAS
//sintaxe : ()=>{}
/*
() - padrão de passagem de argumento em funções
 => : é a forma que usamos para identificar o termo arrow
{} : é o escopo (bloco de código) da função propriamente*/

function somar(a,b){
   let total = a+b;
   console.log(total) 
}
somar(2,10);

//atribuindo uma função anônima a uma varíavel
let subtrair = (num1, num2)=>{
    let total = num1-num2;
    console.log(total);
}
subtrair(15,17);

let numeros = [1,2,3,10];
numeros.map((item)=>{
    console.log(item);
});