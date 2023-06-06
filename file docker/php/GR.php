
<?php
include "conn.php";

if(isset($_GET)){
$query = "SELECT * from autovettura;";
$result = $conn->query($query);


if ($result->num_rows > 0) {


    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data= "Nessun risultato trovato";
}

echo json_encode($data);


}
?>