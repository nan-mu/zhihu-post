![](https://pic1.zhimg.com/v2-178579f18ad8ae5d3d2ff0ca2949a630_r.jpg)

今天分享内容的视频版如下，想要源文件以及原视频的鹿友后台**撩我**获取吧：

[![](https://pic1.zhimg.com/v2-19c0fddf8d74184f6a2946fafaafe9ff.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1529469481067356160)

**下面是图文版内容：**

**正文共： 2996字 62图**

**预计阅读时间： 8分钟**

**要去西安出趟差一波三折，之前是没忙得过来，现在空出点时间结果疫情又来了。**

来看正题吧，XP粒子官方工程有一个样条平流的效果：

![](https://pic1.zhimg.com/v2-0af24749332f7194b6c9f08601cf9ba8_r.jpg)

这个没有动画，我这边就只是把预览图放出来给大家看看哈：

![](https://pic1.zhimg.com/v2-109d0858b0622f11913cc3ee91a9a184_r.jpg)

**其实在看见这个工程之前我还没想过用XP的EFX来影响样条，之前都只是影响粒子。**

于是想着分解一下这个工程然后写成文章分享出来，结果我打开工程文件以后就傻眼了：

![](https://pic2.zhimg.com/v2-a0af5c3eda579759ab24181685af15cd_r.jpg)

**平流方面都好说，就是给样条添加动力学标签，然后用EFX去驱动动力学，但问题是这像绳子一样的样条是咋做的啊！**

和这个工程一起还有另外一个工程文件，上面写着备注。

**“转换这个xpTrail为Spline Advection Scene。只要不手动删除这些点，轨迹的颜色就会保留。”**

虽然样条的形态不一样，但它用到了流体场给我了一些提示：

![](https://pic4.zhimg.com/v2-05280dcf9253397504a4031c9bdefe0b_r.jpg)

最后终于是做出来了，虽然不是很好看，但是其中的知识点我觉得可以分享一下。

**所以今天我们就来分解一下XP官网工程样条平流效果吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

01

**样条形态制作**

打开C4D，新建一个螺旋样条，将里面的结束角度改为0，这样样条就会变成一条直线，适当的调整它的高度：

![](https://pic4.zhimg.com/v2-d9ce62b27a94ad1b6f19dedfee80981f_r.jpg)

克隆对象克隆样条，这个不用多说哈：

![](https://pic4.zhimg.com/v2-de425e6044f8db894cb266f2c2969b87_r.jpg)

鼠标右键把克隆对象连接成一个对象：

![](https://pic4.zhimg.com/v2-7cddbc5323ec91536f0b576d655de403_r.jpg)

接下来新建一个粒子发射器，调整它的位置和尺寸：

![](https://pic2.zhimg.com/v2-f9a8da144316e9e3161c8ffec57d8d11_r.jpg)

调整一下帧速率以及动画时长：

![](https://pic1.zhimg.com/v2-c120ae5253b1002bab67db9205be5c90_r.jpg)

发射器里我将模式改为射击，只发射一帧粒子，粒子数量以及半径适当的调整一下：

![](https://pic4.zhimg.com/v2-3f98e680292900825e33bad02e4eadff_r.jpg)

**我希望的是粒子在250帧的时候差不多刚好走完克隆样条的长度，直接调整粒子速度可能不太好搞。**

没关系，我们可以在时间重映射这里对整体的动画速度进行控制：

![](https://pic2.zhimg.com/v2-062255e27daaad6958f913bd67b5b3d9_r.jpg)

给粒子添加拖尾：

![](https://pic1.zhimg.com/v2-485962c23eedf92a1db8ef2b61b41f80_r.jpg)

现在的拖尾太整齐了，可以和官方工程一样，添加一个样条变形器：

![](https://pic3.zhimg.com/v2-72e8b0ed0ff3df96d294dad10bf85f5a_r.jpg)

**把公式删除，然后在着色器里的XY轴分别添加两个噪波来影响样条的变形。**

样条选项卡里我们可以通过调整样条曲线来控制样条变形的范围：

![](https://pic1.zhimg.com/v2-3754eec13ffc1d4697f1b955e033a60c_r.jpg)

现在的样条到达顶部有点统一，我们希望有点随机性，所以可以添加一个湍流场，让它只影响Z轴向，参数适当的调整就好：

![](https://pic3.zhimg.com/v2-b095d5935e35298595a8fd479102f5ba_r.jpg)

不过现在有些样条开始往反方向跑，并且还会超出我们之前克隆样条的范围，我这里首先添加了一个线性域稍微控制了一下湍流的范围：

![](https://pic2.zhimg.com/v2-442c6fcc8e57603e1b1f9a4d38bf09c5_r.jpg)

不过现在还是有样条会超出范围，所以我这里又添加了一个冻结场，让冻结场根据衰减来冻结粒子：

![](https://pic4.zhimg.com/v2-196f8f452be090b7c45a5bd38c6a0d43_r.jpg)

然后通过一个立方体域来控制冻结的范围，让样条始终处于立方体范围内：

![](https://pic3.zhimg.com/v2-a742a31f9525c3a974a671c9e2a91fd6_r.jpg)

接下来就是让样条像绳子一样运动了，其实很简单，首先添加一个流体场，适当的调整它的范围框：

![](https://pic2.zhimg.com/v2-79c5cbf9f51d2accb06ab897cfea21ad_r.jpg)

在流体场里添加一个to spline，把之前的克隆样条拖进去，适当的调整强度和体素尺寸吧，这样样条就会像绳子一样螺旋运动了：

![](https://pic4.zhimg.com/v2-a09b38fd44de54d147aa9eb0374ec27f_r.jpg)

在此基础上可以再叠加一个随机域力场，强度适当降低，有一点随机就好：

![](https://pic4.zhimg.com/v2-9f27c8008e5b83db06d00720471b3f0f_r.jpg)

**形态方面感觉差不多了，这里我们要先考虑一下后面如何把样条渲染出颜色的问题。**

我这里暂时给把RS打开演示一下吧，例如我这里打开RS，给样条添加一个RS标签模式选择为毛发：

![](https://pic2.zhimg.com/v2-62ef9ce054f334b222ccdca8da47d35d_r.jpg)

新建材质球以后可以用一个顶点属性节点链接到漫射颜色上，然后选择曲线ID标准化：

![](https://pic2.zhimg.com/v2-564323e476c682bef7cfc2304889acc1_r.jpg)

再用一个渐变节点就可以对样条的颜色进行重新映射了，但是大家对比一下原图，使用这种方法来处理样条的颜色的肯定是不对的：

![](https://pic3.zhimg.com/v2-7c24168e1b0ff142174b7eaf0e145622_r.jpg)

我们这里可以这么操作一下，新建一个xp颜色修改器，颜色选择为渐变，渐变的模式选择为3D线性，然后我们把轴向选择为X：

![](https://pic4.zhimg.com/v2-5221cd7eee81c610c26189ff0d69cf5f_r.jpg)

颜色选择一个自己喜欢的颜色吧，然后用一个空物体大概测一下最大最小距离：

![](https://pic3.zhimg.com/v2-b0bb1267f32bd0741031d47d89de904e_r.jpg)

最后材质球里，直接用一个毛发数据节点读取毛发的颜色，这样颜色就被渲染出来了：

![](https://pic4.zhimg.com/v2-a42f81cf246d6c6b0621bfd47aad9b03_r.jpg)

02

**EFX样条平流**

**颜色方面的问题说清楚以后，接下来到了制作样条平流的环节了。**

新建一个圆环发射器，调整它的尺寸和方向，你会发现发射器的粒子同样会受到之前的修改器以及力场影响：

![](https://pic2.zhimg.com/v2-9d61e3b0216a626a02d2373a51b44d4d_r.jpg)

所以我们把它们都排除一下，然后发射器里勾选仅环状，角度改为90，这样粒子就会从圆环向四周发射：

![](https://pic3.zhimg.com/v2-ffe6cc4c5f17ff36365dbce7c671082e_r.jpg)

发射器里模式我们同样改为射击，暂时让它就在第1帧发射吧，射击的数量少一点。

**让粒子只存活10帧，速度适当的改低一点，半径是影响流体的关键，我们暂时给一定的数值，如果不合适后面再调整：**

![](https://pic2.zhimg.com/v2-836aeb1ee83600b95a2238fd5884bf5d_r.jpg)

额外数据里的物理数据，我们让烟雾有一定的数值，这样才能产生烟雾：

![](https://pic4.zhimg.com/v2-013e63702404e964419ca89d0e4cadff_r.jpg)

接下来新建EFX适当的调整容器的尺寸，其他参数基本是默认的，我这里只把重力关掉了：

![](https://pic3.zhimg.com/v2-344d1e9d53cb4dae8adec16718a04a7e_r.jpg)

给发射器添加EFX发射源标签，现在就能发射出烟雾了，参数大家就根据自己的喜好来调整吧：

![](https://pic1.zhimg.com/v2-f33d470247fe196ac6e787a10c84b4fc_r.jpg)

我觉得现在烟雾存活的时间太长了，所以在烟雾的消散上给了一定的数值：

![](https://pic3.zhimg.com/v2-98172bed4c4043572e07f23b14640346_r.jpg)

接下来在EFX里把粒子平流打开，你会发现烟雾被弹开了：

![](https://pic1.zhimg.com/v2-339741a66deb972d8c12200ad94aea54_r.jpg)

这是由于EFX也影响了自身的粒子导致的，所以发射器里需要把它排除一下：

![](https://pic3.zhimg.com/v2-51ed89e4ea4b4d5bbe10b14ad9fce306_r.jpg)

不过你又会发现样条的粒子也受到影响走不动了，所以发射器里同样也排除一下：

![](https://pic4.zhimg.com/v2-edcfd25281a05b9cd0a7ad1bbb2b460b_r.jpg)

接下来给拖尾添加xp动力学标签，标签里新建一个发射器，发射器里记得除了EFX以外，把之前的力场都排除一下：

![](https://pic4.zhimg.com/v2-c574b044f4db5c9af1a3d0d800483b5f_r.jpg)

动力学标签里我们把硬度改小播放测试一下，你会发现粒子确实会收到EFX的影响，但是却没有办法带动样条形变：

![](https://pic2.zhimg.com/v2-b012252d8adfd9b0de0f1fede148a25d_r.jpg)

对此我暂时没有找到好的解决办法，看来还是得把样条C掉，所以暂时将EFX关掉，然后当播放到第250帧的时候将样条C掉：

![](https://pic2.zhimg.com/v2-843ebed76fbbea0a5b6c2ed41f767a7d_r.jpg)

如果你还希望保持之前的样条生长动画，可以添加一个xp的样条生长修改器通过K帧来实现：

![](https://pic2.zhimg.com/v2-cdfc7c5aae30323beef1ae897a78bba5_r.jpg)

现在样条就可以受到EFX的驱动发生形变了，但是样子好像不太好看：

![](https://pic1.zhimg.com/v2-267178628735b5beb0b5caf5857f6728_r.jpg)

约束里给一点强度，感觉形态就差不多了：

![](https://pic4.zhimg.com/v2-e9538ee1ae21dc9c9707ce90f1846803_r.jpg)

接下来我让样条在125帧就生长完，然后让烟雾的粒子在100帧的时候发射出来，感觉这是我想要的状态：

![](https://pic4.zhimg.com/v2-066eb22a5092185d7e0b12bc2531ca77_r.jpg)

将粒子缓存吧：

![](https://pic2.zhimg.com/v2-1d5a46ac2f5b30a46c640898a12a09ed_r.jpg)

03

**添加毛发**

**接下来我希望在样条现有的基础上添加一些类似绳子上的线头那种不规则的线条。**

给样条添加毛发吧，现在的样子看起来很难看，没关系，我们慢慢调整：

![](https://pic4.zhimg.com/v2-68161f44360bf3409ea9839caca9dea3_r.jpg)

首先在毛发的引导线里，将数量改少一点，分段稍微提高，并且把长度改短，发根我们改为样条统一，生长让它是任意：

![](https://pic4.zhimg.com/v2-eb5801ba7889d0d0a635923848bbc2e7_r.jpg)

发根里我们让毛发与引导线一致，然后动力学我觉得可以关掉：

![](https://pic3.zhimg.com/v2-80368fb96d5f40974e337f8c10879c9a_r.jpg)

使用RS渲染C4D毛发我们要记得把高光强度改为1-2，这样颜色才是正确的显示：

![](https://pic1.zhimg.com/v2-be552ddf2e6dd98cb354e4cc3cb171a8_r.jpg)

04

**渲染部分**

**现在调整毛发我感觉看的也不是很清楚，我们就进入渲染部分，一边渲染一边调整吧。**

设置渲染尺寸调整色彩空间就不多说了哈，渲染C4D毛发我建议是把RS渲染设置中毛发的最小像素宽度打开，这样毛发渲染的会比较清楚：

![](https://pic3.zhimg.com/v2-0c2a857396435217758b683fee444886_r.jpg)

新建环境光：

![](https://pic2.zhimg.com/v2-178e2a977f4a0fd076942189e9e2f581_r.jpg)

新建摄像机固定视角吧，我这里做了简单的摄像机动画：

![](https://pic4.zhimg.com/v2-c427c075347183ab33b52e2274dcf797_r.jpg)

样条的材质我没有太大的变动，只是将毛发属性节点同时接到了背光上面，然后提高了粗糙度：

![](https://pic2.zhimg.com/v2-c58e39df008543c9fd01317942a144b1_r.jpg)

**再来是毛发的材质了，我这里先给了一个RS毛发材质，然后通过毛发随机颜色节点以及渐变来重新定义颜色。**

把他们分别连接到漫射以及内反射的端口上，我这里暂时没有找到让毛发与生长的样条颜色一致的方法，就用这个办法代替吧：

![](https://pic2.zhimg.com/v2-9641936d02743b4893caf3750b1caef5_r.jpg)

接下来就是调整一下毛发的粗细：

![](https://pic2.zhimg.com/v2-6abacae83adf25c141134dee789e3085_r.jpg)

毛发的长度：

![](https://pic1.zhimg.com/v2-52b65be166c8f14afb29edcf7dd94e9c_r.jpg)

纠结也调整了一下：

![](https://pic3.zhimg.com/v2-6576ac8dd3efb5f8c2a8f9704bf0d952_r.jpg)

最后调整了弯曲：

![](https://pic3.zhimg.com/v2-b2b6fd530ed65879201b94ed32262896_r.jpg)

材质方面我感觉就这样吧，然后佛系补灯：

![](https://pic1.zhimg.com/v2-4f752e390f59ad8ff51174a9e0cca53c_r.jpg)

渲染设置里我开启了多通道，然后景深以及运动模糊也添加了用于后期合成：

![](https://pic2.zhimg.com/v2-bb3f36324c76b488c9a1aac3b012d33d_r.jpg)

渲染总时长渲染总时长10小时，还挺长的：

![](https://pic1.zhimg.com/v2-d07eb84478614fdbff9c70b2ba1ece08_r.jpg)

最后渲染出图后期调整一下看看效果吧：

[![](https://pic1.zhimg.com/v2-d9318aa34f1c62d68a891983e2bf91c8.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1529471721577345024)

大概是这个意思吧，以上就是今天要分享的内容，我们下次见！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