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
          {
            link: "/gcp/write-docker-file",
            text: "Dockerfileのベストプラクティス知見集",
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
          {
            link: "/frontend/npm-ci",
            text: "npm ci",
          },
          {
            link: "/frontend/react-test",
            text: "Reactのテスト戦略について考える",
          },
          {
            link: "/frontend/file-upload",
            text: "一般的なファイルアップロード実装",
          },
        ],
      },
      {
        link: "/css/",
        text: "CSS",
        children: [
          {
            link: "/css/filter-function",
            text: "filter-function",
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
        link: "/rust/",
        text: "Rust",
        children: [
          {
            link: "/rust/ownership",
            text: "所有権",
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
      {
        link: "/project-work/",
        text: "プロジェクト関連",
        children: [
          {
            link: "/project-work/estimate",
            text: "工数見積もりについて",
          },
        ],
      },
    ],
  },
};
