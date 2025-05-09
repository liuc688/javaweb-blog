## 1. XML

<img src='../images/1681452257379.png' alt='' data-fancybox='gallery' style='aspect-ratio:643/318'/>

> XML 是 EXtensible Markup Language 的缩写，翻译过来就是可扩展标记语言。所以很明显，XML 和 HTML 一样都是标记语言，也就是说它们的基本语法都是标签。

- **可扩展** 三个字表面上的意思是 XML 允许自定义格式。但这不代表你可以随便写。

- 在 XML 基本语法规范的基础上，你使用的那些第三方应用程序、框架会通过 XML 约束的方式强制规定配置文件中可以写什么和怎么写

- XML 基本语法这个知识点的定位是：我们不需要从零开始，从头到尾的一行一行编写 XML 文档，而是在第三方应用程序、框架已提供的配置文件的基础上修改。要改成什么样取决于你的需求，而怎么改取决 XML 基本语法和具体的 XML 约束。

### 1.1. 常见配置文件类型

1.  properties 文件,例如 druid 连接池就是使用 properties 文件作为配置文件
2.  XML 文件,例如 Tomcat 就是使用 XML 文件作为配置文件
3.  YAML 文件,例如 SpringBoot 就是使用 YAML 作为配置文件
4.  json 文件,通常用来做文件传输，也可以用来做前端或者移动端的配置文件
5.  等等...

#### 1.1.1. properties 配置文件

> 示例

```.properties
atguigu.jdbc.url=jdbc:mysql://localhost:3306/atguigu
atguigu.jdbc.driver=com.mysql.cj.jdbc.Driver
atguigu.jdbc.username=root
atguigu.jdbc.password=root
```

> 语法规范

- 由键值对组成
- 键和值之间的符号是等号
- 每一行都必须顶格写，前面不能有空格之类的其他符号

#### 1.1.2. xml 配置文件

> 示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student>
        <name>张三</name>
        <age>18</age>
    </student>
    <student>
        <name>李四</name>
        <age>20</age>
    </student>
