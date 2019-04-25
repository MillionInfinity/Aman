"use strict";
let $ = require('jquery');
console.log("ready!");


// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 10) {
//             $(".black").css("background", "blue");
//         }

//         else {
//             $(".black").css("background", "#333");
//         }
//     })
// })



const newNav =()=>{
    console.log("new nav");
    let theNav = `
        <header id="my-header">
        
        </header>
`;
    $("#godaddy").html(theNav);
};
newNav();


const footer = () => {
    let footerh = `<div class="nav footer">
                <div class="fi"><img src="./../imgs/logoflower2.png" alt="textlogo" width="150px"></div>
                    <div class="footer2 text-center">
                        <div class="f f1"><a href="#">Home</a><span>|</span></div>
                        <div class="f"><a href="#">Aman</a><span>|</span></div>
                        <div class="f"><a href="#">Gallery</a><span>|</span></div>
                        <div class="f"><a href="#">Branches</a></div>
                    </div> 
                </div>`;
    $("#footer").html(footerh);
};

footer();

const lowerpart = () => {
    // console.log("lower part of the page");
    let thepart = `
    <div class="d text-center">
    <p class="h">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./../imgs/logodesign.png" alt="textlogo" width="250px"></div>

    <div class="a tinone"><a href="aman.html"><div class="meet"><div class="met"></div></div><p class="textAman">Meet Aman</p></a></div>
    <div class="b tinone"><a href="#!"><div class="gal"><div class="met"></div></div><p class="textAman">Gallery</p></a></div>
    <div class="c tinone"><a href="#!"><img src="./../imgs/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="x tinone"><a href="#!"><img src="./../imgs/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="y tinone"><a href="#!"><img src="./../imgs/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="z tinone"><a href="#!"><img src="./../imgs/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
 
    `;
    $(".threeIn1").html(thepart);
};
lowerpart();

const lowerbranch = () => {
    // console.log("lower part of the page");
    let thepart = `
    <div class="d text-center">
    <p class="h">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./../imgs/logodesign.png" alt="textlogo" width="250px"></div>
     `;
    $(".threeIn2").html(thepart);
};
lowerbranch();

$('.form-control').on('click', function (e) {
    e.preventDefault();
    $(this).css('border', '2px solid #b9b1a7');
});

$('.submit').on('click', function (e) {
    e.preventDefault();
    $(this).css('background-color', '#ece5e7');
    $(this).css('color', 'rgb(138, 135, 135)');
});
module.exports = {
    footer,
    newNav,
    lowerpart

};

