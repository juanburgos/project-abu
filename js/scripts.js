$(function () {
    $("#signInButton").click(function () {
        $("#signInModal").modal();
    });
});

$(function () {
    $(".recipe-demo").click(function () {
        $("#recipeModal").modal();
    });
});

$(function () {
    $("#bookmarkRecipe").click(function () {
        $("#bookmarkRecipe").toggleClass('active');
    });
});