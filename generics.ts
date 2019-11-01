/**
 *
 * @泛型使用
 */

const identity = <T>(arg: T): T => {
  return arg;
};

identity<number>(1);
// 调用时可以不需要指定泛型变量的具体类型，ts会依据类型推断推断出来
identity(1);

const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([param1, param2]);
};

console.log(getArray(1, 'a', 3));

/**
 * @类型定义中使用泛型
 */

// 声明时定义
let getArray1: <T>(arg: T, times: number) => T[];
getArray1 = (arg, times) => {
  return new Array(times).fill(arg);
};

// 类型别名
type GetArray = <T>(arg: T, times: number) => T[];
const getArray2: GetArray = (arg, times) => {
  return new Array(times).fill(arg);
};

// 接口定义
// 接口属性中使用
interface GetArray1 {
  <T>(arg: T, times: number): T[];
}
const getArray3: GetArray1 = (arg, times) => {
  return new Array(times).fill(arg);
};

// 接口外层使用
interface GetArray2<T> {
  (arg: T, times: number): T[];
}
const getArray4: GetArray2<string> = (arg, times) => {
  return new Array(times).fill(arg);
};

/**
 * @泛型约束
 */

interface ValueWithLength {
  length: number;
}
const getArray5 = <T extends ValueWithLength>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};

getArray5('a', 5);
getArray5([1, 2], 5);
getArray5({ length: 3 }, 5);

/**
 * @泛型约束中使用类型参数
 */

const getProps = (obj, propName) => {
  return obj[propName];
};

const obj = {
  a: 1,
  b: 2
};

getProps(obj, 'a');
getProps(obj, 'b');
getProps(obj, 'c'); // 没有c属性。但没有捕获到这个错误

const getProps1 = <T, K extends keyof T>(obj: T, propName: K) => {
  return obj[propName];
};

// getProps1(obj, 'c'); // 'c'参数不能赋值给 'a'|'b'
