## 太极

利用::after 和 ::before

## 布局

* 画出并排排列的两个长方形（宽是高的 二分之一即可） 组成一个正方形，我们称为“大圆”
* 利用border-radius将两个长方形画成两个半圆
* 利用`::after`分别对两个长方形生成摆在`大圆中轴线`，大小是大圆`一半`的圆。我们称为“中圆”
* 利用`::before`分别对两个长方形生成摆在`大圆中轴线`，大小是大圆`八分之一`的圆。我们称为“小圆”
* 记得调色
* 设置动画，让大圆旋转起来


<iframe height="265" style="width: 100%;" scrolling="no" title="LYYJEeZ" src="https://codepen.io/webbj97/embed/LYYJEeZ?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/webbj97/pen/LYYJEeZ'>LYYJEeZ</a> by 姜博健
  (<a href='https://codepen.io/webbj97'>@webbj97</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>