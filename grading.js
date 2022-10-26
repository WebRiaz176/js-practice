

// 0-32 = F grade
// 33-39 = D
// 40-49 = C
// 50-59 = B
// 60-69 = A-
// 70-79 = A
// 80-95 = A+
// 96-100 = Golden +

var mark= 78;

if(mark < 33 && mark >= 0){
    console.log('Results: Fail');
}
else if(mark >= 33 && mark <40){
    console.log('Results: D Grade');
}

else if(mark >= 40 && mark < 50){
    console.log('Results: C Grade');
}

else if(mark >= 50 && mark < 60){
    console.log('Results: B Grade');

}

else if(mark >= 60 && mark < 70){
    console.log('Results: A- Grade');

}

else if(mark >=70 && mark < 80){
    console.log('Results: A Grade');

}

else if(mark >= 80 && mark < 96){
    console.log('Results: A+ Grade');

}

else if(mark >= 96 && mark == 100){
    console.log('Results: Golden +');

}

else{
    console.log("Negative Number");
}