/*
jQuery Plug-In 'Go Up'

Found at:               https://1stwebdesigner.com/useful-jquery-libraries/
Taken and learned at:   https://github.com/dnlnrs/jquery-goup

This plug-in adds in a fixed container near the bottom right-hand corner of the page (default) when the page has been scrolled down a certain amount of pixels. When clicked, this plug-in gives an easy way to automatically scroll the page back to the top. This functions similar to bookmarks but is more advantageous as it can be accessed at any point on the page, rather than at fixed points on the page.

A few features that I customized:
    Increased the radius on the container to make the button a circle.
    Reduced the required scroll down in order for it to appear.
    Made the min-width value which causes it to disappear and not be usable anymore match the media query I have at the lowest resolution.
    Added some text that pops up when the cursor is hovered over the button.
*/

/*
jQuery Plug-In 'Vertical News Slider'

Found at:               https://1stwebdesigner.com/useful-jquery-libraries/
Taken and learned at:   https://github.com/impressivewebs/vertical-news-slider

This plug-in utilizes jQuery and CSS3 to create a news slider which cycles through customizable news headlines. Through jQuery the timing that the news articles cycle can be adjusted, and when the mouse is hovered over the article, the cycle animation will be paused.

A few features that I customized:
    Increased the time interval between news cycles.
    Adjusted the CSS (text colours, background colours, font size, etc) to match current styles on page.
*/

$(document).ready(function() {
    jQuery.goup();
});