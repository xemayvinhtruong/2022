    var url=window.location.href,uri=window.location.toString(),chiet_khau=pt_dg.replace('%','')
    rel=document.querySelector('link[rel="canonical"]').getAttribute('href'),
    fb1=url.substring(0,url.indexOf('?fbclid')),fb2=url.substring(0,url.indexOf('&fbclid')),
    gi1=url.substring(0,url.indexOf('?gidzl')),gi2=url.substring(0,url.indexOf('&gidzl')),
    m1=url.substring(0,url.indexOf('?m=1')),m2=url.substring(0,url.indexOf('&m=1'))
    if((uri.length-fb1.length)>0)window.history.replaceState({},document.title,fb1)
    if((uri.length-fb2.length)>0)window.history.replaceState({},document.title,fb2)
    if((uri.length-gi1.length)>0)window.history.replaceState({},document.title,gi1)
    if((uri.length-gi2.length)>0)window.history.replaceState({},document.title,gi2)
    if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i)===null
    ||window.navigator.pointerEnabled&&navigator.maxTouchPoints>1){
      document.documentElement.setAttribute('data-view-type','desktop')
      if((uri.length-m1.length)>0){window.history.replaceState({},document.title,m1)}
      if((uri.length-m2.length)>0){window.history.replaceState({},document.title,m2)}
      var _a=document.querySelectorAll('a')
      for(var i=0;i<_a.length;i++){
        var _b=_a[i].getAttribute('href')
        if(_b!=null){
          if(_b.indexOf('?m=1')!=-1)_a[i].setAttribute('href',_b.substr(0,_b.indexOf('?m=1')))
          if(_b.indexOf('&m=1')!=-1)_a[i].setAttribute('href',_b.substr(0,_b.indexOf('&m=1')))
        }
      }
    }else{document.documentElement.setAttribute('data-view-type','mobile')}
    function appendChildHead(name,type){
      if(type=='css'){
        var fileref=document.createElement('link');fileref.setAttribute('rel','stylesheet');fileref.setAttribute('href',name)
      }else if(type=='js'){
        var fileref=document.createElement('script')
        fileref.setAttribute('type','text/javascript');fileref.setAttribute('async','');fileref.setAttribute('src',name)
      }
      if(typeof fileref!='undefined'){document.getElementsByTagName('head')[0].appendChild(fileref)}
    }
    function appendChildBody(name,type){
      if(type=='js')var src=document.createElement('script');src.setAttribute('async','');src.setAttribute('src',name)
      if(typeof src!='undefined')document.getElementsByTagName('body')[0].appendChild(src)
    }
    function curr(r,t,e){x=(r+="").split(t),x1=x[0],x2=x.length>1?"."+x[1]:"";for(var n=/(\d+)(\d{3})/;n.test(x1);)x1=x1.replace(n,"$1"+e+"$2");return x1+x2}
    function _percent_off(){
      var per=$('.percent-off')
      if(per.length!=''){
        $(per).each(function(i){
          var price=$(per[i]).parents('.data-product').attr('data-product-price').replace(/\./gi,''),
            sale=$(per[i]).parents('.data-product').attr('data-product-sale').replace(/\./gi,'')
          $(per[i]).html('<strong>-'+Math.ceil(((sale-price)/sale)*100)+'%</strong>')
        })
      }
    }
    function data_address(){
      if(data.blog.pageName!='Checkout'){
       $('#form-quick-buy select[data-address-type]').select2({width:'100%',dropdownParent:$('#form-quick-buy .modal--body')})
       $('#form-order select[data-address-type]').select2({width:'100%',dropdownParent:$('#form-order .modal--body')})
      }else{$('select[data-address-type]').select2({width:'100%',language:{noResults:function(){return 'Không tìm thấy kế quả'}}})}
      $('select[name="billingProvince"]').change(function(){$('input.billing_address_1').attr('value',$(this).select2('data')[0].text)})
      $('select[name="billingDistrict"]').change(function(){$('input.billing_address_2').attr('value',$(this).select2('data')[0].text)})
      $('select[name="billingWard"]').change(function(){$('input.billing_address_3').attr('value',$(this).select2('data')[0].text)})
    }
    function size_check(){
      $(this).addClass('checked');$('form.cart table.variations .sizes label').not($(this)).removeClass('checked')
      $(this).parents('.data-product').attr('user-select-size',$(this).find('input').val())
    }
    function color_check(){
      $(this).addClass('checked');$('form.cart table.variations .color label').not($(this)).removeClass('checked')
      $(this).parents('.data-product').attr('user-select-color',$(this).find('input').val())
    }
    function _increase_quantity(){
      $('.buttons_added input.min-max').each(function(){
        var $this=$(this),qty=$this.parent().find('.is-form'),min=Number($this.attr('min')),max=Number($this.attr('max'))
        if(min==0)var d=0;else d=min
        $(qty).on('click',function(){
          if($(this).hasClass('minus')){if(d>min)d+=-1
          }else if($(this).hasClass('plus')){var x=Number($this.val())+1;if(x<=max)d+=1}
          $this.attr('value',d).val(d);$this.parents('.data-product').attr('data-product-quantity',d)
        })
        $this.change(function(){d=Number($this.val());if(d<min)d=min;if(d>max)d=max
          $this.attr('value',d).val(d);$this.parents('.data-product').attr('data-product-quantity',d)
        })
      })
    }
    function modal_open(e){
      e.preventDefault();var target='#'+$('.modal--target').attr('id')
      if($(this).is('a'))target=$(this).attr('href')
      else target=$(this).attr('data-target')
      $(target).show();$(target).fadeIn(1000,function(){$(target).find('.modal--confirm').addClass('show')})
      $('.modal--close').click(function(){
        $(target).find('.modal--confirm').removeClass('show');setTimeout(function(){$(target).removeAttr('style')},1000)
      })
      if($('body').hasClass('overflow'))$('.modal--confirm.quick--view').remove();$('body').removeAttr('class')        
    }
    function form_subscribe(){
      var confirm=$('#form-subscribe').find('.modal--confirm')
      $('#form-subscribe .modal--close').click(function(){
        $(confirm).removeClass('show');setTimeout(function(){$('#form-subscribe').removeAttr('style')},1000)
      }) 
      $('#form-subscribe input[type="checkbox"]').change( function(){
        if($(this).is(':checked'))localStorage.setItem('show_this_popup','true')
        else localStorage.removeItem('show_this_popup')
      })
      if(localStorage.getItem('show_this_popup')!='true'){
        setTimeout(function(){
          $('#form-subscribe').show();$('#form-subscribe').fadeIn(1000,function(){$(confirm).addClass('show')}) 
          $('#form-subscribe .checked').removeClass('hidden')  
        },data.settings.timeOut)      
      } 
    }
    function quick_buy(e){
      e.preventDefault();var $this=$(this).parents('.data-product'),form=$('form[name=quick_buy]'),
      button=$(form).find('.is-form'),qty=$(form).find('input.input-text'),FR=$('#form-quick-buy').html(),
      sl_sp=Number($this.attr('data-product-quantity')),ten_sp=$this.attr('data-product-name'),
      gia_sp=Number($this.attr('data-product-price').replace(/\./gi,'')),tam_tinh=sl_sp*gia_sp,phi_ship=0,khuyen_mai=0,kt_sp=0,mau_sp=0
      if(data.settings.discount!='true'){$(form).find('tr.discount').remove()
      }else{if(tam_tinh>=gt_dh)khuyen_mai=tam_tinh*(chiet_khau/100)}
      var thanh_toan=(tam_tinh-khuyen_mai)+phi_ship,add1='',add2='',min=Number($(qty).attr('min')),max=Number($(qty).attr('max')),
      order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt,
      bil1=$(form).find('input.billing_address_1'),bil2=$(form).find('input.billing_address_2')
      $(qty).attr('value',sl_sp);$(form).find('td.product_name').html('<strong>'+ten_sp+'</strong>')
      $(form).find('td.product_price>strong>ins').html(curr(gia_sp,'.', '.'))
      function reset_form(){
        $(form).find('td.product_name').html('');$(form).find('td.product_price>strong>ins').html('0')
        $(qty).attr('value',1).val(1);$(form).find('td.product_sizes').html('');$(form).find('td.product_color').html('')
        $(form).find('td.sub_total>strong>ins').html('0');$(form).find('td.shipping_price>strong>ins').html('0')
        $(form).find('td.discount>strong>ins').html('0');$(form).find('td.payment_total>strong>ins').html('0')
        $(form).find('input.sub_total').attr('value',0);$(form).find('input.shipping_price').attr('value',0)
        $(form).find('input.discount').attr('value',0);$(form).find('input.payment_total').attr('value',0)
        $(form).find('input.order_total').attr('value',0);$(form).find('tr.sizes,tr.color').removeClass('hidden')
      }
      function calculator(){
        $(form).find('td.sub_total>strong>ins').html(curr(tam_tinh,'.', '.'))
        $(form).find('td.shipping_price>strong>ins').html(curr(phi_ship,'.', '.'))
        $(form).find('td.discount>strong>ins').html(curr(khuyen_mai,'.', '.'))
        $(form).find('td.payment_total>strong>ins').html(curr(thanh_toan,'.', '.'))
        $(form).find('input.sub_total').attr('value',tam_tinh+dv_tt)
        $(form).find('input.shipping_price').attr('value',phi_ship+dv_tt)
        $(form).find('input.discount').attr('value',khuyen_mai+dv_tt)
        $(form).find('input.payment_total').attr('value',curr(thanh_toan,'.', '.')+dv_tt)
        $(form).find('input.order_total').attr('value',order_total)
      }
      calculator()
      if($this.find('.variations_form').length!=''){
        if($this.find('.variations_form tr.sizes').length!=''){
          var label=$this.find('.variations_form tr.sizes li')
          $(label).each(function(i){$(form).find('td.product_sizes').append('<strong>'+$(label[i]).html()+'</strong>')})
          var x=$(form).find('td.product_sizes input')
          $(x).each(function(m){
            $(x[m]).click(function(){kt_sp=$(this).val()
              order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
            })
          })
        }else{$(form).find('tr.sizes').addClass('hidden')}
        if($this.find('.variations_form tr.color').length!=''){
          var label=$this.find('.variations_form tr.color li')
          $(label).each(function(i){$(form).find('td.product_color').append('<strong>'+$(label[i]).html()+'</strong>')})    
          var y=$('td.product_color input')
          $(y).each(function(n){
            $(y[n]).click(function(){mau_sp=$(this).val()
              order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
            })
          })
        }else{$(form).find('tr.color').addClass('hidden')}
      }else{$(form).find('tr.sizes,tr.color').addClass('hidden')}
      if(data.settings.freeship!='true'){
        $('select[name="billingProvince"]').change(function(){
          add1=$(this).select2('data')[0].text
          tam_tinh=Number($(form).find('td.sub_total>strong>ins').html().replace(/\./gi,''))
          if(tam_tinh>=gt_dh){phi_ship=0
          }else if(add1!='-- Chọn --'){
            if(kv1.includes(add1))phi_ship=0
            else if(kv2.includes(add1))phi_ship=Number(phi_vc1)
            else if(kv3.includes(add1))phi_ship=Number(phi_vc2)
            else phi_ship=Number(phi_vc)
          }else{phi_ship=Number(phi_vc)}
          khuyen_mai=Number($(form).find('td.discount>strong>ins').html().replace(/\./gi,''));thanh_toan=(tam_tinh-khuyen_mai)+phi_ship
          order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
        })
        $('select[name="billingDistrict"]').change(function(){
          add2=$(this).select2('data')[0].text
          tam_tinh=Number($(form).find('td.sub_total>strong>ins').html().replace(/\./gi,''))
          if(tam_tinh>=gt_dh){phi_ship=0
          }else if(add2!='-- Chọn --'){if(kv2.includes(add2))phi_ship=Number(phi_vc1)}
          khuyen_mai=Number($(form).find('td.discount>strong>ins').html().replace(/\./gi,''));thanh_toan=(tam_tinh-khuyen_mai)+phi_ship
          order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
        }) 
      }else{$(form).find('td.shipping_price').html('<strong>'+data.messages.freeship+'</strong>')}
      $(button).click(function(){
        sl_sp=Number($(qty).attr('value'));tam_tinh=sl_sp*gia_sp
        if(data.settings.freeship!='true'){
          if(data.settings.discount=='true'){
            if(tam_tinh>=gt_dh){
              phi_ship=0;khuyen_mai=tam_tinh*(chiet_khau/100)
            }else{
              khuyen_mai=0
              add1=$(bil1).attr('value');add2=$(bil2).attr('value')
              if(add1!='0'){
                if(kv1.includes(add1))phi_ship=Number(phi_vc1)
                else if(kv2.includes(add1))phi_ship=Number(phi_vc2)
                else phi_ship=Number(phi_vc)
              }else if(add2!='0'){
                if(kv1.includes(add1))phi_ship=Number(phi_vc1)
                else if(kv2.includes(add1))phi_ship=Number(phi_vc2)
                else phi_ship=Number(phi_vc)
              }else{phi_ship=0}
            }
          }
        }else{
          if(data.settings.discount=='true'){
            if(tam_tinh>=gt_dh)khuyen_mai=tam_tinh*(chiet_khau/100)
            else khuyen_mai=0
          }else{khuyen_mai=0}
        }
        thanh_toan=(tam_tinh-khuyen_mai)+phi_ship
        order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
      })
      $(qty).change(function(){
        sl_sp=Number($(this).val());if(sl_sp<min)sl_sp=min;if(sl_sp>max)sl_sp=max;tam_tinh=sl_sp*gia_sp
        if(data.settings.freeship!='true'){
          if(data.settings.discount=='true'){
            if(tam_tinh>=gt_dh){
              phi_ship=0;khuyen_mai=tam_tinh*(chiet_khau/100)
            }else{
              khuyen_mai=0;add1=$(bil1).attr('value');add2=$(bil2).attr('value')
              if(add1!='0'){
                if(kv1.includes(add1))phi_ship=Number(phi_vc1)
                else if(kv2.includes(add1))phi_ship=Number(phi_vc2)
                else phi_ship=Number(phi_vc)
              }else if(add2!='0'){
                if(kv1.includes(add1))phi_ship=Number(phi_vc1)
                else if(kv2.includes(add1))phi_ship=Number(phi_vc2)
                else phi_ship=Number(phi_vc)
              }else{phi_ship=0}
            }
          }
        }else{
          if(data.settings.discount=='true'){if(tam_tinh>=gt_dh)khuyen_mai=tam_tinh*(chiet_khau/100);else khuyen_mai=0
          }else{khuyen_mai=0}
        }
        thanh_toan=(tam_tinh-khuyen_mai)+phi_ship;order_total=ten_sp+' x '+sl_sp+' x '+curr(gia_sp,'.', '.')+dv_tt+' x '+kt_sp+' x '+mau_sp+' = '+curr(tam_tinh,'.', '.')+dv_tt;calculator()
      })
      $('#form-quick-buy .modal--close').click(reset_form)
    }
    function form_order(e){e.preventDefault();var $this=$(this).parents('.data-product'),
      form=$('form[name=form_order]'),button=$(form).find('.is-form'),qty=$(form).find('input.input-text'),
      sl_sp=Number($this.attr('data-product-quantity')),ten_sp=$this.attr('data-product-name'),order_total=ten_sp+' x '+sl_sp
      $(form).find('td.product_name').html('<strong>'+ten_sp+'</strong>');$(form).find('input.order_total').attr('value',order_total) 
      $(button).click(function(){
        sl_sp=Number($(qty).attr('value'));order_total=ten_sp+' x '+sl_sp;$(form).find('input.order_total').attr('value',order_total)
      })
      $(qty).change(function(){
        sl_sp=Number($(this).val());order_total=ten_sp+' x '+sl_sp;$(form).find('input.order_total').attr('value',order_total)
      })
      function reset_form(){
        $(form).find('td.product_name').html('');$(qty).attr('value',1).val(1);$(form).find('input.order_total').attr('value',0)
      }
      $('#form-order .modal--close').click(reset_form)
    }
    function submit_form(){
      var $this=$(this);$this.addClass('processing');$this.find('.background-overlay').removeClass('hidden')
      function one(callback){setTimeout(function(){$this.removeClass('processing').addClass('success');callback()},4000)}
      function two(){
        setTimeout(function(){
          $this.removeClass('success');$this.find('.background-overlay').addClass('hidden')
          $this[0].reset();$this.find('.required').removeClass('required');console.clear()
        },4000)
      }
      one(two)
    }
    function recommended_products(){
      $.get('/search/label/Sản%20phẩm?max-results=500',function(data){
        var a=$(data).find('.product-col>.data-product')
        if(a.length){
          var limit=10;if(a.length<limit)limit=a.length;let arr=[]
          do{let num=Math.floor(Math.random()*a.length)
            arr.push(num);arr=arr.filter((item,index)=>{return arr.indexOf(item)===index})
          }while(arr.length<limit)
          arr.forEach(function(i){
            var name=$(a[i]).attr('data-product-name'),href=$(a[i]).attr('data-product-url'),
            src=$(a[i]).attr('data-product-image').replace('s1600','s90'),price=$(a[i]).attr('data-product-price'),
            html='<div class="notifications-wrapper right hide"><a class="flex-align" href='+href+'><div><img src='+src+'></div><div><p><strong>Đề xuất cho bạn</strong></p><p>'+name+'</p><p><span class="price"><ins>'+price+'</ins><label class="unit">'+dv_tt+'</label></span></p></div></a></div>'  
            $(html).appendTo('body') 
          })
          var current=0,divs=$('.notifications-wrapper')
          setInterval(function(){
            $(divs).addClass('hide');$(divs).eq(current).removeClass('hide')
            if(current<divs.length-1)current++;else current=0
          },10000)
        }
      })
    }
    function owl_carousel(){var slider=$('.data-carousel')
      $(slider).each(function(el){$(slider[el]).owlCarousel($(slider[el]).data('carousel-options'))})
    }
    function product_images_slider(){var m=$('.data-product')
      $(m).each(function(n){
        var sync1=$(m[n]).find('.product-image-slider'),sync2=$(m[n]).find('.product-thumbs-slider'),slidesPerPage=4,
          syncedSecondary=true,zoom=$(m[n]).find('.product-images .img-thumbnail .inner'),z=$(m[n]).find('.product-images .zoom'),
          f=$(m[n]).find('.product-images .img-thumbnail img:first-child')
        function syncPosition(el){
          var current=el.item.index
          sync2.find('.owl-item').removeClass('selected').eq(current).addClass('selected')
          sync2.data('owl.carousel').to(current,100,true)
        }
        function syncPosition2(el){if(syncedSecondary){var number=el.item.index;sync1.data('owl.carousel').to(number,100,true)}}
        sync1.owlCarousel({
          items:1,slideSpeed:5000,autoplay:false,autoplayHoverPause:true,dots:false,nav:true,navText:['',''],
          }).on('changed.owl.carousel',syncPosition)
        sync2
          .on('initialized.owl.carousel',function(){sync2.find('.owl-item').eq(0).addClass('selected')})
        .owlCarousel({items:4,margin:8,dots:false,nav:true,smartSpeed:200,slideSpeed:500,slideBy:slidesPerPage
          }).on('changed.owl.carousel',syncPosition2)
        sync2.on('click','.owl-item',function(e){
          e.preventDefault();$(this).addClass('selected');sync2.find('.owl-item').not($(this)).removeClass('selected')
          var number=$(this).index();sync1.data('owl.carousel').to(number,300,true)
        })
        if(data.view.isMobile!='true'){
          if(data.settings.zoom=='true'){$(zoom).each(function(i){$(zoom[i]).zoom({url:$(zoom[i]).find('img').attr('href')})})}
          if(data.settings.lightbox=='true'){
            $(z).click(function(){$.fancybox.open($(f),{buttons:['slideShow','thumbs','zoom','fullScreen','close']})})
          }else{$(z).remove()}
        }
      })
    }
    function header_sticky(){
      var hD=$('#header').height()
      $(window).scroll(function(){
        if($(this).scrollTop()>hD)$('#header').addClass('header-sticky');else $('#header').removeClass('header-sticky')
        if($(this).scrollTop()=='0'){
          $('.menu .header-search-icon.show').removeClass('show')
          $('.menu .header-search-icon>a').attr({'aria-expanded':false,'aria-pressed':false})
          $('.menu .header-action-dropdown').attr('aria-hidden','true')
        }
      })
    }
    function open_sidebar(){
      $('html').toggleClass('sidebar-opened');$('.sidebar-overlay').toggleClass('active')
      if($('.sidebar-overlay').hasClass('active'))$(this).find('.has-svg-icon').removeClass('toggle-icon').addClass('close-icon')
      else $(this).find('.has-svg-icon').removeClass('close-icon').addClass('toggle-icon')
    }
    function open_footer(){
      function opened(e){
        e.preventDefault();$(this).toggleClass('opened');$(this).next('ul').slideToggle()
        $('.footer .togged-footer').not($(this)).next('ul').hide()
        $('.footer .togged-footer').not($(this)).removeClass('opened')
      }
      if(data.view.isMobile!='true'){
        if(window.matchMedia('(max-width:767px)').matches){$('.footer .togged-footer').click(opened)}
        $(window).on('resize',function(){
          if(this.matchMedia('(max-width:767px)').matches){$('.footer .togged-footer').click(opened)
          }else{$('.footer .togged-footer').removeClass('opened');$('.footer ul.footer-collapse').removeAttr('style')
          $('.footer .togged-footer').unbind('click')}
        })
      }
      if(data.view.isMobile=='true'){$('.footer .togged-footer').click(opened)}
    }
    function sidebar_filter(){var a=$('ul.product-categories li a'),c=$('ul.product-filter-size span,ul.product-filter-color span'),
      f=$('ul.product-filter-price span'),sort=$('ul.products>li>.card')
      $('.widget .widget-title .toggle').click(function(){
        $(this).parent().parent().toggleClass('closed').find('.widget-content').slideToggle()
      })
      $(a).each(function(i){var b=$(a[i]).text()
        if(b==data.blog.pageName){
          $(a[i]).parent().addClass('current');$(a[i]).parents('.cat-parent').removeClass('closed').addClass('open')
          $(a[i]).parents('.cat-parent').find('ul.children').show()
        }
      })
      $('ul.product-categories .toggle').click(function(){
        var li=$(this).parent();li.find('ul.children').slideToggle()
        if(li.hasClass('closed'))li.removeClass('closed').addClass('open')
        else if(li.hasClass('open'))li.addClass('closed').removeClass('open')
        $('ul.product-categories>li').not(li).addClass('closed').removeClass('open')
        $('ul.product-categories>li').not(li).find('ul.children').hide()
      })
      $(c).each(function(i){var d=$(c[i]).find('input').attr('value')
        if(d==data.blog.pageName)$(c[i]).addClass('checked').find('input').attr('checked','checked')
      })
      $(f).each(function(i){var g=$(f[i]).find('input').attr('value')
        if(g==data.blog.pageName){
          $(f[i]).addClass('checked').find('input').attr('checked','checked')
          $('ul.product-filter-price span').not($(f[i])).removeAttr('class').find('input').removeAttr('checked')
        }
      })
      $('.product-filter-price span').click(function(){
        $(this).addClass('checked');$('.product-filter-price span').not($(this)).removeAttr('class')
      })
      $('.product-filter-size span').click(function(){
        $(this).addClass('checked');$('.product-filter-size span').not($(this)).removeAttr('class')
      })
      $('.product-filter-color span').click(function(){
        $(this).addClass('checked');$('.product-filter-color span').not($(this)).removeAttr('class')
      })
      $('.widget-filter form').submit(function(e){
        e.preventDefault();location.href='/search/label/'+$(this).find('span.checked input').val()+'?max-results=12'
      })
      $('.gridlist-toggle>.grid-layout').click(function(){
        $(this).addClass('active');$('.gridlist-toggle>.active').not($(this)).removeClass('active')
        if($('ul.products').hasClass('list')){$('ul.products').addClass('skeleton-body').removeClass('list')
        setTimeout(function(){$('.skeleton-body').removeClass('skeleton-body')},2000)}
      })
      $('.gridlist-toggle>.list-layout').click(function(){
        $(this).addClass('active');$('.gridlist-toggle>.active').not($(this)).removeClass('active')
        if(!$('ul.products').hasClass('list')){$('ul.products').addClass('list skeleton-body')
        setTimeout(function(){$('.skeleton-body').removeClass('skeleton-body')},2000)}
      })
      $('.shop-loop-before select').change(function(){
        $('.shop-loop-before select :selected').attr('selected','selected')
        $('.shop-loop-before select option').not($('.shop-loop-before select :selected')).removeAttr('selected')
        $('ul.products').addClass('skeleton-body');setTimeout(function(){$('.skeleton-body').removeClass('skeleton-body')},1000)
      })
      $(sort).each(function(i){
        $('.shop-loop-before select').change(function(v){
          v=$('.shop-loop-before select :selected').val();$(sort[i]).parent().removeAttr('style')
          if(!['all','oldest'].includes(v)){if(!$(sort[i]).hasClass(v))$(sort[i]).parent().fadeOut()}
          if(v=='all')$(sort[i]).parent().removeAttr('style')    
        })
      })
    }
    function auto_search(){
      var ele=$('.header-middle .web-search'),input=ele.find('input[type="search"]'),submit=ele.find('button.submit'),
      reset=ele.find('button.reset'),wrap=ele.find('.searchresults-wrapper'),content=ele.find('.results-content'),
      recommend=ele.find('ul.recommend'),results=ele.find('ul.results')
      reset.click(function(){content.addClass('hidden');recommend.empty();results.empty();reset.addClass('hidden')})
      function recommend_search(e){
        var txt='<li class="flex-align"><strong class="flex-left">Sản phẩm được đề xuất</strong><strong class="flex-right">Giá</strong></li>'
        if(input.val()==''){
          if(recommend.find('li').length==''){
            reset.removeClass('hidden');wrap.addClass('h100');content.removeClass('hidden');recommend.addClass('loading')
            $.get('/search/label/'+lb_sp+'?max-results='+data.blog.searchindex,function(e){
              var a=$(e).find('.product-col>.data-product')
              if(a.length){recommend.append(txt)
                var limit=25;if(a.length<limit)limit=a.length;let arr=[]
                do{let num=Math.floor(Math.random()*a.length);arr.push(num);arr=arr.filter((item,index)=>{return arr.indexOf(item)===index})
                }while(arr.length<limit)
                arr.forEach(function(b){
                  var c=$(a[b]),d=c.attr('data-product-url'),e=c.attr('data-product-name'),
                  f=c.attr('data-product-image').replace('s1600','s50-c'),g=c.attr('data-product-price'),h=c.attr('data-product-sale')
                  if(h!='0')var i='<br><span class="sale-off"><del>'+h+'</del><label class="unit">'+dv_tt+'</label></span>'
                  else i='';if(g!='0')var k='<span class="price"><ins>'+g+'</ins><label class="unit">'+dv_tt+'</label></span>'
                  else k='<strong>'+data.messages.contact+'</strong>'
                  wrap.removeClass('h100');recommend.removeClass('loading')
                  recommend.append('<li><a href='+d+' title="'+e+'"><div class="product-image"><img alt="'+e+'" src='+f+'></div><div class="product-title">'+e+'</div><div class="product-price">'+k+i+'</div></a></li>')
                })
              }
            })
          }
        }
      };var typingTimer
      function live_search(e){
        clearTimeout(typingTimer)
        if($(this).val()!=''){var str=$(this).val()
          typingTimer=setTimeout(function(){
            if(str.length>=3){
              submit.addClass('searching');wrap.addClass('h100');recommend.empty();results.addClass('loading')
              var search_url='/search?q='+str+'&max-results='+data.blog.searchindex
              $.get(search_url,function(e){var a=$(e).find('.product-col>.data-product')
                if(a.length){
                  var txt='<li class="flex-align"><strong class="flex-left">Sản phẩm được tìm thấy</strong><strong class="flex-right">'+a.length+' kết quả</strong></li>';results.empty().append(txt)
                  for(let b=0;b<a.length;b++){
                    var c=$(a[b]),d=c.attr('data-product-url'),e=c.attr('data-product-name'),
                    f=c.attr('data-product-image').replace('s1600','s50-c'),g=c.attr('data-product-price'),h=c.attr('data-product-sale')
                    if(h!='0')var i='<br><span class="sale-off"><del>'+h+'</del><label class="unit">'+dv_tt+'</label></span>'
                    else i='';if(g!='0')var k='<span class="price"><ins>'+g+'</ins><label class="unit">'+dv_tt+'</label></span>'
                    else k='<strong>'+data.messages.contact+'</strong>'
                    submit.removeClass('searching');wrap.removeClass('h100');results.removeClass('loading')
                    results.append('<li><a href='+d+' title="'+e+'"><div class="product-image"><img alt="'+e+'" src='+f+'></div><div class="product-title">'+e+'</div><div class="product-price">'+k+i+'</div></a></li>')
                  }
                }else{
                  submit.removeClass('searching');wrap.removeClass('h100');results.removeClass('loading')
                  results.html('<strong>'+data.messages.noResultsFound+'</strong>')
                }
              })
            }
          },500)
        }else{results.empty();recommend_search()}
      };input.click(recommend_search);input.keyup(live_search)
    }
    function footer_bar(){
      var x=window.pageYOffset,nabar=document.querySelector('.footer-navigation-bar'),
      button=document.querySelector('.footer-navigation-bar .open-menu'),
      toggle=$('.footer-navigation-bar .open-search'),header=document.querySelector('header.header'),
      menu=document.querySelector('header.header .menu'),mobile=$('.header-icon .header-action-dropdown'),
      show=$('.header-icon  .header-search-icon'),icon=$('.header-icon .header-search-icon>a'),
      overlay=document.querySelector('.overlay')
      window.addEventListener('scroll',function(){
        var y=window.pageYOffset,z=document.documentElement.scrollHeight-1100
        if(y>z)nabar.classList.add('visible');else nabar.classList.remove('visible')
        if($(window).scrollTop()==0)nabar.classList.add('visible')        
      })
      button.addEventListener('click',function(e){
        e.stopPropagation();nabar.classList.add('visible');overlay.classList.remove('hidden');menu.classList.remove('section')
      })
      $(toggle).click(function(){
        $('html,body').animate({scrollTop:0},'slow',function(){
          $(icon).attr({'aria-expanded':'true','aria-pressed':'true'});$(show).addClass('show')
          $(mobile).attr('aria-hidden','true');nabar.classList.add('visible')
          if(!menu.classList.contains('section'))menu.classList.add('section')
          if(!overlay.classList.contains('hidden'))overlay.classList.add('hidden')
        })
      })
      $('.footer-navigation-bar .scroll-top').click(function(){$('html,body').stop().animate({scrollTop:0},1000)})
    }
    window.addEventListener('load',function(){
	  header_sticky();
      if(data.view.isMobile!='true'){
        if(data.settings.liveSearch=='true')auto_search()
        $('.dropdown-item').on({
          mouseover:function(){$(this).parents('.widget').addClass('has-active')},
          mouseleave:function(){$(this).parents('.widget').removeClass('has-active')}
        })
      }
      if(data.view.isHomepage=='true'){
        if(data.settings.popup=='true')form_subscribe()
        $('.home-banner-slider').removeClass('owl-loading');$('.home-banner-slider .loading').removeClass('loading')
      }
      if(data.view.isLabelSearch=='true'||data.view.isSearch=='true'){$('.banner-carousel').removeClass('owl-loading');$('.banner-carousel .loading').removeClass('loading')}
      if(data.view.isPage!='true'){$.ajax({url:'https://cloudflare.com/cdn-cgi/trace',success:function(data){$('input.ip_address').attr('value',data.match(/ip=(.+)/)[1])}})}
      if(data.settings.recommend=='true')setTimeout(recommended_products,3000)
      if(data.settings.widget=='true')setTimeout(appendChildBody('https://cdn.jsdelivr.net/gh/xemayvinhtruong/js/contact-buttons-widget.min.js','js'),3000)      
      _percent_off();_increase_quantity();owl_carousel();data_address();sidebar_filter();open_footer();footer_bar()
      $('.mobile-sidebar .sidebar-toggle').click(open_sidebar)
      setTimeout(function(){$('.skeleton-body').removeClass('skeleton-body')},1000)
      $(document).off('click','.modal--open',modal_open).on('click','.modal--open',modal_open)
      $(document).off('click','button[data-target="#form-quick-buy"]',quick_buy).on('click','button[data-target="#form-quick-buy"]',quick_buy)
      $(document).off('click','button[data-target="#form-order"]',form_order).on('click','button[data-target="#form-order"]',form_order)
      $('form.cart table.variations .sizes label').click(size_check);$('form.cart table.variations .color label').click(color_check)
      $('form[name=quick_buy],form[name=form_order],form[name=form_noti],form[name=contact_form]').on('submit',submit_form)
      const header=document.querySelector('header'),menu=document.querySelector('header.header .menu'),
      title=document.querySelectorAll('.menu .title:not(.home)'),button=document.querySelector('.header button.open'),
      overlay=document.querySelector('.overlay'),close=document.querySelectorAll('.menu .home,.overlay'),
      toggle=$('.header-search-icon>a');var is_load=0,_feeds=0        
      if(window.matchMedia('(max-width:991px)').matches){for(var i=0;i<title.length;i++)title[i].classList.add('has-sub')}
      window.addEventListener('resize',function(){
        if(this.matchMedia('(max-width:991px)').matches){
          for(var i=0;i<title.length;i++){title[i].classList.add('has-sub');title[i].addEventListener('click',function(){this.classList.toggle('has-toggle')})}
        }else{
          if(!menu.classList.contains('section'))menu.classList.add('section')
          if(!overlay.classList.contains('hidden'))overlay.classList.add('hidden')
          for(var i=0;i<title.length;i++)title[i].classList.remove('has-sub')
        }
      })
      for(var i=0;i<title.length;i++){if(title[i].classList.contains('has-sub')){title[i].addEventListener('click',function(){this.classList.toggle('has-toggle')})}}
      $(title).click(function(){
        $(this).next('.dropdown-content').slideToggle();$('.menu .title:not(.home)').not($(this)).addClass('has-toggle')
        $('.menu .title:not(.home)').not($(this)).next('.dropdown-content').hide()
      })
      button.addEventListener('click',function(e){
        e.stopPropagation();button.setAttribute('aria-expanded','true');button.setAttribute('aria-pressed','true')
        overlay.classList.remove('hidden');menu.classList.remove('section')
      })
      for(var i=0;i<close.length;i++){
        close[i].addEventListener('click',function(){
          button.setAttribute('aria-expanded','false');button.setAttribute('aria-pressed','false')
          overlay.classList.add('hidden');menu.classList.add('section')
        })
      }
      menu.addEventListener('click',function(e){e.stopPropagation()})
      $(toggle).click(function(){
        $(this).attr('aria-expanded',function(i,attr){return attr=='true'?'false':'true'})
        $(this).attr('aria-pressed',function(i,attr){return attr=='true'?'false':'true'})
        $(this).parent().toggleClass('show')
        $('.header-action-dropdown').attr('aria-hidden',function(i,attr){return attr=='true'?'false':'true'})
      })
      function loadpl(){
        if(is_load==0){is_load=1
          appendChildHead('//cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css','css')
          appendChildHead('//cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js','js')
        }
      }
      function _cate(){
        if(_feeds==0){_feeds=1;var cate=$('.feed-entry')
          if(cate.length!=''){
            $(cate).each(function(i){
              var r=Number($(cate[i]).attr('data-item')),cate_name=$(cate[i]).attr('data-category'),
              woo=$(cate[i]).find('.woocommerce'),slide=$(cate[i]).find('.widget-content'),
              cate_url='/search/label/'+cate_name+'?max-results='+data.blog.searchindex
              $.get(cate_url,function(e){
                var a=$(e).find('.product-col')
                if(a.length){
                  var b=a.length;if(a.length<r)r=a.length;let arr=[]
                  do{let num=Math.floor(Math.random()*b)
                  arr.push(num);arr=arr.filter((item,index)=>{return arr.indexOf(item)===index})
                  }while(arr.length<r)
                  arr.forEach(function(k){
                    var c='<li class="product-col">'+$(a[k]).html()+'</li>'
                    if(woo.hasClass('columns-3')){
                      if(slide.hasClass('has-related')){
                        $(cate[i]).find('.spinner').addClass('products-slider data-carousel owl-carousel show-dots-title-right pcols-3 pcols-2')
                      }else{$(cate[i]).find('.spinner').addClass('products-slider data-carousel owl-carousel nav-pos-outside show-nav-hover pcols-3 pcols-2')}
                    }else if(woo.hasClass('columns-4')){
                      if(slide.hasClass('has-related')){
                        $(cate[i]).find('.spinner').addClass('products-slider data-carousel owl-carousel show-dots-title-right pcols-4 pcols-3 pcols-2')
                      }else{$(cate[i]).find('.spinner').addClass('products-slider data-carousel owl-carousel nav-pos-outside show-nav-hover pcols-4 pcols-3 pcols-2')}
                    }else{$(cate[i]).find('.spinner').addClass('products-slider data-carousel owl-carousel nav-pos-outside show-nav-hover pcols-5 pcols-4 pcols-3 pcols-2')}
                    $(cate[i]).find('.products-slider').append(c);$(cate[i]).find('.spinner').removeClass('spinner')
                  })
                  _percent_off();if(data.settings.wishlist=='true')_check_wishlist();if(slide.hasClass('has-slider'))owl_carousel()
                }else{$(cate[i]).remove()}
    	$(".pro-image li img").hover(function() {
      	  var t = $(this).parent().attr("data-image");
      	  $(this).parent().siblings().removeClass("active"), $(this).parent().addClass("active");
      	  var d = $(this).parents("article").find(".card-header img");
      	  $(d).attr("src", t);
    	})
              })
            })
          }
        }
      }
      window.addEventListener('scroll',function(){_cate();loadpl()})
      window.addEventListener('mousemove',function(){loadpl()})
      if(document.documentElement.scrollTop>0)_cate();loadpl()
      setTimeout(function(){_cate();loadpl()},1000)
    })
