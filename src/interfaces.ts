/*
    interface use to define types of specific structure of data like object.
*/

export interface IColors {
    blue: string,
    green: string,
    pink: string
}

const colors: IColors = {
    blue: 'blue',
    green: 'green',
    pink: 'pink'
}

console.log('Colors:', colors)