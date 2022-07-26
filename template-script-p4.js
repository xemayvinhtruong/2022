      function _popup(){
        var a=document.getElementsByClassName('social-wrapper'),o=a.length
        for(var i=0;i<o;i++){
          a[i].addEventListener('click',function(t){
            t.preventDefault();t=this.getAttribute('href')
            var o=screen.width/2-200,n=screen.height/2-225;
            window.open(t,"popUpWindow","height=450,width=400,left="+o+",top="+n+ ",resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes")
          })
        }
      }
      function _copy(e){
        var t=document.createElement('textarea');t.value=e,document.body.appendChild(t),t.select()
        try{document.execCommand('copy')
        }catch(o){alert("!!!")}
        document.body.removeChild(t)
      }
      function _append(){
        $('body').append('<div class="modals"><div class="modals-dialog"><div class="modals-dialog-content">'+data.messages.linkCopiedToClipboard+' <svg class="modals-dialog-buttons" height="21px" width="21px" viewBox="0 0 24 24"><path fill="#fff" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></div></div></div>')
        setTimeout(function(){$('.modals').remove()},4000)
        $('.modals-dialog-buttons').click(function(){$(this).parents('.modals').remove()})
      }
      function _share_this_post(e){
        e.preventDefault()
        var $this=$(this).parents('.card'),_id=$this.attr('data-product-sku'),
        _url=$this.find('.card-content .title a').attr('href'),_thumb=$this.find('.card-header>a>img').attr('data-src'),
        _sum=$this.find('.card-content .snippets>p').text(),_fb='https://www.facebook.com/sharer.php?u='+_url,
        _tw='https://twitter.com/intent/tweet?url='+_url+'&text='+_sum,
        _pi='https://www.pinterest.com/pin/create/button/?url='+_url+'&description='+_sum+'&media='+_thumb,
        _li='https://www.linkedin.com/sharing/share-offsite/?url='+_url,
        _em='https://www.blogger.com/email-post.g?blogID='+data.blog.blogId+'&postID='+_id,
        _modal_content='<div class="modal--confirm share--dialog"><div class="modal--dialog"><div class="_3em"></div><div class="modal--content"><div class="modal--header"><div class="_mht">'+data.messages.shareheader+'</div><div aria-label="'+data.messages.close+'" class="_mhc modal--icon has-svg-icon has-hover modal--close" role="button" tabindex="0"></div></div><div class="modal--body"><div><ul class="share-menu"><li><a class="copy has-svg-icon" href="javascript:void(0)" title="'+data.messages.copy+'">'+data.messages.copy+'</a></li><li><a class="social-wrapper has-svg-icon fb" href='+_fb+'>'+data.messages.facebook+'</a></li><li><a class="social-wrapper has-svg-icon tw" href="'+_tw+'">'+data.messages.twitter+'</a></li><li><a class="social-wrapper has-svg-icon pi" href="'+_pi+'">'+data.messages.pinterest+'</a></li><li><a class="social-wrapper has-svg-icon li" href='+_li+'>'+data.messages.linkedin+'</a></li><li><a class="social-wrapper has-svg-icon em" href='+_em+'>'+data.messages.email+'</a></li></ul></div></div><div class="modal--footer"><button aria-label="'+data.messages.close+'" class="primary modal--close has-hover" type="button">'+data.messages.close+'</button></div></div><div class="_3em"></div></div></div>'
        $(_modal_content).appendTo('body')
        $('.modal--confirm.share--dialog').fadeIn('slow',function(){$(this).addClass('show')})
        $('.modal--close').click(function(){
          $('.modal--confirm.share--dialog').removeClass('show');setTimeout(function(){$('.modal--confirm.share--dialog').remove()},1000)
        })
        _popup();$('.copy').click(function(){_copy(_url);_append()})
      }
      function _share_this_page(e){
        e.preventDefault()
        var $this=$(this),_id=$this.attr('data-postId'),_url=$this.attr('data-href'),_thumb=$this.attr('data-image'),
        _sum=$this.attr('data-snippets'),_fb='https://www.facebook.com/sharer.php?u='+_url,
        _tw='https://twitter.com/intent/tweet?url='+_url+'&text='+_sum,
        _pi='https://www.pinterest.com/pin/create/button/?url='+_url+'&description='+_sum+'&media='+_thumb,
        _li='https://www.linkedin.com/sharing/share-offsite/?url='+_url,
        _em='https://www.blogger.com/email-post.g?blogID='+data.blog.blogId+'&postID='+_id,
        _modal_content='<div class="modal--confirm share--dialog"><div class="modal--dialog"><div class="_3em"></div><div class="modal--content"><div class="modal--header"><div class="_mht">'+data.messages.shareheader+'</div><div aria-label="'+data.messages.close+'" class="_mhc modal--icon has-svg-icon has-hover modal--close" role="button" tabindex="0"></div></div><div class="modal--body"><div><ul class="share-menu"><li><a class="copy has-svg-icon" href="javascript:void(0)" title="'+data.messages.copy+'">'+data.messages.copy+'</a></li><li><a class="social-wrapper has-svg-icon fb" href='+_fb+'>'+data.messages.facebook+'</a></li><li><a class="social-wrapper has-svg-icon tw" href="'+_tw+'">'+data.messages.twitter+'</a></li><li><a class="social-wrapper has-svg-icon pi" href="'+_pi+'">'+data.messages.pinterest+'</a></li><li><a class="social-wrapper has-svg-icon li" href='+_li+'>'+data.messages.linkedin+'</a></li><li><a class="social-wrapper has-svg-icon em" href='+_em+'>'+data.messages.email+'</a></li></ul></div></div><div class="modal--footer"><button aria-label="'+data.messages.close+'" class="primary modal--close has-hover" type="button">'+data.messages.close+'</button></div></div><div class="_3em"></div></div></div>'
        $this.attr({'aria-expanded':'true','aria-pressed':'true'})
        $(_modal_content).appendTo('body')
        $('.modal--confirm.share--dialog').fadeIn('slow',function(){$(this).addClass('show')})
        $('.modal--close').click(function(){
          $this.attr({'aria-expanded':'false','aria-pressed':'false'})
          $('.modal--confirm.share--dialog').removeClass('show');setTimeout(function(){$('.modal--confirm.share--dialog').remove()},1000)
        })
        _popup();$('.copy').click(function(){_copy(_url);_append()})
      }
      window.addEventListener('load',function(){
        $(document).off('click','.share-this-post',_share_this_post).on('click','.share-this-post',_share_this_post)
        $(document).off('click','.share-this-page',_share_this_page).on('click','.share-this-page',_share_this_page)
        _popup()
      })