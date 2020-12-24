const fs = require('fs')




function keypad(numberString) {
    let dictionary= readFile();
    // console.log("printing dictionary");
    // console.log(dictionary);
    let filteredWords=filterWords(numberString,dictionary);
    return filteredWords;
}
function readFile() {
    const fs = require('fs');
    let allWords = fs.readFileSync('english_words.txt').toString().split('\r\n');
    return allWords;

}
function filterWords(numberString,dictionary){
    // console.log("Now calling the call back function");
    let numbersMap={
        "2":['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    let numbersMapArray=[];
    for(let i=0;i<numberString.length;i++){
        numbersMapArray.push(numbersMap[numberString[i]]);
    }
    while(numbersMapArray.length>1)
        numbersMapArray= generateStrings(numbersMapArray);
    numbersMapArray=numbersMapArray[0];
    // console.log("print numbers Map array");
    // console.log(numbersMapArray);
    let filteredArray= numbersMapArray.filter((e)=>dictionary.includes(e));
    // console.log("print filtered array");
    // console.log(filteredArray);
    return filteredArray;
}
function generateStrings(numbersMapArray){
    let mergedStrings=[];
    for(let i=0;i<numbersMapArray[0].length;i++){
        for(let j=0;j<numbersMapArray[1].length;j++){
            let tempString=numbersMapArray[0][i]+numbersMapArray[1][j];
            mergedStrings.push(tempString);
        }
    }
    numbersMapArray.shift();
    numbersMapArray.shift();
    numbersMapArray.unshift(mergedStrings);
    return numbersMapArray;
}
 console.log(keypad("23"));
 console.log(keypad("6463"));
 console.log(keypad("43556"));