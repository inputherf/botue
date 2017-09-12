require.config({
  //  baseUrl设置的原则，就是大部分资源共享的目录！
  baseUrl:"/views/assets",
    paths:{
        //如果要引入的模块是一个具名模块，那么这个别名一定要和具名模块的名称保持一致。
        jquery:"./jquery/jquery",
        cookie:"./jquery-cookie/jquery.cookie",
        template:"./areTemplate/template",
        // echarts:"./echarts/echarts.min"
    }
})