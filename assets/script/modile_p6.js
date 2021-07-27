import { rollbackPositionText } from './animationPage_5.js';

$('#large__project').on('click', function () {
    $('#large__project').css('pointer-events', 'none');//убрать эфект hover
    $('#small__project').css( 'pointer-events','none');
    
    buf_big();
    setTimeout(time_buttonBigProd,500);  
});

function time_buttonBigProd(){
    $('#gif_1').css('visibility','hidden');
    $('#gif_2').css('visibility','hidden');
    $('#gif_3').css('visibility','hidden');
    $('#gif_4').css('visibility','hidden');
    $('.mosaic').css('visibility','hidden');
    $('.masaic_5').css('visibility','hidden');
    $('.masaic_6').css('visibility','hidden'); 
}

function largProd() {
    rollbackPositionText();
    BigProd();
    $('.line2_mobile').css('visibility', 'visible');
    $('.heading_6').css('top', '600px');
    $('.text_6').css('top', '680px');
}

$('.baton_LP').on('click', function () {
    $('.baton_LP').css('pointer-events', 'none');
    $('.baton_LP').animate({ 'margin-top': '450px', opacity: "0", }, 500);
    setTimeout(LP_baton, 500);
});

function LP_baton() {
    $('.text_009').animate({ 'top': '450px', opacity: "0", }, 700);
    $('.finish_text').animate({ 'top': '450px', opacity: "0", }, 700);

    rollbackPositionText();
    BigProd();

    $('.line2_mobile').css('visibility', 'visible');

    $('.heading_6').css('top', '600px');
    $('.text_6').css('top', '680px');
}

function BigProd() {
    $('#large_project_text').css('opacity', '0');
    $('#large_project_text').css('top', '480px');

    $('header').css( 'background-color','#FFFFFF');
    // $('#large_project').css('top', '220px');

    $('.line2_mobile').css('display', 'block');
    $('.line2_mobile').css('z-index', '300');
    // $('#line2').css('top','550px');
    $('.button_down_6').css('z-index', '30');
    $('.button_up_6').css('z-index', '30');

    $('.button_down_6').css('width', '45px');
    $('.button_up_6').css('width', '55px');

    if ($('#large__project').css('opacity') == 1) {

        $('#large_project').css('top', '215px');
        $('#large_project').css('margin-left', '100px');
        // $('#line2').css('top','550px');     
    }
    $('#masaic_5_1').css('margin-top', '400px');
    $('#masaic_5_0').css('margin-top', '400px');

    $('#About_me').finish();

    ////////////////прячим главную
    $('#gif_1').animate({ 'margin-left': '-400px', opacity: "0" }, 300,);
    $('#gif_2').animate({ 'margin-right': '-350px', opacity: "0" }, 300);
    $('#Hi').animate({ 'margin-left': '80px', opacity: "0" }, 300);
    $('#About_me').animate({ 'margin-top': '-40px', opacity: "0" }, 300);
    $('#small__project').animate({ 'margin-top': '100px', opacity: "0" }, 600);
    $('#large__project').animate({ 'margin-top': '150px', opacity: "0" }, 600);
    /////////////////////////показать элименты 4  
    // $('#large_project').animate({ 'margin-left': '300px', opacity: "1" }, 500);
    $('#large_project_text').animate({ 'top': '450px', opacity: "1" }, 500);
    ///////показать кнопку возрата
    $('#back_Home').animate({ 'left': '-60px', opacity: "1" }, 700);


    i = -1;
    i_mosaic = 2;

    $('.line2_mobile').css('top', '450px');
    $('.line2_mobile').animate({ 'top': '500px', opacity: "1" }, 900);

    $('#large_project').css('top', '215px');
    $('#large_project').css('margin-left', '115px');
    $('#large_project').animate({ 'margin-left': '300', opacity: "1" }, 700);

    $('#large_project_text').animate({ 'margin-left': '0px', opacity: "1" }, 700);

    $('#small__projec').css('z-index', '0');
    $('#large__project').css('z-index', '0');

    setTimeout(time, 700);

    $('.baton_LP').css('z-index', '0');


    $('.masaic_6').css('display', 'block');
    $('.masaic_6').css('margin-top', '650px');
    $('#masaic_6_12').css('display', 'block');
    $('#masaic_6_12').css('margin-top', '720px');

}
function time() {
    $('#small__project').css('visibility', 'hidden');
    $('#large__project').css('visibility', 'hidden');
}


///////////////////////////////////////
let i = -1;
let i_mosaic = 2;



