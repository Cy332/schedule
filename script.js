$(document).ready(function() {
    // 功能 1: 高亮選定課程
    $("td").click(function() {
        $(this).toggleClass("highlight");
    });

    // 功能 2: 顯示課程資訊彈窗
    $("td").click(function() {
        let subject = $(this).text();
        alert("課程名稱: " + subject);
    });

    // 功能 3: 過濾課程，但保留單元格位置
    $("#search").on("keyup", function() {
        let searchValue = $(this).val().toLowerCase();
        $("td").each(function() {
            let text = $(this).text().toLowerCase();
            if (text.indexOf(searchValue) > -1) {
                $(this).css("visibility", "visible");
            } else {
                $(this).css("visibility", "hidden");
            }
        });
    });
});
