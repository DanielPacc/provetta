<?php
      $servername = "db";
      $username = "root";
      $password = "pass";
      $dbname = "db_ang";

      $conn = new mysqli($servername, $username, $password, $dbname);



      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        echo "dio";
    }
?>