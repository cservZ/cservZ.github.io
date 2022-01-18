<?php
    $array = ["give you up" => FALSE, "let you down" => FALSE, "run around and desert you" => FALSE];
    foreach($array as $key => $value) 
        echo "$key => " . ($value ? "ALWAYS" : "NEVER") . "<br/>";
