// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'penguins\' eggs',
  tagline: 'On the road of Remastersys, Refracta, Systemback and father Knoppix!',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://penguins-eggs.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pieroproietti', // Usually your GitHub org/user name.
  projectName: 'penguins-blog', // Usually your repo name.

  onBrokenLinks: 'warn', // it was throw
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      (
        {
          gtag: {
            /**
             * proprieta GA4: 368716187
             * id-misurazione: G-KWVSZ1TJNZ
             */
            //trackingID: 'G-999X9XX9XX',
            trackingID: 'G-KWVSZ1TJNZ',
            anonymizeIP: true,
          },
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            // editUrl: 'https://github.com/piero-proietti/penguins-blog/tree/main/packages/create-docusaurus/templates/shared/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            // editUrl: 'https://github.com/pieroproietti/penguins-blog/tree/main/packages/create-docusaurus/templates/shared/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/penguins-eggs-social-card.jpg',
      navbar: {
        title: 'penguins\' eggs',
        logo: {
          alt: 'eggs',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },


          {
            href: 'https://github.com/pieroproietti/penguins-eggs/discussions',
            label: 'Discussions',
            position: 'right',
          },
          {
            href: 'https://github.com/pieroproietti/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://sourceforge.net/projects/penguins-eggs/files/ISOS/',
            label: 'ISOs',
            position: 'right',
          },
          {
            href: 'https://sourceforge.net/projects/penguins-eggs/files/DEBS/',
            label: 'DEBs',
            position: 'right',
          },
          {
            href: 'https://github.com/pieroproietti/penguins-eggs-pkgbuilds#penguins-eggs-pkgbuilds',
            label: 'PKGBUILDs',
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
                label: 'Eggs users\' guide',
                to: 'https://penguins-eggs.net/docs/Tutorial/eggs-users-guide',
              },
              {
                label: 'Wardrobe users\' guide',
                to: 'https://penguins-eggs.net/docs/Tutorial/wardrobe-users-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github discussion',
                href: 'https://github.com/pieroproietti/penguins-eggs/discussions',
              },
              {
                label: 'Facebook group',
                href: 'https://www.facebook.com/groups/penguins.eggs',
              },
              {
                label: 'Telegram channel',
                href: 'https://t.me/penguins_eggs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pieroproietti',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pieroproietti/penguins-blog',
              },
            ],
          },
        ],
        copyright: `Copyright © 2017-${new Date().getFullYear()} Piero Proietti - Officina informatica Via Pio Joris 13, Roma.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
