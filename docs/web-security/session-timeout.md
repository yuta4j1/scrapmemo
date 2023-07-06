# セッションタイムアウト

なぜ必要なのか？

セッションハイジャックを防ぐため。
https://truedigitalsecurity.com/blog/why-your-app-needs-a-short-session-timeout-and-google-facebook-and-twitter-dont

タイムアウト時間は、アプリケーションの要件に応じて考慮する必要がある。
例えば、TwitterやYouTubeは長時間アプリケーションを放置しても再ログインを促されることはない。
しかし、あくまでTwitterやYouTubeでの話であって、銀行の業務系アプリケーションで同様の仕様であってはいけない。

セキュリティとの兼ね合いを考慮すること。