//ciclo i numeri da 1 a 100
for(let i=1; i<101; i++){

    //se il numero è divisibile per 5 e per 3 stampo fizzbuzz
    //altrimenti se il numero è divisibile solo per 5 stampo buzz
    //altrimenti se il numero è divisibile solo per 3 stampo fizz
    //altrimenti stampo il numero
    if(i % 5===0 && i % 3===0){
        console.log("fizzbuzz");
    }else if(i % 5===0){
        console.log("buzz");
    }else if(i % 3===0){
        console.log("fizz");
    }else{
        console.log(i);
    }
}