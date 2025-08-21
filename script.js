const divs = document.querySelectorAll(".divs");

let colors=["#FF007F", "#00FFFF","#39FF14","#FF1DCE", "#FFFF33", "#FF3131", "#9400D3", "#30D5C8","#FF6700", "#7DF9FF","#8000FF","#FC0FC0", "#CCFF00","#6F00FF","#00FF9F"];
let colorIndex=0;

/*let colors = [
    "red","orange","yellow","green","blue","indigo","violet","pink","cyan","lime",
    "teal","gold","silver","brown","crimson","magenta","navy","olive","chocolate","coral",
    "darkblue","darkgreen","darkred","darkviolet","deeppink","deepskyblue","firebrick","forestgreen","hotpink","indianred",
    "khaki","lavender","lightblue","lightcoral","lightgreen","lightsalmon","lightseagreen","lightskyblue","lightsteelblue","limegreen",
    "maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred",
    "midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","orangered","orchid","palegoldenrod","palegreen",
    "paleturquoise","palevioletred","papayawhip","peachpuff","peru","plum","powderblue","rosybrown","royalblue","saddlebrown",
    "salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","snow","springgreen",
    "steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","aquamarine",
    "beige","bisque","black","blueviolet","cadetblue","chartreuse","darkcyan","darkgoldenrod","darkkhaki","darkmagenta"
  ];*/
/* 
    let div1 = document.querySelectorAll("#div1");
    colorUpdate();
    function colorUpdate(){
    div1[0].style.backgroundColor=colors[0];
    we can do like this  but lets do with divs class
}
*/
/* divs.forEach((div, i) => {
    div.style.backgroundColor = colors[i % colors.length];
  });*//*

/*  divs.forEach((div,i)=>{
        
    animateColors1();

  function animateColors1(){

          div.style.backgroundColor= colors[colorIndex];
            div.style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors1, 500);
  }

  });we can do like this also */

animateColors1();

  function animateColors1(){

          divs[0].style.backgroundColor= colors[colorIndex];
            divs[0].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors1, 500);
  }
animateColors2();

  function animateColors2(){

          divs[1].style.backgroundColor= colors[colorIndex];
            divs[1].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors2, 500);
  }
animateColors3();

  function animateColors3(){

          divs[2].style.backgroundColor= colors[colorIndex];
            divs[2].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors3, 400);
  }
  animateColors4();

  function animateColors4(){

          divs[3].style.backgroundColor= colors[colorIndex];
            divs[3].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors4, 500);
  }
animateColors5();

  function animateColors5(){

          divs[4].style.backgroundColor= colors[colorIndex];
            divs[4].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors5, 500);
  }
animateColors6();

  function animateColors6(){

          divs[5].style.backgroundColor= colors[colorIndex];
            divs[5].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors6, 400);
  }
  animateColors7();

  function animateColors7(){

          divs[6].style.backgroundColor= colors[colorIndex];
            divs[6].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors7, 500);
  }
animateColors8();

  function animateColors8(){

          divs[7].style.backgroundColor= colors[colorIndex];
            divs[7].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors8, 500);
  }
animateColors9();

  function animateColors9(){

          divs[8].style.backgroundColor= colors[colorIndex];
            divs[8].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors9, 400);
  }
  animateColors10();

  function animateColors10(){

          divs[9].style.backgroundColor= colors[colorIndex];
            divs[9].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors10, 500);
  }
animateColors11();

  function animateColors11(){

          divs[10].style.backgroundColor= colors[colorIndex];
            divs[10].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors11, 500);
  }
animateColors12();

  function animateColors12(){

          divs[11].style.backgroundColor= colors[colorIndex];
            divs[11].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors12, 500);
  }
animateColors13();

  function animateColors13(){

          divs[12].style.backgroundColor= colors[colorIndex];
            divs[12].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors13, 400);
  }
  animateColors14();

  function animateColors14(){

          divs[13].style.backgroundColor= colors[colorIndex];
            divs[13].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors14, 500);
  }
animateColors15();

  function animateColors15(){

          divs[14].style.backgroundColor= colors[colorIndex];
            divs[14].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors15, 500);
  }
animateColors16();

  function animateColors16(){

          divs[15].style.backgroundColor= colors[colorIndex];
            divs[15].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors16, 400);
  }
  animateColors17();

  function animateColors17(){

          divs[16].style.backgroundColor= colors[colorIndex];
            divs[16].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors17, 500);
  }
