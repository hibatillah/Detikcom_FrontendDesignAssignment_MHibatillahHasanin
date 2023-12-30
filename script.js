//=== horizontal scroll ===/
const scrollContainer = document.querySelector('#scroll-h');
const itemScroll = document.querySelector('#scroll-h ul').cloneNode(true)

scrollContainer.appendChild(itemScroll)

//=== tab berita ===//
const tabBerita = document.querySelectorAll('#berita ul#tab li')
const fotoBerita = document.querySelectorAll('ul#artikel li #foto')
const videoBerita = document.querySelectorAll('ul#artikel li #video')

tabBerita.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabBerita.forEach((item) => {
      item.classList.remove('active')
    })
    tab.classList.add('active')

    // active foto & video
    fotoBerita.forEach((foto) => {
      videoBerita.forEach((video) => {
        if (index == 1) {
          foto.classList.remove('d-none')
          video.classList.add('d-none')
        } else if (index == 2) {
          foto.classList.add('d-none')
          video.classList.remove('d-none')
        } else {
          foto.classList.add('d-none')
          video.classList.add('d-none')
        }
      })
    })
  })
})
