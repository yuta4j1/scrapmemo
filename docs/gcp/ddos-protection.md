# GCPにおけるDDos対策

[Best Practices for DDoS Protection and Mitigation on Google Cloud Platform](https://cloud.google.com/files/GCPDDoSprotection-04122016.pdf) に全て書いてある。

> When you enable HTTP(S) Load Balancing or SSL proxy Load Balancing,
Google infrastructure mitigates and absorbs many Layer 4 and below
attacks, such as SYN floods, IP fragment floods, port exhaustion, etc

HTTP（S）負荷分散またはSSLプロキシ負荷分散を有効にすると、
Googleインフラストラクチャは、多くのレイヤー4以下の攻撃（SYNフラッド、IPフラグメントフラッド、ポート枯渇など）を軽減および吸収します。

[DDos攻撃量の指数関数的増加](https://cloud.google.com/blog/products/identity-security/identifying-and-protecting-against-the-largest-ddos-attacks)

## Cloud Armor


