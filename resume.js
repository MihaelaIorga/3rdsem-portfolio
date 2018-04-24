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
