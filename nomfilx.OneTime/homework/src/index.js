import _ from "lodash";
import "./style.css";
import Icon from "./atooo.jpeg";

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  //// _.join의 뜻

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

////1. getElementByClassName vs getElementById
////2. appendChild

////1. getElementByClassName
// function test1() {
//   var node = document.createElement("div");
//   var textnode = document.createTextNode("hi!");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
//   console.log("hi");
// }

// test1();

/////Cannot read property 'appendChild' of null error messege why?

//// 오류의 원인: script가 body보다 먼저 읽힌다. script를 </body> 위로 올린다.
