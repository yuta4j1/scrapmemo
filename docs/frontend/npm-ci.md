# npm ci

```npm ci``` は、 ```npm install``` 同様、パッケージをインストールするコマンドである。  
違いとしては、  
```npm install``` は、package.json ファイルを元に依存関係のインストールを行うのに対し、  
```npm ci``` は package-lock.json ファイルを見てインストールを行う。  

こうすることにより、CI/CD の際にlockファイルの最新状態が反映されることで、パージョンの異なるパッケージを  
CI環境でインストールしてしまい、テストが落ちる、といった状況を回避できる。  

## 参考
- [introducing-npm-ci-for-faster-more-reliable](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

## npm ciの高速化

CIの際に ```.npm/``` パッケージをキャッシュすることで、npm ci を高速化できるらしい？
https://dev.classmethod.jp/articles/cicd-npm-ci-cache/