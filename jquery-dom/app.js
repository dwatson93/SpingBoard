// 1-1
document.addEventListener("DOMContentLoaded", (e) => 
{
    console.log("\"Let’s get ready to party with jQuery!\"");
})

// 1-2
$("img").addClass("image-center");

// 1-3
$("p").last().remove()

// 1-4
$("#title").css("font-size", Math.random() * 100);

// 1-5
$("ol").append("<li> i like chicken </li>")

// 1-6
$("aside").empty().append($("<p>", {text: "Sorry about that list :("}));

// 1-7
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

// 1-8
$("img").on('click', function (e) {
    $(e.target).remove();
  });
