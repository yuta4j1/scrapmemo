# Serverless NEG

以下のサーバレスサービス
- Cloud Run
- App Engine
- Cloud Functions

をロードバランサのバックエンドグループとして扱う際に使用する。  



## Serverless NEGの制限事項
https://cloud.google.com/load-balancing/docs/negs/serverless-neg-concepts#limitations

### バックエンドサービスに関しての制限
- バックエンドサービスは、リージョン毎に1つのNEGを指定できる。また、1サービス1NEGである。なので、同一リージョンのバックエンドサービスを設定することはできない。
- タイムアウト時間が設定できない。デフォルト60分に固定されている。
- ヘルスチェックはサポートされていない（自前で実装する必要あり。）

## 疑問点
複数のサービスを一つのリージョンに設定することはできない？？

例えば前の案件だと、
- Web UIコンテナ（asia-northeast1）
- APIコンテナ（asia-northeast2）

の二つのグループに対し、ロードバランサを構えるアーキテクチャにしていた。
ロードバランサの設定時に、一つのリージョンに複数のサーバレスバックエンドを選択することができないようになっていた。

https://cloud.google.com/load-balancing/docs/negs/serverless-neg-concepts