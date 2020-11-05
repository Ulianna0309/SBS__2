$('.slider__block').slick({
   dots: false,
  arrows: true,
  infinite: false,
  slidesToScroll: 1,
  speed: 500,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 770,
      settings: "unslick"
    }
]
});


$(document).ready(function () {
    $('.header-navigation__btn').click(function () {
        $(this).toggleClass('header-navigation__btn--active ');
        $(".header__nav").toggleClass("header__nav--active");
    });
});


(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 20) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());


function sum()

{

k=0;

for(i=0;i<22;i++)

{if(document.getElementById('tovar'+i).checked) k+=parseInt(document.getElementById('tovar'+i).value);}

document.form.res.value=k;

}



var steps = [false, false, false, false, false, false, false, false];
var curr_step = 1;

var int_val = 0; //для проверки площади


// возможность возвращаться к предыдущему вопросу
function set_history(index) {
    if (!(window.history && history.pushState)) {
        return false;
    }
    if (steps[index] == false) {
        history.pushState({'step_x': index}, null, window.location.href);
        steps[index] = true;
    }
}


// переходы по шагам
function to_step(index, need_push) {
    curr_step = index;
    for (var i = 1; i < steps.length; i++) {
        if (!$("#step" + i).is(':hidden')) {
            $("#step" + i).hide();
        }
    };
    $("#step" + index).show();

    $("#progress_in").css({width: (100 * index / steps.length) + "%"});
    $("#curr_step").text("Шаг " + index + " из " + (steps.length - 1));
    
    // Разделение на #step0, #other_steps и #last_step
    if (index + 1 == steps.length) { // если шаг равен общему количеству шагов
        if (!$("#other_steps").is(':hidden')) {
            $("#other_steps").hide();
            $("#last_step").show();
        }
    } else if (index > 1) { // если шаг больше ноля
        if ($("#other_steps").is(':hidden')) { $("#other_steps").show(); }
        if (!$("#last_step").is(':hidden')) { $("#last_step").hide(); }
    } else if (!$("#other_steps").is(':hidden')) { // если шаг равен нолю
        $("#other_steps").hide();
    } 

    if (need_push) {
        if (index == 2) { $("#area_input").focus(); }   // Фокусировка на поле площадь
        //if (index == 8) { $("#phone_input").focus();} // Фокусировка на поле телефон
        set_history(index);
    }
}


// Проверка заполненности радиокнопки или чекбокса
function check_radio_selected(elem_id, error_message) {
    obj = $('input[name="' + elem_id + '"]:checked');
    if (!(obj.length && obj.val())) {
        alert(error_message);
        return false;
    }
    return true;
}


// Проверка площади
function check_area() {
    obj = $('#area_input');
    if (obj.length && obj.val() && $.isNumeric(obj.val())) {
        int_val = parseInt(obj.val());
        if (int_val < 1) {
            alert("Укажите корректную площадь помещения");
            return false;
        }
    } else if (obj.length && obj.val() == "") {
        alert("Укажите площадь помещения");
        return false;
    } else {
        alert("Укажите корректную площадь помещения");
        return false;
    }
    return true;
}


// Проверка E-mail
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}


