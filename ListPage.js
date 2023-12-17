const nav = document.querySelector('nav');
nav.classList.remove('active');
window.addEventListener('scroll', fixNav);

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 5) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}

const searchBar = document.getElementById("bar");
searchBar.addEventListener("keyup", search);

function search(){
    var filter, table, tr, td, i, txtValue;
    filter = searchBar.value.toUpperCase();
    table = document.getElementById("listTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

const test = document.querySelector('.search');
const input = document.querySelector('.bar');
const btn = document.querySelector('.btn');

btn.addEventListener('click', expandSearch);
function expandSearch(){
    test.classList.toggle('active');
}