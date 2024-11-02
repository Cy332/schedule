<script src="script.js">
  $(document).ready(function() {
    $("td").click(function() {
        $(this).toggleClass("highlight");
    });
});

$(document).ready(function() {
    $("td").click(function() {
        let subject = $(this).text();
        alert("課程名稱: " + subject);
    });
});

$(document).ready(function() {
    $("#search").on("keyup", function() {
        let searchValue = $(this).val().toLowerCase();
        $("td").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
        });
    });
});

  </script>