</students>
```

> XML 的基本语法

- XML 的基本语法和 HTML 的基本语法简直如出一辙。其实这不是偶然的，XML 基本语法+HTML 约束=HTML 语法。在逻辑上 HTML 确实是 XML 的子集。

* XML 文档声明 这部分基本上就是固定格式，要注意的是文档声明一定要从第一行第一列开始写

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

- 根标签
  - &#x20;根标签有且只能有一个。
- 标签关闭
  - 双标签：开始标签和结束标签必须成对出现。
  - 单标签：单标签在标签内关闭。
- 标签嵌套
  - 可以嵌套，但是不能交叉嵌套。
- 注释不能嵌套
- 标签名、属性名建议使用小写字母
- 属性
  - 属性必须有值
  - 属性值必须加引号，单双都行

> XML 的约束(稍微了解)

将来我们主要就是根据 XML 约束中的规定来编写 XML 配置文件，而且会在我们编写 XML 的时候根据约束来提示我们编写, 而 XML 约束主要包括 DTD 和 Schema 两种。

- DTD
- Schema

Schema 约束要求我们一个 XML 文档中，所有标签，所有属性都必须在约束中有明确的定义。

下面我们以 web.xml 的约束声明为例来做个说明：

```xml
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
```

### 1.2. DOM4J 进行 XML 解析

#### 1.2.1. DOM4J 的使用步骤

1.  导入 jar 包 dom4j.jar
2.  创建解析器对象(SAXReader)
3.  解析 xml 获得 Document 对象
4.  获取根节点 RootElement
5.  获取根节点下的子节点

#### 1.2.2. DOM4J 的 API 介绍

1.创建 SAXReader 对象

```java
SAXReader saxReader = new SAXReader();
```

&#x20;2. 解析 XML 获取 Document 对象: 需要传入要解析的 XML 文件的字节输入流

```java
Document document = reader.read(inputStream);
```

&#x20;3\. 获取文档的根标签

```java
Element rootElement = documen.getRootElement()
```

&#x20;4\. 获取标签的子标签

```java
//获取所有子标签
List<Element> sonElementList = rootElement.elements();
//获取指定标签名的子标签
List<Element> sonElementList = rootElement.elements("标签名");
```

&#x20;5\. 获取标签体内的文本

```java
String text = element.getText();
```

&#x20;6\. 获取标签的某个属性的值

```java
String value = element.attributeValue("属性名");
```

## 2. Tomcat10

### 2.1. WEB 服务器

> Web 服务器通常由硬件和软件共同构成。

- 硬件：电脑，提供服务供其它客户电脑访问
- 软件：电脑上安装的服务器软件，安装后能提供服务给网络中的其他计算机，将本地文件映射成一个虚拟的 url 地址供网络中的其他人访问。

<img src='../images/1681441674967.png' alt='' data-fancybox='gallery' style='aspect-ratio:1182/417'/>

> 常见的 JavaWeb 服务器：

- **Tomcat（Apache）**：当前应用最广的 JavaWeb 服务器
- Jetty:更轻量级、更灵活的 servlet 容器
- JBoss（Redhat 红帽）：支持 JavaEE，应用比较广 EJB 容器 –> SSH 轻量级的框架代替
- GlassFish（Orcale）：Oracle 开发 JavaWeb 服务器，应用不是很广
- Resin（Caucho）：支持 JavaEE，应用越来越广
- Weblogic（Orcale）：要钱的！支持 JavaEE，适合大型项目
- Websphere（IBM）：要钱的！支持 JavaEE，适合大型项目

### 2.2. Tomcat 服务器

#### 2.2.1. 简介

<img src='../images/1681452377469.png' alt='' data-fancybox='gallery' style='aspect-ratio:1120/476'/>

> Tomcat 是 Apache 软件基金会（Apache Software Foundation）的 Jakarta 项目中的一个核心项目，由 Apache、Sun 和其他一些公司及个人共同开发而成。最新的 Servlet 和 JSP 规范总是能在 Tomcat 中得到体现，因为 Tomcat 技术先进、性能稳定，而且免费，因而深受 Java 爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的 Web 应用服务器。

#### 2.2.2. 安装

> 版本

- 版本：企业用的比较广泛的是 8.0 和 9.0,目前比较新正式发布版本是 Tomcat10.0, Tomcat11 仍然处于测试阶段。
- JAVAEE 版本和 Servlet 版本号对应关系 [Jakarta EE Releases](https://jakarta.ee/release/)

| **Servlet** Version | EE Version       |
| :------------------ | ---------------- |
| 6.1                 | Jakarta EE ?     |
| 6.0                 | Jakarta EE 10    |
| 5.0                 | Jakarta EE 9/9.1 |
| 4.0                 | JAVA EE 8        |
| 3.1                 | JAVA EE 7        |
| 3.1                 | JAVA EE 7        |
| 3.0                 | JAVAEE 6         |

- Tomcat 版本和 Servlet 版本之间的对应关系

| **Servlet** Version | **Tomcat ** Version | **JDK** Version                         |
| :------------------ | :------------------ | :-------------------------------------- |
| 6.1                 | 11.0.x              | 17 and later                            |
| 6.0                 | 10.1.x              | 11 and later                            |
| 5.0                 | 10.0.x (superseded) | 8 and later                             |
| 4.0                 | 9.0.x               | 8 and later                             |
| 3.1                 | 8.5.x               | 7 and later                             |
| 3.1                 | 8.0.x (superseded)  | 7 and later                             |
| 3.0                 | 7.0.x (archived)    | 6 and later (7 and later for WebSocket) |

> 下载

- Tomcat 官方网站：[http://tomcat.apache.org/](http://tomcat.apache.org/ 'http://tomcat.apache.org/')
- 安装版：需要安装，一般不考虑使用。
- 解压版: 直接解压缩使用，我们使用的版本。

<img src='../images/1681442513261.png' alt='' data-fancybox='gallery' style='aspect-ratio:848/623'/>

> 安装

1. 正确安装 JDK 并配置 JAVA_HOME(以 JDK17 为例 https://injdk.cn中可以下载各种版本的JDK)

<img src='../images/1681442778503.png' alt='' data-fancybox='gallery' style='aspect-ratio:764/305'/>

2. 解压 tomcat 到非中文无空格目录

<img src='../images/1681442849940.png' alt='' data-fancybox='gallery' style='aspect-ratio:537/473'/>

1. 点击 bin/startup.bat 启动

<img src='../images/1681442946756.png' alt='' data-fancybox='gallery' style='aspect-ratio:534/433'/>

<img src='../images/1681442998407.png' alt='' data-fancybox='gallery' style='aspect-ratio:1204/640'/>

4. 打开浏览器输入 http://localhost:8080 访问测试

<img src='../images/1681443038911.png' alt='' data-fancybox='gallery' style='aspect-ratio:1708/584'/>

5. 直接关闭窗口或者运行 bin/shutdown.bat 关闭 tomcat

<img src='../images/1681442946756.png' alt='' data-fancybox='gallery' style='aspect-ratio:534/433'/>

6. 处理 dos 窗口日志中文乱码问题: 修改 conf/logging.properties,将所有的 UTF-8 修改为 GBK

<img src='../images/1681443124315.png' alt='' data-fancybox='gallery' style='aspect-ratio:532/397'/>

- 修改前

<img src='../images/1681443202115.png' alt='' data-fancybox='gallery' style='aspect-ratio:1132/828'/>

- 修改后

<img src='../images/1681443273573.png' alt='' data-fancybox='gallery' style='aspect-ratio:1128/729'/>

- 重启测试

<img src='../images/1681443314432.png' alt='' data-fancybox='gallery' style='aspect-ratio:1893/878'/>

### 2.3. Tomcat 目录及测试

> C:\Program4java\apache-tomcat-10.1.7 这个目录下直接包含 Tomcat 的 bin 目录，conf 目录等，我们称之为**Tomcat 的安装目录或根目录**。

- bin：该目录下存放的是二进制可执行文件，如果是安装版，那么这个目录下会有两个 exe 文件：tomcat10.exe、tomcat10w\.exe，前者是在控制台下启动 Tomcat，后者是弹出 GUI 窗口启动 Tomcat；如果是解压版，那么会有 startup.bat 和 shutdown.bat 文件，startup.bat 用来启动 Tomcat，但需要先配置 JAVA_HOME 环境变量才能启动，shutdawn.bat 用来停止 Tomcat；

- conf：这是一个非常非常重要的目录，这个目录下有四个最为重要的文件：

  - **server.xml：配置整个服务器信息。例如修改端口号。默认 HTTP 请求的端口号是：8080**

  - tomcat-users.xml：存储 tomcat 用户的文件，这里保存的是 tomcat 的用户名及密码，以及用户的角色信息。可以按着该文件中的注释信息添加 tomcat 用户，然后就可以在 Tomcat 主页中进入 Tomcat Manager 页面了；

    ```html
    <tomcat-users
      xmlns="http://tomcat.apache.org/xml"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
      version="1.0"
    >
      <role rolename="admin-gui" />
      <role rolename="admin-script" />
      <role rolename="manager-gui" />
      <role rolename="manager-script" />
      <role rolename="manager-jmx" />
      <role rolename="manager-status" />
      <user
        username="admin"
        password="admin"
        roles="admin-gui,admin-script,manager-gui,manager-script,manager-jmx,manager-status"
      />
    </tomcat-users>
    ```

    web.xml：部署描述符文件，这个文件中注册了很多 MIME 类型，即文档类型。这些 MIME 类型是客户端与服务器之间说明文档类型的，如用户请求一个 html 网页，那么服务器还会告诉客户端浏览器响应的文档是 text/html 类型的，这就是一个 MIME 类型。客户端浏览器通过这个 MIME 类型就知道如何处理它了。当然是在浏览器中显示这个 html 文件了。但如果服务器响应的是一个 exe 文件，那么浏览器就不可能显示它，而是应该弹出下载窗口才对。MIME 就是用来说明文档的内容是什么类型的！

  - context.xml：对所有应用的统一配置，通常我们不会去配置它。

- lib：Tomcat 的类库，里面是一大堆 jar 文件。如果需要添加 Tomcat 依赖的 jar 文件，可以把它放到这个目录中，当然也可以把应用依赖的 jar 文件放到这个目录中，这个目录中的 jar 所有项目都可以共享之，但这样你的应用放到其他 Tomcat 下时就不能再共享这个目录下的 jar 包了，所以建议只把 Tomcat 需要的 jar 包放到这个目录下；

- logs：这个目录中都是日志文件，记录了 Tomcat 启动和关闭的信息，如果启动 Tomcat 时有错误，那么异常也会记录在日志文件中。

- temp：存放 Tomcat 的临时文件，这个目录下的东西可以在停止 Tomcat 后删除！

- **webapps：存放 web 项目的目录，其中每个文件夹都是一个项目**；如果这个目录下已经存在了目录，那么都是 tomcat 自带的项目。其中 ROOT 是一个特殊的项目，在地址栏中访问：http://127.0.0.1:8080，没有给出项目目录时，对应的就是ROOT项目.http://localhost:8080/examples，进入示例项目。其中examples"就是项目名，即文件夹的名字。

- work：运行时生成的文件，最终运行的文件都在这里。通过 webapps 中的项目生成的！可以把这个目录下的内容删除，再次运行时会生再次生成 work 目录。当客户端用户访问一个 JSP 文件时，Tomcat 会通过 JSP 生成 Java 文件，然后再编译 Java 文件生成 class 文件，生成的 java 和 class 文件都会存放到这个目录下。

- LICENSE：许可证。

- NOTICE：说明文件。

### 2.4. WEB 项目的标准结构

> 一个标准的可以用于发布的 WEB 项目标准结构如下

<img src='../images/1681453620343.png' alt='' data-fancybox='gallery' style='aspect-ratio:425/424'/>

- app 本应用根目录
  - static 非必要目录,约定俗成的名字,一般在此处放静态资源 ( css js img)
  - WEB-INF 必要目录,必须叫 WEB-INF,受保护的资源目录,浏览器通过 url 不可以直接访问的目录
    - classes 必要目录,src 下源代码,配置文件,编译后会在该目录下,web 项目中如果没有源码,则该目录不会出现
    - lib 必要目录,项目依赖的 jar 编译后会出现在该目录下,web 项目要是没有依赖任何 jar,则该目录不会出现
    - web.xml 必要文件,web 项目的基本配置文件. 较新的版本中可以没有该文件,但是学习过程中还是需要该文件
  - index.html 非必要文件,index.html/index.htm/index.jsp 为默认的欢迎页

> url 的组成部分和项目中资源的对应关系

<img src='../images/1681456161723.png' alt='' data-fancybox='gallery' style='aspect-ratio:1176/426'/>

### 2.5. WEB 项目部署的方式

> 方式 1 直接将编译好的项目放在 webapps 目录下 (已经演示)

> 方式 2 将编译好的项目打成 war 包放在 webapps 目录下,tomcat 启动后会自动解压 war 包(其实和第一种一样)

> 方式 3 可以将项目放在非 webapps 的其他目录下,在 tomcat 中通过配置文件指向 app 的实际磁盘路径

- 在磁盘的自定义目录上准备一个 app

<img src='../images/1681456447284.png' alt='' data-fancybox='gallery' style='aspect-ratio:539/200'/>

- 在 tomcat 的 conf 下创建 Catalina/localhost 目录,并在该目录下准备一个 app.xml 文件

```xml
<!--
	path: 项目的访问路径,也是项目的上下文路径,就是在浏览器中,输入的项目名称
    docBase: 项目在磁盘中的实际路径
 -->
