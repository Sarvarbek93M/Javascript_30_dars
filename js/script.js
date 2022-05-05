/* -=> Darsga Topshiriq

1) Inputni to'ldirgandan so'ng va "Tasdiqlash" tugmachasini bosgandan so'ng -
ro'yxatga yangi yangilik qo'shilish kerak. Sahifa qayta yuklanmasligi kerak.
Yangi yangilik news massivga qo'shilishi kerak.
Input qiymatini olish uchun biz uni input.value dan foydalanamiz;
P.S. Muammoni hal qilish uchun bir nechta variantlar mavjud, faqat ishlidgoni kerak

2) Agar yangilikni nomi 21 belgidan ko'p bo'lsa - uni kesib oling va uchta nuqta qo'shing

3) Axlat qutisini bosganingizda - yangilik ro'yxatdan o'chirilishi kerak (qiyin)

4) Agarda inputda checkboxda beligisi belgilangan bo'lsa "Is it favourite?" 
consolega "sevimli yangilik qo'shilmoqda"

5) Filmlar alfabit bo'yicha tartiblangan bo'lishi kerak*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const newgenre = document.querySelector(".promo__genre"),
    btn = document.querySelector(".promo__btn"),
    bg = document.querySelector(".promo__bg"),
    listNews = document.querySelector(".promo__interactive-list"),
    addform = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    checkbox = addform.querySelector("[type='checkbox']");

  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArr = (arr) => {
    arr.sort();
  };

  addform.addEventListener("submit", (event) => {
    event.preventDefault();

    let newfilm = addInput.value;
    const favourite = checkbox.checked;

    if (newfilm) {
      if (newfilm.length > 15) {
        newfilm = `${newfilm.substring(0, 15)}....`;
      }
      if (favourite) {
        console.log("sevimli yangiliklar");
      }
      news.push(newfilm);
      sortArr(news);
      createNewList(news, listNews);
    }
    addInput.value = "";
  });

  btn.remove();

  newgenre.textContent = "UZNEWSS";

  bg.style.backgroundImage = "url(./img/2.jpg)";

  function createNewList(newsList, parent) {
    parent.innerHTML = "";
    sortArr(newsList);
    newsList.forEach((itemNews, index) => {
      parent.innerHTML += `
  <li class="promo__interactive-item">
    ${index + 1} ${itemNews}
  <div class="delete"></div>
  </li>
  `;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1);
        createNewList(newsList, parent);
      });
    });
  }

  createNewList(news, listNews);
});
