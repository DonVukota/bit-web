var list = document.querySelectorAll('ul');
var redColor= list[1];
redColor.className = "red";

var listItems = document.querySelectorAll("li");

function menjacica (){

    for (var i = 0; i < listItems.length; i++){
        listItems[i].className = "red";
    }
}

menjacica();

var purpleColor = list[2];
var purpleChildren = purpleColor.children;
function purple (parametar2){
    for(var i = 0; i < purpleChildren.length; i++){
        purpleChildren[i].className = parametar2
    }
}

purple("violet");