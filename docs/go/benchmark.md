# ベンチマークの方法

```testing``` パッケージにベンチマーク用のモジュールが含まれている。

Benchmarkを実施する関数は、```BenchmarkXxx``` という命名にする。  
この命名規則に従わないと、ベンチマークとして認識してくれない。

```go
package main

import (
	"fmt"
	"testing"
)

func BenchmarkAppendAllocateEveryTime(b *testing.B) {
	base := []string{}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		base = append(base, fmt.Sprintf("No.%d", i))
	}
}

func BenchmarkAppendAllocateOnce(b *testing.B) {
	base := make([]string, b.N)
    b.ResetTimer()
	for i := 0; i < b.N; i++ {
		base[i] = fmt.Sprintf("No.%d", i)
	}
}

```

実行すると、以下のような結果が表示される。

```
$ go test -bench .
goos: darwin
goarch: amd64
BenchmarkAppendAllocateEveryTime-8   	 6298218	       184 ns/op
BenchmarkAppendAllocateOnce-8        	10186527	       118 ns/op
PASS
ok  	_/Users/yoshiakiozaki/Mywork/sandbox-Go/ioread-box	2.932s
```

## フラグ

```-bench .``` あるいは ```-bench=.``` と指定することで、全てのベンチマーク関数を実行してくれる。  
この ```-bench``` フラグに特定の文字列を指定することで、文字列に一致する関数のみを実行してくれるようになる。

例えば上記のコードを、以下のコマンドで実行すると、```Once``` というキーワードに一致する関数のみ実行できている。

```
$ go test -bench Once 
goos: darwin
goarch: amd64
BenchmarkApendAllocateOnce-8   	 8986762	       126 ns/op
PASS
ok  	_/Users/yoshiakiozaki/Mywork/sandbox-Go/ioread-box	1.647s
```


## 参考

- [go標準のbenchmark機能の使い方](https://qiita.com/marnie_ms4/items/7014563083ca1d824905)  

- [Go Doc hdr-Testing_flags](https://pkg.go.dev/cmd/go#hdr-Testing_flags)