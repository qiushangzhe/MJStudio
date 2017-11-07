import { data2Ai, dataList2AiList } from './../tools/把麻将数据翻译成ai数据';
import { output, outputList } from './../tools/把麻将数据翻译成汉字';

import { card_example_1,card_example_2} from '../common/example';

let card = [];
let cardbuffer = [];
const cardData = dataList2AiList(card_example_2);
for (let item of cardData) {
    if (card[item] === undefined) {
        card[item] = 1;
    } else {
        card[item]++;
    }
}

// -----------普通能组成顺子的牌--------------
function checkOneKan(cardList, begin, end) {
    for (let index = begin; index <= end; index++) {
        if (cardList[index] == 1) {
            if (cardList[index + 1] >= 1 && cardList[index + 2] >= 1) {
                cardList[index]--;
                cardList[index + 1]--;
                cardList[index + 2]--;
                checkOneKan(cardList, begin, end);
            }
        }
    }
    return cardList
}

function checkTwoKan(cardList, begin, end) {
    for (let index = begin; index <= end; index++) {
        if (cardList[index] == 2) {
            if (cardList[index + 1] >= 2 && cardList[index + 2] >= 2) {
                cardList[index] -= 2;
                cardList[index + 1] -= 2;
                cardList[index + 2] -= 2;
                checkTwoKan(cardList, begin, end);
            }
        }
    }
    return cardList
}

function checkThreeKan(cardList, begin, end) {
    for (let index = begin; index <= end; index++) {
        if (cardList[index] == 3) {
            cardList[index] -= 3;
            checkThreeKan(cardList, begin, end);
        }
    }
    return cardList
}

function checkFourKan(cardList, begin, end) {
    for (let index = begin; index <= end; index++) {
        if (cardList[index] == 4) {
            if(cardList[index + 1] >=1 && cardList[index + 2] >=1){
                cardList[index] -=4;
                cardList[index + 1] --;
                cardList[index + 2] --;
                checkFourKan(cardList, begin, end);
            }
        }
    }
    return cardList
}

// [ 1, 1, 1, , 1, 1, 1, , , , , , , , , , , 2, , , , , , 1, 1, 1, , , , , , , 3 ]
// 万 0-8
// 条 9 - 17
// 筒 18 - 26
// 风 27 - 30
// 箭 31 - 34
// 花 35 - 34

function checkHu(cardlist){
    // console.log(cardlist);
    // 选将
    for(let index in cardlist){
        if(cardlist[index] == 2){
            cardlist[index]-=2;
            if(doCheck(cardlist)){
                return true;
            }else{
                cardlist[index]+=2;
            }
        }
    }
    return false;
}

function doCheck(cardlist){
    let buffer = [].concat(cardlist);
    // console.log('------------------刚开始输入的-------------');
    // console.log(buffer);
    // console.log('-----------------------------------------');
    // 万 0-8
    // 条 9 - 17
    // 筒 18 - 26
    // 风 27 - 30
    // 箭 31 - 34
    for(let i = 0;i<3;i++){
        // console.log(`开始检测${i==0?'万':i==1?'条':'饼'}`);
        buffer = checkOneKan(buffer,i*9,i*9+8-2);
        // console.log('1坎检测:',buffer);
        buffer = checkTwoKan(buffer,i*9,i*9+8-2);
        // console.log('2坎检测:',buffer);
        buffer = checkThreeKan(buffer,i*9,i*9+8-2);
        // console.log('3坎检测:',buffer);
        buffer = checkFourKan(buffer,i*9,i*9+8-2);
        // console.log('4坎检测:',buffer);
    }

    buffer = checkThreeKan(buffer,27,34);
    console.log('-------------------result--------------');
    console.log(buffer);
    console.log('-------------------result end--------------');
    for(let card of buffer){
        if(card != 0 && card != undefined){
            console.log(card);
            return false;
        }
    }
    return true;
}
console.time('算法')
console.log(checkHu(card));
console.timeEnd('算法')