//=== horizontal scroll ===/
const scrollContainer = document.querySelector("#scroll-h");
const itemScroll = document.querySelector("#scroll-h ul").cloneNode(true);

scrollContainer.appendChild(itemScroll);

//=== tab berita ===//
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

//=== galeri ===//
const carousel = document.querySelectorAll(".carousel-item");
const galeri = document.querySelectorAll("#second-galeri img");

carousel.forEach((item, index) => {
  if (item.classList.contains('active')) {
    galeri.forEach(gal => {
      gal.parentElement.classList.remove('active');

      if (index == 0) {
        gal[index].classList.add('active');
      } else if (index == 1) {
        gal[index].classList.add('active');
      } else if (index == 2) {
        gal[index].classList.add('active');
      } else {
        gal[index].classList.add('active');
      }
    })
  }
})

// spesific galeri clicked
galeri.forEach((item, index) => {
  item.addEventListener("click", (el) => {
    // remove active
    galeri.forEach((ex) => {
      ex.parentElement.classList.remove("active");
    });

    // add active to clicked element
    el.target.parentElement.classList.add("active");
    if (index == 0) {
      mainGaleri.src = galeri1;
    } else if (index == 1) {
      mainGaleri.src = galeri2;
    } else if (index == 2) {
      mainGaleri.src = galeri3;
    } else {
      mainGaleri.src = galeri4;
    }
  });
});
