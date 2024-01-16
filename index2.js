let main = document.querySelector("main");
let div = document.createElement("div");
div.classList = ("divboss")
let div2 = document.createElement("div")
div2.classList = ("left")
let div3 = document.createElement("div")
div3.classList = ("reight")


let ul1 = document.createElement("ul")
ul1.classList = ("ul1")
let ul2 = document.createElement("ul")
ul2.classList = ("ul1")
let ul3 = document.createElement("ul")
ul3.classList = ("ul2")
let ul4 = document.createElement("ul")
ul4.classList = ("ul4")
let ul5 = document.createElement("ul")
ul5.classList = ("ul5")

function video(img, imgitem, paragrif) {
    return `
        <li>
           <a href="#"> 
              <img src=${img} alt="rasm"/><br>
              <div class = "ahref">
              <img src=${imgitem} alt="rasm"/>
              <p>${paragrif}</p>
           </div>
           </a> 
       </li>

    `
}
function all(all) {
    return `
    <li>
    <a href="#">${all}</a>
    </li>
    
    `
}

function home(img, paragrif) {
    return `
        <li>
        <a href ="#">
            <img src=${img} alt="rasm"/>
        </a>
        <a href = "#">
        <p> ${paragrif}</p>
        </a>
        </li>

    `
}
function SUBRCRIPTIONS(subscrip, img2, paragrif1) {
    return `
          <li >
             <h4>${subscrip}</h4>
                 </li>
                 <li class= "subscrip" >
               <a href="#">
                   <img src=${img2} alt="rasm"/>
               </a>
               <a href ="#">
                   <p> ${paragrif1}</p>
               </a>    
          </li>

    `
}


let videoitem = [
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
    {img: "./img/content-video-thumbnail.png", imgitem: "./img/sub-photo.svg", paragrif:"Doğu Karadeniz Dağlarında <br> Bisikletle Geziyoruz #100"},
]
let allitem = [
    { all: "all" },
    { all: "Yatchs" },
    { all: "Boats" },
    { all: "RVs" },
    { all: "Electrical Engineering" },
    { all: "Photocopier" },
    { all: "Cookery" },
    { all: "Apple" },
    { all: "CSS" },
    { all: "Figma" },
    { all: "Astronomy " },
    { all: "React routers" },
]
let homeitem = [
    { img: "./img/Group.svg", paragrif: "Home" },
    { img: "./img/Group.svg", paragrif: "Trends" },
    { img: "./img/Group.svg", paragrif: "Subscriptions" },
    { img: "./img/Group.svg", paragrif: "Originals" }
]
let homeitem2 = [
    { img: "./img/library.svg", paragrif: "Library" },
    { img: "./img/library.svg", paragrif: "History" },
    { img: "./img/library.svg", paragrif: "Your videos" },
    { img: "./img/library.svg", paragrif: "Your movies" },
    { img: "./img/library.svg", paragrif: "Watch later" },
    { img: "./img/library.svg", paragrif: "Show more" },
]
let SUBRCRIPTIONSitem = [
    { subscrip: "SUBRCRIPTIONS", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
    { subscrip: "", img2: "./img/sub-photo.svg", paragrif1: "Adem Ilter" },
]

let videolist = videoitem.map(item => video(item.img, item.imgitem, item.paragrif))
let home1 = homeitem.map(item => home(item.img, item.paragrif))
let home2 = homeitem2.map(item => home(item.img, item.paragrif))
let SUBRCRIPTIONS1 = SUBRCRIPTIONSitem.map(item => SUBRCRIPTIONS(item.subscrip, item.img2, item.paragrif1))
let alllist = allitem.map(item => all(item.all))


ul1.innerHTML = home1;
ul2.innerHTML = home2;
ul3.innerHTML = SUBRCRIPTIONS1;
ul4.innerHTML = alllist;
ul5.innerHTML = videolist;


// console.log(div);
main.appendChild(div);
div.appendChild(div2)
div.appendChild(div3)
div2.appendChild(ul1)
div2.appendChild(ul2)
div2.appendChild(ul3)
div3.appendChild(ul4)
div3.appendChild(ul5)