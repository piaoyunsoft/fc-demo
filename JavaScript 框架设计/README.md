# 《JavaScript 框架设计》


**库与框架：**

- 库是解决某个问题而拼凑出来的一大堆函数与类的集合。
- 框架是一个半成品的应用。（直接给出一个骨架）

###JavaScript 框架分类
1. 以命名空间为导向的类库或框架。（YUI与EXT）
2. 以类工厂为导航的框架。（Prototype）
3. 以`jQuery`为代表的以选择器为导向的框架，整个框架或库主体是一个特殊类数组对象，方便集化操作——因为选择器通常是一下子选到N个元素节点，于是便一并处理了。
4. 以加载器串联起来的框架，它们都有复数个JavaScript文件，每个JavaScript文件都以固定规则编写。**ADM**（Dojo、YUI、kissy等）
5. 具有明确分层构架的 MV* 框架。**MVC、MVVM**（backbonejs、spinejs、ember、angular等）
