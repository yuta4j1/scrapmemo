# Reactのテスト戦略について考える

## フロントエンドのテスト分類
1. Unit Test
2. Integration Test
3. E2E Test

### Unit Test
ここでいうUnit（単体）とは、コンポーネントをさす。  
コンポーネントの振る舞いを担保するテスト。

### Integration Test
結合テスト。複数のコンポーネントの相互作用を確認するテスト。

### E2E Test
アプリケーション全体を通した、ユーザーストーリー的なテスト。

## フロントエンドのテストケースを考える
バックエンドのように関数やクラスで完結する世界ではなく、メインのアウトプットがDOMになり、それに対するテストを考える必要がある。

### ロジック
単純で、バックエンド同様テスト対象となる関数に対しテストを書く。
主にJestを使用する。

### UI
上記のテスト分類に記載した、  
Unit Test / Integration Test / E2E Test は、いずれもUIに対するテスト分類である。  

UIの粒度としては、  
Unit Test        ->   コンポーネント単体  
Integration Test ->   コンポーネント郡（ページ単位など）  
E2E Test         ->   アプリケーション全体  

となる。  

バックエンドが、  
単体テスト -> モジュール  
E2E      -> エンドポイント  

という風に分かれているのと同様、  
パーツ単体の振る舞いの正しさ、それらを組み合わせた時の期待する振る舞いの正しさを検証する形になる。  

### フロントエンドはUnit Testを書きすぎてはいけない
考慮は必要だが、コンポーネント単体でテストが必要となることはあまりない。（あったとしても、Integration Testでまかなえる）  
 Unit Testを書きすぎることで、全体としての振る舞いに変化はなくとも、テストが落ちてしまう。
 テストが壊れやすい。それによって開発の速度が落ちることもありそう。  

 
### Integration Test をたくさん書く
React-Testing-Library  
behavior testに特化している。  

### Redux
reducerのテストは必要ない。欲しいのは、ユーザが特定の操作を行ったあと、  
storeがどのように変化したか、ということ。（これがreducerのテスト？）  
react-testing-library と組み合わせ、操作後にストアの中身を検証するテストは欲しい。  

### API Mock
[node-fetch](https://github.com/node-fetch/node-fetch) とか使う？  
https://jestjs.io/ja/docs/bypassing-module-mocks

### E2Eテストの注意点
- 信頼できるテストケースを書く。（タイミングによって落ちるテストは最悪。）
- E2Eテストのメンテナンス



## react-testing-library 注意点
非同期的なUI更新が入るユースケースの場合、その更新処理を  
```
act(() => {
  // 更新処理
})
```
でラップしてやる必要がある。  
https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b


## 参考
- [フロントエンドのテスト戦略 知見が集まるところ](https://zenn.dev/seya/scraps/6f930e359d6a7c)

### [Cypress + TestrailによるFrontend E2E Test の効率化](https://engineering.mercari.com/blog/entry/20201207-cypress-testrail-frontend-e2e-automation/)

テストケース管理のTestrailが便利そう。  
（でも納品物にテスト仕様書 + エビデンスを求められるような仕事だと二重管理になりそうだし使わなさそう）

### [the-testing-trophy-and-testing-classifications (Kent C. Dodds)](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)

### テストを書くモチベーション的な話
https://zenn.dev/takepepe/articles/frontend-testing-motivation

