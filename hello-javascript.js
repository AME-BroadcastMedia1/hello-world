var done = true,
    fading_div = document.getElementById('fading_div'),
    fade_in_button = document.getElementById('fade_in'),
    fade_out_button = document.getElementById('fade_out');

function function_opacity(opacity_value) {
    fading_div.style.opacity = opacity_value / 100;
    fading_div.style.filter = 'alpha(opacity=' + opacity_value + ')';
}

function function_fade_out(opacity_value) {
    function_opacity(opacity_value);
    if (opacity_value == 1) {
        fading_div.style.display = 'none';
        done = true;
    }
}

function function_fade_in(opacity_value) {
    function_opacity(opacity_value);
    if (opacity_value == 1) {
        fading_div.style.display = 'block';
    }
    if (opacity_value == 100) {
        done = true;
    }
}
// fade in button
fade_in_button.onclick = function () {
    if (done && fading_div.style.opacity !== '1') {
        done = false;
        for (var i = 1; i <= 100; i++) {
            setTimeout((function (x) {
                return function () {
                    function_fade_in(x)
                };
            })(i), i * 10);
        }
    }
};
// fade out button
fade_out_button.onclick = function () {
    if (done && fading_div.style.opacity !== '0') {
        done = false;
        for (var i = 1; i <= 100; i++) {
            setTimeout((function (x) {
                return function () {
                    function_fade_out(x)
                };
            })(100 - i), i * 10);
        }
    }
};