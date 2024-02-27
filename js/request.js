var findQuestionList = function(data, success, error) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://12304app.peopledigital.com.cn/mobileSubscribe/readingsOutsideInterface/findQuestionList.html",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "content-type": "application/json"
        },
        "processData": false,
        "data": "{\r\n\"num\": 50\r\n}",
        success: function(res) {
            success(res)
        },
        error: function(err) {
            error(err)
        }
    })

}