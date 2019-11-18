# transition 

transition 属性是一个简写属性，用于设置四个过渡属性

## 定义和用法

* transition-property
    * none	没有属性会获得过渡效果。
    * all	所有属性都将获得过渡效果。
    * property	定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
* transition-duration
    * time	规定完成过渡效果需要花费的时间（以秒或毫秒计），默认值是 0，意味着不会有效果。
* transition-timing-function
    * linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
    * ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
    * ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
    * ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
    * ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
    * cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
* transition-delay
    * time	规定在过渡效果开始之前需要等待的时间，以秒或毫秒计。


