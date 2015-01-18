<?php
// Fetching Values from URL.
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

	$subject = 'timothytong.com - New Message From '.$name;
	// To send HTML mail, the Content-type header must be set.
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From:' . $email. "\r\n"; // Sender's Email
	$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender
	$template = '<div style="padding:50px; color:white;">'
	. 'Name: ' . $name . '<br/>'
	. 'Email: ' . $email . '<br/>'
	. 'Message:<br/>' . $message . '<br/><br/>'
	. 'Your message has been sent to Timothy Tong.'
	. '<br/>'
	. 'I\'ll get back to you as soon as possible - Tim</div>';
	$sendmessage = "<div style=\"background-color:#1F1F1F; color:white;\">" . $template . "</div>";
	// Message lines should not exceed 70 characters (PHP rule), so wrap it.
	$sendmessage = wordwrap($sendmessage, 70);
	// Send mail by PHP Mail Function.
	mail("timothykytong@gmail.com", $subject, $sendmessage, $headers);
	echo "Got it. I'll get back to you ASAP.";

} else {
echo "<span>* invalid email *</span>";
}
?>