function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const numImgCarousel = 4;

const managerCarousel = () => {
  let imgCarousel = 1;

  const getImgCarousel = () => imgCarousel;

  const nextImageCarousel = () => {
    if (imgCarousel < numImgCarousel) {
      imgCarousel = imgCarousel + 1;
    } else if (imgCarousel >= numImgCarousel) {
      imgCarousel = 1;
    }
  };

  const prevImageCarousel = () => {
    if (imgCarousel > 1) {
      imgCarousel = imgCarousel - 1;
    } else if (imgCarousel <= 1) {
      imgCarousel = numImgCarousel;
    }
  };

  const isActiveItem = (idItem) => (imgCarousel === idItem ? "active" : "");

  return {
    nextImageCarousel,
    getImgCarousel,
    isActiveItem,
    prevImageCarousel,
  };
};

const updateStyleCarouselItem = (currtenImg, idImgCoursel) => {
  return currtenImg === idImgCoursel
    ? "carousel-item figure-carousel "
    : "carousel-item figure-carousel-hidden";
};

const handleClickArrowsCarousel = (direction) => {
  switch (direction) {
    case "prev":
      carousel.prevImageCarousel();
      break;
    case "next":
      carousel.nextImageCarousel();
      break;
    default:
      break;
  }

  updateCarousel(carousel.getImgCarousel());
};

const carousel = managerCarousel();
const FrontendCoursel = document.getElementById("FrontendCoursel");
const BackendCoursel = document.getElementById("BackendCoursel");
const AboutMeCoursel = document.getElementById("AboutMeCoursel");
const InfrastructCoursel = document.getElementById("InfrastructCoursel");

const updateCarousel = (currtenImg) => {
  AboutMeCoursel.className = updateStyleCarouselItem(currtenImg, 1);
  FrontendCoursel.className = updateStyleCarouselItem(currtenImg, 2);
  BackendCoursel.className = updateStyleCarouselItem(currtenImg, 3);
  InfrastructCoursel.className = updateStyleCarouselItem(currtenImg, 4);
};

updateCarousel(carousel.getImgCarousel());

// setInterval(() => {
//     carousel.nextImageCarousel();
//     updateCarousel(carousel.getImgCarousel());
// }, 10000);

