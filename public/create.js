let $ = document;

let createTlBtn = $.getElementById("createTlBtn");
let closeModalBtn = $.getElementById("closeModalBtn");
let closeModal = $.getElementById("closeModal");
let createTlModal = $.getElementById("createTlModal");
let title = $.getElementById("Title");
let category = $.getElementById("category");
let startDate = $.getElementById("start-date");
let endDate = $.getElementById("end-date");
let description = $.getElementById("description");
let headerTitle = $.getElementById("header-tit");
let deslenght = $.getElementById("deslenght");
let tagContainer = $.getElementById("tagcontainer");
let tagPar = $.getElementById("tagPar");
let addTagBtn = $.getElementById("add-tag-btn");
let max = description.getAttribute("maxlength");
let tagInp = document.getElementById("tagInp");

const close = (elem) => {
  elem.style.display = "none";
};
const saveTimelinToDB = () => {
  if (title.value && startDate.value && endDate.value) {
    headerTitle.value = title.value;
    close(createTlModal);
  } else {
    alert("Please Enter All Information Completely.");
  }
};
const calcutDesLenght = (e) => {
  let finalVal = max - description.value.length;

  if (finalVal < 100 && finalVal >= 50) {
    deslenght.style.color = "yellow";
  } else if (finalVal < 50 && finalVal > 0) {
    deslenght.style.color = "orange";
  } else if (finalVal === 0) {
    deslenght.style.color = "red";
  } else {
    deslenght.style.color = "#05df72";
  }
  deslenght.innerText = `${finalVal} Characters Remaining`;
};
const addTag = () => {
  tagInp.style.display = "block";
  addTagBtn.style.display = "none";
};
const finalAddTag = (e) => {
  if (e.key === "Enter") {
    if (tagContainer.children.length < 4) {
      tagContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="text-blue-500 px-1 py-1 rounded-md">#${
          document.getElementById("tagInp").value
        }</div>`
      );
      document.getElementById("tagInp").style.display = "none";
      addTagBtn.style.display = "flex";
      tagInp.value = "";
    } else {
      alert("You cant add more 4 tags");
      document.getElementById("tagInp").style.display = "none";
      addTagBtn.style.display = "flex";
      tagInp.value = "";
    }
  }
};
addTagBtn.addEventListener("click", addTag);
createTlBtn.addEventListener("click", () => saveTimelinToDB());
closeModalBtn.addEventListener("click", () => close(createTlModal));
closeModal.addEventListener("click", () => close(createTlModal));
description.addEventListener("keyup", () => calcutDesLenght(event));
