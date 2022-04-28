let age: number;
age = 12.1;

let username: string;
username = "bobby";

let hobbies: string[];
hobbies = ['Sports', 'Skydiving'];

let person: {
    name: string;
    age: number;
}[];

let course: string | number = 'Name';
course = 123;

type Animal = {
  name: string;
  age: number;
};
let monkey: Animal
let lion : Animal = {name: "bobby", age: 12}

const funcName = (a: number, b: number): number | string  => {
	return a + b;
}

const insertAtBeginning =<T> (array: T[], value: T) => {
    const newArray = [value, ...array];
    return newArray
}
const numberArray = insertAtBeginning<number>([1, 2, 3], -1); //-1, 1, 2, 3
const stringArray = insertAtBeginning<string>(['a', 'b'], 'c'); //c, a, b

let number: Array<number> = [1,2,3,4];