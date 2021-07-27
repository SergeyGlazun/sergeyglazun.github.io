import {fun_page_Contacts} from './anim_p3.js';
import {rollbackPositionText} from './animationPage_5.js';
import {global} from './burger.js';

import {rollbackPositionText_modile} from './modile_p5.js';

$('#logo,#back_Home').on('click', function (){ 
     fun_page_Contacts();   
   
     setTimeout(home(rollbackPositionText),100);
     $("img, a").on("dragstart", function(event) { event.preventDefault(); });
     $('header').css( 'background-color','initial');
});



function home(function_p5_export){
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
    $('#text_p4').css('opacity','0');
    $('#text_p4').css('top', '480px');
  
    function_p5_export();
     
    $('#gif_1').css('visibility','visible');
    $('#gif_2').css('visibility','visible');

    $('#Hi').animate({ 'margin-left': '-8px',opacity: "1"}, 700);
    $('#gif_2').animate({'margin-right': '-150px',opacity: "1"}, 500 );
    $('#gif_1').animate({'margin-left': '-165px',opacity: "1"},500); 
   
     
    $('#About_me').animate({'margin-top': '0px',opacity: "1"}, 700 );
    $('#About_me').animate({ 'margin-top': '0px',    opacity: "1"}, 300 );
    $('#small__project').animate( { 'margin-top': '0', opacity: "1"}, 700 );
    $('#large__project').animate({ 'margin-top': '0',    opacity: "1"}, 700 );
    $('#touch').animate({'margin-left': '-200px',opacity: "0"},600,);
  
    //////////////////////прячим 2 страницу
    $('#gif_3').animate({opacity: "0"},700);
    $('.about_me_p2').animate({'margin-left': '-400px',opacity: "0"}, 500);   
    $('#foto').animate({ 'margin-left': '-390px',opacity: "0"}, 700 );
    $('.about_meIfo_p2').animate({ 'margin-top': '60px',opacity: "0"}, 300 );
    $('#gif_4').animate({opacity: "0"},700);
    $('#back_Home').animate({opacity: "0", 'margin-lef': '40px'},400);

  //////////////////////////////прячим мозайку
  
 /////////////////////////прячим 4
 bac_p4();

 setTimeout(showGif,300);
 setTimeout(showBut,450);
 $('.page_6').css('z-index','-100'); 
}
function showGif(){
   
    $('#gif_1').css('visibility','visible');
    $('#gif_2').css('visibility','visible');
    $('#link4').css('visibility','hidden');

}
function showBut(){
    $('#large__project').css('visibility','visible');
    $('#small__project').css('visibility','visible');
}

export function bac_p4(){
    $('#smal_project').animate({opacity: "0"}, 300 );
    $('#text_p4').animate({opacity: "0"}, 300 );
    $('#line').animate({opacity: "0"}, 300);
   
    $('#small__project').css('z-index','20');
    $('#large__project').css('z-index','20');
       
    $('#large__project').css('visibility','visible');
    $('#small__project').css('visibility','visible');
    $('#small__project').css( 'pointer-events','auto');
    $('#large__project').css( 'pointer-events','auto');
   
    $('#gif_1').css('visibility','visible');
    $('#gif_2').css('visibility','visible');
}

export function fun_page_Home(){   
  
    $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#touch,#gif_3,.about_me_p2,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
    // setTimeout(gifHiden,200); 
    $('#Hi').animate({ 'margin-left': '-8px',opacity: "1"}, 700);
    $('#gif_2').animate({'margin-right': '-150px',opacity: "1"}, 500 );
    $('#gif_1').animate({'margin-left': '-165px',opacity: "1"},502); 
       
    // $('#About_me').animate({'margin-top': '0px',opacity: "1"}, 700 );
    $('#About_me').animate({ 'margin-top': '0px',    opacity: "1"}, 250 );
    $('#small__project').animate( { 'margin-top': '0', opacity: "1"}, 700 );
    $('#large__project').animate({ 'margin-top': '0',    opacity: "1"}, 700 );
    $('#touch').animate({'margin-left': '-150px',opacity: "0"},600,); 

    $('#gif_3').animate({opacity: "0"},700);
    $('.about_me_p2').animate({'margin-left': '-400px',opacity: "0"}, 700);   
    $('#foto').animate({ 'margin-left': '-390px',opacity: "0"}, 700 );
    $('.about_meIfo_p2').animate({ 'margin-top': '70px',opacity: "0"}, 200 );
    $('#gif_4').animate({opacity: "0"},700);
    $('#back_Home').animate({opacity: "0", 'margin-lef': '40px'},700);
}


    $('#back_Home_mobile').on('click', function (){
        home_mobile();  
    });

$('header').click(function(e){
	var target = this.getBoundingClientRect();
	var x = e.clientX - target.left;
	
        if(x>14 && x<128){
            home_mobile();
            $( "#logo_1" ).css( "fill", "#FE0000" );
            setTimeout(colorBeck,700);
        }      
}); 
function colorBeck(){  
    $( "#logo_1" ).css( "fill", "#333333" );  
}


function home_mobile(){
    $('a').css('visibility','hidden');
    // $(' #link_2').animate({'opacity': '200px'}, 600);
    // $(' #link_3').animate({'margin-left': '200px'}, 600);
    // $(' #link_4').animate({'margin-left': '200px'}, 600); 

    $(' #link_2').css('opacity','0');
    global.mobile_butten_red=false;
    global.mobile_butten_yeloy = false;
    global.mobile_butten_green = true;

    fun_page_Contacts();
    setTimeout(home(rollbackPositionText_modile),100);
    $('#clik').css('visibility','visible');
    $('#clik_1').css('visibility','hidden');
    $('#clik_2').css('visibility','hidden');
    $('#clik_3').css('visibility','hidden');
    $('#gif_1').animate({'left': '151px'}, 500);

    $('.about_I').animate({'margin-top': '0px',opacity: "1",'z-index': '100'}, 600);
    $('.burger__button').animate({'margin-left': '370px'}, 600);
   
    if(window.screen.availWidth==414){//контролим выезд гифки в зависимости от разрешения
        $('#gif_1').animate({'margin-left': '-148px'}, 0);
    }else if(window.screen.availWidth==411){
        $('#gif_1').animate({'margin-left': '-150px'}, 0);
    }
    else if(window.screen.availWidth==375){
        $('#gif_1').animate({'margin-left': '-150px'}, 0);
    }
    else
    {
        $('#gif_1').animate({'margin-left': '-170px'}, 0);
    }
}


