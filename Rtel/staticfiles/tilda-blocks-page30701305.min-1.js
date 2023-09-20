window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){var recBlocks=document.querySelectorAll('.r');t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});for(var i=0;i<recBlocks.length;i++){recBlocks[i].addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(recBlocks[i],popupTooltipHook)})}}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var range=rec.querySelector('.t-range');var documentBody=document.body;if(range)t702__triggerEvent(range,'popupOpened');t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook)}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){document.body.classList.remove('t-body_popupshowed')}}
popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}
function t228__init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuBlock=rec.querySelector('.t228');var mobileMenu=rec.querySelector('.t228__mobile');var menuSubLinkItems=rec.querySelectorAll('.t-menusub__link-item');var rightBtn=rec.querySelector('.t228__right_buttons_but .t-btn');var mobileMenuPosition=mobileMenu?mobileMenu.style.position||window.getComputedStyle(mobileMenu).position:'';var mobileMenuDisplay=mobileMenu?mobileMenu.style.display||window.getComputedStyle(mobileMenu).display:'';var isFixedMobileMenu=mobileMenuPosition==='fixed'&&mobileMenuDisplay==='block';var overflowEvent=document.createEvent('Event');var noOverflowEvent=document.createEvent('Event');overflowEvent.initEvent('t228_overflow',!0,!0);noOverflowEvent.initEvent('t228_nooverflow',!0,!0);if(menuBlock){menuBlock.addEventListener('t228_overflow',function(){t228_checkOverflow(recid)});menuBlock.addEventListener('t228_nooverflow',function(){t228_checkNoOverflow(recid)})}
rec.addEventListener('click',function(e){var targetLink=e.target.closest('.t-menusub__target-link');if(targetLink&&window.isMobile){if(targetLink.classList.contains('t-menusub__target-link_active')){if(menuBlock)menuBlock.dispatchEvent(overflowEvent)}else{if(menuBlock)menuBlock.dispatchEvent(noOverflowEvent)}}
var currentLink=e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');if(currentLink&&mobileMenu&&isFixedMobileMenu)mobileMenu.click()});Array.prototype.forEach.call(menuSubLinkItems,function(linkItem){linkItem.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})});if(rightBtn){rightBtn.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})}
if(menuBlock){menuBlock.addEventListener('showME601a',function(){var menuLinks=rec.querySelectorAll('.t966__menu-link');Array.prototype.forEach.call(menuLinks,function(menuLink){menuLink.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})})})}}
function t228_checkOverflow(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t228'):null;if(!menu)return;var mobileContainer=document.querySelector('.t228__mobile_container');var mobileContainerHeight=t228_getFullHeight(mobileContainer);var windowHeight=document.documentElement.clientHeight;var menuPosition=menu.style.position||window.getComputedStyle(menu).position;if(menuPosition==='fixed'){menu.classList.add('t228__overflow');menu.style.setProperty('height',(windowHeight-mobileContainerHeight)+'px','important')}}
function t228_checkNoOverflow(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var menu=rec.querySelector('.t228');var menuPosition=menu?menu.style.position||window.getComputedStyle(menu).position:'';if(menuPosition==='fixed'){if(menu)menu.classList.remove('t228__overflow');if(menu)menu.style.height='auto'}}
function t228_setWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuCenterSideList=rec.querySelectorAll('.t228__centerside');Array.prototype.forEach.call(menuCenterSideList,function(menuCenterSide){menuCenterSide.classList.remove('t228__centerside_hidden')});if(window.innerWidth<=980)return;var menuBlocks=rec.querySelectorAll('.t228');Array.prototype.forEach.call(menuBlocks,function(menu){var maxWidth;var centerWidth=0;var paddingWidth=40;var leftSide=menu.querySelector('.t228__leftside');var rightSide=menu.querySelector('.t228__rightside');var menuList=menu.querySelector('.t228__list');var mainContainer=menu.querySelector('.t228__maincontainer');var leftContainer=menu.querySelector('.t228__leftcontainer');var rightContainer=menu.querySelector('.t228__rightcontainer');var centerContainer=menu.querySelector('.t228__centercontainer');var centerContainerLi=centerContainer?centerContainer.querySelectorAll('li'):[];var leftContainerWidth=t228_getFullWidth(leftContainer);var rightContainerWidth=t228_getFullWidth(rightContainer);var mainContainerWidth=mainContainer?mainContainer.offsetWidth:0;var dataAlign=menu.getAttribute('data-menu-items-align');var isDataAlignCenter=dataAlign==='center'||dataAlign===null;maxWidth=leftContainerWidth>=rightContainerWidth?leftContainerWidth:rightContainerWidth;maxWidth=Math.ceil(maxWidth);Array.prototype.forEach.call(centerContainerLi,function(li){centerWidth+=t228_getFullWidth(li)});if(mainContainerWidth-(maxWidth*2+paddingWidth*2)>centerWidth+20){if(isDataAlignCenter){if(leftSide)leftSide.style.minWidth=maxWidth+'px';if(rightSide)rightSide.style.minWidth=maxWidth+'px'}}else{if(leftSide)leftSide.style.minWidth=maxWidth+'';if(rightSide)rightSide.style.minWidth=maxWidth+''}
if(menuList&&menuList.classList.contains('t228__list_hidden'))menuList.classList.remove('t228__list_hidden')})}
function t228_getFullWidth(el){if(!el)return 0;var marginLeft=el.style.marginLeft||window.getComputedStyle(el).marginLeft;var marginRight=el.style.marginRight||window.getComputedStyle(el).marginRight;marginLeft=parseInt(marginLeft,10)||0;marginRight=parseInt(marginRight,10)||0;return el.offsetWidth+marginLeft+marginRight}
function t228_getFullHeight(el){if(!el)return 0;var marginTop=el.style.marginTop||window.getComputedStyle(el).marginTop;var marginBottom=el.style.marginBottom||window.getComputedStyle(el).marginBottom;marginTop=parseInt(marginTop,10)||0;marginBottom=parseInt(marginBottom,10)||0;return el.offsetHeight+marginTop+marginBottom}
function t898_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t898');if(!container)return;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;var whatsApp=rec.querySelector('.t898__icon-whatsapp_wrapper');if(whatsApp){var whatsAppHref=whatsApp.getAttribute('href');if(whatsAppHref&&(whatsAppHref.indexOf('whatsapp://')>-1||whatsAppHref.indexOf('wa.me')>-1)){t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref)}}
if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref){if(whatsAppHref&&whatsAppHref.indexOf('?text=')!==-1){var whatsAppHrefArr=whatsAppHref.split('?text=');whatsAppHrefArr[0]=whatsAppHrefArr[0].replace(/[\(\)+-]/g,'');whatsAppHref=whatsAppHrefArr[0]+'?text='+whatsAppHrefArr[1]}else{whatsAppHref=whatsAppHref.replace(/[\(\)+-]/,'')}
whatsApp.setAttribute('href',whatsAppHref)}