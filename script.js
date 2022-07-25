function a() {
    let str = input.value;
    let result = str.split("=");
    let left = result [0]
    let right = result [1]
    result = left.split("+")
    if (result.length === 1) {
        let set = result [0];
        let array;
        if (set.indexOf("-") != -1) {
            array = set.split("-");
            for (var j = 1; j < array.length; j++) {
                array [j] = "-" + array [j]
            }
            left = array
        } else {
            left = result
        }
    } else {
        let set;
        let array;
        for (var i = 0; i < result.length; i++) {
            set = result [i]
            if (set.indexOf("-") != -1) {
                array = set.split("-");
                for (var j = 1; j < array.length; j++) {
                    array [j] = "-" + array [j]
                }
                result [i] = array
            }
        }
        left = result.flat();
    }
    result = right.split("+")
    if (result.length === 1) {
        let set = result [0];
        let array;
        if (set.indexOf("-") != -1) {
            array = set.split("-");
            for (var j = 1; j < array.length; j++) {
                array [j] = "-" + array [j]
            }
            right = array
        } else {
            right = result
        }
    } else {
        let set;
        let array;
        for (var i = 0; i < result.length; i++) {
            set = result [i]
            if (set.indexOf("-") !== -1) {
                array = set.split("-");
                for (var j = 1; j < array.length; j++) {
                    array [j] = "-" + array [j]
                }
                result [i] = array
            }
        }
        right = result.flat();
    }
    let leftc = [];
    let leftv = [];
    let rightc = [];
    let rightv = [];
    let set;
    for (var i = 0; i < left.length; i++) {
        set = left [i]
        if (set.indexOf("x") === -1) {
            leftc.push(set);
        } else {
            leftv.push(set);
        }
    }
    for (var i = 0; i < right.length; i++) {
        set = right [i]
        if (set.indexOf("x") === -1) {
            rightc.push(set);
        } else {
            rightv.push(set);
        }
    }
    left = leftv.concat(leftc)
    right = rightv.concat(rightc)
    let leftstr = "";
    let rightstr = "";
    for (var i = 0; i < left.length; i++) {
        set = left [i]
        if (set.charAt(0) !== "-" && i !== 0) {
            set = "+" + set
        }
        leftstr += set
    }
    for (var i = 0; i < right.length; i++) {
        set = right [i]
        if (set.charAt(0) !== "-" && i !== 0) {
            set = "+" + set
        }
        rightstr += set
    }
    if (leftstr + "=" + rightstr !== str) { 
        str = str + "\n" + leftstr + "=" + rightstr
    }
    let length = leftc.length;
    for (var i = 0; i < length; i++) {
        set = leftc [0]
        if (set.charAt(0) === "-") {
            set = set.slice(1)
        } else {
            set = "-" + set
        }
        leftc.splice(0, 1);
        rightc.push(set);
        left = leftv.concat(leftc);
        right = rightv.concat(rightc);
        leftstr = ""
        rightstr = ""
        for (var j = 0; j < left.length; j++) {
            set = left [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            leftstr += set
        }
        for (var j = 0; j < right.length; j++) {
            set = right [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            rightstr += set
        }
        str = str + "\n" + leftstr + "=" + rightstr
    }
    length = rightc.length
    let l = Number(rightc [0]);
    if (length !== 1) {
        set = 0
        for (var i = 0; i < length; i++) {
            set += Number(rightc [i]);
        }
        l = set
        rightc = [set + ""]
        left = leftv.concat(leftc);
        right = rightv.concat(rightc);
        leftstr = ""
        rightstr = ""
        for (var j = 0; j < left.length; j++) {
            set = left [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            leftstr += set
        }
        for (var j = 0; j < right.length; j++) {
            set = right [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            rightstr += set
        }
        str = str + "\n" + leftstr + "=" + rightstr
    }
    length = rightv.length;
    for (var i = 0; i < length; i++) {
        set = rightv [0]
        if (set.charAt(0) === "-") {
            set = set.slice(1)
        } else {
            set = "-" + set
        }
        rightv.splice(0, 1);
        leftv.push(set);
        left = leftv.concat(leftc);
        right = rightv.concat(rightc);
        leftstr = ""
        rightstr = ""
        for (var j = 0; j < left.length; j++) {
            set = left [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            leftstr += set
        }
        for (var j = 0; j < right.length; j++) {
            set = right [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            rightstr += set
        }
        str = str + "\n" + leftstr + "=" + rightstr
    }
    length = leftv.length
    let x = leftv [0].length - 1;
    x = leftv [0].substring(0, x);
    if (x === "") {
        x = 1
    } else if (x === "-") {
        x = -1
    }
    let r = Number(x);
    if (length !== 1) {
        set = 0
        for (var i = 0; i < length; i++) {
            x = leftv [i].length - 1
            x = leftv [i].substring(0, x);
            if (x === "") {
                x = 1
            } else if (x === "-") {
                x = -1
            }
            set += Number(x);
        }
        r = set;
        if (set === 0) {
            leftv = ["0"]
        } else {
            leftv = [set + "x"]
        }
        left = leftv.concat(leftc);
        right = rightv.concat(rightc);
        leftstr = ""
        rightstr = ""
        for (var j = 0; j < left.length; j++) {
            set = left [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            leftstr += set
        }
        for (var j = 0; j < right.length; j++) {
            set = right [j]
            if (set.charAt(0) !== "-" && j !== 0) {
                set = "+" + set
            }
            rightstr += set
        }
        str = str + "\n" + leftstr + "=" + rightstr
    }
    if (r !== 1) {
        if (r < 0) {
            l *= -1
            r *= -1
        }
        let g = gcd(Math.abs(l), Math.abs(r))
        l /= g
        r /= g
        if (r === 1) {
            str = str + "\nx=" + l
        } else {
            str = str + "\nx=" + l + "/" + r
        }
    }
    document.getElementById("output").value = str
}
function gcd(t, u) {
    if (u === 0){
        return t
    }
    return gcd(u, t % u)
}