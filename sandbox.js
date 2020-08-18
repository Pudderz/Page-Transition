

let btn = document.getElementById('btn-click');
let sect1 = document.getElementById('sect1');
let overlay = document.getElementById('morph');
console.log(overlay);
console.log('running');

 let morphing = anime({
    targets: '.morph',
    d:[ {value: "M5 1H-1V700H5C9.33333 677.333 5 620.48 5 537V294V89V1Z"},
        {value: "M591 1H-1V700H470C474.333 677.333 592.4 616 646 552C713 472 631 422 487 374C356.078 330.359 466 260 591 214C691 177.2 632.667 36.6667 591 1Z"},
        {value: "M1150 1H-1V700H1150C1154.33 677.333 1150 612 1150 554C1150 449.65 1166.36 552.905 1150 402C1141 319 1153.89 341.895 1150 270C1144 159 1150 53 1150 1Z"},
        {value: "M1153 1H1V700H1153V347.504V1Z"}
            
    ],
    easing: 'easeInOutQuad',
    duration: 1300,
    loop:false,
    autoplay:false,
});   

btn.addEventListener('click', ()=>{
    console.log('clicked')
    overlay.classList.add('pointer');
    morphing.restart();
})




