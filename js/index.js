$(function() {
    //Nav Menu
    $('.menu-icon i').addClass('bx bx-menu');
    $('.menu-icon i').click(function(){
        $(this).toggleClass('bx-menu bx-x');
        $('nav').toggleClass('open');
    });

    $('nav li').click(function(){
        if($('nav').hasClass('open')){
            $('.menu-icon i').toggleClass('bx-menu bx-x');
            $('nav').toggleClass('open');
        }
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

    // Typewriter [Job Titles]
    function typewriter(index, text){
        let textIndex = 1;

        let tmp = setInterval(function() {
            if(textIndex < text[index].length + 1){
                $('.job-titles').text(text[index].substr(0, textIndex));
                textIndex++;
            }else{
                setTimeout(function(){deleting(index,text)}, 1000);
                clearInterval(tmp);
            }
        }, 100);
    };

    function deleting(index, text){
        let textIndex = text[index].length;

        let tmp = setInterval(function(){
            if(textIndex + 1 > 0){
                $('.job-titles').text(text[index].substr(0, textIndex));
                textIndex--;
            }else{
                index++;
                if(index == text.length){index = 0;}
                typewriter(index,text);
                clearInterval(tmp);
            }
        }, 50);
    };
    typewriter(0, $('.job-titles').data('jobs').split(','));

    //Experience
    $('.experience-detail').click(function(){
        $(this).find('i').toggleClass('bx-caret-down bx-caret-up');
        $(this).toggleClass('open');
    });
});