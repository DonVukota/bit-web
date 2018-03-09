$button = $('#dugme');
$button.on('click', getUser);
$userList = $('#usersList');

function getUser(event) {
    event.preventDefault();
    $search = $('#traznja').val();
    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + $search,
        method: "GET",

    });

    request.done(function (objectData) {
        objectData.items.forEach(element => {
            $slika = $('<img>');
            $slika.attr('src', element.avatar_url);
            $userList.append($slika)
            $p=$('<p>');
            $p.text(element.login);
            $userList.append($p);

        });


    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

}