# html-viewer

向网页中插入 `html` + `javascript` + `css` 的代码查看器，可实时预览效果。

## 效果

![demo](https://github.com/wenonly/html-viewer/raw/main/demo/demo1.jpg)
![code](https://github.com/wenonly/html-viewer/raw/main/demo/demo2.jpg)

效果文章示例地址 [https://www.cnblogs.com/wenonly/p/17045178.html](https://www.cnblogs.com/wenonly/p/17045178.html)

## 使用方式

1. 先引入打包好的 js 库

```html
<script
  src="https://npm.elemecdn.com/@wenonly/html-viewer/lib/html-viewer.umd.js"
  defer
></script>
```

2. 准备好需要显示的对应 `html` + `javascript` + `css` 代码的`zip`文件，结构如下：

```
zipFolder
  |- index.html
  |- index.css
  |- index.js
```

3. 在页面中使用`html-viewer`标签创建查看器，通过`src`配置`zip`地址下载远程代码

```html
<html-viewer src="https://.../code.zip" iframe-width="800px"></html-viewer>
```

## html-viewer 参数

| 参数          | 类型   | 描述                      |
| ------------- | ------ | ------------------------- |
| src           | string | 需显示的代码 zip 文件地址 |
| iframe-width  | string | 内部 iframe 容器宽度      |
| iframe-height | string | 内部 iframe 容器高度      |
| wrapper-style | string | div 容器 style            |
