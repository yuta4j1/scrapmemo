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
          {
            link: "/frontend/accessible-modal",
            text: "アクセシブルなモーダルの実装",
          },
          {
            link: "/frontend/outline-tips",
            text: "アウトラインのデザイン",
          },
        ],
      },
      {
        link: "/a11y/",
        text: "a11y",
        children: [
          {
            link: "/a11y/about-a11y",
            text: "なぜAccessibilityを考慮すべきなのか",
          },
          {
            link: "/a11y/voiceover",
            text: "Voice Overについて",
          },
          {
            link: "/a11y/html-semantics",
            text: "HTML Semanticsを学ぶ",
          },
          {
            link: "/a11y/aria-role",
            text: "ARIA ROLE",
          },
          {
            link: "/a11y/react-accessible-heading",
            text: "ReactコンポーネントでHeadingを正しく実装する",
          },
        ],
      },
      {
        link: "/http/",
        text: "HTTP",
        children: [
          {
            link: "/http/cache-control",
            text: "Cache-Control ヘッダー",
          },
          {
            link: "/http/http2",
            text: "HTTP/2",
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
        link: "/hash-algorithm/",
        text: "ハッシュアルゴリズム",
        children: [
          {
            link: "/hash-algorithm/about-hash",
            text: "ハッシュアルゴリズムとは",
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
