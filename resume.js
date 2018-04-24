function showMore(){
    let holder = document.querySelector(".timeline");
    let allcount = holder.querySelectorAll(".jobitem").length;
    let count;
    let target;

    count = holder.querySelectorAll(".jobitem.show").length;
    target = holder.querySelector("div.jobitem:nth-child("+(count+1)+")");
    target.classList.add("show");
    resetTimelineHeight(false);
    if(allcount == (count+1)) document.querySelector(".showMoreBtn").classList.add("hide");
}
function resetTimelineHeight(firstTime){
    let target = document.querySelector(".timeline");
    let cHeight = target.clientHeight;
    let fHeight = 0;
    let vChilds = document.querySelectorAll(".timeline .jobitem.show");
    vChilds.forEach(function(item,index){
        fHeight += item.clientHeight;
    });
    if(fHeight>cHeight || firstTime!=false){
        target.style.height = fHeight + "px";
    }
}

setTimeout(function(){resetTimelineHeight(true);},250);






//skills bar

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bars');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {

        console.log('isInView')
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function () {
    checkAnimation();
});

