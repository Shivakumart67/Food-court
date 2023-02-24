const input = document.querySelector("#donation-input input");
const btn = document.querySelector("#donation-input button");
const alertmsg = document.getElementById("alert-msg");
const supportbtn = document.querySelector("#Support-btn button");
const remove = document.getElementById("donation-input");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const iv = input.value;
  if (iv === "") {
    alert("Please Donate for Authors");
  } else {
    // alert(`Thank You for Donated the amount of ${iv}`);
    alertmsg.innerHTML = `Thank You for Donated the amount of    <i class="fa-solid fa-indian-rupee-sign"> </i>  ${iv} `;
    alertmsg.style.visibility = "visible";
    setTimeout(() => {
      remove.reset();
    }, 200);

    setTimeout(function () {
      alertmsg.style.visibility = "hidden";
    }, 2000);
    setTimeout(() => {
      remove.style.display = "none";
    }, 3000);
  }
});

supportbtn.addEventListener("click", function (e) {
  remove.style.display = "flex";
});
const table = document.querySelector("table");
let selected;
table.addEventListener("click", function (e) {
  e.preventDefault();
  const close = e.target.closest("tr");

  if (e.target.tagName === "TH") {
    return;
  }
  // close.setAttribute("class" , "active");
  // close.className = "active";
  if (selected != undefined) {
    selected.classList.remove("active");
  }
 
  close.classList.toggle("active");
  if(selected === close ){
    close.classList.toggle("active");
  }

 
  selected = close;
});
