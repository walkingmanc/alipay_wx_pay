# alipay_wx_pay
微信支付宝个人收款系统，个人免签收款解决方案。完全免费 资金即时直接到达本人账号， 支持支付宝、 微信，无需备案 无需签约，无需营业执照身份证。


### 运行环境： 
centos、nodejs、nginx。
### 简介：
  支持个人网站、安卓App、微信公众号、Pc软件的个人收款接入，资金实时直接到账您的支付宝/微信余额中，不经过中间平台，无手续费。支付宝无需上传收款二维码，支持H5唤醒支付，支持回调通知。真正的完全开放源代码，支持php/java/python等语言直接接入。

### 搭建步骤：

#### 1. 上传代码到服务器。

输入 rz ，选择下载好的zip 源码文件上传。

![图1](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/1.png)




#### 2. 解压。
unzip  alipay_wx_pay-master.zip

#### 3. 安装依赖包。
进入解压后的目录alipay_wx_pay-master，执行：npm  install 安装依赖包。

图2 
#### 4. 安装并配置mongo数据库
 
下载完安装包，并解压 tgz

> curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz    # 下载
> tar -zxvf mongodb-linux-x86_64-3.0.6.tgz                                   # 解压

> mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb    # 将解压包拷贝到指定目录                   

将MongoDB 的可执行文件bin 目录添加到 PATH 路径中：
> export PATH=/usr/local/mongodb/bin:$PATH

创建数据库目录
mkdir -p /data/db

创建数据库日志文件
touch /data/db/logs.log

启动mongodb数据库服务
mongod --dbpath=/data/db --logpath=/data/db/logs.log --logappend --port=6699 --fork

创建数据库连接用户

> $ mongo

> use admin

> db.createUser(
     {
       user:"maxsu",
       pwd:"pwd123",
       roles:[{role:"root",db:"admin"}]
     }
  )

> exit



视频教程地址：

