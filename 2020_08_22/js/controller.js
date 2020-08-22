// 定义整个页面的Controller
// 弹出窗口
function myAlert() {
    document.getElementById("myCard").removeAttribute("class");
}

// 关闭窗口
function closeAlert() {
    document.getElementById("myCard").setAttribute("class", "hide");
    // 清理弹窗的输入
    reset();
}

// 点击提交按钮
function submit() {
    // 获取用户输入的信息
    // 操作model层
    var obj = getData();
    if (obj.id <= COUNT) {
        // 修改
        for (var i = 0; i < final_list.length; i ++) {
            if(final_list[i].id == obj.id) {
                final_list[i] = obj;
            }
        }
    } else {
        // 添加
        final_list.push(obj);
    }
    // 操作视图层
    show();
    // 关闭窗口
    closeAlert();
}

// 重置用户的输入
function reset() {
    document.getElementById("user_name").value = "";
    document.getElementById("user_temp").value = "";
}

// 批量创建
function batch_gen(num) {
    for(var i = 0; i < num; i ++) {
        var obj = autoGen();
        final_list.push(obj)
    }
    show()
}

// 点击删除按钮
function removeTr (myid) {
    // 操作view层
    document.getElementById(myid).remove();
    // 操作model层
    delModel(myid.replace('my',''));
}

// 点击修改按钮
function updateTr(myid) {
    // 操作view层
    myAlert();
    // 操作model层
    // 获取js对象
    var obj = {};
    for (var i = 0; i < final_list.length; i++) {
        if(final_list[i].id == myid.replace('my','')) {
            obj = final_list[i];
            break;
        }
    }
    // 操作view层
    document.getElementById("user_name").value = obj.user_name;
    document.getElementById("user_id").value = obj.id;
    if("男" == obj.user_sex) {
        document.getElementsByName("sex")[0].checked = true;
    } else {
        document.getElementsByName("sex")[1].checked = true;
    }
    document.getElementById("user_temp").value = obj.user_temp;
    document.getElementById("bu").value = obj.bu;
}