const LIST_ITEM = "LI";
const SPAN_ITEM = "span";
const UL_ITEM = "ul";
const UL_ID = "taskList";
const CLICK_EVENT = "click";
const INPUT_VALUE_ID = "taskInput";
const DISPLAY_STYLE = "none";
const CLOSE_CLASS = "close";
const CHECKED_CLASS = "checked";
const TEXT_NODE = "\u00D7";
const ERROR = "You need to write something to add!";

// Create a close button and append it to each list item
var myNodelist = document.getElementsByTagName(LIST_ITEM);
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement(SPAN_ITEM);
    var txt = document.createTextNode(TEXT_NODE);
    
    span.className=CLOSE_CLASS;
    span.appendChild(txt);

    myNodelist[i].appendChild(span);
}

//click on a close button to hide the current list item
var close = document.getElementsByClassName(CLOSE_CLASS);
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display=DISPLAY_STYLE;
    }
}

//add a checked symbol when clicking on a list item
var list = document.querySelector(UL_ITEM);
list.addEventListener(CLICK_EVENT, function(ev){
    if (ev.target.tagName == LIST_ITEM)
    {
        ev.target.classList.toggle(CHECKED_CLASS);
    }
}, false);

//create a new list item when clicking on the add button
const newElement = () => {
    var li = document.createElement(LIST_ITEM);
    var inputValue = document.getElementById(INPUT_VALUE_ID).value;
    var innerText = document.createTextNode(inputValue);
    li.appendChild(innerText);

    if (inputValue === ""){
        alert(ERROR);
    }else {
        document.getElementById(UL_ID).appendChild(li);
    }
    
    document.getElementById(INPUT_VALUE_ID).value = "";

    var span = document.createElement(SPAN_ITEM);
    var txt = document.createTextNode(TEXT_NODE);
    span.className = CLOSE_CLASS;
    span.appendChild(txt);
    
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = DISPLAY_STYLE;
        }
    }
}