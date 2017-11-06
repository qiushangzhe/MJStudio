const type_str = ['万','条','饼','风','',''];
const point_str = ['一','二','三','四','五','六','七','八','九'];
const feng_str = ['东','南','西','北'];
const other_str = ['红中','发财','白板'];
const hua_str = ['春','夏','秋','冬','梅','兰','竹','菊'];

enum CardType{
    WAN = 0,TIAO,BING,FENG,JIAN,HUA
}
interface MjCard{
    type : CardType;
    point : number;
}


function output(card){
    if( card.type == CardType.WAN || 
        card.type == CardType.TIAO ||
        card.type == CardType.BING
    ){
        return `${point_str[card.point]}${type_str[card.type]}`;
    }else if(
        card.type == CardType.FENG
    ){
        return `${feng_str[card.point]}${type_str[card.type]}`;
    }else if(
        card.type == CardType.JIAN
    ){
        return `${other_str[card.point]}`;
    }else if(
        card.type == CardType.HUA
    ){
        return `${hua_str[card.point]}`;
    }
}

let card = {type : 4,point : 2};
console.log(output(card)); // 白板
card = {type : 1,point : 6};
console.log(output(card));  //七条
card = {type : 0,point : 7};
console.log(output(card));  //八万
card = {type : 5,point : 2};
console.log(output(card));  //秋
card = {type : 2,point : 5};
console.log(output(card)); // 六饼


