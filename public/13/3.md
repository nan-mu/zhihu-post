![](https://pic1.zhimg.com/v2-afb578ed3c6608c40daca0ddc910eda0_r.jpg)

接连在医院奋战了差不多一星期，基本上连软件都没有碰过，都没有时间研究童鞋们发来的效果。

来一个简单的吧，看看问题：

![](https://pic1.zhimg.com/v2-a7c2cce8ff388605b0bc07d9e99c6dac_r.jpg)

是苹果发布会的PPT么？熟练的童鞋应该知道这个用Ai的旋转工具结合混合模式是很容易做出来的。

野郎试了试，只要5分钟确实很简单。**但是从中也发现有混合模式中大家很容易忽视的一个知识点。**

所以今天我们就通过分享这个小案例来进一步巩固软件使用的一些基础知识吧。

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

首先打开Ai，新建画板尺寸随意：

![](https://pic3.zhimg.com/v2-1b6055bdb8465f902d91fe51c01bfbda_r.jpg)

画一个渐变色的矩形并且Ctrl+2锁定充当背景：

![](https://pic1.zhimg.com/v2-2c338f5085f5a08a3b08abd733e10290_r.jpg)

再画两个白色的圆，将圆选中以后，利用路径查找器-交集留下相交的部分：

![](https://pic4.zhimg.com/v2-faa64003c316eaba814baf8fa6ae2f97_r.jpg)

用缩放工具，在对象的垂直方向上改变一下形态：

![](https://pic3.zhimg.com/v2-52b2ea933884efaddcb18c476a307806_r.jpg)

选中对象，点击旋转工具，按住Alt键鼠标单击去改变旋转的中心点，然后输入一个合适的角度，点击复制：

![](https://pic2.zhimg.com/v2-31409c156a267580012f54021963596d_r.jpg)

Ctrl+D重复变换，这一步不用多说吧，做出来大概是这个样子：

![](https://pic1.zhimg.com/v2-d5331a82e010dd8a7af631ddd239aaf8_r.jpg)

重点来了，为了方便给大家解释，我这里把对像复制出来了一份，并把复制出来的对象Ctrl+G进行编组：

![](https://pic3.zhimg.com/v2-2bd2493d27ea6226a5f9ea93f4e60ec2_r.jpg)

这个时候我把左边没有编组的对象选中，将混合模式改为柔光：

![](https://pic2.zhimg.com/v2-916178dd582767c8ae842f3882dd6d41_r.jpg)

再把右边编组的对象混合模式改为柔光：

![](https://pic1.zhimg.com/v2-f669f385a80cbef6b683a60ee0507d8c_r.jpg)

**首先从效果上大家可以明显的看出不同，左边的对象每一个小的部分都有叠加的效果，而右边的对象是一个整体，没有叠加的效果。**

这是什么原因造成的呢？这个时候我们再把左边的对象也编组，可以看到组的混合模式是正常：

![](https://pic4.zhimg.com/v2-5bad92416e2afb727232f552f01f046b_r.jpg)

但当我们将组展开，会发现每一个对象的混合模式是柔光：

![](https://pic3.zhimg.com/v2-500072137e552765e5e4645407eb9de2_r.jpg)

再看左边的对象，组的混合模式是柔光：

![](https://pic3.zhimg.com/v2-0294daaa1dc3276bd08bbcd1e784cf86_r.jpg)

而展开以后每一个对象的混合模式却是正常：

![](https://pic1.zhimg.com/v2-d66ae329007b9769abe4291a87b030dc_r.jpg)

由此我们可以看出一个结论：**组的混合模式与图层的混合模式是独立存在的，更改组的混合模式不会改变组内图层的混合模式，这一点和Ps相同。**

为了进一步说明这一点，我们把组的混合模式改为正片叠底：

![](https://pic4.zhimg.com/v2-028395c950cdf98304009f10d359c333_r.jpg)

可以看到组下面的对象混合模式还是柔光：

![](https://pic1.zhimg.com/v2-3bfac1da2cf76a24a37f1d8a38c72bdc_r.jpg)

好了，把这个注意事项说清楚了，我们再继续今天的内容，把图形放到合适的位置：

![](https://pic4.zhimg.com/v2-8149eeca337eb39ccf531794c838c7bb_r.jpg)

选中对象等比缩放，比例大家看着办就好，然后点击复制：

![](https://pic4.zhimg.com/v2-9defc1422b1eed8380389570c20b3c2b_r.jpg)

Ctrl+D重复变换，这一步不用说了吧：

![](https://pic3.zhimg.com/v2-01b6b35590f0f5d3a736d615fcf5ef5e_r.jpg)

按住Shift图层面板中加选编组，将选中组的混合模式改为正片叠底，并将不透明度降低：

![](https://pic4.zhimg.com/v2-10aa8765c421e2d7b5836f2ce88ed90b_r.jpg)

你也可以通过图层面板单独选中某一个对象，将其隐藏，让画面看起来没那么呆板：

![](https://pic3.zhimg.com/v2-83db63d86ba95518940e129b577cfc42_r.jpg)

画一个和画板同样大小的矩形，全选对象，执行Ctrl+7创建剪切蒙板搞掉多余的部分：

![](https://pic1.zhimg.com/v2-7c8ceb28dc48724b9794041ff58710b4_r.jpg)

最后加点文字，Logo什么的把图片导出来看看吧：

![](https://pic4.zhimg.com/v2-ebf8e131b4b95281cb43dcebb6ad425b_r.jpg)

因为实际制作内容很简单，所以我尝试制作了一个短视频版，供有需要的童鞋观看：

[![](https://pic4.zhimg.com/80/v2-54adf731373265e58e0f49841896841f_b.jpg)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/966644382619897856)

**如果大家觉得效果好，后面我会考虑陆续把以前的部分内容做成视频版，今后的新内容也会考虑。**

好了，今天的分享就到这里，想要练习的童鞋后台回复**撩我**获取源文件吧！

本文由“野鹿志”发布

转载前请联系作者“马鹿野郎”

私转必究

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

Keep Curiosity Keep Learning

公众号ID：yeluzhi666

微信ID：maluyelang666