export function page_6_amimation_data_mobile() {
    $('.heading_6,.text_6').finish();
    $('#_001_bigProd,#_001_text_bigProd,.blioc2').finish();
    $('#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,#masaic_6_0').finish();
    i = -1;
    i_mosaic = 2;

    $('.heading_6').css('top', '600px');
    $('.text_6').css('top', '680px');


    $('#large_project').animate({ opacity: "0" }, 200);
    //   $('#large_project_text').animate({opacity: "0"}, 200 );
    $('.line2_mobile').animate({ opacity: "0" }, 300);
    $('.line2_mobile').css('z-index', '0');
    $('.button_down_6').css('z-index', '0');
    $('.button_up_6').css('z-index', '0');

    $('.button_down_6').css('display', 'none');
    $('.button_up_6').css('display', 'none');



    $('.button_down_6').css('opacity', '0');
    $('.button_up_6').css('opacity', '0');

    $('.masaic_6').css('opacity', '0');

    $('.button_down_6').css(' width', '1px');
    $('.button_up_6').css(' width', '1px');
}

function App() {
    $('.heading_6,.text_6').finish();
    $('#_001_bigProd,#_001_text_bigProd').finish();
    $('#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,#masaic_6_0').finish();

    if (i === -1){
        rollbackPositionText();
        $('#line2').css('display','block');
        
        $('#line2').css('visibility','visible');               
        $('.line2_mobile').css('top', '450px');
        $('#large_project_text').css('top','0px');
    
        $('.line2_mobile').animate({ 'top': '500px', opacity: "1" }, 700);
        $('#large_project').animate({ 'top': '230px', opacity: "1" }, 700);
        $('#large_project_text').animate({ 'top': '440px', opacity: "1" }, 700);
       
        $('.heading_6').css('top', '600px');
        $('.text_6').css('top', '680px');
    }

    $('.heading_6').each(function (index, value) {

        if (i === index) {
            $(value).animate({ 'top': '600px', opacity: "0", }, 560);
            if (i === 1) {
                $('#_001_bigProd').animate({ 'top': '-77px', opacity: "1", }, 1000);
                $('#_001_text_bigProd').animate({ 'top': '50px', opacity: "1", }, 1000);
            }
        }
        if ((i - 1) === index) {
            $(value).animate({ 'top': '270px', opacity: "1", }, 1000);


        }
        if ((i - 2) === index) {
            $(value).animate({ 'top': '18px', opacity: "1", }, 1000);

        }

    });
    $('.text_6').each(function (index, value) {
        if (i === index) {
            $(value).animate({ 'top': '680px', opacity: "0", }, 260);
        }
        if ((i - 1) === index) {
            $(value).animate({ 'top': '350px', opacity: "1", }, 960);

        }
        if ((i - 2) === index) {
            $(value).animate({ 'top': '100px', opacity: "1", }, 960);
        }

    });
    --i;
    if (i <= -1) {
        i = -1;
    }

    --i_mosaic;
    if (i_mosaic <= 2) {
        i_mosaic = 2;
    }
    ///////////////////////////////////крутим мозайку

    if (i_mosaic === 2) {
        $('.button_up_6').css("display", "none");
        $('.button_up_6').css("opacity", "0");
    } else {
        $('.button_up_6').css("display", "block");
        $('.button_up_6').animate({ opacity: "1", }, 900);
    }

    if (i_mosaic === 2) {
        $('#masaic_6_2').animate({ 'margin-top': '520px', opacity: "0", }, 700);
    }

    if (i_mosaic === 3) {
        $('#masaic_6_3').animate({ 'margin-top': '520px', opacity: "0", }, 900);
    }
    if (i_mosaic === 4) {
        $('#masaic_6_4').animate({ 'margin-top': '520px', opacity: "0", }, 900);
    }
    if (i_mosaic === 5) {
        $('#masaic_6_5').animate({ 'margin-top': '520px', opacity: "0", }, 900);
        $('#masaic_6_6').animate({ 'margin-top': '520px', opacity: "0", }, 900);
        $('#masaic_6_7').animate({ 'margin-top': '520px', opacity: "0", }, 900);
    }
    if (i_mosaic === 6) {
        $('#masaic_6_8').animate({ 'margin-top': '520px', opacity: "0", }, 900);
        $('#masaic_6_9').animate({ 'margin-top': '520px', opacity: "0", }, 900);

    }
    if (i_mosaic === 7) {
        $('#masaic_6_10').animate({ 'margin-top': '620px', opacity: "0", }, 900);
    }
    if (i_mosaic === 8) {
        $('#masaic_6_11').animate({ 'margin-top': '620px', opacity: "0", }, 900);
      
       
    }

    if (i_mosaic === 9) {
        $('#clik').css('visibility','hidden');
        $('.blioc2').animate({ 'margin-top': '0px' }, 800);
        $('#masaic_6_12').animate({ 'margin-top': '720px', opacity: "0", }, 900);
        $('.page_6').css('z-index', '-2000'); 
        //   $('#masaic_6_11').animate({'margin-top': '520px',opacity: "0",},800);   
        $('.text_009_6').animate({ 'top': '520px', opacity: "0", }, 700);
        $('.finish_text_6').animate({ 'top': '520px', opacity: "0", }, 700);
        $('.button_down_6').animate({ 'opacity': '1' }, 800);
        color ();
    }
}


