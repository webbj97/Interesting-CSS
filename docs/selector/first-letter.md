# :first-letter 伪元素

CSS 伪元素 ::first-letter会选中某 block-level element（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）。


### 浏览器支持

所有主流浏览器都支持 :first-letter 伪元素。

### 定义和用法

:first-letter 伪元素向文本的第一个字母添加特殊样式。

**::first-letter 伪元素 只在display属性值为block, inline-block, table-cell, list-item 或者 table-caption的元素上才起作用. 其他情况下, ::first-letter 毫无意义.**

这个伪元素用于指定一个元素第一个字母的样式。所有前导标点符号应当与第一个字母一同应用该样式。某些语言有一些要处理为单个字符的字母组合，如果是这样，用户代理可能会把首字母同时应用到这个字母组合。


### 下列属性应用于 :first-letter 伪元素：

* font 属性
* color 属性
* background 属性
* margin 属性
* padding 属性
* border 属性
* text-decoration
* vertical-align (仅当 'float' 为 'none' 时)
* text-transform
* line-height
* float
* clear

### 看下面的例子

<iframe height="300" style="width: 100%;" scrolling="no" title="KKKBjNm" src="https://codepen.io/webbj97/embed/KKKBjNm?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/webbj97/pen/KKKBjNm'>KKKBjNm</a> by 姜博健
  (<a href='https://codepen.io/webbj97'>@webbj97</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>