const popular = [
    {
        image: "https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Patio_Furniture.jpg",
        title: 'Patio Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Living_Room_Furniture.jpg',
        title: 'Living Room Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Small_Space_Furniture.jpg',
        title: 'Dining Room Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Bedroom_Furniture.jpg',
        title: 'Bedroom Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Mattresses.jpg',
        title: 'Mattresses',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Home_Office_Furniture.jpg',
        title: 'Home Office Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Small_Space_Furniture.jpg',
        title: 'Small Space Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Kitchen_Furniture.jpg',
        title: 'Kitchen Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Entryway_Furniture.jpg',
        title: 'Entryway Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Bathroom_Furniture.jpg',
        title: 'Bathroom Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_11.jpg',
        title: 'Recreation Room Furniture',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_FURNI_PopCat_Kids_Room.jpg',
        title: 'Kids & Toddler Room Furniture',
    }

]
const append = (popular) => {
    const container = document.getElementById('container');
    popular.forEach((el) => {
        const div = document.createElement('div');
        const images = document.createElement('img');
        images.src = el.image;
        const p = document.createElement('p');
        p.innerText = el.title
        div.append(images, p)
        container.append(div)
    })
}
append(popular)

const shopFur = [
    {
        title: 'Barstools',
        price: 'under $80'
    },
    {
        title: 'Coffee & Accent Tables',
        price: 'under $100'
    },
    {
        title: 'Beds',
        price: 'under $300'
    },
    {
        title: 'Accent Chair',
        price: 'under $150'
    },
]

const append2 = (shopFur) => {
    const container = document.getElementById('cont');
    shopFur.forEach((el) => {
        const div = document.createElement('div');
        const head = document.createElement('p');
        head.innerText = el.title
        const price = document.createElement('h1');
        price.innerText = el.price
        div.append(head, price)
        container.append(div)
    })
}
append2(shopFur)

const shopMore = [
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular1.jpg',
        title: 'Sofas & Couches',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg',
        title: 'Sectional Sofas',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg',
        title: 'Living Room Sets',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg',
        title: 'Accent Tables',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg',
        title: 'Loveseats',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular6.jpg',
        title: 'Accent Chairs',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg',
        title: 'Dining Sets',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg',
        title: 'Dining Tables',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg',
        title: 'Dining Chairs',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg',
        title: 'Buffets',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg',
        title: 'Bar Stools',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg',
        title: 'Beds',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg',
        title: 'Bedroom Sets',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg',
        title: 'Headboards',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg',
        title: 'Chests & Dressers',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg',
        title: 'Nightstands',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg',
        title: 'Kids & Toddler Beds',
    },
    {
        image: 'https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg',
        title: 'Shop All Furniture on Sale',
    }
]

const append3 = (shopMore) => {
    const container = document.getElementById('container2');
    shopMore.forEach((el) => {
        const div = document.createElement('div');
        const images = document.createElement('img');
        images.src = el.image;
        const p = document.createElement('p');
        p.innerText = el.title
        div.append(images, p)
        container.append(div)
    })
}
append3(shopMore)




























