function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value
    }


};

// console.log(formatValue('hi ami achi'));
// console.log(formatValue(50));
// console.log(formatValue(true));


function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    return 0;
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));


class Person {
    name : string;
    age : number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    };

    
}
