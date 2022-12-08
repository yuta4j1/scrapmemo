# アウトラインのデザイン

デフォルトのアウトラインを決められる場合は、以下のようにする。

```css
* {
  outline: 4px solid black;
  outline-offset: 4px;
}
```

以下のように**アウトラインの無効化はしないこと。**  
このようにするとアクセシビリティが損なわれてしまう。

```css
* {
  outline: none;
}
```

UIの要件としてアウトラインの表示が適切でないなどの理由がある場合は、アウトラインを透過させるなどすると良い。

```css
input:focus {
  outline: 2px solid transparent;
}
```

## focus-visible
ボタン要素などに対して、tabキー移動などで明示的にフォーカスされた場合にのみアウトラインを表示したい場合は、```focus-visible```を使用する。

```css
button:focus-visible {
  outline: 4px solid black;
  outline-offset: 4px;
}
```

## focus-within

以下のように、input要素中にアイコンを含めるようなテキストボックスを作りたい場合、外枠を`<div>`で囲む必要がある。  
その際に、`<input>` 要素へのフォーカスを無効化し、`<div>` へのフォーカスを当てたい場合に、 ```focus-within``` を使用する。  

```html
<div>
  <input type="text" />
</div>
```

```css
div:focus-within {
  outline: 2px solid black;
}
```
