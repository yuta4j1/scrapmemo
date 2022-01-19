# Cloud Pub/Sub

Pub/Sub Messagingを実現するためのマネージドサービス。 
Pub/Sub Messagingについては、[AWSのドキュメント](https://aws.amazon.com/jp/pub-sub-messaging/)が参考になる。
大量のデータストリームを非同期でメッセージングすることに特化している。  

## アーキテクチャ

Publisher -> Topics -> Subscriber

Publisher が Topic に対してメッセージを送信する。  
Subscriberは、Topicsに届いたメッセージを購読する、といった形となっている。

## 参考
[実践Pub/Sub Messaging - Cloud Pub/Subを活用するための開発基盤を作った話](https://www.wantedly.com/companies/wantedly/post_articles/307850#_=_)