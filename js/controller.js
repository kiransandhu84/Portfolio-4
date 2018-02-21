var designObj = null;

$('document').ready(function(){
    designObj = new myDesign(); 
});

function myDesign()
{
    this.init();
}

myDesign.prototype.init = function()
{
    this.startAnimate();
    this.registerAnimation();
};

myDesign.prototype.startAnimate = function()
{
    var _selfObj = this;
    _selfObj.setAnimationType({el: '.dev-name', animType: 'bounceIn'});
};

myDesign.prototype.registerAnimation = function()
{
    var isAnimEventTrigged = false;
    var _selfObj = this; 
    
    $('.btn-default').unbind('mouseenter').bind('mouseenter', function(){
       _selfObj.setAnimationType({el: this, animType: 'swing'});
    });
    
    $('.navbar-nav a, .navbar-brand').unbind('mouseenter').bind('mouseenter', function(){
        _selfObj.setAnimationType({el: this, animType: 'flipInY'});
    });
};

myDesign.prototype.setAnimationType = function(options)
{
    var animationProps = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    if(options)
    {
        $(options.el).addClass(options.animType + ' animated').one(animationProps, function(){
            $(options.el).removeClass(options.animType + " animated");
        }); 
    }
};