module GameFromScrach {
    export class StateConstants {
        public static get STYLE_TEXT(): Object { return { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" } };
        public static get TEXT_STYLE_KEY(): Object { return { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" }};
        public static get TEXT_STYLE_VALUE(): Object { return { font: "bold 18px sans-serif", fill: "#fff", align: "center" }};

        public static get BUTTON_POS_X(): number { return 185 };
        public static get TEXT_POS_X(): number { return 135 };
        public static get SQUARE_SIZE(): number { return 15 };
        public static get START_POSITION(): number { return 150 };
    }
}