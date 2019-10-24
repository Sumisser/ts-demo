/**
 * @函数类型
 */

// 定义函数
const add = (x, y) => x + y; // js中的函数
const addNumber = (x: number, y: number): number => x + y; // 指定参数和返回值类型
// 调用时传入的参数类型错误、参数过多、参数过少都是不允许的
// addNumber(1, '2');
// addNumber(1);
// addNumber(1, 2, 3);

// const addNumber = (x: number, y: number): string => x + y; // 不能将类型“number”分配给类型“string”
// addNumber('a', 1); // 类型“"a"”的参数不能赋给类型“number”的参数

const log = (x: number): void => {
	console.log(x);
};

const errFunc = (): never => {
	while (true) {
		console.log(1);
	}
};
const errFunc2 = (): never => {
	throw Error('never');
};

/**
 * @函数表达式
 */

const myAdd: (x: number, y: number) => number = (x, y) => x + y;

const myAdd2: (num1: number, num2: number) => number = (x, y) => x + y;

type FuncType = (x: number, y: number) => number;
const myAdd3: FuncType = (x, y) => x + y;

/**
 * @可选参数
 */

type getNameType = (firstName: string, lastName?: string) => string;
const getName: getNameType = (firstname, lastname) => {
	if (lastname) {
		return `${firstname} · ${lastname}`;
	} else {
		return firstname;
	}
};

getName('leroy');

/**
 * @剩余参数
 */

type nameType = (firstName: string, ...restName: string[]) => string;
const buildName: nameType = (firstName, ...restName) => {
	return firstName + ' ' + restName.join(' ');
};

// 第二个以后的参数会被放进restName数组中
buildName('a', 'b', 'c');
