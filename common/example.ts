import { translate } from './../tools/把汉字翻译成麻将数据';
import { MjCard } from './card';
export const card_example_1:Array<MjCard> = translate([
    '1万','2万','3万','5万','7万','9条','9条','红中','红中','红中','6饼','7饼','8饼','6万'
]);

export const card_example_2:Array<MjCard> = translate([
    '1万','2万','3万','发财','发财'
]);
