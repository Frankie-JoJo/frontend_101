// 视图层
function show() {
    var str = "";
    for (var i = 0; i < final_list.length; i++) {
        var obj = final_list[i];
        str += "<tr id=\"my" + obj.id + "\"><td>" + obj.id
            + "</td><td>" + obj.user_name
            + "</td><td>" + obj.user_sex
            + "</td><td>" + obj.bu
            + "</td><td>" + obj.user_temp
            + "</td><td>" + obj.date
            + "</td><td>" + "<button onclick='updateTr(\"my" + obj.id+ "\")'>修改</button>"
            + "<button onclick='removeTr(\"my" + obj.id + "\")'>删除</button>"
            + "</td></tr>";
    }
    // 把拼接好的数据放入tbody
    document.getElementById("tbody").innerHTML = str;
}