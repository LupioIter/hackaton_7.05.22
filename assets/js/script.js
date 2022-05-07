$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu,.header__social,.header').toggleClass('active');
    $('.body').toggleClass('lock');
  });
});

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
  });
});


//анимация для изображений в блоке "О проекте"
let images = new Array();
let i = 0;

images[0] = './assets/images/about/arborist.png';
images[1] = './assets/images/about/artist.png';
images[2] = './assets/images/about/spaceman.png';
images[3] = './assets/images/about/vrdesigner.png';
images[4] = './assets/images/about/history.png';

function viewImages() {
  document.querySelector(".about-photo").src = images[i];
  i++;
  if (i == images.length) {
    i = 0;
  }
  setTimeout("viewImages()", 5000);
}
viewImages();


// названия профессий
let jobName = new Array();
let t = 0;

jobName[0] = `Стань АРБОРИСТОМ`;
jobName[1] = `Стань ХУДОЖНИКОМ`;
jobName[2] = `Стань КОСМОНАВТОМ`;
jobName[3] = `Стань VR-ДИЗАЙНЕРОМ`;
jobName[4] = `Стань ИСТОРИКОМ`;

function viewJobName() {
  document.querySelector(".about__typing").innerHTML = jobName[t];
  t++;
  if (t == jobName.length) {
    t = 0;
  }
  setTimeout("viewJobName()", 5000);
}
viewJobName();



//анимация для отзывов
//картинки
let reviewImages = new Array();
let j = 0;

reviewImages[0] = './assets/images/reviews/05-boy.svg';
reviewImages[1] = './assets/images/reviews/14-boy.svg';
reviewImages[2] = './assets/images/reviews/04-girl.svg';

function viewReviewImages() {
  document.querySelector(".foto_reviews").src = reviewImages[j];
  j++;
  if (j == reviewImages.length) {
    j = 0;
  }
  setTimeout("viewReviewImages()", 5000);
}
viewReviewImages();

// имена
let reviewName = new Array();
let m = 0;

reviewName[0] = `Дима`;
reviewName[1] = `Лука`;
reviewName[2] = `Агата`;

function viewReviewName() {
  document.querySelector(".name_reviews").innerHTML = reviewName[m];
  m++;
  if (m == reviewName.length) {
    m = 0;
  }
  setTimeout("viewReviewName()", 5000);
}
viewReviewName();


// текст
let reviewText = new Array();
let k = 0;

reviewText[0] = `Эта поездка показала мне, какое безграничное количество возможностей у меня есть и
как разнообразен мир. Поиск себя - сложный процесс, но ничто так не помагет как
вдохновение людьми, посвятившими себя делу своей жизни! Теперь мне не так страшно
искать и пробовать новое!`;
reviewText[1] = `Честно говоря, я думал, что кроме веселья и воспоминаний я ничего особенного не
получу от этого проекта. Мне казалось, что я и так довольно прагматично и
рационально выбрал для себя профессию... Но когда мы приехали в студию анимации... Я
никогда не ощущал такого восторга от того, что люди делают! Теперь я всерьез
задумываюсь над поступлением в школу анимации.`;
reviewText[2] = ` В школе мне всегда не хватало практики. Сидишь за партой, но не имеешь
представления, что там, в мире. Мне всегда хотелось делать что-то значимое, что-то
создавать, помогать миру, но на ум ничего не приходило... Тогда меня позвали друзья
на проект и во время путешествия я открыла для себя эко-организации, которые
занимаются восстановлением морской среды обитания животных!`;

function viewReviewText() {
  document.querySelector(".review").innerHTML = reviewText[k];
  k++;
  if (k == reviewText.length) {
    k = 0;
  }
  setTimeout("viewReviewText()", 5000);
}
viewReviewText();