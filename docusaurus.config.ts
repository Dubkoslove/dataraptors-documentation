import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = process.env.GITHUB_OWNER || 'YOUR_GITHUB_USERNAME';
const projectName = process.env.GITHUB_REPO || 'YOUR_REPOSITORY_NAME';
const isUserPage = projectName === `${organizationName}.github.io`;

const config: Config = {
  title: 'Project Documentation',
  tagline: 'Fast, free documentation hosted on GitHub Pages',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: `https://${organizationName}.github.io`,
  baseUrl: isUserPage ? '/' : `/${projectName}/`,

  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false,
        pages: true,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Project logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/getting-started',
          label: 'Quick Start',
          position: 'left',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Project`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
