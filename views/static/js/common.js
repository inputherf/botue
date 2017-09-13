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
    })
})