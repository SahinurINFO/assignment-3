//

// kilometer To Meter problem solving

function kilometerToMeter(valNum){
    var nagtiveNumber = -1;
    var nagtiveNumberZero = -0;
    if(valNum <= nagtiveNumber){
        return 'Kilometers are never negative';
    }else if( valNum == nagtiveNumberZero){
        return 0;
    }else{
        return valNum * 1000;
    }
}





// Watch, Phone, Laptop Total Price show  calculator

function budgetCalculator(watch,phone,loptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var loptopPrice = loptop * 500;
    
    return watchPrice + phonePrice + loptopPrice;
}





// Hotel room rent calculation

function hotelCost(randomDay){
    var day =1;
    if(randomDay <= 10){
        day = randomDay * 100;
    }else if(randomDay <= 20){
        var firstPart = 10 * 100;
        var remaining =randomDay - 10;
        var secondPart = remaining * 80;
        day = firstPart + secondPart;
    }else{
        for(i = 21; i <= randomDay; i++){
            day = randomDay *50;
        }
    } 
    return day;
}





// Find out the name of the biggest word

function megaFriend(arr){
    var long = arr[0];
    for(i = 0; i < arr.length; i++){
        var element = arr[i];
        if(long.length < element.length){
            long = element;
        }
    }
    return long;
}

