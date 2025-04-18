import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
// import { Fancybox } from '@fancyapps/ui'; // 从 FancyBox 导入主类
import pkg from '@fancyapps/ui/dist/fancybox/fancybox.umd.js';
const { Fancybox } = pkg;
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './style.css'; // 导入自定义样式

// 初始化 FancyBox 的函数
const initializeFancybox = () => {
  Fancybox.defaults.Hash = false; // 这句话的作用是禁用 Fancybox 插件的“Hash”功能。当我们关闭图片的时候，页面不会刷新
  // 为具有 data-fancybox="gallery" 属性的元素绑定 FancyBox 功能
  Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false, // 不隐藏滚动条
    Images: {},
    Thumbs: {
      showOnStart: false, // 禁用底部缩略图
    },
    Toolbar: {
      display: {
        left: ['infobar'], // 工具栏左侧显示的信息条
        middle: [],
        right: [
          'zoomIn',
          'slideshow',
          'fullscreen',
          'download',
          'thumbs',
          'close',
        ], // 工具栏右侧显示的按钮
      },
    },
  });
  // 为具有 data-fancybox="gallery-a" 属性的元素绑定 FancyBox 功能，配置与 gallery 相同
  Fancybox.bind('[data-fancybox="gallery-a"]', {
    hideScrollbar: false, // 不隐藏滚动条
    Images: {},
    Thumbs: {
      showOnStart: false, // 禁用底部缩略图
    },
    Toolbar: {
      display: {
        left: ['infobar'], // 工具栏左侧显示的信息条
        middle: [],
        right: [
          'zoomIn',
          'slideshow',
          'fullscreen',
          'download',
          'thumbs',
          'close',
        ], // 工具栏右侧显示的按钮
      },
    },
  });
  // 使用类型断言绕过 TypeScript 类型检查，为单图展示的 FancyBox 绑定
  (Fancybox as any).bind('[data-fancybox="single"]', {
    hideScrollbar: false, // 不隐藏滚动条
    groupAttr: false, // 单图展示时禁用分组属性
  });
};

export default {
  ...DefaultTheme, // 扩展 VitePress 默认主题的配置
  setup() {
    // 在组件挂载完成后初始化 FancyBox
    onMounted(() => {
      initializeFancybox(); // 初始化 FancyBox
    });
  },
};
