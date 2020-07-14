const directionFn = {
  "lt-rb": function (x, y, data) {
    let downPosition = [];
    let planOne = true,
      planTwo = true;
    for (let i = 1; i < 4; i++) {
      if (x - i >= 0 && y - i >= 0 && planOne) {
        let ltx = x - i;
        let lty = y - i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planOne = false;
        }
      }
      if (x + i <= 14 && y + i <= 14 && planTwo) {
        let ltx = x + i;
        let lty = y + i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planTwo = false;
        }
      }
    }
    setDown(downPosition[0].x, downPosition[0].y);
  },
  "top-bottom": function (x, y, data) {
    let downPosition = [];
    let planOne = true,
      planTwo = true;
    for (let i = 1; i < 4; i++) {
      if (y - i >= 0 && planOne) {
        let ltx = x;
        let lty = y - i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planOne = false;
        }
      }
      if (y + i <= 14 && planTwo) {
        let ltx = x;
        let lty = y + i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planTwo = false;
        }
      }
    }
    setDown(downPosition[0].x, downPosition[0].y);
  },
  "rt-lb": function (x, y, data) {
    let downPosition = [];
    let planOne = true,
      planTwo = true;
    for (let i = 1; i < 4; i++) {
      if (x + i <= 14 && y - i >= 0 && planOne) {
        let ltx = x + i;
        let lty = y - i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planOne = false;
        }
      }
      if (x - i >= 0 && y + i <= 14 && planTwo) {
        let ltx = x - i;
        let lty = y + i;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planTwo = false;
        }
      }
    }
    setDown(downPosition[0].x, downPosition[0].y);
  },
  "right-left": function (x, y, data) {
    let downPosition = [];
    let planOne = true,
      planTwo = true;
    for (let i = 1; i < 4; i++) {
      if (x - i >= 0 && planOne) {
        let ltx = x - i;
        let lty = y;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planOne = false;
        }
      }
      if (x + i <= 14 && planTwo) {
        let ltx = x + i;
        let lty = y;
        let diffObj = dataObj[ltx + "-" + lty];
        if (!diffObj["color"]) {
          downPosition.push({
            x: ltx,
            y: lty,
          });
        } else if (diffObj["color"] === "white") {
          planTwo = false;
        }
      }
    }
    setDown(downPosition[0].x, downPosition[0].y);
  },
  lt: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x - i;
      lty = y - i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  rb: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x + i;
      lty = y + i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  top: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x;
      lty = y - i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  rt: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x + i;
      lty = y - i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  lb: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x - i;
      lty = y + i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  right: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x + i;
      lty = y;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  bottom: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x;
      lty = y + i;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
  left: function (x, y) {
    let ltx = 0,
      lty = 0,
      diffObj;
    for (let i = 1; i < 4; i++) {
      ltx = x - i;
      lty = y;
      diffObj = dataObj[ltx + "-" + lty];
      if (!diffObj.color) {
        x = ltx;
        y = lty;
        break;
      }
    }
    return [x, y];
  },
};
function isWin(x, y, data) {
  let linkNum = 0;
  let oblique3X = x - 4;
  let oblique3Y = y - 4;
  let oblique4X = x + 4;
  let oblique4Y = y - 4;
  let area = {
    x1: Math.max(0, x - 4),
    x2: Math.min(14, x + 4),
    y1: Math.max(0, y - 4),
    y2: Math.min(14, y + 4),
    x3: oblique3X,
    y3: oblique3Y,
    x4: oblique4X,
    y4: oblique4Y,
  };
  if (oblique3X <= oblique3Y && oblique3X < 0) {
    area.x3 = x - (4 + oblique3X);
    area.y3 = y - (4 + oblique3X);
  } else if (oblique3X >= oblique3Y && oblique3Y < 0) {
    area.x3 = x - (4 + oblique3Y);
    area.y3 = y - (4 + oblique3Y);
  }
  if (14 - oblique4X <= oblique4Y && oblique4X > 14) {
    area.x4 = x + (4 - oblique4X + 14);
    area.y4 = y - (4 - oblique4X + 14);
  } else if (oblique4X - 14 <= Math.abs(oblique4Y) && oblique4Y < 0) {
    area.x4 = x + (4 - Math.abs(oblique4Y));
    area.y4 = y - (4 - Math.abs(oblique4Y));
  }
  // 横的是不是五颗
  for (let i = 0; i < 9 && area.x1 + i <= area.x2; i++) {
    let diffX = area.x1 + i;
    let diffObj = dataObj[diffX + "-" + y];
    if (diffObj["color"] === data["color"]) {
      linkNum++;
      if (linkNum >= 5) {
        setTimeout(() => {
          alert(data["color"] + "胜!");
          window.location.reload();
        }, 100);
        return;
      }
    } else {
      linkNum = 0;
    }
  }
  linkNum = 0;
  // 竖的是不是五颗
  for (let i = 0; i < 9 && area.y1 + i <= area.y2; i++) {
    let diffY = area.y1 + i;
    let diffObj = dataObj[x + "-" + diffY];
    if (diffObj["color"] === data["color"]) {
      linkNum++;
      if (linkNum >= 5) {
        setTimeout(() => {
          alert(data["color"] + "胜!");
          window.location.reload();
        }, 100);
        return;
      }
    } else {
      linkNum = 0;
    }
  }
  linkNum = 0;
  // 左边斜线
  for (
    let i = 0;
    i < 9 && area.x3 + i <= area.x2 && area.y3 + i <= area.y2;
    i++
  ) {
    let diffX = area.x3 + i;
    let diffY = area.y3 + i;
    let diffObj = dataObj[diffX + "-" + diffY];
    if (diffObj["color"] === data["color"]) {
      linkNum++;
      if (linkNum >= 5) {
        setTimeout(() => {
          alert(data["color"] + "胜!");
          window.location.reload();
        }, 100);
        return;
      }
    } else {
      linkNum = 0;
    }
  }
  linkNum = 0;
  // 右边斜线
  for (
    let i = 0;
    i < 9 && area.x4 - i >= area.x1 && area.y4 + i <= area.y2;
    i++
  ) {
    let diffX = area.x4 - i;
    let diffY = area.y4 + i;
    let diffObj = dataObj[diffX + "-" + diffY];
    if (diffObj["color"] === data["color"]) {
      linkNum++;
      if (linkNum >= 5) {
        setTimeout(() => {
          alert(data["color"] + "胜!");
          window.location.reload();
        }, 100);
        return;
      }
    } else {
      linkNum = 0;
    }
  }
}
function setDown(x, y) {
  let data = dataObj[x + "-" + y];
  data["active"] = true;
  data["color"] = (isBlack && "black") || "white";
  data.el.classList.add("active");
  data.el.style.background = data["color"];
  data.el.style.boxShadow = `0 0 6px ${data["color"]}`;
  isWin(x, y, data);
}
function wall(x, y) {
  let color = (isBlack && "black") || "white";
  let planOne = true;
  let lineArr = {
    white: [],
    black: [],
  };
  let getWhiteArr = [];
  let getBlackArr = [];
  for (let key in dataObj) {
    if (dataObj[key]["color"]) {
      let lineX = dataObj[key]["x"];
      let lineY = dataObj[key]["y"];
      let nowLine = getLine(
        lineX,
        lineY,
        dataObj[key]["color"],
        (dataObj[key]["color"] === "white" && "black") || "white",
        4
      );
      nowLine.forEach((item) => {
        item.x = lineX;
        item.y = lineY;
      });
      lineArr[dataObj[key]["color"]].push(nowLine);
    }
  }
  getWhiteArr = lineArr["white"];
  getBlackArr = lineArr["black"];

  getWhiteArr.sort((a, b) => {
    a = a.sort((c, d) => {
      return d.value - c.value;
    });
    b = b.sort((c, d) => {
      return d.value - c.value;
    });
    return b[0].value - a[0].value;
  });
  getBlackArr.sort((a, b) => {
    a = a.sort((c, d) => {
      return d.value - c.value;
    });
    b = b.sort((c, d) => {
      return d.value - c.value;
    });
    return b[0].value - a[0].value;
  });
  whiteWarning = getWhiteArr[0];
  blackWarning = getBlackArr[0];
  if (
    whiteWarning &&
    blackWarning &&
    whiteWarning[0]["value"] < blackWarning[0]["value"] &&
    blackWarning[0]["value"] >= 2
  ) {
    planOne = false;
  }
  if (planOne) {
    let colorNum = getWhiteArr.length;
    if (getWhiteArr.length > 0) {
      let position = getWhiteArr[0][0];
      if (position["value"] === 0) {
        getWhiteArr = getWhiteArr[0].sort((a, b) => {
          return b.null1 + b.null2 - (a.null1 + a.null2);
        });
        position = getWhiteArr[0];
        if (position.null1 > position.null2) {
          position = directionFn[position.key1](position.x, position.y);
        } else {
          position = directionFn[position.key2](position.x, position.y);
        }
      } else {
        if (
          position.value1 + position.null1 > position.value2 + position.null2 &&
          position.null1 > 0
        ) {
          position = directionFn[position.key1](
            position.x,
            position.y,
            position.value1
          );
        } else {
          position = directionFn[position.key2](
            position.x,
            position.y,
            position.value2
          );
        }
      }
      setDown(position[0], position[1]);
    } else if (colorNum < 1) {
      if (x + 1 < 14) {
        x = x + 1;
      } else {
        x = x - 1;
      }
      if (y + 1 < 14) {
        y = y + 1;
      } else {
        y = y - 1;
      }
      setDown(x, y);
    }
  } else {
    let data = blackWarning[0];
    directionFn[data.key](data.x, data.y, data);
  }
}
function getLine(x, y, color1, color2, le) {
  color2 = color2 || "white";
  le = le || 5;
  let diffData = {
    lt: 0,
    ltNull: 0,
    rb: 0,
    rbNull: 0,
    top: 0,
    topNull: 0,
    bottom: 0,
    bottomNull: 0,
    rt: 0,
    rtNull: 0,
    lb: 0,
    lbNull: 0,
    right: 0,
    rightNull: 0,
    left: 0,
    leftNull: 0,
  };
  for (let i = 1; i < le; i++) {
    // 左边斜线
    if (x - i >= 0 && y - i >= 0 && !diffData.ltStop) {
      let ltx = x - i;
      let lty = y - i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.lt++;
      } else if (diffObj["color"] === color2) {
        diffData.ltStop = true;
        if (diffData.ltStop && diffData.rbStop) {
          diffData.lt = 0;
          diffData.rb = 0;
        }
      } else {
        diffData.ltNull++;
      }
    }
    if (x + i <= 14 && y + i <= 14 && !diffData.rbStop) {
      let ltx = x + i;
      let lty = y + i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.rb++;
      } else if (diffObj["color"] === color2) {
        diffData.rbStop = true;
        if (diffData.ltStop && diffData.rbStop) {
          diffData.lt = 0;
          diffData.rb = 0;
        }
      } else {
        diffData.rbNull++;
      }
    }
    // 右边斜线
    if (x + i <= 14 && y - i >= 0 && !diffData.rtStop) {
      let ltx = x + i;
      let lty = y - i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.rt++;
      } else if (diffObj["color"] === color2) {
        diffData.rtStop = true;
        if (diffData.rtStop && diffData.lbStop) {
          diffData.rt = 0;
          diffData.lb = 0;
        }
      } else {
        diffData.rtNull++;
      }
    }
    if (x - i >= 0 && y + i <= 14 && !diffData.lbStop) {
      let ltx = x - i;
      let lty = y + i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.lb++;
      } else if (diffObj["color"] === color2) {
        diffData.lbStop = true;
        if (diffData.rtStop && diffData.lbStop) {
          diffData.rt = 0;
          diffData.lb = 0;
        }
      } else {
        diffData.lbNull++;
      }
    }
    // 横线
    if (x - i >= 0 && !diffData.leftStop) {
      let ltx = x - i;
      let lty = y;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.left++;
      } else if (diffObj["color"] === color2) {
        diffData.leftStop = true;
        if (diffData.rightStop && diffData.leftNull) {
          diffData.left = 0;
          diffData.right = 0;
        }
      } else {
        diffData.leftNull++;
      }
    }
    if (x + i <= 14 && !diffData.rightStop) {
      let ltx = x + i;
      let lty = y;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.right++;
      } else if (diffObj["color"] === color2) {
        diffData.rightStop = true;
        if (diffData.leftStop && diffData.rightStop) {
          diffData.left = 0;
          diffData.right = 0;
        }
      } else {
        diffData.rightNull++;
      }
    }
    // 竖线
    if (y - i >= 0 && !diffData.topStop) {
      let ltx = x;
      let lty = y - i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.top++;
      } else if (diffObj["color"] === color2) {
        diffData.topStop = true;
        if (diffData.topStop && diffData.bottomStop) {
          diffData.top = 0;
          diffData.bottom = 0;
        }
      } else {
        diffData.topNull++;
      }
    }
    if (y + i <= 14 && !diffData.bottomStop) {
      let ltx = x;
      let lty = y + i;
      let diffObj = dataObj[ltx + "-" + lty];
      if (diffObj["color"] === color1) {
        diffData.bottom++;
      } else if (diffObj["color"] === color2) {
        diffData.bottomStop = true;
        if (diffData.topStop && diffData.bottomStop) {
          diffData.top = 0;
          diffData.bottom = 0;
        }
      } else {
        diffData.bottomNull++;
      }
    }
  }
  let diffArray = [
    {
      key: "lt-rb",
      value: diffData.lt + diffData.rb,
      key1: "lt",
      value1: diffData.lt,
      null1: diffData.ltNull,
      key2: "rb",
      value2: diffData.rb,
      null2: diffData.rbNull,
    },
    {
      key: "top-bottom",
      value: diffData.top + diffData.bottom,
      key1: "top",
      value1: diffData.top,
      null1: diffData.topNull,
      key2: "bottom",
      value2: diffData.bottom,
      null2: diffData.bottomNull,
    },
    {
      key: "rt-lb",
      value: diffData.rt + diffData.lb,
      key1: "rt",
      value1: diffData.rt,
      null1: diffData.rtNull,
      key2: "lb",
      value2: diffData.lb,
      null2: diffData.lbNull,
    },
    {
      key: "right-left",
      value: diffData.right + diffData.left,
      key1: "right",
      value1: diffData.right,
      null1: diffData.rightNull,
      key2: "left",
      value2: diffData.left,
      null2: diffData.leftNull,
    },
  ];
  for (let i = 0, le = diffArray.length; i < le; i++) {
    let data = diffArray[i];
    if (data.null1 < 1) {
      data.value1 = 0;
      data.value = data.value2;
    }
    if (data.null2 < 1) {
      data.value2 = 0;
      data.value = data.value1;
    }
    if (data.null1 < 1 && data.null2 < 1) {
      data.value = 0;
    }
  }
  diffArray = diffArray.sort((a, b) => {
    return b.value - a.value;
  });
  return diffArray;
}
function aiRun(x, y, isBlack) {
  wall(x, y);
  switchPiece();
}