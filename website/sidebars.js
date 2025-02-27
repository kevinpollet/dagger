/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  "0.2": [
    {
      type: "category",
      label: "Introduction",
      collapsible: false,
      items: [
	      "introduction/what",
	      "introduction/vs",
	],
      link: {
        type: 'doc',
        id: 'introduction/index'
      },
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      link: {
        type: 'doc',
        id: 'getting-started/index'
      },
      items: ["getting-started/local-dev", "getting-started/ci-environment"],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: false,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Core Concepts',
      },
      items: [
        "core-concepts/action",
        "core-concepts/plan",
        "core-concepts/client",
        "core-concepts/secrets",
        "core-concepts/what-is-cue",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: false,
      collapsed: false,
      items: [
        "guides/contributing",
        "guides/coding-style",
        "guides/container-images",
        "guides/cli-telemetry",
        "guides/docker-cli-load",
        "guides/docker-cli-run",
        "guides/custom-buildkit",
        "guides/self-signed-certificates",
        "guides/pushing-plan-dependencies",
	"guides/handling-outputs",
      	"guides/migrate-from-dagger-0.1",
        "guides/go-ci",
      ],
    },
    {
      type: "doc",
      label: "FAQ",
      id: "faq/index",
      customProps: {
        "items": [
          { docId: "faq/empty-buildkit-cache", href: "1229/empty-buildkit-cache" },
          { docId: "faq/better-logs", href: "1230/better-logs" },
          { docId: "faq/always-execute", href: "1231/always-execute" },
          { docId: "faq/chain-actions", href: "1232/chain-actions" },
          { docId: "faq/default-values-cue", href: "1233/default-values-cue" },
        ]
      }
    },
    {
      type: "category",
      label: "References",
      collapsible: false,
      collapsed: false,
      items: [
        "references/core-actions-reference",
        "references/dagger-types-reference",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      collapsible: false,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Use Cases',
        description:
          "See how others are using Dagger for their CI/CD pipelines. This includes integrating with CI environments.",
      },
      items: [
        "use-cases/go-docker-swarm",
      ],
    },
    {
      type: "link",
      label: "⬅️ Dagger 0.1",
      href: "/0.1",
    },
  ],
  "0.1": [
    {
      type: "category",
      label: "Introduction",
      collapsible: true,
      items: ["introduction/what_is", "introduction/vs"],
    },
    {
      type: "doc",
      id: "install",
    },
    {
      type: "category",
      label: "Learn Dagger",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/what_is_cue",
        "learn/get-started",
        "learn/google-cloud-run",
        "learn/kubernetes",
        "learn/aws-cloudformation",
        "learn/github-actions",
        "learn/dev-cue-package",
        "learn/package-manager",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      collapsible: true,
      collapsed: true,
      items: ["use-cases/ci"],
    },
    {
      type: "category",
      label: "Universe - API Reference",
      collapsible: true,
      collapsed: true,
      // generate the sidebar for reference doc automatically
      items: [
        {
          type: "autogenerated",
          dirName: "reference",
        },
      ],
    },
    {
      type: "category",
      label: "Administrator Manual",
      collapsible: true,
      collapsed: true,
      items: ["administrator/operator-manual"],
    },
    {
      type: "link",
      label: "Dagger 0.2 ➡️",
      href: "/",
    },
  ],
};
