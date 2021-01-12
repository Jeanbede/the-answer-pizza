// var blink = document.getElementById('blink');
// setInterval(function() {
//     blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
// }, 1500);



// $(document).ready(function () {
//     $('#design').click(function () {
//         $(this).hide();
//         $('#design-p').show();
//     });
  
//         $('#design-p').click(function(){
//              $(this).hide();
//             $('#design').show();
//     });
                    
//              $('#development').click(function () {
//             $(this).toggle();
//             $('#development-p').toggle();
//          });

//          $('#dvelopment-p').click(function () {
//             $(this).toggle();
//             $('development').toggle();
//          });

//          $('#product').click(function () {
//             $(this).toggle();
//             $('#product-p').toggle();
//          });

//          $('#product-p').click(function () {
//             $(this).toggle();
//             $('product').toggle();
//          });




         $(".container").submit(function(event) {
            event.preventDefault();
            var name = $("#naame").val();
            alert("Our Dear Client," + name+".We have received your  Order. It will be delivered to your doorstep shortly;Thank you for Choosing us!!!");
            document.getElementById("my-form").reset();
        });
   

    var blink = document.getElementById('blink');
setInterval(function() {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 6500);

                         
             
        var btn = document.getElementById("myBtn");

           btn.onclick = function(event) {
            
            var x = document.forms["myForm"]["naame"].value;
            if (x == "") {
                alert("Name not entered");
                return false;
            }
            var y = document.forms["myForm"]["naame"].value;
            if (y == "") {
                alert("Second name not entered");
                return false;
            }
            var z = document.forms["myForm"]["naame"].value;
            if (z == "") {
                alert("You have no message to send");
                return false;
            }
            var person1Input = $("input#form-name").val();
            $("form-contact").append(person1Input);
        
            $('myBtn').push('show');
            event.preventDefault();
        };
                          
 
//     $("#my-form").submit(function(event) {
//       event.preventDefault();
//       var name = $("#contact-name").val();
//       alert("Our Dear Client," + name + ".We have received your message,Thank you for reaching out to us!!!");
//       document.getElementById("my-form").reset();
//   });

     

  $(document).ready(function(){
    $("#design").click(function(){
        $("#design-p").toggle()
        $("#design").toggle()
    });
});
$(document).ready(function(){
    $("#design-p").click(function(){
        $("#design").toggle()
        $("#design-p").toggle()
    });
});
$(document).ready(function(){
    $("#development").click(function(){
        $("#development-p").toggle()
    $("#development").toggle()
    });
});
$(document).ready(function(){
    $("#development-p").click(function(){
        $("#development").toggle()
        $("#development-p").toggle()
    });
});
$(document).ready(function(){
    $("#product").click(function(){
        $("#product-p").show()
        $("#product").hide()
    });
});
$(document).ready(function(){
    $("#product-p").click(function(){
        $("#product").show()
        $("#product-p").hide()
    });
});

// $(document).ready(function(){
//     $("#wrap1").hover(function(){
//         $("#hide-1").toggle();
//     })
//     $("#wrap2").hover(function(){
//         $("#hide-2").toggle();
//     })
//     $("#wrap3").hover(function(){
//         $("#hide-3").toggle();
//     })
//     $("#wrap4").hover(function(){
//         $("#hide-4").toggle();
//     })
//     $("#wrap5").hover(function(){
//         $("#hide-5").toggle();
//     })
//     $("#wrap6").hover(function(){
//         $("#hide-6").toggle();
//     })
//     $("#wrap7").hover(function(){
//         $("#hide-7").toggle();
//     })
//     $("#wrap8").hover(function(){
//         $("#hide-8").toggle();
//     })
// });















       



        