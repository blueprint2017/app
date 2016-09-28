/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("#successForm input,#successForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
			var midname = $("input#midname").val();
			var lastname = $("input#lastname").val();
			var address = $("input#address").val();
			var city = $("input#city").val();
			var zip = $("input#zip").val();
			var dob = $("input#dob").val();
			var parentFirstName = $("input#parentFirstName").val();
			var parentLastName = $("input#parentLastName").val();
			var parentEmail = $("input#parentEmail").val();
			var parentPhone = $("input#parentPhone").val();
			var state = $("input#state").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "./bin/success_form.php",
                type: "POST",
                data: {
                    name: name,
					midname: midname,
					lastname: lastname,
					address: address,
					city: city,
					zip: zip,
					dob: dob,
					parentFirstName: parentFirstName,
					parentLastName: parentLastName,
					parentEmail: parentEmail,
					parentPhone: parentPhone,
					state: state,
                    phone: phone,
                    email: email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your information has been sent. Please bring verifiable identification with you to Drillers Driving School. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#successForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly at drillers635@gmail.com? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#successForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
