var cont = 0;
root.querySelector('#btnUp').addEventListener("click", function(){
    cont = cont + 1;
    root.querySelector('#spam').textContent = cont;
    console.log("clickea 1. Valor:", cont);
});
root.querySelector('#btnDw').addEventListener("click", function(){
    cont = cont - 1;
    root.querySelector('#spam').textContent = cont;
    console.log("clickea 2. Valor:", cont);
});