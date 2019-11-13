## hover态

选择鼠标指针浮动在其上的元素，并设置其样式：

```css
a:hover{ 
    background-color:yellow;
}
```

### 定义和用法

:hover 选择器用于选择鼠标指针浮动在上面的元素。

**提示：**
* :hover 选择器可用于所有元素，不只是链接。
* :link 选择器设置指向未被访问页面的链接的样式。
* :visited 选择器用于设置指向已被访问的页面的链接
* :active 选择器用于活动链接。


**注释：在 CSS 定义中，:hover 必须位于 :link 和 :visited 之后（如果存在的话），这样样式才能生效。**