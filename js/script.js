//console.log(document);

//let text=document.getElementById("text") ;
// console.log(text);

// text.innerText="Lorem Ippsum"

//text.innerHTML="<strong>Lorem ipsum</strong>"   html tagi taniyir

// let text=document.getElementsByClassName("text");
// console.log(text.length);

// let text=document.getElementsByTagName("p")
// console.log(text[0]);

// let text=document.querySelectorAll(".text ");
// let text=document.querySelector(".text");  //en birincini gosterir consoleda
// console.log(text);

// function lorem() {
//     alert ("elvin yaxsi oglandi") 
// }

// let btn=document.getElementById("btn") ;
// btn.onclick=function lorem(){
//     alert("lorem")
// }
// btn.onclick=function lorem(){    //setir mentiqi diye en sondaki yazdirir
//     alert("lorem second") 

//  }

//  btn.addEventListener("click",function(){
//      alert("btn add event list")
//  })

// let btn=document.getElementById("btn");
// let text=document.getElementById("text");
// btn.addEventListener("click",function(){
//     text.style.color="red";
//     text.style.backgroundColor="wheat";
// })

let bntAdd=document.getElementById("btnAdd");
let input=document.getElementById("input") ;
let list=document.getElementById("list") ;
let btnRemove=document.getElementById("btnRemove") ;
let fas=document.getElementById("fas");

bntAdd.addEventListener("click",function(){
    let value=input.value.trim();
    // console.log(value);
    if (value=="") {
        alert("doldur");
        return;
    };
    let li=document.createElement("li");
    let i=document.createElement("i");
    i.onclick=function(){
        li.remove();
    }

    i.classList.add("fas");
    i.classList.add("fa-trash-alt");
    i.setAttribute("id","fas");

    // li.onclick=function(){
    //     this.remove();
    // }

    // li.innerHTML =`<li class="list-group-item"> ${value}</li>`

    // li.className="list-group-item";
    li.classList.add("list-group-item") ;
    li.classList.add("test") ;
    // li.classList.remove("list-group-item") 
    li.innerText=value;
    list.appendChild(li) ;
    li.appendChild(i);
    input.value="";

})

let allLI=document.querySelector("#list");

btnRemove.addEventListener("click",function(){
    // list.innerHTML=""; //hamsi silir
    // list.lastChild.remove() //sonuncudan baslayir silmeye
    let allLI=list.children;
    for (const item of allLI) {
        item.remove();
    }
})