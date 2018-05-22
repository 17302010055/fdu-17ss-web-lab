const select = document.getElementById("select");
const content = document.getElementById("content");
const nowTable = document.getElementById("nowTable");
const bt_commit = document.getElementById("commit");
const table = document.getElementById("table");
var i, j, t_name, t_number;
// var newTable_options = new Array(0);
var new_th,new_td ,new_table, option, input, tr, nowselectedIndex;
var inputAttr;
var count = 0, count_option = 0, count_table = 0;
var div = document.createElement("div");
var l;
// var div2 = document.createElement("div");
function Table(name, number,array1,array2,td_number) {
    this.name = name;
    this.number = number;
    this.th_s = array1;
    this.td_s = array2;
    this.td_number = td_number;
    // th_s ;
    // rows[rows.length] = array;
}

var table_Array = new Array(0);

function getChange() {
    var selectedIndex = select.selectedIndex;
    if (selectedIndex === 0) {
        bt_commit.style.visibility = "hidden";
        content.innerHTML = "";
    }
    else if (selectedIndex === 1) {
        var input_tableName = document.createElement("input");
        input_tableName.type = "text";
        input_tableName.placeholder = "Table Name";
        var input_number = document.createElement("input");
        input_number.type = "number";
        input_number.placeholder = "Columns Numbers";
        content.appendChild(input_tableName);
        content.appendChild(input_number);


        input_number.addEventListener("input", function () {
            t_name = input_tableName.value;
            t_number = input_number.value;
            if (t_number) {

                inputAttr = new Array(0);
                div.innerHTML = "";
                for (i = 0; i < t_number; i++) {
                    input = document.createElement("input");
                    input.type = "text";
                    input.placeholder = "Attribute";
                    inputAttr[inputAttr.length] = input;
                    div.appendChild(input);
                }
                content.appendChild(div);

                bt_commit.style.visibility = "visible";
            }
        }, false);

        bt_commit.onclick = function (ev) {
            t_name = input_tableName.value;
            t_number = input_number.value;
            table_Array[table_Array.length] = new Table(t_name, t_number,new Array(0),new Array(0),0);
            // table_Array[table_Array.length-1].rows[rows.length] = inputAttr;
            option = document.createElement("option");
            option.id = "option" + (count_option++);
            option.innerHTML = table_Array[table_Array.length - 1].name;
            nowTable.appendChild(option);
            // alert(table_Array.length);
            nowTable.options[table_Array.length].selected = true;

            table.innerHTML = "";
            new_table = document.createElement("table");
            new_table.id = "new-table";
            tr = document.createElement("tr");
            for (i = 0; i < table_Array[table_Array.length - 1].number; i++) {
                new_th = document.createElement("th");
                // alert("ss" + inputAttr[i].value + "ss");
                new_th.innerHTML = inputAttr[i].value;
                tr.appendChild(new_th);
                // th_s.push()
                table_Array[table_Array.length-1].th_s.push(inputAttr[i].value);
                 // l = table_Array[table_Array.length-1].rows.length;
                // table_Array[table_Array.length-1].rows[l] = inputAttr;
            }
            new_table.appendChild(tr);
            table.appendChild(new_table);
        }
    }
    else if (selectedIndex === 2) {
        count = 0;
        content.innerHTML = "";
        div.innerHTML = "";
        nowselectedIndex = nowTable.selectedIndex;
        inputAttr = new Array(0);
        for (i = 0; i < table_Array[nowselectedIndex - 1].number; i++) {
            input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Attr" + (i + 1);
            inputAttr[inputAttr.length] = input;
            div.appendChild(input);
        }
        content.appendChild(div);

        bt_commit.onclick = function () {
            tr = document.createElement("tr");
            tr.id = "tr" + (count++);
            // alert(table_Array[nowselectedIndex-1].number);
            for (i = 0; i < table_Array[nowselectedIndex - 1].number; i++) {
                new_td = document.createElement("td");
                new_td.innerHTML = inputAttr[i].value;
                tr.appendChild(new_td);
                table_Array[nowselectedIndex-1].td_s.push(inputAttr[i].value);
                table_Array[nowselectedIndex-1].td_number++;
            }
            new_table.appendChild(tr);
            table.appendChild(new_table);
            // l = table_Array[nowselectedIndex-1].rows.length;
            // table_Array[nowselectedIndex - 1].rows[l] = inputAttr;
            // input_tableName[nowselectedIndex].number += 1;

        }
    }
    else if (selectedIndex === 3) {
        content.innerHTML = "";
        div.innerHTML = "";
        nowselectedIndex = nowTable.selectedIndex;
        for (i = 0; i < table_Array[nowselectedIndex - 1].number; i++) {
            input = document.createElement("input");
            input.type = "text";
             input.placeholder = table_Array[nowselectedIndex-1].td_s[i];
             inputAttr[inputAttr.length] = input;
            div.appendChild(input);
        }
        content.appendChild(div);

        bt_commit.onclick = function (ev) {
            new_table.removeChild(document.getElementById("tr" + (--count)));
        }
    }
    else if (selectedIndex === 4) {
        content.innerHTML = "WARNING:you cannot undo this action!";
        nowselectedIndex = nowTable.selectedIndex;
        bt_commit.onclick = function (ev) {
            nowselectedIndex = nowTable.selectedIndex;
            // alert(nowselectedIndex);
            // alert(count_option);
            // option = new document.getElementById("option");
            // option.innerHTML = "xx";
            // nowTable.appendChild(option);
            // alert(nowselectedIndex);
            if (nowselectedIndex > 1) {
                nowTable.remove(nowTable.selectedIndex);

                nowTable.options[1].selected = true;
                // alert(nowTable.options[1].selected);
                table.innerHTML = "";
                new_table.innerHTML = "";
                tr = document.createElement("tr");
                for (i = 0; i < table_Array[0].number; i++) {
                    new_th = document.createElement("th");
                    // alert("ss" + inputAttr[i].value + "ss");
                    new_th.innerHTML = table_Array[nowselectedIndex-1].th_s[i];
                    tr.appendChild(new_th);
                }
                new_table.appendChild(tr);
                table.appendChild(new_table);
                // for(var k=0;k<table_Array[index])
                tr = document.createElement("tr");
                // tr.id = "tr" + (count++);
                for (i = 0; i < table_Array[0].number; i++) {
                    new_th = document.createElement("td");
                    new_th.innerHTML = table_Array[nowselectedIndex].td_s[i];
                    tr.appendChild(new_th);
                }
                new_table.appendChild(tr);
                table.appendChild(new_table);
            } else if (nowselectedIndex === 1) {
                nowTable.remove(nowTable.selectedIndex);
                nowTable.options[0].selected = true;
                table.innerHTML = "";
                new_table.innerHTML = "";
            }
            // nowTable.removeChild(document.getElementById("option"+(nowselectedIndex-1)));
            //   if(nowselectedIndex>1){
            //       nowTable.options[1].selected = true;
            //   }else if(nowselectedIndex === 1){
            //       nowTable.options[0].selected = true;
            //   }
            // // table.removeChild(document.getElementById("new-table"));

        }
    }
}

function change() {
    var index = nowTable.selectedIndex;
    table.innerHTML = "";
    new_table.innerHTML = "";
    // table.innerHTML = "";
    // new_table = document.createElement("table");
    // new_table.id = "new-table";
    tr = document.createElement("tr");
    // alert(table_Array.length);
    for (i = 0; i < table_Array[index-1].number; i++) {
        new_th = document.createElement("th");
        // alert("ss" + inputAttr[i].value + "ss");
        // alert(table_Array[index-1].th_s[i]);
        new_th.innerHTML = table_Array[index-1].th_s[i];
        tr.appendChild(new_th);
    }
    new_table.appendChild(tr);
    table.appendChild(new_table);
    // for(var k=0;k<table_Array[index])
    tr = document.createElement("tr");
    tr.id = "tr" + (count++);
    for(j=0;j<table_Array[index-1].td_number;j++) {
        for (i = 0; i < table_Array[nowselectedIndex - 1].number; i++) {
            new_th = document.createElement("td");
            new_th.innerHTML = table_Array[index].td_s[i];
            tr.appendChild(new_th);
        }
        new_table.appendChild(tr);
    }
    // table_Array[nowselectedIndex-1].rows[rows.length] = inputAttr;
}