function Down() {
    $('#masaic_6_1,#masaic_6_2,#masaic_6_3,#masaic_6_4,#masaic_6_5,#masaic_6_6,#masaic_6_7,#masaic_6_8,#masaic_6_9,#masaic_6_10,#masaic_6_11,#masaic_6_12,#masaic_6_13,#masaic_6_0').finish();

    $('#_001_bigProd,#_001_text_bigProd').finish();
    ++i;
    if (i >= 7) {
        i = 7;
    }

    $('.heading_6,.text_6').finish();

    ///////////////////////////////////крутим заголовок
    if (i_mosaic <= 8) {
        $('.heading_6').each(function (index, value) {

            if (i === index) {
                $(value).animate({ 'top': '270px', opacity: "1", }, 960);
            }
            if ((i - 1) === index) {
                $(value).animate({ 'top': '23px', opacity: "1", }, 960);
                $('#_001_bigProd').animate(
                    {
                        'top': '-420px',
                        opacity: "0",
                    },
                    700
                );
                $('#_001_text_bigProd').animate(
                    {
                        'top': '-150px',
                        opacity: "0",
                    },
                    950
                );
            }
            if ((i - 2) === index) {
                $(value).animate({ 'top': '-230px', opacity: "0", }, 700);
            }

        });
        ///////////////////////////////////крутим линии

        $('.text_6').each(function (index, value) {
            if (i === index) {
                $(value).animate({ 'top': '350px', opacity: "1", }, 1000);//нижний текст
            }
            if ((i - 1) === index) {
                $(value).animate({ 'top': '100px', opacity: "1", }, 1000);

            }
            if ((i - 2) === index) {
                $(value).animate({ 'top': '-150px', opacity: "0", }, 950);
            }

        });
    }

    ///////////////////////////////////крутим мозайку

    if (i_mosaic === 2) {
        $('#masaic_6_2').animate({ 'margin-top': '70px', opacity: "1", }, 700);
        $('.button_up_6').css('display', 'block');
        $('.button_up_6').animate({ opacity: "1", }, 900);
    }
    if (i_mosaic === 3) {
        $('#masaic_6_3').animate({ 'margin-top': '70px', opacity: "1", }, 900);
    }
    if (i_mosaic === 4) {
        $('#masaic_6_4').animate({ 'margin-top': '70px', opacity: "1", }, 900);
    }
    if (i_mosaic === 5) {
        $('#masaic_6_5').animate({ 'margin-top': '135px', opacity: "1", }, 900);
        $('#masaic_6_6').animate({ 'margin-top': '155px', opacity: "1", }, 800);
        $('#masaic_6_7').animate({ 'margin-top': '155px', opacity: "1", }, 600);
    }
    if (i_mosaic === 6) {
        $('#masaic_6_8').animate({ 'margin-top': '175px', opacity: "1", }, 900);
        $('#masaic_6_9').animate({ 'margin-top': '175px', opacity: "1", }, 900);

    }
    if (i_mosaic === 7) {
        $('#masaic_6_10').animate({ 'margin-top': '195px', opacity: "1", }, 900);
    }
    if (i_mosaic === 8) {

        $('#masaic_6_11').animate({ 'margin-top': '200px', opacity: "1", }, 900);
        // $('#masaic_6_12').animate({'margin-top': '608px',opacity: "1",},900); 

    }

    if (i_mosaic === 9) {
        $('.text_009_6').css('top','500px');
        $('.finish_text_6').css('top','700px');
        
        $('#clik').css('visibility','visible');
        $('.blioc2').animate({ 'margin-top': '20px' }, 800);
        $('.page_6').css('z-index', '2000'); 
        $('#masaic_6_12').animate({ 'margin-top': '244px', opacity: "1", }, 900);
        // $('.upText').animate({ 'top': '-150px', opacity: "0", }, 700);
        $('.upTextHeading_6').animate({ 'top': '-550px', opacity: "0", }, 700);
        $('.upTextHeading1_6').animate({ 'top': '-350px', opacity: "0", }, 700);
        $('.upText_6').animate({ 'top': '-450px', opacity: "0", }, 700);
        $('.upText1_6').animate({ 'top': '-250px', opacity: "0", }, 700); 
        
        $('.text_009_6').animate({ 'top': '170px', opacity: "1", }, 700);
        $('.finish_text_6').animate({ 'top': '270px', opacity: "1", }, 950);
        $('.button_down_6').animate({ 'opacity': '0' }, 800);
        $('.masaic_6').css("fill","#28C65C");  

    }
    if (i_mosaic > 7) {
        $('#link_big_progect').css('visibility', 'visible');
    }
    if (i_mosaic >= 9) {

        i_mosaic = 9;

    }
    ++i_mosaic;
}
function color (){
    $('#masaic_6_0').css("fill","#333333");
    $('#masaic_6_1').css("fill","#28C65C");
    $('#masaic_6_2').css("fill","#FF0000");
    $('#masaic_6_3').css("fill","#3D37CD");
    $('#masaic_6_4').css("fill","#28C65C");
    $('#masaic_6_5').css("fill","#FFBC00");
    $('#masaic_6_6').css("fill","#FFBC00");
    $('#masaic_6_7').css("fill","#FFBC00");
    $('#masaic_6_8').css("fill","#FF0000");
    $('#masaic_6_9').css("fill","#FF0000");
    $('#masaic_6_10').css("fill","#3D37CD");
    $('#masaic_6_11').css("fill","#FFBC00");      
    $('#masaic_6_12').css("fill","#3D37CD"); 
}
let posX = 0;
let posY = 0;
const screenWidth = window.screen.width;
document.addEventListener('touchmove', event => {
    if(screenWidth<=441){
        const { clientX, clientY } = event.touches[0];

        if ($('.line2_mobile').css('display') == 'block') {
            handle21();
            $('.lineSmalProdject').css("width","300px"); 
        }
    
        if (posY > clientY) {
            //верх
            if ($('.button_up_6').css('display') == 'block' || $('.button_down_6').css('display') == 'block') {
                handle1();
            }
        }
    
        if (posY < clientY) {
            //низ
            if ($('.button_up_6').css('display') == 'block' || $('.button_down_6').css('display') == 'block') {
                handle11();
            }
    
        }
    
        posX = clientX;
        posY = clientY;
    }
  
})



