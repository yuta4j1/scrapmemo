# Cache Control Header

```Cache-Control``` は、キャッシュを保存するためのディレクティブではない。  
デフォルトでブラウザはキャッシュを実施するため、そのキャッシュを有効にしたくない場合や、有効期限を設定したい場合などに設定する。  

```Cache-Control``` には様々なディレクティブが設定できる。

|ディレクティブ|説明|
| :--: | -- |
| private | CDNなどのPublicなキャッシュには置かれない。クライアントのブラウザのローカルキャッシュなどのprivateなキャッシュのみに置かれる。 |
| public | Authorization ヘッダーなどのキャッシュされてはいけない情報も、キャッシュするよう指定するディレクティブ。  デフォルトでpublicキャッシュには置かれるので、先述のようなユースケース以外は指定してはいけない。 |
| no-store | キャッシュしない。 |
| no-cache | キャッシュに、保存されているコンテンツを再利用する際に、必ず更新がないかどうかをチェックさせる。 |
| max-age | レスポンスが新鮮（有効）である期間を示す。 |
| s-maxage | max-ageと同様。共有キャッシュのみ有効にしたい場合はこちら。 |
| must-revalidate | キャッシュが新鮮なうちは、キャッシュからデータが取得されることを示す。 |
| proxy-revalidate | must-revalidateと同様。共有キャッシュのみに有効にしたい場合はこちら。 |
| immutable | レスポンスが新鮮な間は更新されない。 |
| stale-while-revalidate | キャッシュを再検証している間、古いレスポンスの再利用が可能なことを示す。 |



```上記のHTTPヘッダーは、ブラウザキャッシュ（privateキャッシュ）としては概ね正しいが、publicキャッシュとしてはCDNサーバーの仕様次第になってくるため、CDNを利用する際は別途その仕様を把握する必要がある。```



## Service Worker Cache vs HTTP Cache

前提として、Service WorkerはWebアプリケーションにネイティブライクな振る舞いを持たせるものであり、オフラインキャッシュを前提としている。  
そもそもの用途が異なるため、ブラウザ側のキャッシュ問題を解決するためにService Workerを導入するといった類のものではない。  

それを踏まえた上で、両者の違いは以下のStackoverflowに答えがあった。
https://stackoverflow.com/questions/36916074/why-use-a-service-worker-for-caching-when-browser-cache-handles-the-caching

> Service Worker を使用すると、ネットワーク リクエストを完全に制御できます。fetch イベントに対して必要なものは何でも返すことができます。特定のファイルの過去または現在の内容である必要はありません。

fetchイベントに介入できることが大きな特徴。

### web.devの記事
https://web.dev/service-worker-caching-and-http-caching/


## HTTPキャッシュを利用して不要なリクエストを防ぐ
https://web.dev/http-cache/

## no-cacheの危険性について
https://kiririmode.hatenablog.jp/entry/20170625/1498389317

上記のテーブルに記載の通り、```no-cache``` は「キャッシュさせない」といった類のものではなく、  
キャッシュはするが、キャッシュの検証を都度行う、といったものになる。  
キャッシュしたくなければ、```no-store``` を使う。



## 疑問点
- HTMLとかはあったけど、JSONって304になったっけ？
- Service Workerのキャッシュとブラウザのキャッシュの違いは？
- Cloud CDNで上記のヘッダーの実際の動作確認してみたい。弊社の検証環境の依頼してみる。
