const table = [];

document.querySelector("#valid").addEventListener("click", function (){
    table.push(document.querySelector("#input").value)
    if (table.length >= 5){
        document.querySelector("#valueFive").innerHTML = table[4];
    }
    if (table.length >= 10) {
        document.querySelector("#content").innerHTML = table.join(", ");
    }
})

document.querySelector("#aleaButton").addEventListener("click", function (){
    if (table.length >= 1){
        document.querySelector("#aleaDiv").innerHTML = table[Math.floor(Math.random() *table.length)];
    }
})

document.querySelector("#displayAllButton").addEventListener("click", function (){
    document.querySelector("#displayAllDiv").innerHTML = table.join(", ");
})

document.querySelector("#deleteLast").addEventListener("click",function (){
    table.pop()
    if (table.length <= 4) {
        document.querySelector("#valueFive").innerHTML = "";
    }
    if (document.querySelector("#content").innerHTML !== "") {
        document.querySelector("#content").innerHTML = table.join(", ");
    }
    if (document.querySelector("#displayAllDiv").innerHTML !== "") {
        document.querySelector("#displayAllDiv").innerHTML = table.join(", ");
    }
})

document.querySelector("#deleteAll").addEventListener("click",function (){
    table.splice(0, table.length)
    document.querySelector("#valueFive").innerHTML = "";
    document.querySelector("#content").innerHTML = "";
    document.querySelector("#displayAllDiv").innerHTML = "";
})