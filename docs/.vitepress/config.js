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
                text: "Cloud Run"
            }
        ]
      },
      {
        link: "/frontend/",
        text: "フロントエンド",
        children: [
            {
                link: "/frontend/typescript",
                text: "TypeScript"
            }
        ]
      },
      {
        link: "/go/",
        text: "Go",
        children: [
            {
                link: "/go/benchmark",
                text: "ベンチマーク"
            }
        ]
      },
    ],
  },
};
