// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require twitter/bootstrap
//= require_tree .

// $('.idea').draggable({ revert: true });
// $(".idea-drop").droppable({ 
//    accept: ".idea", 
//    activeClass: "idea-drop-active",
//    hoverClass: "idea-drop-hover",
//    drop: function(event, ui) {
//        alert( "dropped " + event.target.id );
//    }
//});

$("#idea-pending-list, #idea-in-progress-list, #idea-done-list").sortable({ 
  items: "> div", 
  connectWith: ".idea-list",
  //receive: function(event, ui) {
    //alert( "changed lists" + event.target.id );
  //},
  update: function(event, ui) {
    if (this === ui.item.parent()[0]) {
      alert( "sorted lists" + event.target.id + " " + ui.item.data() );
    }
  }
});

