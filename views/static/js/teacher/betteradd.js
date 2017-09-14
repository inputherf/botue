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
                    data.result.url="/api/teacher/edit";
                    renderData(data.result);
                }
            }

        })
    }else{
        //    添加功能
        var obj={
            title:"添加讲师",
            btnText:"添 加",
            url:"/api/teacher/add",
        }
        renderData(obj);
    }


        //给保存按钮注册点击事件
    //因为用了插件，表单有提交功能，所以不需要再发送ajax请求，发送请求的地址写在add.html里form表单
    //中的action：“”，添加了method属性。method属性表示提交方式。
    $(".body,.teacher").on("submit","form",function () {
        $(this).ajaxSubmit({
            success:function (data) {
                if (data.code == 200) {
                    location.href = "/teacher/list"
                }
            }
        })
        return false;
    });

    function renderData(data) {
        $(".body,.teacher").html(template("teacher_add_edit_tpl",data))
    }

})