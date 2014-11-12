/**
 * Created by Nathan on 11/11/2014.
 */
(function( window ){

    var body = document.body,
        mask = document.createElement("div"),
        toggleSlideLeft = document.querySelector( ".toggle-slide-left" ),
        slideMenuLeft = document.querySelector( ".slide-menu-left" ),
        activeNav
        ;
    mask.className = "mask";

    /* slide menu left */
    toggleSlideLeft.addEventListener( "click", function(){
        classie.add( body, "sml-open" );
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );

    /* hide active menu if mask is clicked */
    mask.addEventListener( "click", function(){
        classie.remove( body, activeNav );
        activeNav = "";
        document.body.removeChild(mask);
    } );

    /* hide active menu if close menu button is clicked */
    [].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
        el.addEventListener( "click", function(){
            classie.remove( body, activeNav );
            activeNav = "";
            document.body.removeChild(mask);
        } );
    });

})( window );