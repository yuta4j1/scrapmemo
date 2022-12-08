# アクセシブルなモーダルの作成

## アクセシブルなモーダルの要件
- モーダル要素に role 属性、aria-modal 属性、aria-labelledby 属性、aria-describedby 属性が付与されている
- モーダルを開くと、モーダル内の最初の focusable な要素に自動でフォーカスされる
- モーダルが開いている間、モーダル以外の要素に aria-hidden 属性が付与される
- モーダルが開いている間、モーダル以外の要素のスクロールが無効化される
- モーダルが開いている間、モーダル内でフォーカスがトラップされる
- Esc キーを押下すると、モーダルが閉じる
- モーダルの外側をクリックすると、モーダルが閉じる
- モーダルを閉じると、モーダルが開く前にフォーカスされていた要素にフォーカスが戻る


## aria-hidden
```aria-modal="true"``` が付与されていれば、読み上げリーダーはそれ以外の要素に対し読み上げを行わない。
ただし、その仕様が未実装の読み上げリーダーも存在するため、モーダル以外の要素に ```aria-hidden="true"``` を付与する必要がある。  

以下のライブラリで上記を実現できる。  

[aria-hidden](https://github.com/theKashey/aria-hidden)

## フォーカストラップ
モーダル以外の要素にフォーカスを当てたくない。  
そのため、以下のライブラリを使う。

[focus-trap](https://github.com/focus-trap/focus-trap)





## 参考
https://zenn.dev/dqn/articles/36045bb89d5d69