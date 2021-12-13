//richiamo il container da riempire
const rowHtml = document.querySelector('.row-custom');


//ciclo i numeri da 1 a 100
for(let i=1; i<101; i++){

    const divHtml=document.createElement('div');
    rowHtml.append(divHtml);

    //se il numero è divisibile per 5 e per 3 stampo fizzbuzz
    //altrimenti se il numero è divisibile solo per 5 stampo buzz
    //altrimenti se il numero è divisibile solo per 3 stampo fizz
    //altrimenti stampo il numero
    if(i % 5===0 && i % 3===0){
        divHtml.innerText="fizzbuzz";
        divHtml.classList.add("box-custom", "text-center", "fw-bold", "fizzbuzz-color")
        
    }else if(i % 5===0){
        divHtml.innerText="buzz";
        divHtml.classList.add("box-custom", "text-center", "fw-bold", "buzz-color")
        
    }else if(i % 3===0){
        divHtml.innerText="fizz";
        divHtml.classList.add("box-custom", "text-center", "fw-bold", "fizz-color")
        
    }else{
        divHtml.innerText=`${i}`;
        divHtml.classList.add("box-custom", "text-center", "fw-bold", "standard-color")

    }
}