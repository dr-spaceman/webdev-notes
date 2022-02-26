// Compile to js and check for type errors
// $ tsc greeter.ts

// Create React App with Typescript
// $ create-react-app my-app --scripts-version=react-scripts-ts
// react-scripts-ts is a set of adjustments to take the standard create-react-app project pipeline and bring TypeScript into the mix.

/** @TYPES **/

// Types defined by Javascript
type types = {
  Undefined: undefined //the set with the only element undefined
  Null: null //the set with the only element null
  Boolean: boolean //the set with the two elements false and true
  Number: number //the set of all numbers
  BigInt: bigint //the set of all arbitrary-precision integers
  String: string //the set of all strings
  Symbol: symbol //the set of all symbols
  Object: object //the set of all objects (which includes functions and arrays)
}

// Additional types defined by Typescript
type TypescriptTypes = {
  Any: any
  Array: Array<any>
}

// Types in React
type ReactTypes = {
  SyntheticEvent: React.SyntheticEvent<HTMLInputElement> // This is usually good enough
  FormEvent: React.FormEvent<HTMLFormElement>
}

// Array type
let arr1: number[] = [] // Array populated with numbers
let arr2: Array<number> = [] // Same

// Tuple type
let point: [number, number] = [7, 4] // without defining

// Function types
;(param: any) => any
// example
const func: (num: number) => string = (num: number) => String(num)
// example
function stringify123(callback: (num: number) => string): string {
  return callback(123)
}
stringify123(param => `foo${param}`)

// Function overloads
function makeDate(timestamp: number): Date // Overload #1
function makeDate(m: number, d: number, y: number): Date // Overload #2
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  // Function declaration
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678) // Function call (Overload #1)
const d2 = makeDate(5, 5, 5) // Function call (Overload #2)
const d3 = makeDate(1, 3) // Error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

// Union types
function foo(bar: number | string): void {
  return undefined
}

// Undefined/null aren't implied types
let maybeNumber: number = null // @ts-ignore: Type 'null' is not assignable to type 'number'. (2322)
let maybeNumber: null | number = null //ok
maybeNumber = 123 //ok

// Assign a more specific type than would be inferred by TS
// TS infers HTML element
const myCanvas = document.getElementById('main_canvas')
// Specify a canvas element
const myCanvasSpecific = document.getElementById(
  'main_canvas'
) as HTMLCanvasElement
const myCanvasSpecificWithAngleParams = <HTMLCanvasElement>(
  document.getElementById('main_canvas')
)

/** @Interface */

// Interfaces are extensible, whereas type aliases are not so much
// @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear = getBear()
bear.name
bear.honey

// Interfaces as records
interface Point {
  x: number
  y: number
  square(): number
  square: () => number
  distance(between: Point): number
}

// Interfaces + Union type
interface StoriesFetchInitAction {
  type: 'STORIES_FETCH_INIT'
}
interface StoriesFetchSuccessAction {
  type: 'STORIES_FETCH_SUCCESS'
  payload: Stories
}
interface StoriesFetchFailureAction {
  type: 'STORIES_FETCH_FAILURE'
}
interface StoriesRemoveAction {
  type: 'REMOVE_STORY'
  payload: Story
}
type StoriesAction =
  | StoriesFetchInitAction
  | StoriesFetchSuccessAction
  | StoriesFetchFailureAction
  | StoriesRemoveAction
const reducer = (action: StoriesAction) => {}

/** @Parameters */

// Parameterized types use angular brackets
class SimpleStack<T> {
  // Parameter <T> will be assigned string type later
  #data: Array<T> = []
  push(x: T): void {
    this.#data.push(x)
  }
  pop(): T {
    const result = this.#data.pop()
    if (result === undefined) {
      throw new Error()
    }
    return result
  }
  get length() {
    return this.#data.length
  }
}
const stringStack = new SimpleStack<string>()
stringStack.push('first')
stringStack.push('second')
stringStack.length === 2
stringStack.pop() === 'second'

// Assign types to Map using parameterized type
const myMap: Map<boolean, string> = new Map([
  [false, 'no'],
  [true, 'yes'],
])

// Parameterized type for function
function id<T>(x: T): T {
  return x
}
id<number>(123) // call function, assign <T> type number

function fillArray<T>( // introduce the type variable
  len: number,
  elem: T // use the type variable, pick it up from the argument.
) {
  return new Array<T>(len).fill(elem) // pass on T to the Array constructor.
}
// %inferred-type: string[]
const star_arr = fillArray(3, '*')
assert.deepEqual(star_arr, ['*', '*', '*'])

// Add constraint on an input using the `extends` keyword
function longest<Type extends { length: number }>(a: Type, b: Type) {
  // Type must have `length` prop
  // Because we constrained Type to { length: number }, we were allowed to
  // access the .length property of the a and b parameters. Without the type
  // constraint, we wouldn’t be able to access those properties because the
  // values might have been some other type without a length property.
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3])
// longerString is of type 'alice' | 'bob'
const longerString = longest('alice', 'bob')
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100) //Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
const ok = longest({ value: 10, length: 10 }, { value: 100, length: 100 })

// Function overloads
// Allow variety of inputs and types in a function
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
const d3 = makeDate(1, 3)

/** @UTILITY */

/**
 * @Partial<Type>
 * Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 **/
interface Todo {
  title: string
  description: string
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

/**
 * @Required<Type>
 * Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
 */
interface Props {
  a?: number
  b?: string
}
const obj: Props = { a: 5 }
const obj2: Required<Props> = { a: 5 } // Error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

/**
 * @Readonly<Type>
 * Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */
interface Todo {
  title: string
}
const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}
todo.title = 'Hello' // Cannot assign to 'title' because it is a read-only property.

/**
 * @Record<Keys, Type>
 * Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.
 */
interface CatInfo {
  age: number
  breed: string
}
type CatName = 'miffy' | 'boris' | 'mordred'
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

/**
 * @Pick<Type, Keys>
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

/**
 * @Omit<Type, Keys>
 * Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 */
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
type TodoPreviewOmit = Omit<Todo, 'description'>
const todoOmit: TodoPreviewOmit = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
}

/**
 * @Exclude<UnionType, ExcludedMembers>
 * Exclude from `UnionType` all `ExcludedMembers`
 */
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // "c"
type T2 = Exclude<string | number | (() => void), Function> // string | number

/**
 * @Extract<Type, Union>
 * Constructs a type by extracting from Type all union members that are assignable to Union.
 */
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // "a"
type T1 = Extract<string | number | (() => void), Function> // () => void

/**
 * @ReturnType<Type>
 * Constructs a type consisting of the return type of function Type.
 */
function f() {
  return { x: 10, y: 3 }
}
type P = ReturnType<typeof f> // Notice `Type` must be a type, NOT a value

/** @MISC */

// .tsx vs .ts files
let a1: any
let s1 = a1 as string // ok in tsx and ts
let s2 = <string>a1 // only valid in ts
