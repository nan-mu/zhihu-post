![](https://pic4.zhimg.com/v2-12f533bdd51dded55923178ee17a3b13_r.jpg)

继续临摹，原图还是INS上的大佬**@BastardFilms**：

![](https://pic4.zhimg.com/v2-ef9dc4e1b27340e9b8f14b90cdda14bb_r.jpg)

我看说明原图作者是用XP4.0结合C4D默认的碰撞变形器制作的，我这里同样压缩成动图大家看看哈：

![](undefined)

我尝试了一下，做出来的样子七七八八，总体来说不是很难，但是我觉得还是值得分享出来。

过程中大球和小球之间的距离不是很好控制，好像原作者也遇到了这样的问题。

**好啦，今天我们就用XP4.0粒子表面运动结合碰撞变形器制作变形动画吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

首先打开C4D，设置帧速率25，总共250帧：

![](https://pic1.zhimg.com/v2-6de873d1bd9c6795ed2a6cf025b6796c_r.jpg)

新建球体，因为后面球体要变形，所以类型选择为六面体，这样小球就都是四边面，然后分段稍微多一些：

![](https://pic4.zhimg.com/v2-71b632d305b8d56cec834c7e6110849b_r.jpg)

新建粒子发射器，以球体为对象发射粒子，发射来源为粒子表面：

![](https://pic2.zhimg.com/v2-dea527aeabfe05f9decdd569d93045c1_r.jpg)

让球体每帧发射5个粒子就好了，半径暂时7吧，后面觉得不合适可以再调整：

![](https://pic2.zhimg.com/v2-debb16a3c59488bd4380521f93a17e59_r.jpg)

现在的粒子是不具备自转属性的，所以在额外数据里把旋转打开，让它粒子沿着切线方向自转：

![](https://pic4.zhimg.com/v2-56e715c8cc2b39a566c2648db5377033_r.jpg)

**接下来新建xpFollowSurface，把球体拖进去，距离可以适当增加一点防止粒子脱离表面，摩擦力稍微给一点。**

我这里给了负5的偏移值，这个是为了防止后面碰撞的时候小球和大球之间离得太远：

![](https://pic2.zhimg.com/v2-4b1a53d1858fb33f0bffb51902ffc94d_r.jpg)

现在粒子是突然出现大小没有变化的，于是我这里自己添加了一个xpScale，模式改为设置参数，半径值同样为7：

![](https://pic2.zhimg.com/v2-25a803bad1b517d89fd050f4495ae5b1_r.jpg)

然后添加一个重映射，让粒子的半径随着时间的变化而变大：

![](https://pic1.zhimg.com/v2-78e5cffe64cc1d67e894079e71660464_r.jpg)

**现在粒子之间是没有碰撞的，我们想要粒子发生碰撞并且产卵，就需要添加一个xpPPCollisions。**

但是现在你可能会发现有些粒子在碰撞的过程中不停的抖动，形态很奇怪：

![](https://pic2.zhimg.com/v2-62a336230f27de70865da757fdc34971_r.jpg)

没关系，康秋D调出工程设置，稍微提高一点XP的子帧步幅，就好了：

![](https://pic2.zhimg.com/v2-6b3571c377247bc9d2692ddb18683071_r.jpg)

接下来激活碰撞时产卵，创建一个产卵发射器，然后勾选只产卵一次：

![](https://pic4.zhimg.com/v2-32cedefea161d3809a4552dfeb057063_r.jpg)

产卵的发射器里记得把两个修改器都排除一下：

![](https://pic1.zhimg.com/v2-42446731de94516d9155fb34506cfbb0_r.jpg)

给大球再添加一个XP的碰撞标签，用于碰撞产卵后的粒子：

![](https://pic3.zhimg.com/v2-2a9f7cbe64907fb8e6627805c81876b6_r.jpg)

给场景再添加一个湍流场吧，强度适当增加一点：

![](https://pic3.zhimg.com/v2-adfb3a106585a12cd89036cb9afd2e46_r.jpg)

新建两个大大的平面作为地面和背景，同时也添加XP的碰撞标签，这个不用多说哈：

![](https://pic3.zhimg.com/v2-317941a10ea84628289efbff35713062_r.jpg)

再新建一个杀死场，搞掉超出镜头的粒子，这样可以节省一些资源：

![](https://pic4.zhimg.com/v2-d646188f4d6059717fee3fae6e197a23_r.jpg)

因为后面我们要使用碰撞变形器，所以只能将小球表面的粒子实体化才行：

![](https://pic2.zhimg.com/v2-e23e5213daf50622e43dc314479d6309_r.jpg)

接下来差不多就可以先将粒子进行缓存了，由于粒子数量不多，缓存是很快的：

![](https://pic3.zhimg.com/v2-261d96cadab2c08463766e8bc28d4c9e_r.jpg)

接下来给球体添加碰撞变形器，重置外形改为0：

![](https://pic1.zhimg.com/v2-7ae473f52a788bf825d9b064535ae748_r.jpg)

碰撞器里把XP的生成器拖进去，碰撞改为外部：

![](https://pic1.zhimg.com/v2-21ef9b862d6de79312328f5abbdc7f00_r.jpg)

**接下来就是调整碰撞变形器的参数了，高级里的尺寸数值可以适当提高一点点，碰撞的纹路会更明显。**

但是太高小球就会悬空在大球表面，其他参数大家视情况调整吧：

![](https://pic2.zhimg.com/v2-c4bf48ad1284b8b66e4310a8d22cdb2d_r.jpg)

因为我提高了在高级里提高了松弛的参数，所以碰撞播放器来会比较卡，因此这里可以将碰撞缓存一下：

![](https://pic1.zhimg.com/v2-bd3e7fcf6392820da2f3fbd1baa8f48c_r.jpg)

最后再给球体添加一个细分曲面，差不多就可以进入渲染的部分了：

![](https://pic4.zhimg.com/v2-78136b83faf5a08744a6d9066aec7b9f_r.jpg)

设置渲染尺寸，新建摄像机固定视角这些都不用说哈：

![](https://pic1.zhimg.com/v2-17de853242f7da25a41e6fb72f6b4b60_r.jpg)

新建环境光：

![](https://pic4.zhimg.com/v2-6f865bd09ca510ecc259403c3fe9a06b_r.jpg)

给球体添加RS对象标签，激活细分：

![](https://pic1.zhimg.com/v2-4c3934bd1aee02f515ea87eb71a192b4_r.jpg)

主体的材质首先是一个深绿色的反射材质：

![](https://pic3.zhimg.com/v2-71bc35ca9852ce824a5355c45daaabe2_r.jpg)

然后用噪波节点制作了一个贴图，用渐变节点控制范围：

![](https://pic1.zhimg.com/v2-72889db2fef6eb569f0bd8f97a1aaa18_r.jpg)

然后把这张贴图连接到凹凸上：

![](https://pic2.zhimg.com/v2-dc5d2876a27f328686231237e57fd9b9_r.jpg)

表面的小球是分别用了一个屎黄色和白色的材质球：

![](https://pic1.zhimg.com/v2-f1cb41e2799512241a3468f5e809eccc_r.jpg)

然后同样用噪波节点制作一个贴图：

![](https://pic3.zhimg.com/v2-62d7841cf8ac1eb5c908d88e4594571a_r.jpg)

然后把他们进行混合，同时噪波节点连接到两个材质球的凹凸上：

![](https://pic4.zhimg.com/v2-321c3f135274f3eddc7fa47ca231a16b_r.jpg)

另外一个小球是同样的道理，无非改改颜色和贴图，这里就不赘述了：

![](https://pic4.zhimg.com/v2-4b2699c6fa2c09c046287fc8372ae4b7_r.jpg)

地面的材质我弄的比较水，就是加载了划痕贴图来混合以及连接到凹凸和粗糙度上：

![](https://pic3.zhimg.com/v2-fed4eb9789c5269d48c1558876c3f20e_r.jpg)

背景也是一样：

![](https://pic4.zhimg.com/v2-5969c28153e64f4221510c23c2d0ac97_r.jpg)

不要忘记产卵的粒子，给发射器添加RS对象标签勾选优化球体：

![](https://pic4.zhimg.com/v2-e66f70ceca4f8d778c2d5c0fc7e6a3f7_r.jpg)

材质就是预设的玻璃材质：

![](https://pic1.zhimg.com/v2-fed75485a320f16a7646be51d374d364_r.jpg)

再补两盏灯吧：

![](https://pic2.zhimg.com/v2-9011d82cf6030005bc2d5824dd1dd619_r.jpg)

渲染设置方面我同样打开了GI，然后提高了采样：

![](https://pic3.zhimg.com/v2-afe8f270b63be7fb4378a20f33122f2a_r.jpg)

背景的平面我给它添加了一个RS对象标签，取消接受GI：

![](https://pic2.zhimg.com/v2-40eca141919587b561b0cd40e20bc8b5_r.jpg)

最后渲染出图看看效果吧：

![](undefined)

大概是这样吧，下面是今天的视频版：

[![](https://pic1.zhimg.com/v2-60df4d63e53e90b555ee98ca7335263e.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1397905522226499584)

好啦，今天的分享就到这里。

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究