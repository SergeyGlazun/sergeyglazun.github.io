let i = -1;
let i_mosaic = 2;

// $('.line_mobile').on('click', function () {

//     line();
// });
function line() {

    $('#_001,#_001_text,#smal_project,#text_p4,.line_mobile').finish();
    // $('.masaic_5').css('visibility','visible');
    /////////откатываем к начальным позициям
    $('.masaic_5').css('visibility', 'visible');
    $('.line_mobile2').css('display', 'none');//прячим линию вторую

    $('#smal_project').animate({ 'top': '-400px', }, 1000);
    $('#text_p4').animate({ 'top': '-150px' }, 1000);
    $('.line_mobile').animate({ 'top': '-150px', opacity: "0", }, 1000);
    //////показывает текст

    $('#_001').css("top", "400px");
    $('#_001_text').css("top", "120px");
    setTimeout(textAnimate, 300);
    ///мозайка  
    $('.heading_5').css('top', '600px');
    $('.text_5').css('top', '680px');
    // $('#line').css('display','none');
    // $('#line2').css('display','none'); 
    $('.button_down').css('display', 'block');
    setTimeout(lineAnimate, 700);
    $('#clik').css('visibility','hidden');
    color ();
}
function lineAnimate() {
    $('.line_mobile').css('display', 'none');
    $('.line_mobile2').css('display', 'none');
}
function textAnimate() {
    $('#_001').animate({ 'top': '-60px', opacity: "1", }, 1200);
    $('#_001_text').animate({ 'margin-top': '-55px', opacity: "1", }, 1200);
    $('#masaic_5_1').animate({ 'margin-top': '-31px', opacity: "1", }, 500);
    $('#masaic_5_0').animate({ 'margin-top': '-31px', opacity: "1", }, 900);
 
}

