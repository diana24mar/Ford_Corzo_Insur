<?php
    // class CoreConsultas 
    // {
    //     function insertRegistro($aArray, $connectDB) {
            
    //     }
    // }
    //  Initiate curl
   
$url = 'https://www.ford.mx/content/ford/mx/es_mx/.vehiclesmenu.data';

$curl = curl_init($url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
  $data = curl_exec($curl);
  curl_close($curl);
  return $data;

?>