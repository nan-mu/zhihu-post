![](https://pic4.zhimg.com/v2-50e5e7e629ae317992c246e43f6c66fb_r.jpg)

昨晚和老友喝酒喝多了，胃抽筋，蓝瘦香菇，躺家里无所事事，干脆再写一篇小知识吧。

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

上一篇文章不是刚分享了xp4.0的一个入门案例么，其实呀，当我们安装了xp4.0以后，xp4.0还有一个算是给C4D的隐藏福利。

**用过xp粒子的童鞋都知道，xp粒子的效果器和修改器都有衰减，这就和C4D默认的效果器和修改器是一样的。**

当然xp4.0的衰减里有三个是xp4.0独有的衰减方式，分别是：xpNoiseFalloff、xpParticlesFalloff和xpShaderFalloff：

![](https://pic2.zhimg.com/v2-775f8ff3c0438d646b7df05069e08879_r.jpg)

然而当你安装了xp4.0以后，C4D默认的效果器和修改器衰减里，也会有这三种衰减方式，有意思吧：

![](https://pic3.zhimg.com/v2-bef2fe5453eb97b04cd3289f88301dca_r.jpg)

今天我们就来简单的分享一下这三种衰减方式吧！例如我这里用克隆对象克隆了很多个小的立方体：

![](https://pic3.zhimg.com/v2-05be203c8421e5745987e92edcd439e2_r.jpg)

然后给克隆对象添加简易效果器，缩放为-1吧，这样会看的比较清楚：

![](https://pic1.zhimg.com/v2-07ceb4874289784758574f550984ac30_r.jpg)

**1、xpNoiseFalloff（xp噪波衰减）**

**xp噪波衰减是通过一张一张的噪波贴图来控制衰减的范围：**

![](https://pic4.zhimg.com/v2-e602a5b88e89e421b54908b79ef1885f_r.jpg)

这种衰减类型有点类似于C4D默认衰减中的噪波，我记得C4D R18好像没有噪波衰减这个类型，应该是R19才新增的：

![](https://pic1.zhimg.com/v2-6a5be8ea13f9cb8ce9388ae29040e838_r.jpg)

**我尝试了一下两种衰减类型，同一种噪波贴图效果是不一样的，可能是运作的方式不同吧。**

但是原理应该是一样的，不过实话说本身C4D的噪波衰减我自己也很少用：

![](https://pic3.zhimg.com/v2-40462822a4d1d73e0ad9bc8ddb34f722_r.jpg)

**2、xpParticlesFalloff（xp粒子衰减）**

**这是一个非常有意思的衰减方式，它需要一个粒子发射器，而发射器发射出来的每一个粒子，都具有自己的衰减区域，通过这种方式来控制衰减范围。**

例如我这里新建一个粒子发射器，把它拖进衰减的发射器栏位：

![](https://pic3.zhimg.com/v2-e857d1610cca1adfc16c32f41cda1f9e_r.jpg)

当发射器发射粒子的时候，每一个粒子就都会去影响对象：

![](https://pic2.zhimg.com/v2-b0fdd42c1328404d8deeedb63c4f8761_r.jpg)

而衰减的半径可以通过调整半径的参数来修改，勾选显示半径，也可以看到半径的范围，并且还可以通过添加组来让指定某些组的粒子会影响对象：

![](https://pic3.zhimg.com/v2-7f4426c2f7dd93f2b683f2e6b91e6946_r.jpg)

**3、xpShaderFalloff（xp着色器衰减）**

**这种衰减方式是通过贴图来控制衰减的范围：**

![](https://pic4.zhimg.com/v2-c87b5a4507f71757e19f9dbd0f11812b_r.jpg)

这种衰减方式我感觉基本和着色效果器是一样的效果，例如我这里关掉简易效果器，给克隆对象添加一个着色效果器，在参数面板同样改为缩放-1：

![](https://pic1.zhimg.com/v2-df24c72ccdeb598e31c1ba3ea5d89338_r.jpg)

同样在着色器面板添加一个渐变，效果基本是一样的，只是方向不同：

![](https://pic4.zhimg.com/v2-e72f7f4378aeb17a01bb97714bd3fb37_r.jpg)

你想要方向是一样的，就点进去更改一下渐变的方向就可以了：

![](https://pic1.zhimg.com/v2-c9fec8102b092f23d42447dc2b2b263c_r.jpg)

今天的小知识我同样录制了一个视频版：

[![](https://pic1.zhimg.com/v2-dfc70023a69320d7136460b305a4db78.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1248585950151753728)

**好啦，今天的分享就到这里，我继续躺尸去了，拜拜。**

**更多内容欢迎关注公众号**

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究