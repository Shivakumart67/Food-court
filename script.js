const inputfood = document.getElementById("input-name");
const inputbtn = document.getElementById("btn");
const foodcontainer = document.getElementById("food-container");

// count = false;
inputbtn.addEventListener("click", () => {
  if (inputfood.value == "") {
    var conf = confirm("Please Enter a food Name..");
  }
  //   foodcontainer.innerHTML = `<li class = "food-items">${inputfood.value}</li>`;
  if (conf) {
    inputfood.focus();
  } else {
    inputfood.focus();
  }
  if (inputfood.value != "") {
    foodlist(inputfood.value);
    newdom("Hey The food is Added !...");
  }
  // if (count === false){
  //  newdom("Hey The food is Added !...");
  // }
  // count = true;
  refreshui();
  let set = setTimeout(() => {
    const shiva = document.getElementById("alert");
    shiva.remove();
  }, 1000);
});

function newdom(message) {
  const main = document.getElementById("main");
  const div = document.createElement("div");
  div.id = "alert";
  const str = document.createElement("strong");
  div.append(str);
  const sttext = document.createTextNode(" Sucessfully! ");
  const strong = str.append(sttext);
  const textnode = document.createTextNode(message);
  div.append(textnode);
  main.prepend(div);
}

function foodlist(value) {
  //   <li class="food-items">
  //   Sambar
  //  <div onclick="removelist(event)">
  //   <button  class="xbtn">
  //     x</button>
  //  </div>
  // </li>
  const ul = document.getElementById("food-container");

  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.setAttribute("onclick", "removelist(event)");
  li.className = "food-items";
  btn.className = "xbtn";
  const foodname = document.createTextNode(value);
  const btntext = document.createTextNode("x");
  btn.append(btntext);
  li.append(foodname);
  li.append(btn);
  ul.append(li);
  // onclick="removelist(event)"
}

function removelist(event) {
  const rem = event.target.parentNode;
  console.log(event.target.parentNode);
  rem.remove();
  refreshui();

}

// console.time("Time");
// for(var i = 1; i <= 1000; i++){
//     const m = document.getElementById("food-container");
//     const l = document.createElement("li");
//     l.className = "food-items";
//     const t = document.createTextNode("Food Item : "+ i);
//     l.append(t);
//     m.append(l);

// }
// console.timeEnd("Time");

// console.time("ftime");

// const docfrag = document.createDocumentFragment();
// const mf = document.getElementById("food-container");

// for(var i = 1; i <= 1000;  i++){
//     const lif = document.createElement("li");
//     lif.className = "food-items";
//     const tf = document.createTextNode(" Extra Food Items : " + i);
//     lif.append(tf);
//     docfrag.append(lif);
// }
// mf.append(docfrag);
// console.timeEnd("ftime");

const ncont = document.getElementById("next-container");
const nbtn = document.querySelector("#next-container ~ button");
// nbtn.style.color = "red";
// const v = ncont.style.visibility;
// console.log(v);
ncont.style.visibility = "visible";
const v = ncont.style.visibility;
nbtn.addEventListener("click", () => {
  const v = ncont.style.visibility;

  if (v === "visible") {
    ncont.style.visibility = "hidden";
    nbtn.style.cssText = "color: black; background-color: gray;";
    nbtn.innerText = "Click To Add";
  } else {
    if (nbtn.style.color === "black") {
      ncont.style.visibility = "visible";
      nbtn.style.color = "white";
      nbtn.style.cssText = " background-color: navy; color: white;";
      nbtn.innerText = "Remove";
    }
  }
});

const reset = document.getElementById("reset");
const alllist = document.getElementById("food-container");
reset.addEventListener("click", () => {
  alllist.innerHTML = "";
  refreshui();

});

const ti = document.getElementById("terms-input");
const tc = document.querySelector("#terms-check");
const tb = document.getElementById("terms-btn");
// console.log(ti)
// console.log(tc)
// console.log(tb)

// tc.setAttribute("checked", "");

// tc.addEventListener('click', ()=>{
//   // tc.setAttribute("checked", "");
//   // console.log(tc.hasAttribute("checked"));
//   console.log(tc.classList.toggle("checked"));
//   console.log(tc.hasAttribute("checked"));

// })
console.log(typeof tc.nextSibling);


tb.addEventListener("click", function (event){
  event.preventDefault();
  if (!tc.checked) {
    alert("Please Accept the terms and conditions");
    tc.nextSibling.style = "color: red";
    
  } 
  
  else if(ti.value === ""){
    alert("Please Enter Your Name");
    // ti.style.cssText = "border: 2px solid red";
  }
  else {
    alert("Your form is Submitted");
  }
  // console.log(ti.value);
});
document.addEventListener('keyup', (e)=>{
  if (e.key === "Enter"){
    if (inputfood.value == "") {
      var conf = confirm("Please Enter a food Name..");
    }
    //   foodcontainer.innerHTML = `<li class = "food-items">${inputfood.value}</li>`;
    if (conf) {
      inputfood.focus();
    } else {
      inputfood.focus();
    }
    if (inputfood.value != "") {
      foodlist(inputfood.value);
      newdom("Hey The food is Added !...");
    
    }
  refreshui();
    
    // if (count === false){
    //  newdom("Hey The food is Added !...");
    // }
    // count = true;
     
    let set = setTimeout(() => {
      const shiva = document.getElementById("alert");
      shiva.remove();
    }, 1000);
  }
})
const count = document.getElementById("count");
const image = document.getElementById("image");
function refreshui(){
if (foodcontainer.children.length > 0){
    image.hidden = true;
    count.innerText =  `You have ${foodcontainer.children.length} foods`;
}
else{
  image.hidden = false;
  count.innerText =  "";

}
}