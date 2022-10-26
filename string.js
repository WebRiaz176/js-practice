const userName = 'Blackpink';
const userInput = 'blackpink';

if(userName.toLowerCase()===userInput.toLowerCase()){
    // console.log('valid user');

}

else{
    // console.log('wrong input');
}
// console.log(userName.toLowerCase());
// console.log(userInput.toLowerCase());
// console.log(userInput.toUpperCase());


const lyrics = "tumi km on acho";

const searchString= 'Tumi';
const doesExitsOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExitsOneLine);

//indexOf
// console.log(lyrics.indexOf('00'));


//startsWith--endsWith
// console.log(lyrics.startsWith('tmi'));
// console.log(lyrics.endsWith('acho'));


//split
const lyrics1 = 'Allah is my love. I love Allah so much. Here is my name.'

const wordDivide= lyrics1.split(' ');
// console.log(wordDivide);

const sentenceDivide = lyrics1.split('.');
// console.log(sentenceDivide);

const letterDivide = lyrics1.split('');
// console.log(letterDivide);


// slice
const sliceLyrics = lyrics1.slice(5, 15);
// console.log(sliceLyrics);

//substring
const sliceLyrics1 = lyrics1.substring(5, 15);
// console.log(sliceLyrics1);


//concat
const str1 = 'hello';
const str2 = 'world';

const concatstr = str1.concat('-', str2);
// console.log(concatstr);


//join
const lyrics2=[
    'timi match onek boro',
    'tumi ki koro',
    'kemonb acho'
];
// console.log(lyrics2.join(' : '));


//trim-trimStart-trimEnd
const trimup = '    hey bro   ';
// console.log(trimup.trim());


//charAt--repeat
const lyrics3 = 'Allah is my love. I love Allah so much. Here is my name.'
const index = 7;
// console.log(lyrics3.charAt(index));
// console.log(lyrics3.repeat(3));


//match
let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("Ain"));