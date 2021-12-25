# package-lock.json

```npm install``` した際、 package.jsonに記載してある依存関係（dependencies, devDependencies）のライブラリが全てインストールされる。  
この依存関係のインストール (```node_modules``` ツリー)を忠実に再現する為にlockファイルが必要となる。  
（なぜpackage.jsonのみだと再現できないかの理由については、バージョンの記法に要因がある。```package.jsonのバージョン表記```を参照）  
主な目的は上記の理由だが、それ以外にも以下の目的がある。

- lockファイルで依存関係を完全再現できるようになるため、node_modulesをコミットする必要がなくなる。
- ソース管理で差分確認ができる。
- パッケージインストールの際に必要となるメタデータがlockファイルに記載されており、メタデータ解決のプロセスをスキップできるため、インストール時間が最適化される

## package.jsonのバージョン表記
npmのバージョン表記は、semantic versioningに従っている。  
（[npmのドキュメント](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)にも記載がある。）  

また、[node-semver](https://github.com/npm/node-semver#versions) のREADMEに、詳しい記載がある。

### チルダ(~) と キャレット(^)の使い分け
バージョンに範囲を持たせる際、package.jsonファイルは以下のように、バージョンの前にチルダ、もしくはキャレットを記載する。  
（バージョンに範囲を持たせたくない場合は、先頭に何も付けずに"3.2.4"のように指定する）

```json
{
  "devDependencies": {
    "vitepress": "^0.19.2"
  }, 
}
```

先頭にチルダ(~)を付けるか、キャレット(^)を付けるかで、バージョン範囲が変化する。

- チルダ(~)  
```明記したところ以下のバージョンがあがることのみ許容```  
~1.1.2 = 1.1.2 <= version < 1.2.0

- キャレット(^)  
```一番左側にある、ゼロでないバージョニングは変えない (それ以下があがることは許容)```  
^1.2.3 := 1.2.3 <= version < 2.0.0

チルダ(~)よりキャレット(^)の方が、バージョン範囲を広く取っていることがわかる。  

また、バージョンを入力すると範囲を確認することができる、[semver calculator](https://semver.npmjs.com/) が公開されており、これはバージョン範囲を直感的に把握するのに役立ちます。

## 参考
[package.json の チルダ(~) と キャレット(^)](https://qiita.com/sotarok/items/4ebd4cfedab186355867)