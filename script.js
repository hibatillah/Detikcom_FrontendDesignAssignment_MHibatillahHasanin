// horizontal scroll
const hscroll = document.querySelector('#support ul');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) scrollHorizontal()

const scrollHorizontal = () => {
  const itemScroll = document.querySelectorAll('#support ul li');

  itemScroll.forEach((item) => {
    const duplicateItem = item.cloneNode(true)
    duplicateItem.setAttribute('aria-hidden', true)
    hscroll.appendChild(duplicateItem);
  })
}