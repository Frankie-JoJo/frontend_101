// 数据模型 model

// 用户已经输入的信息
var final_list = [];

// 获取用户的信息
function getData() {
    var user_name = document.getElementById("user_name").value;
    if (user_name == "") {
        alert("姓名不能为空")
        return;
    }
    var user_sex = document.getElementsByName("sex");
    var user_sex_value = '';
    for (var i = 0; i < user_sex.length; i++) {
        if (user_sex[i].checked) {
            user_sex_value = user_sex[i].value;
        }
    }
    var BU = document.getElementById("bu").value;
    var user_temp = document.getElementById("user_temp").value;
    if (user_temp == "" || user_temp <= 20 || user_temp >= 50) {
        alert("请输入正确的体温")
        return;
    }
    var date = getDate();
    var user_id = document.getElementById("user_id").value;
    if("" == user_id) {
        user_id = COUNT++;
        // COUNT ++;
    }
    return {
        'id':user_id,
        'user_name': user_name,
        'user_sex': user_sex_value,
        'bu': BU,
        'user_temp': user_temp,
        'date': date
    }
}

// 获取当前日期
function getDate() {
    var cur_date = new Date();
    var cur_year = cur_date.getFullYear();
    var cur_month = parseInt(cur_date.getMonth()) + 1;
    var cur_day = cur_date.getDate();
    var cur_hour = cur_date.getHours();
    var cur_minute = cur_date.getMinutes();
    cur_minute = cur_minute < 10 ? "0" + cur_minute : cur_minute;
    var date = cur_year + '年' + cur_month + '月' + cur_day + '日' +
        cur_hour + ':' + cur_minute;
    return date;
}

function genRand(index) { // 随机生成一个从0到index的整数:左闭右开
    return parseInt(Math.random() * index)
}

var LETTERS = "abcdefghijklmnopqrstuvwxyz";
var SEX = "男女";
var BU = ["市场部", "运营部", "技术部"];
var COUNT = 1;
// 自动造数据
function autoGen() {
    // 随机生成英文名
    var name_length = 3 + genRand(7);
    var final_name = '';
    for (var i = 0; i < name_length; i++) {
        var index = genRand(26);
        final_name = final_name + LETTERS[index];
    }
    final_name = final_name.charAt(0).toUpperCase() + final_name.substring(1, name_length);
    // console.info('名字是：' + final_name)
    // 随机生成性别
    var final_sex = SEX[genRand(2)];
    // 随机生成部门
    var bu = BU[genRand(3)];
    // 随机生成体温
    var temp = 38 - (Math.random() * 1.5).toFixed(1);
    // 测量时间
    var myDate = getDate();
    // ++n 表示先计算，后赋值
    // n++ 表示先赋值，后计算
    var obj = {
        'id': COUNT++,
        'user_name': final_name,
        'user_sex': final_sex,
        'bu': bu,
        'user_temp': temp,
        'date': myDate
    }
    // COUNT ++;
    return obj;
}

function delModel(id) {
    for(var i = 0; i < final_list.length; i++) {
        if(final_list[i].id == id) {
            final_list.splice(i,1);
            break;
        }
    }
}