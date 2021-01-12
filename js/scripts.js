var blink = document.getElementById('blink');
setInterval(function() {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 1000);



$(document).ready(function () {
    $('.card-body').click(function () {
        $(this).hide();
        $('.card-text').show();
    });
  
        $('.card-text').click(function(){
             $(this).hide();
            $('card-body').show();
    });
                    
        //      $('.card-body').click(function () {
        //     $(this).toggle();
        //     $('.card-text').toggle();
        //  });

        //  $('.card-text').click(function () {
        //     $(this).toggle();
        //     $('card-body').toggle();
        //  });



         $(".container").submit(function(event) {
            event.preventDefault();
            var name = $("#naame").val();
            alert("Our Dear Client," + name+ ".We have received your  Order, It will delivered to your doorstep shortly;Thank you for Choosing us!!!");
            document.getElementById("my-form").reset();
        });
    });