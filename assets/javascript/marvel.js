(function() {

  $(function() {

    let submitButton = $('#submitButton');
    let results;
    let table = $('#table');

    function getText() {
      return $('#enterAnswer').val();
    }

    function clearText() {
      $('#enterAnswer').val('');
    }

    function displayResults(){

      table.css({
      "display":"block"});

      $('#table tbody').empty();

      $.get("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=173cbea3db3ec54116f4a0de07cc1f3f&hash=aaa1750b932cf625dce4209f36b3b576&limit=100&nameStartsWith=" + getText(), function(data) {
        results = data.data.results;
        limit = data.data.limit;

        $.each(results, function(index, value) {

        var thumbnail = value.thumbnail.path + "." + value.thumbnail.extension;

        $('#table tbody').append(`<tr><td>${value.name}</td><td><img width ='250px' src='${thumbnail}'> </tr></td>`);

          console.log(value.name);
          console.log(thumbnail);

        })
    })
  }
  submitButton.click(function() {
    console.log("submit button clicked");
    console.log(getText());
    displayResults();
    clearText();
  })

})
})();
