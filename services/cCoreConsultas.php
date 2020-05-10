<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.ford.mx/content/ford/mx/es_mx/.vehiclesmenu.data",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Cookie: ak_bmsc=190FC7ED77AFB6C84AC659457D8AFA6E17C1AC660A400000EA81B75E7CAF6C04~pli+7kaPbZdiV3Sa3yzMDUHGJdPgsn1pP1g507Dfk96JC9gw25M92rIXrvvGW6NYs/1NEkHyHgUPxtzfRwRByuNIGjZInfCvUpXN8dEadkzLKmAgAALcwNlsf6IeU2bdTljiYhOZ67XwsSUDM35iJeHvHRwEmkQMe5nWPyFSw6M22MKa/seRfBX3ohQBHvsIWXtk8DUjfgF5jMchUL/56PVYmu+HnoRWYETFOczI6yllw="
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>