function App() {
    $('.heading_5,.text_5,.mosaic_5,#_001,#_001_text').finish();
    $('.baton_LP,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,#masaic_5_0').finish();
    if (i === -1){                  
        $('#Hi,#gif_2,#gif_1,#About_me,#small__project,#large__project,#gif_3,.about_meIfo_p2,#gif_4,#back_Home,#foto').finish();
        rollbackPositionText_modile();
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
    $('.heading_5').each(function (index, value) {

        if (i === index) {
            $(value).animate({ 'top': '600px', opacity: "0", }, 560);
            if (i === 1) {
                $('#_001').animate({ 'top': '-57px', opacity: "1", }, 1000);
                $('#_001_text').animate({ 'top': '120px', opacity: "1", }, 1000);
            }
        }
        if ((i - 1) === index) {
            $(value).animate({ 'top': '300px', opacity: "1", }, 1000);


        }
        if ((i - 2) === index) {
            $(value).animate({ 'top': '70px', opacity: "1", }, 1000);

        }

    });
    $('.text_5').each(function (index, value) {
        if (i === index) {
            $(value).animate({ 'top': '680px', opacity: "0", }, 260);
        }
        if ((i - 1) === index) {
            $(value).animate({ 'top': '380px', opacity: "1", }, 960);

        }
        if ((i - 2) === index) {
            $(value).animate({ 'top': '140px', opacity: "1", }, 960);
        }

    });
    --i;
    if (i <= -1) {
        i = -1;
    }

    --i_mosaic;
    if (i_mosaic < 2) {
        i_mosaic = 2;
    }
    ///////////////////////////////////крутим мозайку

    if (i_mosaic === 2) {
        $('.button_up').css("display", "none");
        $('.button_up').css("opacity", "0");
    } else {
        $('.button_up').css("display", "block");
        $('.button_up').animate({ opacity: "1", }, 900);
    }

    if (i_mosaic === 2) {
        $('#masaic_5_2').animate({ 'margin-top': '520px', opacity: "0", }, 700);

    }
    if (i_mosaic === 2) {
        $('#masaic_5_3').animate({ 'margin-top': '520px', opacity: "0", }, 900);
    }
    if (i_mosaic === 3) {
        $('#masaic_5_4').animate({ 'margin-top': '520px', opacity: "0", }, 700);
    }
    if (i_mosaic === 3) {
        $('#masaic_5_5').animate({ 'margin-top': '520px', opacity: "0", }, 500);
    }
    if (i_mosaic === 4) {
        $('#masaic_5_6').animate({ 'margin-top': '520px', opacity: "0", }, 500);
    }
    if (i_mosaic === 5) {
        $('#masaic_5_7').animate({ 'margin-top': '520px', opacity: "0", }, 500);
    }
    if (i_mosaic === 6) {
        $('#masaic_5_8').animate({ 'margin-top': '520px', opacity: "0", }, 500);
    }
    if (i_mosaic === 7) {
        $('#masaic_5_9').animate({ 'margin-top': '520px', opacity: "0", }, 500);
    }
    if (i_mosaic === 8) {
        $('#masaic_5_10').animate({ 'margin-top': '520px', opacity: "0", }, 600);
        $('#masaic_5_11').animate({ 'margin-top': '520px', opacity: "0", }, 800);        
    }


    if (i_mosaic === 9) {
        $('#clik').css('visibility','hidden');
        $('#masaic_5_12').animate({ 'margin-top': '520px', opacity: "0", }, 800);
        $('#masaic_5_13').animate({ 'margin-top': '520px', opacity: "0", }, 700);
        $('.page_5').css('z-index', '-100');
        $('.text_009').animate({ 'top': '520px', opacity: "0", }, 850);
        $('.finish_text').animate({ 'top': '520px', opacity: "0", }, 750);
        $('.baton_LP').animate({ 'margin-top': '520px', opacity: "0", }, 420);
        $('.blioc').animate({ opacity: "1", 'margin-top': '0px' }, 800);
        $('.button_down').animate({ 'opacity': '1' }, 800);
        $('.baton_LP').css('z-index', '30');
        color ();
    }
}
function color (){
    $('#masaic_5_0').css("fill","#3D37CD");
    $('#masaic_5_1').css("fill","#28C65C");
    $('#masaic_5_2').css("fill","#FFBC00");
    $('#masaic_5_3').css("fill","#FF0000");
    $('#masaic_5_4').css("fill","#333333");
    $('#masaic_5_5').css("fill","#FF0000");
    $('#masaic_5_6').css("fill","#3D37CD");
    $('#masaic_5_7').css("fill","#28C65C");
    $('#masaic_5_8').css("fill","#28C65C");
    $('#masaic_5_9').css("fill","#FF0000");
    $('#masaic_5_10').css("fill","#3D37CD");
    $('#masaic_5_11').css("fill","#FFBC00");      
    $('#masaic_5_12').css("fill","#3D37CD");
    $('#masaic_5_13').css("fill","#3D37CD");
}
function Down() {
    $('.heading_5,.text_5,.mosaic_5,#_001,#_001_text').finish();
    $('.baton_LP,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,#masaic_5_0').finish();
    ++i;
   
    
    if (i >= 7) {
        i = 7;
    }
    ///////////////////////////////////крутим заголовок
    let i1 = 0;
    if (i_mosaic <= 8) {
        $('.heading_5').each(function (index, value) {


            if (i === index) {
                $(value).animate({ 'top': '300px', opacity: "1", }, 960);//заголовок вторая строка
            }
            if ((i - 1) === index) {
                $(value).animate({ 'top': '73px', opacity: "1", }, 960);//заголовок первая строка
                $('#_001').animate(
                    {
                        'top': '-420px',
                        opacity: "0",
                    },
                    700
                );
                $('#_001_text').animate(
                    {
                        'top': '-150px',
                        opacity: "0",
                    },
                    950
                );
            }0
            if ((i - 2) === index) {
                $(value).animate({ 'top': '-230px', opacity: "0", }, 700);
            }

        });
        ///////////////////////////////////крутим линии

        $('.text_5').each(function (index, value) {

            if (i === index) {
                $(value).animate({ 'top': '370px', opacity: "1", }, 1000);
            }
            if ((i - 1) === index) {
                $(value).animate({ 'top': '140px', opacity: "1", }, 1000);//верхний текст

            }
            if ((i - 2) === index) {
                $(value).animate({ 'top': '-150px', opacity: "0", }, 950);
            }

        });
    }

    ///////////////////////////////////крутим мозайку

    if (i_mosaic === 2) {
        $('#masaic_5_2').animate({ 'margin-top': '-8px', opacity: "1", }, 700);
        $('.button_up').css('display', 'block');
        $('.button_up').animate({ opacity: "1", }, 900);
    }
    if (i_mosaic === 2) {
        $('#masaic_5_3').animate({ 'margin-top': '-8px', opacity: "1", }, 900);
    }
    if (i_mosaic === 3) {
        $('#masaic_5_4').animate({ 'margin-top': '34px', opacity: "1", }, 700);
    }
    if (i_mosaic === 3) {
        $('#masaic_5_5').animate({ 'margin-top': '34px', opacity: "1", }, 500);
    }
    if (i_mosaic === 4) {
        $('#masaic_5_6').animate({ 'margin-top': '23px', opacity: "1", }, 500);
    }
    if (i_mosaic === 5) {
        $('#masaic_5_7').animate({ 'margin-top': '23px', opacity: "1", }, 500);
    }
    if (i_mosaic === 6) {
        $('#masaic_5_8').animate({ 'margin-top': '56px', opacity: "1", }, 500);
    }
    if (i_mosaic === 7) {
        $('#masaic_5_9').animate({ 'margin-top': '74px', opacity: "1", }, 500);
    }
    if (i_mosaic === 8) {
        $('#masaic_5_10').animate({ 'margin-top': '62px', opacity: "1", }, 600);
        $('#masaic_5_11').animate({ 'margin-top': '62px', opacity: "1", }, 800);
        $('.button_down').animate({ 'opacity': '1' }, 800);
        $('.baton_LP').css('z-index', '0');
      
    }

    if (i_mosaic === 9) {
        $('.text_009').css('top','500px');
        $('.finish_text').css('top','700px');
        $('.baton_LP').css('top','300px');
        
        $('#clik').css('visibility','visible');
        $('.page_5').css('z-index', '2000');
        $('#masaic_5_12').animate({ 'margin-top': '62px', opacity: "1", }, 800);
        $('#masaic_5_13').animate({ 'margin-top': '62px', opacity: "1", }, 800);
        // $('.upText').animate({ 'top': '-150px', opacity: "0", }, 700);
        $('.upTextHeading').animate({ 'top': '-550px', opacity: "0", }, 700);
        $('.upTextHeading1').animate({ 'top': '-350px', opacity: "0", }, 700);
        $('.upText').animate({ 'top': '-450px', opacity: "0", }, 700);
        $('.upText1').animate({ 'top': '-250px', opacity: "0", }, 700);
        
        $('.text_009').animate({ 'top': '150px', opacity: "1", }, 700);
        $('.finish_text').animate({ 'top': '250px', opacity: "1", }, 850);
        $('.baton_LP').animate({ 'margin-top': '110px', opacity: "1", }, 850);
        $('.blioc').animate({ 'margin-top': '85px' }, 800);
        $('.button_down').animate({ 'opacity': '0' }, 800);
        $('.baton_LP').css('pointer-events', 'auto');
        $('.baton_LP').css('z-index', '600');
        $('.baton_LP').css('visibility', 'visible');
        $('.masaic_5').css("fill","#3D37CD");   
    }

    if (i_mosaic >= 9) {

        i_mosaic = 9;

    }
    ++i_mosaic;
}

let posX = 0;
let posY = 0;
const screenWidth = window.screen.width;
document.addEventListener('touchmove', event => {
    
    if(screenWidth<=441){
        
        const { clientX, clientY } = event.touches[0];
        if ($('.line_mobile').css('display') == 'block') {
            handle2();
            $('.lineSmalProdject').css("width","320px"); 
        }
    
        if (posY > clientY) {
            //верх
            if ($('.button_up').css('display') == 'block' || $('.button_down').css('display') == 'block') {
                handle();
            }
        }
    
        if (posY < clientY) {
            //низ
            if ($('.button_up').css('display') == 'block' || $('.button_down').css('display') == 'block') {
                handle1();
            }
    
        }     
        posX = clientX;
        posY = clientY;
    }
   
})

let lastCall = 0;
function handle() {
    let now = Date.now();

    if (now - lastCall > 750) {
        App();
        lastCall = now;
    }
}
function handle1() {
    let now = Date.now();

    if (now - lastCall > 750) {
        Down();
        lastCall = now;
    }
}
function handle2() {
    let now = Date.now();

    if (now - lastCall > 1300) {
        line();
        lastCall = now;
    }
}


export function rollbackPositionText_modile() {

    $('#small__project,#large__project').finish();
    $('#_001,#_001_text,#smal_project,#text_p4,#line').finish();
    $('#large_project,#large_project_text,#line2').finish();
    $('#smal_project,#text_p4,#line').finish();
    $('.heading_5,.text_5,.mosaic_5,#_001_bigProd').finish();
    $('.blioc2,.heading_6,.text_6,.mosaic_6').finish();
    $('#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,#masaic_6_0').finish();
    $('.baton_LP,#masaic_5_1,#masaic_5_2,#masaic_5_3,#masaic_5_4,#masaic_5_5,#masaic_5_6,#masaic_5_7,#masaic_5_8,#masaic_5_9,#masaic_5_10,#masaic_5_11,#masaic_5_12,#masaic_5_13,#masaic_5_0').finish();
    $('#_001').css('opacity', '0');
    $('.heading_5,.text_5').css('opacity', '0');


    $('.masaic_5').css('opacity', '0');

    $('.button_down').css('opacity', '0');

    $('.button_down').css('display', 'none');
    $('.button_up').css('display', 'none');

    $('.heading_5').css('top', '600px');
    $('.text_5').css('top', '650px');
    i = -1;
    i_mosaic = 2;
    $('.baton_LP').css('visibility', ' hidden');

    $('#masaic_5_2').css('margin-top', '420px');
    $('#masaic_5_3').css('margin-top', '420px');
    $('#masaic_5_4').css('margin-top', '420px');
    $('#masaic_5_5').css('margin-top', '420px');
    $('#masaic_5_6').css('margin-top', '420px');
    $('#masaic_5_7').css('margin-top', '420px');
    $('#masaic_5_8').css('margin-top', '420px');
    $('#masaic_5_9').css('margin-top', '420px');
    $('#masaic_5_10').css('margin-top', '480px');
    $('#masaic_5_11').css('margin-top', '420px');
    $('#masaic_5_12').css('margin-top', '480px');
    $('#masaic_5_13').css('margin-top', '420px');

    $('.masaic_5').css('opacity', '0');

    $('.baton_LP').css('margin-top', '470px');
    $('.baton_LP').css('opacity', '0');
    $('.baton_LP').css('z-index', '0');
    $('.button_up').css('opacity', '0');

    $(' .line_mobile').css('z-index', '0');
    $('.line2_mobile').css('z-index', '0');
    $('.button_down').css('z-index', '0');
    $('.button_up').css('z-index', '0');
    $(' .line_mobile').css('display', 'none');
    $(' .line2_mobile').css('display', 'none');

    $('.blioc').css('margin-top', '0px');
    //////////////////////////////////////////////////////////////////

    $('.heading_6').css('top', '400px');
    $('.text_6').css('top', '400px');

    $('#large_project').animate({ opacity: "0" }, 300);

    $('.line2_mobile').animate({ opacity: "0" }, 300);
    $('.button_down_6').css('z-index', '0');
    $('.button_up_6').css('z-index', '0');




    $('.button_down_6').css('display', 'none');
    $('.button_up_6').css('display', 'none');
    $('.button_down_6').css('opacity', '0');
    $('.button_up_6').css('opacity', '0');

    $('.masaic_6').css('opacity', '0');

    $('.button_down_6').css(' width', '1px');
    $('.button_up_6').css(' width', '1px');

    $('#masaic_6_2').css('margin-top', '420px');
    $('#masaic_6_3').css('margin-top', '420px');
    $('#masaic_6_4').css('margin-top', '420px');
    $('#masaic_6_5').css('margin-top', '420px');
    $('#masaic_6_6').css('margin-top', '420px');
    $('#masaic_6_7').css('margin-top', '420px');
    $('#masaic_6_8').css('margin-top', '420px');
    $('#masaic_6_9').css('margin-top', '420px');
    $('#masaic_6_10').css('margin-top', '480px');
    $('#masaic_6_11').css('margin-top', '420px');

    $('#_001_bigProd').css('opacity', '0');
    $('.heading_6,.text_6').css('opacity', '0');
    /////////////////////////////////////////////////////

    $('#large_project_text').css('opacity', '0');
    $('#large_project_text').css('top', '480px');
    $('#text_p4').css('opacity', '0');
    $('#text_p4').css('top', '480px')

    $('.blioc2').animate({ 'top': '-40px' }, 800);
    $('#link_big_progect').css('visibility', 'hidden');

    lineAnimate();

    $('#masaic_6_10').css('display', 'none');
    $('#masaic_6_11').css('display', 'none');
    $('#masaic_6_12').css('display', 'none');

    $('.mosaic_mobile').css('visibility', 'hidden');

    $('.page_6').css('z-index', '-100'); 
    $('.page_5').css('z-index', '-100'); 

    $('#small__project').css('visibility','hidden');
  $('#large__project').css('visibility','hidden');
}

