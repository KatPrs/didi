<?php

function ajaxcontent_admin_settings(){

  $form['comment'] = array(
    '#type' => 'radios',
    '#title' => t('Show comments ?'),
    '#options' => array(
      'yes' => t('yes'),
      'no' => t('no')
    ),
    '#default_value' => variable_get('comment', 'no')
  );
  
  return system_settings_form($form);
  
}