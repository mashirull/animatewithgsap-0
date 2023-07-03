let tl = gsap.timeline({
    repeat : -1
});

tl.to('.imagecontainer' , {
    ease : Expo.easeInOut,
    duration : 2 ,
    width : "100%",
    stagger : 2
}, 'm')
.to('.text h1' , {
    ease : Expo.easeInOut ,
    duration : 2 ,
    top : '0%',
    stagger :2,
    opacity : '1'
},'m')
.to('.text h1' , {
    delay : 2,
    ease : Expo.easeInOut ,
    duration : 2 ,
    top : '-100%',
    stagger :2,
    opacity: '0'
},'m')
