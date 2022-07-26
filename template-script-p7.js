      $(function(){
        var widget=$('.main-wrapper>.main>.widget'),comments=$('#comments'), _elem=$('.resp-tabs-container .tab-content'),_li=$('.woocommerce-tabs ul>li'),data_embed=$(comments).attr('data-embed'),data_allow_comments=$(comments).attr('data-allow-comments'),elem=document.querySelector('.commentForm'),l='',id='',li=''
        $(_elem).each(function(i){ 
          if(url.indexOf('#'+$(_elem[i]).not(':first-child').attr('aria-labelledby'))!=-1){
            $(_elem[i]).show();$(_elem).not($(_elem[i])).hide()
            $(_li[i]).addClass('resp-tab-active');$(_li).not($(_li[i])).removeClass('resp-tab-active')
            $('html,body').stop().animate({scrollTop:($('#product-tab').offset().top)},1000)
          }
        })
        $(_li).click(function(){
          $(this).addClass('resp-tab-active');$(_li).not($(this)).removeClass('resp-tab-active');var label=$(this).attr('aria-controls')
          $(_elem).each(function(i){
            var _id=$(_elem[i]).attr('aria-labelledby');if(_id==label){$(_elem[i]).show();$(_elem).not($(_elem[i])).hide()}
          })
        })
        $('.product-summary a.devsite-rating').click(function(e){
          e.preventDefault();var target=$(this.hash)
          if(target.length){
            $('#tab-title-reviews').addClass('resp-tab-active');$(_li).not($('#tab-title-reviews')).removeClass('resp-tab-active')
            $('#tab-reviews').show();$(_elem).not($('#tab-reviews')).hide()
            $('html,body').stop().animate({scrollTop:($('#product-tab').offset().top)},'slow')
          }
        })
        if(data_embed=='true'&&data_allow_comments=='true'){
          if(widget.hasClass('shopping')){
            $('#tab-title-reviews,.product-summary a.devsite-rating').one('click',function(){
              if($(elem).hasClass('loading')){
                if(url.indexOf('?showComment')!=-1){appendChildHead('https://www.blogger.com/dyn-css/authorization.css?targetBlogID='+data.blog.blogId,'css')}
                $(elem).append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>')
                $.getScript('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js').done(function(){
                  BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html')
                  $(elem).removeClass('loading')
                })
              }
            })
          }else if(widget.hasClass('archive')){
            if(url.indexOf('?showComment')!=-1){appendChildHead('https://www.blogger.com/dyn-css/authorization.css?targetBlogID='+data.blog.blogId,'css')}
            $(elem).append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>')
            $.getScript('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js').done(function(){
              BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html');$(elem).removeClass('loading')
            })
          }
          if(url.indexOf('#tab_item-3')!=-1||url.indexOf('#reviews')!=-1||url.indexOf('#comments')!=-1||url.indexOf('?showComment')!=-1){
            if($(elem).hasClass('loading')){
              if(url.indexOf('?showComment')!=-1){appendChildHead('https://www.blogger.com/dyn-css/authorization.css?targetBlogID='+data.blog.blogId,'css')}
              $(elem).append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>')
              $.getScript('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js').done(function(){
                BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html');$(elem).removeClass('loading')
              })
            }
            $('#tab-title-reviews').addClass('resp-tab-active');$(_li).not($('#tab-title-reviews')).removeClass('resp-tab-active')
            $('#tab-reviews').show();$(_elem).not($('#tab-reviews')).hide()
            $('html,body').stop().animate({scrollTop:($('#tab-reviews').offset().top)},'slow')
          }
          $('.comment a.comment-reply').click(function(e){
            l=$('#comment-editor').attr('src');$('.calcel-reply').remove()
            $('.comment-actions').removeAttr('style');var $this=$(this),id=$this.attr('data-comment-id')
            l=l+'&parentID='+id;li=$this.parent().parent().parent().attr('id');$('#comment-editor').attr('src',l)
            $this.parent().hide();$(elem).appendTo($('#'+li+'>.comment-replybox-single'))
            elem.scrollIntoView({behavior:'smooth'})
            $('#'+li+'>.comment-replybox-single').append('<div class="calcel-reply"><button class="theme-button blue has-hover" type="button">Hủy</button></div>')
            $('.calcel-reply').click(function(){
              $(this).remove();$('.comment-actions').removeAttr('style')
              $(elem).appendTo($('.comment-form'));elem.scrollIntoView({behavior:'smooth'})
            })
          })  
          $('.toplevel-thread>ol>li>.comment-replies').each(function(){
            if($(this).find('.comment-thread>ol>li').length>0){
              $(this).before('<div class="view-replies"><span class="has-hover">Xem '+$(this).find('.comment-thread>ol>li').length+' câu trả lời</span></div>')
            }
            $('.comment .view-replies>span').click(function(){
              $(this).parent().hide();$(this).parent().next().removeClass('hidden')
            })
          })
          var str=$('.toplevel-thread>ol>li'),m=10,n=str.length,k=0,p=0
          if(url.indexOf('?showComment')!=-1){
            if(url.indexOf('#c')!=-1){
              var li='#'+url.substring(url.indexOf('#c')+1,url.length)
              if($(li).parents('.comment-thread').hasClass('thirdlevel-thread')){
                k=$(li).parents('li').parents('li').index()
              }else if($(li).parents('.comment-thread').hasClass('secondlevel-thread')){
                k=$(li).parents('li').index()
              }else{k=$(li).index()}
              if(k>m){for(var i=0;i<k+1;i++){$(str[i]).removeClass('hidden')}
              }else{for(var i=0;i<m;i++){$(str[i]).removeClass('hidden')}}
              if(k<n){$('#comments .loadmore').removeClass('hidden')}
              $(li).parents('li').find('.view-replies').hide()
              $(li).parents('.comment-replies').removeClass('hidden')
              document.querySelector(li).scrollIntoView({behavior:'smooth'})
            }else{
              for(var i=0;i<m;i++){$(str[i]).removeClass('hidden')}  
              if(n>m){$('#comments .loadmore').removeClass('hidden')}
            }
          }else{
            for(var i=0;i<m;i++){$(str[i]).removeClass('hidden')}  
            if(n>m){$('#comments .loadmore').removeClass('hidden')}
          }
          $('#comments .loadmore>a').click(function(){
            p=$('.toplevel-thread>ol>li.comment.hidden').length
            k=n-p
            if(p==0){
              $(this).parent().addClass('hidden')
              $('#comments .showless').removeClass('hidden')
            }else{
              for(var i=k;i<k+m;i++){$(str[i]).removeClass('hidden')}
            }
          })    
          $('#comments .showless>a').click(function(){
            n=str.length
            for(var i=m;i<n;i++){$(str[i]).addClass('hidden')}    
            $(this).parent().addClass('hidden')
            $('#comments .loadmore').removeClass('hidden')  
            elem.scrollIntoView({behavior:'smooth'})           
          })
          if(url.indexOf('#comments')!=-1){elem.scrollIntoView({behavior:'smooth'})}
          $('.product-summary .devsite-rating').click(function(){$('html,body').animate({scrollTop:$(elem).offset().top-50},1000)})
          var data_id,rating_id,item,num,rating_added='',rate_num='',list_id=[]
          function star_rating(){
            $(item).on({
              mouseover:function(){
                num=$(this).index()
                $(this).parent().parent().attr('hover-rating-star',num+1)
                for(var i=0;i<=num;i++){$(item[i]).addClass('devsite-rating-star-full')}
              },
              mouseleave:function(){
                for(var i=0;i<=4;i++){$(item[i]).removeClass('devsite-rating-star-full')}
                $(this).parent().parent().attr('hover-rating-star',0)
              },
              click:function(){
                num=$(this).index();data_id=$(this).parent().attr('data-id')
                $(this).unbind('mouseleave')
                for(var i=0;i<=num;i++){$(item[i]).addClass('devsite-rating-star-full')}
                for(var k=num+1;k<=4;k++){$(item[k]).removeClass('devsite-rating-star-full')}
                $(this).parent().parent().attr('selected-rating',num+1)
                rating_id='<span data-selected-rating='+num+' id='+data_id+'></span>'
                var id=$('#rating-id>span')
                if(id.length){
                  for(var k=0;k<id.length;k++){list_id.push(id[k].id)}
                  if(list_id.includes(data_id)){
                    var n='#'+data_id;$(n).attr('data-selected-rating',num)
                  }else{$('#rating-id').append(rating_id)}
                }else{$('#rating-id').html(rating_id)}
                rating_added=$('#rating-id').html()
                localStorage.setItem('rating_added',rating_added)
              }
            })
          }
          $('#rating .devsite-rating-stars').each(function(){
            var $this=$(this)
            item=$this.find('.devsite-rating-star')
            data_id=$this.attr('data-id')
            if(rating_added=localStorage.getItem('rating_added')){
              $('#rating-id').html(rating_added)
              var id=document.querySelector('#rating-id').getElementsByTagName('span')
              for(var k=0;k<id.length;k++){list_id.push(id[k].id)}
              if(list_id.includes(data_id)){
                $('#rating-id').each(function(){
                  var n='#'+data_id
                  num=$(this).find(n).attr('data-selected-rating')
                  rate_num=Number($(this).find(n).attr('data-selected-rating'))+1
                  $this.parent().attr('selected-rating',rate_num)
                  for(var i=0;i<=num;i++){$(item[i]).addClass('devsite-rating-star-full')}
                  $(item).click(function(){
                    num=$(this).index()
                    $('#rating-id').find(n).attr('data-selected-rating',num)
                    $this.parent().attr('selected-rating',num+1)
                    for(var i=0;i<=num;i++){
                      $(item[i]).addClass('devsite-rating-star-full')
                    }
                    for(var k=num+1;k<=4;k++){$(item[k]).removeClass('devsite-rating-star-full')}
                    rating_added=$('#rating-id').html()
                    localStorage.setItem('rating_added',rating_added)
                  })
                  $(item).hover(function(){
                    num=$(this).index()
                    $(this).parent().parent().attr('hover-rating-star',num+1)
                    if(rate_num==num+1){for(var i=0;i<rate_num;i++){$(item[i]).addClass('devsite-rating-star-full')}
                    }else{for(var i=0;i<=num;i++){$(item[i]).addClass('devsite-rating-star-full')}}
                  },function(){
                    rate_num=Number($(this).parent().parent().attr('selected-rating'))
                    for(var i=rate_num;i<=4;i++){$(item[i]).removeClass('devsite-rating-star-full')}
                    $(item).click(function(){
                      num=$(this).index()
                      for(var i=0;i<=num;i++){$(item[i]).addClass('devsite-rating-star-full')}
                    })
                    $(this).parent().parent().attr('hover-rating-star',0)
                  })
                })
              }else{star_rating()}
            }else{star_rating()}
          })
        }
      })