var s_p = document.querySelector(".shortby_pick")
var w_s = document.querySelector(".wrap_sortby")
var svg = document.querySelector(".ic_triangle_svg")
var re = document.querySelector(".remove")

var isHidden = false;

s_p.addEventListener("click", function() {
    if (!isHidden) {
        // Show elements
        w_s.style.opacity = 1;
        w_s.style.visibility = "visible";
        svg.style.opacity = 1;
        svg.style.visibility = "visible";
        re.style.visibility = "visible";
        re.style.opacity = 0;
    } else {
        // Hide elements
        w_s.style.opacity = 0;
        w_s.style.visibility = "hidden";
        svg.style.opacity = 0;
        svg.style.visibility = "hidden";
        re.style.visibility = "hidden";
        re.style.opacity = 0;
    }

    // Toggle the state
    isHidden = !isHidden;
});