<Context path="/app" docBase="D:\mywebapps\app" />
```

- 启动 tomcat 访问测试即可

### 2.6. IDEA 中开发并部署运行 WEB 项目

#### 2.6.1. IDEA 关联本地 Tomcat

> 可以在创建项目前设置本地 tomcat,也可以在打开某个项目的状态下找到 settings

<img src="../images/1681457611053.png" alt="1681457611053" data-fancybox='gallery' style='aspect-ratio:783/593'/>

> 找到 Build,Execution,Eeployment 下的 Application Servers ,找到+号

<img src="../images/1681457711914.png" alt="" data-fancybox='gallery' style='aspect-ratio:614/845'/>

> 选择 Tomcat Server

<img src="../images/1681457800708.png" alt="" data-fancybox='gallery' style='aspect-ratio:238/171'/>

> 选择 tomcat 的安装目录

<img src="../images/1681457879937.png" alt="" data-fancybox='gallery' style='aspect-ratio:1080/642'/>

> 点击 ok

<img src="../images/1681457921094.png" alt="" data-fancybox='gallery' style='aspect-ratio:545/304'/>

> 关联完毕

<img src="../images/1681458031957.png" alt="" data-fancybox='gallery' style='aspect-ratio:904/463'/>

#### 2.6.2. IDEA 创建 web 工程

> 推荐先创建一个空项目,这样可以在一个空项目下同时存在多个 modules,不用后续来回切换之前的项目,当然也可以忽略此步直接创建 web 项目

<img src="../images/1681458194939.png" alt="" data-fancybox='gallery' style='aspect-ratio:982/592'/>

<img src="../images/1681458273381.png" alt="" data-fancybox='gallery' style='aspect-ratio:984/358'/>

> 检查项目的 SDK,语法版本,以及项目编译后的输出目录

<img src="../images/1681458343921.png" alt="" data-fancybox='gallery' style='aspect-ratio:349/589'/>

<img src="../images/1681458393871.png" alt="" data-fancybox='gallery' style='aspect-ratio:1083/325'/>

> 先创建一个普通的 JAVA 项目

<img src="../images/1681458485837.png" alt="" data-fancybox='gallery' style='aspect-ratio:962/163'/>

> 检查各项信息是否填写有误

<img src="../images/1681458599545.png" alt="" data-fancybox='gallery' style='aspect-ratio:983/764'/>

> 创建完毕后,为项目添加 Tomcat 依赖

<img src="../images/1681458857830.png" alt="" data-fancybox='gallery' style='aspect-ratio:1272/394'/>

<img src="../images/1681458897017.png" alt="" data-fancybox='gallery' style='aspect-ratio:657/604'/>

<img src="../images/1681458939400.png" alt="" data-fancybox='gallery' style='aspect-ratio:855/161'/>

> 选择 modules,添加 framework support

<img src="../images/1681458672258.png" alt="" data-fancybox='gallery' style='aspect-ratio:597/741'/>

> 选择 Web Application 注意 Version,勾选 Create web.xml

<img src="../images/1681459007273.png" alt="" data-fancybox='gallery' style='aspect-ratio:621/532'/>

> 删除 index.jsp ,替换为 index.html

<img src='../images/1681459080873.png' alt='' data-fancybox='gallery' style='aspect-ratio:240/175'/>

<img src="../images/1681459147133.png" alt="" data-fancybox='gallery' style='aspect-ratio:774/319'/>

> 处理配置文件

- 在工程下创建 resources 目录,专门用于存放配置文件(都放在 src 下也行,单独存放可以尽量避免文件集中存放造成的混乱)
- 标记目录为资源目录,不标记的话则该目录不参与编译

<img src='../images/1681461443278.png' alt='' data-fancybox='gallery' style='aspect-ratio:981/881'/>

- 标记完成后,显示效果如下

<img src='../images/1681461513406.png' alt='' data-fancybox='gallery' style='aspect-ratio:362/432'/>

> 处理依赖 jar 包问题

- 在 WEB-INF 下创建 lib 目录
- 必须在 WEB-INF 下,且目录名必须叫 lib!!!
- 复制 jar 文件进入 lib 目录

<img src='../images/1681461788411.png' alt='' data-fancybox='gallery' style='aspect-ratio:329/229'/>

- 将 lib 目录添加为当前项目的依赖,后续可以用 maven 统一解决

<img src="../images/1681461846178.png" alt="" data-fancybox='gallery' style='aspect-ratio:652/849'/>

<img src='../images/1681461881121.png' alt='' data-fancybox='gallery' style='aspect-ratio:509/228'/>

- 环境级别推荐选择 module 级别,降低对其他项目的影响,name 可以空着不写

<img src='../images/1681461923761.png' alt='' data-fancybox='gallery' style='aspect-ratio:509/226'/>

- 查看当前项目有那些环境依赖

<img src='../images/1681463867295.png' alt='' data-fancybox='gallery' style='aspect-ratio:348/221'/>

<img src="../images/1681462179671.png" alt="" data-fancybox='gallery' style='aspect-ratio:1285/513'/>

- 在此位置,可以通过-号解除依赖

<img src="../images/1681462247973.png" alt="" data-fancybox='gallery' style='aspect-ratio:716/302'/>

#### 2.6.3. IDEA 部署-运行 web 项目

> 检查 idea 是否识别 modules 为 web 项目并存在将项目构建成发布结构的配置

- 就是检查工程目录下,web 目录有没有特殊的识别标记

<img src='../images/1681462523901.png' alt='' data-fancybox='gallery' style='aspect-ratio:186/129'/>

- 以及 artifacts 下,有没有对应 \_war_exploded,如果没有,就点击+号添加

<img src="../images/1681462584524.png" alt="" data-fancybox='gallery' style='aspect-ratio:1279/400'/>

> 点击向下箭头,出现 Edit Configurations 选项

<img src="../images/1681462645070.png" alt="" data-fancybox='gallery' style='aspect-ratio:648/367'/>

> 出现运行配置界面

<img src="../images/1681462710108.png" alt="" data-fancybox='gallery' style='aspect-ratio:640/611'/>

> 点击+号,添加本地 tomcat 服务器

<img src="../images/1681462754191.png" alt="" data-fancybox='gallery' style='aspect-ratio:644/317'/>

> 因为 IDEA 只关联了一个 Tomcat,红色部分就只有一个 Tomcat 可选

<img src="../images/1681462798933.png" alt="" data-fancybox='gallery' style='aspect-ratio:1051/714'/>

> 选择 Deployment,通过+添加要部署到 Tomcat 中的 artifact

<img src="../images/1681463011546.png" alt="" data-fancybox='gallery' style='aspect-ratio:1052/502'/>

> applicationContext 中是默认的项目上下文路径,也就是 url 中需要输入的路径,这里可以自己定义,可以和工程名称不一样,也可以不写,但是要保留/,我们这里暂时就用默认的

<img src="../images/1681463049807.png" alt="" data-fancybox='gallery' style='aspect-ratio:756/663'/>

> 点击 apply 应用后,回到 Server 部分. After Launch 是配置启动成功后,是否默认自动打开浏览器并输入 URL 中的地址,HTTP port 是 Http 连接器目前占用的端口号

<img src="../images/1681463212587.png" alt="" data-fancybox='gallery' style='aspect-ratio:781/748'/>

> 点击 OK 后,启动项目,访问测试

- 绿色箭头是正常运行模式
- "小虫子"是 debug 运行模式

<img src="../images/1681463386274.png" alt="" data-fancybox='gallery' style='aspect-ratio:783/99'/>

- 点击后,查看日志状态是否有异常

<img src="../images/1681463361795.png" alt="" data-fancybox='gallery' style='aspect-ratio:1732/953'/>

- 浏览器自动打开并自动访问了 index.html 欢迎页

<img src="../images/1681520068936.png" alt="" data-fancybox='gallery' style='aspect-ratio:541/231'/>

> 工程结构和可以发布的项目结构之间的目录对应关系

<img src='../images/1681464081226.png' alt='' data-fancybox='gallery' style='aspect-ratio:1082/349'/>

> IDEA 部署并运行项目的原理

- idea 并没有直接进将编译好的项目放入 tomcat 的 webapps 中
- idea 根据关联的 tomcat,创建了一个 tomcat 副本,将项目部署到了这个副本中
- idea 的 tomcat 副本在 C:\用户\当前用户\AppData\Local\JetBrains\IntelliJIdea2022.2\tomcat\中
- idea 的 tomcat 副本并不是一个完整的 tomcat,副本里只是准备了和当前项目相关的配置文件而已
- idea 启动 tomcat 时,是让本地 tomcat 程序按照 tomcat 副本里的配置文件运行
- idea 的 tomcat 副本部署项目的模式是通过 conf/Catalina/localhost/\*.xml 配置文件的形式实现项目部署的

<img src='../images/1681521240438.png' alt='' data-fancybox='gallery' style='aspect-ratio:1236/675'/>

## 3. HTTP 协议

### 3.1. HTTP 简介

<img src="../images/1681522638617.png" alt="" data-fancybox='gallery' style='aspect-ratio:632/228'/>

<img src="../images/1681522600239.png" alt="" data-fancybox='gallery' style='aspect-ratio:733/166'/>

> **HTTP 超文本传输协议** (HTTP-Hyper Text transfer protocol)，是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于 1990 年提出，经过十几年的使用与发展，得到不断地完善和扩展。**它是一种详细规定了浏览器和万维网服务器之间互相通信的规则**，通过因特网传送万维网文档的数据传送协议。客户端与服务端通信时传输的内容我们称之为**报文**。**HTTP 协议就是规定报文的格式。**HTTP 就是一个通信规则，这个规则规定了客户端发送给服务器的报文格式，也规定了服务器发送给客户端的报文格式。实际我们要学习的就是这两种报文**。客户端发送给服务器的称为"请求报文**"，**服务器发送给客户端的称为"响应报文"**。

#### 3.1.1. 发展历程

> HTTP/0.9

- 蒂姆伯纳斯李是一位英国计算机科学家，也是万维网的发明者。他在 1989 年创建了单行 HTTP 协议。它只是返回一个网页。这个协议在 1991 年被命名为 HTTP/0.9。

> HTTP/1.0

- 1996 年，HTTP/1.0 发布。该规范是显著扩大，并且支持三种请求方法：GET，Head，和 POST。
- HTTP/1.0 相对于 HTTP/0.9 的改进如下：
  - 每个请求都附加了 HTTP 版本。
  - 在响应开始时发送状态代码。
  - 请求和响应都包含 HTTP 报文头。
  - 内容类型能够传输 HTML 文件以外的文档。
- 但是，HTTP/1.0 不是官方标准。

> HTTP/1.1

- HTTP 的第一个标准化版本 HTTP/1.1 ( RFC 2068 ) 于 1997 年初发布，支持七种请求方法：OPTIONS，GET，HEAD，POST，PUT，DELETE，和 TRACE

- HTTP/1.1 是 HTTP 1.0 的增强：

  - 虚拟主机允许从单个 IP 地址提供多个域。

  - 持久连接和流水线连接允许 Web 浏览器通过单个持久连接发送多个请求。

  - 缓存支持节省了带宽并使响应速度更快。

- HTTP/1.1 在接下来的 15 年左右将非常稳定。

- 在此期间，出现了 HTTPS（安全超文本传输协议）。它是使用 SSL/TLS 进行安全加密通信的 HTTP 的安全版本。

> HTTP/2

- 由 IETF 在 2015 年发布。HTTP/2 旨在提高 Web 性能，减少延迟，增加安全性，使 Web 应用更加快速、高效和可靠。

* 多路复用：HTTP/2 允许同时发送多个请求和响应，而不是像 HTTP/1.1 一样只能一个一个地处理。这样可以减少延迟，提高效率，提高网络吞吐量。
* 二进制传输：HTTP/2 使用二进制协议，与 HTTP/1.1 使用的文本协议不同。二进制协议可以更快地解析，更有效地传输数据，减少了传输过程中的开销和延迟。
* 头部压缩：HTTP/2 使用 HPACK 算法对 HTTP 头部进行压缩，减少了头部传输的数据量，从而减少了网络延迟。
* 服务器推送：HTTP/2 支持服务器推送，允许服务器在客户端请求之前推送资源，以提高性能。
* 改进的安全性：HTTP/2 默认使用 TLS（Transport Layer Security）加密传输数据，提高了安全性。
* 兼容 HTTP/1.1：HTTP/2 可以与 HTTP/1.1 共存，服务器可以同时支持 HTTP/1.1 和 HTTP/2。如果客户端不支持 HTTP/2，服务器可以回退到 HTTP/1.1。

> HTTP/3

- 于 2021 年 5 月 27 日发布 , HTTP/3 是一种新的、快速、可靠且安全的协议，适用于所有形式的设备。 HTTP/3 没有使用 TCP，而是使用谷歌在 2012 年开发的新协议 QUIC
- HTTP/3 是继 HTTP/1.1 和 HTTP/2 之后的第三次重大修订。

- HTTP/3 带来了革命性的变化，以提高 Web 性能和安全性。设置 HTTP/3 网站需要服务器和浏览器支持。

- 目前，谷歌云、Cloudflare 和 Fastly 支持 HTTP/3。Chrome、Firefox、Edge、Opera 和一些移动浏览器支持 HTTP/3。

#### 3.1.2. HTTP 协议的会话方式

> 浏览器与服务器之间的通信过程要经历四个步骤

<img src='../images/1557672342250_1H8nt17MNz.png' alt='' data-fancybox='gallery' style='aspect-ratio:362/117'/>

- 浏览器与 WEB 服务器的连接过程是短暂的，每次连接只处理一个请求和响应。对每一个页面的访问，浏览器与 WEB 服务器都要建立一次单独的连接。
- 浏览器到 WEB 服务器之间的所有通讯都是完全独立分开的请求和响应对。

#### 3.1.3. HTTP1.0 和 HTTP1.1 的区别

> 在 HTTP1.0 版本中，浏览器请求一个带有图片的网页，会由于下载图片而与服务器之间开启一个新的连接；但在 HTTP1.1 版本中，允许浏览器在拿到当前请求对应的全部资源后再断开连接，提高了效率。

<img src='../images/1557672415271_EgyN-GdbWY.png' alt='' data-fancybox='gallery' style='aspect-ratio:604/345'/>

#### 3.1.4. 在浏览器中通过 F12 工具抓取请求响应报文包

> 几乎所有的 PC 端浏览器都支持了 F12 开发者工具,只不过不同的浏览器工具显示的窗口有差异

<img src='../images/1681522138051.png' alt='' data-fancybox='gallery' style='aspect-ratio:900/980'/>

### 3.2. 请求和响应报文

#### 3.2.1. 报文的格式

> 主体上分为报文首部和报文主体,中间空行隔开

<img src='../images/1681522962846.png' alt='' data-fancybox='gallery' style='aspect-ratio:1081/300'/>

> 报文部首可以继续细分为 "行" 和 "头"

<img src='../images/1681522998417.png' alt='' data-fancybox='gallery' style='aspect-ratio:668/299'/>

#### 3.2.2. 请求报文

> 客户端发给服务端的报文

- 请求报文格式
  - 请求首行（**请求行**）； GET/POST 资源路径?参数 HTTP/1.1
  - 请求头信息（**请求头**）；
  - 空行；
  - 请求体；POST 请求才有请求体

> 浏览器 f12 网络下查看请求数据包

<img src='../images/1681524200024.png' alt='' data-fancybox='gallery' style='aspect-ratio:1212/430'/>

> form 表单发送 GET 请求特点

1、由于请求参数在请求首行中已经携带了，所以没有请求体，也没有请求空行
2、请求参数拼接在 url 地址中，地址栏可见\[url?name1=value1\&name2=value2]，不安全
3、由于参数在地址栏中携带，所以由大小限制\[地址栏数据大小一般限制为 4k]，只能携带纯文本
4、get 请求参数只能上传文本数据
5、没有请求体。所以封装和解析都快，效率高， 浏览器默认提交的请求都是 get 请求比如：地址栏输入回车,超链接,表单默认的提交方式

> 查看 GET 请求行,请求头,请求体

- 请求行组成部分
  - 请求方式 GET
  - 访问服务器的资源路径?参数 1=值 1&参数 2=值 2 ... ...
  - 协议及版本 HTTP/1.1

```http
GET /05_web_tomcat/login_success.html?username=admin&password=123213 HTTP/1.1
```

- 请求头

```http
-主机虚拟地址
Host: localhost:8080
-长连接
Connection: keep-alive
-请求协议的自动升级[http的请求，服务器却是https的，浏览器自动会将请求协议升级为https的]
Upgrade-Insecure-Requests: 1
- 用户系统信息
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36
- 浏览器支持的文件类型
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
- 当前页面的上一个页面的路径[当前页面通过哪个页面跳转过来的]：   可以通过此路径跳转回上一个页面， 广告计费，防止盗链
Referer: http://localhost:8080/05_web_tomcat/login.html
- 浏览器支持的压缩格式
Accept-Encoding: gzip, deflate, br
- 浏览器支持的语言
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
```

- 请求空行

- 请求体
  - GET 请求数据不放在请求体

> form 表单发送 post 请求特点

1、POST 请求有请求体，而 GET 请求没有请求体。
2、post 请求数据在请求体中携带，请求体数据大小没有限制，可以用来上传所有内容\[文件、文本]
3、只能使用 post 请求上传文件
4、post 请求报文多了和请求体相关的配置\[请求头]
5、地址栏参数不可见，相对安全
6、post 效率比 get 低

- POST 请求要求将 form 标签的 method 的属性设置为 post

<img src='../images/1681525012046.png' alt='' data-fancybox='gallery' style='aspect-ratio:658/122'/>

> 查看 post 的请求行 请求头 请求体

- 请求行组成部分
  - 请求方式 POST
  - 访问服务器的资源路径?参数 1=值 1&参数 2=值 2 ... ...
  - 协议及版本 HTTP/1.1

```http
POST /05_web_tomcat/login_success.html HTTP/1.1
```

- 请求头

```http
Host: localhost:8080
Connection: keep-alive
Content-Length: 31     -请求体内容的长度
Cache-Control: max-age=0  -无缓存
Origin: http://localhost:8080
Upgrade-Insecure-Requests: 1  -协议的自动升级
Content-Type: application/x-www-form-urlencoded   -请求体内容类型[服务器根据类型解析请求体参数]
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Referer: http://localhost:8080/05_web_tomcat/login.html
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
Cookie:JSESSIONID-
```

- 请求空行

- 请求体:浏览器提交给服务器的数据

```http
username=admin&password=1232131
```

#### 3.2.3. 响应报文

> 响应报文格式

- 响应首行（**响应行**）； 协议/版本 状态码 状态码描述
- 响应头信息（**响应头**）；
- 空行；
- 响应体；

<img src='../images/1681525347456.png' alt='' data-fancybox='gallery' style='aspect-ratio:438/275'/>

<img src='../images/1681525384347.png' alt='' data-fancybox='gallery' style='aspect-ratio:355/256'/>

- 响应行组成部分
  - 协议及版本 HTTP/1.1
  - 响应状态码 200
  - 状态描述 OK (缺省)

```http
HTTP/1.1 200 OK
说明：响应协议为HTTP1.1，响应状态码为200，表示请求成功；
```

- 响应头

```http
Server: Apache-Coyote/1.1   服务器的版本信息
Accept-Ranges: bytes
ETag: W/"157-1534126125811"
Last-Modified: Mon, 13 Aug 2018 02:08:45 GMT
Content-Type: text/html    响应体数据的类型[浏览器根据类型解析响应体数据]
Content-Length: 157   响应体内容的字节数
Date: Mon, 13 Aug 2018 02:47:57 GMT  响应的时间，这可能会有8小时的时区差
```

- 响应体

```html
<!--需要浏览器解析使用的内容[如果响应的是html页面，最终响应体内容会被浏览器显示到页面中]-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    恭喜你，登录成功了...
  </body>
