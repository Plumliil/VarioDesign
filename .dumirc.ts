import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'VarioDesign',
    footer: 'tastaien | Copyright © 2023-present',
    prefersColor: { default: 'light', switch: true },
    socialLinks: {
      github: 'https://github.com/tastien',
    },
    // nav: [
    //   { title: 'Guide', link: '/guide' },
    //   { title: 'Components', link: '/components/Start' }, // components会默认自动对应到src文件夹
    // ],
    nav: [
      { title: '指引', link: '/guide' },
      { title: '组件', link: '/components/Start' }, // components会默认自动对应到src文件夹
    ],
  },
});
