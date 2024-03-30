<?php
$geroName = $_GET["gero"];

$con = mysqli_connect("localhost", "root", "", "gero");
$con->set_charset('utf8');
if(mysqli_connect_errno())
{
    echo "Faild to connect to MySQL:" .mysqli_connect_error();
}
$data = [];
$sql = "SELECT * FROM geroinfo WHERE ID = '$geroName'";
if($result = $con->query($sql)){
    foreach($result as $geroArr){
        $data = [
            "name"=> $geroArr["name"],
            "type"=> $geroArr["type"],
            "skillPassive"=> $geroArr["skill0"],
            "skillFirst"=> $geroArr["skill1"],
            "skillSecond"=> $geroArr["skill2"],
            "skillThird"=> $geroArr["skill3"],
            "costBO"=> $geroArr["costBO"],
            "costDiamond"=> $geroArr["costDiamond"],
            "zver"=> $geroArr["refYTZver"],
            "vud"=> $geroArr["refYTVood"],
            "history"=>$geroArr["history"],
            "role"=>$geroArr["role"],
            "speed"=>$geroArr["speed"],
            "hp"=>$geroArr["hp"],
            "mana"=>$geroArr["mana"],
            "magical"=>$geroArr["magical"],
            "attack"=>$geroArr["attack"],
            "attackSpeed"=>$geroArr["attackSpeed"],
            "phisDef"=>$geroArr["phisDef"],
            "hpRegen"=>$geroArr["hpRegen"],
            "mageDef"=>$geroArr["mageDef"],
            "manaRegen"=>$geroArr["manaRegen"],
        ];
    }
}
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header("Cache-Control: no-cache, must-revalidate");


header('Content-Type: application/json');
echo json_encode( $data );
?>