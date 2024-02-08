/* 
    Use enums to know the correct spelling of data or to know the correct data when your are comparing it to another data. 
    e.g color or id from api response 
*/

export enum Colors {
    Blue,
    Green,
    Pink
}

const blue = Colors.Blue
const green = Colors.Green
const pink = Colors.Pink

console.log('Colors:', blue, green, pink)