</html>
```

> 响应状态码:响应码对浏览器来说很重要，它告诉浏览器响应的结果。比较有代表性的响应码如下：

- **200：** 请求成功，浏览器会把响应体内容（通常是 html）显示在浏览器中；
- **302：** 重定向，当响应码为 302 时，表示服务器要求浏览器重新再发一个请求，服务器会发送一个响应头 Location 指定新请求的 URL 地址；
- **304：** 使用了本地缓存
- **404：** 请求的资源没有找到，说明客户端错误的请求了不存在的资源；
- **405：** 请求的方式不允许
- **500：** 请求资源找到了，但服务器内部出现了错误；

> 更多的响应状态码

| 状态码 | 状态码英文描述                  | 中文含义                                                                                                                                                         |
| :----- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1\*\*  |                                 |                                                                                                                                                                  |
| 100    | Continue                        | 继续。客户端应继续其请求                                                                                                                                         |
| 101    | Switching Protocols             | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议                                                                 |
| 2\*\*  |                                 |                                                                                                                                                                  |
| 200    | OK                              | 请求成功。一般用于 GET 与 POST 请求                                                                                                                              |
| 201    | Created                         | 已创建。成功请求并创建了新的资源                                                                                                                                 |
| 202    | Accepted                        | 已接受。已经接受请求，但未处理完成                                                                                                                               |
| 203    | Non-Authoritative Information   | 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本                                                                                           |
| 204    | No Content                      | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档                                                                         |
| 205    | Reset Content                   | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域                                                               |
| 206    | Partial Content                 | 部分内容。服务器成功处理了部分 GET 请求                                                                                                                          |
| 3\*\*  |                                 |                                                                                                                                                                  |
| 300    | Multiple Choices                | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择                                                           |
| 301    | Moved Permanently               | 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替                              |
| 302    | Found                           | 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI                                                                                            |
| 303    | See Other                       | 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看                                                                                                             |
| 304    | Not Modified                    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy                       | 使用代理。所请求的资源必须通过代理访问                                                                                                                           |
| 306    | Unused                          | 已经被废弃的 HTTP 状态码                                                                                                                                         |
| 307    | Temporary Redirect              | 临时重定向。与 302 类似。使用 GET 请求重定向                                                                                                                     |
| 4\*\*  |                                 |                                                                                                                                                                  |
| 400    | Bad Request                     | 客户端请求的语法错误，服务器无法理解                                                                                                                             |
| 401    | Unauthorized                    | 请求要求用户的身份认证                                                                                                                                           |
| 402    | Payment Required                | 保留，将来使用                                                                                                                                                   |
| 403    | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求                                                                                                                   |
| 404    | Not Found                       | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面                                                     |
| 405    | Method Not Allowed              | 客户端请求中的方法被禁止                                                                                                                                         |
| 406    | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                                                                                                                       |
| 407    | Proxy Authentication Required   | 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权                                                                                                |
| 408    | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                                                                                                                         |
| 409    | Conflict                        | 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突                                                                                          |
| 410    | Gone                            | 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置                           |
| 411    | Length Required                 | 服务器无法处理客户端发送的不带 Content-Length 的请求信息                                                                                                         |
| 412    | Precondition Failed             | 客户端请求信息的先决条件错误                                                                                                                                     |
| 413    | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息  |
| 414    | Request-URI Too Large           | 请求的 URI 过长（URI 通常为网址），服务器无法处理                                                                                                                |
| 415    | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                                                                                                                                 |
| 416    | Requested range not satisfiable | 客户端请求的范围无效                                                                                                                                             |
| 417    | Expectation Failed              | 服务器无法满足 Expect 的请求头信息                                                                                                                               |
| 5\*\*  |                                 |                                                                                                                                                                  |
| 500    | Internal Server Error           | 服务器内部错误，无法完成请求                                                                                                                                     |
| 501    | Not Implemented                 | 服务器不支持请求的功能，无法完成请求                                                                                                                             |
| 502    | Bad Gateway                     | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应                                                                                   |
| 503    | Service Unavailable             | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中                                                            |
| 504    | Gateway Time-out                | 充当网关或代理的服务器，未及时从远端服务器获取请求                                                                                                               |
| 505    | HTTP Version not supported      | 服务器不支持请求的 HTTP 协议的版本，无法完成处理                                                                                                                 |
