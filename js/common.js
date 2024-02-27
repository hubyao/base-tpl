var getLocalTime = function(nS, type) {
    var date = new Date(parseInt(nS) * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;

    if (type === "full") {
        return (timeString =
            year + "-" + month + "-" + day + "  " + hour + ":" + minute);
    } else {
        return (timeString = year + "-" + month + "-" + day);
    }
};

// 判断是否是手机端端
var isMobile = function() {
    let userAgentInfo = navigator.userAgent;
    let Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
    ];
    let getArr = Agents.filter((i) => userAgentInfo.includes(i));
    console.log(getArr.length ? true : false);
    return getArr.length ? true : false;
};

function getQueryVariable(variable) {
    var url = window.location.href;

    var query = url.split("?")[1]; // 根据“?”切割数组，截取“?”之后的字符串
    if (!query) {
        return false;
    }
    // ['https://qq.com','appid=1234567890&name=Zdf']
    var vars = query.split("&"); // 根据“&”切割成数组
    // ['appid=1234567890','name=Zdf']
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // ['appid','1234567890']
        if (pair[0] == variable) return pair[1]; // 没有花括号默认执行第一个js语句
    }
    return false;
};

function jsonFindByName(jsonArray, itemName, itemValue) {
    var filteredData = jsonArray.filter(function(item) {
        return item[itemName] == itemValue; // 这里可以根据需要换成其他条件
    });
    return filteredData;
}

/**
 * toast 提示：绑定在window上，使用方法：showMessage('提示信息', time, '回调函数') 
 */
window.showMessage = function($msg, $time, callback) {
    $time = $time === 0 ? 0 : ($time || 1000);
    var oDiv = document.createElement("div");
    oDiv.setAttribute("id", "toastTip");
    //var oBody = document.getElementsByClassName('wrapper')[0];
    var oBody = document.getElementsByTagName('body')[0];
    oBody.append(oDiv);
    $('#toastTip').text($msg);
    $('#toastTip').fadeIn();
    setTimeout(function() {
        $('#toastTip').fadeOut(function() {
            $('#toastTip').remove();
        });
        if (callback && (typeof callback == 'function')) {
            callback();
        }
    }, $time);
}