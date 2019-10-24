/**
 * @类型推断
 */
// 没有指定类型，会根据赋值情况推断出变量类型
let numberStr = 'seven'; // 推断类型为string
// numberStr = 7; // 无法将number赋值

// 没有指定类型，也没有赋值，会被推断为any类型
let myFavoriteNumber; // 推断为any类型
// 以后不再做类型检查
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

/**
 * @联合类型
 */

// 可以是string和number中的任意一种类型
let unionType: string | number;
unionType = 1;
unionType = 'a';

// 使用联合类型可以在数组中传入多种类型
let arr3: (number | string)[]; // 表示数组的组成元素可以是number或者string
// let arr3: Array<number | string>; // 另一种写法
arr3 = [1, 2, '3'];

// 只能访问此联合类型的所有类型里共有的属性或方法
let len: number | string;
// console.log(len.length); //类型“string | number”上不存在属性“length”。
len = 'a';
console.log(len.length); // 类型确定，可以访问

/**
 * @类型断言
 */

// 类型“string | number”上不存在属性“length”。
// ts的类型检测类似于木桶效应，只检测最不利情况
// function getLength(something: string | number): number {
// 	if (something.length) {
// 		return something.length;
// 	} else {
// 		return something.toString().length;
// 	}
// }

// 通过类型断言解决
function getLength(something: string | number): number {
	if ((<string>something).length) {
		return (<string>something).length;
	} else {
		return something.toString().length;
	}
}

// function getLength(something: string | number): number {
// 	if ((something as string).length) {
// 		return (something as string).length;
// 	} else {

// 		return something.toString().length;
// 	}
// }

/**
 * @类型别名
 */

type Name = string; //Name表示string类型
let firstname: Name = 'lisa';

// 类型别名在联合类型中使用
type ageType = string | number;
type OtherType = boolean | ageType[]; // 表示布尔类型或者由string/number组成的数组
let typeVar: OtherType;
typeVar = true;
typeVar = [1, '2'];

/**
 * @字符串字面量类型
 */

// Person类型只能是'age'/ 'name' / 'gender'三个字符串中的一种
type Person = 'age' | 'name' | 'gender';
let jack: Person = 'age';

// 表示数字类型或者值只能是'number'的类型
type P = 'number' | number;
let s: P = 1;
s = 'number';
