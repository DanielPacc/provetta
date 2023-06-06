<?php
include "conn.php";

if(isset($_POST)){

    $data = json_decode(file_get_contents('php://input'), true);

    $targa = $data["targa"];
    $marca = $data["marca"];
    $modello = $data["modello"];
    $costo = $data["costo"];
    $info = $data["info"];




    $query = "INSERT INTO autovettura (targa, marca, modello, costo, info) VALUES ('$marca', '$targa', '$modello', '$costo', '$info');";
    if($result = $conn->query($query)){
        $response = "inserimento avvenuto";
    }
    else{
        $response ="errorephp";
    }
    
}
else{
    $response ="errore grosso";
}


echo json_encode($response);
?>