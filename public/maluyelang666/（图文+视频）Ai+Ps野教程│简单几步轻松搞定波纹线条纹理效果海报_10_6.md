![](https://pic3.zhimg.com/v2-15782d7d2b7a319cb11f9404e2a30322_r.jpg)

最近有很多鹿友说，为什么老是C4D，都没有平面的内容了。

**这个确实没办法呀，主要我最近一直在研究C4D，时间精力有限啊。有时候就在想，要是我能分身就好了，一个C4D，一个AI，一个PS，想想就刺激。**

**软件这个东西，有时候你放久了会忘，不过有时候放久了又会有新的感觉。**

记得这个是今年年初一月份的时候鹿友问的问题了：

![](https://pic1.zhimg.com/v2-d40d1fa607c333ec59907d8ac76d5fa4_r.jpg)

**当时我是用剪切蒙版、置换加上高斯模糊一类弄的，但是仔细看细节是和原图不一样的。**

原图中类似波纹的那种线条当初没有做出来：

![](https://pic1.zhimg.com/v2-fc365bfb9cd5a68c1ddf0cfcccadded0_r.jpg)

期间群里也有童鞋问过类似的效果，**都是两头细中间粗的纹理：**

![](https://pic4.zhimg.com/v2-c37f4acdbb6894ddcd4f56344b39b7bf_r.jpg)

图片来源于网络，入侵请联删

直到最近又有鹿友提问，这位鹿友发的那四张图里也有一张类似的效果：  

![](https://pic1.zhimg.com/v2-94f25ca8475e127be6b879218a13adf0_r.jpg)

于是我又重新研究了一下，突然发现其实方法还是蛮简单的。

**来吧，今天我们就来试试用AI和PS制作波纹线条纹理的海报吧。**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开AI，新建画板，为了方便观察，先画一个黑色的矩形锁定充当背景：

![](https://pic4.zhimg.com/v2-95c3c072fe3fb95dc9375df5162636ab_r.jpg)

再如图所示画一个矩形，粗细大家可以多尝试一下，颜色决定了以后成图主体的颜色：

![](https://pic1.zhimg.com/v2-e3c50a73255cc2f30d0f6cb25d473a54_r.jpg)

选中矩形执行扭曲和变换-变换：

![](https://pic2.zhimg.com/v2-7feb2fce0da97b7a93f1f2e501f71445_r.jpg)

然后更改垂直方向的距离以及副本的数量做出多个矩形来，当然你用混合也可以，方法不是唯一哈：

![](https://pic4.zhimg.com/v2-cbf8a2f238b537a43dba42e9e2ac6fb3_r.jpg)

继续选中对象执行封套扭曲-从变形建立，变形的样式大家可以选择自己觉得合适的，样式不同最后呈现的波纹效果就不一样。强度我觉得默认就可以了。

**上面的操作步骤当然也可以在PS里直接完成，封套扭曲这一步可以用液化来操作，这样变形的效果自由度会更高。**

但是因为很多鹿友如果用液化工具手动来操作变形可能效果不太好，所以我选择用Ai来弄：

![](https://pic2.zhimg.com/v2-d27427ea3636bceaa27a13aaf7406599_r.jpg)

选择一个合适的字体，粗一点的比较好，颜色不重要，然后调整到合适的大小：

![](https://pic3.zhimg.com/v2-387fa9fa1728f36805b86dafd6856736_r.jpg)

然后对文字也执行同样的封套扭曲，这样文字的扭曲走势就和纹理是一致的：

![](https://pic2.zhimg.com/v2-427399b91b05848f0b7c191cc97fee4d_r.jpg)

至此Ai里的操作就完成了，下面要到PS里操作了。打开PS，新建画布和填充色：

![](https://pic2.zhimg.com/v2-3285750e2781f30f79da68973da9b915_r.jpg)

把文字和背景纹理分别拖进PS里：

![](https://pic1.zhimg.com/v2-1b15ceace02034bc957479dcbf045358_r.jpg)

先暂时隐藏掉文字图层，按住ctrl键鼠标单击纹理图层的缩略图载入选区：

![](https://pic3.zhimg.com/v2-dccedace0dcb3a22fe88df33cdbb8a56_r.jpg)

这一步很关键，执行选择-修改-扩展：

![](https://pic1.zhimg.com/v2-5cf2196a71336fc84189dba5df1dda04_r.jpg)

扩展的像素大家可以多尝试一下，只要别扩展以后选区都黏在一块就好：

![](https://pic2.zhimg.com/v2-7fde6b323529ec92a98a39c3c6d7a419_r.jpg)

新建图层，将扩展以后的选区填充为纹理一样的颜色：

![](https://pic4.zhimg.com/v2-8a3ef83e9a61d96e320b6624375ad4cb_r.jpg)

然后再载入文字的选区，给扩展填充后的图层添加图层蒙版：

![](https://pic4.zhimg.com/v2-b99b4bdc3f1533e49c9f320b96aaa93b_r.jpg)

这样文字所在的部分就会比背景的纹理略微粗一丢丢：

![](https://pic1.zhimg.com/v2-de20e935900f787dc7ff91945a344d5c_r.jpg)

然后同样载入文字选区给下面的纹理图层也添加图层蒙版：

![](https://pic3.zhimg.com/v2-61642c6f2820640bde94374339181476_r.jpg)

再去分别修改两个图层蒙版的羽化值，这样两边细中间粗的效果就出来了：

![](https://pic1.zhimg.com/v2-09cfbeba41cb297f1ee12bd62f15fcb0_r.jpg)

最后码字排版导样机，老三样看看效果吧：

![](https://pic3.zhimg.com/v2-1f8e160b88e1cab8aa1ccbb404dab08a_r.jpg)

很简单吧，其实熟练以后操作起来是很快的：

![](https://pic1.zhimg.com/v2-e6451172bf1315b2a65af690029136c0_r.jpg)![](https://pic2.zhimg.com/v2-645503f60e5c59c25fed59c76ad86105_r.jpg)

方法基本就是这样，其他样式的纹理以及扭曲的效果大家可以自己多尝试尝试哦，下面是今天的视频版：

[![](https://pic4.zhimg.com/v2-75649b65d62dfc385f02dde3bbbb281f.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1056302644532015104)

好啦，今天的分享就到这里，想要源文件以及原视频的童鞋后台**撩我**获取吧！

**更多内容欢迎关注公众号：**

公众号：野鹿志

老鹿微信：maluyelang6666

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究