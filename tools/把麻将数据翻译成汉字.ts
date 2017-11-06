import * as cardInfo from "../common/card";
export function output(card){
    if( card.type == cardInfo.CardType.WAN || 
        card.type == cardInfo.CardType.TIAO ||
        card.type == cardInfo.CardType.BING
    ){
        return `${cardInfo.point_str[card.point]}${cardInfo.type_str[card.type]}`;
    }else if(
        card.type == cardInfo.CardType.FENG
    ){
        return `${cardInfo.feng_str[card.point]}`;
    }else if(
        card.type == cardInfo.CardType.JIAN
    ){
        return `${cardInfo.other_str[card.point]}`;
    }else if(
        card.type == cardInfo.CardType.HUA
    ){
        return `${cardInfo.hua_str[card.point]}`;
    }else{
        return "不认识" + JSON.stringify(card);
    }
}

export function outputList (cardlist){
    let buffer = [];
    for(let card of cardlist){
        buffer.push(output(card));
    }
    return buffer;
}

// let card = {type : 4,point : 2};
// console.log(output(card)); // 白板
// card = {type : 1,point : 6};
// console.log(output(card));  //七条
// card = {type : 0,point : 7};
// console.log(output(card));  //八万
// card = {type : 5,point : 2};
// console.log(output(card));  //秋
// card = {type : 2,point : 5};
// console.log(output(card)); // 六饼
// card = {type : 3,point : 2};
// console.log(output(card)); // 六饼