animateColors18();

  function animateColors18(){

          divs[17].style.backgroundColor= colors[colorIndex];
            divs[17].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors18, 500);
  }
animateColors19();

  function animateColors19(){

          divs[18].style.backgroundColor= colors[colorIndex];
            divs[18].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors19, 400);
  }
  animateColors20();

  function animateColors20(){

          divs[19].style.backgroundColor= colors[colorIndex];
            divs[19].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors20, 500);
  }
animateColors21();

  function animateColors21(){

          divs[20].style.backgroundColor= colors[colorIndex];
            divs[20].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors21, 500);
  }
animateColors22();

  function animateColors22(){

          divs[21].style.backgroundColor= colors[colorIndex];
            divs[21].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors22, 500);
  }
  animateColors23();

  function animateColors23(){

          divs[22].style.backgroundColor= colors[colorIndex];
            divs[22].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors23, 500);
  }
  animateColors24();

  function animateColors24(){

          divs[23].style.backgroundColor= colors[colorIndex];
            divs[23].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors24, 500);
  }
animateColors25();

  function animateColors25(){

          divs[24].style.backgroundColor= colors[colorIndex];
            divs[24].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors25, 500);
  }
animateColors26();

  function animateColors26(){

          divs[25].style.backgroundColor= colors[colorIndex];
            divs[25].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors26, 500);
  }
  animateColors27();

  function animateColors27(){

          divs[26].style.backgroundColor= colors[colorIndex];
            divs[26].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors27, 500);
  }
animateColors28();

  function animateColors28(){

          divs[27].style.backgroundColor= colors[colorIndex];
            divs[27].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors28, 500);
  }
animateColors29();

  function animateColors29(){

          divs[28].style.backgroundColor= colors[colorIndex];
            divs[28].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors29, 500);
  }
  animateColors30();

  function animateColors30(){

          divs[29].style.backgroundColor= colors[colorIndex];
            divs[29].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors30, 500);
  }

animateColors31();

  function animateColors31(){

          divs[30].style.backgroundColor= colors[colorIndex];
            divs[30].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors31, 500);
  }
animateColors32();

  function animateColors32(){

          divs[31].style.backgroundColor= colors[colorIndex];
            divs[31].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors32, 500);
  }
  animateColors33();

  function animateColors33(){

          divs[32].style.backgroundColor= colors[colorIndex];
            divs[32].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors33, 500);
  }
  animateColors34();

  function animateColors34(){

          divs[33].style.backgroundColor= colors[colorIndex];
            divs[33].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors34, 500);
  }
animateColors35();

  function animateColors35(){

          divs[34].style.backgroundColor= colors[colorIndex];
            divs[34].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors35, 500);
  }
animateColors36();

  function animateColors36(){

          divs[35].style.backgroundColor= colors[colorIndex];
            divs[35].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors36, 500);
  }
  animateColors37();

  function animateColors37(){

          divs[36].style.backgroundColor= colors[colorIndex];
            divs[36].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors37, 500);
  }
animateColors38();

  function animateColors38(){

          divs[37].style.backgroundColor= colors[colorIndex];
            divs[37].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors38, 500);
  }
animateColors39();

  function animateColors39(){

          divs[38].style.backgroundColor= colors[colorIndex];
            divs[38].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){
            colorIndex=0;
          }
          setTimeout(animateColors39, 500);
  }
  animateColors40();

  function animateColors40(){

          divs[39].style.backgroundColor= colors[colorIndex];
            divs[39].style.boxShadow=`0 0 10px 5px ${colors[colorIndex]}`;
          colorIndex++;

          if(colorIndex === colors.length){colorIndex=0;}
          setTimeout(animateColors40, 500);
        }
        
// animateColors41
animateColors41();
function animateColors41(){
    divs[40].style.backgroundColor = colors[colorIndex];
    divs[40].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors41, 500);
}

// animateColors42
animateColors42();
function animateColors42(){
    divs[41].style.backgroundColor = colors[colorIndex];
    divs[41].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors42, 500);
}

// animateColors43
animateColors43();
function animateColors43(){
    divs[42].style.backgroundColor = colors[colorIndex];
    divs[42].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors43, 500);
}

// animateColors44
animateColors44();
function animateColors44(){
    divs[43].style.backgroundColor = colors[colorIndex];
    divs[43].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors44, 500);
}

// animateColors45
animateColors45();
function animateColors45(){
    divs[44].style.backgroundColor = colors[colorIndex];
    divs[44].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors45, 500);
}

