define(["jquery","ckeditor","datepicker","datepickerCN","validate"],function ($,CKEDITOR) {
    //输入文本框
    CKEDITOR.replace("introduce",{
        toolbarGroups:[
            { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
            { name: 'tools' },
            { name: 'others' },
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
            { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
            { name: 'styles' },
            { name: 'colors' },
        ]
    })


    $("#birth,#data").datepicker({
        autoclose:true,
        formate:"yyyy-mm-dd",
        language:"zh-CN"
    });
    //表单验证
    $("form").validate({
        sendForm:false,
        onBlur:true,
        onChange:true,
        description:{
            name:{
                required:"请输入昵称",
            },
            birthday:{
                required:"请选择生日"
            },
            cell:{
                pattern:"请输入正确的格式",
            },
            data:{
                required:"请选择入职日期"
            },

        },
        eachValidField:function () {
            this.parent().parent().addClass("has-success").removeClass("has-error");
        },
        eachInvalidField:function () {
            this.parent().parent().addClass("has-error").removeClass("has-success");
        }
    })
})