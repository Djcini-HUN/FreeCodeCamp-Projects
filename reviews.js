const reviews = [
    {
        id:1,
        names:"Czinkóczi Ákos",
        job:"Web Developer",
        img:"./images/Áki.webp",
        info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nostrum laborum magnam modi iste odit consectetur est aspernatur blanditiis aliquid voluptate natus eos non hic aut earum sequi quos corrupti.",
    },
    {
        id:2,
        names:"Mészáros Anna",
        job:"Midwife",
        img:"./images/Anna.webp",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam quae, blanditiis adipisci tempore commodi rerum veniam voluptate neque voluptatibus facilis qui laudantium itaque, harum minima quaerat a. Officiis, quibusdam!",
    },
    {
        id:3,
        names:"Lengyel Bálint",
        job:"C# Developer",
        img:"./images/Bálint.webp",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veniam temporibus deleniti voluptatum nulla doloribus dicta ad? Sint placeat iusto suscipit modi aut incidunt necessitatibus? Deserunt quo eligendi suscipit odio!",
    },
    {
        id:4,
        names:"Veress Krisztián",
        job:"Web Developer",
        img:"./images/Krisztián.webp",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam voluptatem vel quos alias expedita hic commodi, dicta porro libero, soluta odio ex! Dicta, maxime cum? Enim culpa eos quas.",
    },
    {
        id:5,
        names:"Czinkóczi Ivett",
        job:"Tattooing",
        img:"./images/Ivett.webp",
        info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iure nobis veniam laudantium quisquam excepturi, maxime exercitationem reiciendis odit, similique cumque quasi repudiandae, quidem architecto perferendis consectetur blanditiis incidunt repellat.",
    }
];

const img = document.getElementById("img");
const names = document.getElementById("names");
const job = document.getElementById("job");
const info = document.getElementById("info");

const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    names.textContent= item.names;
    job.textContent= item.job;
    info.textContent= item.info;
}

forward.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
backward.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})
