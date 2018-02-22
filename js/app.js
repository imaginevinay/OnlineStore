$(window).scroll(function(){
    
    
    var wScroll = $(this).scrollTop();
    
    $('.heading').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    }); 
    
    //model transition
    
    if(wScroll > $('.clothes-pic').offset().top-($(window).height()/1.1))
    {
        $('.clothes-pic').each(function(i){
            
            setTimeout(function(){
                
                $('.clothes-pic').eq(i).addClass('is-showing');
                
            },150*(i+1));
            
            
        });
    }
    
    //periscope smooth scroll 
    if(wScroll > $('.periscope').offset().top-($(window).height())){
       
        $('.periscope').css({
            'background-position':'center'+ (wScroll-$('.periscope').offset().top) +'px'
        })
    }
    
    //persicope fade in out
    
    var opacity = (wScroll-$('.periscope').offset().top+400)/(wScroll/5);
    $('.window-tint').css({'opacity' : opacity});

    //blog posts animate
    
    if(wScroll > $('.blog-post').offset().top-$(window).height())
{
    var offset = Math.min(0, wScroll - $('.blog-post').offset().top + $(window).height() - 350);
    $('.post-1').css({'transform':'translate('+ offset +'px,'+ Math.abs(offset*0.2) +'px)'});
    $('.post-3').css({'transform':'translate('+ Math.abs(offset) +'px,'+ Math.abs(offset*0.2) +'px)'});
}
    
});




