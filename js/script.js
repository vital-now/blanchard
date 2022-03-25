document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__bottom-item-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container__dropdown");
    
    document.querySelectorAll(".header__bottom-item-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });
    
    document.querySelectorAll(".container__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-header__bottom-item");
      }
    })
    dropdown.classList.toggle("active-header__bottom-item");
    btn.classList.toggle("active--btn")
  });
});

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__bottom-list")) {
    document.querySelectorAll(".container__dropdown").forEach(el => {
        el.classList.remove("active-header__bottom-item");
    })
     document.querySelectorAll(".header__bottom-item-btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
});

// swiper

// const swiperHero = new Swiper ('.hero-swiper', {
//   loop: true,
//   autoplay: {
//     delay:5000,
//   },
//   effect: 'fade',
//   fadeEffect: {
//     crossFade:true
//   },
//   speed: 500,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// });

})

// swiper


// Select
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};


select();




var swiper = new Swiper(".gallary-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
breakpoints: {
  1920: {
    slidesPerView: 3,
    spaceBetween: 50,
  }, 
  1500: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  1300: {
    slidesPerView: 2,
    spaceBetween: 50,
  },

  1000: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  320: {
    slidesPerView: 1,
  },

  100: {
    slidesPerView: 1,
  }
}
});


// Accordeon

    jQuery(document).ready(function($){
        $("#my-accordion").accordionjs({
          activeIndex : false,
        });
    });

    var tabNavs = document.querySelectorAll(".nav-tab");
    var tabPanes = document.querySelectorAll(".tab-pane");
    
    for (var i = 0; i < tabNavs.length; i++) {
    
      tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");
    
        for (var j = 0; j < tabNavs.length; j++) {
          var contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active"); 
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        };
      });
    }

    var swiper = new Swiper(".event-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      

      breakpoints: {
        // 1920: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // }, 
        // 1600: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // },
        // 1100: {
        //   slidesPerView: 3,
        //   spaceBetween: 30,
        // },
      
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 50, 
        },
        100: {
          slidesPerView: 1,
        }
      }
    });

    var swiper = new Swiper(".project-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
      },

      breakpoints: {
        1920: {
          slidesPerView: 3,
          spaceBetween: 50,
        }, 
        1600: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      
        1000: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        }
      }
    });


    var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        }, 

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        }, 
    },
});


function init() {
  let map = new ymaps.Map('map', {
      center: [48.872185073737896,2.354223999999991],
      zoom: 15
  });

  let placemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/footer/geo.svg',
      iconImageSize: [20, 20], 
      iconImageOffset: [0,0]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
map.controls.remove('searchControl'); // удаляем поиск
map.controls.remove('trafficControl'); // удаляем контроль трафика
map.controls.remove('typeSelector'); // удаляем тип
map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
map.controls.remove('zoomControl'); // удаляем контрол зуммирования
map.controls.remove('rulerControl'); // удаляем контрол правил
map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

map.geoObjects.add(placemark);
};

ymaps.ready(init);




document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('burger__active')
  });
});


$(document).ready(function() {
  $('.header__search-button').click(function(event) {
    $(this).toggleClass('header__search_active');
    $(this).next('.header-search-mobile').toggleClass('header__search_visible');
  });
});

initSearch();
	// initHeaderScrollbar();
	// initMenu();

	function initSearch() {
		$('.btn-click').on('click', function() {
			$(this).toggleClass('active')
		});

		$(document).on('click', (e) => {
			if ( !$('.btn-click').is(e.target) && !$('.block-click').is(e.target) && $('.block-click').has(e.target).length === 0) {
					$('.btn-click').removeClass('active')
			}
		});
	};
