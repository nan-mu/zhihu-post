![](https://pic3.zhimg.com/v2-da8b0bf072f88c5ff0e1169a9c7df6a2_r.jpg)

今天分享内容的视频版如下，想要源文件以及原视频的鹿友后台撩我**回复“431”**获取：

[![](https://pic2.zhimg.com/v2-310a5aca71495d1eb436d40e89d534e1.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1545474408252473345)

**下面是图文版内容：**

**正文共： 2381字 51图**

**预计阅读时间： 6分钟**

之前我们分享过Chris Schmidt的三大插件以及机翻视频教程：

![](https://pic4.zhimg.com/v2-24408b1ca64ee9a4e059a8b5a627cab3_r.jpg)

其中的Mesh to Spline以及Slicer插件我都分别写了小案例进行学习分享：

![](https://pic3.zhimg.com/v2-c7f6ed40d61f28d5d5c70dd00d9f81ca_r.jpg)![](https://pic2.zhimg.com/v2-ff749eda34741c495b8fd8f5b2704635_r.jpg)

**感兴趣的鹿友可以阅读一下上面三篇文章。**

最后还剩Ricochet这款插件我不知道弄个什么案例来分享比较好，然后看见我平常临摹的大神BastardFilms的一个作品：

![](https://pic3.zhimg.com/v2-e349aae820e4e5544523c9ab7d9c6a2e_r.jpg)

我同样剪辑一小段压缩成动图给大家看看效果哈：

![](https://pic2.zhimg.com/v2-d3a7c4ebda9383f517a3d7ddea4804c5_r.jpg)

原作者应该是没有用Ricochet插件制作的，不过我觉得刚好可以借着这个效果做个类似的分享一下插件的使用方法。

**来吧，今天我们就用RKT Ricochet制作一个样条飘散的效果吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

01

**模型整理部分**

打开C4D，导入一个动物模型：

![](https://pic3.zhimg.com/v2-8e86d3e2cb61dbdb42d9d1ddbd15b6fe_r.jpg)

我们需要将动物的头部选出来，模型这里有一些面片会影响我们操作，所以把它们删除一些：

![](https://pic1.zhimg.com/v2-d886b0b5a0197cc429992fcc863bde64_r.jpg)

删除影响选择的面片之后切换到边模式，用路径选择工具选择一圈边：

![](https://pic4.zhimg.com/v2-9d601efadf9cca683d759a8d2f1155c7_r.jpg)

再用填充选择工具选择不需要的部分删除：

![](https://pic4.zhimg.com/v2-b2abbdc9dfe0abdfbf00c5d481816763_r.jpg)

有孔洞的地方记得封闭多边形孔洞：

![](https://pic3.zhimg.com/v2-0de21ff10caa4a319990a96150c892fe_r.jpg)

现在模型的尺寸很小，新建一个立方体对比着放大一下：

![](https://pic1.zhimg.com/v2-ed7362430357215cb3f8fc967b0a0274_r.jpg)

我看官方在使用插件之前都是将模型的布线弄的比较规整的，所以我这里先用体积生成将模型简单重新布线一下，同时加了一个平滑：

![](https://pic1.zhimg.com/v2-8d603305ecea82b10c97dc452c89e6cc_r.jpg)

网格化体积生成，然后将他们连接对象：

![](https://pic2.zhimg.com/v2-0c5115c6379f8e117bb7ebcbeb1690d1_r.jpg)

接下来再用转四边面工具把线转为四边面：

![](https://pic2.zhimg.com/v2-ade7459851149c4c21080c74f69ea899_r.jpg)

02

**RKT Ricochet使用部分**

**到此模型整理就差不多了，开始使用Ricochet插件吧，Ricochet翻译成中文是弹跳的意思。**

顾名思义它可以生成样条，在碰撞到对象之后进行反弹，如图所示，新建Ricochet它会默认产生一条直线：

![](https://pic2.zhimg.com/v2-6116e1934059e484b0653679f4abc6e5_r.jpg)

你可以直接让对象成为插件的子集，或者像我这样选择对象模式，将模型拖进去点击隐藏源，样条就会在对象的内部产生反弹：

![](https://pic3.zhimg.com/v2-33a9b7775cb5bd48dde110e2eb4d472a_r.jpg)

如果你将插件移动到对象的外面，也能在对象的表面产生反弹：

![](https://pic3.zhimg.com/v2-e290aabc4f120392502e78a43ebcb62a_r.jpg)

**需要注意的是默认情况下反弹的样条只有一个发射源产生一个样条，然后通过选择长度模式或者弹跳的次数来控制样条的消失。**

如果你希望有多个发射源产生多个样条，可以点击创建矩阵：

![](https://pic1.zhimg.com/v2-c58228b53cb853c95c0c721ce2a0dab4_r.jpg)

点击之后插件会自动创建一个带随机效果器的矩阵并且连接到插件里面：

![](https://pic1.zhimg.com/v2-bc2762109de46978e544e4f65f700608_r.jpg)

我们点击矩阵就可以看明白，其实就是居于对象表面生成矩阵，然后每个立方体就是反弹光线的发射源：

![](https://pic4.zhimg.com/v2-a0b209bdddf9bcc3186df568160aa51f_r.jpg)

现在的光线是在模型的内部进行反弹，有没有办法让光线在模型的表面反弹呢，类似XP粒子的基于模型表面运动？

**答案是可以的，在修改器选项卡里有一个壳的参数，我们发给它一定的数值，然后激活可见，可以看到模型上有黄色和蓝色的小点。**

黄色代表外壳，蓝色代表内部，光线就会基于黄色和蓝色之间进行反弹：

![](https://pic2.zhimg.com/v2-83da689177a228ad4c6d3b8ce8a5cc05_r.jpg)

这里有一个多重域，例如可以将模式选择为长度，然后用一个线性域来控制每个反弹样条的长度：

![](https://pic4.zhimg.com/v2-d4f752129bf86cf8956358629d882d07_r.jpg)

还可以在上面叠加随机域，让每个样条的长度更加随机：

![](https://pic4.zhimg.com/v2-436459d707650d6a7827e1faf79b6133_r.jpg)

我这里将样条的模式模式改为弹跳次数，让它弹跳2000次消失，至于角度以及排列都是调整样条弹跳形态的，这个大家看着调整吧：

![](https://pic3.zhimg.com/v2-3f37a60dccbcde56cad99a0ac594ee9e_r.jpg)

修改面板还有一个方向力，点击创建以后通过旋转三角形的方向，可以让样条都集中到模型的头部：

![](https://pic3.zhimg.com/v2-5cb737c8116d9eec0a95879a762d3136_r.jpg)

力的强度可以控制样条集中的程度：

![](https://pic4.zhimg.com/v2-53611fca9e92e70b30382e47183775cb_r.jpg)

样条选项卡里可以激活点差值方式，这个就和正常的样条是一样的，将模式选择为B样条，这样样条会更平滑一点：

![](https://pic2.zhimg.com/v2-018a48bae2dc0fe8f124ad4d9a831385_r.jpg)

**这里我觉得样条还不够平滑，所以借助了一下XP套装里网格工具的mtSplineSample将样条进一步平滑了一下。**

如果你没有XP套装的话也没有关系哈，这个影响并不是很大：

![](https://pic1.zhimg.com/v2-1e17a1cae6d32dc6cad98825b3e9c740_r.jpg)

**接下来我们要给样条添加动力学了，我试了试直接给Ricochet添加动力学好像不行，所以需要连接对象，至此Ricochet部分就完成了。**

通过上面的步骤我们基本可以把Ricochet比较重要的功能就都过了一遍：

![](https://pic4.zhimg.com/v2-fe7f9d215f4964a46d59457f432cbe7f_r.jpg)

03

**动画制作部分**

进入动画制作部分了，其实很简单，先给样条添加一个样条动力学标签：

![](https://pic3.zhimg.com/v2-d7987979d4a1647a1a14ceb84054ad7a_r.jpg)

点击播放默认情况下样条会下落，所以在影响里将重力改为0：

![](https://pic2.zhimg.com/v2-342b07fe94cd531cf47016730448ce8d_r.jpg)

然后再新建一个湍流场，把它拖进样条动力学的影响里，再通过域来控制力场的范围，我这里用的是球形域：

![](https://pic1.zhimg.com/v2-7863271bc573df2c5a90ee4432369354_r.jpg)

接下来再新建体积生成，把样条拖进去，通过控制体素尺寸，半径以及密度来控制体积生成的形态：

![](https://pic4.zhimg.com/v2-bae8081028e47156cc13d2e574401d0f_r.jpg)

添加一个体积平滑，参数我们先这样吧，后面渲染的时候看着不合适我们再调整，然后将体积网格化：

![](https://pic4.zhimg.com/v2-c02db404f7135cc56caec3cd07c315e7_r.jpg)

在此基础上再添加平滑变形器就可以进入渲染的部分了：

![](https://pic1.zhimg.com/v2-17bb2933fbd83075ef5b164d03757d38_r.jpg)

04

**渲染部分**

打开RS，新建摄像机固定视角，设置渲染尺寸以及色彩空间这些我都不说了哈：

![](https://pic2.zhimg.com/v2-17fc1c8ab99b3d910106f74b0f30836d_r.jpg)

新建HDR环境光：

![](https://pic1.zhimg.com/v2-db97fd4199fca49223974f74dda7c668_r.jpg)

体积对象的材质我首先用了一个菲涅尔节点：

![](https://pic3.zhimg.com/v2-b9935db55ae4e033e3f2e96a1346bbca_r.jpg)

用一个渐变节点将颜色进行重新映射：

![](https://pic2.zhimg.com/v2-4b5091ee032ec970fd98aac99d0ee789_r.jpg)

将它分别连接给吸收、散射以及发光上，主体材质就是一个sss材质，同时我打开了涂层：

![](https://pic2.zhimg.com/v2-b6989687966941a5ec0aa8750727878d_r.jpg)

然后再用一个噪波节点和渐变节点连接给反射以及图层的粗糙度上：

![](https://pic2.zhimg.com/v2-d3556e3f41df0f650e6634b92102bcad_r.jpg)

给样条添加RS对象标签，模式选择为圆柱就好，适当的给一些细分：

![](https://pic3.zhimg.com/v2-f9b0cc65ff51c8c4159be6dba5150eb6_r.jpg)

样条是深色反射材质，并且用噪波和渐变节点连接到反射的粗糙上，然后同样我打开了涂层：

![](https://pic4.zhimg.com/v2-e6483d747ba000ab43e74492b6dfefaf_r.jpg)

视情况补几盏灯吧：

![](https://pic3.zhimg.com/v2-c0717f8279ce69c7f05ea8f47408e3ea_r.jpg)

接下来我给体积对象添加了一个1级别的细分曲面，同时添加了一个RS对象标签，打开了细分：

![](https://pic2.zhimg.com/v2-c4988c100e99ddd425c8663b38fd6021_r.jpg)

最后补充一点，如果这个时候你直接渲染可能会发现渲染出来和预览视图不一样的情况：

![](https://pic1.zhimg.com/v2-1b689a92aac5b1c9b5e27e651f5f7a9c_r.jpg)

这是由于我们之前的样条动力学没有缓存导致的：

![](https://pic1.zhimg.com/v2-495069a3a4512e21f5d37a1f1b6fd4e8_r.jpg)

当缓存完再渲染就没有问题了：

![](https://pic1.zhimg.com/v2-c8a9b2ebe91cfb7f5a4f57ca937d2a78_r.jpg)

渲染时间6个半小时，还行：

![](https://pic2.zhimg.com/v2-3294dd114e0a912184766e9685e23829_r.jpg)

最后后期调整一下看看效果吧：

[![](https://pic4.zhimg.com/v2-e0ed4fcdddeadde87a1b51950fcefb4b.jpg?source=382ee89a)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1545474688956190720)

**和原图类型相似但是差别很大哈，主要是希望大家通过今天的案例学会Ricochet插件的使用。**

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