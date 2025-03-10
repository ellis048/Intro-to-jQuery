$(function() {
    $(".box").on("mouseenter", function() {
        // animations for each box
        if ($(this).attr("id") === "box1") {
            $(this).animate({ width: "150px" }, 500, "easeOutBounce");
        } else if ($(this).attr("id") === "box2") {
            $(this).animate({ height: "150px", opacity: 0.7 }, 500, "easeInOutElastic");
        } else {
            $(this).animate({ marginTop: "-20px" }, 500, "easeOutExpo");
        }
        $(this).css("background-color", "green");
    }).on("mouseleave", function() {
        // Resets animations
        $(this).animate({ width: "100px", height: "100px", opacity: 1, marginTop: "0px" }, 500, "easeInOutQuad");
        $(this).css("background-color", "blue");
    });
});

//growing animation for header
$(function() {
    $("h1").animate(
        { fontSize: "50px", color: "red" }, 
        1000
    );
});

//makes a div fade in and out || "glows"
$(function() {
    function glow() {
        $(".glows").animate({ opacity: 0.5 }, 500)
               .animate({ opacity: 1 }, 500, glow);
    }
    glow();
});
