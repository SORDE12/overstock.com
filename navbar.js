const nav = document.getElementById('nav4');
nav.onmouseover=()=>{
    const dropdown= document.getElementById('dropdown-content-main');
    dropdown.style="display=block"
}
nav.onmouseout=()=>{
    const dropdown= document.getElementById('dropdown-content-main');
    dropdown.style="display=none"
}