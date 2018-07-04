
(function ($) {
    "use strict";

    // Focus input field
    $('.input-field').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).parent().removeClass('error');
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    });

    $('#submit').on('click',function(e) {
        e.preventDefault();
        var data = getData();
        $.ajax({
            url : 'http://localhost:8000/checklogin',
            type : 'POST',
            contentType : 'application/json',
            data : JSON.stringify(data)
        }).done(function(result){
            var myResult = JSON.parse(result);
            if(myResult.error) {
                // show the message
                $('.error-message').html(myResult.message);
                for(var f in myResult.fields){
                    if(myResult.fields[f] == 'u'){
                        $('input#login_username').parent().addClass('error');
                    } else if(myResult.fields[f] == 'p'){
                        $('input#login_password').parent().addClass('error');
                    }
                }
            }
            else {
                // add success class in error field
                $('.error-message').addClass('success');
                // show a good message
                $('.error-message').html(myResult.message);
                // wait 3 sec and then redirect to a page.
                setTimeout(function(){
                    window.location = 'https://google.com';
                }, 3000);
            }
        });
    });

    function getData() {
        var username = $('input#login_username').val();
        var password = $('input#login_password').val();

        return {"username":username,"password":password};
    }
    

})(jQuery);