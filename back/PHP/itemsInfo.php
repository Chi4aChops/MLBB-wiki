<?php
$itemName = $_GET["name"];
$con = mysqli_connect("localhost", "root", "", "gero");
$con->set_charset('utf8');
if(mysqli_connect_errno())
{
    echo "Faild to connect to MySQL:" .mysqli_connect_error();
}
$data = [];
$sql = "SELECT * FROM itemsInfo WHERE ID = '$itemName'";
if($result = $con->query($sql)){
    foreach($result as $geroArr){
        $data = [
            'name' => $geroArr["name"],
            'property' => $geroArr["stats"],
            'skill' => $geroArr["skills"],
        ];
    }
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
echo json_encode( $data );
?>