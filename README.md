# html-viewer

向网页中插入 `html` + `javascript` + `css` 的`iframe`效果查看器

## 使用方式

1. 先引入打包好的 js 库

```html
<script src="https://.../html-viewer.umd.js" defer></script>
```

2. 准备好需要显示的对应 `html` + `javascript` + `css` 代码
3. 使用`HtmlViewer.createHtmlViewer`创建`iframe`dom 节点

```javascript
// htmlViewStack 为自己提供的需要预览代码的对象
const iframe = HtmlViewer.createHtmlViewer({
  html: htmlViewStack.html,
  css: htmlViewStack.css,
  js: htmlViewStack.js,
});
```

```typescript
// HtmlViewer.createHtmlViewer 的参数
interface createHtmlViewerOptions {
  html?: string[] | string;
  js?: string[] | string;
  css?: string[] | string;
  iframeStyle?: CSSStyleDeclaration; // iframe的style样式
}
```

4. 将`iframe`嵌入到需要的位置

```javascript
// wrap 为要放置预览器的容器 , wrap可为document.createElement('div')
wrap.appendChild(iframe);
```

## 效果

![demo](https://github.com/wenonly/html-viewer/raw/main/demo/demo1.jpg)
![code](https://github.com/wenonly/html-viewer/raw/main/demo/demo2.jpg)

文章示例地址 [https://www.cnblogs.com/wenonly/p/17045178.html](https://www.cnblogs.com/wenonly/p/17045178.html)

## 在博客园使用的示例 js 代码

使用的`Cnblogs-Theme-SimpleMemory`的主题

```javascript
<script type="text/javascript">
    function createHtmlIframe() {
        const htmlViewStack = {
            html: [],
            css: [],
            js: [],
            wrap: document.createElement('div')
        }
        function appendHtmlViewer() {
            if (htmlViewStack.html.length || htmlViewStack.css.length || htmlViewStack.js.length) {
                htmlViewStack.wrap.appendChild(HtmlViewer.createHtmlViewer({
                    html: htmlViewStack.html,
                    css: htmlViewStack.css,
                    js: htmlViewStack.js,
                }))
            }
        }
        const pres = document.querySelectorAll('#main pre')
        for (let pre of pres) {
            const text = pre.innerText
            if (text.includes('<!-- htmlView:html -->')) {
                htmlViewStack.html.push(text.replace('<!-- htmlView:html -->\n', ''))
                pre.parentNode.removeChild(pre)
            } else if (text.includes('/* htmlView:css */')) {
                htmlViewStack.css.push(text.replace('/* htmlView:css */\n', ''))
                pre.parentNode.removeChild(pre)
            } else if (text.includes('/* htmlView:js */')) {
                htmlViewStack.js.push(text.replace('/* htmlView:js */\n', ''))
                pre.parentNode.removeChild(pre)
            }
        }
        const postbody = document.querySelector('.blogpost-body')
        if (postbody) {
            postbody.appendChild(htmlViewStack.wrap)
            appendHtmlViewer()
        }
    }
    window.cnblogsConfig = {
        info: {
            name: 'wenonly', // 用户名
            startDate: '2023-01-11', // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
            avatar: 'https://pic.cnblogs.com/face/1115733/20230111161824.png', // 用户头像
        },
        hooks: {
            beforeLoading: function() {
                createHtmlIframe()
            }
        }
    }
</script>
<script src="https://files.cnblogs.com/files/blogs/336226/html-viewer.umd.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v2.1.2/dist/simpleMemory.js" defer></script>
```
