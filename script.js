let emp = document.querySelector("#employee-open");
let arrow = document.getElementById("arrow");
let date = document.querySelector(".date-time");
let filterInput = document.querySelector("#search");
let tableList = document.querySelectorAll(".tbody-tr")
let list = document.getElementsByClassName("tbody-tr");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let page1 = document.getElementById("first-page");
let page2 = document.getElementById("second-page");
let page3 = document.getElementById("third-page");
let numbers = document.getElementById("number");





document.querySelector(".date-time").textContent = dateTime();
document.addEventListener("DOMContentLoaded", function () {
    dateTime();
    listFirst();

});
filterInput.addEventListener("keyup",filter);
one.addEventListener("click",first);
two.addEventListener("click",second);
three.addEventListener("click",third);

function first(e) {
    
    listFirst();
    for (let i=5;i<=list.length-1 ;i++){
        list[i].style.display="none";
    }
    page1.style.display="flex";
    page2.style.display="none";
    page3.style.display="none";
    numbers.style.display="block";
    e.preventDefault();



    
}
function second(e) {
    
    for (let i = 0; i <= 4; i++) {
        list[i].style.display="none";
    }
    for (let i = 5; i <= 9; i++) {
        list[i].style.display="table-row";
    }
    for (let i = 10; i <= list.length -1; i++) {
        list[i].style.display="none";
    }
    page1.style.display="none";
    page2.style.display="flex";
    page3.style.display="none";
    e.preventDefault();

    
}
function third(e) {
    for (let i = 0; i <= 10; i++) {
        list[i].style.display="none";

    }

    for (let i = 10; i <= list.length -1 ; i++) {
        
        list[i].style.display="table-row";
    }
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="flex";
    e.preventDefault();

    
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
    var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch;
        
        
    table = document.querySelector(".table");
    switching = true;
    

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].querySelectorAll("td")[columnIndex];
            y = rows[i + 1].querySelectorAll("td")[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}
function filter(e) {
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    numbers.style.display="none"


    const filterValue = e.target.value.toLowerCase().trim();
    tableList.forEach(function (filter) {
        if (filter.textContent.toLocaleLowerCase().trim().includes(filterValue)) {
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
    let dateTimeString = day + ' ' + month + '.' + year + ' ' + hour + ':' +
            minute + ' ' + ampm;
    return dateTimeString;
}

