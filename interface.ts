/**
 * @接口定义
 */

interface IPerson {
  name: string;
  age: number;
}

let person: IPerson = {
  name: 'jack',
  age: 18
};

// 对象属性类型不同、属性多余、属性缺少都不行

// let person2: IPerson = {
// 	name: 'jack'
// };
// let person3: IPerson = {
// 	name: 'jack',
// 	age: 18,
// 	gender: '男'
// };
// let person4: IPerson = {
// 	name: 'jack',
// 	age: '18'
// };

/**
 * @可选属性
 */
interface Person {
  name: string;
  age?: number;
}

// 可以不定义可选属性
let tom: Person = {
  name: 'tom'
};

// 仍然不允许设置未定义的属性
// let tom2: Person = {
// 	name: 'tom',
// 	gender: 'male'
// };

/**
 * @只读属性
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = {
  x: 10,
  y: 10
};
// 不能修改只读属性
// p.x = 20;

// 修改整对象是可以的，这相当于重新定义对象
p = {
  x: 30,
  y: 20
};

/**
 * @任意属性
 */

// 可以添加任意key为string，value为any的属性
interface AnyProps {
  name: string;
  age?: number;
  [prop: string]: any;
}

let ass: AnyProps = {
  name: 'tiny',
  age: 1,
  gender: 'famale'
};

// 其余属性必须是任意属性的子类型
// interface OtherProps {
// 	name: string; // 类型“string”的属性“name”不能赋给字符串索引类型“number”
// 	age?: number;
// 	[prop: string]: number;
// }

// let oth: AnyProps = {
// 	name: 'tiny',
// 	age: 1,
// 	gender: 'famale'
// };

interface IArr {
  [index: number]: number;
}

let numberArr: IArr = [1, 2, 3];

/**
 * @函数接口
 */

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 完整写法
// const searchFunc: SearchFunc = (source: string, subString: string): boolean => {
//   return source.includes(subString);
// };

// 不需要再单独定义参数和返回值类型
const searchFunc: SearchFunc = (source, subString) => {
  return source.includes(subString);
};

/**
 * @接口继承
 */

interface Food {
  color: string;
}

interface Tomato extends Food {
  radius: number;
}

// 根据Tomato创建的对象除了需要满足Tomato定义的接口形状，还需要被继承接口的属性
const tomato: Tomato = {
  color: 'red',
  radius: 1
};

/**
 * @混合类型接口
 */

interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};

const counter: Counter = getCounter();
counter();
console.log(counter.count); // 1
counter();
console.log(counter.count); // 2
counter();
console.log(counter.count); // 3