// animateColors46
animateColors46();
function animateColors46(){
    divs[45].style.backgroundColor = colors[colorIndex];
    divs[45].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors46, 500);
}

// animateColors47
animateColors47();
function animateColors47(){
    divs[46].style.backgroundColor = colors[colorIndex];
    divs[46].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors47, 500);
}

// animateColors48
animateColors48();
function animateColors48(){
    divs[47].style.backgroundColor = colors[colorIndex];
    divs[47].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors48, 500);
}

// animateColors49
animateColors49();
function animateColors49(){
    divs[48].style.backgroundColor = colors[colorIndex];
    divs[48].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors49, 500);
}

// animateColors50
animateColors50();
function animateColors50(){
    divs[49].style.backgroundColor = colors[colorIndex];
    divs[49].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors50, 500);
}

// animateColors51
animateColors51();
function animateColors51(){
    divs[50].style.backgroundColor = colors[colorIndex];
    divs[50].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors51, 500);
}

// animateColors52
animateColors52();
function animateColors52(){
    divs[51].style.backgroundColor = colors[colorIndex];
    divs[51].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors52, 500);
}

// animateColors53
animateColors53();
function animateColors53(){
    divs[52].style.backgroundColor = colors[colorIndex];
    divs[52].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors53, 500);
}

// animateColors54
animateColors54();
function animateColors54(){
    divs[53].style.backgroundColor = colors[colorIndex];
    divs[53].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors54, 500);
}

// animateColors55
animateColors55();
function animateColors55(){
    divs[54].style.backgroundColor = colors[colorIndex];
    divs[54].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors55, 500);
}

// animateColors56
animateColors56();
function animateColors56(){
    divs[55].style.backgroundColor = colors[colorIndex];
    divs[55].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors56, 500);
}

// animateColors57
animateColors57();
function animateColors57(){
    divs[56].style.backgroundColor = colors[colorIndex];
    divs[56].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors57, 500);
}

// animateColors58
animateColors58();
function animateColors58(){
    divs[57].style.backgroundColor = colors[colorIndex];
    divs[57].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors58, 500);
}

// animateColors59
animateColors59();
function animateColors59(){
    divs[58].style.backgroundColor = colors[colorIndex];
    divs[58].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors59, 500);
}

// animateColors60
animateColors60();
function animateColors60(){
    divs[59].style.backgroundColor = colors[colorIndex];
    divs[59].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if(colorIndex === colors.length){ colorIndex = 0; }
    setTimeout(animateColors60, 500);
}
// Function 61
animateColors61();
function animateColors61() {
    divs[60].style.backgroundColor = colors[colorIndex];
    divs[60].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors61, 500);
}

// Function 62
animateColors62();
function animateColors62() {
    divs[61].style.backgroundColor = colors[colorIndex];
    divs[61].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors62, 500);
}

// Function 63
animateColors63();
function animateColors63() {
    divs[62].style.backgroundColor = colors[colorIndex];
    divs[62].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors63, 500);
}

// Function 64
animateColors64();
function animateColors64() {
    divs[63].style.backgroundColor = colors[colorIndex];
    divs[63].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors64, 500);
}

// Function 65
animateColors65();
function animateColors65() {
    divs[64].style.backgroundColor = colors[colorIndex];
    divs[64].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors65, 500);
}

// Function 66
animateColors66();
function animateColors66() {
    divs[65].style.backgroundColor = colors[colorIndex];
    divs[65].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors66, 500);
}

// Function 67
animateColors67();
function animateColors67() {
    divs[66].style.backgroundColor = colors[colorIndex];
    divs[66].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors67, 500);
}

// Function 68
animateColors68();
function animateColors68() {
    divs[67].style.backgroundColor = colors[colorIndex];
    divs[67].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors68, 500);
}

// Function 69
animateColors69();
function animateColors69() {
    divs[68].style.backgroundColor = colors[colorIndex];
    divs[68].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors69, 500);
}

// Function 70
animateColors70();
function animateColors70() {
    divs[69].style.backgroundColor = colors[colorIndex];
    divs[69].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors70, 500);
}

// Function 71
animateColors71();
function animateColors71() {
    divs[70].style.backgroundColor = colors[colorIndex];
    divs[70].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors71, 500);
}

// Function 72
animateColors72();
function animateColors72() {
    divs[71].style.backgroundColor = colors[colorIndex];
    divs[71].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors72, 500);
}

