/*
    type alias is use for union type or primitive data types.
    note: this is useful with statuses
*/

export type Colors = string | number | {
    blue: string,
    green: string,
    pink: string
}

const colors: Colors = {
    blue: 'blue',
    green: 'green',
    pink: 'pink'
}

const stringColor = 'blue'
const numberColor = 0

console.log('Colors:', colors, stringColor, numberColor)