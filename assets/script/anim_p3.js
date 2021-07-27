import {fun_page_2} from './anim_p2.js';
import {rollbackPositionText} from './animationPage_5.js';
import {global} from './burger.js';
import {rollbackPositionText_modile} from './modile_p5.js';

let peges3=0;
$('#Contact').on('click', function () {
  Contact();
});

function Contact(){
  $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#touch,#gif_3,.about_me_p2,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
  $('#link1').css('visibility','visible');
  $('#link2').css('visibility','visible');
  $('#link3').css('visibility','visible');
  $('#link4').css('visibility','visible');
  $('.masaic_5').css('visibility','hidden');
  $('.masaic_6').css('visibility','hidden');
 

    fun_page_2();
    rollbackPositionText();
 
    $('#link_4').css('visibility','visible');
    $('.mosaic').css('visibility','visible');

    $('#back_Home').animate({'margin-left': '135px',opacity: "1"}, 700 ); 
    ////////////мозайка
    $('#mosaic_1,#mosaic_2,#mosaic_3,#mosaic_4,#mosaic_5,#mosaic_6,#mosaic_7,#mosaic_8,#mosaic_9,#mosaic_10,#mosaic_11,#mosaic_12,#mosaic_13,#mosaic_14').finish();
       
    $('#mosaic_1').animate({'margin-top': '458px',opacity: "1"},700,);
    $('#mosaic_2').animate({'margin-top': '458px',opacity: "1"},800,);
    $('#mosaic_3').animate({'margin-top': '486px',opacity: "1"},500,);
    $('#mosaic_4').animate({'margin-top': '486px',opacity: "1"},420,);
    $('#mosaic_5').animate({'margin-top': '571px',opacity: "1"},420,);
    $('#mosaic_6').animate({'margin-top': '571px',opacity: "1"},420,);
    $('#mosaic_7').animate({'margin-top': '571px',opacity: "1"},420,);
    $('#mosaic_8').animate({'margin-top': '571px',opacity: "1"},420,);
    $('#mosaic_9').animate({'margin-top': '623px',opacity: "1"},520,);
    $('#mosaic_10').animate({'margin-top': '657px',opacity: "1"},820,);
    $('#mosaic_11').animate({'margin-top': '681.4px',opacity: "1"},920,);
    $('#mosaic_12').animate({'margin-top': '681.4px',opacity: "1"},527,);
    $('#mosaic_13').animate({'margin-top': '681.4px',opacity: "1"},470,);
    $('#mosaic_14').animate({'margin-top': '681.4px',opacity: "1"},620,);

   ////////////контакты
   $('.cont_1,.cont_2,.cont_3,.cont_4,#touch,#contact_phone,#contact_linked,#contact_twiter,#contact_mail').finish();
   $('#roof,#mail,#phone,#linked,#twit').finish();
   $('#link1,#link2,#link3,#link4').finish();

    peges3++;
    if(peges3==1){
      $('#touch').animate({'margin-left': '-100px',opacity: "0"},1,);
      $('#contact_mail').animate({'margin-left': '500px',opacity: "0"},1,);
      $('#contact_phone').animate({'margin-left': '300px',opacity: "0"},1,);
      $('#contact_linked').animate({'margin-left': '300px',opacity: "0"},1,);   
      $('#contact_twiter').animate({'margin-left': '300px',opacity: "0"},1,);
    
      $('#link1').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#link2').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#link3').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#link4').animate({'margin-left': '540px',opacity: "0"},1,);
         
      $('#roof').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#mail').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#phone').animate({'margin-left': '540px',opacity: "0"},1,);
      $('#linked').animate({'margin-left': '540px',opacity: "0"},1,); 
      $('#twit').animate({'margin-left': '540px',opacity: "0"},1,);
    }
 //// откат позиции текс 
  
   $.when(
    $('#touch').animate({'margin-left': '0px',opacity: "1"},700,)
    ).then(function () {     
      $('#link3').css('visibility','visible');
      $('#link4').css('visibility','visible');
    });
    
    $('#contact_mail').animate({'margin-left': '16px',opacity: "1"},700,);
    $('#contact_phone').animate({'margin-left': '-183px',opacity: "1"},800,);
    $('#contact_linked').animate({'margin-left': '-185px',opacity: "1"},900,);
    $('#contact_twiter').animate({'margin-left': '-187px',opacity: "1"},1000,);
  
    $('#link1').animate({'margin-left': '65px',opacity: "1"},700);
    $('#link2').animate({'margin-left': '65px',opacity: "1"},800,);
    $('#link3').animate({'margin-left': '65px',opacity: "1"},900,);
    $('#link4').animate({'margin-left': '65px',opacity: "1"},1000,);
    
    $('#roof').animate({'margin-left': '0px',opacity: "1"},600,);
    $('#mail').animate({'margin-left': '0px',opacity: "1"},600,);
    $('#phone').animate({'margin-left': '0px',opacity: "1"},600,);
    $('#linked').animate({'margin-left': '0px',opacity: "1"},600,); 
    $('#twit').animate({'margin-left': '0px',opacity: "1"},600,);
    
    ///////////прячим 2 страницу
    $('#gif_3').animate({opacity: "0"},700);
    $('.about_me_p2').animate({'margin-left': '-400px',opacity: "0"}, 700);   
 
    $.when(
      $('#foto').animate({ 'margin-left': '-390px',opacity: "0"}, 700 )
      ).then(function () { 
        $('#large__project').css('visibility','hidden');
        $('#small__project').css('visibility','hidden');
        $('#link3').css('visibility','visible');
        $('#link4').css('visibility','visible');
      });

    $('.about_meIfo_p2').animate({ 'margin-top': '60px',opacity: "0"}, 300 );
    $('#gif_4').animate({opacity: "0"},700);
    /////////////////////////прячим 4
    $('#smal_project').animate({opacity: "0"}, 300 );
    $('#text_p4').animate({opacity: "0"}, 300 );
    $('#line').animate({opacity: "0"}, 300);   

   $('.page_6').css('visibility','hidden');

   setTimeout(lintTime2,500);
   
   
  $('.page_5').css('visibility','hidden');
  $("img").on("dragstart", function(event) { event.preventDefault(); });

  $('#link3').css('visibility','visible');
  $('#link4').css('visibility','visible');

  $('a').css('visibility','visible');
  $(' #link_2').css('opacity','1');//для убирания бага свзяь в home modile из за старнной связи при уменьшении экрана
}
 

  export function fun_page_Contacts(){ 
    peges3=1;
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
    $('#mosaic_1,#mosaic_2,#mosaic_3,#mosaic_4,#mosaic_5,#mosaic_6,#mosaic_7,#mosaic_8,#mosaic_9,#mosaic_10,#mosaic_11,#mosaic_12,#mosaic_13,#mosaic_14').finish();
    $('.cont_1,.cont_2,.cont_3,.cont_4,#touch,#contact_phone,#contact_linked,#contact_twiter,#contact_mail').finish();
    $('#roof,#mail,#phone,#linked,#twit').finish();
    $('#link1,#link2,#link3,#link4').finish();
 
    // $('#touch').animate({'margin-left': '-150px',opacity: "0"},600,);
    $('.mosaic').animate({'margin-top': '670px',opacity: "0"}, 700); 

  $('#contact_mail').animate({'margin-left': '500px',opacity: "0"},800,);
  $('#contact_phone').animate({'margin-left': '300px',opacity: "0"},700,);
  $('#contact_linked').animate({'margin-left': '300px',opacity: "0"},600,);   
  $('#contact_twiter').animate({'margin-left': '300px',opacity: "0"},500,);

  $('#link1').animate({'margin-left': '540px',opacity: "0"},800,);
  $('#link2').animate({'margin-left': '540px',opacity: "0"},700,);
  $('#link3').animate({'margin-left': '540px',opacity: "0"},600,);
  $('#link4').animate({'margin-left': '540px',opacity: "0"},500,);

  $('#roof').animate({'margin-left': '540px',opacity: "0"},550,);
  $('#mail').animate({'margin-left': '540px',opacity: "0"},550,);
  $('#phone').animate({'margin-left': '540px',opacity: "0"},550,);
  $('#linked').animate({'margin-left': '540px',opacity: "0"},550,); 
  $('#twit').animate({'margin-left': '540px',opacity: "0"},550,);

  // setTimeout(lintTime,400);

  $('#mosaic_1').animate({'margin-top': '650px',opacity: "0"},700,);
  $('#mosaic_2').animate({'margin-top': '650px',opacity: "0"},800,);
  $('#mosaic_3').animate({'margin-top': '650px',opacity: "0"},500,);
  $('#mosaic_4').animate({'margin-top': '650px',opacity: "0"},420,);
  $('#mosaic_5').animate({'margin-top': '650px',opacity: "0"},420,);
  $('#mosaic_6').animate({'margin-top': '650px',opacity: "0"},420,);
  $('#mosaic_7').animate({'margin-top': '650px',opacity: "0"},420,);
  $('#mosaic_8').animate({'margin-top': '650px',opacity: "0"},420,);
  $('#mosaic_9').animate({'margin-top': '650px',opacity: "0"},520,);
  $('#mosaic_10').animate({'margin-top': '650px',opacity: "0"},820,);
  $('#mosaic_11').animate({'margin-top': '650px',opacity: "0"},920,);
  $('#mosaic_12').animate({'margin-top': '650px',opacity: "0"},527,);
  $('#mosaic_13').animate({'margin-top': '650px',opacity: "0"},470,);
  $('#mosaic_14').animate({'margin-top': '650px',opacity: "0"},620,);


}



