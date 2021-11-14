# TypeScriptの組み込み型

## any と unknownの違い

unknownはanyと同様、任意の型を代入することができる。

```typescript
const jsonStr = `{"id": 1, "name": "hogehoge"}`;
const anyJson: any = JSON.stringify(jsonStr);
const unknownJson: unknwon = JSON.stringify(jsonStr);
```

異なるのは、```unknwon``` な型のデータのプロパティを参照しようとした場合、
型チェックでエラーが発生する。

```typescript
const jsonStr = `{"id": 1, "name": "hogehoge"}`;
const anyJson: any = JSON.stringify(jsonStr);
const unknownJson: unknwon = JSON.stringify(jsonStr);

console.log(anyJson['id']);  // OK!
console.log(anyJson['name']); // OK!

console.log(unknownJson['id']);  // ERROR (>_<)
console.log(unknownJson['name']); // ERROR (>_<)

console.log({...unknownJson}) // ERROR (>_<)

```

つまり、```unknown```なデータは型アサーションを強制してくれる。

## 参考
[公式](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)