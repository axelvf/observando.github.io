$(function() {
    $.getJSON('https://freelance.axelvf.com.ar/observando/mailchimp.php',
     function(data) {
        var ul;
        for (var i = 0; i < data.length; i++) {
            ul = $('<li/>');
            ul.append("" + formatDate(data[i].date) + " - <a href=" + data[i].link + ">" + data[i].title + "</a></li>");
            $('ul').append(ul);
        }
    })
    .fail(function() {
        console.log( "Error al intentar obtener el feed" );
    })
});

function formatDate(userDate) {
    var dateArr = userDate.split('/');
    if (dateArr[0].length == 1) {
        dateArr[0] = '0' + dateArr[0];
    } else if (dateArr[1].length == 1) {
        dateArr[1] = '0' + dateArr[1];
    }
    userDate = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];
    return userDate;
}
