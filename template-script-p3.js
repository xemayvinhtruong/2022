    var pages={
      num:{posts:12,pages:4},element:{id:'#blog-pager',parent:'.product-col>.card'},messages:{page:'Trang',nextpage:'Trang kế',prevpage:'Trang trước'}
    },serviceUrl=''
    if(data.view.isHomepage=='true'||data.view.isSearch=='true'){serviceUrl='/search?max-results='+data.blog.searchindex}
    if(data.view.isLabelSearch=='true'){serviceUrl='/search/label/'+data.blog.pageName+'?max-results='+data.blog.searchindex}
    if(data.view.isSearchQuery=='true'){serviceUrl='/search?q='+data.blog.searchqueryescaped+'&max-results='+data.blog.searchindex}
    var get_url=0
    $(pages.element.id).addClass('show').append('<a></a><a></a><a></a><a></a><a class="next"></a><span></span>')
    function show_page_nav(){
      if(get_url==0){get_url=1
        $.get(serviceUrl,function(e){
          var a=$(e).find(pages.element.parent)
          if(a.length){var d='',m='',n='',html='',q=0,s=0,t=1,page_start=0,page_end=0,b=Math.ceil(a.length/pages.num.posts)
            if(url.indexOf('&page=')!=-1){
              var u=url.substring(url.indexOf('&page=')+6,url.length),j=Number(u)
              if(!isNaN(j)){n=u
              }else if(u.indexOf('&')!=-1){n=u.substring(0,u.indexOf('&'))
              }else if(u.indexOf('#')!=-1){n=u.substring(0,u.indexOf('#'))} 
            }else{n=1}
            var page_num=parseInt(pages.num.pages/2)
            if(page_num==pages.num.pages-page_num){pages.num.pages=page_num*2+1;page_start=n-page_num}
            if(page_start<1){page_start=1;page_end=page_start+pages.num.pages-1}
            if(page_end>b)page_end=b
            if(n>1){
              if(n==2){
                if(data.view.isSearch=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search?max-results='+pages.num.posts+'" rel="prev" title="'+pages.messages.prevpage+'"></a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search/label/'+data.blog.pageName+'?max-results='+pages.num.posts+'" rel="prev" title="'+pages.messages.prevpage+'"></a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search?q='+data.blog.searchqueryescaped+'&max-results='+pages.num.posts+'" rel="prev" title="'+pages.messages.prevpage+'"></a>'
                }
              }else{
                t=(n*pages.num.posts-1)-(pages.num.posts*2);d=$(a[t]).data('date').replace('+','%2B');q=n-1;s=q*pages.num.posts
                if(data.view.isSearch=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" title="'+pages.messages.prevpage+'"></a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search/label/'+data.blog.pageName+'?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" title="'+pages.messages.prevpage+'"></a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number has-svg-icon prev" href="/search?q='+data.blog.searchqueryescaped+'?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" title="'+pages.messages.prevpage+'"></a>'
                }
              }
            }
            for(var g=page_start;g<=page_end;g++){
             s=(g-1)*pages.num.posts
             if(g==1&&n==1){
                if(data.view.isHomepage=='true'){
                  html+='<a class="page-number current" href='+data.blog.homepageUrl+' title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearch=='true'){
                  html+='<a class="page-number current" href="/search?max-results='+pages.num.posts+'" rel="prev" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number current" href="/search/label/'+data.blog.pageName+'?max-results='+pages.num.posts+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number current" href="/search?q='+data.blog.searchqueryescaped+'&max-results='+pages.num.posts+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }
              }else if(g==1){
                if(data.view.isHomepage=='true'){
                  html+='<a class="page-number" href='+data.blog.homepageUrl+' title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearch=='true'){
                  html+='<a class="page-number" href="/search?max-results='+pages.num.posts+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number" href="/search/label/'+data.blog.pageName+'?max-results='+pages.num.posts+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number" href="/search?q='+data.blog.searchqueryescaped+'&max-results='+pages.num.posts+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }
              }else if(g==n){
                var f=g-1;t=(f*pages.num.posts-1);d=$(a[t]).data('date').replace('+','%2B')
                if(data.view.isHomepage=='true'){
                  html+='<a class="page-number current" href="/search?updated-max='+d+'&start='+s+'&max-results='+pages.num.posts+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearch=='true'){
                  html+='<a class="page-number current" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number current" href="/search/label/'+data.blog.pageName+'?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number current" href="/search?q='+data.blog.searchqueryescaped+'&updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }
              }else{
                var f=g-1;t=(f*pages.num.posts-1);d=$(a[t]).data('date').replace('+','%2B')
                if(data.view.isHomepage=='true'){
                  html+='<a class="page-number" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearch=='true'){
                  html+='<a class="page-number" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isLabelSearch=='true'){
                  html+='<a class="page-number" href="/search/label/'+data.blog.pageName+'?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }else if(data.view.isSearchQuery=='true'){
                  html+='<a class="page-number" href="/search?q='+data.blog.searchqueryescaped+'&updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+g+'" title="'+pages.messages.page+' '+g+'">'+g+'</a>'
                }
              }
            }
            if(n<b){
              q=parseInt(n)+1;t=(n*pages.num.posts-1);s=q*pages.num.posts;d=$(a[t]).data('date').replace('+','%2B')
              if(data.view.isHomepage=='true'){
                html+='<a class="page-number has-svg-icon next" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" rel="next" title="'+pages.messages.nextpage+'"></a>'
              }else if(data.view.isSearch=='true'){
                html+='<a class="page-number has-svg-icon next" href="/search?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" rel="next" title="'+pages.messages.nextpage+'"></a>'
              }else if(data.view.isLabelSearch=='true'){
                html+='<a class="page-number has-svg-icon next" href="/search/label/'+data.blog.pageName+'?updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" rel="next" title="'+pages.messages.nextpage+'"></a>'
              }else if(data.view.isSearchQuery=='true'){
                html+='<a class="page-number has-svg-icon next" href="/search?q='+data.blog.searchqueryescaped+'&updated-max='+d+'&max-results='+pages.num.posts+'&start='+s+'&page='+q+'" rel="next" title="'+pages.messages.nextpage+'"></a>'
              }
            }
            html+='<span>'+a.length+' kết quả</span>';$(pages.element.id).html(html).removeClass('show')
          }
        })
      }
    }
    window.addEventListener('scroll',show_page_nav);if(document.documentElement.scrollTop>0)show_page_nav()
    setTimeout(function(){show_page_nav()},3000)