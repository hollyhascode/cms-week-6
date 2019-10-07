$(document).ready(function() {
    $("#hiddenText").hover(function() {
        $(this).css("color", "black"); 
    }, 
      function() {
        $(this).hide();    
    }); 
});


var options = {
    valueNames: [ 'title' ]
};

new List('sortable-blog-list', options);


$("#submit").click(function() {
    
var title = $("#title").val();
var author = $("#author").val();
var date = $("#date").val();
var content = editor.getValue();
$.post( "submit-post.php", { 
    title: title, 
    content: content, 
    author: author, 
    date: date 
}).done(function() {
window.location = "/index.php";
});

});


