//==== horizontal scroll ====/
const scrollContainer = document.querySelector("#scroll-h");
const itemScroll = document.querySelector("#scroll-h ul").cloneNode(true);

scrollContainer.appendChild(itemScroll);

//==== tab berita ====//
const tabBerita = document.querySelectorAll("#berita ul#tab li");
const fotoBerita = document.querySelectorAll("ul#artikel li #foto");
const videoBerita = document.querySelectorAll("ul#artikel li #video");

tabBerita.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // remove active
    tabBerita.forEach((item) => {
      item.classList.remove("active");
    });

    // active foto & video
    tab.classList.add("active");
    fotoBerita.forEach((foto) => {
      videoBerita.forEach((video) => {
        if (index == 1) {
          foto.classList.remove("d-none");
          video.classList.add("d-none");
        } else if (index == 2) {
          foto.classList.add("d-none");
          video.classList.remove("d-none");
        } else {
          foto.classList.add("d-none");
          video.classList.add("d-none");
        }
      });
    });
  });
});

//==== galeri ====//
const carousel = document.querySelectorAll(".carousel-item");
const galeri = document.querySelectorAll("#second-galeri li");
let activeGaleri;

const getActiveCarousel = (ref) => {
  carousel.forEach((item, index) => {
    if (item.classList.contains("active")) {
      ref == 'prev'
        ? activeGaleri = index - 1
        : activeGaleri = index + 1

      if (activeGaleri == 4) activeGaleri = 0;
      if (activeGaleri == -1) activeGaleri = 3;

      console.log(activeGaleri);

      // add active state to galeri that show on carousel
      galeri.forEach((li, i) => {
        li.classList.remove("active");
        if (i == activeGaleri) li.classList.add("active");
      });
    }
  });
};


document.querySelector('[data-bs-slide="prev"]').addEventListener("click", () => getActiveCarousel('prev'))

document.querySelector('[data-bs-slide="next"]').addEventListener("click", () => getActiveCarousel('next'))

// click spesific galeri
galeri.forEach((gal, galIndex) => {
  gal.addEventListener("click", () => {

    galeri.forEach((li, liIndex) => {
      // remove active galeri
      li.classList.remove("active");

      // add active galeri same to clicked element
      if (liIndex == galIndex) li.classList.add("active");
    });

    // add active to clicked element
    carousel.forEach((item, cIndex) => {
      item.classList.remove("active");
      if (galIndex == cIndex) item.classList.add("active");
    });
  });
});
