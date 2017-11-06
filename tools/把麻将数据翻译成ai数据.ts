/**
        1-9万
        a[0] - a[8]
        1-9筒
        a[9] - a[17]
        1-9条
        a[18] - a[27]
        东 南 西 北
        a[28] a[29] a[30] a[31]
        中 发 白
        a[32] a[33] a[34] a[35]
        梅 兰 竹 菊
        a[36] a[37] a[38] a[39]
        春 夏 秋 冬
        a[40] a[41] a[42] a[43]
 */ 
import { MjCard ,CardType} from './../common/card';
export function data2Ai(card:MjCard){
    if(card.type == CardType.WAN){
        return card.point;
    }else if(card.type == CardType.TIAO){
        return card.point + 9;
    }else if(card.type == CardType.BING){
        return card.point + 19;
    }else if(card.type == CardType.FENG){
        return card.point + 29;
    }else if(card.type == CardType.JIAN){
        return card.point + 33;
    }else if(card.type == CardType.HUA){
        return card.point + 36;
    }else {
        console.log('出错',card);
    }
}

export function ai2Data(index){

}