let $ = document;

const inptElm1 = $.getElementById("title");
const inptElm2 = $.getElementById("author");
const inptElm3 = $.getElementById("date");
const addBtn = $.getElementById("addBook");
const list = $.querySelector("tbody");
const notif = $.getElementById("notification");
let listArr = [];
addBtn.onclick = function () {
  if (inptElm1.value && inptElm2.value && inptElm3.value) {
    let newObj = {
      id: listArr.length + 1,
      title: inptElm1.value,
      author: inptElm2.value,
      date: inptElm3.value,
    };
    listArr.push(newObj);
    let l = listArr.length - 1;
    createTrHanler(l);
    // opt input
    inptElm1.value = "";
    inptElm2.value = "";
    inptElm3.value = "";
  } else {
    setInterval(() => {
      notif.classList.add("animate-jump-out");
    }, 5000);
    notif.style.display = "flex";
    notif.classList.add("animate-fade-right");
  }
};

function createTrHanler(l) {
  if ($.getElementById("no")) {
    $.getElementById("no").remove();
  }
  const tr = $.createElement("tr");
  tr.className = "bg-white border-b ";
  const td1 = $.createElement("td");
  const td2 = $.createElement("td");
  const td3 = $.createElement("td");
  td1.className = "py-4 px-6";
  td2.className = "py-4 px-6";
  td3.className = "py-4 px-6";
  td1.innerHTML = listArr[l].title;
  td2.innerHTML = listArr[l].author;
  td3.innerHTML = listArr[l].date;
  tr.append(td1, td2, td3);
  list.append(tr);
  localStorage.setItem("list", JSON.stringify(listArr));
}
window.onload = () => {
  if (localStorage.getItem("list")) {
    listArr = JSON.parse(localStorage.getItem("list"));
    for (let i = 0; i < listArr.length; i++) {
      let l = i;
      createTrHanler(l);
    }
  }
};
