// window.addEventListener("mousemove", function(dets){
//     var rect = document.querySelector("#rectangle");
//     var xval = gsap.utils.mapRange(0, 
//         window.innerWidth,
//          100 + rect.getBoundingClientRect().width/2,
//           window.innerWidth - 100 - rect.getBoundingClientRect().width/2,
//            dets.clientX)
//     gsap.to("#rectangle",{
//         left: xval + "px",
//         ease: Power3
//     })
// })

window.addEventListener("mousemove", function(dets){
    var rect = document.querySelector("#rectangle");
   var xval =  gsap.utils.mapRange(0, window.innerWidth, window.innerWidth-100-rect.getBoundingClientRect().width/2, 100 + rect.getBoundingClientRect().width/2, dets.clientX)
gsap.to("#rectangle",{
    left: xval + "px",
    ease: Power4,
})
})