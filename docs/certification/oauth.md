# OAuth認証
## OAuth2.0
認可。OAuth2.0は、認証+認可。
ただし、OAuthは認証としては不完全であり、主に認可に使用される。

## OAuthのユースケース
> OAuth 2.0 とは、サービスのユーザーが、サービス上にホストされている自分のデータへのアクセスを、自分のクレデンシャルズ (ID & パスワード) を渡すことなく、第三者のアプリケーションに許可するためのフレームワークである。

https://qiita.com/TakahikoKawasaki/items/f2a0d25a4f05790b3baa

つまり、ログインID、パスワードの入力をユーザに強制することなく、アプリケーションのリソースアクセス権限を付与する手段として用いられる。

```
重要なのは「第三者のアプリケーションにユーザーの ID & パスワードを渡さない」という点です。
これを実現したいがために OAuth があります。
この点を理解しておけば、自社サービス用の OAuth サーバーを用意すべきか否かは、
次の条件が成り立つかどうかで判断可能ということが分かると思います。

1. 自社サービスでは、ユーザーのデータを管理している。
2. 自社サービスのユーザーが使うアプリケーションを、第三者に作成してもらいたい。
3. 第三者が作成するアプリケーションには、ユーザーの ID とパスワードを教えたくない。
```

## なぜサービス間連携にOAuthが必要なのか？

- 連携用のクレデンシャルを安全に受け渡し出来ない
  - パスワードの漏洩リスクがあること
    - ユーザーが入力をする必要がある為
  - パスワードがハッシュ化されずに保持されること
- 連携元毎のクレデンシャル管理が出来ない
  - パスワード漏洩が起こると、全ての連携で再連携が必要なこと
  - 特定の連携を解除するには、パスワード変更が必要なこと
- 有効期限の設定が難しい
- アクセス権限の設定が難しい

https://tech.layerx.co.jp/entry/2022/10/31/115025

## OAuth2.0を認証で使うことの危険性
[単なる OAuth 2.0 を認証に使うと、車が通れるほどのどでかいセキュリティー・ホールができる」](https://www.sakimura.org/2012/02/1487/)

OAuthをログイン認証に使用すると、アクセストークンを盗んでしまえば、ログインができてしまうセキュリティホールが生まれる。

アクセストークンをゲットしてしまえばログインできることの危険性、大きな違いはIDトークンの検証フロー
https://zenn.dev/uma002/articles/152fcef798730b

https://tech-lab.sios.jp/archives/25565

## 認可 = OAuthではない
OAuthが必要とならないWebアプリでも認可は必要。
当然の話で認可 = OAuthではなく、アクセストークンを発行する必要もない。

例えばユーザ情報にアクセスキーが入っていて、APIアクセスする際にアクセスキーを検証する、みたいな実装ができると良い。
↓例えば、以下のパターン
https://www.ipa.go.jp/security/awareness/vendor/programmingv2/contents/102.html

認可は認証のように判定を行うものでなく、認可用の鍵の発行タイミングを指す。
鍵の検証は、リソースアクセスのタイミングで行う。
https://dev.classmethod.jp/articles/authentication-and-authorization/