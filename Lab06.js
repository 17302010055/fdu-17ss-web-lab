var i;
var k;
var j;
for(i=0;i<4;i++){
    document.write("<div class='item'>");
    document.write("<h2>" + countries[i].name +"</h2>");
    document.write("<p>" + countries[i].continent + "</p>");
    document.write("<div class='inner-box'>" + "<h3>Cities</h3>" + "<ul>");
    for(k=0;k<countries[i].cities.length;k++) {
        document.write("<li>" + countries[i].cities[k] + "</li>");
    }
    document.write("</ul>"+ "</div>");
    document.write("<div class='inner-box'>" + "<h3>Popular Photos</h3>");
    for(j=0;j<countries[i].photos.length;j++){
        document.write("<img src = 'images/" + countries[i].photos[j] + "' class='photo'/>");
    }
    document.write("</div>");
    document.write("<button>Visit</button>");
    document.write("</div>");
}