function bold(){
    if(document.getElementById("text").style.fontWeight=="bold"){
        document.getElementById("text").style.fontWeight='normal';}
        else{
  document.getElementById("text").style.fontWeight='bold';}
}

function italic(){
    if(document.getElementById("text").style.fontStyle=='italic')
    {document.getElementById("text").style.fontStyle='normal';}
    else{
    document.getElementById("text").style.fontStyle='italic';}
}

function underline(){
    if(document.getElementById("text").style.textDecoration=='underline')
    {document.getElementById("text").style.textDecoration='';}
    else{
    document.getElementById("text").style.textDecoration='underline';}
}

function change(){
    var sel=document.getElementById("size").value;
    document.getElementById("text").style.fontSize=sel;
}

function arial(){
    var sel=document.getElementById("font").value;
    document.getElementById("text").style.fontFamily=sel;
}


$('.course').hover(function()
  {
     $(this).children('button').show();
  },
  function(){
   $(this).children('button').hide();
  });

$('.btnCourses').click(function(){
   $('.back').show();
});

$('#close').click(function(){
   $('.back').hide();
})


