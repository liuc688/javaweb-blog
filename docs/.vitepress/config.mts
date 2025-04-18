import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '尚硅谷 JavaWeb',
  description: 'A VitePress Site',
  ignoreDeadLinks: true, // ✅ 禁用死链接检查
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '尚硅谷 JavaWeb', link: '/notes/01_第一章 概述' },
    ],

    sidebar: [
      {
        text: '尚硅谷 JavaWeb',
        items: [
          { text: '第一章 概述', link: '/notes/01_第一章 概述' },
          {
            text: '第四章 XML_Tomcat_HTTP',
            link: '/notes/04_第四章 XML_Tomcat_HTTP',
          },
          { text: '第五章 Servlet', link: '/notes/05_第五章 Servlet' },
          {
            text: '第六章 会话_过滤器_监听器',
            link: '/notes/06_第六章 会话_过滤器_监听器',
          },
          { text: '第七章 前端工程化', link: '/notes/07_第七章 前端工程化' },
          {
            text: '第八章 微头条项目开发',
            link: '/notes/08_第八章 微头条项目开发',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outline: {
      level: [2, 6],
      label: '🦋ON THIS PAGE',
    },
  },
});
