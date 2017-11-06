export enum CardType{
    WAN = 0,TIAO,BING,FENG,JIAN,HUA
}

export interface MjCard{
    type : CardType;
    point : number;
}

export const type_str = ['万','条','饼','','',''];
export const point_str = ['1','2','3','4','5','6','7','8','9'];
export const feng_str = ['东风','南风','西风','北风'];
export const other_str = ['红中','发财','白板'];
export const hua_str = ['春','夏','秋','冬','梅','兰','竹','菊'];

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