const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
function circleMouseFollower(){
    window.addEventListener("mousemove", function (dets){
        document.querySelector(
            "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `;
    });
}
circleMouseFollower();

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y : '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })
    
        .to(".boundingelem", {
        y: 0,
        ease : Expo.easeInOut,
        duration: 2,
        stagger: .2,
        delay: -1
        })

        .from("#herofooter", {
            y: -10,
            opacity: 0,
            delay:-1
        })

}
firstPageAnim();


// function circleChaptaKro(){
//     var xscale =1;
//     var yscale =1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove" , function(dets){
//         xscale = gsap.utils.clamp(0.8,1.2, dets.clientX - xprev);
//         yscale = gsap.utils.clamp(0.8,1.2, dets.clienty - yprev);

//         xprev =dets.clientX;
//         yprev = dets.clientY;

//         circleMouseFollower(xscale, yscale);
//     })
// }
// circleChaptaKro();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate =0;
    var diffroot = 0;

    elem.addEventListener("mouseleave" , function(details){
        gsap.to(elem.querySelector("img"),{
            opacity : 0,
            ease: Power3,
            duration : 0.5,
        })
    })

    elem.addEventListener("mousemove" , function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffroot = details.clientX - rotate;
        rotate = details.clientX; 
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            ease : Power1,
            top : diff,
            left : details.clientX,
            rotate: gsap.utils.clamp(-40, 40, diffroot*0.5),
        })
    })
})