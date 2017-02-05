	AOS.init({
    easing: 'ease-in-out-sine',
     disable: 'mobile'
});




    // Цыфирки
    $('#first').waypoint(
        function () {

                $('.timer').countTo({
                    stop:false,
                    from: 0, to: 39
                });

        },
        {offset: "350px"}
    );



    function once() {
        var result;
        $('.timer').countTo({
            stop:false,
            from: 0, to: 39
        });

        $

    }


    // Цыфирки

        $('#first_t').waypoint(
            function () {

                    $('.timer').countTo({
                        stop:false,
                        from: 0, to: 39});

            },
            {offset: "350px"}
        );




    // Цыфирки


    $('.blok__01 .img__n2').waypoint(
        function() {

            setTimeout(function () {
                $( ".blok__01 .img__n2 span" ).addClass( "activ__span" );
            }, 200);
        },
        {offset: "300px"}
    );

    $('.blok__01 .img__n3').waypoint(
        function() {
            setTimeout(function () {
                $( ".blok__01 .img__n3 span" ).addClass( "activ__span" );
            }, 200);
        },
        {offset: "300px"}
    );

    $('.blok__01 .img__n4').waypoint(
        function() {
            setTimeout(function () {
                $( ".blok__01 .img__n4 span" ).addClass( "activ__span" );
            }, 200);
        },
        {offset: "300px"}
    );



    $('.blok__01').waypoint(
        function() {
            $( ".blok__01 .img__n1" ).addClass( "activ" );
        },
        {offset: "100px"}
    );

    $('.blok__01').waypoint(
        function() {
            $( ".box__content__1" ).addClass( "text_info" );
        },
        {offset: "100px"}
    );

    $('.blok__01').waypoint(
        function() {
            $( ".box__line" ).addClass( "line_activ" );
        },
        {offset: "50px"}
    );
    $('.blok__01').waypoint(
        function() {
            $( ".title" ).addClass( "title__activ" );
        },
        {offset: "50px"}
    );




    $('.blok__01 .box__content__1').waypoint(
        function() {
            $( ".blok__01 .img__n2" ).addClass( "activ" );
        },
        {offset: "100px"}
    );

    $('.blok__01 .box__content__2').waypoint(
        function() {
            $( ".blok__01 .img__n3" ).addClass( "activ" );
        },
        {offset: "100px"}
    );


    $('.blok__01 .box__content__3').waypoint(
        function() {
            $( ".blok__01 .img__n4" ).addClass( "activ" );
        },
        {offset: "100px"}
    );




    $('.blok__02').waypoint(
        function() {
            $( ".blok__02 .doc" ).addClass( "slick-active" );
        },
        {offset: "100px"}
    );



    $('.blok__03').waypoint(
        function() {
            $( ".blok__03 .title" ).addClass( "active" );
        },
        {offset: "200px"}
    );


    $('.blok__03').waypoint(
        function() {
            $( ".blok__03 .box__line span" ).addClass( "activ" );
        },
        {offset: "200px"}
    );

    $('.blok__03').waypoint(
        function() {
            $( ".blok__03 .box_info" ).addClass( "activ" );
        },
        {offset: "200px"}
    );



    $('.blok__03').waypoint(
        function() {
            $( "#first .timer" ).addClass( "activ" );
        },
        {offset: "200px"}
    );
    $('.blok__06').waypoint(
        function() {
            $( "#first_t .timer" ).addClass( "activ" );
        },
        {offset: "200px"}
    );


    $('.blok__03 .box__img').waypoint(
        function() {
            setTimeout(function() {
                $( ".box__post .img__n1" ).addClass( "activ" );
            }, 1);
            setTimeout(function() {
                $( ".box__post .img__n2" ).addClass( "activ" );
            }, 550);
            setTimeout(function() {
                $( ".box__post .img__n3" ).addClass( "activ" );
            }, 1000);

        },
        {offset: "1px"}
    );

    $('.blok__03 .box__img').waypoint(
        function() {

            setTimeout(function() {
                $( ".box__post .box_bac" ).addClass( "box_bac1" );
            }, 3500);

        },
        {offset: "1px"}
    );




    $('.blok__07').waypoint(
        function() {
            $( ".box__img figure" ).addClass( "activ" );
        },
        {offset: "50px"}
    );
    $('.blok__07').waypoint(
        function() {
            $( ".blok__07 .box__img .box__widt" ).addClass( "box__widt__activ" );
        },
        {offset: "10px"}
    );

    $('.blok__08').waypoint(
        function() {
            $( ".blok__08 .box__img figure" ).addClass( "activ" );
        },
        {offset: "1px"}
    );

    $('.blok__08').waypoint(
        function() {
            $( ".blok__08 .box__widt" ).addClass( "widt__activ" );
        },
        {offset: "30px"}
    );





