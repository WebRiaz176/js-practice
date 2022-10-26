function isEven(number){
    const remainder=number%2;
    if(remainder===0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber= isEven(1986);
console.log(myNumber);
const herNumber= isEven(357);
console.log(herNumber);


function isLeapYear(year){
    const leapYear=year%4;
    if(leapYear===0){
        return true;
    }
    else{
        return false;
    }
}

const cheackLeapYear=isLeapYear(1952);
console.log(cheackLeapYear);


function getSumOfAnArray(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        const index=i;
        const elements= numbers[index];
        sum=sum+elements;
        // console.log(index, elements, sum);
    }
}

const myArrays=[26, 76, 78, 89, 87];
getSumOfAnArray(myArrays);



