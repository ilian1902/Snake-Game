var GameFromScrach;
(function (GameFromScrach) {
    var StateConstants = (function () {
        function StateConstants() {
        }
        Object.defineProperty(StateConstants, "STYLE_TEXT", {
            get: function () { return { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" }; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "TEXT_STYLE_KEY", {
            get: function () { return { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" }; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "TEXT_STYLE_VALUE", {
            get: function () { return { font: "bold 18px sans-serif", fill: "#fff", align: "center" }; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "BUTTON_POS_X", {
            get: function () { return 185; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "TEXT_POS_X", {
            get: function () { return 135; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "SQUARE_SIZE", {
            get: function () { return 15; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(StateConstants, "START_POSITION", {
            get: function () { return 150; },
            enumerable: true,
            configurable: true
        });
        ;
        return StateConstants;
    }());
    GameFromScrach.StateConstants = StateConstants;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=StateConstants.js.map