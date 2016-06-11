							<?php 
				if ($_SERVER['REQUEST_METHOD'] === 'POST') {
					$to = "ikapodlinska1@hotmail.co.uk"; // this is your Email address
					$from = $_POST['email']; // this is the sender's Email address
					$contact_name = $_POST['contact_name'];
					$phone_number = $_POST['phone_number'];
					$subject = "Someone messaged you from your IEI Ltd. Website";
					$subject2 = "Copy of your message for IEI Ltd.";
					$contact_message = $contact_name . " wrote the following message to you: " . "\n\n" . $_POST['contact_message'] . "\n\n" . "You can either reply to this email or contact " . "'" . $contact_name . "'" . " directly on their phone number: " . $phone_number;
					$message2 = "Here is a copy of your message for IEI Ltd. " . "\n\n" . $_POST['contact_message'] . "\n\n" . "This message has been successfully delivered, and we will reply to you as soon as possible." . "\n\n" . "Thank you," . "\n\n" . "IEI Ltd.";
					
					$headersReply = 'From: ' . $to . "\r\n" .
					'Reply-To: ' . $to . "\r\n";
					$headersReply2 = 'From: ' . $from . "\r\n" .
					'Reply-To: ' . $from . "\r\n";
					mail($to,$subject,$contact_message, $headersReply2);
					mail($from,$subject2,$message2, $headersReply); // sends a copy of the message to the sender
					header('Location: http://localhost/electric/index.html?#/success');
					// You can also use header('Location: thank_you.php'); to redirect to another page.
					}
				?>
