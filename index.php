<?php 

//prelevo i dati dal file dischi.json
//uso file_get_contents
$dischi = file_get_contents("dischi.json");
//var_dump($dischi);

//trasformo la stringa prelevata in un array
//uso json_decode e metto true come secondo parametro per avere un array invece di un object
$elenco_dischi = json_decode($dischi,true);
//var_dump($elenco_dischi);

//trasformo l'array in una stringa
$json = json_encode($elenco_dischi);

//invio i dati al client
header("Content-Type: application/json");
echo $json;

?>