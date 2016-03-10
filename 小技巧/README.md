# 实用小技巧



### 退出vim
> 在编辑状态下，首先Esc退出输入状态，然后Shift+;，再输入q!或wq!（不保存改动，wq!是保存文件的写入修改）退出



### 创建git提交白名单

> 用git开发中会有一些不愿意提交的目录或者文件,在仓库目录下新建一个名为.gitignore的文件（因为是点开头，没有文件名，没办法直接在windows目录下直接创建，必须通过右键Git Bash，按照linux的方式来新建.gitignore文件）

	vim .gitignore
然后就直接写要忽略的文件或者文件夹，例如忽略到cache目录

	/cache

这样即可

