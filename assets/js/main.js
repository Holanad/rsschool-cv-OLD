const headerBurgerElem = document.querySelector('.header-burger');
const headerNavigationElem = document.querySelector('.header-navigation');
const htmlElem = document.querySelector('html');

function scrollMenuHeader () {
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (window.innerWidth > 0) {
          document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('header').clientHeight <= scrollDistance) {
              document.querySelectorAll('.header-navigation a').forEach((el) => {
                if (el.classList.contains('active')) {
                  el.classList.remove('active');
                }
              });
              document.querySelectorAll('.header-navigation li')[i].querySelector('a').classList.add('active');
            }
          });
        }
      });
};

function headerMenuActive () {
    let headerListItemElem = document.querySelectorAll('.header-list__item a')
    headerBurgerElem.addEventListener('click', function () {
        headerBurgerElem.classList.toggle('burger-active');
        htmlElem.classList.toggle('hidden');
        headerNavigationElem.classList.toggle('header-active');
        headerListItemElem.forEach(i => {
            i.addEventListener('click', function () {
                headerBurgerElem.classList.remove('burger-active');
                htmlElem.classList.remove('hidden');
                headerNavigationElem.classList.remove('header-active');
            })
        });
    })
};
scrollMenuHeader ();
headerMenuActive ();