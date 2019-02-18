import * as $ from 'jquery';

let keys: Array<string> = [];
let konami = '38,38,40,40,37,39,37,39,66,65';

$(document).keydown(function(e){
    keys.push( e.keyCode );
    if ( keys.toString().indexOf( konami ) >=0 ){
        keys = [];
        let egg = "<div class='egg egg--rolling-stone'>";
        $('body').append(egg);

        window.setTimeout(function () {
            $('.egg').remove();
        }, 3000);
    }
});