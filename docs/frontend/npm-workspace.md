# npm workspace

リポジトリをモノレポにする際、各パッケージにpackage.jsonを置くことになると思うが、パッケージ間で共通のライブラリをそれぞれのディレクトリで同一管理するのは少し煩雑である。

```npm workspace```を設定すれば、モノレポのルートでパッケージを管理することが可能になる。  
例えば、```eslint``` や ```prettier``` といった補助ツールは、ディレクトリ毎に管理すると、ディレクトリの数だけメンテナンスコストがかかってしまう。  
これをルートディレクトリで管理することができれば、共通の設定をルートに定義しておき、各ディレクトリで共通ルールを継承できるようになる。  

## Workspace設定
例えば以下のようなモノレポ設定にする場合、
```
.
| - server-a
|   | -- package.json
| - server-b
|   | -- package.json
```

以下のコマンドでworkspaceが設定される。
```$ npm init -w ./server-a```  

## 依存関係のインストール

ルートパッケージにインストールする際は、通常通りのコマンドで行う。  
```$ npm install --save abbrev```  

ワークスペースにパッケージをインストールする際、ワークスペースを指定する。  
```$ npm install -w server-a abbrev --save```  


上記コマンドでインストールされたパッケージは、ルートディレクトリの ```node_modules``` にsymbolic linkで保存される。  
各workspaceの ```package.json``` には登録される。



## ワークスペースのコマンド実行

```$ npm run build -w server-a```

## 参考
### [フロントエンドのモノレポ構成はスケーリングの夢を見るか](https://cybozu.github.io/frontend-expert/posts/considerations-for-monorepo)
業務内での実運用例

