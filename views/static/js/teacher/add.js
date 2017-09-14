define(["jquery","template","utils","form"],function ($,template,utils) {
//    判断当前是编辑功能还是添加功能
  var id =utils.getQueryObj().id;
    if(id){
        //   编辑功能
        //1. 获取当前要编辑的讲师的详细信息
        $.ajax({
            url:"/api/teacher/edit",
            data:{
                tc_id:id
            },
            success:function (data) {
                if(data.code==200){
                //    需要将数据用模板渲染到页面
                    data.result.title="编辑讲师";
                    data.result.btnText="保 存";
                    $(".body,.teacher").html(template("teacher_add_edit_tpl",data.result))
                    $("#save_btn").click(function () {
                        console.log(1);
                        $.ajax({
                            url:"/api/teacher/update",
                            type:"post",
                            data:$("form").serialize(),
                            success:function (data) {
                                if(data.code == 200){
                                    location.href="/teacher/list"
                                }
                            }
                        })
                        return false;
                    })
                }
            }

        })
    }else{
    //    添加功能
        var obj={
            title:"添加讲师",
            btnText:"添 加",
        }
        $(".body,.teacher").html(template("teacher_add_edit_tpl",obj))
        $("#save_btn").click(function () {
            //1.获取用户输入的内容
            //2.将这些内容通过ajax请求发送给后台保存
            //3.保存成功之后调回列表单页
            $.ajax({
                url:"/api/teacher/add",
                type:"post",
                data:$("form").serialize(),
                success:function (data) {
                    if(data.code ==200){
                        location.href ="/teacher/list"
                    }
                }
            })
            return false;
        });
    }



})