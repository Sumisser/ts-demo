/**
 * @布尔类型
 */

let isDone: boolean = false;

isDone = true; // 可以赋值布尔值

// 赋值其他类型都会报错，不能将类型xxx分配给类型“boolean”

// isDone = 1;
// isDone = 'a';

/**
 * @数值类型
 */

let num1: number = 1;
let num2: number = NaN;
let infinityNumber: number = Infinity;

/**
 * @字符串类型
 */

let myName: string = 'Ninja';
let myAge: number = 10;

let str = `my name is ${myName}, I'm ${myAge} years old`; // 可以使用模板字符串
console.log(str);

/**
 * @数组类型
 */

//写法1
let arr: number[] = [1, 2, 3]; // 表示由number类型组成的数组
// arr = [1, '2']; // 不能将类型“string”分配给类型“number”

// 写法2
let arr2: Array<number>;
arr2 = [1, 2, 3];

// 使用联合类型可以在数组中传入多种类型
let arr3: (number | string)[]; // 表示数组的组成元素可以是number或者string
// let arr3: Array<number | string>; // 另一种写法
arr3 = [1, 2, '3'];

/**
 * @元组类型
 */

let tup: [string, number, boolean];
tup = ['a', 1, false]; // 赋值时与声明必须保持结构一致
// tup = [1, 'a', true]; // 不允许对应下标类型与指定定义时不一致
// tup = ['a', 1]; // 元素少了不行
// tup = ['a', 1, false, true]; // 越界不行

/**
 * @枚举类型
 */

// 没有枚举需要通过对象作为字段与数字对应关系的文档

const roles = {
  0: 'user',
  1: 'customer',
  10: 'vip',
  99: 'vvip'
};

// 可能需要做很多判断
let role = 1;
if (role.toString() === '1') {
  console.log('this is customer');
}

// 枚举定义，默认每个值为从0开始递增的数字，类似于数组下标

enum Roles {
  user,
  customer,
  vip = 10, // 可以任意指定值
  vvip = 99
}

console.log(Roles.user); // 0 --> 通过字段取值
console.log(Roles[1]); // customer --> 通过值取字段名
console.log(Roles[10]); // vip

/**
 * @任意类型
 */
let anyThing: any = 'hello';
anyThing = 1; // 可以修改为其他任意类型

// 可以访问any类型上的任何属性和方法，即使不存在，编译阶段也不会报错，只能在运行时发现
console.log(anyThing.getName());
console.log(anyThing.width);

/**
 * @void类型
 */

let v: void;

// undefined和null是任意类型的子类型，意思是可以赋值给任意类型，包括void
v = undefined;
v = null; //严格模式？

// 定义函数返回类型
const func = (): void => {
  console.log('no return');
};

/**
 * @null和undefined
 */
let u: undefined = undefined;
let n: null = null;

//可以赋值给任意类型
let num: number = undefined;
