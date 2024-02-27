var baseConfig = {
    homeIndexBgImageUrl: "./component/index/images/bg.png", // 首页背景图
    homeIndexBtnImageUrl: "./component/index/images/btn.png", // 首页开始按钮
    questionBgImageUrl: "../../component/question/images/bg.png", // 问题背景图
    questionBodyBgImageUrl: "../../component/question/images/question-bg.png", // 问题内容背景图
    questionSubmitBtnImageUrl: "../../component/question/images/btn.png", // 提交按钮图
    questionNextBtnImageUrl: "../../component/question/images/next-btn.png", // 下一个按钮图
    settleBgImageUrl: "../../component/settle/images/bg.png", // 结算背景图
    settleBodyImageUrl: "../../component/settle/images/settle-bg.png", // 结算内容背景图
    restartBtnImageUrl: "../../component/settle/images/restart-btn.png", // 重玩按钮图
    questionNum: "5", // 小于等于8
    questionType: "-1", // 题目类型: -1=任意,2=单选,3=多选
};



function getUrlParams(url) {
    // 通过 ? 分割获取后面的参数字符串
    if (!url.split("?")) {
        return {};
    }
    var urlStr = url.split("?")[1];
    console.log("urlStr", urlStr);
    if (!urlStr) {
        return {};
    }
    // 创建空对象存储参数
    var obj = {};
    // 再通过 & 将每一个参数单独分割出来
    var paramsArr = urlStr.split("&");
    for (var i = 0, len = paramsArr.length; i < len; i++) {
        // 再通过 = 将每一个参数分割为 key:value 的形式
        var arr = paramsArr[i].split("=");
        obj[arr[0]] = arr[1];
    }
    return obj;
}

var urlParams = getUrlParams(
    decodeURIComponent(decodeURIComponent(window.location.href))
);
if (urlParams["uuid"]) {

    $.ajax({
        url: "https://project.peopledigital.com.cn/prod-api/editor/user_design_template/temp?id=" +
            urlParams["uuid"],
        type: "GET",
        async: false,
        success: function(res) {
            console.log("res", res);
            if (res.data && res.data.length > 0 && res.data != []) {
                baseConfig = res.data[0];
            }
        },
    });
}