(function($) {
$(document).ready(function() {
//############################
var _partnersTimeInterval = 20;
var _partnersPx = 0;
var gda_partners = function() {
    if($('.gda-partners > div').css('left') !== '-1000px') {
        _partnersPx +=1;
        $('.gda-partners > div').css({'left':-_partnersPx + 'px'});
    }
    else {
        _partnersPx= 0;
        $('.gda-partners > div > a').eq(0).clone().appendTo($('.gda-partners > div'));
        $('.gda-partners > div > a').eq(0).remove();
        $('.gda-partners > div').css({'left':'0'});
    }
};
gda_partners();
gdaPartnersInterval = setInterval(gda_partners,_partnersTimeInterval);
$('.gda-partners').hover(function() {
    clearInterval(gdaPartnersInterval);
}, function() {
    gdaPartnersInterval = setInterval(gda_partners,_partnersTimeInterval);
});
//############################
});
})(jQuery);