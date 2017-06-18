var tps=tps||{};tps.slideshowsOnPage=0;tps.createSlideshowDefaults={slideContainer:'',nav:[],navText:'%{currentSlide} of %{totalSlides}',helperText:'',defaultSlide:0,transitionEffect:'none',transitionSpeed:400,keyboardShortcuts:false,scrollAfterRefresh:true,numberOfSlides:0,slides:[],useSlideSources:false,themeType:'classic',prevPost:null,nextPost:null,prevText:null,nextText:null,buttonWidth:0,prevText_post:null,nextText_post:null,buttonWidth_post:0,onShowPost:null,postUrl:null,postId:null,refreshAds:false,refreshAdsEveryNSlides:1,adRefreshingMechanism:'javascript',siteUrl:'/',loopSlides:false,scrollTopOffset:0};tps.createSlideshow=function(options){var i,j;var me=this;var $=jQuery;me.options=$.extend(tps.createSlideshowDefaults,options);for(i in me.options){if(!isNaN(tps.createSlideshowDefaults[i])&&(typeof me.options[i]=='string')){var value=parseFloat(me.options[i]);if(!isNaN(value)){me.options[i]=value;}}}
me.slides=[];me.slideContainer=$(me.options.slideContainer);if(me.slideContainer.length==0){return null;}
tps.slideshowsOnPage++;me.navEl=[];for(i=0;i<me.options.nav.length;i++){var e=$(me.options.nav[i]).get();for(j=0;j<e.length;j++){me.navEl.push({container:$(e[j])});}}
me.currentPostId=me.options.postId;me.isLoading=false;me.slidesSinceLastAdRefresh=0;me.remoteLoadingQueue=async.queue(function(task,callback){callback();},1);me.currentSlide=null;me.currentlyDisplayedSlide=null;me.animations=0;me.semaphore=0;me.asyncQueue=async.queue(function(task,callback){callback();},1);me.incrementSemaphore=function(){me.asyncQueue.pause();me.semaphore++;};me.decrementSemaphore=function(){me.semaphore--;if(me.semaphore==0){me.asyncQueue.resume();}};me.init=function(){var i;me.loadScrollTop();for(i in me.options.slides){if('content'in me.options.slides[i]){if(me.options.useSlideSources){me.options.slides[i].source=me.options.slides[i].content;}
me.options.slides[i].content=$('<div>').html(me.options.slides[i].content);}
me.slides[i]=me.options.slides[i];}
me.options.slides=null;me.slideContainer.children().each(function(index,slide){index=me.options.defaultSlide+ index;slide=$(slide);me.slides[index]=me.slides[index]||{};me.slides[index].title=document.title;me.slides[index].permalink=document.location.href;me.slides[index].content=slide;if(index!=me.options.defaultSlide){slide.detach();}});me.numberOfSlides=me.options.numberOfSlides;for(i=0;i<me.navEl.length;i++){var navEl=me.navEl[i];navEl.text=navEl.container.find('._text');navEl.prev=navEl.container.find('._prev').click(function(me){return function(event){me.onNavClick(this,'prev',event);}}(me));navEl.next=navEl.container.find('._next').click(function(me){return function(event){me.onNavClick(this,'next',event);}}(me));navEl.title=navEl.container.find('._title');if(i===0){me.slides[me.options.defaultSlide].shortCodeTitle=navEl.title.html();}
navEl.container.find('._prev, ._next').mousedown(function(){$(this).addClass('_active');}).mouseup(function(){$(this).removeClass('_active');});}
if(me.numberOfSlides==1||(me.options.refreshAds&&me.options.adRefreshingMechanism=='page'&&me.options.refreshAdsEveryNSlides<=1)){me.currentSlide=0;}
else{me.setSlide(me.options.defaultSlide);var history=window.History;if(history.enabled){history.Adapter.bind(window,'statechange',function(me){return function(){var state=History.getState();if(state.data.currentPostId!=undefined){if(state.data.currentSlide!=undefined){me.setSlide(state.data.currentSlide);}
else{me.setSlide(me.options.defaultSlide);}}};}(me));}}
if(me.options.keyboardShortcuts){$(document).keydown(function(me){return function(e){if(tps.slideshowsOnPage>1){return true;}
if(this!==e.target&&(/textarea|select/i.test(e.target.nodeName)||e.target.type==="text"||($(e.target).prop&&$(e.target).prop('contenteditable')=='true'))){return true;}
switch(e.which){case 37:me.navEl[0].prev[0].click();return false;case 39:me.navEl[0].next[0].click();return false;}
return true;};}(me));}};me.loadSlides=function(slides,callback){me.remoteLoadingQueue.push({name:''},function(me,slides,callback){return function(err){var allSlidesAreLoaded=true;for(var i in slides){if(!(slides[i]in me.slides)||!('content'in me.slides[slides[i]])){allSlidesAreLoaded=false;break;}}
if(allSlidesAreLoaded){if(callback){callback();}
return;}
me.remoteLoadingQueue.concurrency=0;$.ajax({dataType:'json',data:{theiaPostSlider:'get-slides',postId:me.currentPostId,slides:slides},url:me.options.siteUrl,success:function(me){return function(data){if(!data){return;}
if(data.postId==me.currentPostId){for(var i in data.slides){if(!(i in me.slides)){me.slides[i]={};}
if('content'in data.slides[i]){if(me.options.useSlideSources){data.slides[i].source=data.slides[i].content;}
data.slides[i].content=$('<div>').html(data.slides[i].content);}
for(var j in data.slides[i]){me.slides[i][j]=data.slides[i][j];}}}
else{console.error('Received AJAX results for a different post ID.');}};}(me),complete:function(me,callback){return function(){if(callback){callback();}
me.remoteLoadingQueue.concurrency=1;me.remoteLoadingQueue.push({});};}(me,callback)});};}(me,slides,callback));};me.setSlide=function(index,isCallback){if(me.isLoading==true&&isCallback!=true){return;}
if(me.currentSlide==index){return;}
if(me.needToRefreshPage()&&index in me.slides){me.saveScrollTop();window.location=me.slides[index].permalink;return;}
$(document).trigger('theiaPostSlider.willChangeSlide',[index]);if(!me.isSlideLoaded(index)){if(!isCallback){me.showLoading();me.loadSlides([index],function(me,index){return function(){me.hideLoading();me.setSlide(index,true);}}(me,index));return;}
else{console.error("The slide could not be loaded via AJAX.");return;}}
var previousSlide=me.currentSlide;me.currentSlide=index;if(previousSlide!=null){var scrollTop=me.slideContainer.offset().top;for(var i=0;i<me.navEl.length;i++){scrollTop=Math.min(scrollTop,me.navEl[i].container.offset().top);}
scrollTop+=me.options.scrollTopOffset;if($(window).scrollTop()>scrollTop){$('body,html').animate({scrollTop:scrollTop});}}
me.updateTitleText();var history=window.History;if(history.enabled){var url=me.slides[me.currentSlide].permalink;if(url&&previousSlide!==null){var f;if(url==window.location){f=history.replaceState;}
else{f=history.pushState;}
f({currentSlide:index,currentPostId:me.currentPostId},me.slides[me.currentSlide].title,url);}}
me.asyncQueue.push({name:''},me.showSlide);if(previousSlide!=null){if(me.options.refreshAds){me.slidesSinceLastAdRefresh++;if(me.slidesSinceLastAdRefresh>=me.options.refreshAdsEveryNSlides){me.slidesSinceLastAdRefresh=0;if(me.options.adRefreshingMechanism=='javascript'){var p=null;if(typeof pubService==='undefined'){if(typeof googletag!=='undefined'){p=googletag.pubads();}}
else{p=pubService;}
if(p){p.refresh();}
$(document).trigger('theiaPostSlider.refreshAds');}}}}
me.updateNavigationBars();if(!(me.options.refreshAds&&me.slidesSinceLastAdRefresh+ 1>=me.options.refreshAdsEveryNSlides&&me.options.adRefreshingMechanism=='page')){var direction;if(previousSlide==null){direction=1;}
else if(me.currentSlide==0&&previousSlide==me.numberOfSlides- 1){direction=1;}
else if(me.currentSlide==me.numberOfSlides- 1&&previousSlide==0){direction=-1;}
else{direction=me.currentSlide- previousSlide;direction=Math.max(Math.min(direction,1),-1);}
var slideToPreload=me.currentSlide+ direction;if(slideToPreload==-1&&me.options.loopSlides){slideToPreload=me.numberOfSlides- 1;}
else if(slideToPreload==me.numberOfSlides&&me.options.loopSlides){slideToPreload=0;}
if(slideToPreload>=0&&slideToPreload<me.numberOfSlides&&!me.isSlideLoaded((slideToPreload))){me.loadSlides([slideToPreload]);}}
if(typeof Hammer!=='undefined'){me.previousTouch=0;me.minimumTimeBetweenGestures=500;var hammertime=new Hammer(me.slideContainer[0]);hammertime.on('swipeleft',function(){var t=(new Date).getTime();if(t- me.minimumTimeBetweenGestures>=me.previousTouch){me.setNext();me.previousTouch=t;}}).on('swiperight',function(){var t=(new Date).getTime();if(t- me.minimumTimeBetweenGestures>=me.previousTouch){me.setPrev();me.previousTouch=t;}});}};me.showSlide=function(){if(me.currentlyDisplayedSlide==me.currentSlide){return;}
if(me.currentlyDisplayedSlide!=null&&me.slides[me.currentSlide]['permalink']){var path=me.slides[me.currentSlide]['permalink'].split('/');if(path.length>=4){path='/'+ path.slice(3).join('/');if(typeof __gaTracker!=='undefined'){__gaTracker('send','pageview',path);}
else if(typeof ga!=='undefined'){ga('send','pageview',path);}
else if(typeof _gaq!=='undefined'&&typeof _gaq.push!=='undefined'){_gaq.push(['_trackPageview',path]);}
else if(typeof pageTracker!=='undefined'&&typeof pageTracker._trackPageview!=='undefined'){pageTracker._trackPageview(path);}
if(typeof piwikTracker!=='undefined'&&typeof piwikTracker.trackPageView!=='undefined'){piwikTracker.trackPageView(path);}
if(typeof sc_project!=='undefined'&&typeof sc_security!=='undefined'){var img=new Image();img.src='//c.statcounter.com/'+ sc_project+'/0/'+ sc_security+'/1/';}
if(typeof _qacct!=='undefined'){var img=new Image();img.src='//pixel.quantserve.com/pixel/'+ _qacct+'.gif';}}}
var previousIndex=me.currentlyDisplayedSlide;me.currentlyDisplayedSlide=me.currentSlide;me.createSlideContentFromSource(me.slides[me.currentSlide]);var animationsQueue=tps.transitions[me.options.transitionEffect](me,previousIndex,me.currentlyDisplayedSlide);for(var i=0;i<animationsQueue.length;i++){me.incrementSemaphore();}
if(previousIndex!==null){me.asyncQueue.unshift({name:''},function(me,previousIndex){return function(){me.onRemovedSlide(previousIndex);}}(me,previousIndex));}
for(var i=0;i<animationsQueue.length;i++){animationsQueue[i]();}};me.createSlideContentFromSource=function(slide){if(!('content'in slide)&&('source'in slide)){slide.content=$('<div>').html(slide.source);if(false==me.options.useSlideSources){delete slide.source;}}};me.isSlideLoaded=function(index){if(!(index in me.slides)){return false;}
if(me.currentlyDisplayedSlide!==null&&me.options.useSlideSources&&!('source'in me.slides[index])){return false;}
if(!(('content'in me.slides[index])||('source'in me.slides[index]))){return false;}
return true;};me.onNewSlide=function(){$(".lazy-hidden").not(".data-lazy-ready").one("scrollin.bj_lazy_load",{distance:200},function(){var b=$(this),d=b.attr("data-lazy-type");if(d=="image"){b.hide().attr("src",b.attr("data-lazy-src")).removeClass("lazy-hidden").fadeIn()}else if(d=="iframe"){b.replaceWith(c(b.attr("data-lazy-src")))}}).addClass("data-lazy-ready");var events=$('body').data('events');if(events&&events['post-load']){for(var i=0;i<events['post-load'].length;i++){if(events['post-load'][i].handler.name=='lazy_load_init'){events['post-load'][i].handler();}}}
if(typeof _wpmejsSettings!=='undefined'){$('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer(_wpmejsSettings);}
if(typeof instgrm!=='undefined'&&typeof instgrm.Embeds!=='undefined'&&typeof instgrm.Embeds.process!=='undefined'){instgrm.Embeds.process();}
$(document).trigger('theiaPostSlider.changeSlide',[me.currentSlide]);};me.onRemovedSlide=function(slideId){if(me.options.useSlideSources){me.slides[slideId].content.remove();delete me.slides[slideId].content;}};me.updateTitleText=function(){var shortCodeTitle=me.slides[me.currentSlide].shortCodeTitle;if(!shortCodeTitle){shortCodeTitle='<span class="_helper">'+ me.options['helperText']+'</span>';}
for(i=0;i<me.navEl.length;i++){me.navEl[i].title.html(shortCodeTitle);}};me.updateNavigationBars=function(){for(var i=0;i<me.navEl.length;i++){var navEl=me.navEl[i];var navText;if(me.numberOfSlides==1){navText='';}
else{navText=me.options.navText;navText=navText.replace('%{currentSlide}',me.currentSlide+ 1);navText=navText.replace('%{totalSlides}',me.numberOfSlides);}
navEl.text.html(navText);me.updateNavigationBarButton(navEl,false);me.updateNavigationBarButton(navEl,true);}};me.updateNavigationBarButton=function(navEl,direction){var width,html1='',html2='',html3='',href,directionName=direction?'next':'prev',buttonEl=navEl[directionName];if(me.options.themeType=='font'){width=0;html2=me.options[directionName+'FontIcon'];if(direction==false){if(me.options.prevText_post){if(me.currentSlide==0){html3=me.options.prevText_post;}else{html3=me.options.prevText;}}else{html3=me.options.prevText;}}else{if(me.options.nextText_post){if(me.currentSlide==me.numberOfSlides- 1){html1=me.options.nextText_post;}else{html1=me.options.nextText;}}else{html1=me.options.nextText;}}}else{width=me.options.buttonWidth;if((direction==false&&me.options.prevPost&&me.currentSlide==0)||(direction==true&&me.options.nextPost&&me.currentSlide==me.numberOfSlides- 1)){html2=me.options[directionName+'Text_post'];href=direction?me.options.nextPost:me.options.prevPost;}
else{html2=me.options[directionName+'Text'];}}
{var jumpToSlide=null;if(direction==false&&me.options.loopSlides&&me.currentSlide==0){jumpToSlide=me.numberOfSlides- 1;}
else if(direction==true&&me.options.loopSlides&&me.currentSlide==me.numberOfSlides- 1){jumpToSlide=0;}
else if((direction==false&&me.options.prevPost&&me.currentSlide==0)||(direction==true&&me.options.nextPost&&me.currentSlide==me.numberOfSlides- 1)){buttonEl.addClass('_another_post');href=direction?me.options.nextPost:me.options.prevPost;}else{buttonEl.removeClass('_another_post');jumpToSlide=me.currentSlide+(direction?1:-1);}
if(jumpToSlide!==null){if(me.needToRefreshPage()){var slide=me.slides[jumpToSlide];if(slide){href=slide.permalink;}}
else{href='#';}}}
buttonEl.find('._1').html(html1);buttonEl.find('._2').css('width',width>0?width:'').html(html2);buttonEl.find('._3').html(html3);if((direction==false&&me.options.prevPost==null&&!me.options.loopSlides&&me.currentSlide==0)||(direction==true&&me.options.nextPost==null&&!me.options.loopSlides&&me.currentSlide==me.numberOfSlides- 1)){buttonEl.addClass('_disabled');href='#';}
else{buttonEl.removeClass('_disabled');}
buttonEl.attr('href',href);};me.onNavClick=function(that,direction,event){var $that=$(that);if(typeof $that.attr('href')==='undefined'){return;}
if($that.attr('href')!='#'&&$that.attr('href')!=''){me.showLoading();me.saveScrollTop();return;}
if(direction=='prev'){me.setPrev();}else{me.setNext();}
$that.focus();if(event){event.preventDefault();}};me.isHtml5StorageAvailable=function(){try{return'localStorage'in window&&window['localStorage']!==null;}catch(e){return false;}};me.saveScrollTop=function(){if(!me.options.scrollAfterRefresh){return;}
if(!me.isHtml5StorageAvailable){return;}
localStorage.setItem('scrollTop',JSON.stringify({postId:me.postId,scrollTop:$(window).scrollTop()}));};me.loadScrollTop=function(){if(!me.options.scrollAfterRefresh){return;}
if(!me.isHtml5StorageAvailable){return;}
var data=JSON.parse(localStorage.getItem('scrollTop'));if(data&&data.postId==me.postId){var scrollTop=Math.min(data.scrollTop,me.slideContainer.offset().top);$(window).scrollTop(scrollTop);}
localStorage.removeItem('scrollTop');};me.setPrev=function(){if(me.currentSlide==0){if(me.options.loopSlides){me.setSlide(me.numberOfSlides- 1);}
else if(me.options.prevPost){me.showPost(me.options.prevPost);}}
else{me.setSlide(me.currentSlide- 1);}};me.setNext=function(){if(me.currentSlide==me.numberOfSlides- 1){if(me.options.loopSlides){me.setSlide(0);}
else if(me.options.nextPost){me.showPost(me.options.nextPost);}}
else{me.setSlide(me.currentSlide+ 1);}};me.showPost=function(postUrl){document.location=postUrl;};me.setTransition=function(options){var defaults={'effect':me.options.transitionEffect,'speed':me.options.transitionSpeed};options=$.extend(defaults,options);me.options.transitionEffect=options.effect;me.options.transitionSpeed=options.speed;};me.setNavText=function(text){me.options.navText=text;me.updateNavigationBars();};me.setTitleText=function(text){for(i=0;i<me.slides.length;i++){me.slides[i].shortCodeTitle='';}
me.options.helperText=text;me.updateTitleText();};me.showLoading=function(){me.isLoading=true;for(i=0;i<me.navEl.length;i++){me.navEl[i].container.append($('<div class="_loading"></div>')).find('._buttons > a').addClass('_disabled');}};me.hideLoading=function(){me.isLoading=false;for(i=0;i<me.navEl.length;i++){me.navEl[i].container.find('._loading').remove();}
me.updateNavigationBars();};me.needToRefreshPage=function(){return(me.currentSlide!==null&&me.options.refreshAds&&me.slidesSinceLastAdRefresh+ 1>=me.options.refreshAdsEveryNSlides&&me.options.adRefreshingMechanism=='page');};me.init();return me;};