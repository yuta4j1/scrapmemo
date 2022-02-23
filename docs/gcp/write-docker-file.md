# Dockerfileのベストプラクティス知見集

## Docker image に alpine を脳死で選択してはいけない
Alpine = 軽量 という先入観で選択するのはよくないという話。  
ユースケースが正しいかを改めて考える。

[軽量Dockerイメージに安易にAlpineを選ぶのはやめた方がいいという話](https://blog.inductor.me/entry/alpine-not-recommended)

- Alpineだとlibcのライブラリの不足により不具合が発生する場合がある。
- 他のベースイメージの軽量化が進んでいるので、そもそもAlpine = 軽量 という考えはやめた方が良い

## どのDocker imageが良いの？
軽量コンテナならDebian Slim がベタな選択肢？  
上記のブログで紹介されているGoogle製のDistrolessというものがある。



## 参考

- [Docker公式:dockerfile_best-practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Distrolessを使った2021年最新のDocker環境を試した[Node.js/NestJS]](https://zenn.dev/necocoa/articles/nestjs-docker)