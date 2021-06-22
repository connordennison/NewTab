/* vue = new Vue({
    el: "#root",
    data: {
    }
}) */

setInterval(clockUpdate, 150);

function clockUpdate(id) {
    const now = moment().format("HH:mm:ss")
    document.getElementById("clock").innerHTML = `${now}`
}