// Проверки полей по шагам и уведомления при незаполненных полях
(function($) {
    
    $(document).ready(function() { to_step(1, true); }); // задаем первоначальный индекс
    
    /*$("#to_step1").click(function(event) {
        event.preventDefault();
        to_step(1, true);
    });*/

    $("#to_step2").click(function(event) {
        event.preventDefault();
        if (check_radio_selected("type-home1", "Укажите платформу")) {
            to_step(2, true);
        }
    });
    $("#to_step3").click(function(event) {
        event.preventDefault();
         if (check_radio_selected("type-home2", "Укажите количество экранов")) {
            to_step(3, true);
        }
    });

    $("#to_step4").click(function(event) {
        event.preventDefault();
         if (check_radio_selected("type-repair", "Укажите дизайн")) {
            to_step(4, true);
        }
    });
       

   /* $("#to_step4").click(function(event) {
        event.preventDefault();
        
        var checked = $("#type-repair input:checked").length > 0;
        if (!checked){
            alert("Укажите какой ремонт необходим");
            return false;
        } else {
            to_step(4, true);
        }
        
        /*if (check_radio_selected("type-repair", "Укажите какой ремонт необходим"))    {
            to_step(4, true);
        
    });*/

    $("#to_step5").click(function(event) {
        event.preventDefault();
        if (check_radio_selected("type-repair2", "Укажите функционал")) {
            to_step(5, true);
        }
    });
    $("#to_step6").click(function(event) {
        event.preventDefault();
        if (check_radio_selected("purchase", "Укажите права пользования")) {
            to_step(6, true);
        }
    });

    /*$("#to_step6").click(function(event) {
        event.preventDefault();
        
        var checked = $("#purchase input:checked").length > 0;
        if (!checked){
            alert("Укажите нужна ли вам помощь в закупке материалов");
            return false;
        } else {
            to_step(6, true);
        }
        
    });*/

   $("#to_step7").click(function(event) {
        event.preventDefault();
        if (check_radio_selected("repair-date", "Укажите сторонние сервисы")) {
            to_step(7, true);
        }
    });

  /* $("#to_step8").click(function(event) {
        event.preventDefault();
        if (check_radio_selected("repair-price", "Укажите в какой бюджет вы хотите уложиться")) {
            
            if ($('#repair-price_5_input').is(':checked')) {
                if (($('#price_input').val().length > 0)) {
                    to_step(8, true);
                } else {
                    alert('Укажите свой бюджет в который вы хотите уложится');
                    return false;
                }
            } else {
                to_step(8, true);
            }
        }
    });*/


    // Отправка формы (нажатием на финальную кнопку)
    $("#to_submit").click(function(event) {
        event.preventDefault();
        $("#quiz_form").submit();
    });
    
    // Проверка телефона и ПК при отправке формы
    $('#quiz_form').submit(function () {
        
        var name = $.trim($(this).find('input[name="name_input"]').val());
        var phone = $.trim($(this).find('input[name="phone"]').val());
        var email = $.trim($(this).find('input[name="email_input"]').val());
        
        if (name  === '') {
            alert('Заполните поле с именем');
            return false;
        }

        if (phone  === '') {
            alert('Заполните поле с номером телефона');
            return false;
        } else if (phone.length < 8) {
            alert('Слишком короткий номер');
            return false;
        } else if (!((phone.lastIndexOf("+7", 0) === 0) || (phone.lastIndexOf("8", 0) === 0))) {
            alert('Введите корректный номер в формате +79998887766 или 89998887766');
            return false;
        }
        
        
        if(email  === '' || !validateEmail(email)) { 
            alert('Введите корректный E-mail');
            return false;
        }
        
        if (!$('input:checkbox[name="acceptance"]').is(':checked')) {
            alert('Вы должны ознакомиться с политикой конфиденциальности');
            return false;
        }
        
    });


    // для возврата к предыдущему вопросу
    window.addEventListener("popstate", function(e) {
        var step = 0;
        if (e.state) {
            step = e.state.step_x;
        }
        to_step(step);
    });

})(jQuery);



$(document).ready(function() {
    
    jQuery('body').on('change', '#quiz_form', function() {
        
        // Обводка для label input[type=radio]
        $('input[type=radio]').each(function(){
            if ($(this).is(':checked')) {       
                $(this).parent('label').addClass('checked');
            } else {
                $(this).parent('label').removeClass('checked');
            }   
        });
        
        // Обводка для label input[type=checkbox]
        $('input[type=checkbox]').each(function(){
            if ($(this).is(':checked')) {       
                $(this).parent('label').addClass('checked');
            } else {
                $(this).parent('label').removeClass('checked');
            }   
        });
        
    });
    
    // Поле ввода внутри label для input[type=radio]
    $("#up-layer").click(function() { $("#price_input").focus(); });
    
});



