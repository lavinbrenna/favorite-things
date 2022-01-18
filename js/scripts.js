$(document).ready(function(){
  $("form#favorite-form").submit(function(event){
    const favoriteColor = $("input#favorite-color").val();
    const favoriteFood = $("input#favorite-food").val();
    const favoriteMovie = $("input#favorite-movie").val();
    const favoritePlant =$("input#favorite-plant").val();
    let favorites=[favoriteColor, favoriteFood,favoriteMovie, favoritePlant];
    favorites.forEach(function(favorite){
      $("ul#favorites").append("<li>"+favorite+"</li>");
    })
    console.log(favorites);
    event.preventDefault();
  })
})