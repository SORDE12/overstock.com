import {header,navbar,less_deal} from "./components/navbar.js";

const head_div = document.getElementById('header');
head_div.innerHTML=header()

const nav_div = document.getElementById('nav');
nav_div.innerHTML=navbar()

const lessdeal = document.getElementById('less_deals');
lessdeal.innerHTML=less_deal()