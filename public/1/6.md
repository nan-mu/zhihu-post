![](https://pic4.zhimg.com/v2-3aa5b337035148ef89a48a848b9c42e3_r.jpg)

今天分享内容的视频版如下，想要源文件以及原视频的鹿友后台**撩我**获取：

**下面是图文版内容：**

**正文共： 2337字 48图**

**预计阅读时间： 6分钟**

继续临摹吧，还是来自INS大神**@BastardFilms**的一个作品：

![](https://pic3.zhimg.com/v2-1b27dad10a873f416e94de384cd8ee96_r.jpg)

原视频有30秒左右，我剪辑了一部分压缩成动图大家看看吧：

![](undefined)

这个效果好像有个叫专业名词叫做**reaction diffusion反应扩散**，我看评论里说一般是用胡迪尼做的，不过原作者是用的C4D：

![](https://pic2.zhimg.com/v2-acf8b58aa599dc70d9f1cb25004ca259_r.jpg)

防杠先说明这个效果不是我自己研究出来的哈，我是看了油管上有相关的教程，感兴趣的鹿友可以看看：

![](https://pic2.zhimg.com/v2-04fef3157511737723153c85e1077439_r.jpg)

**教程只是大概演示了方法，而我实际在尝试的时候还是遇到了不少问题的。**

而且制作过程中C4D老是闪退，不知道是不是我软件最近出了问题。

**最后大概还是做出来了，好了，废话不多说，一起来看看这种反应扩散的效果是怎么做出来的吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，帧速率设置为25，做10秒动画：

![](https://pic2.zhimg.com/v2-ea672dbbedd8dd6353f9589db245a335_r.jpg)

模型方面我是用的是法国猴子的Rock FM岩石预设，这个以前插件合集里给大家分享过：

![](https://pic3.zhimg.com/v2-4e07d66df3c1aca1ff9bcc5a190f0776_r.jpg)

载入预设以后直接鼠标中键全选对象然后鼠标右键连接对象加删除：

![](https://pic4.zhimg.com/v2-c2e4fdd78c6218e42c88704a3bf00d9b_r.jpg)

连接后的对象有20W个面，并且都是三角面：

![](https://pic2.zhimg.com/v2-47be7e9dbffb5fd954589a172b703ed1_r.jpg)

**我尝试过直接使用三角面的模型来制作，后面的顶点贴图好像不是很顺滑。**

所以我们这里用四边面工具先将三角面都转成四边面，面数就20W个：

![](https://pic1.zhimg.com/v2-c9006fddfd57ea7d8d61fa652b88fb78_r.jpg)

我希望的是反应扩散是沿着一个运动路径扩散出去的，所以用钢笔工具画一条路径吧。

**这里我们可以开启捕捉，并且把多边形捕捉打开，这样画出来的样条就会尽量贴合在模型表面：**

![](https://pic4.zhimg.com/v2-a4ea4b8f345a5108f780ab993b282e37_r.jpg)

画完样条以后稍微调整一下点吧，尽量让样条在模型的表面，有部分穿插没有关系，只要不穿插得太深就好：

![](https://pic1.zhimg.com/v2-49b90f94745581e3756c19e5acba4e48_r.jpg)

接下来切换到点级别全选点，设置顶点权重：

![](https://pic1.zhimg.com/v2-1eca3b69d5ffd0590a0e7619130b5abc_r.jpg)

顶点权重里点击使用域，可以先把原有的冻结域删掉，然后再新建一个球形域：

![](https://pic2.zhimg.com/v2-dd69ae533acff270f3784018eebb1535_r.jpg)

给球形域添加对齐曲线标签，通过K帧的方式让球形域沿着曲线运动：

![](https://pic1.zhimg.com/v2-21bf8a34ffabacd96d795ada1589ef04_r.jpg)

过程中你可能需要调整一下曲线的点，并且修改一下点差值方式，让球形域的运动更加平滑：

![](https://pic4.zhimg.com/v2-139be7b461467c4922701997a674137b_r.jpg)

接下来的几步就比较重要了，我们添加一个冻结域，混合模式改为最大。

**冻结域的模式改为平均，勾选自动更新，半径小一点，我们可以看到球形域经过的顶点权重就被模糊开了：**

![](https://pic1.zhimg.com/v2-be4fc25c85d77a370d32518b3f7a0320_r.jpg)

如果觉得不够清楚，可以把球形域的内部偏移改大，这样权重就更加明显了：

![](https://pic1.zhimg.com/v2-758c2ac73b7e8f81e4104b22c8491b94_r.jpg)

接着我们添加一个曲线域，增强对比，顶点权重就会变得硬朗并且扩散开来：

![](https://pic3.zhimg.com/v2-ad2efe52dd6f9c56b4ac018a66129446_r.jpg)

**在这个基础上，我们再次添加一个冻结域，让它的混合模式为减去。**

域的模式同样是平均，勾选自动更新，然后这次我们半径是前一个冻结域半径的2倍多一点。

**两个冻结域相减所得到的的效果其实就是反应扩散的图案，不过现在还看不太清楚：**

![](https://pic3.zhimg.com/v2-a57af11731e6dd0ae3fcd67f9c506cc6_r.jpg)

继续添加一个曲线域来调整对比度，混合模式为添加，其实就可以看到图案了，但是你可能会遇到顶点权重不停闪烁的情况：

![](https://pic1.zhimg.com/v2-ae62ba115527c0b227848d813d86bc00_r.jpg)

这是由于我们之前的曲线对比拉得太高导致的，适当的调整曲线以及层的不透明度，反应扩散的雏形就出来了：

![](https://pic4.zhimg.com/v2-9f349e445c62e0039788b2c31896f00f_r.jpg)

我们还可以在此基础上继续叠加曲线域，这个大家可以多多尝试，曲线调节的不同，形态也是会有区别的：

![](https://pic2.zhimg.com/v2-be24e2df00b8dbb3b1ce043e6dd5ab6d_r.jpg)

球形域从开始运动到结束的时候，最好半径我们也K一个关键帧，不然最后球形域所在的位置会一直闪烁：

![](https://pic1.zhimg.com/v2-83d25766e11d177bf93338732aecbb8c_r.jpg)

通过调整两个冻结域的重映射里的内部偏移可以控制扩散的速度，同样需要注意的是参数适当调整避免闪烁：

![](https://pic3.zhimg.com/v2-49bb5c5163f05f6d6f53784682cc7e9e_r.jpg)

最后可以在第一个冻结域基础上叠加一个随机域，给一点动画速率，这样运动的状态会更随机自然一点。

**基本上就是这样吧，每个人做出来的效果不一样，需要多多尝试：**

![](https://pic3.zhimg.com/v2-0237b20853fea795d36b95e7c785ae92_r.jpg)

接下来给岩石添加置换变形器，类型改为强度，高度适当的调整，然后在着色器里添加顶点贴图，把顶点贴图拖进去：

![](https://pic1.zhimg.com/v2-0c568abd5dffcd24feb023655cdda440_r.jpg)

再给岩石添加一个平滑变形器，然后把顶点贴图拖到衰减里面，让平滑只影响变形的部分：

![](https://pic4.zhimg.com/v2-3becd46c9345445c2154e5f46f25d953_r.jpg)

基本上变形动画就做好了，需要注意的是我们将原模型转成四边面之后，是没有UVW标签的，先随便新建一个材质球，鼠标右键生成UVW：

![](https://pic3.zhimg.com/v2-697b499a1f1f86bacd0d0c13976b8ca2_r.jpg)

另外经过我测试如果直接渲染，渲染出来的效果和预览的结果不一样，不知道是哪儿的操作问题，转为ABC文件就没有问题，因此我们需要转成ABC文件：

![](https://pic4.zhimg.com/v2-64371e0361ad5a094c917d9d00dbb477_r.jpg)

接下来就进入渲染部分了，设置渲染尺寸，新建摄像机这些常规操作就不说了哈：

![](https://pic1.zhimg.com/v2-e124e47d3751db09baa325a0410e12b0_r.jpg)

新建HDR环境光：

![](https://pic4.zhimg.com/v2-9cd48efaa28e2c71e9c1a0f7fca61fa3_r.jpg)

先打灯吧，我这里弄了三盏灯光，红蓝白色：

![](https://pic4.zhimg.com/v2-58ec81f997866600305282b24157b7cf_r.jpg)

再次新建一个HDR环境光，然后载入了一张星空的素材当作背景，我觉得还挺好看的，记得排除一下对象让它仅仅充当背景：

![](https://pic4.zhimg.com/v2-73104655c84ff230ce0cf79cd423f643_r.jpg)

岩石的材质我首先载入了三张贴图，用颜色层将他们进行叠加：

![](https://pic1.zhimg.com/v2-3238971efbfd025e4ad532e430317b68_r.jpg)

再用一个噪波节点连接渐变节点制作蒙板：

![](https://pic4.zhimg.com/v2-548424a82a380df936a5d60ff07c200b_r.jpg)

然后让它作为两个图层的蒙板：

![](https://pic1.zhimg.com/v2-cc5ef6fcc26573c7af6af3765178da14_r.jpg)

接着再用绝对数节点连接到贴图的尺寸上调整一下：

![](https://pic4.zhimg.com/v2-019bfa406beaec82ce71a12e743183f7_r.jpg)

然后把他们连接到漫射端口，同时再用一个蒙板连接到粗糙度上：

![](https://pic1.zhimg.com/v2-404ed4a689b26e9face748fd700e6298_r.jpg)

接下来再导入两张法线贴图将它们进行混合连接到凹凸端口上：

![](https://pic3.zhimg.com/v2-872b1263432b655de20d78ef7f6bc52e_r.jpg)

把直接叠加的颜色层同时当作置换贴图连接置换节点，不要忘记给对象添加RS对象标签开启细分和置换：

![](https://pic2.zhimg.com/v2-a3b3d78b9ffe7089ff878561949f73c9_r.jpg)

接下来就是做变形部分的材质，其实很简单，用顶点属性节点读取顶点贴图：

![](https://pic2.zhimg.com/v2-63271dafe402e6b197eda5d847385f6d_r.jpg)

用一个渐变节点对颜色进行重新映射：

![](https://pic1.zhimg.com/v2-e108d0a8615ff203378547bbc5605a58_r.jpg)

然后把它分别连接到漫射、传输以及发光的颜色节点上，也就是一个sss材质：

![](https://pic4.zhimg.com/v2-dd1a1541e381f59950b0a7244c5e5fbb_r.jpg)

最后用一个混合材质将它们混合，混合的蒙板同样是顶点贴图：

![](https://pic1.zhimg.com/v2-329007dfadfc4fe270573a3b74c98ddc_r.jpg)

基本差不多就这样吧，我最后给岩石添加了一个空对象作为父级，做了一个旋转动画：

![](https://pic1.zhimg.com/v2-e9a407c9fa3a2264e2a5fa0ab6e18b68_r.jpg)

渲染设置没什么说的，我做了分层，后期用来合成景深以及运动模糊：

![](https://pic3.zhimg.com/v2-680f165085ce6ef842e8dddf47567af6_r.jpg)

渲染总时长差不多7个半小时：

![](https://pic3.zhimg.com/v2-7da4a49eea1ed378a3c79c8b8f972abe_r.jpg)

最后后期调整一下看看效果吧：

[![](https://pica.zhimg.com/v2-9f2fffa73504d8bf594180fb8edb056d.jpg?source=382ee89a)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1534301346924220416)

大概是这个意思吧，以上就是今天要分享的内容，我们下次见！

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