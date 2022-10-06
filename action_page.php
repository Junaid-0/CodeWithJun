<?php
    $to      = 'mymood453@gmail.com';
    $subject = 'Message from viewer';
    $message = 'Noice';
    $headers = 'From: webmaster@example.com'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>
