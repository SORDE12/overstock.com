const popularS=[
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX1_3x5-480x480_2.png',
        title:"4' x 6'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX2_4x6-480x480_2.png',
        title:"5' x 8'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX3_5x8-480x480_2.png',
        title:"3' x 5' Area Rugs"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX4_6x9-480x480_2.png',
        title:"6' x 9'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX5_7x9-480x480_2.png',
        title:"7' x 9'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX6_8x10-480x480_2.png',
        title:"8' x 10'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX7_9x12-480x480_2.png',
        title:"9' x 12'"
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX8_10x14-480x480_2.png',
        title:"10' x 14'"
    }    
]

const append = (popularS) => {    
    const container = document.getElementById('container');
    popularS.forEach((el) => {
        const div = document.createElement('div');
        const images = document.createElement('img');
        images.src = el.image;
        const p = document.createElement('p');
        p.innerText = el.title
        div.append(images, p)
        container.append(div)
    })
}
append(popularS)

const popularC=[
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA1_Blue_Rugs-336x336_2.png',
        title:'Blue Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA2_Grey_Rugs-336x336_2.png',
        title:'Grey Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA3_Ivory_Rugs-336x336_2.png',
        title:'Ivory Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA4_Red_Rugs-336x336_2.png',
        title:'Red Rugs'
    }
]

const append2 = (popularC) => {    
    const container = document.getElementById('container2');
    popularC.forEach((el) => {
        const div = document.createElement('div');
        const images = document.createElement('img');
        images.src = el.image;
        const p = document.createElement('p');
        p.innerText = el.title
        div.append(images, p)
        container.append(div)
    })
}
append2(popularC)

const popularSt=[
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB1_Bohemian-Eclectic-lifestyle-336x336.png',
        title:'Bohemian & Eclectic Area Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB2_Modern-Contemporary-lifestyle-336x336.png',
        title:'Modern & Contemporary Area Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB3_Vintage-336x336.png',
        title:'Vintage Area Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB4_Shag-336x336.png',
        title:'Shag Area Rugs'
    }
]

const append3 = (popularSt) => {    
    const container = document.getElementById('container3');
    popularSt.forEach((el) => {
        const div = document.createElement('div');
        const images = document.createElement('img');
        images.src = el.image;
        const p = document.createElement('p');
        p.innerText = el.title
        div.append(images, p)
        container.append(div)
    })
}
append3(popularSt)

const shopMore=[
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER1_Area-rugs-267x267.png',
        title:'Area Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER2_Rug-Pads-267x267.png',
        title:'Rug Pads'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER3_Shag-rugs-267x267.png',
        title:'Shag Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER4_Kitchen-rugs-mats-267x267.png',
        title:'Kitchen Rugs & Mats'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular4.jpg',
        title:'Stair Treads'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER6_One-of-a-kind-267x267.png',
        title:'One of a Kind Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER7_Machine-Washable-267x267.png',
        title:'Machine Washable'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular7.jpg',
        title:'Handmade Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular8.jpg',
        title:'Flat Weave Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER10_Outdoor-rugs-267x267.png',
        title:'Outdoor Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER11_Runner-rugs-267x267.png',
        title:'Runner Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER12_Kids-tween-rugs-267x267.png',
        title:'Kids & Tween Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular12.jpg',
        title:'Door Mats'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER14_Bath-mats-rugs-267x267.png',
        title:'Bath Mats & Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER15_Persian-rugs-267x267.png',
        title:'Persian Rugs'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER16_Shop-new-arrivals-267x267.png',
        title:'Shop New Arrivals'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER17_Sales-267x267.png',
        title:'Shop All Rugs on Sale'
    }
]

const append4 = (shopMore) => {
    const container = document.getElementById('container4');
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
append4(shopMore)
