<?php 
   include 'header.php';  
?> 
<?php 
   include 'nav.php';  
?> 
      
      <main>
      
       <h2>Submit a Post</h2> 

       <input type="text" id="title" name="title" placeholder="Title">
<input type="text" id="author" name="author" placeholder="Author">
<input type="date" id="date" name="date" placeholder="Date">
<div id="editor"></div>
<button id="submit">Submit</button>
      
      </main>
      <script>

    var editor = ace.edit("editor");
editor.session.setMode("ace/mode/html")


</script>



      <?php 
   include 'footer.php';  
?> 
   
</body>
</html>

