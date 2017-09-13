// NProgress.start();
//
// NProgress.done();
//
// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

define(["jquery", "template", "cookie"], function ($, template) {
    $(function () {
        if (location.pathname != "/dashboard/login") {
            if (!$.cookie("PHPSESSID")) {
                location.href = "/dashboard/login";
            }
            //1. 从cookie中获取用户存储好的用户信息
            var userinfo = JSON.parse($.cookie("userinfo"));
            //2.使用模板引擎将对象渲染到用户信息的模板中
            var html = template("tc_profiles", userinfo);
            $("#profiles").html(html);
        }


        //退出登录的功能实现
        $("#login_out").click(function () {
            //后台发送ajax,请求退出
            $.ajax({
                url: "/api/logout",
                type: "post",
                success: function (data) {
                    if (data.code == 200) {
                        location.href = "/dashboard/login"
                    }
                }
            })
        })
    //    侧边栏下拉菜单
        $(".navs>ul>li>ul").parent().click(function () {
        //    让子菜单显示出来
            $(this).children("ul").stop().slideToggle();
        })
    //    让当前链接的菜单项高亮
    //    console.log($(".navs a"))
        $(".navs a").each(function (i, e){
            //寻找导航中和当前地址栏中路径相同的a标签
            if($(e).attr("href")==location.pathname){
                 // alert(ele.href);
                 //让当前a标签的父元素，加上一个active类样式
                $(e).addClass("active");
             }
        })













    })
})