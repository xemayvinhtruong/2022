      function _add_to_wishlist(e){
        e.preventDefault()
        var _tar=$(this),$this=$(this).parents('.data-product'),_id=$this.attr('data-product-sku'),_sku=$this.attr('data-product-sku'),
        _url=$this.attr('data-product-url'),_title=$this.attr('data-product-name'),
        _thumb=$this.attr('data-product-image').replace('s1600','s72'),
        _price=$this.attr('data-product-price'),_sell=$this.attr('data-product-sale'),_status=$this.attr('data-product-status'),
        _icon=$('.header-icon .wishlist-icon'),data_label=Number($(_icon).attr('data-icon-label'))
        if(data_label>=wishlist.item){
          var confirm='<div class="modal--confirm alert--dialog"><div class="modal--dialog"><div class="_3em"></div><div class="modal--content"><div class="modal--header"><div class="_mht">'+data.messages.alert+'</div><div class="_mhc modal--icon has-svg-icon has-hover modal--close" role="button" tabindex="0"></div></div><div class="modal--body"><div><p>'+wishlist.alert+'</p></div></div><div class="modal--footer"><button class="modal--close has-hover" type="button">'+data.messages.close+'</button><button class="primary accept has-hover" type="button">'+data.messages.agree+'</button></div></div><div class="_3em"></div></div></div>'
          $(confirm).appendTo('body')
          $('.modal--confirm.alert--dialog').fadeIn('slow',function(){$(this).addClass('show')})
          $('.modal--close').click(function(){
            $('.modal--confirm.alert--dialog').removeClass('show')
            setTimeout(function(){$('.modal--confirm.alert--dialog').remove()},1000)
          })          
          $('.modal--footer button.primary').click(function(){location.href=wishlist.url})
        }else{
          var _stock_label='',_button='',_price_wrapper=''
          if(_status=='in stock'){_stock_label=data.messages.instock
            if(_price=='0'){
             _price_wrapper='<span><strong>'+data.messages.contact+'</strong></span>'
             _button='<button class="modal--open theme-button primary has-hover order" data-target="#form-order" data-product-id="'+_id+'">'+data.button.order+'</button>'
            }else{
              _price_wrapper='<span class="price"><ins>'+_price+'</ins><label class="unit">'+dv_tt+'</label></span>'
              _button='<button class="single_add_to_cart_button theme-button has-hover" data-product-id="'+_id+'">'+data.button.cart+'</button>'
            }
          }else if(_status=='out of stock'){
            _stock_label=data.messages.outstock
            _price_wrapper='<span class="price"><ins>'+_price+'</ins><label class="unit">'+dv_tt+'</label></span>'
            _button='<button class="modal--open theme-button primary has-hover get-received" data-target="#form-noti" data-product-id="'+_id+'">'+data.button.noti+'</button>'
          }
          var _remove=cart.url+'?remove_item='+_id,
          _item='<tr class="data-product" data-product-image='+_thumb+' data-product-name="'+_title+'" data-product-price="'+$this.attr('data-product-price')+'" data-product-quantity="1" data-product-sale="'+_sell+'" data-product-sku='+_sku+' data-product-status="'+_status+'" data-product-url='+_url+' user-select-color="0" user-select-size="0"><td class="product-remove"><a class="remove close-icon has-svg-icon" href='+_remove+' title="'+data.messages.erase+'"></a></td><td class="product-thumbnail"><img alt="'+_title+'" src='+_thumb+'></td><td class="product-name"><a href='+_url+' title="'+_title+'">'+_title+'</a></td><td class="product-sku">'+_sku+'</td><td class="product-price">'+_price_wrapper+'</td><td class="product-stock-status">'+_stock_label+'</td><td class="product-add-to-cart text-right">'+_button+'</td></tr>'
          data_label=data_label+1;$(_icon).addClass('added');$(_icon).attr('data-icon-label',data_label)
          $('.footer-navigation-bar .wishlist-icon').attr('data-icon-label',data_label);localStorage.setItem('data_icon_label',data_label)
          setTimeout(function(){$(_tar).addClass('active');$(_icon).removeClass('added')},500)
          var wishlist_id='<span id='+_id+'></span>';$('#wishlist-id').append(wishlist_id)
          var wishlist_added=$('#wishlist-id').html();localStorage.setItem('wishlist_added',wishlist_added)
          $('table#wishlist_table>tbody').append(_item);var wishlist_html=$('table#wishlist_table>tbody').html()
          localStorage.setItem('wishlist_table_saved',wishlist_html)
        }
      }
      function _check_wishlist(){
        if(wishlist_added=localStorage.getItem('wishlist_added')){
          $('#wishlist-id').html(wishlist_added)
          var arr=[],lis=document.querySelector('#wishlist-id').getElementsByTagName('span')
          for(var i=0;i<lis.length;i++){arr.push(lis[i].id)}
          $('.add_to_wishlist_button').each(function(){
            var $this=$(this),value=$this.attr('data-product-id')
            if(arr.includes(value))$this.addClass('active').unbind('click')
          })
        }
      }
      function _wishlist_page(){
        var data_label='',icon=$('.header-icon .wishlist-icon')
        if(data_icon_label=localStorage.getItem('data_icon_label')){
          $(icon).attr('data-icon-label',data_icon_label)
          $('.footer-navigation-bar .wishlist-icon').attr('data-icon-label',data_icon_label)
          data_label=Number($(icon).attr('data-icon-label'))
        }else{data_label='0'}
        if(wishlist_html=localStorage.getItem('wishlist_table_saved')){
          $('table#wishlist_table>tbody').html(wishlist_html)
          $('table.wishlist_table>tbody').html(wishlist_html)
          var sp_giam=$('table.wishlist_table>tbody').children('tr').size()
          $('table.wishlist_table>tbody>tr').each(function(){
            var $this=$(this),td=$(this).find('td.product-remove a'),id=$('#wishlist-id>span'),tr=$('#wishlist_table>tbody>tr')
            $(td).click(function(e){
              e.preventDefault();e=$this.index();$this.parent().addClass('loading');sp_giam=sp_giam-1
              setTimeout(function(){
                $(icon).attr('data-icon-label',data_label-1);$(td).parent().parent().remove()
                $('.footer-navigation-bar .wishlist-icon').attr('data-icon-label',data_label-1)
                $(id[e]).remove();$(tr[e]).remove();wishlist_added=$('#wishlist-id').html()
                wishlist_html=$('table.wishlist_table>tbody').html()
                data_label=Number($('.header-wishlist-icon>a>i').attr('data-icon-label'))
                localStorage.setItem('wishlist_added',wishlist_added);localStorage.setItem('wishlist_table_saved',wishlist_html)
                localStorage.setItem('data_icon_label',data_label)
                if(sp_giam==0){
                  var _empty='<td colspan="7" class="wishlist-empty text-center"><p>'+wishlist.empty+'</p><p><a class="theme-button primary uppercase" href='+data.button.url+' title="'+wishlist.storepage+'">'+wishlist.storepage+'</a></p></td>'
                  $('.header-wishlist-icon>a>i').attr('data-icon-label',0);$('#wishlist-id,table#wishlist_table>tbody').empty()
                  data_label=Number($('.header-wishlist-icon>a>i').attr('data-icon-label'))
                  $('table.wishlist_table>tbody').html(_empty);localStorage.setItem('data_icon_label',data_label)
                  localStorage.removeItem('wishlist_table_saved');localStorage.removeItem('wishlist_added')
                };$('.loading').removeClass('loading')
              },500)
            })
          })
        }
      }
      window.addEventListener('load',function(){
        _check_wishlist();_wishlist_page()
        $(document).off('click','.add_to_wishlist_button',_add_to_wishlist).on('click','.add_to_wishlist_button',_add_to_wishlist)
      })