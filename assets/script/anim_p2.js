import {fun_page_Contacts} from './anim_p3.js';
import {rollbackPositionText} from './animationPage_5.js';
import {global} from './burger.js';

import {rollbackPositionText_modile} from './modile_p5.js';
import {bac_p4} from './backHome.js';

$('#About').on('click', function (){ 
    About();
});
function About(){
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
    rollbackPositionText();
    fun_page_Contacts();
    $('#gif_3').css('visibility','visible');
    $('#gif_4').css('visibility','visible');
  
    $('#foto').css('visibility','visible');
    
    $('.about_me_p2,.about_me_p2,#gif_3,.about_meIfo_p2,#gif_4,#gif_4,#back_Home,#foto').finish();
    ///прячим главную
    $('#gif_1').animate({'margin-left': '-400px',opacity: "0"}, 500,);
    $('#gif_2').animate({  'margin-right': '-350px', opacity: "0"}, 500 );
    
    $('#Hi').animate({ 'margin-left': '280px',opacity: "0"}, 500 );
    $('#About_me').animate({ 'margin-top': '-40px',opacity: "0"},550);
    $('#small__project').animate({ 'margin-top': '100px',opacity: "0"}, 600 );
    $('#large__project').animate({ 'margin-top': '150px',opacity: "0"}, 600 );    
    /////////////////откат позиций

/////////////////показать 2 страницу
    $('.about_meIfo_p2').animate({'margin-top': '30px',opacity: "1"}, 900 );
    $('.about_me_p2').animate({'margin-left': '0px',opacity: "1"}, 700 );
    $('#gif_3').animate({opacity: "1"}, 700 );   
    $('#gif_4').animate({opacity: "1"}, 700 );
    $('#back_Home').animate({'margin-left': '135px',opacity: "1"}, 400 ); 
    $('#foto').animate({'margin-left': '96px',opacity: "1"}, 700 );
   
    /////////////////////////прячим 4
    $('#smal_project').animate({opacity: "0"}, 300 );
    $('#text_p4').animate({opacity: "0"}, 300 );
    $('#line').animate({opacity: "0"}, 300);
    setTimeout(timeGif_1,400);
 /////////////////////////прячим 3
    $('#touch').animate({'margin-left': '350px',opacity: "0"},600,);
    // $('#touch').css('left','350px');
    // $('#touch').animate({'left': '-350px',opacity: "0"},600,);
   
    $('#large__project').css('z-index','-100');
    $('#small__project').css('z-index','-100');

    $('#foto').css('visibility','visible');
   
    // setTimeout(foto,400);

}

// function foto(){
//     $('#foto').css('visibility','visible');
// }

function timeGif_1(){
    $('#gif_1').css('visibility','hidden');
    $('#gif_2').css('visibility','hidden');  
}


export function fun_page_2(){  
    $('.about_me_p2,.about_me_p2,#gif_3,.about_meIfo_p2,#gif_4,#gif_4,#back_Home,#foto').finish();
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();

    $('#gif_1').animate({'margin-left': '-400px',opacity: "0"}, 500,);
    $('#gif_2').animate({ 'margin-right': '-350px',    opacity: "0"}, 500 );
    $('#Hi').animate({ 'margin-left': '280px',opacity: "0"}, 600 );
    $('#About_me').animate({ 'margin-top': '40px',opacity: "0"},400);
    $('#small__project').animate({ 'margin-top': '100px',opacity: "0"}, 600 );
    $('#large__project').animate({ 'margin-top': '150px',opacity: "0"}, 600 ); 
   
}



$('#About_mobile').on('click', function (){
   
    $(' #link_2').animate({'margin-left': '200px'}, 600);
    $(' #link_3').animate({'margin-left': '200px'}, 600);
    $(' #link_4').animate({'margin-left': '200px'}, 600); 
    $('#touch').css('opacity','0');
    
    global.mobile_butten_red = false;
    global.mobile_butten_yeloy = true;
    global.mobile_butten_green = false;
    $('.burger__button').animate({'margin-left': '370px'}, 600);
   
    rollbackPositionText_modile();
    fun_page_Contacts();
    $('#gif_3').css('visibility','visible');
    $('#gif_3').css('margin-left','0px');

    $('#foto').css('margin-top','0px');

    $('#gif_1').animate({'margin-left': '-400px',opacity: "0"}, 600,);
    $('#gif_2').animate({  'margin-right': '-200px',    opacity: "0"}, 600 );
    $('#gif_1').css('visibility','hidden');
    $('#Hi').animate({ 'margin-left': '280px',opacity: "0"}, 500 );
    $('#About_me').animate({ 'margin-top': '-40px',opacity: "0"},550);
    $('#small__project').animate({ 'margin-top': '100px',opacity: "0"}, 600 );
    $('#large__project').animate({ 'margin-top': '150px',opacity: "0"}, 600 ); 
   
    // About();
    $('.about_me_p2').css('margin-left','-220px');

    $('.about_me_p2').animate({'margin-top': '0px',opacity: "1"}, 0);
    $('.about_meIfo_p2').animate({'margin-top': '0px',opacity: "1"}, 900 );
  
    
    $('.about_me_p2').animate({'margin-left': '0px',opacity: "1"}, 700 );
    $('#gif_3').animate({opacity: "1"}, 700 );   
    $('#gif_4').animate({opacity: "1"}, 700 );
    $('#back_Home').animate({'margin-left': 'px',opacity: "1"}, 400 ); 
    $('#foto').animate({'margin-left': '96px',opacity: "1"}, 700 );

   
  
    $('#clik').css('visibility','visible');
    $('#clik_1').css('visibility','hidden');
    $('#clik_2').css('visibility','hidden');
    $('#clik_3').css('visibility','hidden');
/////////////////////////////////прячим 4
    bac_p4();  
    $('#gif_4').css('visibility','visible');

   
});
 
$('#clik_2').on('click', function (){

  
    $('.about_me_p2,.about_meIfo_p2,.burger__button').finish()

    $('.about_me_p2').animate({'margin-top': '0px'}, 600);
    $('.about_meIfo_p2').animate({'margin-top': '0px'}, 600);
    $('#gif_3').animate({'margin-left': '0px'}, 600);
    $('.burger__button').animate({'margin-left': '370px'}, 600);
    $('#foto').animate({'margin-top': '0px'}, 600);

    $('#clik').css('visibility','visible');
    $('#clik_2').css('visibility','hidden');
    $('#gif_3').css('visibility','visible');
});