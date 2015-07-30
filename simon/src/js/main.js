var SimonSays = window.SimonSays || {};
SimonSays.Game = (function ($) {
    function Game() {
        this.init = function () {
            $("#start_button").bind("click", startGame);
            SimonSays.ui.renderBabylon();
            $("#start-timer").bind("click", SimonSays.ui.renderGame);
        };

        function startGame() {
            $("#start_button").unbind("click");
            SimonSays.ui.hideButton();
            SimonSays.ui.showStart();
        };
    };
    return Game;
})(jQuery);
