![](https://pic4.zhimg.com/v2-a076a58210df4a0f96195bb3e6012f63_r.jpg)

故事是这样开始的。

话说之前**@张先生**童鞋问了一个螺旋线条的效果：

![](https://pic2.zhimg.com/v2-03d7a6aa40bf1919fe57b5094e9dd595_r.jpg)

确实很好看，我也研究了很久，发现要制作这个效果需要借助X-Particles粒子插件，而且是3.5版本才行。

**但是目前网上3.5版本的木有和谐版（当然你可以选择Demo版）**，最高版本只有2.1，而用2.1虽然也能做出螺旋线条，但是效果差很远，没有办法进行更精准的调整：

![](https://pic3.zhimg.com/v2-ac0012646b86e72b36215977b5869bde_r.jpg)

红色箭头处为XP粒子2.1噪波厂Curl模式产生的螺旋线

另外还有一种办法，是用TP粒子结合XPresso以及代码制作的，这种方法总体来说效果很接近原图，

![](https://pic3.zhimg.com/v2-95b87b9fa9fb6b66a1e8b7a4a6b016da_r.jpg)

这是我在网络上找到的该效果工程文件

有兴趣研究的童鞋我也会在文后分享给大家

但是由于水平有限，我不懂代码，而且TP粒子和XPresso我也都还没开始学习，所以本来打算这个效果暂且作罢的：

![](https://pic2.zhimg.com/v2-871b4075a9dc9f8b2d2e37421883dbd9_r.jpg)

不过花了几天的时间研究，就这么作罢总觉得时间都浪费了，所以又不死心继续找。

结果发现了AE的Red Giant Trapcode Suite 15套装：

![](https://pic4.zhimg.com/v2-1a114970893a5c94b930666021025a8f_r.jpg)

Red Giant Trapcode Suite 15

套装中的粒子插件particular4.0因为新增了流体场，不过不知道是不是没掌握到方法，效果也不是特别理想：

![](https://pic4.zhimg.com/v2-608168d5d2ea8c82009510ed4b09234b_r.jpg)

利用particular4.0制作的螺旋线条

虽然最终效果还是没有研究出来，但是我发现particular是一款相当好玩的插件。

熟悉AE的童鞋相信对这款插件不陌生吧，这是AE最重要的粒子插件了，相当于C4D的X-Particles。

**今天我们就来分享一下这款插件的上手小案例：下雨场景。**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

首先打开AE，新建合成：

![](https://pic4.zhimg.com/v2-53595248e3e0eedf28967b7e70729dbf_r.jpg)

要使用particular我们需要首先新建一个纯色图层：

![](https://pic4.zhimg.com/v2-de70f34316350b33f1494b718f32fb63_r.jpg)

然后效果控件面板鼠标右键选择particular：

![](https://pic4.zhimg.com/v2-75546f7b40d97ff5f7af3ae861d4be53_r.jpg)

点击关于可以看到我使用的版本是4.0：

![](https://pic1.zhimg.com/v2-1b904fc0f01d6e53ea1716b88ce87c00_r.jpg)

**由于particular是一个很强大的插件，而我上手时间有限，我这里就简单的把常用功能分类给大家标注了一下。**

建议大家可以安装以后动手尝试，更多细节的地方以后有机会再分享：

![](https://pic3.zhimg.com/v2-348c7dc1438fdeff6884757312394f96_r.jpg)

开始制作下雨场景吧，删除刚才的纯色图层，重新新建一个，尺寸2000\*2000，颜色深灰色：

![](https://pic3.zhimg.com/v2-1cba6aa0dadcda02032257d79132267e_r.jpg)

将纯色图层转为3D图层，利用旋转和移动工具将其移动到如图所示的位置，作为地面：

![](https://pic1.zhimg.com/v2-4b3db1e2b1088a8e6b487452a1336d5c_r.jpg)

继续新建一个纯色图层，用于制作下雨的效果，大小和合成大小一样就行：

![](https://pic1.zhimg.com/v2-705b97298050f394045e93c2c64b0394_r.jpg)

选中雨图层，打开particular：

![](https://pic3.zhimg.com/v2-aa6a54da2971f5ad2696a656a10040b2_r.jpg)

将发射器的类型改为BOX，向上移动位置，同时修改X和Z轴的尺寸，让发射器变大一点：

![](https://pic4.zhimg.com/v2-34f4d5487b650d568947e1dd983d380b_r.jpg)

将发射方向改为directional方向性发射，然后X轴旋转-90度，这样粒子就会从上而下的发射：

![](https://pic4.zhimg.com/v2-fd152cab97003f5ef308cb67d05dd75f_r.jpg)

开启运动模糊，把传播偏移改为0，速度调大：

![](https://pic2.zhimg.com/v2-a5b9e4676ca09b536880c6d31cb15995_r.jpg)

下面我们希望雨水会和地面发生碰撞，所以首先将辅助系统中改为开启碰撞：

![](https://pic2.zhimg.com/v2-5f6f53407bc5facde9c1cab7f7e16695_r.jpg)

再在力场中将模式改为碰撞，同时碰撞的图层选择为地面图层：

![](https://pic2.zhimg.com/v2-04727a98df80b7965e32a086251cb119_r.jpg)

然后把辅助粒子的尺寸改小，速度提高一点：  

![](https://pic2.zhimg.com/v2-aa5c860107a1081c58e1ba56b9e3a1c1_r.jpg)

这个时候我们会发现粒子会反弹，没关系，将反弹选项改为kill就可以了：

![](https://pic4.zhimg.com/v2-22185c9a744a801cc5c732374bad4af3_r.jpg)

然后再试情况去修改一下发生器Y轴的尺寸，以及粒子发射的数量：

![](https://pic4.zhimg.com/v2-e9eac5b75b5ce5e2896851e1c15efe33_r.jpg)

可以再新建一个点光源增加点氛围：

![](https://pic2.zhimg.com/v2-4b153beb6b24f527b7b685bc668b4579_r.jpg)

至此下雨场景就差不多了，你也可以在里面加点其他的东西。

**例如我这里利用另外一款插件Element 3D加了一个立体文字，新建一个纯色图层：**

![](https://pic2.zhimg.com/v2-f663646b4bdae1c667c609c860f5ae79_r.jpg)

再新建一个文字图层，输入文字，调整其大小和位置以后，选中纯色图层后执行效果-Element：

![](https://pic2.zhimg.com/v2-7d6b04ce4820ef40604643befdda7205_r.jpg)

自定义图层中选择文本图层，点击设置：

![](https://pic4.zhimg.com/v2-6685927155e5b9bcfda927d9fab223e7_r.jpg)

点击挤压后，可以在预设里选自己喜欢的材质和环境贴图：

![](https://pic1.zhimg.com/v2-a7914ea9d6fa9cf2d4ac7f80349ef380_r.jpg)

隐藏掉文本图层，同时调整转为3D文字图层的纯色图层位置：

![](https://pic3.zhimg.com/v2-fc177aa79ea98f29c11213860759a396_r.jpg)

简单的给一个摄像机动画：

![](https://pic2.zhimg.com/v2-955b8570fde1d83588ce98cac7f968f9_r.jpg)

最后简单的排个版看看效果吧：

![](https://pic3.zhimg.com/v2-5ff54a868ee56fa5d4a9ae74f4ce829e_r.jpg)[![](https://pic1.zhimg.com/v2-c2861f1f1b988e2832cbdc51e7fb8b25.jpg)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1053265863460904960)

今天只是分享一个上手小案例，其实不仅是下雨，包括火焰、烟雾以及炫光等效果particular都能模拟出来，相当强大。

下面是视频版：

[![](https://pic3.zhimg.com/v2-dc16f065018a90393bb24a0818fb7ba6.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1053265919010279424)

好啦，今天的分享就到这里，想要插件、源文件以及原视频的童鞋后台**撩我**获取吧！

**更多内容欢迎关注公众号**

公众号：野鹿志

老鹿微信：maluyelang6666

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究