# TypeScript

## Conditional Type

型で条件分岐を表現できる。

```ts
type IsNumber<T> = T extends number ? true : false
type T1 = IsNumber<number> // true
type T2 = isNumber<"1"> // false
```

例えば、特定の型のみしか許容しない（それ以外の型を指定するとエラーになる）型を作ることができる。  
以下は配列以外の型を指定するとエラーになる。
```ts
type ArrayOnly<T extends any[]> = T extends any[] ? T : never
```

## infer
主にConditional Type

## 配列要素の参照

配列要素を参照することができる。

```ts
type First<T extends any[]> = T extends [infer U, ...infer args] ? U : never

type FirstNum = First<[3, 1, 2]> // 3
```

## Mapped Types

主にインデックスシグネチャにて使用される。  
```in``` で union type がキーとなるような繰り返し表現を省略することができる

```ts
type Animal = 'cat' | 'dog'

type AnimalFlags = {
  [K in Animal]: boolean
}
```

## never による union types のフィルタリング

neverを含むunion型は、neverを認識しない
```ts
type A = string | never // string
```

例えば、組み込みの ```Exclude``` 型はその特性を活かし、以下のように表せる。
```ts
type MyExclude<T, U> = T extends U ? never : T

type Animal = MyExclude<"dog" | "cat" | "car", "car"> // "dog" | "cat"
```

## 配列型のUnion型展開
配列型を、```number```を使用してUnion型に展開することができる。

```ts
type MyArray = ['aaa', 'bbb', 'ccc']
type T1 = MyArray[number] // "aaa" | "bbb" | "ccc"
```

## ```Promise<A>``` から A を取り出す
```infer``` を使って取り出せる

```ts
type Resolved<T> = T extends Promise<infer U> ? U : never
type Returned = Resolved<Promise<string>> // string
```

## PromiseLike
Promiseのインタフェース判定に使用する。
```onfulfilled```, ```onrejected```など

```ts
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T
```

