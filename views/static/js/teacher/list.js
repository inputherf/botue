define(["jquery","template","bootstrap"],function ($,template) {
    $(function () {
        //1. 加载列表数据
        //1.1 发送ajax请求
        $.ajax({
            url:"/api/teacher",
            success:function (data) {
                // console.log(data);
                $("#teacher_list_tbody").html(template("teacher_list_tpl",data))
            }
        })
    //    给所有查看事件添加查看按钮
            $("#teacher_list_tbody").on("click",".check-info",function () {
                //获取当前页面的id
                var id = $(this).parent().data("id");
            //    发送ajax
                $.ajax({
                   url:"/api/teacher/view",
                   data:{
                       tc_id:id
                   },
                   success:function (data) {
                       if(data.code ==200){
                           $("#teacherModal>.modal-dialog").html(template("teacher_modal_tpl",data.result));
                           $("#teacherModal").modal("show");
                       }
                   }
                })
            })
    //  启用，注销
            $("#teacher_list_tbody").on("click",".btn-status",function () {
                var id = $(this).parent().data("id");
                var status=$(this).data("status");
                var that = $(this);
                $.ajax({
                    url:"/api/teacher/handle",
                    type:"post",
                    data:{
                        tc_id:id,
                        tc_status:status
                    },
                    success:function (data) {
                        if(data.code == 200){
                            console.log(data);
                            if(data.result.tc_status=="0"){
                                that.removeClass("btn-success").addClass("btn-warning").html("注 销");
                            }else{
                                that.removeClass("btn-warning").addClass("btn-success").html("启 用");
                            }
                            //需要将当前按钮中保存的  data-status 改成修改后的状态
                            that.data("status",data.result.tc_status);

                        }
                    }
                })
            })











    })
})