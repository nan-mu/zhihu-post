![](https://pic1.zhimg.com/v2-3d1885b4f73e0caab2a046e3d9b93ff0_r.jpg)

这次更文又拖了很长时间，主要上次发文以后，后面几天都有点不务正业，沉迷上练琴了：

![](https://pic3.zhimg.com/v2-18dee6330364373e9840e83662e26eca_r.jpg)

搞得来群里的鹿友都在说我了，嘤嘤嘤：

![](https://pic1.zhimg.com/v2-ab55d20c333765fa6f995f1378235708_r.jpg)

**嘛~其实也就前面几天是完全没开软件的，后面我也开始合理安排时间研究文章了。**

今天要分享的内容其实是R21的一个新增功能，C4D官方也有视频教程：

![](https://pic1.zhimg.com/v2-62eef3bc19bf7f199572c02f50f88918_r.jpg)

B站上也有不少UP主做了该功能的视频教程，因为后面案例需要我也跟着学习研究了一下：

![](https://pic2.zhimg.com/v2-3e512528b6aebac8a97ee082e6af5d51_r.jpg)

但是在过程中会遇到一些问题，并且我发现这些问题并不是我一个人遇到，很多人都有这些疑问：

![](https://pic3.zhimg.com/v2-8f7e88d07a9449f769676ca998d6487e_r.jpg)

油管的官方频道上也是有遇到相同的问题：

![](https://pic4.zhimg.com/v2-799dd144eaf085ca70c392642fdcb2a7_r.jpg)

**可能是因为官方或者其他UP主都是以比较熟悉角色动画的用户为对象介绍这个新功能而已吧。**

但是如果遇到像我这样没有系统学习过角色动画或者又只是偶尔需要用一用这个功能的用户来说就不太友好了。

**下面一篇要分享的案例文章中就会涉及到一些角色动画的知识，全部写出来篇幅会很长。**

因此我先觉得把这个功能以及过程中可能会遇到的问题以及我自己的解决方案单独拎出来写一下会比较好。

然后这里特别说明一下，我没有系统的学习过角色动画，操作方面可能会有不够标准的地方，另外我使用的C4D最高版本是R21，新版本的C4D有没有新的解决方案我也不清楚。

**以上两点请各位鹿友谅解，好了，废话了那么多，进入今天的正题吧：C4D如何修改mixamo上下载的骨骼动画以及一些注意事项。**

![](https://pic2.zhimg.com/v2-29972d51c8ff091e19931910625efd1d_r.jpg)

例如我这里有一个在mixamo上随便下载的FBX格式的角色动画：

![](https://pic3.zhimg.com/v2-9cde0439f2c4a5934a95e24b10af45b2_r.jpg)

打开C4D，如果你把FBX文件直接拖进来，你会发现里面的参数是灰色的不能编辑：

![](https://pic4.zhimg.com/v2-3915ba045fb4393cbb5ba34b2c37ce5b_r.jpg)

这是由于mixamo下载的骨骼动画自带了场次的原因，解决方法有三种，第一种切换到场次面板，选中[http://mixamo.com](https://link.zhihu.com/?target=http%3A//mixamo.com)那个场次，然后点击转换场次到新文档：

![](https://pic4.zhimg.com/v2-3564b23f7a16456176e200e1d77f7f9b_r.jpg)

第二种比较简单暴力，选中所有对象康秋C复制，然后康秋N新建一个工程，再康秋V直接粘贴过来：

![](https://pic1.zhimg.com/v2-c04af8e823e335c63d4682aebb9787c4_r.jpg)

不过你如果需要在同一个场景中导入多个mixamo下载的角色动画的话我推荐第三种方法，首先是打开C4D，选择文件-合并项目：

![](https://pic2.zhimg.com/v2-8d93932563e48232ec1e9347db1de1bd_r.jpg)

导入之后它会弹出一个提示是否重新分配包括场次，这里我们点击否：

![](https://pic4.zhimg.com/v2-7e0dd23c876af393371533f8085231a7_r.jpg)

这样就可以解决参数不能编辑的问题：

![](https://pic1.zhimg.com/v2-c29ef105f14c1c09cb36af69a008c568_r.jpg)

默认情况下mixamo上下载的绑定好的骨骼动画是很难修改的，可以看到这里有65个关节都是做了关键帧动画的：

![](https://pic1.zhimg.com/v2-b2e17060973859215c138c38f2ea6998_r.jpg)

**这就需要借助R21的角色对象的新功能Mixamo Control Rig了。**

首先我们需要回到起始帧，为了避免干扰可以打开时间线窗口点击小动画图标把所有骨骼的动画先暂时关掉：

![](https://pic3.zhimg.com/v2-8506608d57611cc2aa5bb0e1aaae50a2_r.jpg)

然后选中模型后面的权重标签点击重置绑定姿势，模型就会回到T-pose的样子：

![](https://pic2.zhimg.com/v2-07644f01ed5cdb4418b724b367d2cab5_r.jpg)

这里我们先看看直接使用角色对象的新功能Mixamo Control Rig是否可行吧，选中角色，创建角色对象：

![](https://pic4.zhimg.com/v2-8d0bcf2a10b2f25ec0c3dedd421638d7_r.jpg)

**这里简单多说一句，便于从来没有用过角色对象的鹿友们理解。**

C4D角色对象其实就是一堆骨骼模版，正常情况我们使用角色对象的流程是，创建骨骼，调整骨骼，然后绑定骨骼，刷权重，最后再调节动画：

![](https://pic1.zhimg.com/v2-9f49b075c0cbdf5cf26d3916c85e7d94_r.jpg)

我们将模版类型切换为Mixamo Control Rig，然后点击root组件：

![](https://pic4.zhimg.com/v2-cc2d6b5df14c74474589b2c28de04ebf_r.jpg)

接下来就是创建骨骼，这个我觉得没什么好说的，就直接鼠标点击就可以了。

**在创建到手臂和腿部的时候，我们可以按住康秋键去用鼠标点，这样会自动创建两个手臂和两个腿部：**

![](https://pic4.zhimg.com/v2-a298cd362afa3ca91c90d94c3388b407_r.jpg)

**骨骼创建完毕以后可以看到它与我们mixamo上下载下来的骨骼以及模型都不匹配。**

我们如果要制作角色动画首先就需要让骨骼与模型匹配上才可以：

![](https://pic4.zhimg.com/v2-fdd677b48d72558c47c65e38f4f51a6f_r.jpg)

以前我们都是需要手动一点一点去调整的，但是官方介绍的R21新功能Mixamo Control Rig可以不用手动调整。

**只要直接点击调节，自己创建的骨骼就会自动吸附到mixamo下载的骨骼上。**

但是我们点击调节会发现根本就没有吸附上，还是老样子：

![](https://pic4.zhimg.com/v2-0ac353a6711758598ed85a2474e401e7_r.jpg)

**这里需要注意的是骨骼动画对关节的命名是很讲究的，工具识别需要固定的名称格式。**

这就需要检查一下关节的命名了，可以看到我这里从mixamo下载的关节名称mixamorig后面多了一个1：

![](https://pic1.zhimg.com/v2-8612aeb0a9f41c8853d2f9b345238fd4_r.jpg)

我们需要把这个1去掉才行，但是前面也提到了一共有60多个关键，一个一个去修改太麻烦了。

**没关系，其实C4D自带的批量重命名的工具的，点击工具，可以看到里面有个命名工具：**

![](https://pic3.zhimg.com/v2-4a4b3ad42920a39a7e0b605405bc9116_r.jpg)

我们先保证命名工具的模式是对象，在替换栏位把mixamorig1替换为mixamorig，然后用鼠标中间选中所有关节点击替换名称：

![](https://pic1.zhimg.com/v2-8456a01cca613ade4cc7323cf8926378_r.jpg)

然后切换到角色对象，重新点击一下建立然后点击调节相当于刷新一下，可以看到现在骨骼就都自动吸附上了：

![](https://pic4.zhimg.com/v2-853d3caf1d38a9dd798cbcb0d8abe3cb_r.jpg)

很方便吧，但需要注意的是这样创建的关节手指部分不是很完美，不过通常情况下影响不大：

![](https://pic2.zhimg.com/v2-17fee20383b918945d384257031364dd_r.jpg)

接下来还需要略微调整一个地方，正常人的膝盖是向前弯曲的。

因此我们需要膝盖的感觉略微往前移动一点，切换到侧视图。

**这里我们可以选中关节以后按住小键盘数字7键去移动，就可以只移动父级不移动子级：**

![](https://pic3.zhimg.com/v2-5a52d29a08876c86e274d6a04a82e02a_r.jpg)

关节调整完毕以后正常的流程我们需要去做绑定，但是使用Mixamo Control Rig就不需要这一步，我们跳过绑定直接去点击动画：

![](https://pic3.zhimg.com/v2-167474b845cb9e092ad506bd80453082_r.jpg)

然后选中root组件在控制器栏位点击重置全部对象，在权重标签栏位把模型拖进来，然后点击转移权重：

![](https://pic2.zhimg.com/v2-766de6c5894ddd52fa4511d6e0b2f499_r.jpg)

稍微移动控制器检查一下，可以看到骨骼与模型已经绑定上了：

![](https://pic2.zhimg.com/v2-bb86474211be07e57746e341d992cc49_r.jpg)

接下来在时间窗口里打开动画，人物就会和之前一样带有动画：

![](https://pic3.zhimg.com/v2-4730338ee2a1dc105b2081c4d6399f5a_r.jpg)

那么我们就可以利用角色对象的控制器来对动画进行调整，在显示栏位把对象管理器切换为控制器：

![](https://pic4.zhimg.com/v2-5bda5967c463c51073276259bbf41c37_r.jpg)

例如我这里想要跳舞的时候脖子动一下，就可以选中脖子的控制器，然后按S键快速定位到这个控制样条上K帧：

![](https://pic1.zhimg.com/v2-41b785d9af54b39249bfbfc155e105f8_r.jpg)

想要动其他部位也是同样的道理：

![](https://pic2.zhimg.com/v2-1d8de3e3ac0701536efcde769b3992f5_r.jpg)

基本上到这里官方以及网上相关对于Mixamo Control Rig的介绍就都完了。

**但是这里留下了一个大大的疑问，我们现在调整的其实是控制器的动画，控制器动画是没办法导出的。**

当我们把这个动画导出为fbx格式的时候你会发现动画没了：

![](https://pic2.zhimg.com/v2-2039541e86a3cce76c139d48dcf141dd_r.jpg)

那么需要怎么样才能导出这个动画呢，我研究了好久终于找到方法了，首先我们先把角色对象给C掉：

![](https://pic4.zhimg.com/v2-477e1decc03f63995a25965433094b93_r.jpg)

然后找到文件名为Bind\_Hierarchy的组，这个组下面的子集就是骨骼动画了：

![](https://pic4.zhimg.com/v2-fad444d8633b1e75fce4f7b754c7eecf_r.jpg)

把他们全部拖进时间线窗口里烘焙对象：

![](https://pic2.zhimg.com/v2-366e3e054f41b8d049e39f1914877db9_r.jpg)

把烘焙出来的骨骼右侧的约束标签全部删除：

![](https://pic2.zhimg.com/v2-1d0626268f0744f235db0939da97d279_r.jpg)

这个烘焙出来的骨骼就是我们调整过后的骨骼动画了，你可以直接将这个骨骼动画导出为FBX格式：

![](https://pic2.zhimg.com/v2-d194c0b5107e41106fc2e46a85ab0f3d_r.jpg)

不过需要注意的是现在的骨骼是没有和模型绑定上的，如果你直接把C掉的角色对象删除，模型就又会变回T-pose：

![](https://pic4.zhimg.com/v2-04129afa716eff4a6cc552ef98ed210f_r.jpg)

如果你想导出的是绑定好的骨骼动画的话我们可以这么操作一下，先选中模型的权重标签，然后打开权重管理器：

![](https://pic3.zhimg.com/v2-d58b8bf0ffa07f1e13920aa537b6de3e_r.jpg)

将权重先另存为一份作为备份：

![](https://pic1.zhimg.com/v2-b8ea3ce61c76231df680bbe44711a9a4_r.jpg)

回到第一帧，鼠标中间选中模型当前状态转对象，这样可以保证我们的模型和骨骼的初始状态是一样的：

![](https://pic1.zhimg.com/v2-e333e9a011f584fdcca0736197a12684_r.jpg)

将转对象后的模型权重标签删除，然后选中所有骨骼以及模型重新进行绑定：

![](https://pic1.zhimg.com/v2-e102ac923918f457d7dd82be745ebf14_r.jpg)

绑定之后的模型权重是有问题的，没关系，再次打开权重标签，把我们刚才备份的权重导入进来：

![](https://pic4.zhimg.com/v2-29c53bd93d3248fff6f8f0bc74341c5b_r.jpg)

除了手指部分有点问题，其他基本是正确的：

![](https://pic4.zhimg.com/v2-3775504aa8ed1c51de4cac4d5ccf621b_r.jpg)

观察一下手指其实就是之前自动创建骨骼的时候多了一些莫名其妙的手指：

![](https://pic3.zhimg.com/v2-a184306ffa9e615e8add2f9b61f16516_r.jpg)

没关系，直接把多余的关节删除，现在动画就没有问题了，这样你就可以导出一个带有骨骼动画的模型了：

![](https://pic2.zhimg.com/v2-9c99988a503ea126e5571b9d92b0d079_r.jpg)

**基本就是这样吧，没想到写出来还挺长的，下一篇案例教程等我整理整理就可以发出来了。**

我觉得这篇文章基本上能够解答鹿友们在使用Mixamo Control Rig功能上遇到的问题了。

下面是今天的视频版：

[![](https://pic1.zhimg.com/v2-48aa3a33615c361752c34c2bc97219ac.png)](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1480571254109683712)

好啦，今天的分享就到这里，想要原视频的鹿友后台**撩我**获取吧！

  
更多内容欢迎关注公众号：

公众号：野鹿志

老鹿微信：maluyelang6661

苦七微信：766057766

本文由“野鹿志”发布

转载前请联系马鹿野郎

私转必究