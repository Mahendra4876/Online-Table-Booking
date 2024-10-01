<?php

    $sever ="localhost";
    $username  ="root";
    $password  ="";
    $dbname    ="test";

    $con = mysqli_connect($sever,$username,$password,$dbname);
    if(!$con)
    {
        echo "not connected";

    }
    else{
        echo "connect";
    }
?>