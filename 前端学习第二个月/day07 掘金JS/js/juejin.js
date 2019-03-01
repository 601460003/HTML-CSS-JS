$(document).ready(function () {
      // 第一个接口
    $.get("http://rest.apizza.net/mock/5059b9fa5fce2d8f3f80823a3d662c17/all", function (data) {
        var arr = data.d.entrylist;
        console.log(arr);
        var str = '';
        for (var i = 0; i < arr.length; i++) {

            str=str+'<div class="title-passage">\n' +
                '            <a href="#" style="color: #b71ed7">专栏</a>\n' +
                '            <span>·</span>\n' +
                '            <a href="#">'+arr[i].category.name+'</a>\n' +
                '            <span>·</span>\n' +
                '            <a href="#">5小时前</a>\n' +
                '            <span>·</span>\n' +
                '            <a href="#">'+arr[i].user.company+'</a>\n' +
                '            <p>'+arr[i].title+'</p>\n' +
                '            <div class="title-btn">\n' +
                '                <button><img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg">'+arr[i].collectionCount+'</button>\n' +
                '                <button><img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg">'+arr[i].viewsCount+'</button>\n' +
                '            </div>\n' +
                '        </div>'
        }

        $('#index').html(str);
        $('#index1').html(str);

    });
        // 第二个接口
    $.get("http://rest.apizza.net/mock/5059b9fa5fce2d8f3f80823a3d662c17/web", function (data) {
        var arr2 = data.d
        // console.log(arr2);
        // var str2 = '';
        // for (var i = 0; i < arr.length; i++) {
        //
        //     str=str+'<div class="title-passage">\n' +
        //         '            <a href="#" style="color: #b71ed7">专栏</a>\n' +
        //         '            <span>·</span>\n' +
        //         '            <a href="#">'+arr[i].category.name+'</a>\n' +
        //         '            <span>·</span>\n' +
        //         '            <a href="#">5小时前</a>\n' +
        //         '            <span>·</span>\n' +
        //         '            <a href="#">'+arr[i].username+'</a>\n' +
        //         '            <p>'+arr[i].title+'</p>\n' +
        //         '            <div class="title-btn">\n' +
        //         '                <button><img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg">'+arr[i].collectionCount+'</button>\n' +
        //         '                <button><img src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg">'+arr[i].viewsCount+'</button>\n' +
        //         '            </div>\n' +
        //         '        </div>'
        // }
        //
        //
        // $('#index1').html(str2);
    });
});