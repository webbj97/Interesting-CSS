# 纯CSS实现弹幕效果

动画相关的属性和方法已经本部分的开头简单提过了，我们来看一下本次要实现的效果——弹幕～

当你在阅读、看视频的时候经常会遇见一段文件或者一张表情从页面划过，要实现一个完整的功能很复杂，但是我们仅仅是看上去和它一样即可～

### 先放一下实现出来的效果图
<img src="https://img-blog.csdnimg.cn/20191203151718288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="80%">


### 在线预览地址的效果（在线预览引入背景图片，这个大家可以自己放背景图、gif）

<iframe height="265" style="width: 100%;" scrolling="no" title="KKwKGar" src="https://codepen.io/webbj97/embed/KKwKGar?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/webbj97/pen/KKwKGar'>KKwKGar</a> by 姜博健
  (<a href='https://codepen.io/webbj97'>@webbj97</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 有轨弹幕
看标题就可以知道，我们要实现的的在`固定行`上移动的弹幕（再自己的轨道上移动）。

### 一、简单画一个背景板，三个轨道
**CSS:**
```css
.box{
    width: 600px;
    height: 240px;
    background: rgba(0,0,0,0.1);
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}
.track{
    height: 30px;
    border: 4px solid rgba(0,0,0,0.3);
}
```
**Html**
```html
<div class="box">
    <div class="track">
    </div>
    <div class="track">
    </div>
    <div class="track">
    </div>
</div>
```
**效果图：**
<img src="https://img-blog.csdnimg.cn/20191202103852677.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width=""/>

### 二、在每条轨道上添加一条文字
```html
<div class="box">
    <div class="track">
        <div class="child child-1">我是弹幕</div>
    </div>
    <div class="track">
        <div class="child child-2">我是弹幕</div>
    </div>
    <div class="track">
        <div class="child child-3">我是弹幕</div>
    </div>
</div>
```

### 三、添加动画，让文字动起来
这里为了让大家有一个直观的感受，我用代码来将一个div盒子移动的全过程显示出来（弹幕），我们来看看它的背后都经历了什么～

**移动的思想**

<img src="https://img-blog.csdnimg.cn/20191202105241699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="90%"/>

* 注意实际情况是，可视区域外的元素是不会被看见的（设置`overflow：hidden`）
* 用户可通过`transform:translateX()`的方式进行移动，也可以通过 `left、right`的方式进行移动.

附上CSS代码（Html代码同上一步骤）：

**Css：**
```css
.box{
    width: 600px;
    height: 240px;
    background: rgba(0,0,0,0.1);
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}
.track{
    height: 40px;
    border: 4px solid rgba(0,0,0,0.3);
    color: rgb(127, 197, 35);
}
.child{
    width: 80px;
    height: 20px;
    border: 2px solid red;
    margin-bottom: 20px;
    transform: translateX(1000px);
    animation: scrollTo linear 4s infinite
}// 弹幕盒子的样式
@keyframes scrollTo {
    to{
        transform: translateX(-100px);
    }
}
```

**效果图：**
<img src="https://img-blog.csdnimg.cn/20191202110031347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_7" width="70%"/>

**注意：**
* 此时三条弹幕的运动速度相同，起始点和结束点的位置也相同，效果如图上

### 四、优化弹幕（注意，这里的代码为修改部分，最后会贴出完整代码）
先上一个真实的弹幕截图
<img src="https://img-blog.csdnimg.cn/20191202111923277.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="60%" />

**我们总结一下他有什么特点？**

1. 弹幕通常在屏幕的上部分
2. 为了区别每一条弹幕，颜色会有不同
3. 每条弹幕的移动速度都不会相同
4. 弹幕的数量可以适当的增加
5. （题外话，弹幕比电视剧有意思的多～）

**我们一一去实现它**

* 弹幕通常在屏幕的上部分
	*  调整一下可视区域的宽高比。
```css
.box{
    width: 800px;
    height: 400px;
    background: rgba(0,0,0,0.1);
    margin: 100px auto 0;
    overflow: hidden;
}
.track{
    height: 40px;
    line-height: 40px;
    border: 2px solid rgba(0,0,0,0.3);
    margin-bottom: 5px;
}
```

<img src="https://img-blog.csdnimg.cn/20191202113637993.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="70%"/>

* 为了区别每一条弹幕，颜色会有不同
	* 删除弹幕的边框。
	* 修改弹幕的文案。
	* 调整弹幕颜色、适当添加光效。

```css
.child{
    width: 80px;
    line-height: 20px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.1)
}
//第一个弹幕
.child-1{
    color: brown; //文字颜色
    text-shadow: 2px 2px 3px rgb(248, 81, 20); // 文字阴影
    transform: translateX(1000px);  //文字起始位置
    animation: scrollTo linear 4s infinite; //动画
}
//第二个弹幕
.child-2{
    color: rgb(127, 197, 35);//文字颜色
    text-shadow: 2px 2px 3px rgb(173, 255, 80);// 文字阴影
    transform: translateX(1050px); //文字起始位置
    animation: scrollTo linear 7s infinite; //动画
}
//第三个弹幕
.child-3{
    color: coral;//文字颜色
    text-shadow: 2px 2px 3px coral; // 文字阴影
    transform: translateX(800px); //文字起始位置
    animation: scrollTo linear 5s infinite; //动画
}
@keyframes scrollTo {
    to{
        transform: translateX(-100px);
    }
}
```

**效果如图**
<img src="https://img-blog.csdnimg.cn/20191202114917445.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="70%"/>


### 这里我们不考虑数量的增加，大家可以考虑用Js动态生成弹幕的方式，本篇文章仅考虑用纯CSS模拟一个弹幕，并尽可能真实。
PS：（如果你想增加弹幕的数量，可以在代码中在复制` child-X`出来）

### 最后优化
* 最后我们要做的事
	1. 给它添加一张背景图（假装我们在看剧）
	2. 删除凸显轨道的边框
	3. 微调整体样式

最后的结果就是这样

<img src="https://img-blog.csdnimg.cn/20191203151718288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="80%">



**本篇博客会收录到有趣的CSS仓库中**

### [有趣的CSS传送门](https://webbj97.github.io/Interesting-CSS/)
**如果您觉得感兴趣，或者还有帮助到您，不妨给我的github点个star吧～**
### [github传送门](https://github.com/webbj97)