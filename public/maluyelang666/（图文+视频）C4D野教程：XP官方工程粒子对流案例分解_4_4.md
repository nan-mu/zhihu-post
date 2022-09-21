![](https://pic2.zhimg.com/v2-2abcea682ae572bc39f27827ca304bb1_r.jpg)

最近在学习XP粒子的时候，在官网上的免费工程文件里看到一个叫做粒子对流的效果：

![](https://pic1.zhimg.com/v2-eabddcecfd8bd7b4084d7705f710aaf0_r.jpg)

**下载工程以后看了下，其实就是一个通过平面的图案发射粒子，然后使用烟雾流体驱动粒子的案例。**

虽然总体思路不难，但是感觉和前面写的渲染器制作漩涡图案的知识点有部分的关联：

![](https://pic4.zhimg.com/v2-a641ec5acbebf0d33aafb2e58362da23_r.jpg)

**并且我自己通常模拟烟雾流体都是用的TFD，很少使用XP的xpExplosiaFX，所以相当于又对xpExplosiaFX的部分参数进行了学习。**

而且在学习过程中我觉得有很多小的细节也值得分享一下。

**原本是想尽量还原效果，但是官方的工程都是使用的cy粒子渲染器渲染的，由于我没有也不会cy粒子渲染器，所以最后按照自己的思路用rs渲染出了另外一个效果。**

来吧，今天我们就来看看这个粒子对流效果的制作思路吧！

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，首先新建一个平面，尺寸适当放大一点：

![](https://pic3.zhimg.com/v2-d7b2a1cda7e7abaf0f3f6bcba84c4df2_r.jpg)

新建一个材质球，只勾选颜色通道，然后在颜色通道里加载一个噪波：

![](https://pic1.zhimg.com/v2-6f355e61cbeff38e5982e4c0908432b8_r.jpg)

噪波的类型大家可以根据自己的需求选择，我这里还是按照官方选择的斯达，然后适当的调整高低端修剪的数值：

![](https://pic4.zhimg.com/v2-df2f7dd786eab2bb2449c9e86869bd4f_r.jpg)

之前的文章我们已经提到过了，默认情况下噪波贴图在预览视窗里的效果和最终渲染的样子是不一样的：

![](https://pic1.zhimg.com/v2-2a30f57af8f2e525697b2d0af7cc5874_r.jpg)

**官方工程使用的是xpColor修改器，在上面重新加载了一个噪波贴图，然后从粒子出生开始就重新定义粒子的颜色。**

由于我们这里只是用的一个平面不存在接缝的问题，所以我没弄那么复杂，就直接把空间改为UV二维就好了：

![](https://pic1.zhimg.com/v2-9b072e26ab6f0b34b2c0b87f525e3310_r.jpg)

接下来首先新建一个用于驱动流体的发射器，放在平面底部的位置：

![](https://pic4.zhimg.com/v2-908f20b9afd397f24e952f6eb0b7e4f7_r.jpg)

适当的降低粒子的数量提高粒子的速度，由于后面需要驱动流体，粒子的半径很重要，适当增大一点，否则后面模拟出来的流体很小：

![](https://pic3.zhimg.com/v2-2b4f78d3fc901f6d1ad4f2d8ec87c8de_r.jpg)

修改帧速率，改为150帧的动画：

![](https://pic3.zhimg.com/v2-84e9d4a95c8b08fd72a149d3dc5ea396_r.jpg)

这里我们先新建一个摄像机，确定一下视角：

![](https://pic4.zhimg.com/v2-75fa4b06e882cb49e693b8a41103bd5f_r.jpg)

原工程摄像机有一个随着时间往上平移的动画，我觉得很好看，所以我们也可以这么给摄像机K个平移关键帧，记得把运动曲线改为线性：

![](https://pic2.zhimg.com/v2-9766c664b6bdb2d529f59cf34e40bee5_r.jpg)

再新建一个发射器，以平面作为对象进行发射，发射来源为纹理：

![](https://pic1.zhimg.com/v2-74bba41f5e2ee2884d71359aeaad5290_r.jpg)

将纹理拖进去，让粒子的颜色来源于纹理：

![](https://pic4.zhimg.com/v2-41646f3c3b2e203a54f458da8b66ef93_r.jpg)

发射器模式改为射击，只发射1帧，暂时发射100W个粒子吧，速度改为0，半径改为1：

![](https://pic1.zhimg.com/v2-c56953c2204025ffb7fabf49454177fc_r.jpg)

新建xpExplosiaFX，让它包裹住整个平面：

![](https://pic4.zhimg.com/v2-151d510b5ddd806a0462a46fcde99a03_r.jpg)

给驱动粒子发射器添加ExplosiaFX发射源标签，点击播放你会发现无法产生流体：

![](https://pic1.zhimg.com/v2-b6da2185f238b19b6fde3895a63a1c24_r.jpg)

这里我们需要回到发射器物理数据里，给燃料一定的数值，这样就可以产生流体了：

![](https://pic3.zhimg.com/v2-a9668fcf600e84b268a20e493b98cb1a_r.jpg)

**接下来就是调整流体的形态了，首先目前全部是火焰的形态没有烟雾，过于统一，后面驱动粒子可能会不太好看。**

想要产生火焰的同时产生烟雾，除了可以在粒子物理数据里给烟雾一些参数以外，直接将这个点火的阈值改为0，代表着所有燃料都在燃烧，这样就可以产生烟雾了：

![](https://pic1.zhimg.com/v2-2775654f5011f28125efabddebc30674_r.jpg)

不过目前的烟雾产生的不够均匀，可以将这个燃烧率改为0，这样就可以产生均匀的烟雾了：

![](https://pic2.zhimg.com/v2-341eaa877126b6df206bc79a09372749_r.jpg)

但是现在火焰明显处于烟雾的顶端，这样感觉也挺怪的，我们这里直接把模拟速度改到200，现在感觉烟雾就和火焰差不多是同步的了：

![](https://pic3.zhimg.com/v2-520ad1bccd7ab262bc3484ef3327d50a_r.jpg)

**另外就是修改浮力等参数，我记得以前官方介绍过重力与浮力之间是相乘的关系，新版可能改了，不过重力的数值确实仍然也会加快烟雾的上升。**

所以我这里将重力改为0，只是提高了烟雾和燃料的浮力，同时将湍流的半径改为0，后面我们单独用湍流修改器来产生湍流：

![](https://pic4.zhimg.com/v2-5d548ae943ea48d79389bc6b359b3183_r.jpg)

另外流体我们本身是不需要渲染的，精度没必要这么高，所以体素尺寸我们可以适当提高一些，这样模拟起来也更快：

![](https://pic1.zhimg.com/v2-533553cf3dda8eaf432806068b9bc44c_r.jpg)

发射源标签里速度的数值也可以提高，这个参数可以加倍的将粒子本身的速度传输到流体上：

![](https://pic2.zhimg.com/v2-d197ffac4014bfe9806506ca4f163281_r.jpg)

最后我们将这个粒子驱动打开，你会发现烟雾的形态和我们刚才调整的形态完全不一样：

![](https://pic4.zhimg.com/v2-f3a9d211a161e1143c006d5f4ba2f877_r.jpg)

这是由于xpExplosiaFX对用于驱动的粒子本身也产生了影响导致的，所以我们需要将它排除一下就好了：

![](https://pic2.zhimg.com/v2-a3645f5ece374b2960ee68d960d3a229_r.jpg)

然后添加一个湍流场用来影响驱动粒子，让它只在X轴上影响：

![](https://pic3.zhimg.com/v2-c7387b577119712c2e2ff60afd8ec6ae_r.jpg)

平面的粒子发射器记得要将湍流场排除哦：

![](https://pic2.zhimg.com/v2-37f34cc60a44660c9db438197dc0ef1d_r.jpg)

接下来的步骤我觉得看着预览来进行调整会比较好，所以打开rs给发射器添加对象标签，模式选择为优化球体：

![](https://pic3.zhimg.com/v2-5f5025b7d5d8750d892238435189332a_r.jpg)

新建一个rs材质球丢给发射器，然后添加一个颜色用户数据节点，让它获取粒子的颜色：

![](https://pic1.zhimg.com/v2-b8758131499472414f111356012f35b4_r.jpg)

新建一个渐变节点来重新定义渐变的颜色：

![](https://pic1.zhimg.com/v2-069858e273fbeb96da3351cc0dc8bdf0_r.jpg)

将渐变节点连接给材质的漫射颜色，同时也连接给发光通道，给一点发光的数值：

![](https://pic3.zhimg.com/v2-80254598c1f623261b55a85920f88e12_r.jpg)

现在画面感觉比较平，添加一个环境光就好很多了，记得隐藏环境显示，勾选透明通道：

![](https://pic4.zhimg.com/v2-601ad3c2edf694c3813929d40b37d9e7_r.jpg)

然后我这里补了三个灯，一边是蓝色，一边是黄色：

![](https://pic4.zhimg.com/v2-d4993fdec3932cf6fe21fbf1594e4fd7_r.jpg)

贴图的全局缩放我这里又重新调整了一下：

![](https://pic3.zhimg.com/v2-5117d4f99a0960263130a5799d2fd0e6_r.jpg)

同时粒子的数量我提高到了200W个：

![](https://pic1.zhimg.com/v2-cc4555b0b4f63e76477600006ca12d18_r.jpg)

虽然粒子都调整的差不多了，不过我建议还是缓存一下，可以看到缓存时间并不是很长：

![](https://pic4.zhimg.com/v2-fd5da941b7df803672de17368b74bd3f_r.jpg)

渲染设置方面我同样打开了全局光照：

![](https://pic2.zhimg.com/v2-3748fc342ac3074fa28f90c8a1b23d49_r.jpg)

统一采样、反射以及灯光的采样我也提高了：

![](https://pic4.zhimg.com/v2-85ed627ca7509a4cd3ab04ed0a6f34eb_r.jpg)

为了方便后期我同样做了一下分层：

![](https://pic4.zhimg.com/v2-cc26663bcc9f40abbf23161fae63158f_r.jpg)

可能是因为统一采样给到比较高，渲染时间挺长的，8个多小时：

![](https://pic1.zhimg.com/v2-df8167d384303c30a68b1434883d990c_r.jpg)

最后后期调整里我额外说明一下，因为我们动画的背景是透明的，我尝试在AE里加其他颜色的背景色好像都不太好看。

所以我这边的做法是把第一帧单独拧出来，放在最下方图层作为背景色：

![](https://pic3.zhimg.com/v2-e4293552f216f82ea50a89daca4cb9a2_r.jpg)

然后鼠标右键给图层添加一个图层样式投影，这个和PS里的操作是一样的：

![](https://pic2.zhimg.com/v2-0629c39f66ae792c059d13f4b6ad3e4d_r.jpg)

最后导出来看看效果吧：

![](undefined)

感觉这种效果只在其中某一个静帧的时候会比较好看，下面是今天的视频版：

[](https://www.zhihu.com/zvideo/1351958481428234240)

好啦，今天所有的内容就到这里，想要源文件以及原视频的童鞋后台**撩我**获取吧！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究