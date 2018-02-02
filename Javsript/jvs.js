$( document ).ready(function() {
   var count = 0;
});

(function(){
  $('#updateslide').carousel({ interval: false });
  
  $('.carousel-move .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<6;i++) {
      
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
        console.log(itemToClone.length);

    }
  });
}());

function toggletrans(){
  var element = document.getElementById("author");
    element.classList.remove("slideUp");
    var element = document.getElementById("form-translator");
    element.classList.remove("form-hide");
    document.getElementById('translator').classList.toggle('slideUp');
    var element = document.getElementById("form-author");
    element.classList.add("form-hide");
}
function toggleauthor(){
    var element = document.getElementById("translator");
    element.classList.remove("slideUp");
    var element = document.getElementById("form-translator");
    element.classList.add("form-hide");
    var element = document.getElementById("form-author");
    element.classList.remove("form-hide");
    document.getElementById('author').classList.toggle('slideUp')
}

function clickShowHideDescManga(id){
  $('#'+id+'hide').toggle(0);
  $('#'+id+'hide').mouseleave(function(event) {
    $('#'+id+'hide').css({
      display: 'none'});
  });
}