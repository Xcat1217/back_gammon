let table = document.getElementsByClassName("table")[0];
let black = document.getElementsByClassName("black")[0];
let white = document.getElementsByClassName("white")[0];
function switchPiece() {
    isBlack = !isBlack;
    black.classList.toggle("active");
    white.classList.toggle("active");
}
let dataObj = {};
let str = "";
let spanBox = document.createDocumentFragment();
for (let i = 0; i < 14 * 14; i++) {
    let top = parseInt(i / 14) * 50;
    let left = (i % 14) * 50;
    str += `<div class="td" style="left: ${left}px;top: ${top}px;border-right-color:${
        (i % 14 !== 13 && "transparent") || "gray"
        };border-bottom-color:${
        (parseInt(i / 14) !== 13 && "transparent") || "gray"
        }"></div>`;
}
var isBlack = true;
for (let index = 0; index < 15 * 15; index++) {
    let top = parseInt(index / 15);
    let left = index % 15;
    let span = document.createElement("span");
    span.style.left = left * 50 - 20 + "px";
    span.style.top = top * 50 - 20 + "px";
    // span.innerText = left + ',' + top;
    dataObj[left + "-" + top] = {
        active: false,
        color: "",
        el: span,
        x: left,
        y: top,
    };
    span.onclick = function () {
        let x = index % 15;
        let y = parseInt(index / 15);
        let data = dataObj[x + "-" + y];
        if (data["active"]) {
            return false;
        }
        data["active"] = true;
        data["color"] = (isBlack && "black") || "white";
        this.classList.add("active");
        this.style.background = data["color"];
        this.style.boxShadow = `0 0 6px ${data["color"]}`;
        isWin(x, y, data);
        switchPiece();
        aiRun(x, y, isBlack);
    };
    spanBox.appendChild(span);
}
table.innerHTML = str;
table.appendChild(spanBox);