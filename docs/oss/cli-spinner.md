# ora【CLIのスピナーライブラリ】

[ora](https://github.com/sindresorhus/ora) というライブラリ。

READMEのイメージの通り、GUIのローディング時のようなスピナーがターミナルに表示される。  

やっていることはシンプルで、表示 → クリア → 表示 → ... と、表示を一定間隔に切り替えている。  

このライブラリの中で、スピナーに使用している1フレームあたりのテキストデータが、別のパッケージとして提供されている。([cli-spinners](https://github.com/sindresorhus/cli-spinners))