function line() {

    // $('#line').css('display','none');
    // $('#line2').css('display','none');

    $('#_001_bigPro,#_001_text_bigProd,#large_project,#large_project_text,.line2_mobile').finish();
    $(' .line2_mobile').css('display', 'none');//прячим линию вторую
    $('.masaic_6').css('visibility', 'visible');
    /////////прячим страницу

    $('.line2_mobile').animate({ 'top': '-230px', opacity: "0", }, 700);
    ///////////////////////////////////////////////////////////////////////////

    //   $('#_001_bigPro').animate({'margin-top': '150px',},);
    //   $('#_001_text_bigProd').animate({'top': '230px',},);
    //////прячим 4 страницу
    $('#large_project').animate(
        {
            'top': '-300px',
        },
        600
    );
    $('#large_project_text').animate(
        {
            'top': '-150px',
        },
        700
    );

    //////показывает текст
    $('#_001_bigProd').css("top", "400px");
    $('#_001_text_bigProd').css("top", "100px");

    setTimeout(textAnimate, 300)

    $('.button_down_6').css('display', 'block');

    $('.button_down_6').animate(
        {
            'margin-top': '45px',
            opacity: "1",
        },
        900
    );
    setTimeout(lineAnimate, 700);
    $('#clik').css('visibility','hidden');
    color ();
}

function textAnimate() {
    $('#_001_bigProd').animate({ 'top': '-58px', opacity: "1", }, 700);
    $('#_001_text_bigProd').animate({ 'top': '60px', opacity: "1", }, 700);
    ///мозайка
    $('#masaic_6_1').animate(
        {
            'margin-top': '50px',
            opacity: "1",
        },
        500
    );
    $('#masaic_6_0').animate(
        {
            'margin-top': '50px',
            opacity: "1",
        },
        900
    );

}

function lineAnimate() {
    $('.line_mobile').css('display', 'none');
    $('.line2_mobile').css('display', 'none');
}

let lastCall = 0;
function handle1() {
    let now = Date.now();

    if (now - lastCall > 750) {
        App();
        lastCall = now;
    }
}


function handle11() {
    let now = Date.now();

    if (now - lastCall > 750) {
        Down();
        lastCall = now;
    }
}

function handle21() {
    let now = Date.now();

    if (now - lastCall > 1300) {
        line();
        lastCall = now;
    }
}

function buf_big() {
    let now = Date.now();

    if (now - lastCall > 9) {
        largProd();
        lastCall = now;
    }
}
