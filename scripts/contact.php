<?php
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "mc33266@email.vccs.edu";
    $subject = "Form Submission";
    $body = "";

    $body .= "From: ".$fullName."\r\n";
    $body .= "Email: ".$email."\r\n";
    $body .= "Email: ".$phone."\r\n";
    $body .= "Message: ".$message."\r\n";

    mail($to,$subject,$body);
?>