// Function 73
animateColors73();
function animateColors73() {
    divs[72].style.backgroundColor = colors[colorIndex];
    divs[72].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors73, 500);
}

// Function 74
animateColors74();
function animateColors74() {
    divs[73].style.backgroundColor = colors[colorIndex];
    divs[73].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors74, 500);
}

// Function 75
animateColors75();
function animateColors75() {
    divs[74].style.backgroundColor = colors[colorIndex];
    divs[74].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors75, 500);
}

// Function 76
animateColors76();
function animateColors76() {
    divs[75].style.backgroundColor = colors[colorIndex];
    divs[75].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors76, 500);
}

// Function 77
animateColors77();
function animateColors77() {
    divs[76].style.backgroundColor = colors[colorIndex];
    divs[76].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors77, 500);
}

// Function 78
animateColors78();
function animateColors78() {
    divs[77].style.backgroundColor = colors[colorIndex];
    divs[77].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors78, 500);
}

// Function 79
animateColors79();
function animateColors79() {
    divs[78].style.backgroundColor = colors[colorIndex];
    divs[78].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors79, 500);
}

// Function 80
animateColors80();
function animateColors80() {
    divs[79].style.backgroundColor = colors[colorIndex];
    divs[79].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors80, 500);
}

// Function 81
animateColors81();
function animateColors81() {
    divs[80].style.backgroundColor = colors[colorIndex];
    divs[80].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors81, 500);
}

// Function 82
animateColors82();
function animateColors82() {
    divs[81].style.backgroundColor = colors[colorIndex];
    divs[81].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors82, 500);
}

// Function 83
animateColors83();
function animateColors83() {
    divs[82].style.backgroundColor = colors[colorIndex];
    divs[82].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors83, 500);
}

// Function 84
animateColors84();
function animateColors84() {
    divs[83].style.backgroundColor = colors[colorIndex];
    divs[83].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors84, 500);
}

// Function 85
animateColors85();
function animateColors85() {
    divs[84].style.backgroundColor = colors[colorIndex];
    divs[84].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors85, 500);
}

// Function 86
animateColors86();
function animateColors86() {
    divs[85].style.backgroundColor = colors[colorIndex];
    divs[85].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors86, 500);
}

// Function 87
animateColors87();
function animateColors87() {
    divs[86].style.backgroundColor = colors[colorIndex];
    divs[86].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors87, 500);
}

// Function 88
animateColors88();
function animateColors88() {
    divs[87].style.backgroundColor = colors[colorIndex];
    divs[87].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors88, 500);
}

// Function 89
animateColors89();
function animateColors89() {
    divs[88].style.backgroundColor = colors[colorIndex];
    divs[88].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors89, 500);
}

// Function 90
animateColors90();
function animateColors90() {
    divs[89].style.backgroundColor = colors[colorIndex];
    divs[89].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors90, 500);
}

// Function 91
animateColors91();
function animateColors91() {
    divs[90].style.backgroundColor = colors[colorIndex];
    divs[90].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors91, 500);
}

// Function 92
animateColors92();
function animateColors92() {
    divs[91].style.backgroundColor = colors[colorIndex];
    divs[91].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors92, 500);
}

// Function 93
animateColors93();
function animateColors93() {
    divs[92].style.backgroundColor = colors[colorIndex];
    divs[92].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors93, 500);
}

// Function 94
animateColors94();
function animateColors94() {
    divs[93].style.backgroundColor = colors[colorIndex];
    divs[93].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors94, 500);
}

// Function 95
animateColors95();
function animateColors95() {
    divs[94].style.backgroundColor = colors[colorIndex];
    divs[94].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors95, 500);
}

// Function 96
animateColors96();
function animateColors96() {
    divs[95].style.backgroundColor = colors[colorIndex];
    divs[95].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors96, 500);
}

// Function 97
animateColors97();
function animateColors97() {
    divs[96].style.backgroundColor = colors[colorIndex];
    divs[96].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors97, 500);
}

// Function 98
animateColors98();
function animateColors98() {
    divs[97].style.backgroundColor = colors[colorIndex];
    divs[97].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors98, 500);
}

// Function 99
animateColors99();
function animateColors99() {
    divs[98].style.backgroundColor = colors[colorIndex];
    divs[98].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors99, 500);
}

// Function 100
animateColors100();
function animateColors100() {
    divs[99].style.backgroundColor = colors[colorIndex];
    divs[99].style.boxShadow = `0 0 10px 5px ${colors[colorIndex]}`;
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
    setTimeout(animateColors100, 500);
}
