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
 
                    图1



#### 2. 解压。
unzip  alipay_wx_pay-master.zip

#### 3. 安装依赖包。
进入解压后的目录alipay_wx_pay-master，执行：npm  install 安装依赖包。
![图2](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/2.png)

                          图2 
#### 4. 安装并配置mongo数据库
 
下载完安装包，并解压 tgz

```
 curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz    # 下载
 tar -zxvf mongodb-linux-x86_64-3.0.6.tgz                                   # 解压

 mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb    # 将解压包拷贝到指定目录                   
```
将MongoDB 的可执行文件bin 目录添加到 PATH 路径中：
```
  export PATH=/usr/local/mongodb/bin:$PATH
```

创建数据库目录
```
mkdir -p /data/db
```

创建数据库日志文件
```
touch /data/db/logs.log
```
启动mongodb数据库服务
```
mongod --dbpath=/data/db --logpath=/data/db/logs.log --logappend --port=6699 --fork
```
创建数据库连接用户

```
 $ mongo

 use admin

 db.createUser(
    {
      user:"maxsu",
    pwd:"pwd123",
     roles:[{role:"root",db:"admin"}]
    }
  )

 exit

```

#### 5. 配置项目数据库连接地址
打开config/default.json  按照图3 所示修改数据库连接字符串。
![图3](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/3.png)

                           图3 

#### 6. 配置支付宝收款的userid

支付宝收款userid是用来区分使用哪个支付宝账户进行收款的唯一标识，需要在config/default.json 中进行配置。

如图4
![图4](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/4.png)

                          图4

不知道如何获取支付宝收款userid的可以联系我微信：walkingman_c。


#### 7. 启动应用
 npm start 
 ![图5](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/5.png)
 
                             图 5
 
 默认监听端口是3000。
 
 ###  验证测试
 
 在浏览器中输入：http://47.97.103.169/show/alipay/get_transfer_code/66.66/withremark/%E8%AF%95%E4%B8%80%E4%B8%8B
 
 请将地址中的ip地址替换成你自己的服务器ip地址。
 
 如图6，表示服务器搭建成功。
 
 ![图6](https://github.com/walkingmanc/MyPostImage/blob/master/alipay_wx_pay/6.png)

                          图6 
 
 
 
 
 
 
 

视频教程地址：


