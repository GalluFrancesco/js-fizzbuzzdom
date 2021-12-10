//richiamo il container da riempire
const containerHtml = document.querySelector('.container-md');

//creo un elemento div da "appendere" nel containerHtml
//const divHtml=document.createElement('div');

//ciclo i numeri da 1 a 100
for(let i=1; i<101; i++){

    //se il numero è divisibile per 5 e per 3 stampo fizzbuzz
    //altrimenti se il numero è divisibile solo per 5 stampo buzz
    //altrimenti se il numero è divisibile solo per 3 stampo fizz
    //altrimenti stampo il numero
    if(i % 5===0 && i % 3===0){
        //divHtml.innerHTML+="fizzbuz";
        //containerHtml.append(divHtml);

        containerHtml.innerHTML+="<div>fizzbuzz</div>";
    }else if(i % 5===0){
        //divHtml.innerHTML+="buz";
        //containerHtml.append(divHtml);

        containerHtml.innerHTML+="<div>buzz</div>";
    }else if(i % 3===0){
        //divHtml.innerHTML+="fizz";
        //containerHtml.append(divHtml);

        containerHtml.innerHTML+="<div>fizz</div>";
    }else{
        //divHtml.innerHTML+=`${i}`;
        //containerHtml.append(divHtml);

        containerHtml.innerHTML+=`<div>${i}</div>`
    }
}