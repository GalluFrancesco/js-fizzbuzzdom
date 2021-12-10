//richiamo il container da riempire
const containerHtml = document.querySelector('.container-md');

//creo un elemento div da "appendere" nel containerHtml


//ciclo i numeri da 1 a 100
for(let i=1; i<101; i++){

    //se il numero è divisibile per 5 e per 3 stampo fizzbuzz
    //altrimenti se il numero è divisibile solo per 5 stampo buzz
    //altrimenti se il numero è divisibile solo per 3 stampo fizz
    //altrimenti stampo il numero
    if(i % 5===0 && i % 3===0){
        const divHtml=document.createElement('div');
        divHtml.innerText="fizzbuz";
        containerHtml.append(divHtml);

        
    }else if(i % 5===0){
        const divHtml=document.createElement('div');
        divHtml.innerText="fizzbuz";
        containerHtml.append(divHtml);

        
    }else if(i % 3===0){
        const divHtml=document.createElement('div');
        divHtml.innerText="fizzbuz";
        containerHtml.append(divHtml);

        
    }else{
        const divHtml=document.createElement('div');
        divHtml.innerText="fizzbuz";
        containerHtml.append(divHtml);
    }
}