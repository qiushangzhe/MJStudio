import { type_str, point_str, feng_str, other_str, hua_str } from './../common/card';

const testData = [
    '1万','1万','2万','4万','5万','6万','2饼','7饼','8饼','9饼','红中','红中','红中','发财'
];

function changeTextToData(str){
    for(let type in type_str){
        if(type_str[type] == '') continue;
        let typeNum = str.indexOf(type_str[type]);
        if( typeNum !=-1 ){
            return {type : type,point:checkPoint(str)};
        }
    }
    for(let type in feng_str){
        
        let typeNum = str.indexOf(feng_str[type]);
        if(typeNum !=-1){
            
            return {type : 3 ,point : Number(type)};
        }
    }
    for(let type in other_str){
        let typeNum = str.indexOf(other_str[type]);
        if(typeNum !=-1){
            return {type : 4 ,point : Number(type)};
        }
    }
    for(let type in hua_str){
        let typeNum = str.indexOf(hua_str[type]);
        if(typeNum !=-1){
            return {type : 5 ,point : Number(type)}
        }
    }
}

function checkPoint(str){
    for(let point of point_str){
        let pointNum = str.indexOf(point);
        if(pointNum!=-1){
            return Number(point[pointNum]) -1;
        }
    }
}

export function translate(data){
    let buffer = [];
    for(let card of data){
        buffer.push(changeTextToData(card));
    }
    return buffer ;
}

// console.log(translate(testData));
/*
    [ { type: '0', point: '1' },
  { type: '0', point: '1' },
  { type: '0', point: '2' },
  { type: '0', point: '4' },
  { type: '0', point: '5' },
  { type: '0', point: '6' },
  { type: '2', point: '2' },
  { type: '2', point: '7' },
  { type: '2', point: '8' },
  { type: '2', point: '9' },
  { type: 4, point: '0' },
  { type: 4, point: '0' },
  { type: 4, point: '0' },
  { type: 4, point: '1' } ]
*/ 