<?php
	require "header.php";
?>

<?php

$contact_name = $_POST['name'];

$contact_email = $_POST['email'];

$contact_subject = $_POST['subject'];

$contact_message = $_POST['message'];

echo json_encode(array("message"=>"Message come from".$contact_email."has been sent"));

if(!empty($contact_name))

{

	$sender = $contact_email;

	$receiver = "shaoqing.yu@gmail.com";

	$client_ip = $_SERVER['REMOTE_ADDR'];

	$email_body = "Name: $contact_name \nEmail: $sender \n\nSubject: $contact_subject \n\nMessage: \n\n$contact_message \n\nIP: $client_ip \n\n";		

	$extra = "From: $sender\r\n" . "Reply-To: $sender \r\n" . "X-Mailer: PHP/" . phpversion();



	if( mail( $receiver, "$contact_subject", $email_body, $extra ) ) 

	{
		echo '<div id="topContent"></div><div id="midContent">';
	
		echo "Your Messeage Has Been Sent";
		
		echo '</div>';


	}

	else

	{
		echo '<div id="topContent"></div><div id="midContent">';
	
		echo "Sorry,Your Message Did Not Send Sucessfully.Please Try Again.";
		
		echo '</div>';


	}

}

else {
	
	
	echo '<div id="topContent"></div><div id="midContent">';
		
	echo 'Please input necessary content <br />';
	
	echo '<a href="contact.php">Go Back</a>';
	
	echo '</div>';
	
}

?>

<?php
	require "footer.php";
?>
