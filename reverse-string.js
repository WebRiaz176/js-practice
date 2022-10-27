function reverseString(text){

let reversed = '';
for(let i = text.length -1; i >= 0; i--){
    const element = text[i];
    reversed = reversed + element;
    // console.log(element, reversed);
}
return reversed;
}

const myString = 'I am a good boy';
const reverse = reverseString(myString);
// console.log('reversed input:', reverse);


//word-revresed

const wordString = 'I am a Good Boy';
let results=[];
function wordReverse(str){
    for(let i = str.length -1; i >= 0; i--){
        const elements = str[i];
        results.push(elements);

    }
    const reverseds = results.join('');
    console.log(reverseds);
    return results;
}

const myWordString = wordReverse(wordString);
console.log(myWordString);