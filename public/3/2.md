![](https://pic3.zhimg.com/v2-f8450430269f9b1316f8369e4daafd2a_r.jpg)

继续临摹，同样来自INS大神**@Mikhail Sedov：**

![](https://pic2.zhimg.com/v2-d7eb888d9cf920f170c670528205b941_r.jpg)

同样我把它加速压缩成动图大家看看效果吧：

![](undefined)

**这种类似皮筋形成文字的效果应该也是运用的动力学模拟，R21新增功能域力场我估计能够做出来。**

但是无论是oc还是rs，欢乐版都不支持R21，所以我最后是使用R20结合XP做了一个类似的效果，动态细节没有原图好看，但是大概是那么个意思。

**好了，今天我们就来制作一个皮筋形成文字的动画吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，帧速率设置为25，做300帧吧：

![](https://pic4.zhimg.com/v2-d4b3bfe5fd8010473abb060e57f0fb07_r.jpg)

新建圆环样条，调整它的轴向以及大小：

![](https://pic4.zhimg.com/v2-cb12591f89751189892e72a11dc2d383_r.jpg)

新建克隆克隆圆环样条，模式为网格排列，把Y轴的数量以及距离都改成0，其他两个轴的数量暂时给到5吧，后面我们看着效果再调整：

![](https://pic2.zhimg.com/v2-f3b9afd5191a93730975e980a61e889d_r.jpg)

给克隆添加随机效果器，随机XZ轴的位移，然后等比缩放也随机一下：

![](https://pic4.zhimg.com/v2-7c3f3ab7bc352a998487c1e4c3803a6f_r.jpg)

**再给克隆添加一个推散效果器，通过调整半径以及迭代的数值让圆环不要有穿插。**

注意这些参数都不是固定的，后面视情况如果克隆的数量修改了，这些参数可能也需要调整：

![](https://pic2.zhimg.com/v2-68739aae2b8468097eaa6fc8765d9031_r.jpg)

再新建一个文本样条，适当的调整文本的大小以及水平间隔：

![](https://pic3.zhimg.com/v2-cb6a859f2af5bd06df68c0853e7f63ea_r.jpg)

接下来给克隆添加XP的动力学标签，勾选包括子集，然后新建一个发射器以便于观察。

**由于皮筋肯定是很软的，所以我们这里可以先直接把硬度值降到最低，后面看着效果再来调整。**

点击播放键就可以看到圆环样条上发射出粒子了，粒子的运动就会驱动样条跟着变形运动：

![](https://pic4.zhimg.com/v2-ff8aa1e78a8647a88d1e9a8d56fdf6ff_r.jpg)

**接下来添加一个xpFlowField，模式选择为样条，把文本样条拖进去作为力场。**

模式改为速度，把衰减关掉，点击播放键，可以看到样条在Y轴上也有运动，这个不是我们想要的：

![](https://pic2.zhimg.com/v2-ae09b8e79ddc3ac9fd6293bac98ee4c5_r.jpg)

所以再添加一个限制修改器，限制粒子在Y轴上的运动：

![](https://pic1.zhimg.com/v2-abc2fbd21708e793a2a534973b89194c_r.jpg)

接下来就着手调整形态吧，首先现在变形太厉害了，需要添加一个xpConstraints勾选连接约束一下，并且让它的打破条件是无：

![](https://pic2.zhimg.com/v2-13edb6236818916b5b8355e81f0307e1_r.jpg)

**其次粒子之间现在是没有碰撞的，所以我们把粒子碰撞也勾上，现在你会发现一个问题。**

虽然粒子之间确实是有碰撞了，但是会出现粒子碰撞后互相穿过导致样条穿插的情况：

![](https://pic3.zhimg.com/v2-a06cb2d7936f8458047ed39350bb412e_r.jpg)

回到动力学标签里，我们首先可以适当的增大一点粒子的半径：

![](https://pic4.zhimg.com/v2-5bd729b38de05a74967e193c19ada203_r.jpg)

其次是康秋D调出工程设置，把XP动力学的子帧步幅适当提高一点，基本的形态就已经出来了：

![](https://pic1.zhimg.com/v2-b98a31264b422a17f84345e8c5b1c510_r.jpg)

进一步调整力场，我这里把强度改到了20，然后体素尺寸改到了15，这样会力场会更准确一些，然后速度改到了120：

![](https://pic1.zhimg.com/v2-899753535f6641ef956ff09becb2d1bc_r.jpg)

**感觉X轴向上的圆环数量不太够，所以我这里在克隆里又增加了一点X轴的数量。**

如我们前面所说，增加了以后果然又有部分的圆环之间穿插了：

![](https://pic1.zhimg.com/v2-df76c430609923399740da82e9bc58a0_r.jpg)

重新回到推散效果器里调整一下参数就可以了：

![](https://pic3.zhimg.com/v2-d7e61ac660b9b426c9dea50d5f8e6172_r.jpg)

我这里又把文本样条拖进了xpFlowField的衰减里，让它随着文本的半径会有一个衰减，半径稍微大一点：

![](https://pic3.zhimg.com/v2-71c4d13a85801a463e7f41faa17d8436_r.jpg)

**现在是所有的对象都同时开始受到力场的影响，我希望有点先后顺序，所以增加了一个径向域。**

在开始的角度上K了一下关键帧，迭代我改为了2，结束变换上给了点数值，然后让把文本放在径向域的上面，混合模式改为限制：

![](https://pic2.zhimg.com/v2-9617d9c00b27e7a16efdbc939c262ca1_r.jpg)

现在你可能会发现有一些圆环跨在了两个字母之间影响到了文本的辨识度，这里我们可以先回到克隆里把索引显示出来：

![](https://pic4.zhimg.com/v2-f0fee1d986d96d5f32cfbef9f043e707_r.jpg)

我们可以使用运动选集工具，先选中其中一个不需要的索引对象：

![](https://pic4.zhimg.com/v2-5826148dbcf3692bc2a040dbeb686e0f_r.jpg)

然后点击隐藏选择：

![](https://pic4.zhimg.com/v2-e62674caab5a19c9b8a526ccd0fee6ff_r.jpg)

接下来再按住谢福特键加选其他不需要的索引对象就可以了，这个大家多试试吧：

![](https://pic4.zhimg.com/v2-3867660a69b2e53d9dc0bd75ff67ff5f_r.jpg)

隐藏以后你可能会发现某些圆环它不动了：

![](https://pic1.zhimg.com/v2-1d9e12a58628ff62181dda0dd91887c0_r.jpg)

适当的增加衰减里文字的半径就可以了：

![](https://pic4.zhimg.com/v2-d12c933c50964b4725076df0a95a6753_r.jpg)

再适当的调整一下xpFlowField的强度和速度，基本就差不多了：

![](https://pic1.zhimg.com/v2-81acef4ace0531420bf5c523effcaa4c_r.jpg)

新建一个挤压检查一下吧，勾选层级，去掉封顶这些都不用说哈，然后你会发现对象会有抖动的情况：

![](https://pic1.zhimg.com/v2-260fd7384a4405d5348e648b731bb9f0_r.jpg)

回到动力学标签里，我们把影响psr关掉就好了：

![](https://pic1.zhimg.com/v2-96c7e727c0482a0225579632305fe9e4_r.jpg)

最后我在xpFlowField的速度上K了下关键帧，让它逐渐停下来，动画终于就差不多做好了：

![](https://pic3.zhimg.com/v2-81198212fa08449802f4c26db0fe5e5a_r.jpg)

把样条烘焙为ABC文件吧：

![](https://pic4.zhimg.com/v2-77ddd534baaaf4370964e06d23679ca7_r.jpg)

重新把挤压加上，添加细分曲面，布料曲面添加厚度，这个都不用说哈：

![](https://pic1.zhimg.com/v2-f6228ea3579537835e8788ec38ec0b78_r.jpg)

接下来是渲染的部分了，设置渲染尺寸，开GI，新建环境光，这些都不用说哈：

![](https://pic1.zhimg.com/v2-b18b4f56d0e2541e3de930fbde90412c_r.jpg)

新建个平面充当地面：

![](https://pic4.zhimg.com/v2-ea1270c60f971433e495ab7600cab81f_r.jpg)

先搞地面的材质吧，首先是一个深蓝色的反射材质：

![](https://pic2.zhimg.com/v2-85a7611c8d006eacc2ba7da504bcb471_r.jpg)

接下来在Ai里画一下网格的贴图，其实很简单，先用矩形网格工具，水平和垂直的数量设置为19，横纵的数量就是20\*20：

![](https://pic4.zhimg.com/v2-56aab5e42522eec0b2a90b9d7e2aa22b_r.jpg)

然后我需要把现有的20\*20再分成4份，所以再画一个水平垂直数量为79的网格，然后导出来，记得把描边颜色改为白色：

![](https://pic1.zhimg.com/v2-6d64bbc3565b0ea73b1d2b56040ea3f0_r.jpg)

**然后在RS里新建一个纹理节点载入贴图，再用一个颜色分离节点分离出它的透明通道。**

新建一个白色的材质节点，把透明通道连接到它的透明度颜色端口：

![](https://pic4.zhimg.com/v2-02af2bd73275033592255914064e9a57_r.jpg)

再用混合节点把他们混合上，混合的蒙板同样是分离出来的透明通道：

![](https://pic3.zhimg.com/v2-8af4f11d07a2124259ca7fe9ef046d4a_r.jpg)

如果你对贴图的尺寸不太满意也可以通过缩放来调整：

![](https://pic2.zhimg.com/v2-bfbb141798ecfadd10387a3c432b0575_r.jpg)

接下来是对象的材质，其实很简单，我希望的是多几种颜色，所以用一个渐变连接到漫射通道，但是你会发现不是我们想要的结果：

![](https://pic3.zhimg.com/v2-b51269860855741066550aec3dabbeda_r.jpg)

没关系，我们可以用一个用户数据节点连接给渐变节点，然后把数据类型改为几何体ID就好了：

![](https://pic1.zhimg.com/v2-d06c072622ed396b6461d3295bd89188_r.jpg)

我还添加了一个圆角节点连接到凹凸上：

![](https://pic3.zhimg.com/v2-aea67e9cc5284a81dfe8446da3880c16_r.jpg)

同时给对象添加了一个RS对象标签勾选上细分：

![](https://pic2.zhimg.com/v2-bc9286b3461d19e422490dadd64e7a75_r.jpg)

接下来视情况补了两盏灯，一个面光源，一个无限光，用无限光是为了能有相对清晰一点的投影：

![](https://pic4.zhimg.com/v2-31b74aa516ba0c11770efb11ca7ecc43_r.jpg)

摄像机K一个位移旋转关键帧，这个也不用说吧：

![](https://pic1.zhimg.com/v2-0ed565657c202fdbfe27fecf56056580_r.jpg)

渲染设置方面主采样512，其他本地采样是1024：

![](https://pic1.zhimg.com/v2-bd9cae11e75d21eedbde44eeb271d0ac_r.jpg)

我没想到的是这样也渲了10个小时，看来要抓紧学习渲染优化了：

![](https://pic1.zhimg.com/v2-01b0a673cd4819092560c3c9adb6d208_r.jpg)

最后后期合成看看效果吧：

![](undefined)

大概是这么个意思吧，下面是今天的视频版：

[![](https://pic3.zhimg.com/v2-e5f729caa0ad8259fa19f1f09003bcd6.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1417839326370000896)

好啦，今天的分享就到这里。

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究