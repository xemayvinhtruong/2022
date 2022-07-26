      function _show_quick_view(e){
        e.preventDefault();var $this=$(this).parents('.data-product')
        $.get($this.attr('data-product-url'),function(a){
          var _sum=$(a).find('.resp-tabs-container .product-summary').html(),
          html='<article class="data-product product single-product skeleton-body" data-product-image="'+$this.attr('data-product-image')+'" data-product-name="'+$this.attr('data-product-name')+'" data-product-price="'+$this.attr('data-product-price')+'" data-product-quantity="1" data-product-sale='+$this.attr('data-product-sale')+' data-product-sku="'+$this.attr('data-product-sku')+'" data-product-status="'+$this.attr('data-product-status')+'" data-product-url="'+$this.attr('data-product-url')+'" user-select-color="0" user-select-size="0"><div class="product-summary-wrap">'+$(a).find('.product-summary-wrap').html()+'</div></article>',
          modal='<div class="modal--confirm quick--view"><div class="modal--dialog"><div aria-label="close" class="modal--icon has-svg-icon has-hover absolute modal--close" role="button" tabindex="0"></div><div class="_2em"></div><div class="modal--content"><div class="modal--body has-product pd-3">'+html+'</div></div><div class="_2em"></div></div></div>'
          $(modal).appendTo('body');$('body').addClass('overflow');$(_sum).appendTo($('.quick--view .product-description'))
          setTimeout(function(){$('.quick--view .skeleton-body').removeClass('skeleton-body')},2000)
          _popup();_increase_quantity();product_images_slider();_percent_off()
          $('.quick--view .product-summary form.cart').submit(_add_to_cart)
          $('.modal--confirm.quick--view').fadeIn('slow',function(){$(this).addClass('show')})
          $('.modal--close').click(function(){
            $('.modal--confirm.quick--view').removeClass('show')
            setTimeout(function(){$('.modal--confirm.quick--view').remove()},1000);$('body').removeAttr('class')
          })
          $('.quick--view .sizes label').click(function(){
            $(this).addClass('checked');$('.quick--view .sizes label').not($(this)).removeClass('checked')
            $(this).parents('.data-product').attr('user-select-size',$(this).find('input').val())
          })
          $('.quick--view .color label').click(function(){
            $(this).addClass('checked');$('.quick--view .color label').not($(this)).removeClass('checked')
            $(this).parents('.data-product').attr('user-select-color',$(this).find('input').val())
          })
        })        
      }
      window.addEventListener('load',function(){
        $(document).off('click','.quick_view_button',_show_quick_view).on('click','.quick_view_button',_show_quick_view)
      })