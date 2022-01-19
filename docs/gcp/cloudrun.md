# Cloud Run

## Cloud Runを採用する条件
https://cloud.google.com/run/docs/fit-for-run

- [ローカル永続ファイルシステムを使用しない](https://cloud.google.com/run/docs/reference/container-contract#filesystem)

## Graceful Shutdownのコードサンプル
https://cloud.google.com/run/docs/samples/cloudrun-sigterm-handler

## 負荷分散

Cloud LoadbalancingとCloud Run を併用する場合、Cloud Runをロードバランサのバックエンドとして扱うため、ServerlessNEGを前段におく必要がある。

