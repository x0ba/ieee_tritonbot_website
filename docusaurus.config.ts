import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'UCSD TritonBots',
  tagline: 'UC San Diego RoboCup SSL Team',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ysh0305.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'ysh0305',
  projectName: 'ieee_tritonbot_website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mechanical',
        path: 'mechanical',
        routeBasePath: 'mechanical',
        sidebarPath: require.resolve('./sidebarsMechanical.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'electrical',
        path: 'electrical',
        routeBasePath: 'electrical',
        sidebarPath: require.resolve('./sidebarsElectrical.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'embedded',
        path: 'embedded',
        routeBasePath: 'embedded',
        sidebarPath: require.resolve('./sidebarsEmbedded.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'ai',
        routeBasePath: 'ai',
        sidebarPath: require.resolve('./sidebarsAi.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'past_paper',
        path: 'past_paper',
        routeBasePath: 'past_paper',
        sidebarPath: require.resolve('./sidebarsPast.ts'),
        editUrl:
          'https://github.com/ysh0305/ieee_tritonbot_website/tree/main/',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'UCSD TritonBots',
      logo: {
        alt: 'UCSD TritonBots Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docsPluginId: 'docs',
          docId: 'Tritonbots',
          position: 'right',
          label: 'About Us',
        },
        {
          label: 'Current Team',
          position: 'right',
          items: [
            {
              label: 'Mechanical',
              to: '/mechanical',
            },
            {
              label: 'Electrical',
              to: '/electrical',
            },
            {
              label: 'Embedded',
              to: '/embedded',
            },
            {
              label: 'AI',
              to: '/ai',
            },
          ],
        },

        {
          label: 'Past Teams',
          position: 'right',
          items: [
            {
              label: '2025',
              type: 'doc',
              docsPluginId: 'past_paper',
              docId: '2025/Introduction',
            },
          ],
        },

        {
          href: 'https://ssl.robocup.org/',
          label: 'Robocup SSL',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