function lintTime2(){
  $('#link1').css('visibility','visible');
  $('#link2').css('visibility','visible');
  $('#link3').css('visibility','visible');
  $('#link4').css('visibility','visible');

  $('#gif_1').css('visibility','hidden');
  $('#gif_2').css('visibility','hidden');
 
}

$('#Contact_mobile').on('click', function (){ 
  $(' #link_2,#link_3,#link_3,.burger__button').finish();
  $(' #link_2').css('opacity','1');//для убирания бага свзяь в home modile
  $('#touch').css('opacity','0');
  global.mobile_butten_red = true;
  global.mobile_butten_yeloy = false;
  global.mobile_butten_green = false;
  rollbackPositionText_modile();
  
  peges3++;
  /////////прячим бургер
  if(peges3==1){
    $(' #link_2').css({'margin-left': '300px'});
    $(' #link_3').css({'margin-left': '150px'});
    $(' #link_4').css({'margin-left': '280px'});

    $(' #link_2').animate({'margin-left': '-40px'}, 600);
    $(' #link_3').animate({'margin-left': '-155px'}, 600);
    $(' #link_4').animate({'margin-left': '-75px'}, 600);  
  }else{
    $(' #link_2').animate({'margin-left': '-40px'}, 600);
    $(' #link_3').animate({'margin-left': '-155px'}, 600);
    $(' #link_4').animate({'margin-left': '-75px'}, 600); 
  }
    
 

  $('.burger__button').animate({'margin-left': '370px'}, 600);
  $('#clik').css('visibility','visible');
  $('#clik_1').css('visibility','hidden');
  $('#clik_2').css('visibility','hidden');
  $('#clik_3').css('visibility','hidden');

  $('.about_me_p2').css('opacity','0');//убираем баг уезжания заголовка 2 страницы
  Contact();
  move_contect_p3();

  $('.mosaic_mobile').css('visibility','visible');
  $('a').css('visibility','visible');
  
  
});

