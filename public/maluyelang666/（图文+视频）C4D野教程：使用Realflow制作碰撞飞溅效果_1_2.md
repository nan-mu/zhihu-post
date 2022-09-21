![](https://pic1.zhimg.com/v2-fe14347d2e577d5b8aa617d295d8f634_r.jpg)

今天分享内容的视频版如下，想要源文件以及原视频的鹿友后台**撩我**获取：

[![](https://picx.zhimg.com/v2-0d8833dca4cdf2027c9edf396fed6163.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1549878244048003073)

**下面是图文版内容：**

**正文共：2381字 51图**

**预计阅读时间：6分钟**

这一次更新拖得有点久啊，这次临摹的是INS大神

**@BastardFilms**比较早的一个案例：

![](https://pic3.zhimg.com/v2-8ccb5cfa953192def9ec13539ef8c6ee_r.jpg)

我同样把它压缩成动图大家看看哈：

![](undefined)

**这是一个很简单流体碰撞飞溅的效果，作者是用realflow做的，由于我已经有很长时间没用过realflow了，所以也打算拿这个简单的案例试试。**

但是实际在尝试过程中还是遇到了很多问题，无论是参数的测试以及有些貌似bug的问题。

**这也是发文拖了很长时间的原因，最后做出来的效果说实话也不是特别满意，摆烂了，不弄了，爱谁谁！**

由于是个比较简单的效果，所以文章中我会尽量详细一点，把我尝试过程中遇到的问题都写出来。

**来吧，今天我们就来制作这个流体碰撞飞溅的效果吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，导入事先准备好的骷髅头模型：

![](https://pic1.zhimg.com/v2-a77e0ccf4daade722296f9de9a410854_r.jpg)

新建RF的填充发射器：

![](https://pic4.zhimg.com/v2-ebac75210beddd2eef53eeea931d0787_r.jpg)

把模型拖进发射器里点击播放，你会发现粒子的数量非常非常的少：

![](https://pic1.zhimg.com/v2-1eea5086e6dd766c211bf6d851beec20_r.jpg)

这是我们模型很小的原因，你可以选择放大模型，也可以像我这样在流体里提高分辨率：

![](https://pic1.zhimg.com/v2-c8039dbc2bef09945df476bae1c2c238_r.jpg)

接下来新建一个球体，分段可以稍微高一些：

![](https://pic1.zhimg.com/v2-380b7946ceb45ab633e41170c013d98c_r.jpg)

克隆小球，用线性克隆就可以了：

![](https://pic4.zhimg.com/v2-ff254cc0b9ac300c206a107d1d4871f3_r.jpg)

再给克隆对象添加随机效果器，随机一下小球的位置：

![](https://pic4.zhimg.com/v2-f65f26962f02b40190cdfcba72165b67_r.jpg)

左侧也复制出来一份克隆对象，修改一下随机效果器的参数：

![](https://pic3.zhimg.com/v2-6b158b3853fd519e26c0899f415e0bba_r.jpg)

这里我觉得可以先设置一下渲染尺寸，新建摄像机固定一下视角：

![](https://pic3.zhimg.com/v2-e829eea121d9d6fe912f121b6f6375da_r.jpg)

给克隆对象K一下位移关键帧，这个不用说吧：

![](https://pic3.zhimg.com/v2-62cf4bc578f07d82e58c94302cf4aeba_r.jpg)

给两个克隆对象添加碰撞标签：

![](https://pic4.zhimg.com/v2-8dc3273300a2243a6bbaf38ea4f065bb_r.jpg)

我这里把反弹关掉了，然后提高了一点粗糙度，让碰撞表面更加随机：

![](https://pic3.zhimg.com/v2-dfbf0eb37649f1c222eb7f775a76b946_r.jpg)

现在的碰撞肯定是和原图不一样的，飞溅的粒子太松散了没有形成片状。

**所以新建一个Sheeter修改器，这个修改器XP粒子也有，就是用来检测粒子之间的孔洞并且填充它们。**

官方说明是不会增加粒子的分辨率，但经我测试粒子数量还是会增加的：

![](https://pic3.zhimg.com/v2-e394902ea1bfe8438d03bba9334109ae_r.jpg)

默认情况下修改器会填充所有小于2的孔洞，如果你觉得粒子数量太多了，可以适当减少这个最小孔洞尺寸：

![](https://pic3.zhimg.com/v2-c2cc5d778a807d28ffd79e6f068c2816_r.jpg)

**下面的对齐速度阈值XP粒子也有相同的参数，用于控制产生填孔粒子的角度，虽然官网有一个示意图，但总感觉有点晦涩。**

我个人的理解是这个数值越接近90度，孔洞填充以后更容易形成片状的感觉：

![](https://pic4.zhimg.com/v2-abd5ff2fee04fd98fbc956617baeef63_r.jpg)

这里对齐速度的阈值我觉得保持默认就好，下面有一个相对速度，控制着只在最大最小速度范围以内的粒子才会被填充孔洞：

![](https://pic4.zhimg.com/v2-f72db3b3aadb2171ae5a6be5320cf67f_r.jpg)

剩下一个使用年龄控制的是当粒子的生命大于该设定的数值就不会填充孔洞，很好理解。

**其他的参数由于本篇文章没有用到，这里就不做过多解释了，大家可以参看官方手册，我在制作过程中都是全程打开手册查阅的：**

![](https://pic2.zhimg.com/v2-a95e0acc9d45d6489fd087b0e8951cd5_r.jpg)

这里有一个纠结了我很久的问题，我愿意是想要在视图以外增加一个杀死场，杀掉过多不需要的粒子节约资源。

**但是当我添加了体积杀死场以后，发现Sheeter修改器会失效，官方也没有查到任何说明，我感觉可能是个bug：**

![](https://pic3.zhimg.com/v2-617639fc545a11b38653ae9f8cc1b7ba_r.jpg)

我这里添加了一个隔离杀死场杀死多余孤立的粒子，通常情况下这个杀死场的参数设置的都比较低比如0.01，但是我们这个场景设置为0.01你会发现Sheeter同样会失效：

![](https://pic3.zhimg.com/v2-659c7646c6a7c2758295ee2c1c8ff91e_r.jpg)

这里我觉得这个数值保持默认就好：

![](https://pic3.zhimg.com/v2-6963c41021f77fe5c11dd5d8079798b2_r.jpg)

我觉得现在的粒子还是有点多，所以又增加了一个速度杀死场，让超过目标速度的粒子都被杀死：

![](https://pic2.zhimg.com/v2-3d147f7b2714d055ec07651cb1aa0361_r.jpg)

然后我又增加了一个表面张力修改器，适当的增加一点，让流体有水流拉丝的感觉：

![](https://pic4.zhimg.com/v2-a55470b7370136b6a4e49d9ac3f90f9f_r.jpg)

**通常修改了表面张力以后，可以在流体的设置里适当的调整一下抗拉强度，它会增加流体收缩的趋势并且让流体的边界变厚。**

其实流体设置里也有表面张力的参数，我个人觉得不是很好控制，并且这里的表面张力通常要结合着场景里的最大最小子帧步幅以及迭代次数使用，看个人吧：

![](https://pic3.zhimg.com/v2-79e8c076aa1a90973a4058e00084346a_r.jpg)

另外动画刚开始粒子的形态会有些变化，因此我们这里需要找一个稳定点的状态设置为初始状态，这里也有一个坑，例如我选择第37帧设置为初始状态：

![](https://pic2.zhimg.com/v2-a2c750c4ed500c0655cbc4a32bfa6f25_r.jpg)

然后再次从头播放，你会发现好像Sheeter又失效了：

![](https://pic2.zhimg.com/v2-65ec1d48d204ac2ca37b98ea8c1d0afd_r.jpg)

我们这里设置初始状态的时候，需要先将修改器全部都关掉，然后再设置初始状态：

![](https://pic2.zhimg.com/v2-9a33c65fda113f0f3e2cffe8c4c20821_r.jpg)

再把它们打开从头播放，这样修改器就生效了：

![](https://pic3.zhimg.com/v2-debdb5d4684b9718765c84c10cd0d102_r.jpg)

基本上这样就可以将粒子缓存了，记住RF的缓存文件通常都会比较大，所以要选择一个空间足够的缓存位置，缓存时间其实还不长，5分钟左右：

![](https://pic3.zhimg.com/v2-cb00aac253fad70c1f1eee2c94dae5d6_r.jpg)

网格的化大家可以多试试吧，我这里就主要是通过调整分辨率，半径以及平滑来测试网格的效果：

![](https://pic2.zhimg.com/v2-36716ccb0ff1473ebdddc4011892f881_r.jpg)

网格的体积就很大了，20多个G：

![](https://pic3.zhimg.com/v2-e68ce436570280d6c0271fde357f4f6e_r.jpg)

我觉得现在的流体有点厚，所以可以给它添加一个置换变形器，着色器里添加颜色：

![](https://pic1.zhimg.com/v2-c90d580f5614b2538db53b6cd77f7658_r.jpg)

然后通过控制高度可以让网格往里收缩一点：

![](https://pic4.zhimg.com/v2-9e098addb7290707b1da8e3144f6a7ab_r.jpg)

在此基础上可以在添加一个平滑效果器，基本上就可以进入渲染环节了：

![](https://pic2.zhimg.com/v2-2668585a21caa3688760055dbb664b39_r.jpg)

打开RS，设置色彩空间这个不用多说了哈：

![](https://pic1.zhimg.com/v2-304890db92caedcad9075bbab6c686d4_r.jpg)

新建一个平面当作背景放在后面：

![](https://pic4.zhimg.com/v2-2f9cbf6eea99b0b3b524bef90a2647d3_r.jpg)

新建环境光：

![](https://pic4.zhimg.com/v2-ecfd29090e410871ee2364bb370de49b_r.jpg)

背景是一个普通的漫射材质：

![](https://pic3.zhimg.com/v2-2f6e0f9ab9811b70f66b881a9ac13f02_r.jpg)

主体的材质是一个高反射材质：

![](https://pic2.zhimg.com/v2-4b2d398dd42bd3ca405a11c03ad72d91_r.jpg)

先用一个C4D噪波节点做蒙板：

![](https://pic1.zhimg.com/v2-6e270e26c87a3f57140f844f26739478_r.jpg)

然后把它连接到凹凸上：

![](https://pic3.zhimg.com/v2-c76b67477bedccdfe1e362df91b57a76_r.jpg)

再用一个RS噪波节点连接到渐变节点上做蒙板：

![](https://pic3.zhimg.com/v2-c37e8c6bd5edd7c6d2879bb4f6f04cf2_r.jpg)

把它连接到反射的粗糙度上：

![](https://pic4.zhimg.com/v2-71e754833637d394f26eba698b019b5b_r.jpg)

最后我打开了涂层，并且把RS噪波节点也连接给了涂层的粗糙度上：

![](https://pic2.zhimg.com/v2-9ee631b1e23ad0042c3be84b6d0cb57d_r.jpg)

小球的材质是RS预设的金属材质，没有变动：

![](https://pic1.zhimg.com/v2-2e1ab765ee39c37bdb5f25a7751c7488_r.jpg)

再补一盏灯吧，适当的降低高光：

![](https://pic3.zhimg.com/v2-d71802d3b1158f0d824ac154cfa6f416_r.jpg)

我这里给对象都添加了RS对象标签打开了运动模糊：

![](https://pic4.zhimg.com/v2-e5beac2169002bd019d3494cf8944a0f_r.jpg)

由于流体属于变体运动，渲染设置里记得把变体运动模糊也打开：

![](https://pic1.zhimg.com/v2-2aba3e220d5171ca80d9e276158451a0_r.jpg)

这个渲染的时间倒是挺快的，4小时13分钟：

![](https://pic3.zhimg.com/v2-a063d192143105feb514748863c032f6_r.jpg)

**最后补充一下，渲染出来的流体网格会有很厉害的抖动，我觉得这个一方面是粒子分开导致网格拉扯导致的，另外一方面是杀死场杀死了部分粒子的原因。**

对此我暂时没有其他好的解决方案，因此我后期AE里用了一款叫DEFlicker High speed的插件降低闪烁，这个插件大家网上搜搜哈：

![](https://pic2.zhimg.com/v2-1d15b54c427b49f0a35771f4333efa89_r.jpg)

最后渲染出图看看效果吧：

[![](https://pic1.zhimg.com/v2-7a60904f6fa5443f3ac4ffc6fc0b9752.jpg?source=382ee89a)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1549878667593146368)

以上就是今天要分享的内容，我们下次见！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