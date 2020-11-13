<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST['name']) && empty($_POST['email'])) die();

if($_POST)
    {
        //set respose code 200
        http_response_code(200);
        $to = "jamescburns@me.com";
        $from = $_POST['name'];
        $subject = $_POST['subject'];
        //message
        $msg = $_POST['email'] . $_POST['message'];
        //headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-tyoe: text/html; charset=UTF-8\r\n";
        $headers.= "From: <" . from . ">";
        mail($to, $subject, $msg, $headers);

        //echo json-encode
        echojson_encode(array(
            "sent" => true
        ));
    }
else
    {
        //error
        echojson_encode(["sent" => false, "message" => "Something went wrong"]);
    }



?>