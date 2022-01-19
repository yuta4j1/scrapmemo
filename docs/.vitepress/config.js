module.exports = {
  title: "yuta4j1.scrapmemo.com",
  description: "yuta4j1の技術メモ",
  themeConfig: {
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/yuta4j1",
      },
    ],
    sidebar: [
      {
        link: "/gcp/",
        text: "GCP",
        children: [
          {
            link: "/gcp/cloudrun",
            text: "Cloud Run",
          },
          {
            link: "/gcp/cloud-pubsub",
            text: "Cloud Pub/Sub",
          },
          {
            link: "/gcp/ddos-protection",
            text: "GCPにおけるDDos対策",
          },
        ],
      },
      {
        link: "/frontend/",
        text: "フロントエンド",
        children: [
          {
            link: "/frontend/typescript",
            text: "TypeScript",
          },
          {
            link: "/frontend/builtin-types",
            text: "TypeScriptの組み込み型",
          },
          {
            link: "/frontend/optimistic-ui",
            text: "楽観的UI更新",
          },
          {
            link: "/frontend/package-lockfile",
            text: "package-lock.json",
          },
          {
            link: "/frontend/npm-workspace",
            text: "npm workspace",
          },
        ],
      },
      {
        link: "/go/",
        text: "Go",
        children: [
          {
            link: "/go/benchmark",
            text: "ベンチマーク",
          },
        ],
      },
      {
        link: "/oss/",
        text: "OSS",
        children: [
          {
            link: "/oss/cli-spinner",
            text: "ora【CLIのスピナーライブラリ】",
          },
        ],
      },
      {
        link: "/web-security/",
        text: "Webセキュリティ",
        children: [
          {
            link: "/web-security/insecure-desirialization",
            text: "Insecure Desirialization",
          },
        ],
      },
      {
        link: "/certification/",
        text: "認証",
        children: [
          {
            link: "/certification/oauth",
            text: "OAuth認証",
          },
          {
            link: "/certification/openid-connect",
            text: "OpenID Connect",
          },
        ],
      },
    ],
  },
};
