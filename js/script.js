$(document).ready(function(){
    $(function(){

        $('#buy_button').hover(
            function(){
                $('#buy_info').fadeIn();
            },
            function(){
                $('#buy_info').fadeOut();
            }
        );

        $('#buy_button').click(function(){
            $('#buy_text').fadeIn(1500);
            $('#buy_text').fadeOut(2500);
        });

        $('#und').hover(
            function(){
                $('#shop_info_tex').fadeIn();
            },
            function(){
                $('#shop_info_tex').fadeOut();
            }
        );
        
    });
});