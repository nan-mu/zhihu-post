![](https://pic3.zhimg.com/v2-f4177e6ee6feca79b12c88a6bb1ff2a6_r.jpg)

最近刚好有些空闲时间，所以废话不多说，继续来临摹，同样来自我们临摹过多次INS上国外大佬**@BastardFilms**的一个流体效果：

![](https://pic3.zhimg.com/v2-f5b9810279b41aaed92ab58e90341f96_r.jpg)

同样我这边把动画压缩成动图我们一起看看效果吧：

![](https://pic3.zhimg.com/v2-b42c007123556f213a2e2b141460004e_r.jpg)

这个像牛奶一样的液体烟雾效果其实我一开始一直以为是用XP做的，结果打开以后发现大佬说的是用RF和TFD制作的：

![](https://pic2.zhimg.com/v2-74175b6443bb4249d12137f51c53106d_r.jpg)

一直以来我只知道TFD可以驱动C4D默认粒子、TP粒子以及XP粒子。

**从来没有想过还可以和RF搭配着使用，测试过后发现，RF和TFD确实是可以配合使用的，但是无法使用TFD来驱动RF的粒子，却可以使用RF来驱动TFD。**

原图应该就是用的RF来驱动TFD的烟雾做出液态烟雾的效果的。

**尝试了一下感觉总体其实并不太难，个人认为对于这种小的场景，并且对流体模拟没有太多花哨要求的情况下，RF比XP模拟起来更容易上手一些。**

场景方面我们就不搭建了，这个不是我们今天的重点，另外由于我还从来没有用过RS来渲染烟雾。

**所以今天我打算用RF、TFD来模拟，最后用RS来渲染出这个像牛奶一样的液体烟雾效果。**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

首先打开C4D，这个是我在魔顿网上下载的杯子和瓶子的模型：

![](https://pic3.zhimg.com/v2-c85a254cf8842a3cc0548a2dd0dda446_r.jpg)

删除多余的对象、材质调整完坐标轴以后，它是这样的：

![](https://pic4.zhimg.com/v2-fe107cd973b78983b3501ffa80b7af6b_r.jpg)

现在的模型它的开口是封闭的，这肯定不行，没关系我们一个一个的来调整：

![](https://pic2.zhimg.com/v2-3eb5b5ebdbe62d252f23da0c3e691f99_r.jpg)

首先是瓶子，切换到面级别，我们可以直接用填充选择来选中自己想要删除的部分：

![](https://pic2.zhimg.com/v2-d61986f5d8e38d1f569df05a3086f481_r.jpg)

开口的位置打开删成这样就可以的，不要忘记瓶子里面之前有充当液体的部分也需要用填充工具选择以后删除：

![](https://pic3.zhimg.com/v2-db0d3b2fa652399c46ed255eddd6467a_r.jpg)

删除完毕之后记得切换到点级别全选，然后鼠标右键优化一下：

![](https://pic4.zhimg.com/v2-a22f7c3471e6bd598712d76b95f916b7_r.jpg)

再来是杯子，同样填充选择选中删除不要的部分：

![](https://pic4.zhimg.com/v2-e6b24fa1ce94c37d0b80f3f48f18cda7_r.jpg)

杯子这里需要注意的是原模型，杯子内部到底部是有一定距离的：

![](https://pic3.zhimg.com/v2-d993e18d936fb4e649648f786763049e_r.jpg)

所以选中杯子内底部的面：

![](https://pic3.zhimg.com/v2-f3655a89e5190d35cd1d02ca1aa4459a_r.jpg)

把它往下移动一点：

![](https://pic1.zhimg.com/v2-f7cf0d89a9bfdb52945540c5da2e4ec8_r.jpg)

杯子底部的三角面其实是没有关系的，不过如果你和我一样有强迫症，可以选中它们删除：

![](https://pic1.zhimg.com/v2-8ce2001ac6183b25f1c66bf5ce1e0478_r.jpg)

再用封闭孔洞插件封上，最后不要忘记点级别全选优化哈：

![](https://pic1.zhimg.com/v2-f4c7b55979e44ffa2379fe6d5ca3d2b4_r.jpg)

为了方便观察，可以给两个模型都添加显示标签，显示网线：

![](https://pic3.zhimg.com/v2-9d9e868cad9f9a865ccb208d1bb75c8a_r.jpg)

然后调整两个模型的位置，这个不用多说吧：

![](https://pic2.zhimg.com/v2-b03e7ab3054b810113c9cb00aa8bb2dd_r.jpg)

新建一个圆形发射器，摆放到合适的位置：

![](https://pic4.zhimg.com/v2-4ac9d2e3fd7619347327220eda8c60a3_r.jpg)

给两个模型添加RF的碰撞标签以及体积标签：

![](https://pic4.zhimg.com/v2-4ac9d2e3fd7619347327220eda8c60a3_r.jpg)

再给场景里添加一个重力：

![](https://pic1.zhimg.com/v2-966d22370cc347b8f189198d0e28e8bc_r.jpg)

帧速率改为25，做10秒的动画吧：

![](https://pic3.zhimg.com/v2-008bc804df4fdb2855d68755ddae223a_r.jpg)

这个时候点击播放，粒子会到处四散：

![](https://pic1.zhimg.com/v2-bffd5b3a2fb04a1cd1c56c8bd5bebc00_r.jpg)

在瓶子的体积标签里，将模式改为外壳，同时碰撞的尺寸所以改小一点，不过杯子的碰撞模式肯定也需要调整：

![](https://pic4.zhimg.com/v2-40367a705cd0a4fe3d97f515d0b2756f_r.jpg)

所以同样杯子的体积标签需要将模式改为外壳，同样碰撞尺寸小一点，但是现在出现了穿模的现象：

![](https://pic2.zhimg.com/v2-c63f5ba102fb0e07e21dad739b05cb19_r.jpg)

只需要适当的提高最小和最大的子帧步幅，就不会有穿模的情况了：

![](https://pic4.zhimg.com/v2-e79452d170eb07e91980a3502c63c02f_r.jpg)

**因为我们后面要用RF来驱动TFD，粒子数量太少的话烟雾的效果可能会不太好。**

所以流体设置里我提高了分辨率，并且提高了一点涡度，其他并没有太多复杂的设置：

![](https://pic4.zhimg.com/v2-812cb338e4fa55ea4e2688001609c99f_r.jpg)

最后我希望杯子的水不要流出来，刚好在最后一帧的时候倒满就好，所以降低了一下粒子发射的速度：

![](https://pic4.zhimg.com/v2-7b9f500ce400aa4d67bb755fb2eb7b4f_r.jpg)

RF在模拟这种流体确实很方便，不需要过多的调整基本上就可以先将粒子缓存了：

![](https://pic3.zhimg.com/v2-392f269611a8f8f42d977aa69fc31eaa_r.jpg)

接下来就是用TFD模拟烟雾了，新建TFD容器框包裹住模型：

![](https://pic3.zhimg.com/v2-97e5b9c8a11df8fb1de3598ff78791fe_r.jpg)

**由于我们要模拟烟雾，所以我这里缓存的是密度通道，当然温度通道也是可以的。**

这里我修改了重力的方向，只给了一点重力值，同时消散时间我修改了一下，让烟雾能够更快消散：

![](https://pic2.zhimg.com/v2-0b7b95a4b05df1344842ebb57db7c1bd_r.jpg)

给RF发射器添加TFD标签，勾选碰撞，密度通道给一定的数值：

![](https://pic2.zhimg.com/v2-108fe5a6f1b35efdfd94a86845a0c99d_r.jpg)

两个模型也添加TFD标签，勾选碰撞：

![](https://pic3.zhimg.com/v2-10102129c810d9167b9e459a15ad4f76_r.jpg)

预览里记得将通道改为密度通道，着色为烟雾着色器：

![](https://pic2.zhimg.com/v2-0f6d438a7b9ab75fa31a16f5d43fd0b5_r.jpg)

接下来就可以看着效果来调整参数了，我先模拟了一次，感觉其实整体都还好，就是烟雾有点过于平整了：

![](https://pic2.zhimg.com/v2-db718e4e1eb301ff4e7e25beac297c41_r.jpg)

于是我在TFD标签里添加了一点法线力，提高了一点密度的数值：

![](https://pic2.zhimg.com/v2-19913ba47e1a3334d2e77b393ed775d5_r.jpg)

同时涡度以及湍流的参数也给了一些：

![](https://pic1.zhimg.com/v2-497cfe287b72ed8c93a3328f79579ee0_r.jpg)

可以看到修改数值以后，由于烟雾的细节变多了，模拟的时间以及占用的空间也明显变大了：

![](https://pic4.zhimg.com/v2-c40d53e5465bd04edb13350ab88014eb_r.jpg)

用平面搭建一个简单的曲面场景，这个不用说吧：

![](https://pic2.zhimg.com/v2-cb6c240f66ff3d6b85cdb3510f4f1289_r.jpg)

接下来就是渲染部分了，设置渲染尺寸，新建摄像机固定视角：

![](https://pic1.zhimg.com/v2-bbeee78fdc942a879b6fde46fced2730_r.jpg)

新建RS环境光，给一个HDRI贴图：

![](https://pic1.zhimg.com/v2-44cddae11feb935da0c44e6cf29537cc_r.jpg)

RS灯光的体积里需要给一定数值才能渲染出烟雾：

![](https://pic1.zhimg.com/v2-7fba65efca34da378f81d11eacf7f910_r.jpg)

新建一个RS的体积材质：

![](https://pic2.zhimg.com/v2-7f25aa97cee0045505d096035547397d_r.jpg)

把材质球给TFD的容器，同时RS材质中的散射通道载入TFD的密度，这样烟雾就渲染出来了：

![](https://pic2.zhimg.com/v2-3951e15f2c9ce0c898639ee2071c61f1_r.jpg)

这里有个小插曲，你可能会发现RS的桶装渲染和渐进式渲染出来的差别非常大：

![](https://pic3.zhimg.com/v2-32514a0f0b43b743699c4a1256c63a92_r.jpg)

这个其实是我们下载的这个模型场景设置导致的，康秋D调出工程设置，你会发现它没有勾选线性工作流，勾选以后桶装渲染和渐进渲染的情况就正常了：

![](https://pic1.zhimg.com/v2-3b43db5252bb4c8f89a7742c0ce84b04_r.jpg)

重新回到材质里，将吸收的数值改小烟雾就会越透明，然后发光我这里也载入了密度通道，给了一丢丢数值：

![](https://pic4.zhimg.com/v2-0043ae52b088d79300147f13aca7efe3_r.jpg)

瓶子的材质就是一个普通的玻璃材质，取消勾选了剔除内部折射：

![](https://pic3.zhimg.com/v2-3852e6029863b04548b99a4113c7c0f6_r.jpg)

我这里把曲面场景更换成了一个普通用于接收投影的平面，然后给了它阴影捕捉节点，开启了反射，反射的粗糙以及衰减：

![](https://pic3.zhimg.com/v2-831f62acf0629c77ac9e8e62be3eeb92_r.jpg)

渲染设置里我打开了全局光照：

![](https://pic1.zhimg.com/v2-e6de2e34007ba5f4dbafdd8ae97575b0_r.jpg)

因为有玻璃，所以我提高了反射以及折射的次数：

![](https://pic3.zhimg.com/v2-88f211dc1c2473366cb12f0241096676_r.jpg)

提高了统一、折射、反射、灯光以及体积雾的采样：

![](https://pic3.zhimg.com/v2-02e89d742a15716e9dfc2be79c527cea_r.jpg)

同时我这里做了一下分层：

![](https://pic3.zhimg.com/v2-1094d7b95553bb272730f95720490d7e_r.jpg)

渲染时间确实挺长的，花了差不多13个小时：

![](https://pic2.zhimg.com/v2-77dddeeecb2b69d4a0389457dfdca33d_r.jpg)

渲染完毕以后我才发现自己忘记勾选透明通道了，为了节省时间我又重新弄到农场里去渲染，60多块钱花了2个多小时渲染完：

![](https://pic2.zhimg.com/v2-ceb0ba474eea24f25893f89c45e5f329_r.jpg)

最后看看效果吧：

![](https://pic2.zhimg.com/v2-194e7c4097925a84f771ce842a08f8c1_r.jpg)

下面是今天的视频版：

[](https://www.zhihu.com/zvideo/1354412602081099776)

好啦，今天所有的内容就到这里，想要源文件以及原视频的童鞋后台**撩我**获取吧！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究