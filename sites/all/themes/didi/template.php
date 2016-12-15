<?php

drupal_add_js(path_to_theme() . '/js/clients.js');
drupal_add_js(path_to_theme() . '/js/slider.js');

/*function hook_node_view($node, $view_mode, $langcode) {
  $node->content['my_additional_field'] = array(
   '#attributes' => array('class' => array('links', 'inline')),
  );
}

function didi_page_alter(&$page) {
var_dump($page['content']['system_main']['main']['#markup']);
die;  
}*/