


function removeRedBorders() {
    var single = document.querySelector(".redBorder");
    single.className = "";
    single.parentNode.nextElementSibling.children[2].className = "redBorder";
}


var lastDiv = document.children[0].children[1].children[2];
function insertDropDown(arry,parentNode) {
    var section= document.createElement('select');
    for(var i=0;i<arry.lenght;i++){
        var option= document.createElement('option');
        option.value=arr[i];
      section.appendChild(option);

    }
    parentNode.appendChild(section);
}
