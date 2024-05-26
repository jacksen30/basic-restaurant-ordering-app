import { menuArray } from './data.js';

const orderingMenu = document.getElementById('ordering-menu-wrapper');

let menuHtml =  menuArray.map(menuItem => `<div class="menu-item-wrapper">
<div class="menu-item-col">
    <p class="menu-item-emoji">${menuItem.emoji}</p>
</div>
<div class="menu-item-col">
    <h2 class="menu-item-heading">${menuItem.name}</h2>
    <h3 class="menu-item-sub-heading">${menuItem.ingredients}</h3>
    <p class="menu-item-price">$ ${menuItem.price}</p>
</div>
<div class="menu-item-col btn-add-to-cart-wrapper">
    <button class="btn-add-to-cart">+</button>
</div>
</div>`).join(' ');


orderingMenu.innerHTML = menuHtml;



{/* <div class="menu-item-wrapper">
    <div class="menu-item-col">
        <p class="emoji-img"></p>
    </div>
    <div class="menu-item-col">
        <div>${menuItem.name}</div>
        <div>${menuItem.ingredients}</div>
        <div>${menuItem.price}</div>
    </div>
</div> */}

{/* <div>${menuItem.name}</div><div>${menuItem.ingredients}</div><div>${menuItem.emoji}</div><div>${menuItem.price}</div> */}