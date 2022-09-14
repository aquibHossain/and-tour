$(function() {
    "use strict";

    // navbar area 
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 10) { $('.navbar-area').addClass("is-sticky"); }
      else { $('.navbar-area').removeClass("is-sticky"); }
  });

  
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


