(function($, Drupal) {  
  Drupal.behaviors.ajaxcontent = {
    attach:function() {
      
      function bodyOver(){
        if($('.wrapperAjaxcontent').hasClass('visible')){ 
          $('html body').css({
            'overflow':'hidden', 
            'width':'100%',
            'position':'fixed',
          });
        }else{
          $('html body').css({
            'overflow':'auto', 
            'width:':'auto',
            'position':'static',
          });
        }
      }
      
      $(document).click(function(event) {

          if ($(event.target).closest("#ajaxcontent").length) return;
          $('.wrapperAjaxcontent').removeClass('visible').addClass('none');
          event.stopPropagation();
          bodyOver();
        
      });
      
      $('.close').click(function(){
        $('.wrapperAjaxcontent').removeClass('visible').addClass('none');
        bodyOver();
      });
      
      bodyOver();
      
    }
  };
}(jQuery, Drupal));