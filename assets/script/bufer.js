import {buf_smal} from './animationPage_5.js';

$('#small__project').on('click', function () { 
  $('#small__project').css( 'pointer-events','none');
  $('#large__project').css( 'pointer-events','none');
  $('.page_5').css('visibility','visible');
  setTimeout( Time,500);
 
  buf_smal();
  $('header').css( 'background-color','#FFFFFF');
 
  })

  function Time(){
    $('#gif_1').css('visibility','hidden');
    $('#gif_2').css('visibility','hidden');
    $('#gif_3').css('visibility','hidden');
    $('#gif_4').css('visibility','hidden');
    $('.mosaic').css('visibility','hidden');
    $('.masaic_5').css('visibility','hidden');
    $('.masaic_6').css('visibility','hidden');
    $('.page_6').css('visibility','hidden');
  }


export function line_smal(){
    $('#text_p4').css('opacity','0');
    $('#text_p4').css('top', '480px');

    $('#line').css('z-index','30');
    $('#line').css('display','block');
    $('#line').css('visibility','visible');
    $('.button_down').css('z-index','30');
    $('.button_up').css('z-index','30');  
    $('.button_down').css('width','45px');
    $('.button_up').css('width','55px');
   
    $('#smal_project').css('margin-left','-500px');

    $('#line').css('top','450px'); 
      
    $('#masaic_5_1').css('margin-top','400px');
    $('#masaic_5_0').css('margin-top','400px');
     
    $('#About_me').finish();  
      ////////////////прячим главную
    $('#gif_1').animate({'margin-left': '-400px',opacity: "0"}, 500,);
    $('#gif_2').animate({  'margin-right': '-350px',    opacity: "0"}, 500 );
    $('#Hi').animate({ 'margin-left': '80px',opacity: "0"}, 300 );
    $('#About_me').animate({ 'margin-top': '-40px',opacity: "0"},300);
    $('#small__project').animate({ 'margin-top': '100px',opacity: "0"}, 600 );
    $('#large__project').animate({ 'margin-top': '150px',opacity: "0"}, 600 );  
        /////////////////////////показать элименты 4  
    $('#smal_project').animate({ 'margin-left': '0px', opacity: "1"}, 700 );
    $('#text_p4').animate({ 'top': '450px', opacity: "1"}, 700 );
        ///////показать кнопку возрата
    $('#back_Home').animate({ 'left': '-60px', opacity: "1"}, 700 );
        
    $('#line').animate({ 'top': '500px',opacity: "1" }, 1000);
        
    $('#smal_project').css('top','215px');
    $('#smal_project').animate({ 'margin-left': '0px', opacity: "1"}, 700 );

    $('#small__project').css('z-index','-100');
    $('#large__project').css('z-index','-100');     
}


 
