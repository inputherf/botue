define(["jquery","cookie"], function ($) {
    $(function () {
        $("form").submit(function (e) {
            var userName=$("#tc_username").val();
            var pass=$("#tc_password").val();
            if(userName.trim() == ""){
                alert("请输入用户名")
            }
            if(pass.trim() == ""){
                alert("请输入密码")
            }
            $.ajax({
                url:"/api/login",
                type:"post",
                data:{
                    tc_name:userName,
                    tc_pass:pass
                },
                success:function (data) {
                    if (data.code == 200){
                        console.log(data);
                        //登陆成功之后，
                        //先将后台返回用户的头像以及用户名信息
                        //保存到cookie中，为了能够让首页也使用这个信息


                        //应该先将对象转成json格式的字符串，然后再存
                        $.cookie("userinfo",JSON.stringify(data.result),{expire:365,path:"/"});

//                            让用户跳转到首页
                        location.href="/"
                    }
                }
            });
            //阻止表单的默认提交事件
            //e.preventDefault()
            return false;
        })

    })
})