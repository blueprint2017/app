<?php
if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$midname = $_POST['midname'];
$lastname = $_POST['lastname'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$phone = $_POST['phone'];
$dob = $_POST['dob'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$parentFirstName = $_POST['parentName'];
$parentLastName = $_POST['parentLastName'];
$parentEmail = $_POST['parentEmail'];
$parentPhone = $_POST['parentPhone'];
$to = 'drillers@drillersdrivingschool.com';
$email_subject = "Drillers Driving School Contact Message From:  $name";
$email_body = "New contact form.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
if(mail($to,$email_subject,$email_body,$headers)) 			
?>