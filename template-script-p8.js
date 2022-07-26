      function _add_to_cart(e){
        e.preventDefault();var target=$(this),$this=$(this).parents('.data-product'),id_sp=$this.attr('data-product-sku'),
        ma_sp=$this.attr('data-product-sku'),url_sp=$this.attr('data-product-url'),
        ten_sp=$this.attr('data-product-name'),anh_sp=$this.attr('data-product-image').replace('s1600','s72'),
        gia_sp=$this.attr('data-product-price'),status=$this.attr('data-product-status'),
        icon=$('.header-icon .cart-icon'),count=Number($(icon).attr('data-icon-label')),
        gia_1=gia_sp.replace(/\./gi,''),tam_tinh='',thanh_tien='',cart_item='',cart_html='',ul=$('.data-products-list>ul'),arr=[],
        sl_sp=Number($this.attr('data-product-quantity')),kt_sp=$this.attr('user-select-size'),mau_sp=$this.attr('user-select-color')
        function add_item(){thanh_tien=sl_sp*gia_1
          if(localStorage.getItem('saved_data')!=null){
            var thanh_tien_update=$(ul).attr('data-product-total').replace(/\./gi,'')
            tam_tinh=Number(thanh_tien)+Number(thanh_tien_update)
          }else{tam_tinh=thanh_tien};function g(i){if(i<10)i='0'+i;return i};var z=new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'+'+g(new Date().getHours())+':'+g(new Date().getMinutes())
          cart_item='<li class="cart_item" data-date-added="'+z+'" data-product-image='+anh_sp+' data-product-name="'+ten_sp+'" data-product-price="'+gia_sp+'" data-product-quantity='+sl_sp+' data-product-amount="'+curr(thanh_tien,'.', '.')+'" data-product-sku='+ma_sp+' data-product-status="'+status+'" data-product-url='+url_sp+' user-select-color="'+mau_sp+'" user-select-size="'+kt_sp+'"><a class="flex-align" href='+url_sp+'><div class="product-thumbnail"><img alt="'+ten_sp+'" src='+anh_sp+'></div><div class="product-info"><div class="product-title">'+ten_sp+'</div><div class="product-price"><span class="price"><label class="qty">'+sl_sp+'</label> x <ins>'+gia_sp+'</ins><label class="unit">'+dv_tt+'</label></span></div></div><div class="remove-item flex-center" title="'+data.messages.erase+'"><span class="close-icon has-svg-icon"></span></div></a></li>'
          $(ul).attr({'data-product-added':count+1,'data-product-total':curr(tam_tinh,'.', '.')}).append(cart_item)
          cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)
          localStorage.setItem('luu_ten_sp',ten_sp);localStorage.setItem('reload','true');location.reload()
        }
        if(localStorage.getItem('saved_data')!=null){
          cart_item=$(ul).find('li');tam_tinh=Number($(ul).attr('data-product-total').replace(/\./gi,''))
          for(var i=0;i<cart_item.length;i++)arr.push($(cart_item[i]).attr('data-product-sku'))
          if(!arr.includes(id_sp)&&cart_item.length>=cart.item){
            var confirm='<div class="modal--confirm cart--dialog"><div class="modal--dialog"><div class="_3em"></div><div class="modal--content"><div class="modal--header"><div class="_mht">'+data.messages.alert+'</div><div class="_mhc modal--icon has-svg-icon has-hover modal--close" role="button" tabindex="0"></div></div><div class="modal--body"><div><p>'+cart.alert+'</p></div></div><div class="modal--footer"><button class="modal--close has-hover" type="button">'+data.messages.close+'</button><button class="primary accept has-hover" type="button">'+data.messages.agree+'</button></div></div><div class="_3em"></div></div></div>'
            $(confirm).appendTo('body')
            $('.modal--confirm.cart--dialog').fadeIn('slow',function(){$(this).addClass('show')})
            $('.modal--close').click(function(){
              $('.adding').removeClass('adding');$('.modal--confirm.cart--dialog').removeClass('show')
              setTimeout(function(){$('.modal--confirm.cart--dialog').remove()},1000)
            })          
            $('.modal--footer button.primary').click(function(){location.href=checkout.url})
            if($('body').hasClass('overflow'))$('.modal--confirm.quick--view').remove();$('body').removeAttr('class')
          }else if(arr.includes(id_sp)){
            $(cart_item).each(function(m,n){var id__sp=$(n).attr('data-product-sku')
              if(id__sp==id_sp){
                var sl__sp=$(n).attr('data-product-quantity');sl__sp=Number(sl_sp)+Number(sl__sp)
                $(n).find('.price>.qty').html(sl__sp);gia_sp=Number($(n).attr('data-product-price').replace(/\./gi,''))
                thanh_tien=sl_sp*gia_sp;tam_tinh=tam_tinh+Number(thanh_tien);
                $(n).attr({'data-product-quantity':sl__sp,'data-product-amount':curr(sl__sp*gia_sp,'.', '.')})  
                $(ul).attr('data-product-total',curr(tam_tinh,'.', '.'));cart_html=$('.data-products-list').html()
                localStorage.setItem('saved_data',cart_html);localStorage.setItem('luu_ten_sp',ten_sp)
                localStorage.setItem('reload','true');location.reload()
              }
            })
          }else{add_item()}
        }else{add_item()}
      }
      function _cart_page(){
        var icon=$('.header-icon .cart-icon'),bar=('.footer-navigation-bar .cart-icon'),cart_checkout=$('.cart_widget .cart_checkout'),
        ten_sp='',sl_sp='',thanh_tien='',tam_tinh='',phi_ship='',tong_phu='',cart_item='',cart_html='',cart_widget=$('.cart_widget'),
        product_list=$('.cart_widget .product_list'),sub=document.querySelectorAll('.cart_widget .sub-total'),
        cart_empty='<li class="cart-empty-message text-center"><p>'+cart.empty+'</p></li>',
        cart_empty_page='<div class="col-md-12 text-center"><p class="cart-empty mb-0 pb-20">'+cart.emptypage+'</p><p class="return-to-shop"><a class="theme-button primary uppercase" href='+data.button.url+' title="'+cart.storepage+'">'+cart.storepage+'</a></p></div>'
        if(ten_sp=localStorage.getItem('luu_ten_sp')){
          $('.header-icon .header-cart-icon').addClass('has-drop')
          var message_wrapper='<div class="container"><div class="message-wrapper flex-align mt-4"><p class="flex-left">“'+ten_sp+'” '+cart.success+' <a class="success" href="javascript:void(0)" onclick="location.href=cart.url"><strong>XEM GIỎ HÀNG</strong></a></p><p class="flex-right flex-center close-icon has-svg-icon has-hover"></p></div></div>';$(message_wrapper).insertBefore($('.main-wrapper'))
          $('.message-wrapper .close-icon').click(function(){$('.message-wrapper').fadeOut('slow',function(){$('.message-wrapper').remove()})})
          $('.header-icon .header-cart-icon').mousemove(function(){$(this).removeClass('has-drop')})
          setTimeout(function(){$('.header-icon .header-cart-icon').removeClass('has-drop')},5000)
          localStorage.removeItem('luu_ten_sp')
        }
        if(localStorage.getItem('reload')=='true'){
          setTimeout(function(){$('html,body').stop().animate({scrollTop:0},1000)},0);localStorage.removeItem('reload')}
          if(cart_html=localStorage.getItem('saved_data')){
            $('.cart_widget .cart-empty-message').remove();$('.data-products-list').html(cart_html)
            var ul=$('.data-products-list>ul'),items_added=$(ul).html();tong_phu=Number($(ul).attr('data-product-total').replace(/\./gi,''));var li=$(ul).find('li')
            $(icon).attr('data-icon-label',li.length);$(bar).attr('data-icon-label',li.length)
            $(product_list).html(items_added);$(cart_checkout).removeClass('hidden')
            for(let k=0;k<sub.length;k++)sub[k].innerHTML=curr(tong_phu,'.', '.')
            var str,stn,payment,order_total='',order_complete='',kh_mai='',add1='',add2='',arr=[],
            slsp=Number($(icon).attr('data-icon-label'))
            $(li).each(function(i){
              var $this=$(this),id_sp=$this.attr('data-product-sku'),url_sp=$this.attr('data-product-url'),
              ten_sp=$this.attr('data-product-name'),anh_sp=$this.attr('data-product-image'),sl_sp=$this.attr('data-product-quantity'),
              gia_sp=$this.attr('data-product-price').replace(/\./gi,''),kt_sp=$this.attr('user-select-size'),mau_sp=$this.attr('user-select-color'),remove_item=cart.url+'?remove_item='+id_sp,quantity='<div class="buttons_added"><div class="minus is-form has-hover">-</div><input class="input-text" max="20" min="0" name="quantity" pattern="[0-9]*" step="1" type="number" value='+sl_sp+'><div class="plus is-form has-hover">+</div></div>',ngay_sp=$this.attr('data-date-added');thanh_tien=sl_sp*gia_sp
              str+='<tr class="cart_item"><td class="product-remove pl-0"><a class="remove close-icon has-svg-icon" href='+remove_item+' title="'+data.messages.erase+'"></a></td><td class="product-thumbnail"><img alt="'+ten_sp+'" src='+anh_sp+'></td><td class="product-name"><a href='+url_sp+' title="'+ten_sp+'">'+ten_sp+' <table class="sizes-table"><tbody><tr><th>Màu xe</th><td><img style="width:30px;height:30px" src="'+mau_sp+'"/></td></tr><tr><th>Size</th><td><b name="z-'+kt_sp+'">['+kt_sp+']</b></td></tr></tbody></table></div></a></td><td class="product-price"><strong><ins>'+curr(gia_sp,'.', '.')+'</ins><label class="unit">'+dv_tt+'</label></strong></td><td class="product-quantity text-center">'+quantity+'</td><td class="product-subtotal text-right"><strong><ins>'+curr(thanh_tien,'.', '.')+'</ins><label class="unit">'+dv_tt+'</label></strong></td></tr>'
              stn+='<tr class="cart_item"><td class="product-name">'+ten_sp+' × '+sl_sp+' <img style="width:30px;height:30px" src="'+mau_sp+'"/> <b name="z-'+kt_sp+'">['+kt_sp+']</b></td><td class="product-total text-right"><strong><ins>'+curr(thanh_tien,'.', '.')+'</ins><label class="unit">'+dv_tt+'</label></strong></td></tr>'
              order_complete+='<tr class="cart_item"><td class="product-name">'+ten_sp+' × '+sl_sp+'</td><td class="product-total text-right"><strong><ins>'+curr(thanh_tien,'.', '.')+'</ins><label class="unit">'+dv_tt+'</label></strong></td></tr>'
              order_total+='['+ten_sp+'] x ['+sl_sp+'] x ['+curr(gia_sp,'.', '.')+dv_tt+'] x ['+kt_sp+'] x ['+mau_sp+'] x ['+ngay_sp+'] = ['+curr(thanh_tien,'.', '.')+dv_tt+']\n'
            })
            var a=$('.header-middle .cart_widget ul'),b=$(a).find('li.cart_item')
            if(data.view.isMobile!='true'){var c=$('.menu .cart_widget ul'),d=$(c).find('li.cart_item')}
            $(b).each(function(n){var del=$(b[n]).find('.remove-item')
              $(del).click(function(e){e.preventDefault()
                var parent=$(this).parents('li.cart_item');$(parent).addClass('loading')
                setTimeout(function(){
                  $(b[n]).remove();if(data.view.isMobile!='true'){$(c).find(d[n]).remove()};$(ul).find(li[n]).remove()
                  slsp=$(ul).find(li).length
                  if(slsp>0){
                    tong_phu=$(ul).find(li).toArray().map(function(x){return parseInt(Number($(x).attr('data-product-amount').replace(/\./gi,'')))}).reduce(function(total,num){return total+num})
                    $(bar).attr('data-icon-label',slsp);$(icon).attr('data-icon-label',slsp)
                    $(ul).attr({'data-product-added':slsp,'data-product-total':curr(tong_phu,'.', '.')})
                    for(let k=0;k<sub.length;k++)sub[k].innerHTML=curr(tong_phu,'.', '.')
                    cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)
                  }else{
                    $(icon).attr('data-icon-label',0);$(bar).attr('data-icon-label',0)
                    $('.cart_widget .product_list').html(cart_empty);$('.cart_widget .cart_checkout').addClass('hidden')
                    $(ul).attr({'data-product-total':0,'data-product-added':0}).empty();localStorage.removeItem('saved_data')
                    $('.message-wrapper').fadeOut('slow',function(){$('.message-wrapper').remove()})
                  }
                  $('.loading').removeClass('loading')                  
                },500)
              })
            })
            if(data.view.isMobile!='true'){
              $(d).each(function(n){var del=$(d[n]).find('.remove-item')
                $(del).click(function(e){e.preventDefault()
                  var parent=$(this).parents('li.cart_item');$(parent).addClass('loading')
                  setTimeout(function(){
                    $(d[n]).remove();$(a).find(b[n]).remove();$(ul).find(li[n]).remove()
                    slsp=$(ul).find(li).length
                    if(slsp>0){
                      tong_phu=$(ul).find(li).toArray().map(function(x){return parseInt(Number($(x).attr('data-product-amount').replace(/\./gi,'')))}).reduce(function(total,num){return total+num})
                      $(bar).attr('data-icon-label',slsp);$(icon).attr('data-icon-label',slsp)
                      $(ul).attr({'data-product-added':slsp,'data-product-total':curr(tong_phu,'.', '.')})
                      for(let k=0;k<sub.length;k++)sub[k].innerHTML=curr(tong_phu,'.', '.')
                      cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)
                    }else{
                      $(icon).attr('data-icon-label',0);$(bar).attr('data-icon-label',0)
                      $('.cart_widget .product_list').html(cart_empty);$('.cart_widget .cart_checkout').addClass('hidden')
                      $(ul).attr({'data-product-total':0,'data-product-added':0}).empty();localStorage.removeItem('saved_data')
                      $('.message-wrapper').fadeOut('slow',function(){$('.message-wrapper').remove()})
                    }
                    $('.loading').removeClass('loading')                  
                  },500)
                })
              })
            }
            if(["Cart","Checkout","Order Complete"].includes(data.blog.pageName)){
              var table=$('.woocommerce-cart-form'),shop_table=$('table.shop_table'),
              sub_amount=$('tr.order-subtotal>td.order-subtotal-amount>strong>ins'),
              coupon_amount=$('td.order-coupon-amount>strong>ins'),total_amount=$('td.order-total-amount>strong>ins'),
              check_out=$('button[name="check_out"]'),update_cart=$('button[name=update_cart]')
              $(sub_amount).html(curr(tong_phu,'.', '.'))
              if(data.blog.pageName=='Cart'){
                $(table).find('tbody').html(str)
                var tr=$('tr.cart_item'),subtotal=Number($(ul).attr('data-product-total').replace(/\./gi,'')),qty=$('tr.cart_item .is-form')
                $(tr).each(function(n){
                  var td=$(tr[n]).find('td.product-remove a'),buttons_added=$(tr[n]).find('.is-form'),
                  input_text=$(tr[n]).find('input.input-text'),psub=$(tr[n]).find('td.product-subtotal>strong>ins'),
                  min=$(input_text).attr('min'),max=$(input_text).attr('max'),sl_cu=0
                  $(td).click(function(e){
                    e.preventDefault();var parent=$(this).parent().parent();i=$(parent).index()
                    $(table).addClass('loading');var slsp=Number($(icon).attr('data-icon-label'))
                    var gia_sp=$(li[i]).attr('data-product-price').replace(/\./gi,'')
                    setTimeout(function(){
                      if(slsp>1){
                        sl_sp=Number($(li[i]).attr('data-product-quantity'))
                        thanh_tien=sl_sp*gia_sp;tam_tinh=tong_phu-thanh_tien;$(tr[i]).remove();$(li[i]).remove()
                        $(ul).attr({'data-product-added':slsp-1,'data-product-total':curr(tam_tinh,'.', '.')})
                        cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)
                      }else{
                        $(ul).attr({'data-product-total':0,'data-product-added':0}).empty();localStorage.removeItem('saved_data')
                      }
                      location.reload()
                    },1000)
                  })
                  if(min==0)var d=Number($(input_text).attr('value'));else d=min
                  $(buttons_added).click(function(i){
                    i=$(this).parents('tr.cart_item').index();if($(this).hasClass('minus')){if(d>min)d+=-1
                    }else if($(this).hasClass('plus')){var x=Number($(input_text).val())+1;if(x<=max)d+=1}      
                    $(input_text).val(d).attr('value',d);var gia_sp=Number($(li[i]).attr('data-product-price').replace(/\./gi,''))
                    thanh_tien=d*gia_sp;$(li[i]).attr({'data-product-quantity':d,'data-product-amount':curr(thanh_tien,'.', '.')})
                    $(psub).html(curr(thanh_tien,'.', '.'))
                  })            
                  $(input_text).change(function(){
                    var i=$(this).parents('tr.cart_item').index();d=Number($(this).val());if(d<min)d=min;if(d>max)d=max
                    $(this).attr('value',d).val(d);var gia_sp=Number($(li[i]).attr('data-product-price').replace(/\./gi,''))
                    thanh_tien=d*gia_sp;$(li[i]).attr({'data-product-quantity':d,'data-product-amount':curr(thanh_tien,'.', '.')})
                    $(psub).html(curr(thanh_tien,'.', '.')) 
                  })             
                })
                $(qty).click(function(){
                  tong_phu=$(li).toArray().map(function(x){return parseInt(Number($(x).attr('data-product-amount').replace(/\./gi,'')))}).reduce(function(total,num){return total+num})
                  $(sub_amount).html(curr(tong_phu,'.', '.'));$(ul).attr('data-product-total',tong_phu)
                  if(data.settings.discount=='true'){
                    if(tong_phu>=gt_dh)kh_mai=tong_phu*(chiet_khau/100);else kh_mai=0;tam_tinh=tong_phu-kh_mai
                    $(coupon_amount).html(curr(kh_mai,'.', '.'))
                  }
                  $(total_amount).html(curr(tam_tinh,'.', '.'))
                  if(tong_phu!=subtotal)$(update_cart).removeAttr('disabled');else $(update_cart).attr('disabled','')
                })
                $(update_cart).click(function(e){
                  e.preventDefault();$(table).addClass('loading');$(shop_table).addClass('loading')
                  setTimeout(function(){
                    $(li).each(function(i){sl_sp=Number($(this).attr('data-product-quantity'))
                      if(sl_sp==0){i=$(this).index();arr.push(i)}
                    })
                    if(arr.length>0){arr.forEach(function(x,y){$(li[x]).remove()})}
                    var slsp=$(ul).find(li).length
                    if(slsp==0){$(ul).attr({'data-product-total':0,'data-product-added':0}).empty();localStorage.removeItem('saved_data')
                    }else{$(ul).attr('data-product-added',slsp)
                    cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)}
                    location.reload()
                  },1000)
                })
                $(check_out).click(function(){
                  if($(update_cart).attr('disabled')===undefined){
                    $(table).addClass('loading');$(shop_table).addClass('loading')
                    setTimeout(function(){
                      $(li).each(function(i){sl_sp=Number($(this).attr('data-product-quantity'))
                        if(sl_sp==0){i=$(this).index();arr.push(i)}
                      })
                      if(arr.length>0){arr.forEach(function(x,y){$(li[x]).remove()})}
                      var slsp=$(ul).find(li).length
                      if(slsp==0){$(ul).attr({'data-product-total':0,'data-product-added':0}).empty();localStorage.removeItem('saved_data')
                      }else{$(ul).attr('data-product-added',slsp)
                      cart_html=$('.data-products-list').html();localStorage.setItem('saved_data',cart_html)}
                      location.href=checkout.url
                    },1000)
                  }else{location.href=checkout.url}
                }) 
                if(data.settings.discount=='true'){
                  if(tong_phu>=gt_dh)kh_mai=tong_phu*(chiet_khau/100);else kh_mai=0
                  var thanh_toan=tong_phu-kh_mai
                  $(coupon_amount).html(curr(kh_mai,'.', '.'))
                }else{thanh_toan=tong_phu;$('tr.order-coupon').addClass('hidden')}
                $(total_amount).html(curr(thanh_toan,'.', '.'))
              }
              if(data.blog.pageName=='Checkout'){
                $('.woocommerce-checkout-review-order>table>tbody').html(stn)
                $.ajax({url:'https://cloudflare.com/cdn-cgi/trace',success:function(data){$('input#ip_address').attr('value',data.match(/ip=(.+)/)[1])}})
                if(data.settings.freeship!='true'){
                  function calc(){
                    setTimeout(function(){$(shop_table).removeClass('loading')},700)
                    $('td.shipping-total-inner>strong>ins').html(curr(phi_ship,'.', '.'))
                    $('td.order-coupon-amount>strong>ins').html(curr(kh_mai,'.', '.'))
                    $('td.order-total-amount>strong>ins').html(curr(thanh_toan,'.', '.'))
                    $('input#shipping_price').attr('value',curr(phi_ship,'.', '.')+dv_tt)
                    $('input#discount_value').attr('value',curr(kh_mai,'.', '.')+dv_tt)                  
                  }
                  $('select[name="billingProvince"]').change(function(){
                    $(shop_table).addClass('loading');add1=$(this).select2('data')[0].text
                    if(tong_phu>=gt_dh){phi_ship=0
                    }else if(add1!='-- Chọn --'){
                      if(kv1.includes(add1))phi_ship=0;else if(kv2.includes(add1))phi_ship=Number(phi_vc1)
                      else if(kv3.includes(add1))phi_ship=Number(phi_vc2);else phi_ship=Number(phi_vc)
                      localStorage.setItem('phi_vc',phi_ship)
                    }else{phi_ship=Number(phi_vc)}
                    if(data.settings.discount=='true'){
                      kh_mai=Number($('td.order-coupon-amount>strong>ins').html().replace(/\./gi,''))
                      thanh_toan=(tong_phu-kh_mai)+phi_ship
                    }else{thanh_toan=tong_phu+phi_ship}
                    calc()
                    if(add1!=='-- Chọn --'){
                      $('.payment_methods li.woocommerce-notice').hide()
                      $('.payment_methods li.for_cash,.payment_methods li.for_bank_transfer').show()
                    }else{
                      $('.payment_methods li.woocommerce-notice').show()
                      $('.payment_methods li.for_cash,.payment_methods li.for_bank_transfer').hide()
                    }
                  })
                  $('select[name="billingDistrict"]').change(function(){
                    $(shop_table).addClass('loading');add2=$(this).select2('data')[0].text
                    if(tong_phu>=gt_dh){phi_ship=0
                    }else if(add2!='-- Chọn --'){
                      if(kv2.includes(add2))phi_ship=Number(phi_vc1);localStorage.setItem('phi_vc',phi_ship)}
                    if(data.settings.discount=='true'){
                      kh_mai=Number($('td.order-coupon-amount>strong>ins').html().replace(/\./gi,''));thanh_toan=(tong_phu-kh_mai)+phi_ship
                    }else{thanh_toan=tong_phu+phi_ship}
                    calc()
                  })
                  if(data.settings.discount=='true'){
                    if(tong_phu>=gt_dh)kh_mai=tong_phu*(chiet_khau/100);else kh_mai=0;thanh_toan=(tong_phu-kh_mai)+phi_ship
                    $('td.order-coupon-amount>strong>ins').html(curr(kh_mai,'.', '.'))
                    $('input#discount_value').attr('value',curr(kh_mai,'.', '.')+dv_tt)
                  }else{thanh_toan=tong_phu+phi_ship;$('tr.order-coupon').addClass('hidden')}                 
                }else{
                  $('td.shipping-total-inner').html('<strong>'+data.messages.freeship+'</strong>')
                  $('.payment_methods li.woocommerce-notice').hide()
                  $('.payment_methods li.for_cash,.payment_methods li.for_bank_transfer').show()
                  if(data.settings.discount=='true'){
                    if(tong_phu>=gt_dh)kh_mai=tong_phu*(chiet_khau/100);else kh_mai=0;thanh_toan=tong_phu-kh_mai
                    $('td.order-coupon-amount>strong>ins').html(curr(kh_mai,'.', '.'))
                    $('input#discount_value').attr('value',curr(kh_mai,'.', '.')+dv_tt)
                  }else{thanh_toan=tong_phu;$('tr.order-coupon').addClass('hidden')}
                }
                $('textarea#order_total').html(order_total);$('input#sub_total').attr('value',curr(tong_phu,'.', '.')+dv_tt)
                $('input#paymet_total').attr('value',curr(thanh_toan,'.', '.')+dv_tt)
                $('td.order-total-amount>strong>ins').html(curr(thanh_toan,'.', '.'))
              }
              if(data.blog.pageName=='Order Complete'){
                if(data.settings.freeship!='true'){
                  if(tong_phu>=gt_dh){phi_ship=0
                  }else if(localStorage.getItem('phi_vc')!=null){phi_ship=Number(localStorage.getItem('phi_vc'))}
                }else{$('td.shipping-total-amount').html('<strong>'+data.messages.freeship+'</strong>')}
                if(data.settings.discount=='true'){if(tong_phu>=gt_dh)kh_mai=tong_phu*(chiet_khau/100);else kh_mai=0
                }else{$('tr.order-coupon').addClass('hidden')}
                thanh_toan=tong_phu+phi_ship-kh_mai;$('table.order_details>tbody').html(order_complete)
                $('td.order-shipping-amount>strong>ins').html(curr(phi_ship,'.', '.'))
                $('td.order-coupon-amount>strong>ins').html(curr(kh_mai,'.', '.'))
                $('.woocommerce-number>strong').html(li.length)
                $('.woocommerce-date>strong').html(new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear())
                $('td.order-total-amount>strong>ins,.woocommerce-order>strong>ins').html(curr(thanh_toan,'.', '.'))
                $('.woocommerce-method>strong').html(localStorage.getItem('for_payment_saved'))
              }   
              $('.payment_methods li').click(function(){
                var $this=$(this).find('.payment_box'),for_payment=$(this).find('input').attr('value')
                $this.show('slow');$('.payment_box').not($this).hide();localStorage.setItem('for_payment_saved',for_payment)
              })     
              setTimeout(function(){$('.loading').removeClass('loading')},1000)
              $('.woocommerce-checkout').on('submit',function(){
                $(this).addClass('loading');setTimeout(function(){$('.loading').removeClass('loading');location.href=order.url},1000)
              })
            }
        }
        if(data.blog.pageName=='Cart'){if(localStorage.getItem('saved_data')===null)$('.page-body').html(cart_empty_page)
        }else if(data.blog.pageName=='Checkout'){
         if(localStorage.getItem('saved_data')===null)location.href=cart.url
        }else if(data.blog.pageName=='Order Complete'){
          if(localStorage.getItem('saved_data')!=null){$(window).unload(function(){localStorage.removeItem('saved_data')})
          }else{location.href=cart.url}
        }
      }
      window.addEventListener('load',function(){
        _cart_page();$('.product-summary form.cart').submit(_add_to_cart)
        if(data.blog.pageName=='Wishlist')$('.single_add_to_cart_button').click(_add_to_cart)
      })