$('#clik_3').on('click', function (){
  $('#clik').css('visibility','visible');
  $('#clik_3').css('visibility','hidden');

  move_contect_p3();

  $('.burger__button').animate({'margin-left': '370px'}, 600);
});

function move_contect_p3(){
  $('.cont_1,.cont_2,.cont_3,.cont_4,#mosaic_2_mobile,#mosaic_3_mobile,#mosaic_4_mobile').finish();
  $('#touch').css('margin-top','-15px');
  $('#touch').animate({'margin-top': '75px'}, 600);

  $('.cont_1').css('margin-top','-20px');///убираем вылет с верху
  $('.cont_2').css('margin-top','-20px');///убираем вылет с верху
  $('.cont_3').css('margin-top','-20px');///убираем вылет с верху
  $('.cont_4').css('margin-top','-20px');///убираем вылет с верху


  $('.cont_1').animate({'margin-top': '10px'}, 600);
  $('.cont_2').animate({'margin-top': '10px'}, 600);
  $('.cont_3').animate({'margin-top': '10px'}, 600);
  $('.cont_4').animate({'margin-top': '10px'}, 600);

  // $('#link_3').animate({'margin-left': '1px'}, 600);
  // $('#link_4').animate({'margin-left': '1px'}, 600);

  $('#mosaic_2_mobile').animate({'margin-left': '1px'}, 600);
  $('#mosaic_3_mobile').animate({'margin-left': '1px'}, 600);
  $('#mosaic_4_mobile').animate({'margin-left': '0px'}, 600);
}

