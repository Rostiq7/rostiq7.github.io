$(function(){$("#js-scroll-about").on("click",function(e){e.preventDefault();var t=$("#js-about").offset().top;$("html, body").animate({scrollTop:t},800)});var t=$("#js-header").height();$(document).on("scroll",function(){var e=$(this).scrollTop();t<e?$("#js-nav-wrap").addClass("nav-fixed"):$("#js-nav-wrap").removeClass("nav-fixed")}),$(".menu__link").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),o=$(t).offset().top;$("html, body").animate({scrollTop:o-40},800)}),$(".mobile-menu__btn").on("click",function(e){e.preventDefault(),$(this).toggleClass("mobile-menu__btn--active"),$(".header__menu").slideToggle()})}),mapboxgl.accessToken="pk.eyJ1IjoicHVycG9zZWZ1bGVhZ2xlIiwiYSI6ImNqdDYyamozYzBhZHAzeXRtbHRxM2oxbTQifQ.pjqLb0tjBEizRprW99OrIg";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v9",center:[-74.054,40.753],zoom:10});o.scrollZoom.disable(),o.addControl(new mapboxgl.NavigationControl),[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[-74.1387714,40.7153535]}},{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[-74.230479,40.6615888]}},{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[-73.702911,40.737984]}},{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[-73.840329,40.667081]}},{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[-74.413941,40.822396]}}].forEach(function(e){var t=document.createElement("div");t.className="marker",new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).addTo(o)});