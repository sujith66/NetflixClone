const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

const selectItem = e => {
  this.classList.add("tab-border");
};

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
