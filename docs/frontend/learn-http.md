# HTTP学習

## HTTP/2の主な機能
### ストリームの多重化
HTTP1.1 では、リクエストとレスポンスの組を一つずつしか送信できなかった。
HTTP2からは、

### ストリームの優先度付け
リソースの取得は、HTMLの上から読み込んだ順番に行われていた。
HTTP2では、「PRIORITYフレーム」が導入され、クライアントから優先度をサーバ側に通知できるようになった。

### ヘッダ圧縮
