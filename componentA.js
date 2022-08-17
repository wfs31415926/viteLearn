import componentACss from "./componentA.module.css";
import componentALess from "./indexA.module.less";
console.log("componentACss",componentACss,componentALess);
const div=document.createElement("div");
div.className= componentACss.footer;
const div2=document.createElement("div2");
div2.className= componentALess.content.main;
document.body.appendChild(div);
document.body.appendChild(div2);
