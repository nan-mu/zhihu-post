![](https://pic2.zhimg.com/v2-a4f122567f28dc53c72e6114453af5e9_r.jpg)

今天分享内容的视频版如下，想要源文件以及原视频的鹿友后台**撩我**获取：

[![](https://pic3.zhimg.com/v2-39a8d600dcdd1a6eb0be2d0e978084ca.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1555896435437936640)

**下面是图文版内容：**

**正文共：1808字 31图**

**预计阅读时间：5分钟**

上一篇文章分享了使用Realflow制作碰撞飞溅汇聚文字的效果，然后有不少朋友问使用XP粒子如何制作：

![](https://pic2.zhimg.com/v2-a515a333a558ef992569ad81080db85d_r.jpg)![](https://pic4.zhimg.com/v2-ec0774db9d1b12b5ea88a2903a9bdfb3_r.jpg)

于是我下来尝试了一下，说实话做出来没有Realflow效果好，感觉比较简单一点的流体还是使用Reaflow更容易出效果，很多默认参数效果就挺不错的。

**而使用XP的话制作的方法其实也不难，但是过程中可能会遇到很多问题，需要不停的去测试参数，甚至还会遇到同样的参数效果却不一样的情况，所以其实我这篇文章尝试的时间还是挺长的。**

最终还是只能说凑合吧，也不想再继续测试了，还是三个字，爱谁谁！

**好了，今天我们就用XP来复刻一下流体碰撞汇聚文字的效果吧！**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

打开C4D，新建文本

![](https://pic2.zhimg.com/v2-b34a71c6d99cdbf898ba7dc135a188c9_r.jpg)

同样文本的布线还是要均匀一点，所以适当的给一点分段，点差值方式为统一，选择常规网格，勾选优先四边面：

![](https://pic1.zhimg.com/v2-a2d56245cb0fc9fea6017a47a6a9dc18_r.jpg)

经过测试，好像文本的厚度会对流体碰撞的形态有所影响，所以我这里使用布料曲面增加了一点厚度，给了厚度以后，你可能会发现平滑着色有点问题：

![](https://pic1.zhimg.com/v2-1fea46c6cc3bbf07905edb0cc61b177c_r.jpg)

没关系，文本里给一点倒角就好了：

![](https://pic3.zhimg.com/v2-6bf27d7bb353e5cabe1473b0db40468e_r.jpg)

鼠标中间选中所有对象，然后连接对象：

![](https://pic1.zhimg.com/v2-baa5b6e99754ade967567fcbcb38691c_r.jpg)

再轴对齐一下，记得把文本的位置归零：

![](https://pic2.zhimg.com/v2-88efc19988a2eb1896e8a42f847b6375_r.jpg)

这里我们还是先设置一下渲染尺寸，用摄像机固定一下视角：

![](https://pic3.zhimg.com/v2-e412c91e20139bd46b4b019264a309f2_r.jpg)

新建一个圆柱体，调整它的位置和尺寸：

![](https://pic1.zhimg.com/v2-84b6ab68f30803fd39a341aab8b1875c_r.jpg)

C掉以后让它变成椭圆形：

![](https://pic3.zhimg.com/v2-9f1c3d12d13022a2041b2eed8212eab2_r.jpg)

新建粒子发射器，以圆柱体为对象进行发射，粒子发射器的方向记得要更改一下：

![](https://pic4.zhimg.com/v2-f72ba38711af0a624a241ac295d376bf_r.jpg)

**发射器类型为六边形，让它只发射一帧粒子，速度适当增加一点。**

当发射器类型为六边形时，粒子的半径控制着粒子的数量，我这里设置的半径为1.5：

![](https://pic2.zhimg.com/v2-6caf17ef282bc415dcb1f2a430de6785_r.jpg)

把粒子的颜色更改一下吧：

![](https://pic2.zhimg.com/v2-edf077e769ac268416bb1ec1cd95b7b1_r.jpg)

新建一个风力场，让粒子发射出来有一个加速的过程：

![](https://pic2.zhimg.com/v2-6137ac9e8fbcbdf906c12babd9c34efd_r.jpg)

给风力场添加一个球形域，让它只在球形范围类产生影响：

![](https://pic4.zhimg.com/v2-e26653e75795d5676740b873de651ad3_r.jpg)

**接下来添加一个覆盖场，这个就类似于RF的魔法场吧，功能上比魔法场复杂的多，但是我觉得单纯论我们要做的效果来看，没有魔法场好用。**

模式我们选择为力的模式，这样可以更好的配合其他力场使用，记得把文本拖进去：  

![](https://pic2.zhimg.com/v2-e3da7d3010724c6b8ec8da0da84ee6e1_r.jpg)

给文本添加XP碰撞标签，我这里把反弹的随机增加了一点：

![](https://pic1.zhimg.com/v2-7f3049fa1f6bc453c72cf967878ad69c_r.jpg)

把圆柱以及风力场复制一份出来放在左边，调整一下它的位置和方向：

![](https://pic2.zhimg.com/v2-999a9225c17724c6e456624e43e78661_r.jpg)

复制一份发射器出来，把复制出来的圆柱体拖进去进行替换，粒子的颜色也修改一下：

![](https://pic2.zhimg.com/v2-510ebdd1c16aa4d1e42b051424e1e879_r.jpg)

**现在的粒子没有流体的形态，需要添加流体动力学，这里说一下我的选择，XP粒子制作流体的动力学有三个：FluidFX、FluidPBD以及FluidFLIP。**

由于这个效果我们同样需要添加Sheeter来填充碰撞飞溅的孔洞，但我希望的是仅仅发生碰撞的时候才执行Sheeter这个动作。

**官方提到了使用FluidFX碰撞标签里的动作会失效，FluidFLIP我测试过也同样会失效，这是目前的功能限制，所以我这里选择的是FluidPBD：**

![](https://pic4.zhimg.com/v2-1517c0e1f2f582b961ff9068d7b0955b_r.jpg)

FluidPBD的详细参数介绍大家可以看看这篇文章：

![](https://pic1.zhimg.com/v2-fd3d32f8a084ca7c39dfe2343343c7f4_r.jpg)

我这里首先增加了粘度：

![](https://pic1.zhimg.com/v2-acead6bd6487b671d20d11e42060ad30_r.jpg)

涡度和吸引力我关掉了，然后提高了排斥力，这样粒子可以散布的更多：

![](https://pic3.zhimg.com/v2-0d72fefad15d8654d56f532b439ca3e6_r.jpg)

同时我增加了外部压力，这个相当于表面张力，防止粒子成块，同时为了防止模拟不稳定，对应的我提高了阻尼值，这个大家具体可以参看之前的FluidPBD详细参数的文章哈：

![](https://pic4.zhimg.com/v2-9415f6156332f4635b0c0055f590b7cf_r.jpg)

另外既然我们都用到FluidPBD了，就把混合打开吧，后面可以制作流体颜色混合的效果，不过现在大家会发现粒子在文本中间成一团了：

![](https://pic3.zhimg.com/v2-d6a0f4fe8a60d1e8bcfaf8a252fd9fae_r.jpg)

这个感觉就是覆盖修改器没有RF的魔法场好用的地方，不过我们可以在XP碰撞标签里把吸引力打开，这样文本的辨识度就好多了：

![](https://pic3.zhimg.com/v2-5861d931ad6d2e48e925159e5639943e_r.jpg)

勾选检查密度，这个我一般模拟流体的时候都会勾选，然后适当的增加一点最大最小子帧步幅，这样模拟会更加准确一点：

![](https://pic4.zhimg.com/v2-8cb9f187975277b15155acf95ba77c1f_r.jpg)

现在流体老半天停不下来，所以适当的给覆盖修改器的强度K一下关键帧：

![](https://pic4.zhimg.com/v2-1ebe2c17b5ceb3f2e6e563580693e36f_r.jpg)

我这里额外增加了一个动力学约束，勾选了粘度，适当的降低半径和刚度值，给流体额外的增加一点粘度：

![](https://pic4.zhimg.com/v2-49a7762fd45b3d09d87f5f4e161b0dbb_r.jpg)

我觉得现在的流体运动形态稍微有点呆板，所以碰撞标签里添加一个动作：

![](https://pic3.zhimg.com/v2-53bafd8a2567e784ecfc62586030b03e_r.jpg)

添加一个涡流修改器动作，然后添加涡流修改器：

![](https://pic1.zhimg.com/v2-4d57c0a2e50ce2963f1ba5307cfd1324_r.jpg)

**涡流修改器的模式同样改为力，然后把文本拖进去，让流体碰撞到文本以后可以随着文本转动。**

我觉得勾选反向旋转运动的走势才是对的，然后强度1就好，同样K一下关键帧，让它旋转一段时间以后停下来：

![](https://pic4.zhimg.com/v2-23aba766624189a64028b9c524362df3_r.jpg)

继续在碰撞标签里添加一个动作，这次我们添加Sheeter，参数大家多多尝试吧，老实说我一直觉得Sheeter这个修改器不是很好控制：

![](https://pic4.zhimg.com/v2-75bfdadcd5271281d89fd3012db0ea03_r.jpg)

最后一个问题是流体附着到文本表面之后不够平整，这点我尝试了好久都没有找到方法，这一点确实没有RF的魔法场好用。

最后我用了一个讨巧的方法，在FluidPBD的约束强度上K了下关键帧，让它最后变成0：

![](https://pic1.zhimg.com/v2-1e95ef2c9bd4fb70597d0420ea720794_r.jpg)

基本这样就可以缓存了：

![](https://pic4.zhimg.com/v2-e74c2dd3ced05a33e48d0a428bf0b89b_r.jpg)

接下来是把粒子网格化：

![](https://pic2.zhimg.com/v2-198634261268bb5c65453865b8915135_r.jpg)

标签里激活顶点颜色，这样我们渲染的时候才能渲染出颜色混合的效果，平滑可以给一点：

![](https://pic3.zhimg.com/v2-661d57143a90d62616438e95c08ff1fa_r.jpg)

过滤里可以添加一个滤镜：

![](https://pic3.zhimg.com/v2-7e0dd88a0bb6c67d4efdf9066b5f045a_r.jpg)

再添加一个平滑效果器，文本的表面终于没有凹凸了：

![](https://pic1.zhimg.com/v2-5be53c842a8e5a9dcd7489d0241cd660_r.jpg)

最后我这里把粒子换了个配色重新缓存，基本就可以进入渲染环节了：

![](https://pic3.zhimg.com/v2-0a522ee75ce57ee9836c6e16a89f157e_r.jpg)

渲染方面我没有太认真弄，主要前面试参数已经把我搞烦了，修改色彩空间这些不用多说哈：

![](https://pic2.zhimg.com/v2-0602cbcd9c05f0cdb2dd52fccf237511_r.jpg)

新建HDRI环境光：

![](https://pic4.zhimg.com/v2-7f52b37f2deb49173576e2ff38bdf2f7_r.jpg)

材质我这里首先用的是一个预设的金属材质：

![](https://pic2.zhimg.com/v2-32dab8a0f3637b3dd746aea079d5f631_r.jpg)

然后用一个顶点属性节点读取粒子顶点的颜色，把它连接到反射以及边缘着色的颜色上：

![](https://pic4.zhimg.com/v2-886841f2b95349e5fe9a3b8f261e63d7_r.jpg)

最后我打开了涂层：

![](https://pic3.zhimg.com/v2-1c762d541a1341b5ef35f2ada1c0258a_r.jpg)

视情况补几盏灯吧：

![](https://pic2.zhimg.com/v2-7c756181698b105f772cc6c7323e8bc5_r.jpg)

我的原意是打开变体运动模糊把运动矢量通道弄出来方便后期添加运动模糊，但是不知道为什么打开以后渲染出来的效果会出错：

![](https://pic3.zhimg.com/v2-cee9238ac80f187511b337423d5f91aa_r.jpg)

所以最后我就只有直接用后期添加运动模糊了，由于场景里也没有漫射，所以我GI也没有打开：

![](https://pic1.zhimg.com/v2-e12288dacfb48c2e6c598831bf31388c_r.jpg)

由于材质场景很简单，渲染时间只有20多分钟：

![](https://pic3.zhimg.com/v2-e02cd81c7e30ed331768e6e80b3e7426_r.jpg)

最后看看效果吧：

![](https://pic3.zhimg.com/v2-c0b0b0a42b7ff6e28420118997331332_r.jpg)

大概是这样吧，就这个效果而言还是用Realflow简单并且效果好。

更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