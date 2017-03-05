<?php
if(empty($_POST['name'])  		||
   empty($_POST['midname']) 		||
   empty($_POST['lastName']) 		||
   empty($_POST['address'])	||
   empty($_POST['city']) ||
   empty($_POST['state']) ||
   empty($_POST['zip']) ||
   empty($_POST['phone']) ||
   empty($_POST['dob']) ||
   empty($_POST['email']) ||
   empty($_POST['parentName']) ||
   empty($_POST['parentLastName']) ||
   empty($_POST['parentEmail']) ||
   empty($_POST['parentPhone']) ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL) ||
   !filter_var($_POST['parentEmail'],FILTER_VALIDATE_EMAIL)) {
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
$parentFirstName = $_POST['parentName'];
$parentLastName = $_POST['parentLastName'];
$parentEmail = $_POST['parentEmail'];
$parentPhone = $_POST['parentPhone'];
$to = 'drillers@drillersdrivingschool.com';
$to2 = 'drillers635@gmail.com';
$email_subject = "Drillers Driving School Payment Contact From:  $name $midname $lastname";
$email_body = "New contact form. \n\n"."Student Info:\n\nFirst Name: $name\n\nMiddle Name: $midname\n\nLast Name: $lastname\n\nStreet Address: $address\n\nCity: $city\n\nState: $state\n\nZIP: $zip\n\nPhone Number: $phone\n\nDate of Birth: $dob\n\nEmail Address: $email_address\n\nParent/Guardian's Full Name: $parentFirstName $parentLastName\n\nParent/Guardian's Email Address: $parentEmail\n\nParent/Guardians Phone Number: $parentPhone\n\n";
$headers = "From: drillers635@gmail.com\n";
$headers = "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
mail($to2,$email_subject,$email_body,$headers);
if(mail($to,$email_subject,$email_body,$headers)) 			
?>