<?php

  $requested_name = $_GET['requested_name'];

  $possible_names = array(
    'youtube' => 'http://youtube.com',
    'facebook' => 'http://facebook.com'
  );

  echo json_encode($possible_names[$requested_name]);

?>