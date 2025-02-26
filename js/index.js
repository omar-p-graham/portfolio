$(function() {
    //Nav Menu
    $('.menu-icon i').addClass('bx bx-menu');
    $('.menu-icon i').click(function(){
        $(this).toggleClass('bx-menu bx-x');
        $('nav').toggleClass('open');
    });

    //Greeting
    let time_of_day = 'Morning';
    const time = new Date().getHours();
    if(time >= 0 && time <= 11){
        time_of_day = 'Morning';
    }else if(time > 11 && time <= 17){
        time_of_day = 'Afternoon';
    }else if(time > 17 && time <= 21){
        time_of_day = 'Evening';
    }else{
        time_of_day = 'Night';
    };
    $('.overview h5').html(`Good ${time_of_day},`);

    //Experience
    $('.experience-detail').click(function(){
        $(this).find('i').toggleClass('bx-caret-down bx-caret-up');
        $(this).find('.experience-duties').toggleClass('open');
    });
});