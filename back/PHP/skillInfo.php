<?php
$geroName = $_GET["name"];
$skill = $_GET["skill"];

$con = mysqli_connect("localhost", "root", "", "gero");
$con->set_charset('utf8');
if(mysqli_connect_errno())
{
    echo "Faild to connect to MySQL:" .mysqli_connect_error();
}
$data = "";
$sql = "SELECT $skill FROM skillInfo WHERE ID = '$geroName'";
if($result = $con->query($sql)){
    foreach($result as $geroArr){
        $data = $geroArr[$skill];
    }
}


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: text/html');
echo $data;
?>