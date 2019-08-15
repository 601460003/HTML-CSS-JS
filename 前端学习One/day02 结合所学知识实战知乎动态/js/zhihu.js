$(document).ready(function () {
    $('#hots').hover(function () {
        $('.hots-bull1').toggle();
    })







});
// $.get("https://www.easy-mock.com/mock/5c4fc422640e0719f990b501/api/v1/all", function (data) {
var data = {
    data: {
        list: [
            {
                "id": "1",
                "uuid": "",
                "add_time": "2019-01-29 10:30:32",
                "update_time": null,
                "ext_data": null,
                "title": "男士有什么好打理又好看的发型（除寸头外）？",
                "content": "cover 雍禾植发刘洋： 你如果想要一个好打理还好看的发型，可以参考下如下视频： 了解一下，下次就照这个来 发型是要根据脸型搭配的，重点还是看脸…阅读全文​",
                "endorsed": "",
                "discuss": "24",
                "likes": "194",
                "img": ""
            },
            {
                "id": "2",
                "uuid": "",
                "add_time": "2019-01-29 10:32:13",
                "update_time": null,
                "ext_data": null,
                "title": "你的择偶标准是怎样的？",
                "content": "cover vera： 大家慢慢喷吧 虽然不知道你们在喷什么 我写的时候压根就不知道会火 看好多人装逼自己就想着默默装个逼 也不会有人知道的 因为自己两年减肥25kg 没有整容 说我整容就当夸奖 说我妆浓的人 我就想说…",
                "endorsed": "",
                "discuss": "526",
                "likes": "288",
                "img": "https://pic4.zhimg.com/50/v2-21a34bf35447a8a30abafde26ee97c97_400x224.jpg"
            }
        ]
    }
}
var list = data.data.list;
var str = '';



