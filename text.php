<html>
<head>
    <title></title>
</head>
<body>

<form action="myprocessingscript.php" method="POST">
    <input name="field1" type="text" />
    <input name="field2" type="text" />
    <input type="submit" name="submit" value="Save Data">
</form>

</body>
</html>






<?php
if(isset($_POST['field1']) && isset($_POST['field2'])) {
    $data = $_POST['field1'] . '-' . $_POST['field2'] . "\n";
    $ret = file_put_contents('/tmp/mydata.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
   die('no post data to process');
}﻿