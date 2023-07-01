function add_item() {
    let item = document.getElementById("box");
    let list_items = document.getElementById("list_item");
    if (item.value == "") {
        alert("please add value to item");
    }


    else {
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value = ""
        make_li.onclick = function () {
            this.parentNode.removeChild(this);

        }
    }
}