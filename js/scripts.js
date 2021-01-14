// pop message 

         $(".container").submit(function(event) {
            event.preventDefault();
            var name = $("#naame").val();
            alert("Our Dear Client," + name+".We have received your  Order. It will be delivered to your doorstep shortly;Thank you for Choosing us!!!");
            document.getElementById("my-form").reset();
        });
   
        // blinking code

    var blink = document.getElementById('blink');
setInterval(function() {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 100);

    //    Hover code  

  $(document).ready(function(){
    $("#design").hover(function(){
        $("#design-p").show()
        $("#design").hive()
    });
});
$(document).ready(function(){
    $("#design-p").hover(function(){
        $("#design").show()
        $("#design-p").hide()
    });
});
$(document).ready(function(){
    $("#development").hover(function(){
        $("#development-p").show()
    $("#development").hide()
    });
});
$(document).ready(function(){
    $("#development-p").hover(function(){
        $("#development").show()
        $("#development-p").hide()
    });
});
$(document).ready(function(){
    $("#product").hover(function(){
        $("#product-p").show()
        $("#product").hide()
    });
});
$(document).ready(function(){
    $("#product-p").hover(function(){
        $("#product").show()
        $("#product-p").hide()
    });
});

// Executive js code
var contacts = [];

function addcontact() {
    var person = {
        firstName: prompt("firstname", ""),
        lastName: prompt("lastname", ""),
        address: prompt("address", ""),
        phoneNumber: prompt("phonenumber", "")
    };
    contacts.push(person);
}

function resetView() {
    document.getElementById("output").innerHTML = "";
}

function printPerson(person) {
    document.getElementById("output").innerHTML +=
        person.firstName + " - " +
        person.lastName + " - " +
        person.address + " - " +
        person.phoneNumber + "<br />";
}

function listContacts() {
    resetView();
    var len = contacts.length;
    for (x = 0; x < len; x++) {
        printPerson(contacts[x]);
    }
}

// Calculator code

function updatesum() {
    document.input.total.value = (document.input.time.value -0) + (document.input.cost.value -0);
        return false;
    }





        