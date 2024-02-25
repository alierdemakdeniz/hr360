let emp = document.querySelector("#employee-open");
let arrow = document.getElementById("arrow");
let date = document.querySelector(".date-time");
let filterInput = document.querySelector("#search");
let list = document.getElementsByClassName("tbody-tr");
let td = document.getElementsByTagName("td");
let page1 = document.getElementById("page");
let pageNumbers=document.getElementById("page-numbers");
let numbers = document.getElementById("number");
let filterSelect = document.getElementById("filter");



document.querySelector(".date-time").textContent = dateTime();
document.addEventListener("DOMContentLoaded", function () {
    dateTime();
    pageLoaded();
    listFirst();
    console.log("sayfa yüklendi");
});
        
filterInput.addEventListener("keyup",filter);
filterSelect.addEventListener("change",filterSel);


function filterSel(){
    page1.style.display="none";
    numbers.style.display="none";
    
    let filterText = filterSelect.value.toLowerCase().trim();
    

    
    
    Array.from(list).forEach(function (filter) {
        if (filter.textContent.toLowerCase().trim().includes(filterText)) {
            filter.setAttribute("style", "display : table-row");
        } else {
            filter.setAttribute("style", "display : none");
            
        }
        if (filterText==="choose filter"){
            listFirst();

        }
            
        
        
    });


};
function pageOne(){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href ="javascript:void(0);";
    a.className="one btn";
    a.textContent = "1";
    a.setAttribute("onclick","first()");
    li.appendChild(a);
    pageNumbers.appendChild(li);
    page1.style.display="block";
    numbers.style.display="block";
}
function pageTwo(){
    pageOne();
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href ="javascript:void(0);";
    a.className="two btn";
    a.textContent = "2";
    a.setAttribute("onclick","second()");
    li.appendChild(a);
    pageNumbers.appendChild(li);
    page1.style.display="block";
    numbers.style.display="block";
    

}
function pageThree(){
    
    pageTwo();
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href ="javascript:void(0);";
    a.className="three btn";
    a.textContent = "3";
    a.setAttribute("onclick","third()");
    li.appendChild(a);
    pageNumbers.appendChild(li);
    page1.style.display="block";
    numbers.style.display="block";
    

}

function pageLoaded() {
    if (list.length <= 5) {
        pageOne();
    }
    if (list.length > 5 && list.length <= 10){
        pageTwo();
    }
    if (list.length > 10 && list.length <= 15){
        pageThree();
    }
    
}
function first() {
    for (let i = 0; i <= 4; i++) {
        list[i].style.display="table-row";
    }
    for (let i=5;i<=list.length-1 ;i++){
        list[i].style.display="none";
    }
    if (list.length < 5){
        page1.innerHTML="Showing 1 to "+list.length+ " of " + list.length;
    }else{
        page1.innerHTML="Showing 1 to 5 of " + list.length;
    }
    numbers.style.display="block";
}
function second() {
    
    for (let i = 0; i <= 4; i++) {
        list[i].style.display="none";
    }
    for (let i = 5; i <= 9; i++) {
        list[i].style.display="table-row";
    }
    for (let i = 10; i <= list.length -1; i++) {
        list[i].style.display="none";
        
    }
    if (list.length < 10){
        page1.innerHTML="Showing 6 to "+list.length+ " of " + list.length;
    }else{
        page1.innerHTML="Showing 6 to 10 of " + list.length;

    }

    numbers.style.display="block";
    

    
}
function third() {
    for (let i = 0; i <= 10; i++) {
        list[i].style.display="none";

    }

    for (let i = 10; i <= list.length -1 ; i++) {
        
        list[i].style.display="table-row";
    }
    if (list.length < 15){
        page1.innerHTML="Showing 11 to "+list.length+ " of " + list.length;
    }else{
        page1.innerHTML="Showing 11 to 15 of " + list.length;

    }

    numbers.style.display="block";
    
}
arrow.addEventListener("click", () => {
    if (emp.className === "close") {
        emp.setAttribute("style", "display : block ");
        emp.classList.remove("close");
        arrow.src = "icon/arrow-white.png";

        
    } else {
        emp.classList.add("close");
        emp.setAttribute("style", "display : none");
        arrow.src = "icon/arrow.png";
    }
});
function sortTable(columnIndex) {
    let table,rows,switching,i,x,y,shouldSwitch; 
    table = document.querySelector(".table");
    switching = true;
    page1.style.display="block";
    numbers.style.display="block";
    

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].querySelectorAll("td")[columnIndex];
            y = rows[i + 1].querySelectorAll("td")[columnIndex];
            if (columnIndex === 8 ){
                if(parseInt(y.innerHTML) > parseInt(x.innerHTML)){
                    shouldSwitch = true;
                break;
                }
            }
            else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()  ) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            first();
        }
    }

}
function filter(e) {
    page1.style.display="none";
    numbers.style.display="none";


    const filterValue = e.target.value.toLowerCase().trim();
    Array.from(list).forEach(function (filter) {
        if (filter.textContent.toLowerCase().trim().includes(filterValue)) {
            filter.setAttribute("style", "display : table-row");
        } else {
            filter.setAttribute("style", "display : none");
            
        }
        if (filterValue===""){
            listFirst();
        }
    });

}
function listFirst() {
    
    for (let i = 0; i <= 4; i++) {
        list[i].style.display="table-row";
    }
    
    for (i=5; i<=list.length-1;i++){
        list[i].style.display ="none";
        
    }
    if (list.length < 5){
        page1.innerHTML="Showing 1 to "+list.length+ " of " + list.length;
    }else {
        page1.innerHTML="Showing 1 to 5 of " + list.length;
}
    
    numbers.style.display="block";
    page1.style.display="block";


}
function dateTime() {
    let now = new Date();
    let day = now.getDate();
    let month = now.toLocaleDateString('en-US', {month: 'long'});
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    // İki basamaklı sayılar için sıfır eklemek
    day = day < 10
        ? '0' + day
        : day;
    hour = hour < 10
        ? '0' + hour
        : hour;
    minute = minute < 10
        ? '0' + minute
        : minute;
    let ampm = hour >= 12
        ? 'PM'
        : 'AM';
    hour = hour % 12;
    hour = hour
        ? hour
        : 12;
    let dateTimeString = day + ' ' + month + ',' + year + ' ' + hour + ':' +
            minute + ' ' + ampm;
    return dateTimeString;
}