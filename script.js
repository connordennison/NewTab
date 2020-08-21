vue = new Vue({
    el: "#root",
    data: {
    }
})

setInterval(clockUpdate, 500);

function clockUpdate(id) {
    var dObj = new Date();
    var h = dObj.getHours();
    var m = dObj.getMinutes();
    var s = dObj.getSeconds();

    if (h > 12) {
        h = h - 12;
    }

    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`
}