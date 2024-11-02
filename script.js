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

    // 功能 3: 過濾課程，保留時間欄位位置
    $("#search").on("keyup", function() {
        let searchValue = $(this).val().toLowerCase();
        
        $("tbody tr").each(function() {
            let row = $(this);
            let showRow = false;

            // 檢查每個課程欄位是否符合搜尋條件
            row.find("td:not(:first-child)").each(function() {
                let text = $(this).text().toLowerCase();
                if (text.indexOf(searchValue) > -1) {
                    $(this).css("visibility", "visible");
                    showRow = true;
                } else {
                    $(this).css("visibility", "hidden");
                }
            });

            // 如果該行有符合條件的欄位，顯示時間欄位；否則隱藏整行
            if (showRow) {
                row.find("td:first-child").css("visibility", "visible");
            } else {
                row.find("td:first-child").css("visibility", "hidden");
            }
        });
    });
});
