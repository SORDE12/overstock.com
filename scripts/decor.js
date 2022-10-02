const popular = [
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Outdoor_Decor.jpg",
    title:"Outdoor Decor",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_2.jpg",
    title:"Mirrors",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Window_Treatments.jpg",
    title:"Window Treatments",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Wall_Art.jpg",
    title:"Wall Art",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Throw_Pillows.jpg",
    title:"Throw Pillows",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_6.jpg",
    title:"Wall Decor",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Decorative_Accessories.jpg",
    title:"Decorative Accessories",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Accent_Pieces.jpg",
    title:"Accent Pieces",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Lighting.jpg",
    title:"Lighting",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Rugs.jpg",
    title:"Rugs",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Slipcovers_Furniture_Covers.jpg",
    title:"Slipcovers & Furniture Covers",
 },
 {
    image:"https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_DECOR_PopCat_Planters_Hangers_Stands.jpg",
    title:"Planters, Hangers & Stands",
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



const shopMore = [
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular1.jpg',
        title:'Ceiling Lights'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular2.jpg',
        title:'Lamps'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular3.jpg',
        title:'Flush Mounts'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular4.jpg',
        title:'Wall Lights'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular5.jpg',
        title:'Ceiling Fans'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular6.jpg',
        title:'Blinds & Shades'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular7.jpg',
        title:'Curtain Rods & Hardware'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular8.jpg',
        title:'Clocks'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular9.jpg',
        title:'Decorative Shelves'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular10.jpg',
        title:'Silk Plants'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular11.jpg',
        title:'Vases'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular12.jpg',
        title:'Picture Frames & Albums'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular13.jpg',
        title:'Doormats'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular14.jpg',
        title:'Canvas Art'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular15.jpg',
        title:'Prints'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular16.jpg',
        title:'Fire Pits & Chimineas'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular17.jpg',
        title:'Planters, Hangers, & Stands'
    },
    {
        image:'https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg',
        title:'Shop All Home Decor'
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




























