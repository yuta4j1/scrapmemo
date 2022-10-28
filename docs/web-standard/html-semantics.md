# HTML Semantics

## <section />

section要素の先頭には基本的にh1などのタイトルを設置する。HTMLのアウトラインとしてはそうなっているのが正しいため。

```
<section>
  <h3>タイトル</h3>
  <p>hogehgoe</p>
</section>
```

そのため、基本的にタイトルを持たない要素に関しては、sectionではなくdivを指定するのが正しい。

また、そのようなsectionにタイトルを持つような場合アクセシビリティの注意点として、```aria-labeledby```


## <article />
sectionと異なり、自己完結型の要素である。
article要素はランドマークとして扱われる。

要素一つで完結する場合は、articleを使用するが、複数のコンテンツで一つのまとまりが構成される場合、
articleの子要素としてsectionを使用する、などの使い方がある。

sectionとarticleはコンテンツを表現する際に使用される。