$(function () {
    $("[name=send]").click(function () {
		
		
		
	 // conversion  выбор
		var submit = $(this),
        form = submit.closest('form'),
        conversion = form.attr('data-conversion');
		
		
	
		
        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
              var patterntel = /^()[0-9+()]{7,16}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
		

        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function () {
                var form = $(this).closest('form'), name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: function() {
                            $('form').trigger("reset");
                            setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки


                            setTimeout(function () {
                                $("[class*='close']").click();
                            }, 2800);

                            $("#call_ok").click();

                            setTimeout(function () {
                                $('.close-call-ok').click();
                            }, 4000);






//                            yaCounter41256209.reachGoal(conversion);
                          //  location.href = 'http://www.u2powerbank.com.ua/success.php';
                            
                            
                            
                        },
                        error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success:
                            $.ajax({
                                type: 'POST',
                                url: 'https://app.getresponse.com/add_subscriber.html',
                                data: msg,
                                statusCode: {0:function() {
                                    $('form').trigger("reset");
                                    setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                                    // Настройки модального окна после удачной отправки

                                    setTimeout(function () {
                                        $("[class*='close']").click();
                                    }, 4000);

                                    $("#call_ok").click();

                                    setTimeout(function () {
                                        $('.close-call-ok').click();
                                    }, 8000);
















//                                yaCounter41256209.reachGoal(conversion);
                                   //   location.href = 'http://www.u2powerbank.com.ua/success.php';
                                    
                                }}
                            }),
                        error:  function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});







function set(obj) {var id=obj.title; $('.pacet').val(id);}
function setbtn(obj) {var id=obj.title; $('.pacet').val("Кнопка: " + id);}







// СКРОЛ ИД

$(".scroll_to_id").mPageScroll2id();

// СКРОЛ ИД



// телефон маска
$(function () {

      $('[id*="phone"]').mask("+38(999) 999-9999");

});

// телефон маска



    if (window.matchMedia('screen and (max-width: 500px)').matches) {
        // remove class
    }


  // слайдер  
       $(".slider-for") .slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

           arrows: false,
           autoplay: true,
           autoplaySpeed: 3500,
           fade: true,
           adaptiveHeight: true,


      });




    // слайдер
    $(".slider-foref").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        adaptiveHeight: true,




    });

        $('a[data-slide]').click(function(e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $('.slider-foref').slick('slickGoTo', slideno - 1);
        });





    $(".regular") .slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
           speed: 500,
		
		 responsive: [
			    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 998,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
      });






 


// отчет инпут наме 


function sendNameText()
{
  
    b = document.getElementById('uname');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};



function sendNameText_1()
{
  
    b = document.getElementById('uname_1');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};



function sendNameText_2()
{
  
    b = document.getElementById('uname_2');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};




function sendNameText_4()
{
  
    b = document.getElementById('uname_4');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};

function sendNameText_5()
{
  
    b = document.getElementById('uname_5');
    a = document.getElementById('inname');
    a.innerText = b.value ;
};

// отчет инпут наме 



//ФАНСИ


 $(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});    
  


			$('.fancybox').fancybox();




    $("[id*='addclass__']").click(function(){
        $("#addclass__n1").addClass("none");
        $(".box__forma__content").addClass("form__see");
    });



    $('.blok__01 .box__linea__h2').waypoint(
        function() {
            $( ".blok__01 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );

    $('.blok__02 .box__linea__h2').waypoint(
        function() {
            $( ".blok__02 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );

    $('.blok__03 .box__linea__h2').waypoint(
        function() {
            $( ".blok__03 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );


    $('.blok__04 .box__linea__h2').waypoint(
        function() {
            $( ".blok__04 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );


    $('.blok__05 .box__linea__h2').waypoint(
        function() {
            $( ".blok__05 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );



    $('.blok__06 .box__linea__h2').waypoint(
        function() {
            $( ".blok__06 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );



    $('.blok__07').waypoint(
        function() {
            $( ".blok__07 .box_text_day .box__day .day" ).addClass( "dae" );
        },
        {offset: "50px"}
    );

    $('.blok__07 .box__linea__h2').waypoint(
        function() {
            $( ".blok__07 .box__linea__h2 span" ).addClass( "ner" );
        },
        {offset: "550px"}
    );










    $('header').waypoint(
        (function() {

            $(document).on( "ready", function(){
                setTimeout(function() {
                    $( "header video" ).addClass( "see" );

                }, 4000);
            })

        })

        ,
        {offset: "15px"}
    );



    //demo 02



    new WOW({

        mobile:       true,

    }).init();



    //demo 02
    $("#mod_call").animatedModal({
        modalTarget:'modal-call',
        animatedIn:'fadeInLeft',
        animatedInOut:'bounceOutLeft',
        color:'#fff',
        animationDuration:'.',


    });  //demo 02
    $("#modal_zakaz").animatedModal({
        modalTarget:'modal-zakaz',

        animatedIn:'fadeInLeft',
        animatedInOut:'bounceOutLeft',
        color:'#fff',
        animationDuration:'.3',


    });  //demo 02


    $("#call_ok").animatedModal({
        modalTarget:'call-ok',
        animatedIn:'fadeInLeft',
        animatedInOut:'bounceOutLeft',
        color:'#fff',
        animationDuration:'.3',


    });


    $("#modal_rewu").animatedModal({
        modalTarget:'modal-zakaz',
        animatedIn:'fadeInLeft',
        animatedInOut:'bounceOutLeft',
        color:'#fff',
        animationDuration:'.3',


    });

    $("#modal_fen").animatedModal({
        modalTarget:'modal-zakaz',
        animatedIn:'fadeInLeft',
        animatedInOut:'bounceOutLeft',
        color:'#fff',
        animationDuration:'.3',


    });

