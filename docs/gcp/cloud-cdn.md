# Cloud CDNによるEdge-Computing

ロードバランサの前段にCDNを配置することができる。

## 3rd Party製のCDNを利用する
CDN Interconnectを利用し、Akamai, FastlyやCloudflareといった、外部のエッジコンピューティングを利用することができる。  
https://cloud.google.com/blog/ja/products/gcp/google-cloud-cdn-joins-cdn-interconnect-providers-delivering-choice-to-users  

特にFastlyやCloudflareはEdge Workerといって、CDN上でJSを実行できる環境を提供している。  
これにより、さらに複雑なキャッシュコントロールを可能にしている。