![](https://pic1.zhimg.com/v2-a9712f39e8e57f93d1c154862bbe7e54_r.jpg)

2021年已经进入尾声了，今天我们来做一个简单一点的效果吧，之前有鹿友发了一个效果问我如何制作：

![](https://pic4.zhimg.com/v2-f464cdffb37ee511db04053f6652d893_r.jpg)

我这里把它压缩成了动图大家看看吧：  

![](https://pic2.zhimg.com/v2-08be78a110143de11dd178dfe39310f9_r.jpg)

win11这种壁纸的效果应该是用布料做的，但是我有点怀疑是不是C4D做的哈。

**首先大家知道C4D的布料系统。。。唉，不提了，然后我尝试了一下用C4D的Syflex布料插件来做，但是由于Syflex的力场太少，不好做出这种像花一样的形态。**

**xpDynamics我也尝试了一下，感觉形态也还是不太好控制。**

所以最后我还是选择了用XP的布料来制作，不过总的来说使用XP布料也不是特别好使，主要是穿插的问题确实很难解决，只能凑合了。

**下一篇我还是会尝试写一篇非XP版的内容，预计打算用C4D自带的柔体动力学来制作，但由于材质方面就是普通的sss材质，所以就不用OC做渲染啦！**  

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，先新建一个圆盘，分段越多，布料模拟的细节越多，但是模拟起来也越慢，我这里设置的是旋转分段64，然后圆盘分段10：

![](https://pic1.zhimg.com/v2-6d275cbde7aa9985c707ca038e3921dc_r.jpg)

**克隆圆盘，克隆10份就好了，多了也会很卡，然后Y轴的距离我这里设置为6。**

我这里克隆了两个圆盘，然后分别给它们两种颜色的材质，目的只是为了方便观察穿插的问题：

![](https://pic3.zhimg.com/v2-6aa8824ebc331a80db2836bc4e9eec52_r.jpg)

给克隆添加随机效果器，随机缩放，然后等比缩放-0.1，这样就能得到随机大小的圆盘：

![](https://pic4.zhimg.com/v2-864191e888cee2f3fd33265ea3feceaf_r.jpg)

鼠标中间选中克隆对象，鼠标右键连接对象：

![](https://pic2.zhimg.com/v2-f6b9c921b28e1c3c6a9129f20a8f6ed5_r.jpg)

切换到面级别，用实时选择工具选中中间的一圈面创建选集，记得要取消勾选仅选择的可见元素：

![](https://pic3.zhimg.com/v2-12a6ccac8c1d0d076504929a87df83ca_r.jpg)

接下来选中对象以后添加XP的布料：

![](https://pic1.zhimg.com/v2-1e8d3398e0e8432e52159948a0e8cb88_r.jpg)

系统默认会创建一个重力，一个约束对象，一个粒子发射器，一个布料修改器和布料标签：

![](https://pic3.zhimg.com/v2-0de36849ffb9b83b5abf6abdd26115fe_r.jpg)

**由于以前从来没写过XP的布料内容，所以这里简单的提一句。**

XP的布料原理是让模型的顶点发射粒子，然后这些粒子会带动着模型的顶点运动从而模拟布料的形态：

![](https://pic1.zhimg.com/v2-19e1e909a057e9bffa2714d33071d028_r.jpg)

默认情况下，约束对象里是已经勾选了粒子碰撞的，然后重力的方向是向下，至于布料修改器大家不用管它，没有任何参数，只是模拟需要这么一个修改器而已：

![](https://pic3.zhimg.com/v2-03a92a64aa3ca29a7f739c77b58ccd42_r.jpg)

我这里首先将重力旋转了180度，让它方向向上：

![](https://pic1.zhimg.com/v2-99deb131b9cc0ebb6383866ca0a57d70_r.jpg)

至于布料的形态调整，我们更多是通过布料标签来调整，布料标签高级里，首先激活钉，然后把刚才创建的面选集拖进去固定住：

![](https://pic3.zhimg.com/v2-0cab59eade3aa1607186c428740d53fa_r.jpg)

默认情况下，你会发现布料穿插非常厉害：

![](https://pic4.zhimg.com/v2-fed88c97f65b2418773cecd248b17877_r.jpg)

**这就需要提高子帧步幅来解决穿插的问题，康秋D调出工程设置，我们在XP里将子帧步幅提高到了5，穿插的问题基本解决了。**

但是这样会有两个问题，首先提高子帧步幅布料会变得很硬，其次模拟的时间也会增加：

![](https://pic1.zhimg.com/v2-242814dea93a0dc312142c4b7421facc_r.jpg)

**增加模拟时间这个没办法，但是我们可以让布料再软一些的同时尽量避免穿插。**

所以回到布料标签里，把结构、斜切以及弯曲这几个数值都适当改小一点就好了。

**至于这三个参数分别的含义我这里不赘述了，建议大家看看官方文档哈：**

![](https://pic4.zhimg.com/v2-47326d6b1da5a6dbb2f2377b7a6f118b_r.jpg)

**基础形态大概就是这样，后面我们主要就是添加各种力场让形态更自然点。**

先康秋D调出工程设置，帧速率改为25，还是做10秒动画吧：

![](https://pic1.zhimg.com/v2-67a9cb1d08400e80348a36d290a9de44_r.jpg)

我这里先添加了一个向上的风力，然后添加了一点湍流值：

![](https://pic4.zhimg.com/v2-c92ef8726b4f5a3f424f489a973766f7_r.jpg)

然后添加了一个漩涡场，把模式改为力，让模型有点旋转的感觉：

![](https://pic3.zhimg.com/v2-15d10a0714f262e931a6b45e3d97fb56_r.jpg)

再添加一个湍流场吧，模式选择为卷曲，其他参数默认就好：

![](https://pic3.zhimg.com/v2-668dba5f1f20f2fba0cb3f6363343f02_r.jpg)

基本这样就可以缓存了，这个缓存很快的，5分钟以内就缓存好了：

![](https://pic2.zhimg.com/v2-c0ed6def784774c3b8f7a70f24f44859_r.jpg)

我这里还是把它烘焙为ABC文件吧，后面要调整旋转啊什么也方便：

![](https://pic4.zhimg.com/v2-4d91cfd55159a8972ce54e4645fc5813_r.jpg)

新建布料曲面增加厚度：

![](https://pic4.zhimg.com/v2-2a1e6bf6b1d7fe409d29f26223c2384f_r.jpg)

再新建一个细分曲面，基本这样就可以进入渲染的部分了：

![](https://pic2.zhimg.com/v2-6380922ee993e6ca0d014add8144c90d_r.jpg)

这个渲染很简单的，这里稍微提一句，我RS换到了最新版，新版的RS默认是aces空间，由于我个人没有那么高要求嫌麻烦，所以还是把它切换为了线性空间：

![](https://pic2.zhimg.com/v2-bbf94aaa20f3618b7df0f8311cadc4bd_r.jpg)

首先新建摄像机固定视角：

![](https://pic3.zhimg.com/v2-5da91169904a63d80afce99cbbe730ea_r.jpg)

然后可以给对象K一个从下到上的位移动画，旋转也可以K一下，这个大家看着来就好：

![](https://pic4.zhimg.com/v2-8018af3fbdd5c4334bd41c0dad4f876f_r.jpg)

同时可以新建一个空物体作为摄像机的父级，然后给空物体K一下旋转动画：

![](https://pic2.zhimg.com/v2-d1693ad956bc873fff83024b9c8f3435_r.jpg)

最后再给摄像机K一个位移动画，让对象尽量保持在摄像机的中心：

![](https://pic2.zhimg.com/v2-fc13bef47fb8efa843ef50e04cf3b6f1_r.jpg)

接下来新建HDRI环境光：

![](https://pic2.zhimg.com/v2-157bf4d92d74ca54563cb44dea4d28b1_r.jpg)

材质其实就是普通的sss材质，大家也可以凭自己的经验来调整：

![](https://pic1.zhimg.com/v2-a0af1723c0a59aaf9a1618788d1a2490_r.jpg)

视情况再补几盏灯吧：

![](https://pic2.zhimg.com/v2-fa5f92bce2b560391b153def4200eb89_r.jpg)

**渲染设置方面我再多说一句，我感觉新版RS的自动采样有点慢，所以还是手动设置的。**

由于我们这个场景没有漫射，所以我直接关掉了GI，然后主采样128/8，其他本地采样均为它的2倍也就是256：

![](https://pic3.zhimg.com/v2-9a81b4fd93aa51036065c39063b3df16_r.jpg)

渲染我是用1070显卡渲染的，总时长9个多小时：

![](https://pic1.zhimg.com/v2-b349fbe973b5f0906a4190c6a441375c_r.jpg)

最后后期加个渐变色的背景，加点发光之类的，然后调色看看效果吧：

![](https://pic1.zhimg.com/v2-265e80c640a3a07e23627bd0d36620f4_r.jpg)

大概是那个意思吧，下面是今天的视频版：

[![](https://pica.zhimg.com/v2-8278053093c268105f955b9319b00d0b.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1459858686147121152)

好啦，今天的分享就到这里，想要源文件及原视频的鹿友后台**撩我**获取吧！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究