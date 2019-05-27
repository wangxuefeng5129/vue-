module.exports = {
  pages:{
      console:{
          //应用入口配置，相当于单页面应用main.js，必须项
          entry:'src/modules/console/console.js',

          //应用的模板，相当于单页面应用的public/index,可选项，省略时默认与模块名一致
          template:'public/console.html',

          //编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
          filename:'console.html',

          //标题，可选项，一般情况不适用，通常是在路由切换时设置title
          //需要注意的是使用title属性template中的title标签是<title><%= htmlWebpackPlugin.options.title %>
          title:'console page',

          //包含的模块,可选项
          chunks:['console']
      },
      //只有entry属性时，直接用字符串表示模块入口
      client:'src/modules/client/client.js'
  }
};