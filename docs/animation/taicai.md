# 纯CSS画太极图
> 看了CSS开发者大会各位大佬的分享，万物皆可CSS不再是随口说说的

我的`有趣的CSS`仓库也提供了在线预览[有趣的CSS传送门]( [有趣的CSS传送门](https://webbj97.github.io/Interesting-CSS/))，求star！！！
# [旋转的太极-在线预览](https://codepen.io/webbj97/pen/LYYJEeZ)
先上图

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019112916193920.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70)

## 布局思路

### 一、 画出两个长方形(宽是高的 二分之一即可)组成一个正方形，我们称为“大圆”
**CSS:**
```css
.box {
    display: flex;
    margin: 0 auto;
    width: 400px;
    height: 400px;
}
.item {
    position: relative;
    height: 400px;
    width: 200px;
    border: 1px solid red //为了标出白色的图形，加了一个红的边，之后会删掉
}
.white {
    background: rgba(255, 255, 255, 1);
}
.black {
    background: rgba(0, 0, 0, 1);
}
```



**html：**
` 注意！！！ Html代码只有这些`
` 注意！！！ Html代码只有这些`
` 注意！！！ Html代码只有这些`
```html
<div class="box">
	<div class="item white"></div>
    <div class="item black"></div>
</div>
```
<img src="https://img-blog.csdnimg.cn/20191129162334388.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="50%"/>



### 二、利用border-radius将两个长方形画成两个半圆
```css
.box {
    margin: 0 auto;
    width: 400px;
    height: 400px;
    border-radius: 505;
    display: flex;
}
.item {
    position: relative;
    height: 400px;
    width: 200px;
    border: 1px solid red
}
.white {
    border-top-left-radius: 200px;
    border-bottom-left-radius: 200px;
    background: rgba(255, 255, 255, 1);
}
.black {
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    background: rgba(0, 0, 0, 1);
    
}
```

<img src="https://img-blog.csdnimg.cn/20191129163007259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70"/>

## 利用`::after`分别对两个长方形生成摆在`大圆中轴线`，大小是大圆`一半`的圆。我们称为“中圆”
> 图中的中圆的边框是我为了让大家更醒目的看到添加的，最后别忘了删除掉

<img src="https://img-blog.csdnimg.cn/20191129163759220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70"/>

```css
.box {
	margin: 0 auto;
    width: 400px;
    height: 400px;
    border-radius: 505;
    display: flex;
}
.item {
    position: relative;
    height: 400px;
    width: 200px;
    border: 1px solid red
}
.white {
    border-top-left-radius: 200px;
    border-bottom-left-radius: 200px;
    background: rgba(255, 255, 255, 1);
}
.black {
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    background: rgba(0, 0, 0, 1);
}
.white::after,
.black::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 10;
    border: 1px solid black
}
```

## 利用`::before`分别对两个长方形生成摆在`大圆中轴线`，大小是大圆`八分之一`的圆。我们称为“小圆”
在上一步中圆的基础上加上这段代码
> 图中的小圆的边框是我为了让大家更醒目的看到添加的，最后别忘了删除掉
```css
.white::before,
.black::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 100;
    border: 1px solid green;
}
```
<img src="https://img-blog.csdnimg.cn/20191129164033840.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width ="50%"/>

## 调整`中圆`和`小圆`的定位
在上一步的基础上添加
```css
        .white::after {
            top: 0;
            left: 50%;
            background: white;
        }
        .white::before {
            left: 87.5%;
            top: 18.75%;
            background: black;
        }
        .black::after {
            bottom: 0;
            right: 50%;
            background: black;
        }
        .black::before {
            right: 87.5%;
            bottom: 18.75%;
            background: white;
        }
```
<img src="https://img-blog.csdnimg.cn/20191129165702743.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2piajY1Njg4Mzl6,size_16,color_FFFFFF,t_70" width="50%"/>

##  设置动画，让大圆旋转起来（记得删除掉border哦～）
* 给包裹两个长方形的盒子添加动画属性就会让太极图旋转起来！


附上完整代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>tai-chi</title>
    <style>
        body {
            padding: 100px;
        }

        .box {
            margin: 0 auto;
            width: 400px;
            height: 400px;
            border-radius: 505;
            display: flex;
            animation: roto 8s linear infinite;
        }
        .item {
            position: relative;
            height: 400px;
            width: 200px;
        }
        .white {
            border-top-left-radius: 200px;
            border-bottom-left-radius: 200px;
            background: rgba(255, 255, 255, 1);
        }
        .black {
            border-top-right-radius: 200px;
            border-bottom-right-radius: 200px;
            background: rgba(0, 0, 0, 1);

        }
         .white::after,
        .black::after {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            z-index: 10;
        }
       
        .white::before,
        .black::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            z-index: 100;
        }
         
        .white::after {
            top: 0;
            left: 50%;
            background: white;
        }
        .white::before {
            left: 87.5%;
            top: 18.75%;
            background: black;
        }
        .black::after {
            bottom: 0;
            right: 50%;
            background: black;
        }
        .black::before {
            right: 87.5%;
            bottom: 18.75%;
            background: white;
        }
        
        @keyframes roto {
            from{
                transform: rotate(0deg); 
            } to{
               transform: rotate(360deg); 
            }
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="item white"></div>
        <div class="item black"></div>
    </div>
</body>

</html>
```

<iframe height="265" style="width: 100%;" scrolling="no" title="LYYJEeZ" src="https://codepen.io/webbj97/embed/LYYJEeZ?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/webbj97/pen/LYYJEeZ'>LYYJEeZ</a> by 姜博健
  (<a href='https://codepen.io/webbj97'>@webbj97</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果您觉得感兴趣，或者还有帮助到您，不妨给我的github点个star吧～
### [github传送门](https://github.com/webbj97)
### [有趣的CSS传送门](https://webbj97.github.io/Interesting-CSS/)



