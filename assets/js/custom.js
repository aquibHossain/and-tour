$(function() {
    "use strict";

    // navbar area 
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 10) { $('.andtour-navbar').addClass("is-sticky"); $('.nav-btn').addClass("bg-white text-dark") }
      else { $('.andtour-navbar').removeClass("is-sticky");
      $('.nav-btn').removeClass("bg-white text-dark")  }
  });
  $(".site-menu-toggle").on("click", function () { $(".menu-overlay").toggleClass("menu-overlay-active"); });
  $(".menu-overlay-close").on("click", function () { $(".menu-overlay").removeClass("menu-overlay-active"); });

    //   date picker
    rome(input_from, {
        dateValidator: rome.val.beforeEq(input_to),
        time: false
      });
  
      rome(input_to, {
        dateValidator: rome.val.afterEq(input_from),
        time: false
      });
  
      const sorting = document.querySelector('.selectpicker');
      const commentSorting = document.querySelector('.selectpicker');
      const sortingchoices = new Choices(sorting, {
          placeholder: false,
          itemSelectText: ''
      });
      
      
      // Trick to apply your custom classes to generated dropdown menu
      let sortingClass = sorting.getAttribute('class');
      window.onload= function () {
          sorting.parentElement.setAttribute('class', sortingClass);
      }

  // map pointer 
  $(document).ready(function(){
    tippy('.tippy', {
      theme: 'light',
      size: 'big',
      arrow: true,  
      placement: 'right-start',
    })
});
      
    // range sldier 
    function Slider(slider) {
      
        this.slider = slider;
        slider.addEventListener('input', function() {
          this.updateSliderOutput();
          this.updateSliderLevel();
          this.updateBars();
        }.bind(this), false);
        
        this.level = function() {
          // actual slider
          let level = this.slider.querySelector('.slider-input');
          return level.value;
        }
        
        this.levelString = function() {
          return parseInt(this.level());
        }
        
        this.updateSliderOutput = function() {
          // number indicator below slider
          let output = this.slider.querySelector('.slider-output');
          // slider circle handle
          let thumb = this.slider.querySelector('.slider-thumb');
          output.value = "$"+this.levelString();
          output.style.left = this.levelString() + '%';
          thumb.style.left = this.levelString() + '%';
        }
        
        this.updateSliderLevel = function() {
          // dark gray part of slider
          let level = this.slider.querySelector('.slider-level');
          level.style.width = this.levelString() + '%';
        }
        
        this.updateBars = function() {
          // actual slider
          let level = this.slider.querySelector('.slider-input');
          let analogousLevel = level.value;
          let inverseLevel = 100 - level.value;
          $('.fill_analogous').css('width', analogousLevel + '%');
          $('.fill_inverse').css('width', inverseLevel + '%');
        }
        
      }
      
      let volumeSlider = document.getElementById('volume');
      new Slider(volumeSlider);
    
  });


  

$(function() {

  var siteSticky = function() {
        $(".js-sticky-header").sticky({topSpacing:0});
    };
    siteSticky();

    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.responsive-nav-body');
        });


        setTimeout(function() {
            
            var counter = 0;
      $('.responsive-nav .drop-down').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

        $(window).resize(function() {
            var $this = $(this),
                w = $this.width();

            if ( w > 768 ) {
                if ( $('body').hasClass('offcanvas-menu') ) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ( $('body').hasClass('offcanvas-menu') ) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        }) 

        // click outisde offcanvas
        $(document).mouseup(function(e) {
        var container = $(".responsive-nav");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ( $('body').hasClass('offcanvas-menu') ) {
                    $('body').removeClass('offcanvas-menu');
                }
        }
        });
    }; 
    siteMenuClone();

});

