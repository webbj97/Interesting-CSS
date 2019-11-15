# 选择器

> 灵活的使用选择器，可以简化操作步骤、实现更多的交互、完成你想不到的效果

## 选择器分类

* 元素选择器
* 类选择器
* ID选择器
* 通配符选择器
* 属性选择器
* 伪元素选择器
* 伪类选择器

## 伪元素选择器、伪类选择器

增加一点篇幅去介绍一下这两种选择器

**1.后缀的::after 和 :after 的区别在哪？**

我们先来看下W3C关于CSS3选择器的规范中有一段描述： 

    A pseudo-element is made of two colons (::) followed by the name of the pseudo-element. 

    This :: notation is introduced by the current document in order to establish a discrimination between pseudo-classes and pseudo-elements. For compatibility with existing style sheets, user agents must also accept the previous one-colon notation for pseudo-elements introduced in CSS levels 1 and 2 (namely, :first-line, :first-letter, :before and :after). This compatibility is not allowed for the new pseudo-elements introduced in CSS level 3. 

　　简单翻译一下，大意就是，伪元素由双冒号和伪元素名称组成。双冒号是在当前规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类，比如:first-line、:first-letter、:before、:after等。

### 什么是伪类？什么是伪元素？

**一句话解释：**

* 伪类：可以独立于文档的元素来分配样式，且可以分配给任何元素，逻辑上和功能上类类似，但是其是预定义的、不存在于文档树中且表达方式也不同，所以叫伪类。
  * 伪类选择元素基于的是当前元素处于的状态，或者说元素当前所具有的特性，而不是元素的id、class、属性等静态的标志。由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。由此可以看出，它的功能和class有些类似，但它是基于文档之外的抽象，所以叫伪类。

* 伪元素：所控制的内容和一个元素控制的内容一样，但是伪元素不存在于文档树中，不是真正的元素，所以叫伪元素。
  * 与伪类针对特殊状态的元素不同的是，伪元素是对元素中的特定内容进行操作，它所操作的层次比伪类更深了一层，也因此它的动态性比伪类要低得多。实际上，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。它控制的内容实际上和元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

### 伪元素和伪类有哪些？

> 仅列出常见或关键的名称

| 名称 （伪类）    | 作用     |
| ------ | ------ |
| :link	 | 伪类将应用于未被访问过的链接，与:visited互斥。 |
| :hover | 伪类将应用于有鼠标指针悬停于其上的元素。 |
| :active	 | 伪类将应用于被激活的元素，如被点击的链接、被按下的按钮等。 |
| :visited | 伪类将应用于已经被访问过的链接，与:link互斥。 |
| :focus	 | 伪类将应用于拥有键盘输入焦点的元素。 |
| :first-child	 | 伪类将应用于元素在页面中第一次出现的时候。 |
| :lang	 | 伪类将应用于元素带有指定lang的情况。 |
| :not	 | 除此之外的同源标签 |

| 名称 （伪元素）    | 作用     |
| ------ | ------ |
| ::first-letter |	伪元素的样式将应用于元素文本的第一个字（母）。 |
| ::first-line	| 伪元素的样式将应用于元素文本的第一行。|
| ::before |	在元素内容的最前面添加新内容。 |
| ::after |	在元素内容的最后面添加新内容。|

### 总结

* :  一个冒号是-伪类-伪类用于向某些选择器添加特殊的效果。

* :: 两个冒号是-伪元素-伪元素用于将特殊的效果添加到某些选择器。





* 伪类
  * :active




伪元素种类
请输入图片描述

我个人是这样理解的，伪类偏向于元素的动作行为，伪元素偏向于元素的属性。实际上 css3 为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示。对于CSS2之前已有的伪元素，比如:before，单冒号和双冒号的写法::before作用是一样的。

　　有的网站建议说，如果你的网站只需要兼容webkit、firefox、opera等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容IE浏览器，还是用CSS2的单冒号写法比较安全。如果自己不确定的话可以针对某些需要兼容的属性有两种属性。

### 语法

`元素 {样式声明 }`

---

### 示例

<p>CSS</p>

```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```

<p>HTML</p>

```html
  <span>这里是由 span 包裹的一些文字.</span>
  <p>这里是由 p 包裹的一些文字.</p>
```

### <p>效果</p>

<span>这里是由 span 包裹的一些文字.</span>
<p>这里是由 p 包裹的一些文字.</p>
