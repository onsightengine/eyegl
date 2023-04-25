/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2023 Stephens Nunnally
 * @source      https://github.com/onsightengine/osui
 * @version     v0.1.9
 */
var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M373.189%2c648.684c-0%2c-0 -237.09%2c-138.996 -258.087%2c-117.999c-20.997%2c20.997 212.331%2c288.419 212.331%2c288.419c1.975%2c3.009 4.284%2c5.857 6.926%2c8.499c10.698%2c10.698 24.796%2c15.945 38.83%2c15.71c14.035%2c0.235 28.132%2c-5.012 38.831%2c-15.71c2.641%2c-2.642 4.95%2c-5.49 6.926%2c-8.499c-0%2c-0 423.255%2c-489.7 496.91%2c-611.246c9.004%2c-14.859 -15.991%2c-40.415 -34.446%2c-27.458c-108.024%2c75.837 -508.221%2c468.284 -508.221%2c468.284Z' style='fill:%23ebebeb%3b'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M386.574%2c400.264c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c0l-84.496%2c-84.496l-84.496%2c84.496c-12.567%2c12.566 -33.513%2c12.566 -46.079%2c0c-12.566%2c-12.567 -12.566%2c-33.513 0%2c-46.079l84.496%2c-84.496l-84.496%2c-84.496c-12.566%2c-12.567 -12.566%2c-33.513 0%2c-46.079c12.566%2c-12.567 261.15%2c215.071 261.15%2c215.071c12.566%2c12.566 12.566%2c33.511 0%2c46.079Z' style='fill-opacity:0.25%3b'/%3e%3cpath d='M386.575%2c386.834c-12.567%2c12.568 -33.513%2c12.568 -46.079%2c0.002l-84.496%2c-84.498l-84.497%2c84.498c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c0c-12.566%2c-12.568 -12.566%2c-33.513 0%2c-46.079l84.497%2c-84.496l-84.497%2c-84.498c-12.566%2c-12.566 -12.566%2c-33.511 0%2c-46.079c12.567%2c-12.565 33.513%2c-12.565 46.079%2c0l84.496%2c84.498l84.497%2c-84.498c12.566%2c-12.565 33.512%2c-12.565 46.079%2c0c12.566%2c12.568 12.566%2c33.513 0%2c46.079l-84.497%2c84.496l84.497%2c84.498c12.566%2c12.566 12.566%2c33.51 0%2c46.077Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3c/svg%3e";

const IMAGE_CHECK = img$2;
const IMAGE_CLOSE = img$1;
const IMAGE_EMPTY = img;
const GRID_SIZE = 25;
const TOOLTIP_Y_OFFSET = '0.3em';
const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
};
const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',
    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',
    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',
    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',
    ICON_DARK:          'icon-dark',
    ICON:               'icon',
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:	        'complement',
    TRIADIC1:           'triadic1',
    TRIADIC2:           'triadic2',
    TRIADIC3:           'triadic3',
    TRIADIC4:           'triadic4',
    TRIADIC5:           'triadic5',
    TRIADIC6:           'triadic6',
};
const RESIZERS = {
    TOP:            'Top',
    BOTTOM:     	'Bottom',
    LEFT:       	'Left',
    RIGHT:			'Right',
    TOP_LEFT:		'TopLeft',
    TOP_RIGHT:		'TopRight',
    BOTTOM_LEFT:	'BottomLeft',
    BOTTOM_RIGHT:	'BottomRight',
};
const GRAPH_LINE_TYPES = {
    STRAIGHT:   'straight',
    CURVE:      'curve',
    ZIGZAG:     'zigzag',
};
const GRAPH_GRID_TYPES = {
    LINES:      'lines',
    DOTS:       'dots',
};
const NODE_TYPES = {
    INPUT:      'input',
    OUTPUT:     'output',
};

class Css {
    static getVariable(variable) {
        variable = String(variable);
        if (! variable.startsWith('--')) variable = '--' + variable;
        const rootElement = document.querySelector(':root');
        return getComputedStyle(rootElement).getPropertyValue(variable);
    }
    static setVariable(variable, valueAsString, element) {
        variable = String(variable);
        if (! variable.startsWith('--')) variable = '--' + variable;
        element = element ?? document.querySelector(':root');
		element.style.setProperty(variable, valueAsString);
    }
    static baseSize() {
        return parseFloat(getComputedStyle(document.querySelector(':root')).fontSize);
    }
    static fontSize(element = document.body) {
        return parseFloat(getComputedStyle(element).fontSize);
    }
    static guiScale(element = document.body) {
        return Css.fontSize(element) / Css.baseSize();
    }
    static getTextWidth(text, font) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = font;
        return ctx.measureText(text).width;
    }
    static getFontCssFromElement(element = document.body) {
        const fontWeight = getComputedStyle(element).fontWeight || 'normal';
        const fontSize = getComputedStyle(element).fontSize || '16px';
        const fontFamily = getComputedStyle(element).fontFamily || 'Arial';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }
    static parseSize(size) {
        if (typeof size === 'string') {
            if (size.includes('px') || size.includes('%') ||
                size.includes('em') || size.includes('rem') ||
                size.includes('ch') || size.includes('ex') || size.includes('cap') ||
                size.includes('vw') || size.includes('vh') || size.includes('vmin') || size.includes('vmax'))
            {
                return size;
            } else {
                return parseInt(size) + 'px';
            }
        } else {
            return parseInt(size) + 'px';
        }
    }
    static toEm(pixels, element = document.body) {
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale(element)) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm: Could not convert to em! Unit passed in: ${pixels}`);
        return size;
    }
    static toPx(size, element = document.body) {
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale(element))) + 'px';
        }
        console.warn(`Css.toPx: Could not convert to pixels! Unit passed in: ${size}`);
        return size;
    }
}

const EDGE_SPACE = 4;
const ALIGN = {
    LEFT:       'left',
    CENTER:     'center',
    MIDDLE:     'center',
    RIGHT:      'right',
};
const OVERFLOW = {
    LEFT:       'left',
    RIGHT:      'right',
};
const POSITION = {
    OVER:       'over',
    UNDER:      'under',
};
class Popper {
    static getLeft(dom) { return dom.getBoundingClientRect().left; }
    static getTop(dom) { return dom.getBoundingClientRect().top; }
    static getWidth(dom) { return dom.offsetWidth; }
    static getHeight(dom) { return dom.offsetHeight; }
    static popOver(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.OVER, align, offsetX, offsetY, overflow);
    }
    static popUnder(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.UNDER, align, offsetX, offsetY, overflow);
    }
    static popOverUnder(dom, parent, overUnder = POSITION.UNDER, align = ALIGN.LEFT,
                        offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        let maxRight = window.innerWidth - EDGE_SPACE;
        let maxBottom = window.innerHeight - EDGE_SPACE;
        offsetX = (offsetX) ? parseInt(Css.toPx(offsetX), 10) : 0;
        offsetY = (offsetY) ? parseInt(Css.toPx(offsetY), 10) : 0;
        let desiredLeft = Popper.getLeft(parent) + offsetX;
        if (align === ALIGN.CENTER) {
            let offset = Popper.getLeft(parent) + ((Popper.getWidth(parent) - Popper.getWidth(dom)) / 2.0);
            desiredLeft = offset + offsetX;
        } else if (align === ALIGN.RIGHT) {
            let offset = Popper.getLeft(parent) + (Popper.getWidth(parent) - Popper.getWidth(dom));
            desiredLeft = offset + offsetX;
        }
        if (overflow === OVERFLOW.LEFT) {
            maxRight = Popper.getLeft(parent) + Popper.getWidth(parent);
        }
        let rightSide = desiredLeft + Popper.getWidth(dom);
        if (rightSide > maxRight) desiredLeft -= (rightSide - maxRight);
        if (desiredLeft < EDGE_SPACE) desiredLeft = EDGE_SPACE;
        let underTop = Popper.getTop(parent) + Popper.getHeight(parent) + offsetY;
        let overTop = Popper.getTop(parent) - Popper.getHeight(dom) - offsetY;
        let bottomSide = underTop + Popper.getHeight(dom);
        if (bottomSide > maxBottom) overUnder = POSITION.OVER;
        if (overTop < EDGE_SPACE) overUnder = POSITION.UNDER;
        let desiredTop = (overUnder === POSITION.UNDER) ? underTop : overTop;
        if (overUnder === POSITION.UNDER) {
            bottomSide = desiredTop + Popper.getHeight(dom);
            if (bottomSide > maxBottom) {
                desiredTop = maxBottom - Popper.getHeight(dom);
                if (desiredTop < EDGE_SPACE) desiredTop = EDGE_SPACE;
            }
        }
        dom.style.left = Css.toPx(desiredLeft);
        dom.style.top = Css.toPx(desiredTop);
        return overUnder;
    }
}

class Iris {
    static get NAMES() { return COLOR_KEYWORDS; }
    constructor(r = 0xffffff, g, b, format = '') {
        this.isColor = true;
        this.isIris = true;
        this.type = 'Color';
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.set(r, g, b, format);
    }
    copy(colorObject) {
        return this.set(colorObject);
    }
    set(r = 0, g, b, format = '') {
        if (arguments.length === 0) {
            return this.set(0);
        } else if (r === undefined || r === null || Number.isNaN(r)) {
            if (g || b) console.warn(`Iris: Passed some valid arguments, however 'r' was ${r}`);
        } else if (g === undefined && b === undefined) {
            let value = r;
            if (typeof value === 'number' || value === 0) { return this.setHex(value);
            } else if (value && isRGB(value)) { return this.setRGBF(value.r, value.g, value.b);
            } else if (value && isHSL(value)) { return this.setHSL(value.h * 360, value.s, value.l);
            } else if (value && isRYB(value)) { return this.setRYB(value.r * 255, value.y * 255, value.b * 255);
            } else if (Array.isArray(value) && value.length > 2) {
                let offset = (g != null && ! Number.isNaN(g) && g > 0) ? g : 0;
                return this.setRGBF(value[offset], value[offset + 1], value[offset + 2])
            } else if (typeof value === 'string') {
                return this.setStyle(value);
            }
        } else {
            switch (format) {
                case 'rgb': return this.setRGB(r, g, b);
                case 'hsl': return this.setHSL(r, g, b);
                case 'ryb': return this.setRYB(r, g, b);
                default:    return this.setRGBF(r, g, b);
            }
        }
        return this;
    }
    setColorName(style) {
        const hex = COLOR_KEYWORDS[ style.toLowerCase() ];
        if (hex) return this.setHex(hex);
        console.warn(`Iris: Unknown color ${style}`);
        return this;
    }
    setHex(hexColor) {
        hexColor = Math.floor(hexColor);
        if (hexColor > 0xffffff || hexColor < 0) {
            console.warn(`Iris: Given decimal outside of range, value was ${hexColor}`);
            hexColor = clamp(hexColor, 0, 0xffffff);
        }
        let r = (hexColor & 0xff0000) >> 16;
        let g = (hexColor & 0x00ff00) >>  8;
        let b = (hexColor & 0x0000ff);
        return this.setRGB(r, g, b);
    }
    setHSL(h, s, l) {
        h = keepInRange(h, 0, 360);
        s = clamp(s, 0, 1);
        l = clamp(l, 0, 1);
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - (c / 2);
        let r = 0, g = 0, b = 0;
        if                  (h <  60) { r = c; g = x; b = 0; }
        else if ( 60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h)            { r = c; g = 0; b = x; }
        this.setRGBF(r + m, g + m, b + m);
        return this;
    }
    setRandom() {
        return this.setRGBF(Math.random(), Math.random(), Math.random());
    };
    setRGB(r, g, b) {
        return this.setRGBF(r / 255, g / 255, b / 255);
    }
    setRGBF(r, g, b) {
        this.r = clamp(r, 0, 1);
        this.g = clamp(g, 0, 1);
        this.b = clamp(b, 0, 1);
        return this;
    }
    setRYB(r, y, b) {
        let hexColor = cubicInterpolation(clamp(r, 0, 255), clamp(y, 0, 255), clamp(b, 0, 255), 255, CUBE.RYB_TO_RGB);
        return this.setHex(hexColor);
    }
    setScalar(scalar) {
        return this.setRGB(scalar, scalar, scalar);
    }
    setScalarF(scalar) {
        return this.setRGBF(scalar, scalar, scalar);
    }
    setStyle(style) {
        let m;
        if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
            let color;
            const name = m[1];
            const components = m[2];
            switch (name) {
                case 'rgb':
                case 'rgba':
                    if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        let r = Math.min(255, parseInt(color[1], 10));
                        let g = Math.min(255, parseInt(color[2], 10));
                        let b = Math.min(255, parseInt(color[3], 10));
                        return this.setRGB(r, g, b);
                    }
                    if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        let r = (Math.min(100, parseInt(color[1], 10)) / 100);
                        let g = (Math.min(100, parseInt(color[2], 10)) / 100);
                        let b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        return this.setRGBF(r, g, b);
                    }
                    break;
                case 'hsl':
                case 'hsla':
                    if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const h = parseFloat(color[1]);
                        const s = parseInt(color[2], 10) / 100;
                        const l = parseInt(color[3], 10) / 100;
                        return this.setHSL(h, s, l);
                    }
                    break;
            }
        } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
            const hex = m[1];
            const size = hex.length;
            if (size === 3) {
                let r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                let g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                let b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                return this.setRGB(r, g, b);
            } else if (size === 6) {
                let r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                let g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                let b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                return this.setRGB(r, g, b);
            }
        }
        if (style && style.length > 0) {
            return this.setColorName(style);
        }
        return this;
    }
    cssString(alpha ) {
        return ('rgb(' + this.rgbString(alpha) + ')');
    }
    hex() {
        return ((this.red() << 16) + (this.green() << 8) + this.blue());
    }
    hexString(hexColor ){
        if (hexColor === undefined || typeof value !== 'number') hexColor = this.hex();
        return Iris.hexString(hexColor);
    }
    static hexString(hexColor = 0){
        return '#' + ('000000' + ((hexColor) >>> 0).toString(16)).slice(-6);
    }
    static randomHex() {
        return _random.setRandom().hex();
    }
    rgbString(alpha) {
        let rgb = this.red() + ', ' + this.green() + ', ' + this.blue();
        let rgba = (alpha != undefined) ? rgb + ', ' + alpha : rgb;
        return rgba;
    }
    toJSON() {
        return this.hex();
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    getHSL(target) {
        if (target && isHSL(target)) {
            target.h = hueF(this.hex());
            target.s = saturation(this.hex());
            target.l = lightness(this.hex());
        } else {
            return { h: hueF(this.hex()), s: saturation(this.hex()), l: lightness(this.hex()) };
        }
    }
    getRGB(target) {
        if (target && isHSL(target)) {
            target.r = this.r;
            target.g = this.g;
            target.b = this.b;
        } else {
            return { r: this.r, g: this.g, b: this.b };
        }
    }
    getRYB(target) {
        let rybAsHex = cubicInterpolation(this.r, this.g, this.b, 1.0, CUBE.RGB_TO_RYB);
        if (target && isRYB(target)) {
            target.r = redF(rybAsHex);
            target.y = greenF(rybAsHex);
            target.b = blueF(rybAsHex);
        } else {
            return { r: redF(rybAsHex), y: greenF(rybAsHex), b: blueF(rybAsHex) };
        }
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
    red() { return clamp(Math.floor(this.r * 255), 0, 255); }
    green() { return clamp(Math.floor(this.g * 255), 0, 255); }
    blue() { return clamp(Math.floor(this.b * 255), 0, 255); }
    redF() { return this.r; }
    greenF() { return this.g; }
    blueF() { return this.b; }
    hue() { return hue(this.hex()); }
    saturation() { return saturation(this.hex()); }
    lightness() { return lightness(this.hex()); }
    hueF() { return hueF(this.hex()); }
    hueRYB() {
        for (let i = 1; i < RYB_OFFSET.length; i++) {
            if (RYB_OFFSET[i] > this.hue()) return i - 2;
        }
    }
    add(color) {
        if (! color.isColor) console.warn(`Iris: add() was not called with a 'Color' object`);
        return this.setRGBF(this.r + color.r, this.g + color.g, this.b + color.b);
    }
    addScalar(scalar) {
        return this.setRGB(this.red() + scalar, this.green() + scalar, this.blue() + scalar);
    }
    addScalarF(scalar) {
        return this.setRGBF(this.r + scalar, this.g + scalar, this.b + scalar);
    }
    brighten(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex());
        l = l + ((1.0 - l) * amount);
        this.setHSL(h, s, l);
        return this;
    }
    darken(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex()) * amount;
        return this.setHSL(h, s, l);
    }
    greyscale(percent = 1.0, format = 'luminosity') { return this.grayscale(percent, format) }
    grayscale(percent = 1.0, format = 'luminosity') {
        let gray = 0;
        switch (format) {
            case 'luminosity':
                gray = (this.r * 0.21) + (this.g * 0.72) + (this.b * 0.07);
            case 'average':
            default:
                gray = (this.r + this.g + this.b) / 3;
        }
        percent = clamp(percent, 0, 1);
        let r = (this.r * (1.0 - percent)) + (percent * gray);
        let g = (this.g * (1.0 - percent)) + (percent * gray);
        let b = (this.b * (1.0 - percent)) + (percent * gray);
        return this.setRGBF(r, g, b);
    }
    hslOffset(h, s, l) {
        return this.setHSL(this.hue() + h, this.saturation() + s, this.lightness() + l);
    }
    mix(color, percent = 0.5) {
        if (! color.isColor) console.warn(`Iris: mix() was not called with a 'Color' object`);
        percent = clamp(percent, 0, 1);
        let r = (this.r * (1.0 - percent)) + (percent * color.r);
        let g = (this.g * (1.0 - percent)) + (percent * color.g);
        let b = (this.b * (1.0 - percent)) + (percent * color.b);
        return this.setRGBF(r, g, b);
    }
    multiply(color) {
        if (! color.isColor) console.warn(`Iris: multiply() was not called with a 'Color' object`);
        return this.setRGBF(this.r * color.r, this.g * color.g, this.b * color.b);
    }
    multiplyScalar(scalar) {
        return this.setRGBF(this.r * scalar, this.g * scalar, this.b * scalar);
    }
    rgbComplementary() {
        return this.rgbRotateHue(180);
    }
    rgbRotateHue(degrees = 90) {
        let newHue = keepInRange(this.hue() + degrees);
        return this.setHSL(newHue, this.saturation(), this.lightness());
    }
    rybAdjust() {
        return this.setHSL(hue(matchSpectrum(this.hue(), SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    rybComplementary() {
        return this.rybRotateHue(180);
    }
    rybRotateHue(degrees = 90) {
        let newHue = keepInRange(this.hueRYB() + degrees);
        return this.setHSL(hue(matchSpectrum(newHue, SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    subtract(color) {
        if (! color.isColor) console.warn(`Iris: subtract() was not called with a 'Color' object`);
        return this.setRGBF(this.r - color.r, this.g - color.g, this.b - color.b);
    }
    equals(color) {
        if (! color.isColor) console.warn(`Iris: equals() was not called with a 'Color' object`);
        return (fuzzy(this.r, color.r) && fuzzy(this.g, color.g) && fuzzy(this.b, color.b));
    }
    isEqual(color) {
        return this.equals(color);
    }
    isDark() {
        const h = this.hue();
        const l = this.lightness();
        return ((l < 0.60 && (h >= 210 || h <= 27)) || (l <= 0.32));
    }
    isLight() {
        return (! this.isDark());
    }
}
function isRGB(object) { return (object.r !== undefined && object.g !== undefined && object.b !== undefined); }
function isHSL(object) { return (object.h !== undefined && object.s !== undefined && object.l !== undefined); }
function isRYB(object) { return (object.r !== undefined && object.y !== undefined && object.b !== undefined); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function red(hexColor) { return clamp((hexColor & 0xff0000) >> 16, 0, 255); }
function green(hexColor) { return clamp((hexColor & 0x00ff00) >> 8, 0, 255); }
function blue(hexColor) { return clamp((hexColor & 0x0000ff), 0, 255); }
function redF(hexColor) { return red(hexColor) / 255.0; }
function greenF(hexColor) { return green(hexColor) / 255.0; }
function blueF(hexColor) { return blue(hexColor) / 255.0; }
function hue(hexColor) { return hsl(hexColor, 'h'); }
function hueF(hexColor) { return hue(hexColor) / 360; }
function saturation(hexColor) { return hsl(hexColor, 's'); }
function lightness(hexColor) { return hsl(hexColor, 'l'); }
function fuzzy(a, b, tolerance = 0.0015) { return ((a < (b + tolerance)) && (a > (b - tolerance))); }
function keepInRange(value, min = 0, max = 360) {
    while (value >= max) value -= (max - min);
    while (value <  min) value += (max - min);
    return value;
}
let _hslHex;
let _hslH;
let _hslS;
let _hslL;
function hsl(hexColor, channel = 'h') {
    if (hexColor !== _hslHex) {
        if (hexColor === undefined || hexColor === null) return 0;
        const r = redF(hexColor), g = greenF(hexColor), b = blueF(hexColor);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;
        _hslL = (max + min) / 2;
        if (delta === 0) {
            _hslH = _hslS = 0;
        } else {
            _hslS = (_hslL <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: _hslH = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: _hslH = (b - r) / delta + 2; break;
                case b: _hslH = (r - g) / delta + 4; break;
            }
            _hslH = Math.round(_hslH * 60);
            if (_hslH < 0) _hslH += 360;
        }
        _hslHex = hexColor;
    }
    switch (channel) {
        case 'h': return _hslH;
        case 's': return _hslS;
        case 'l': return _hslL;
        default: console.warn(`Iris: Unknown channel (${channel}) requested in hsl()`);
    }
    return 0;
}
const _mix1 = new Iris();
const _mix2 = new Iris();
const _random = new Iris();
function matchSpectrum(matchHue, spectrum = SPECTRUM.RYB) {
    let colorDegrees = 360 / spectrum.length;
    let degreeCount = colorDegrees;
    let stopCount = 0;
    for (let i = 0; i < spectrum.length; i++) {
        if (matchHue < degreeCount) {
            let percent = (degreeCount - matchHue) / colorDegrees;
            _mix1.set(spectrum[stopCount + 1]);
            return _mix1.mix(_mix2.set(spectrum[stopCount]), percent).hex();
        } else {
            degreeCount = degreeCount + colorDegrees;
            stopCount = stopCount + 1;
        }
    }
}
const _interpolate = new Iris();
function cubicInterpolation(v1, v2, v3, scale = 255, table = CUBE.RYB_TO_RGB) {
    v1 = clamp(v1 / scale, 0, 1);
    v2 = clamp(v2 / scale, 0, 1);
    v3 = clamp(v3 / scale, 0, 1);
    let f0 = table[0], f1 = table[1], f2 = table[2], f3 = table[3];
    let f4 = table[4], f5 = table[5], f6 = table[6], f7 = table[7];
    let i1 = 1.0 - v1;
    let i2 = 1.0 - v2;
    let i3 = 1.0 - v3;
    let c0 = i1 * i2 * i3;
    let c1 = i1 * i2 * v3;
    let c2 = i1 * v2 * i3;
    let c3 = v1 * i2 * i3;
    let c4 = i1 * v2 * v3;
    let c5 = v1 * i2 * v3;
    let c6 = v1 * v2 * i3;
    let v7 = v1 * v2 * v3;
    let o1 = c0*f0[0] + c1*f1[0] + c2*f2[0] + c3*f3[0] + c4*f4[0] + c5*f5[0] + c6*f6[0] + v7*f7[0];
    let o2 = c0*f0[1] + c1*f1[1] + c2*f2[1] + c3*f3[1] + c4*f4[1] + c5*f5[1] + c6*f6[1] + v7*f7[1];
    let o3 = c0*f0[2] + c1*f1[2] + c2*f2[2] + c3*f3[2] + c4*f4[2] + c5*f5[2] + c6*f6[2] + v7*f7[2];
    return _interpolate.set(o1, o2, o3, 'gl').hex();
}
const CUBE = {
    RYB_TO_RGB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.163, 0.373, 0.600 ],
        [ 1.000, 1.000, 0.000 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.660, 0.200 ],
        [ 0.500, 0.000, 0.500 ],
        [ 1.000, 0.500, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ],
    RGB_TO_RYB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.000, 0.000, 1.000 ],
        [ 0.000, 1.000, 0.483 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.053, 0.210 ],
        [ 0.309, 0.000, 0.469 ],
        [ 0.000, 1.000, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ]
};
const SPECTRUM = {
    RYB: [
        0xFF0000, 0xFF4900, 0xFF7400, 0xFF9200, 0xFFAA00, 0xFFBF00, 0xFFD300, 0xFFE800,
        0xFFFF00, 0xCCF600, 0x9FEE00, 0x67E300, 0x00CC00, 0x00AF64, 0x009999, 0x0B61A4,
        0x1240AB, 0x1B1BB3, 0x3914AF, 0x530FAD, 0x7109AA, 0xA600A6, 0xCD0074, 0xE40045,
        0xFF0000
    ]
};
const RYB_OFFSET = [
    0,   1,   2,   3,   5,   6,   7,   8,   9,  10,  11,  13,  14,  15,  16,  17,  18,  19,  19,  20,
    21,  21,  22,  23,  23,  24,  25,  25,  26,  27,  27,  28,  28,  29,  29,  30,  30,  31,  31,  32,
    32,  32,  33,  33,  34,  34,  35,  35,  35,  36,  36,  37,  37,  37,  38,  38,  38,  39,  39,  40,
    40,  40,  41,  41,  41,  42,  42,  42,  43,  43,  43,  44,  44,  44,  45,  45,  45,  46,  46,  46,
    47,  47,  47,  47,  48,  48,  48,  49,  49,  49,  50,  50,  50,  51,  51,  51,  52,  52,  52,  53,
    53,  53,  54,  54,  54,  55,  55,  55,  56,  56,  56,  57,  57,  57,  58,  58,  59,  59,  59,  60,
    60,  61,  61,  62,  63,  63,  64,  65,  65,  66,  67,  68,  68,  69,  70,  70,  71,  72,  72,  73,
    73,  74,  75,  75,  76,  77,  77,  78,  79,  79,  80,  81,  82,  82,  83,  84,  85,  86,  87,  88,
    88,  89,  90,  91,  92,  93,  95,  96,  98, 100, 102, 104, 105, 107, 109, 111, 113, 115, 116, 118,
    120, 122, 125, 127, 129, 131, 134, 136, 138, 141, 143, 145, 147, 150, 152, 154, 156, 158, 159, 161,
    163, 165, 166, 168, 170, 171, 173, 175, 177, 178, 180, 182, 184, 185, 187, 189, 191, 192, 194, 196,
    198, 199, 201, 203, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
    222, 223, 224, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 244,
    245, 246, 247, 248, 249, 250, 251, 251, 252, 253, 254, 255, 256, 257, 257, 258, 259, 260, 260, 261,
    262, 263, 264, 264, 265, 266, 267, 268, 268, 269, 270, 271, 272, 273, 274, 274, 275, 276, 277, 278,
    279, 280, 282, 283, 284, 286, 287, 289, 290, 292, 293, 294, 296, 297, 299, 300, 302, 303, 305, 307,
    309, 310, 312, 314, 316, 317, 319, 321, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334, 336,
    337, 338, 339, 340, 341, 342, 343, 344, 345, 347, 348, 349, 350, 352, 353, 354, 355, 356, 358, 359,
    999
];
const COLOR_KEYWORDS = {
    'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4,
    'azure': 0xF0FFFF, 'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD,
    'blue': 0x0000FF, 'blueviolet': 0x8A2BE2, 'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0,
    'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50, 'cornflowerblue': 0x6495ED,
    'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
    'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9,
    'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B, 'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00,
    'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
    'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1,
    'darkviolet': 0x9400D3, 'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969,
    'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222, 'floralwhite': 0xFFFAF0,
    'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF,
    'gold': 0xFFD700, 'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F,
    'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4, 'indianred': 0xCD5C5C, 'indigo': 0x4B0082,
    'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
    'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF,
    'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3, 'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3,
    'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
    'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0,
    'lime': 0x00FF00, 'limegreen': 0x32CD32, 'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000,
    'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3, 'mediumpurple': 0x9370DB,
    'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A,
    'mediumturquoise': 0x48D1CC, 'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA,
    'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD, 'navy': 0x000080, 'oldlace': 0xFDF5E6,
    'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
    'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093,
    'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9, 'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD,
    'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000,
    'rosybrown': 0xBC8F8F, 'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072,
    'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE, 'sienna': 0xA0522D, 'silver': 0xC0C0C0,
    'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
    'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8,
    'tomato': 0xFF6347, 'turquoise': 0x40E0D0, 'transparent': 0x000000, 'violet': 0xEE82EE, 'wheat': 0xF5DEB3,
    'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32
};

const _clr$1 = new Iris();
const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();
const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const _triadic5 = new Iris();
const _triadic6 = new Iris();
let _background = BACKGROUNDS.DARK;
let _color$1 = 0x00b4af;
let _tint = 0.0;
let _saturation = 0.0;
class ColorScheme {
    static changeBackground(background) {
        if (background === undefined || background === null) return;
        _background = background;
        ColorScheme.updateCSS();
    }
    static changeColor(color, tint, saturation) {
        if (color === undefined || color === null) return;
        _color$1 = _clr$1.set(color).hex();
        _tint = (tint !== undefined) ? tint : _tint;
        _saturation = (saturation !== undefined) ? saturation : _saturation;
        _icon.set(color);
        _icon_light.copy(_icon).brighten();
        _icon_dark.copy(_icon).darken();
        _complement.copy(_icon).rybRotateHue(180).brighten(0.2);
        _triadic1.copy(_icon).rybRotateHue(120).brighten(0.2);
        _triadic2.copy(_complement).rybRotateHue(120).brighten(0.2);
        _triadic3.copy(_icon).rybRotateHue(90).brighten(0.2);
        _triadic4.copy(_complement).rybRotateHue(90).brighten(0.2);
        _triadic5.copy(_icon).rybRotateHue(150).brighten(0.2);
        _triadic6.copy(_complement).rybRotateHue(150).brighten(0.2);
        ColorScheme.updateCSS();
    }
    static updateCSS() {
        Css.setVariable('--shadow',             _clr$1.set(ColorScheme.color(TRAIT.SHADOW)).rgbString());
        Css.setVariable('--darkness',           _clr$1.set(ColorScheme.color(TRAIT.DARKNESS)).rgbString());
        Css.setVariable('--background-dark',    _clr$1.set(ColorScheme.color(TRAIT.BACKGROUND_DARK)).rgbString());
        Css.setVariable('--background-light',   _clr$1.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).rgbString());
        Css.setVariable('--button-dark',        _clr$1.set(ColorScheme.color(TRAIT.BUTTON_DARK)).rgbString());
        Css.setVariable('--button-light',       _clr$1.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).rgbString());
        Css.setVariable('--text-dark',          _clr$1.set(ColorScheme.color(TRAIT.TEXT_DARK)).rgbString());
        Css.setVariable('--text',               _clr$1.set(ColorScheme.color(TRAIT.TEXT)).rgbString());
        Css.setVariable('--text-light',         _clr$1.set(ColorScheme.color(TRAIT.TEXT_LIGHT)).rgbString());
        Css.setVariable('--midlight',           _clr$1.set(ColorScheme.color(TRAIT.MIDLIGHT)).rgbString());
        Css.setVariable('--darklight',          _clr$1.set(ColorScheme.color(TRAIT.DARKLIGHT)).rgbString());
        Css.setVariable('--highlight',          _clr$1.set(ColorScheme.color(TRAIT.HIGHLIGHT)).rgbString());
		Css.setVariable('--icon-dark',          _clr$1.set(ColorScheme.color(TRAIT.ICON_DARK)).rgbString());
        Css.setVariable('--icon',               _clr$1.set(ColorScheme.color(TRAIT.ICON)).rgbString());
        Css.setVariable('--icon-light',         _clr$1.set(ColorScheme.color(TRAIT.ICON_LIGHT)).rgbString());
        Css.setVariable('--complement',         _clr$1.set(ColorScheme.color(TRAIT.COMPLEMENT)).rgbString());
        Css.setVariable('--triadic1',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC1)).rgbString());
        Css.setVariable('--triadic2',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC2)).rgbString());
        Css.setVariable('--triadic3',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC3)).rgbString());
        Css.setVariable('--triadic4',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC4)).rgbString());
        Css.setVariable('--triadic5',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC5)).rgbString());
        Css.setVariable('--triadic6',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC6)).rgbString());
        Css.setVariable('--bright',             (_background == BACKGROUNDS.LIGHT) ? '0' : '1');
        const startHue = _clr$1.set(0x00b4af).hue();
        const newHue = _clr$1.set(ColorScheme.color(TRAIT.ICON, true )).hue();
        const diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }
    static color(guiColor, ignoreSaturation = false) {
        _clr$1.set(0);
        let tint = _tint;
        let saturation = _saturation;
        let darkness = 0;
        let lightness = 0;
        switch (_background) {
            case BACKGROUNDS.DARK:      break;
            case BACKGROUNDS.MID:       tint *= 0.2;    lightness = 0.2;    break;
            case BACKGROUNDS.LIGHT:     break;
            case BACKGROUNDS.FADED:     tint *= 0.1;    lightness = 0.4;    break;
        }
        if (_background == BACKGROUNDS.LIGHT) {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$1.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr$1.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$1.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$1.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$1.set(210, 210, 210, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$1.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr$1.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$1.set( 25,  25,  25, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr$1.set(230, 230, 230, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr$1.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$1.set(  4,   4,   4, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$1.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr$1.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$1.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$1.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$1.set( 60,  60,  60, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$1.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr$1.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$1.set(225, 225, 225, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr$1.set(  8,   8,   8, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr$1.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$1.set(255, 255, 255, 'rgb'); break;
            }
        }
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr$1.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr$1.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr$1.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr$1.set(  0,   0,   0, 'rgb');     break;
            }
        }
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr$1.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr$1.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr$1.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr$1.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr$1.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr$1.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr$1.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr$1.copy(_triadic4);   break;
            case TRAIT.TRIADIC5:    _clr$1.copy(_triadic5);   break;
            case TRAIT.TRIADIC6:    _clr$1.copy(_triadic6);   break;
        }
        switch (guiColor) {
            case TRAIT.COMPLEMENT:
            case TRAIT.TRIADIC1:
            case TRAIT.TRIADIC2:
            case TRAIT.TRIADIC3:
            case TRAIT.TRIADIC4:
            case TRAIT.TRIADIC5:
            case TRAIT.TRIADIC6:
                saturation = 0.0;
            case TRAIT.ICON_DARK:
            case TRAIT.ICON:
            case TRAIT.ICON_LIGHT:
                tint = 0;
                lightness = 0;
                break;
        }
        if (tint !== 0) _clr$1.mix(_icon, tint);
        if (lightness !== 0) _clr$1.brighten(lightness);
        if (darkness !== 0) _clr$1.darken(darkness);
        if (saturation !== 0 && ! ignoreSaturation) _clr$1.hslOffset(0, saturation, 0);
        return _clr$1.hex();
    }
}

class Element {
    constructor(dom) {
        const self = this;
        this.isElement = true;
        this.dom = dom;
        this.name = undefined;
        this.contents = function() { return self; };
        this.children = [];
    }
    destroy() {
        clearChildren(this, true );
        return this;
    }
    add() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this.contents(), element);
        }
        return this;
    }
    addToSelf() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this, element);
        }
        return this;
    }
    clearContents() {
        clearChildren(this.contents(), false );
        return this;
    }
    remove() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            let removed = removeFromParent(this.contents(), element);
            if (! removed) removed = removeFromParent(this, element);
            if (! removed) console.log(`Element.removeFromParent: Could not remove child!`);
        }
        return this;
    }
    setClass(className) {
        this.dom.className = className;
        return this;
    }
    addClass(className) {
        this.dom.classList.add(className);
        return this;
    }
    hasClass(className) {
        return this.dom.classList.contains(className);
    }
    hasClassWithString(substring) {
        substring = String(substring).toLowerCase();
        const classArray = [...this.dom.classList];
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }
    removeClass() {
        for (let i = 0; i < arguments.length; i ++) {
            const argument = arguments[i];
            this.dom.classList.remove(argument);
        }
        return this;
    }
    setId(id) {
        this.dom.id = id;
        if (this.name === undefined) this.name = id;
        return this;
    }
    getId() {
        return this.dom.id;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    getName() {
        return (this.name === undefined) ? 'No name' : this.name;
    }
    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }
    setDisabled(value) {
        this.dom.disabled = value;
        return this;
    }
    selectable(allowSelection) {
        if (allowSelection) {
            this.removeClass('Unselectable');
        } else {
            this.addClass('Unselectable');
        }
        return this;
    }
    hide() {
        this.setDisplay('none');
        this.dom.dispatchEvent(new Event('hidden'));
    }
    display(display = '') {
        this.setDisplay(display);
        this.dom.dispatchEvent(new Event('displayed'));
    }
    getInnerText() {
        return this.contents().dom.innerText;
    }
    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }
    setInnerHtml(value) {
        if (value != undefined) this.contents().dom.innerHTML = value;
        return this;
    }
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }
    getTextContent() {
        return this.contents().dom.textContent;
    }
    setStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }
    setContentsStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }
    getLeft() {
        return this.dom.getBoundingClientRect().left;
    }
    getTop() {
        return this.dom.getBoundingClientRect().top;
    }
    getWidth() {
        return this.dom.getBoundingClientRect().width;
    }
    getHeight() {
        return this.dom.getBoundingClientRect().height;
    }
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].traverse(callback, true);
            }
        }
    }
}
function addToParent(parent, element) {
    if (! element) return;
    if (element.isElement) {
        parent.dom.appendChild(element.dom);
        let hasIt = false;
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                hasIt = true;
                break;
            }
        }
        if (! hasIt) parent.children.push(element);
        element.parent = parent;
    } else {
        try {
            parent.dom.appendChild(element);
        } catch (exception) {
        }
    }
}
function clearElementChildren(osui) {
    for (let i = 0; i < osui.children.length; i++) {
        const child = osui.children[i];
        clearChildren(child, true );
    }
    osui.children.length = 0;
}
function clearDomChildren(dom) {
    if (! dom.children) return;
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        clearChildren(child, true );
        try { dom.removeChild(child); } catch (e) {  }
    }
}
function clearChildren(element, destroy = true) {
    if (! element) return;
    if (element.isElement) {
        clearElementChildren(element);
        clearDomChildren(element.dom);
        if (destroy && element.dom && element.dom.dispatchEvent) {
            element.dom.dispatchEvent(new Event('destroy'));
        }
    } else {
        clearDomChildren(element);
        if (destroy && element && element.dispatchEvent) {
            element.dispatchEvent(new Event('destroy'));
        }
    }
}
function removeFromParent(parent, element) {
    if (! element) return;
    if (element.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                clearChildren(element);
                parent.children.splice(j, 1);
                element.parent = undefined;
                return true;
            }
        }
    }
    clearChildren(element);
    try {
        parent.dom.removeChild(element);
        return true;
    } catch (exception) {
    }
    return false;
}
const properties = [
    'display', 'flex', 'overflow', 'visibility',
    'position', 'left', 'top', 'right', 'bottom', 'width', 'height',
    'color', 'opacity', 'cursor', 'pointerEvents'
];
properties.forEach(function(property) {
    const method = 'set' + property.substring(0, 1).toUpperCase() + property.substring(1, property.length);
    Element.prototype[method] = function(value) {
        this.setStyle(property, value);
        return this;
    };
});
Object.defineProperties(Element.prototype, {
    id: {
        get: function() {
            return this.getId();
        },
        set: function(value) {
            this.setId(value);
        }
    },
});
const events = [
    'Change', 'Input', 'Wheel',
    'KeyUp', 'KeyDown',
    'Click', 'DblClick', 'ContextMenu',
    'PointerDown', 'PointerMove', 'PointerUp',
    'PointerEnter', 'PointerLeave', 'PointerOut', 'PointerOver', 'PointerCancel',
];
events.forEach(function(event) {
    const method = 'on' + event;
    Element.prototype[method] = function(callback) {
        const eventName = event.toLowerCase();
        const eventHandler = callback.bind(this);
        const dom = this.dom;
        dom.addEventListener(eventName, eventHandler);
        dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler), { once: true });
        return this;
    };
});

class Button extends Element {
    constructor(innerHtml) {
        super(document.createElement('button'));
        this.setStyle('pointerEvents', 'all');
        const self = this;
        this.setClass('Button');
        this.dom.innerHTML = innerHtml ?? '';
        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;
        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(innerHtml) { if (this.dom) this.dom.disabled = innerHtml; }
        });
        function hideTooltip() {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }
        this.onPointerDown(hideTooltip);
        this.dom.addEventListener('destroy', function() {
            if (self.attachedMenu) self.detachMenu();
        }, { once: true });
    }
    attachMenu(osuiMenu) {
        const self = this;
        if (osuiMenu.hasClass('Menu') === false) return this;
        this.addClass('MenuButton');
        this.attachedMenu = osuiMenu;
        document.body.appendChild(osuiMenu.dom);
        this.dom.addEventListener('pointerdown', onPointerDown);
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
        window.addEventListener('resize', popMenu);
        function popMenu() {
            const popped = Popper.popUnder(
                osuiMenu.dom,
                self.dom,
                self.alignMenu,
                self.menuOffsetX,
                self.menuOffsetY,
                self.overflowMenu
            );
            if (popped === POSITION.UNDER) {
                osuiMenu.removeClass('SlideUp');
                osuiMenu.addClass('SlideDown');
            } else {
                osuiMenu.removeClass('SlideDown');
                osuiMenu.addClass('SlideUp');
            }
        }
        function onPointerDown(event) {
            if (self.hasClass('Selected') === false) {
                self.addClass('Selected');
                popMenu();
                if (self.dom) osuiMenu.showMenu(self.dom);
            }
        };
        this.detachMenu = function() {
            if (self.hasClass('MenuButton') === false) return;
            self.removeClass('MenuButton');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
    }
}

class Div extends Element {
    constructor(innerHtml) {
        super(document.createElement('div'));
        this.setInnerHtml(innerHtml);
    }
}

class Image extends Element {
    constructor(imageUrl, width = null, height = null, draggable = false) {
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';
        function setImage(fromImage) {
            if (typeof fromImage === 'string' && (fromImage.includes('<svg') || fromImage.includes('<SVG'))) {
                const blob = new Blob([ fromImage ], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                imageDom.src = url;
                imageDom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
            } else {
                imageDom.src = fromImage;
            }
        }
        setImage(imageUrl);
        if (! draggable) imageDom.ondragstart = () => { return false };
        if (width != undefined) imageDom.style.width = Css.parseSize(width);
        if (height != undefined) imageDom.style.height = Css.parseSize(height);
        super(imageDom);
        this.setClass('Image');
        this.setImage = function(imageUrl) {
            setImage(imageUrl);
        };
    }
}

class VectorBox extends Div {
    constructor() {
        super();
        this.setClass('VectorBox');
        let args = arguments;
        if (arguments.length === 0) {
            args = [ IMAGE_EMPTY ];
        } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
            args = arguments[0];
        }
        for (let i = 0; i < args.length; i++) {
            const newImage = this.addImage(args[i]);
            if (i === 0) this.img = newImage;
        }
    }
    addImage(imageUrl) {
        const stretchX = '100%';
        const stretchY = '100%';
        if (imageUrl === undefined || imageUrl === '') imageUrl = IMAGE_EMPTY;
        const newImage = new Image(imageUrl, stretchX, stretchY, false );
        this.add(newImage);
        if (! this.img) this.img = newImage;
        return newImage;
    }
    enableDragging() {
        for (let j = 0; j < this.contents().children.length; j++) {
            this.contents().children[j].dom.ondragstart = () => {};
        }
    }
    setImage(imageUrl) {
        this.img.setImage(imageUrl);
    }
}

class ShadowBox extends Div {
    constructor() {
        super();
        this.setClass('ShadowBox');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            let argument = args[i];
            if (argument !== undefined && argument.isElement === true) {
                this.add(argument);
            } else {
                this.add(new VectorBox(argument));
            }
        }
    }
    noShadow() {
        this.addClass('NoShadow');
        return this;
    }
}

const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
    BOTH:       'both',
    NONE:       'none',
};
const MOUSE_SLOP = 2;
class Interaction extends Button {
    static addCloseButton(closeElement, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        if (! closeElement || ! closeElement.isElement) return console.warn(`Interaction.closeButton: Missing element`);
        const button = new Button().setClass('CloseButton').addClass('PanelButton');
        const closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow().addClass('CloseImage');
        button.add(closeImageBox);
        button.dom.setAttribute('tooltip', 'Close Panel');
        button.setStyle(
            'min-height', `${scale}em`,
            'min-width', `${scale}em`,
        );
        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset}em`;
        button.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        button.setStyle((closeSide === CLOSE_SIDES.LEFT) ? 'left' : 'right', sideways);
        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.RIGHT;
            closeElement.dom.addEventListener('pointermove', function(event) {
                const rect = closeElement.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;
                let changeSide = CLOSE_SIDES.NONE;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) changeSide = CLOSE_SIDES.RIGHT;
                else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) changeSide = CLOSE_SIDES.LEFT;
                if (changeSide !== CLOSE_SIDES.NONE) {
                    button.addClass('ItemHidden');
                    setTimeout(() => {
                        button.dom.style.removeProperty('left');
                        button.dom.style.removeProperty('right');
                        button.setStyle(changeSide, sideways);
                        button.removeClass('ItemHidden');
                    }, 100);
                    lastSide = changeSide;
                }
            });
        }
        button.dom.addEventListener('click', () => closeElement.hide());
        closeElement.dom.addEventListener('pointerenter', () => button.addClass('ItemShown'));
        closeElement.dom.addEventListener('pointerleave', () => button.removeClass('ItemShown'));
        closeElement.addToSelf(button);
    }
    static bringToTop(element, withClass = 'Panel') {
        const topElement = (element && element.isElement) ? element.dom : element;
        const panels = document.querySelectorAll(`.${withClass}`);
        panels.forEach(el => { if (el !== topElement) el.classList.remove('BringToTop'); });
        topElement.classList.add("BringToTop");
    }
    static makeDraggable(element, parent = element, limitToWindow = false, onDown = () => {}, onMove = () => {}) {
        const eventElement = (element && element.isElement) ? element.dom : element;
        const dragElement = (parent && parent.isElement) ? parent.dom : parent;
        let downX, downY, rect = {};
        let lastX, lastY;
        let computed = getComputedStyle(dragElement);
        let minDistance = 0;
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! element.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }
        function dragPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.focus();
            eventElement.setPointerCapture(event.pointerId);
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            lastX = event.pageX;
            lastY = event.pageY;
            computed = getComputedStyle(dragElement);
            rect.left = parseFloat(computed.left);
            rect.top = parseFloat(computed.top);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            eventElement.ownerDocument.addEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.addEventListener('pointerup', dragPointerUp);
            Interaction.bringToTop(dragElement);
            onDown();
        }
        function dragPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            eventElement.releasePointerCapture(event.pointerId);
            eventElement.ownerDocument.removeEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.removeEventListener('pointerup', dragPointerUp);
            eventElement.style.cursor = 'inherit';
        }
        function dragPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.isTrusted) {
                lastX = event.pageX;
                lastY = event.pageY;
            }
            minDistance = Math.max(minDistance, Math.abs(downX - lastX));
            minDistance = Math.max(minDistance, Math.abs(downY - lastY));
            if (minDistance < MOUSE_SLOP) return;
            eventElement.style.cursor = 'move';
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (lastX - downX) * (1 / scale);
            const diffY = (lastY - downY) * (1 / scale);
            let newLeft = roundNearest(rect.left + diffX);
            let newTop = roundNearest(rect.top + diffY);
            if (limitToWindow) {
                newLeft = Math.min(window.innerWidth - rect.width, newLeft);
                newTop = Math.min(window.innerHeight - rect.height, newTop);
                newLeft = Math.max(0, newLeft);
                newTop = Math.max(0, newTop);
            }
            dragElement.style.left = `${newLeft}px`;
            dragElement.style.top = `${newTop}px`;
            onMove(diffX, diffY);
        }
        eventElement.addEventListener('pointerdown', dragPointerDown);
    }
    static makeResizeable(resizeElement, addToElement = resizeElement, resizers = [], onDown = () => {}, onMove = () => {}) {
        if (! resizeElement || ! resizeElement.isElement) return console.warning('Resizeable.enable: ResizeElement not defined');
        if (! addToElement || ! addToElement.isElement) return console.warning('Resizeable.enable: AddToElement not defined');
        resizeElement.addClass('Resizeable');
        const resizerDivs = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            let downX, downY, lastX, lastY;
            function resizePointerDown(event) {
                if (event.button !== 0) return;
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                downX = event.pageX;
                downY = event.pageY;
                lastX = event.pageX;
                lastY = event.pageY;
                resizeElement.dom.ownerDocument.addEventListener('pointermove', resizePointerMove);
                resizeElement.dom.ownerDocument.addEventListener('pointerup', resizePointerUp);
                onDown();
            }
            function resizePointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                resizeElement.dom.ownerDocument.removeEventListener('pointermove', resizePointerMove);
                resizeElement.dom.ownerDocument.removeEventListener('pointerup', resizePointerUp);
            }
            function resizePointerMove(event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.isTrusted) {
                    lastX = event.pageX;
                    lastY = event.pageY;
                }
                const diffX = lastX - downX;
                const diffY = lastY - downY;
                onMove(resizer, diffX, diffY);
            }
            resizer.dom.addEventListener('pointerdown', resizePointerDown);
            resizerDivs[resizerName] = resizer;
            addToElement.addToSelf(resizer);
        }
        const resizerEnabled = {};
        resizeElement.toggleResize = function(resizerName, enable = true) {
            if (! resizerName) return;
            resizerEnabled[resizerName] = enable;
            function toggleDisplay(element, display) {
                if (! element) return;
                element.setStyle('display', display ? '' : 'none');
            }
            toggleDisplay(resizerDivs[resizerName], enable);
            toggleDisplay(resizerDivs[RESIZERS.TOP_LEFT], resizerEnabled[RESIZERS.TOP] && resizerEnabled[RESIZERS.LEFT]);
            toggleDisplay(resizerDivs[RESIZERS.TOP_RIGHT], resizerEnabled[RESIZERS.TOP] && resizerEnabled[RESIZERS.RIGHT]);
            toggleDisplay(resizerDivs[RESIZERS.BOTTOM_LEFT], resizerEnabled[RESIZERS.BOTTOM] && resizerEnabled[RESIZERS.LEFT]);
            toggleDisplay(resizerDivs[RESIZERS.BOTTOM_RIGHT], resizerEnabled[RESIZERS.BOTTOM] && resizerEnabled[RESIZERS.RIGHT]);
            return resizeElement;
        };
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            resizeElement.toggleResize(resizerName, resizers.includes(resizerName));
        }
    }
}

class Utils {
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static isChildOfElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static parentElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return parent;
            parent = parent.parentElement;
        }
        return undefined;
    }
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Utils.traverse(element.children[i], applyFunction, true);
        }
    }
    static parentScroller(element) {
        if (! element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Utils.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Utils.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }
}

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
};
let _showTimer;
class Tooltipper {
    constructor() {
        const tooltip = new Div().setClass('Tooltip').setInnerHtml('');
        document.body.appendChild(tooltip.dom);
        let deviceType = DEVICE_TYPE.POINTER;
        document.addEventListener('touchstart', () => deviceType = DEVICE_TYPE.TOUCH, { capture: true, passive: true });
        document.addEventListener('mousemove', () => deviceType = DEVICE_TYPE.POINTER, { capture: true, passive: true });
        document.addEventListener('mouseenter', showTooltip, { capture: true, passive: true });
        document.addEventListener('hidetooltip', hideTooltip, { capture: true, passive: true });
        document.addEventListener('mouseleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });
        function showTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;
            let text = element.getAttribute('tooltip');
            if (! text.length) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('Updated');
            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('Updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }
        function hideTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('Updated');
        }
    }
}
const tooltipper = new Tooltipper();

class Span extends Element {
    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.setFlex('1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }
}

const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};
class Panel extends Div {
    constructor({
        style = PANEL_STYLES.NONE,
        bringToTop = false,
    } = {}) {
        super();
        this.setClass('Panel');
        this.contents = function() { return this; };
        const self = this;
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('SimplePanel');
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('FancyPanel');
            const outerBox =  new Panel().setClass('FancyPanelOuter');
            const borderBox = new Panel().setClass('FancyPanelBorder');
            const insideBox = new Panel().setClass('FancyPanelInside');
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };
        }
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);
        if (bringToTop) {
            this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
            this.dom.addEventListener('focusin', () => Interaction.bringToTop(self.dom));
            this.dom.addEventListener('displayed', () => Interaction.bringToTop(self.dom));
            this.dom.addEventListener('pointerdown', () => Interaction.bringToTop(self.dom));
        }
    }
}

class Row extends Div {
    constructor() {
        super();
        this.addClass('Row');
    }
}

class Text extends Span {
    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('Text');
        this.setCursor('default');
    }
}

const PROPERTY_SIZE = {
    HALF:	'half',
    FIFTHS: 'fifths',
    THIRD:	'third',
};
const LEFT_SPACING = {
    TABS:   'tabs',
    NORMAL: 'normal',
};
class PropertyList extends Div {
    constructor(rowSizing = PROPERTY_SIZE.HALF, leftSpacing = LEFT_SPACING.TABS) {
        super();
        this.addClass('PropertyList');
        this.setStyle('display', 'block');
        this.rowSizing = rowSizing;
        this.leftSpacing = leftSpacing;
        this.setRowSizeHalfs = function() { this.rowSizing = PROPERTY_SIZE.HALF; };
        this.setRowSizeFifths = function() { this.rowSizing = PROPERTY_SIZE.FIFTHS; };
        this.setRowSizeThirds = function() { this.rowSizing = PROPERTY_SIZE.THIRD; };
    }
    addHeader(text = '', iconUrl, enlarge = false) {
        const header = this.createHeader(text, iconUrl, enlarge);
        this.add(header);
        return header;
    }
    addRow(title = '', ...controls) {
        const row = this.createRow(title, ...controls);
        this.add(row);
        return row;
    }
    addRowWithoutTitle(...controls) {
        const row = this.createRowWithoutTitle(...controls);
        this.add(row);
        return row;
    }
    createHeader(text = '', iconUrl, enlarge = false) {
        const header = new Div().setClass('PropertyHeaderTitle');
        const icon = new VectorBox(iconUrl);
        if (enlarge) icon.addClass('EnlargeIcon');
        const iconHolder = new Span().setClass('PropertyHeaderIcon').add(icon);
        const textHolder = new Span().setClass('PropertyHeaderText').setTextContent(text);
        header.add(iconHolder, textHolder);
        return header;
    }
    createRow(title = '', ...controls) {
        const rightWidget = this.createControls(...controls);
        const leftWidget = new Text(title).selectable(false).addClass('PropertyLeft');
        if (this.leftSpacing === LEFT_SPACING.TABS) leftWidget.addClass('LeftTabSpacing');
        if (this.rowSizing === PROPERTY_SIZE.THIRD) {
            leftWidget.addClass('PropertyLeftThird');
            rightWidget.addClass('PropertyRightThird');
        } else if (this.rowSizing === PROPERTY_SIZE.FIFTHS) {
            leftWidget.addClass('PropertyLeftFifth');
            rightWidget.addClass('PropertyRightFifth');
        } else {
            leftWidget.addClass('PropertyLeftHalf');
            rightWidget.addClass('PropertyRightHalf');
        }
        const row = new Row().addClass('PropertyRow').add(leftWidget, rightWidget);
        row.leftWidget = leftWidget;
        row.rightWidget = rightWidget;
        return row;
    }
    createRowWithoutTitle(...controls) {
        const widgets = this.createControls(...controls);
        widgets.removeClass('PropertyRight').addClass('PropertyFull');
        const row = new Row().addClass('PropertyRow').add(widgets);
        row.leftWidget = widgets;
        row.rightWidget = widgets;
        return row;
    }
    createControls() {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('PropertyRight');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if (i < args.length - 1) rightRow.add(new Span().addClass('PropertySpace'));
            } else {
                console.error('PropertyList.createControls():', argument, 'is not an instance of Osui Element.');
            }
        }
        return rightRow;
    }
}

class Shrinkable extends Panel {
    constructor(text = '', icon = '') {
        super();
        const self = this;
        this.addClass('Shrinkable');
        this.titleDiv = undefined;
        this.bodyDiv = undefined;
        const title = new Div().setClass('ShrinkTitle');
        if (icon !== '') {
            const iconHolder = new Span().setClass('ShrinkIcon').add(new VectorBox(icon));
            title.add(iconHolder);
        }
        const textHolder = new Span().setClass('ShrinkText').setInnerHtml(text);
        if (icon === '') textHolder.setStyle('padding-left', '0.15em');
        title.add(textHolder, new Span().setClass('ShrinkArrow'));
        const body = new Div().setClass('ShrinkBody');
        this.add(title, body);
        this.titleDiv = title;
        this.bodyDiv = body;
        this.contents = function() { return self.bodyDiv };
        this.setExpanded(true);
        function onClick() {
            self.toggle();
        }
        title.onClick(onClick);
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('Expanded');
        } else {
            this.removeClass('Expanded');
        }
    }
    sort() {
        const items = this.contents().children;
        items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return  1;
            return 0;
        });
        for (let i = 0; i < items.length; i++) {
            items[i].setStyle('order', i);
        }
    }
    toggle() {
        this.setExpanded(! this.isExpanded);
    }
}

const TAB_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
};
class Tabbed extends Panel {
    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;
    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style, resizers, startWidth, startHeight, minWidth, maxWidth, minHeight, maxHeight });
        const self = this;
        this.setName('Tabbed');
        this.addClass('Tabbed');
        this.#startWidth = startWidth;
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = startHeight;
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;
        this.tabs = [];
        this.panels = [];
        this.selectedId = '';
        this.selectedCount = 0;
        let rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            self.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('Left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('Right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('Top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('Bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove);
        this.tabsDiv = new Div().setClass('Tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('TabPanels');
        this.add(this.tabsDiv);
        this.add(this.panelsDiv);
        this.setTabSide(tabSide);
        this.addTab = function(id, items, icon, bgColor = undefined) {
            let numTabsWithId = 0;
            for (let i = 0; i < self.tabs.length; i++) {
                const tab = self.tabs[i];
                if (tab.dom.id === id) numTabsWithId++;
            }
            function capitalize(string) {
                const words = String(string).split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
                }
                return words.join(' ');
            }
            const label = capitalize(id);
            const tab = new TabButton(self, label, icon, bgColor);
            tab.setId(id);
            tab.count = numTabsWithId;
            self.tabs.push(tab);
            self.tabsDiv.add(tab);
            if (self.tabs.length > 0) self.tabsDiv.setDisplay('');
            const panel = new Panel().setId(id).addClass('Titled').addClass('Hidden').add(items);
            panel.count = numTabsWithId;
            self.panels.push(panel);
            self.panelsDiv.add(panel);
            self.setContentsStyle('minHeight', '');
            if (self.tabsDiv.hasClass('LeftSide') || self.tabsDiv.hasClass('RightSide')) {
                self.setContentsStyle('minHeight', ((2.2 * self.tabs.length) + 0.4) + 'em');
            }
            return panel;
        };
    }
    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || ! Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = this.#maxWidth * Css.guiScale(this.dom);
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }
    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || ! Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = this.#maxHeight * Css.guiScale(this.dom);
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }
    selectFirst() {
        if (this.tabs.length > 0) {
            return this.selectTab(this.tabs[0].getId());
        }
        return false;
    }
    selectLastKnownTab() {
    }
    selectTab(id, count = 0, wasClicked = false) {
        if (this.tabs == undefined) return this;
        const self = this;
        const tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        const panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            if (! wasClicked) Css.setVariable('--tab-timing', '0', tab.dom);
            const currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            const currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('Selected');
            if (currentPanel) currentPanel.addClass('Hidden');
            tab.addClass('Selected');
            panel.removeClass('Hidden');
            this.selectedId = id;
            this.selectedCount = count;
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = id;
                this.dom.dispatchEvent(tabChange);
            }
            if (! wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', tab.dom), 50);
            return true;
        }
        return false;
    }
    destroy() {
        this.clearTabs();
        super.destroy();
    }
    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].destroy();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }
    currentId() {
        return this.selectedId;
    }
    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('LeftSide');
        this.tabsDiv.removeClass('RightSide');
        if (side === TAB_SIDES.RIGHT) this.tabsDiv.addClass('RightSide');
        else this.tabsDiv.addClass('LeftSide');
    }
    tabIndex(id) {
        return this.tabs.indexOf(id);
    }
}
class TabButton extends Div {
    constructor(parent, label, icon, bgColor = undefined) {
        super();
        const self = this;
        this.setClass('TabButton');
        this.setCursor('default');
        this.iconVector = new VectorBox(icon);
        this.iconBorder = new Div().setClass('TabIcon');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) {
            self.iconBorder.dom.setAttribute('tooltip', label);
        };
        this.setLabel(label);
        if (bgColor !== undefined && bgColor !== null) {
            let m, r, g, b;
            if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(bgColor)) {
                let color;
                const name = m[1];
                const components = m[2];
                switch (name) {
                    case 'rgb':
                    case 'rgba':
                        if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            r = Math.min(255, parseInt(color[1], 10));
                            g = Math.min(255, parseInt(color[2], 10));
                            b = Math.min(255, parseInt(color[3], 10));
                        }
                        if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            r = (Math.min(100, parseInt(color[1], 10)) / 100);
                            g = (Math.min(100, parseInt(color[2], 10)) / 100);
                            b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        }
                        break;
                }
            } else if (m = /^\#([A-Fa-f\d]+)$/.exec(bgColor)) {
                const hex = m[1];
                const size = hex.length;
                if (size === 3) {
                    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                } else if (size === 6) {
                    r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                    g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                    b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                }
            } else {
                const hexColor = Math.min(Math.max(Math.floor(bgColor), 0), 0xffffff);
                r = (hexColor & 0xff0000) >> 16;
                g = (hexColor & 0x00ff00) >> 8;
                b = (hexColor & 0x0000ff);
            }
            const rDark = parseInt(r * 0.75);
            const gDark = parseInt(g * 0.75);
            const bDark = parseInt(b * 0.75);
            const light = `rgb(${r}, ${g}, ${b})`;
            const dark = `rgb(${rDark}, ${gDark}, ${bDark})`;
            const bgImage = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', bgImage);
        }
        function onClick() {
            parent.selectTab(self.dom.id, self.count, true);
            parent.dom.dispatchEvent(new Event('resized'));
        }
        this.onClick(onClick);
    }
}

class Titled extends Div {
    constructor(title, collapsible = false) {
        super();
        const self = this;
        this.addClass('Titled');
        this.addClass('Expanded');
        this.isExpanded = true;
        this.tabTitle = new Div(title).addClass('TabTitle');
        if (title && title !== '') this.add(this.tabTitle);
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            this.tabTitle.add(new Div().setClass('TitleArrow'));
            this.tabTitle.onClick(() => { self.toggle(); });
        }
        this.scroller = new Div().addClass('Scroller');
        this.add(this.scroller);
        this.contents = function() { return this.scroller; };
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('Expanded');
            this.scroller.setDisplay('');
        } else {
            this.removeClass('Expanded');
            this.scroller.setDisplay('none');
        }
    }
    toggle() {
        this.setExpanded(! this.isExpanded);
    }
}

class Checkbox extends Element {
    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('Checkbox');
        this.checkbox = new Element(document.createElement('input')).addClass('CheckboxInput');
        this.checkbox.dom.type = 'checkbox';
        let button = new Div().addClass('CheckboxButton');
        this.add(this.checkbox, button);
        this.setValue(boolean);
    }
    getValue() {
        if (! this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }
    setValue(value) {
        if (! this.checkbox.dom) return this;
        this.checkbox.dom.checked = (value) ? true : false;
        return this;
    }
}

class Color extends Button {
    constructor() {
        super();
        const self = this;
        this.addClass('ColorButton');
        this.addClass('DropArrow');
        const colorBox = new Element(document.createElement('input'));
        colorBox.addClass('ColorInputButton');
        colorBox.dom.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);
        const colorBackground = new Div().addClass('DropColor');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);
        let selected = false;
        function colorBoxClick(event) {
            if (! selected) {
                self.addClass('Selected');
                selected = true;
            }
        }
        function colorBoxInput() {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
            selected = false;
        }
        function colorBoxBlur() {
            self.removeClass('Selected');
            selected = false;
        }
        colorBox.onClick(colorBoxClick);
        colorBox.onInput(colorBoxInput);
        colorBox.dom.addEventListener('blur', colorBoxBlur);
        colorBox.dom.addEventListener('focusout', colorBoxBlur);
        this.getValue = function() {
            if (! colorBox.dom) return 0;
            return colorBox.dom.value;
        };
        this.getHexValue = function() {
            if (! colorBox.dom) return 0;
            return parseInt(colorBox.dom.value.substring(1), 16);
        };
        this.setValue = function(value) {
            if (! colorBox.dom) return this;
            colorBox.dom.value = value;
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
            return this;
        };
        this.setHexValue = function(hex) {
            if (! colorBox.dom) return this;
            if (hex === undefined) return this;
            self.setValue('#' + ('000000' + hex.toString(16)).slice(-6));
            return this;
        };
        this.setHexValue(0xffffff);
    }
}

const TRIANGLE_SIZE = 3.0;
class Menu extends Div {
    constructor() {
        super();
        this.setClass('Menu');
        this.mouseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.mouseSvg.setAttribute('class', 'MenuMouseTriangle');
        this.mouseSvg.setAttribute('pointer-events', 'none');
        this.mouseSvg.setAttribute('version', '1.1');
        this.mouseArea = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        this.mouseArea.setAttribute('fill', 'aqua');
        this.mouseArea.setAttribute('opacity', '0.0');
        this.mouseArea.setAttribute('pointer-events', 'fill');
        this.mouseSvg.appendChild(this.mouseArea);
    }
    isShown() {
        return this.hasClass('MenuShow');
    }
    showMenu(parentDom) {
        const self = this;
        this.addClass('MenuShow');
        this.clickCount = 0;
        if (Utils.isChildOfElementWithClass(this.dom, 'Menu')) {
            this.mouseArea.setAttribute('pointer-events', 'none');
            this.contents().dom.appendChild(this.mouseSvg);
            const timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0;
            setTimeout(() => this.updateMouseArea(), timeFloat);
        }
        this.closeMenu = function(applyToSelf = true, dontCloseChildrenOf = undefined) {
            this.traverse((child) => {
                if (dontCloseChildrenOf && Utils.isChildOf(child.dom, dontCloseChildrenOf)) {
                } else {
                    child.removeClass('MenuShow', 'Selected');
                    if (child.attachedMenu && child.attachedMenu.closeMenu) child.attachedMenu.closeMenu(true);
                    if (child.dom && child.dom.blur) child.dom.blur();
                }
            }, applyToSelf);
            if (applyToSelf) {
                let parent = parentDom;
                while (parent) {
                    if (parentDom.classList.contains('MenuButton')) {
                        parent.classList.remove('Selected');
                        parent = undefined;
                    } else {
                        parent = parent.parentElement;
                    }
                }
                if (parentDom.classList.contains('MenuButton')) {
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            }
        };
        if (parentDom.classList.contains('MenuButton')) {
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
        }
        function onPointerDown(event) {
            let menuShouldClose = true;
            if (self.dom.contains(event.target)) {
                let node = event.target;
                let list = node.classList;
                while (node.parentElement && list.contains('Menu') === false && list.contains('MenuItem') === false) {
                    node = node.parentElement;
                    list = node.classList;
                }
                if ((list.contains('MenuItem') && list.contains('SubMenuItem')) || list.contains('KeepOpen')) {
                    menuShouldClose = false;
                    if (event.target && event.target.tagName.toLowerCase() !== 'input') {
                        event.preventDefault();
                    }
                }
            }
            if (menuShouldClose) self.clickCount++;
            if (self.clickCount === 1) menuShouldClose = false;
            if (menuShouldClose) {
                self.closeMenu();
                if (window.signals) signals.guiLostFocus.dispatch();
            }
        }
        function onKeyDown(event) {
            switch (event.code) {
                case 'Escape': self.closeMenu(); break;
            }
        }
        return this;
    }
    updateMouseArea() {
        let parentRect = this.dom.parentElement.getBoundingClientRect();
        let myRect = this.dom.getBoundingClientRect();
        let middle = (parentRect.top - myRect.top) + (parentRect.height / 2);
        let middle1 = middle - (parentRect.height / 2);
        let middle2 = middle + (parentRect.height / 2);
        let leftSide = (parentRect.width / TRIANGLE_SIZE);
        let topSides = 10;
        this.mouseSvg.style['left'] = `-${leftSide}px`;
        this.mouseSvg.style['top'] = `-${topSides}px`;
        this.mouseSvg.setAttribute('width', `${this.getWidth() + leftSide}px`);
        this.mouseSvg.setAttribute('height', `${this.getHeight() + topSides*2}px`);
        let point1 = `${leftSide},0`;
        let point2 = `0,${topSides + middle1}`;
        let point3 = `0,${topSides + middle2}`;
        let point4 = `${leftSide},${this.getHeight() + topSides*2}`;
        this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4}`);
        this.mouseArea.setAttribute('pointer-events', 'fill');
        return this;
    }
}

class MenuShortcut extends Div {
    constructor(text = undefined) {
        super();
        this.setClass('MenuShortcut');
        if (text) this.setShortcutText(text);
    }
    setShortcutText(text) {
        if (! text) return this;
        this.text = text;
        this.clearContents();
        for (let i = 0; i < text.length; i++) {
            let letter = new Div().setClass('MenuShortcutCharacter');
            let subString = text[i];
            while (i + 1 < text.length && text[i+1] === text[i+1].toLowerCase()) {
                subString += text[i+1];
                i++;
            }
            if (subString.length === 1) {
                letter.setWidth('1em');
            } else {
                letter.setStyle('paddingLeft', '0.15em');
                letter.setStyle('paddingRight', '0.15em');
            }
            letter.dom.innerHTML = subString;
            this.add(letter);
        }
        return this;
    }
}

class MenuItem extends Div {
    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('MenuItem');
        this.setName(text);
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('MenuIcon');
        this.divText = new Div().setClass('MenuText');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.add(new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut));
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;
        function onContextMenu(event) {
            event.preventDefault();
        }
        this.onContextMenu(onContextMenu);
        this.onPointerEnter(() => {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('Menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && parentMenu.closeMenu) parentMenu.closeMenu(false, self.dom);
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        });
        this.setText(text);
        this.selectable(false);
    }
    isChecked() {
        return this.checked;
    }
    isDisabled() {
        return this.disabled;
    }
    keepOpen() {
        this.addClass('KeepOpen');
        return this;
    }
    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        if (checked) this.divIcon.addClass('IconColorize');
        else this.divIcon.removeClass('IconColorize');
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }
    setDisabled(disabled) {
        if (disabled) this.addClass('Disabled');
        else this.removeClass('Disabled');
        this.disabled = disabled;
        return this;
    }
    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }
    setText(text) {
        this.divText.dom.innerHTML = text ?? ' ';
        return this;
    }
    attachSubMenu(osuiMenu) {
        if (osuiMenu.hasClass('Menu') === false) return this;
        osuiMenu.addClass('SlideDown');
        this.removeSubMenu();
        this.addClass('SubMenuItem');
        this.add(osuiMenu);
        this.subMenu = osuiMenu;
        return this;
    }
    hasSubMenu() {
        return this.hasClass('SubMenuItem');
    }
    removeSubMenu() {
        this.removeClass('SubMenuItem');
        const osuiMenu = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('Menu')) this.remove(child);
        }
        return osuiMenu;
    }
}

class Dropdown extends Button {
    constructor(innerHtml = '&nbsp') {
        super(innerHtml);
        const self = this;
        this.items = [];
        this.currentIndex = -1;
        this.value = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 5;
        this.addClass('Dropdown');
        this.addClass('DropArrow');
        function onWheel(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.deltaY < 0) {
                if (self.currentIndex > 0) {
                    self.setIndex(self.currentIndex - 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            } else {
                if (self.currentIndex < (self.items.length - 1)) {
                    self.setIndex(self.currentIndex + 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }
        this.onWheel(onWheel);
    }
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }
    getIndex() {
        return this.currentIndex;
    }
    getValue() {
        return this.value;
    }
    setIndex(index = 0) {
        if (index < 0 || index >= this.items.length || index === this.currentIndex) return;
        const item = this.items[index];
        for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
        item.setChecked(true);
        this.currentIndex = index;
        this.value = item.value;
        if (this.dom) this.dom.innerHTML = item.dom.innerText;
        return this;
    }
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                if (item.value === value) {
                    for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
                    item.setChecked(true);
                    this.currentIndex = i;
                    this.value = value;
                    if (this.dom) this.dom.innerHTML = item.dom.innerText;
                    return this;
                }
            }
        }
        return this;
    }
    setOptions(options) {
        const self = this;
        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;
        for (const key in options) {
            const item = new MenuItem(options[key]);
            item.value = key;
            item.onPointerDown(function() {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
            this.items.push(item);
        }
        const menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }
        this.attachMenu(menu);
        menu.addClass('SelectMenu');
    }
}

const _changeEvent$1 = new Event('change', { 'bubbles': true, 'cancelable': true });
class NumberBox extends Element {
    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('Number');
        this.dom.style.cursor = 'text';
        this.dom.value = '0.00';
        this.dom.setAttribute('autocomplete', 'off');
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 3;
        this.step = 0.1;
        this.unit = '';
        this.nudge = 1.0;
        this.setValue(number);
        function onChange(event) {
            if (self.dom) self.setValue(self.dom.value);
        }
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) editor.redo();
                else editor.undo();
                return;
            }
            switch (event.code) {
                case 'Enter':
                    if (self.dom) self.dom.style.cursor = 'text';
                    if (self.dom) self.dom.blur();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    self.setValue(self.getValue() + self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    self.setValue(self.getValue() - self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
                    break;
            }
        }
        function onKeyUp(event) {
            event.stopPropagation();
        }
        function onWheel(event) {
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const newValue = self.getValue() - (upOrDown * self.step);
            self.setValue(newValue);
            if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
        }
        this.dom.addEventListener('keydown', onKeyDown);
        this.dom.addEventListener('keyup', onKeyUp);
        this.dom.addEventListener('wheel', onWheel);
        this.dom.addEventListener('change', onChange);
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('keydown', onKeyDown);
            self.dom.removeEventListener('keyup', onKeyUp);
            self.dom.removeEventListener('wheel', onWheel);
            self.dom.removeEventListener('change', onChange);
        }, { once: true });
    }
    getValue() {
        return parseFloat(this.value);
    }
    setValue(value) {
        let valueAsFloat = parseFloat(value);
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || ! isFinite(valueAsFloat)) {
            return this;
        }
        if (valueAsFloat < this.min) valueAsFloat = this.min;
        if (valueAsFloat > this.max) valueAsFloat = this.max;
        valueAsFloat = parseFloat(valueAsFloat.toFixed(this.precision));
        function countDecimals(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split('.')[1].length || 0;
        }
        let decimals = Math.min(this.precision, countDecimals(valueAsFloat));
        valueAsFloat = valueAsFloat.toFixed(decimals);
        if (valueAsFloat !== undefined && ! isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.value = valueAsFloat;
            if (this.dom) this.dom.value = valueAsFloat;
            if (this.dom && this.unit !== '') this.dom.value = valueAsFloat + ' ' + this.unit;
        }
        return this;
    }
    setPrecision(precision) {
        this.precision = precision;
        return this;
    }
    setStep(step) {
        this.step = step;
        return this;
    }
    setNudge(nudge) {
        this.nudge = nudge;
        return this;
    }
    setMin(min) {
        this.min = min;
        return this;
    }
    setMin(max) {
        this.max = max;
        return this;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
        return this;
    }
    setUnit(unit) {
        this.unit = unit;
        return this;
    }
}
class NumberScroll extends NumberBox {
    constructor(number) {
        super(number);
        const self = this;
        this.dom.style.cursor = 'ns-resize';
        let distance = 0;
        let onMouseDownValue = 0;
        const pointer = { x: 0, y: 0 };
        const prevPointer = { x: 0, y: 0 };
        function onMouseDown(event) {
            event.preventDefault();
            distance = 0;
            onMouseDownValue = self.getValue();
            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }
        function onMouseMove(event) {
            const currentValue = self.getValue();
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);
            let value;
            value = onMouseDownValue + (distance / (event.shiftKey ? 0.1 : 1)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));
            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }
        function onMouseUp() {
            if (Math.abs(distance) < 2) {
                if (self.dom) self.dom.focus();
            }
        }
        function onTouchStart(event) {
            if (event.touches.length === 1) {
                distance = 0;
                onMouseDownValue = self.getValue();
                prevPointer.x = event.touches[0].pageX;
                prevPointer.y = event.touches[0].pageY;
            }
        }
        function onTouchMove(event) {
            const currentValue = self.getValue();
            pointer.x = event.touches[0].pageX;
            pointer.y = event.touches[0].pageY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);
            let value;
            value = onMouseDownValue + (distance / (event.shiftKey ? 5 : 50)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));
            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.touches[0].pageX;
            prevPointer.y = event.touches[0].pageY;
        }
        function onTouchEnd(event) {
            if (event.touches.length === 0) {
                if (Math.abs(distance) < 2) {
                    if (self.dom) self.dom.focus();
                }
            }
        }
        function onFocus() {
            if (self.dom) self.dom.style.cursor = '';
        }
        function onBlur() {
            if (self.dom) self.dom.style.cursor = 'ns-resize';
        }
        this.dom.addEventListener('mousedown', onMouseDown);
        this.dom.addEventListener('mousemove', onMouseMove);
        this.dom.addEventListener('mouseup', onMouseUp);
        this.dom.addEventListener('touchstart', onTouchStart);
        this.dom.addEventListener('touchmove', onTouchMove);
        this.dom.addEventListener('touchend', onTouchEnd);
        this.dom.addEventListener('focus', onFocus);
        this.dom.addEventListener('blur', onBlur);
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('mousedown', onMouseDown);
            self.dom.removeEventListener('mousemove', onMouseMove);
            self.dom.removeEventListener('mouseup', onMouseUp);
            self.dom.removeEventListener('touchstart', onTouchStart);
            self.dom.removeEventListener('touchmove', onTouchMove);
            self.dom.removeEventListener('touchend', onTouchEnd);
            self.dom.removeEventListener('focus', onFocus);
            self.dom.removeEventListener('blur', onBlur);
        }, { once: true });
    }
}

const MAX_SLIDER_TICKS = 10;
const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });
class Slider extends Div {
    constructor(number = 0, min = 0, max = 100) {
        super();
        const self = this;
        this.setClass('SlideContainer');
        this.precision = 2;
        const slider = new Element(document.createElement('input')).addClass('Slider');
        slider.dom.type = 'range';
        slider.dom.value = number;
        slider.dom.min = min;
        slider.dom.max = max;
        const ticks = new Div(' ').addClass('TickMarks');
        this.slider = slider;
        this.ticks = ticks;
        this.add(ticks, slider);
        function sliderInput() {
            if (! slider.dom) return;
            const val = parseFloat(slider.dom.value);
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        }
        function sliderWheel(event) {
            if (! slider.dom) return;
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            let step = slider.dom.step;
            if (step === 'any') {
                step = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            } else {
                step = parseFloat(step);
            }
            const newValue = self.getValue() - (upOrDown * step);
            self.setValue(newValue);
            slider.dom.dispatchEvent(_changeEvent);
        }
        slider.onInput(sliderInput);
        slider.onWheel(sliderWheel);
    }
    getValue() {
        if (! this.slider.dom) return null;
        return parseFloat(this.slider.dom.value);
    }
    setValue(value) {
        if (! this.slider.dom) return this;
        let valueAsFloat = parseFloat(value);
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || !isFinite(valueAsFloat)) {
            return this;
        }
        if (valueAsFloat < this.min) valueAsFloat = this.min;
        if (valueAsFloat > this.max) valueAsFloat = this.max;
        valueAsFloat = parseFloat(valueAsFloat.toFixed(this.precision));
        function countDecimals(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split('.')[1].length || 0;
        }
        let decimals = Math.min(this.precision, countDecimals(valueAsFloat));
        valueAsFloat = valueAsFloat.toFixed(decimals);
        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.slider.dom.value = valueAsFloat;
        }
        const val = parseFloat(this.slider.dom.value);
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        this.slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        return this;
    }
    setPrecision(precision) {
        this.precision = precision;
        return this;
    }
    setMin(min) {
        if (! this.slider.dom) return this;
        this.slider.dom.min = min;
        this.setTicks();
        return this;
    }
    setMax(max) {
        if (! this.slider.dom) return this;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }
    setRange(min, max) {
        if (! this.slider.dom) return this;
        this.slider.dom.min = min;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }
    setStep(step) {
        if (! this.slider.dom) return this;
        this.slider.dom.step = step;
        this.setTicks();
        return this;
    }
    setTicks() {
        if (! this.slider.dom) return this;
        const ticks = this.ticks;
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        const step = this.slider.dom.step;
        if (step !== 'any' && Number.isFinite(min) && Number.isFinite(max)) {
            const totalSteps = parseFloat((max - min) / step);
            const maxDivsisor = MAX_SLIDER_TICKS - 1;
            let tickSteps = totalSteps;
            if (tickSteps > maxDivsisor) {
                for (let i = 1; i <= maxDivsisor; i++) {
                    if (Number.isInteger(totalSteps / i)) tickSteps = i;
                }
            }
            ticks.dom.style.setProperty('--divides', `${tickSteps}`);
        } else {
            ticks.setStyle('display', 'none');
        }
    }
}

class TextBox extends Element {
    constructor(text) {
        super(document.createElement('input'));
        this.setClass('Input');
        this.dom.type = 'text';
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.setAttribute('spellcheck', 'false');
        this.setValue(text);
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) {
                    editor.redo();
                } else {
                    editor.undo();
                }
            }
        }
        function onKeyUp(event) {
            event.stopPropagation();
        }
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
    }
    getValue() {
        if (! this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (! this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

const _clr = new Iris();
class Gooey extends Tabbed {
    constructor(title, opacity) {
        super({ style: PANEL_STYLES.FANCY });
        this.addClass('Gooey');
        this.toggleResize(RESIZERS.LEFT, true);
        this.minWidth = 180;
        this.opacity(opacity);
        const titlePanel = new Titled(title, true );
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; };
        document.body.appendChild(this.dom);
    }
    addFolder(folderName = '', icon = '') {
        if (folderName && folderName !== '') folderName = capitalize(folderName);
        const folder = new Folder(folderName, icon);
        this.add(folder);
        return folder;
    }
    color(color) {
        ColorScheme.changeColor(color);
        return this;
    }
    opacity(opacity) {
        if (opacity == null || Number.isNaN(opacity)) return;
        opacity = Math.min(Math.max(opacity, 0.0), 1.0);
        Css.setVariable('--panel-transparency', opacity);
        return this;
    }
    scale(multiplier) {
        if (! multiplier) multiplier = 1.0;
        multiplier = parseFloat(multiplier);
        const newSize = 14  * multiplier;
        const fontSize = Math.min(Math.max(newSize, 7 ), 42 );
        Css.setVariable('--font-size', Css.toPx(fontSize, this.dom));
        return this;
    }
    width(width) {
        if (width == null) return;
        if (width < this.minWidth * Css.guiScale(this.dom)) width = this.minWidth * Css.guiScale(this.dom);
        if (width > this.maxWidth * Css.guiScale(this.dom)) width = this.maxWidth * Css.guiScale(this.dom);
        this.setWidth(Css.toEm(width, this.dom));
        return this;
    }
}
class Folder extends Shrinkable {
    constructor(title, icon) {
        super(title, icon);
        this.props = new PropertyList(PROPERTY_SIZE.FIFTHS, LEFT_SPACING.NORMAL);
        this.add(this.props);
        this.add = function(params, variable, a, b, c, d) {
            const value = params[variable];
            if (value == undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addNumber(params, variable, a, b, c, d);
                }
            } else if (typeof value === 'string') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addString(params, variable);
                }
            } else if (typeof value === 'function') {
                return this.addFunction(params, variable);
            } else if (Array.isArray(value) && value.length > 0) {
                return this.addVector(params, variable);
            }
        };
    }
    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.onChange(() => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { boolBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addColor(params, variable) {
        let type;
        let value = params[variable];
        if (value == undefined) { return null; }
        else if (typeof value === 'string') { type = 'string'; }
        else if (Array.isArray(value)) { type = 'array'; }
        else if (typeof value === 'object') { type = 'object'; }
        else { type = 'number'; }
        const prop = new Property();
        const colorButton = new Color();
        function setVariable(newValue) {
            _clr.set(newValue);
            switch (type) {
                case 'string': params[variable] = _clr.hexString(); break;
                case 'array': _clr.toArray(params[variable]); break;
                case 'object': _clr.getRGB(params[variable]); break;
                case 'number': params[variable] = _clr.hex(); break;
                default:
            }
        }
        colorButton.onInput(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
        });
        colorButton.onChange(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), colorButton);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { colorButton.setHexValue(_clr.set(params[variable]).hex()); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addFunction(params, variable) {
        const prop = new Property();
        const button = new Button(prettyTitle(variable));
        button.onClick(() => params[variable]());
        const row = this.props.addRow(prettyTitle(variable), button);
        prop.name = function(name, buttonText) {
            row.leftWidget.setInnerHtml(name);
            if (buttonText) button.setInnerHtml(buttonText);
            return prop;
        };
        return prop;
    }
    addList(params, variable, options) {
        const prop = new Property();
        const type = (typeof params[variable] === 'string') ? 'string' : 'number';
        const selectOptions = {};
        for (let option of options) selectOptions[option] = option;
        const selectDropDown = new Dropdown();
        selectDropDown.overflowMenu = OVERFLOW.LEFT;
        selectDropDown.setOptions(selectOptions);
        selectDropDown.onChange(() => {
            params[variable] = (type === 'string') ? selectDropDown.getValue() : selectDropDown.getIndex();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), selectDropDown);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            if (type === 'string') selectDropDown.setValue(params[variable]);
            else selectDropDown.setIndex(params[variable]);
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addNumber(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const slider = new Slider();
        const slideBox = new NumberBox();
        slider.onInput(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
        });
        slider.onChange(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slideBox.onChange(() => {
            params[variable] = slideBox.getValue();
            slider.setValue(slideBox.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slider.onPointerDown((event) => event.stopPropagation());
        slider.onWheel((event) => event.stopPropagation());
        slideBox.onWheel((event) => event.stopPropagation());
        slider.setRange(min, max).setPrecision(precision);
        slideBox.setRange(min, max).setPrecision(precision);
        function setStep(newStep) {
            let min = slideBox.min, max = slideBox.max;
            slider.setStep(newStep);
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            slideBox.setStep(newStep);
        }
        setStep(step);
        const digits = countDigits(parseInt(max)) + ((precision > 0) ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        slideBox.setStyle('marginLeft', '0.14286em');
        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('PropertyTinyRow');
                slider.setDisplay('');
            } else {
                slideBox.removeClass('PropertyTinyRow');
                slider.setDisplay('none');
            }
        }
        checkForMinMax();
        const row = this.props.addRow(prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); return prop; };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); return prop; };
        prop.step = function(step) { setStep(step); return prop; };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); return prop; };
        prop.updateDisplay = function() {
            slider.setValue(params[variable]);
            slideBox.setValue(params[variable]);
            params[variable] = slider.getValue();
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addString(params, variable) {
        const prop = new Property();
        const textBox = new TextBox();
        textBox.onChange(() => {
            params[variable] = textBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), textBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { textBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addVector(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const vector = params[variable];
        const row = this.props.addRow(prettyTitle(variable));
        const boxes = [];
        for (let i = 0; i < vector.length; i++) {
            const box = new NumberBox();
            boxes.push(box);
            box.onChange(() => {
                vector[i] = box.getValue();
                if (typeof prop.change === 'function') prop.change();
                if (typeof prop.finishChange === 'function') prop.finishChange();
            });
            box.onWheel((event) => event.stopPropagation());
            box.setRange(min, max).setPrecision(precision);
            row.rightWidget.add(box);
            if (i < vector.length - 1) row.rightWidget.add(new Div().setStyle('min-width', '3px'));
        }
        function setStep(newStep) {
            let min = boxes[0].min, max = boxes[0].max;
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setStep(newStep);
            }
        }
        setStep(step);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMin(min); } return prop; };
        prop.max = function(max) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMax(max); } return prop; };
        prop.step = function(step) { for (let i = 0; i < boxes.length; i++) { boxes[i].setStep(step); } return prop; };
        prop.precision = function(precision) { for (let i = 0; i < boxes.length; i++) { boxes[i].setPrecision(precision); } return prop; };
        prop.updateDisplay = function() {
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setValue(params[variable][i]);
                params[variable][i] = boxes[i].getValue();
            }
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
}
class Property {
    constructor() {
        const self = this;
        this.change = null;
        this.finishChange = null;
        this.name = function() { return self; };
        this.updateDisplay = function() { return self; };
        this.min = function() { return self; };
        this.max = function() { return self; };
        this.step = function() { return self; };
        this.precision = function() { return self; };
    }
    onChange(callback) {
        this.change = callback;
        return this;
    }
    onFinishChange(callback) {
        this.finishChange = callback;
        return this;
    }
}
function prettyTitle(string) {
    return addSpaces(capitalize(string));
}
function addSpaces(string) {
    if (! string || string === '') return '';
    return String(string).replace(/([A-Z])/g, ' $1').trim();
}
function capitalize(string) {
    if (! string || string === '') return '';
    let words = String(string);
    words = words.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}
function countDigits(number) {
    return parseFloat(number).toString().length;
}

class Break extends Element {
    constructor() {
        super(document.createElement('br'));
    }
}

class Canvas extends Element {
    constructor(width = 300, height = 150) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        super(canvas);
        this.ctx = this.dom.getContext('2d');
    }
    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }
    get height() { return this.dom.height; }
    set height(x) { this.dom.height = x; }
    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.dom.width / this.dom.height) / (rect.width / rect.height));
    }
}

class TreeList extends Div {
    #shiftAdd = 0;
    #shiftTrack = [];
    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('TreeList');
        this.dom.setAttribute('tabindex', '0');
        this.multiSelect = multiSelect;
        this.options = [];
        this.selectedValue = null;
        this.selectedValues = [];
        function onKeyDown(event) {
            if (! self.multiSelect) {
                if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.code === 'ArrowUp') index--;
                    if (event.code === 'ArrowDown') index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                if (! event.shiftKey) {
                    self.#shiftAdd = 0;
                    self.#shiftTrack = [];
                }
                if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let values = [...self.selectedValues];
                    if (event.shiftKey) {
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...values];
                        values = [...self.#shiftTrack];
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.code === 'ArrowUp' && index + self.#shiftAdd > 0) self.#shiftAdd--;
                        if (event.code === 'ArrowDown' && index + self.#shiftAdd < self.options.length - 1) self.#shiftAdd++;
                        index += self.#shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        }
                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.code === 'ArrowUp') index--;
                        if (event.code === 'ArrowDown') index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function onKeyUp(event) {
            switch (event.code) {
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    event.stopPropagation();
                    if (! event.shiftKey) {
                        self.#shiftAdd = 0;
                        self.#shiftTrack = [];
                    }
                    break;
            }
        }
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
    }
    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value === value) return i;
        }
        return -1;
    }
    getValue() {
        return this.selectedValue;
    }
    setValue(value, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('Active');
        }
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (parseInt(element.value) === parseInt(value)) {
                element.classList.add('Active');
                lastElement = element;
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Utils.scrollIntoView(lastElement), 0);
        this.selectedValue = value;
        return this;
    }
    getValues() {
        return this.selectedValues;
    }
    setValues(valueArray, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('Active');
            this.options[i].classList.remove('ActiveTop');
            this.options[i].classList.remove('ActiveBottom');
        }
        for (let v = 0; v < valueArray.length; v++) {
            const value = valueArray[v];
            for (let i = 0; i < this.options.length; i++) {
                const element = this.options[i];
                if (parseInt(element.value) === parseInt(value)) {
                    element.classList.add('Active');
                    lastElement = element;
                }
            }
        }
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];
            if (element.classList.contains('Active') && elementAfter.classList.contains('Active')) {
                element.classList.add('ActiveTop');
                elementAfter.classList.add('ActiveBottom');
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Utils.scrollIntoView(lastElement), 0);
        this.selectedValues = [...valueArray];
        return this;
    }
    setOptions(options) {
        const self = this;
        this.clearContents();
        function onPointerDown(event) {
            if (! event.shiftKey) {
                self.#shiftAdd = 0;
                self.#shiftTrack = [];
            }
            if (self.multiSelect) {
                let values = [...self.selectedValues];
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        values.push(this.value);
                    }
                    self.setValues(values);
                } else if (event.shiftKey && values.length > 0) {
                    if (self.#shiftTrack.length === 0) self.#shiftTrack = [...self.selectedValues];
                    values = [...self.#shiftTrack];
                    const index1 = self.getIndex(values[values.length - 1]);
                    const index2 = self.getIndex(this.value);
                    if (index1 < index2) {
                        for (let i = index1; i <= index2; i++) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    } else {
                        for (let i = index1; i >= index2; i--) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    }
                    self.#shiftAdd = index2 - index1;
                    self.setValues(values);
                } else {
                    if (! values.includes(this.value)) {
                        self.setValues([ this.value ]);
                    }
                }
            } else {
                self.setValue(this.value);
            }
            this.addEventListener('pointerup', onPointerUp);
            const changeEvent = new Event('change');
            self.dom.dispatchEvent(changeEvent);
        }
        function onPointerUp(event) {
            if (self.multiSelect) {
                if (! (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)) {
                    self.setValues([ this.value ]);
                }
            }
            this.removeEventListener('pointerup', onPointerUp);
        }
        let currentDrag = undefined;
        function onDrag() {
            currentDrag = this;
        }
        function onDragStart(event) {
            if (self.multiSelect) {
                event.dataTransfer.setData('text/plain', this.selectedValues);
            } else {
                event.dataTransfer.setData('text/plain', this.selectedValue);
            }
        }
        function onDragOver(event) {
            if (! currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;
            if (area < 0.25) {
                this.classList.add('DragTop');
                this.classList.remove('Drag');
                this.classList.remove('DragBottom');
            } else if (area < 0.75) {
                this.classList.add('Drag');
                this.classList.remove('DragTop');
                this.classList.remove('DragBottom');
            } else {
                this.classList.add('DragBottom');
                this.classList.remove('Drag');
                this.classList.remove('DragTop');
            }
        }
        function onDragLeave() {
            if (! currentDrag || this === currentDrag) return;
            this.classList.remove('Drag');
            this.classList.remove('DragTop');
            this.classList.remove('DragBottom');
        }
        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            if (! currentDrag || this === currentDrag) return;
            this.classList.remove('Drag');
            this.classList.remove('DragTop');
            this.classList.remove('DragBottom');
            if (self.onDrop && typeof self.onDrop === 'function') {
                self.onDrop(event, this, currentDrag);
            }
            currentDrag = undefined;
        }
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.className = 'Option';
            self.dom.appendChild(div);
            self.options.push(div);
            div.addEventListener('pointerdown', onPointerDown);
            div.addEventListener('destroy', () => div.removeEventListener('pointerdown', onPointerDown), { once: true });
            if (div.draggable) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart);
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
                div.addEventListener('destroy', () => {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }, { once: true });
            }
        }
        return this;
    }
}

class TextArea extends Element {
    constructor() {
        super(document.createElement('textarea'));
        this.setClass('TextArea');
        this.dom.spellcheck = false;
        this.dom.setAttribute('autocomplete', 'off');
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.code === 'Tab') {
                event.preventDefault();
                const cursor = this.selectionStart;
                this.value = this.value.substring(0, cursor) + '\t' + this.value.substring(cursor);
                this.selectionStart = cursor + 1;
                this.selectionEnd = this.selectionStart;
            }
        }
        this.onKeyDown(onKeyDown);
    }
    getValue() {
        if (! this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (! this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class AbsoluteBox extends Div {
    constructor() {
        super();
        this.setClass('AbsoluteBox');
    }
}

class AssetBox extends Div {
    constructor(title = '', isMini = true) {
        super();
        this.setClass('AssetBox');
        this.dom.tabIndex = 0;
        if (isMini) {
            this.addClass('MiniAssetBox');
        } else {
        }
        if (title !== '') this.dom.setAttribute('tooltip', title);
        if (typeof title !== 'string' || title === '') title = 'Unknown';
        this.setName(title.toLowerCase());
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;
        this.add(assetImageHolder);
        this.contents = function() { return assetImageHolder };
    }
}

const CORNERS = {
    TOP_LEFT:       'TopLeft',
    TOP_RIGHT:      'TopRight',
    BOTTOM_LEFT:    'BottomLeft',
    BOTTOM_RIGHT:   'BottomRight',
};
class Docker extends Div {
    #corners = {};
    constructor() {
        super();
        const self = this;
        let zIndex = 1;
        for (let key in CORNERS) {
            const cornerName = CORNERS[key];
            const className = `Docker${cornerName}`;
            const corner = new Div().addClass('DockerCorner').addClass(className);
            corner.setStyle('zIndex', `${zIndex}`);
            zIndex++;
            function bringCornerToTop() {
                for (let cornerDiv in self.#corners) {
                    const style = getComputedStyle(self.#corners[cornerDiv].dom);
                    let computedZ = style.getPropertyValue('z-index');
                    if (computedZ > 1) computedZ--;
                    self.#corners[cornerDiv].setStyle('zIndex', `${computedZ}`);
                };
                corner.setStyle('zIndex', `${Object.keys(self.#corners).length}`);
            }
            corner.dom.addEventListener('pointerdown', bringCornerToTop);
            corner.dom.addEventListener('clicked', bringCornerToTop);
            this.#corners[cornerName] = corner;
            this.add(corner);
        }
    }
    addDockPanel(dockPanel, cornerName = CORNERS.TOP_LEFT) {
        if (! dockPanel) return;
        const corner = this.getCorner(cornerName);
        corner.add(dockPanel);
        dockPanel.dom.addEventListener('resized', () => {
            corner.dom.dispatchEvent(new Event('resized'));
        });
        if (dockPanel.isElement) {
            if (dockPanel.hasClass('Tabbed')) {
                if (cornerName.includes('Right')) dockPanel.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('Left')) dockPanel.setTabSide(TAB_SIDES.RIGHT);
            }
            if (dockPanel.hasClass('Resizeable')) {
                dockPanel.toggleResize(RESIZERS.LEFT, cornerName.includes('Right'));
                dockPanel.toggleResize(RESIZERS.RIGHT, cornerName.includes('Left'));
            }
        }
    }
    getCorner(cornerName = CORNERS.TOP_LEFT) {
        return this.#corners[cornerName];
    }
}

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('FlexBox');
    }
}

class MenuSeparator extends Div {
    constructor() {
    super();
        this.setClass('MenuSeparator');
    }
}

class ToolbarButton extends Button {
    constructor(innerHtml, position ) {
        super(innerHtml);
        this.setClass('ToolbarButton');
        switch (position) {
            case 'left': this.addClass('ButtonLeft'); break;
            case 'middle': this.addClass('ButtonMiddle'); break;
            case 'right': this.addClass('ButtonRight'); break;
        }
        const buttonBackground = new Div().addClass('ButtonBackground');
        const buttonImageHolder = new ShadowBox();
        this.add(buttonBackground, buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
    }
}

class ToolbarSeparator extends Element {
    constructor() {
        super(document.createElement('div'));
        this.setClass('ToolbarSeparator');
    }
}

class ToolbarSpacer extends Element {
    constructor(width = 1) {
        super(document.createElement('div'));
        this.setClass('ToolbarSpacer');
        this.setStyle('width', `calc(var(--button-size) * ${width})`);
    }
}

const MIN_W$2 = 100;
const MIN_H$2 = 100;
const MAP_BUFFER = 100;
const MIN_MAP_SIZE = 1200;
const ANIMATE_INTERVAL = 4;
const ZOOM_MAX = 4;
const ZOOM_MIN = 0.1;
const _color = new Iris();
class Graph extends Panel {
    #scale = 1;
    #offset = { x: 0, y: 0 };
    #previous = { x: 0, y: 0 };
    #drawWidth = 0;
    #drawHeight = 0;
    constructor({
        snapToGrid = true,
        curveType = GRAPH_LINE_TYPES.CURVE,
        gridType = GRAPH_GRID_TYPES.LINES,
    } = {}) {
        super();
        const self = this;
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.activePoint = { x: 0, y: 0 };
        this.curveType = curveType;
        this.gridType = gridType;
        this.snapToGrid = snapToGrid;
        this.input = new Div().setClass('GraphInput');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas(2048, 2048).setClass('GraphLines');
        this.bandbox = new Div().setClass('GraphBandBox');
        this.minimap = new Div().setClass('MiniMap');
        this.add(this.input, this.grid, this.lines, this.nodes, this.bandbox, this.minimap);
        this.mapCanvas = new Canvas(1024, 1024).setClass('MiniMapCanvas');
        const mapResizers = new Div().addClass('MiniMapResizers');
        this.minimap.add(this.mapCanvas, mapResizers);
        this.changeGridType(gridType);
        function graphMouseZoom(event) {
            event.preventDefault();
            const delta = (event.deltaY * 0.002);
            self.stopAnimation();
            self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
		};
        this.onWheel(graphMouseZoom);
        function onWindowResize() {
            self.stopAnimation();
            self.zoomTo();
        }
        window.addEventListener('resize', onWindowResize);
        let grabbing = false, selecting = false;
        let spaceKey = false;
        function graphKeyDown(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function graphKeyUp(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', graphKeyDown);
        document.addEventListener('keyup', graphKeyUp);
        let offset = { x: 0, y: 0 };
        let startPoint = { x: 0, y: 0 };
        function inputPointerDown(event) {
            self.stopAnimation();
            startPoint.x = event.clientX;
            startPoint.y = event.clientY;
            if (event.button === 2 || (event.button === 0 && spaceKey)) {
                grabbing = true;
                self.dom.style.cursor = 'grabbing';
                offset.x = self.#offset.x;
                offset.y = self.#offset.y;
            } else if (event.button === 0) {
                selecting = true;
                const selected = document.querySelectorAll(`.NodeSelected`);
                selected.forEach(el => el.classList.remove('NodeSelected'));
                self.bandbox.setStyle('display', 'block');
                updateRubberBandBox(event.clientX, event.clientY);
            }
            if (grabbing || selecting) {
                self.dom.setPointerCapture(event.pointerId);
                self.dom.ownerDocument.addEventListener('pointermove', inputPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', inputPointerUp);
            }
        }
        function inputPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            if (grabbing) {
                self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
                grabbing = false;
            }
            if (selecting) {
                self.bandbox.setStyle('display', 'none');
                selecting = false;
            }
            self.dom.ownerDocument.removeEventListener('pointermove', inputPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', inputPointerUp);
        }
        function inputPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (grabbing) {
                const diffX = (event.clientX - startPoint.x) * (1 / self.#scale);
                const diffY = (event.clientY - startPoint.y) * (1 / self.#scale);
                self.#offset.x = (offset.x + diffX);
                self.#offset.y = (offset.y + diffY);
                self.zoomTo();
            } else if (selecting) {
                updateRubberBandBox(event.clientX, event.clientY);
            }
        }
        function updateRubberBandBox(toX, toY) {
            const inputRect = self.input.dom.getBoundingClientRect();
            const left = Math.min(startPoint.x, toX) - inputRect.left;
            const top = Math.min(startPoint.y, toY) - inputRect.top;
            const width = Math.abs(startPoint.x - toX);
            const height = Math.abs(startPoint.y - toY);
            self.bandbox.setStyle(
                'left', `${left}px`,
                'top', `${top}px`,
                'width', `${width}px`,
                'height', `${height}px`,
            );
            const rect = self.dom.getBoundingClientRect();
            const centerX = rect.left + ((rect.right - rect.left) / 2);
            const centerY = rect.top + ((rect.bottom - rect.top) / 2);
            const percentX = (centerX - left) / centerX;
            const percentY = (centerY - top) / centerY;
            const xMin = (centerX - (((rect.width / self.#scale) / 2) * percentX)) - self.#offset.x;
            const yMin = (centerY - (((rect.height / self.#scale) / 2) * percentY)) - self.#offset.y;
            const xMax = xMin + (width / self.#scale);
            const yMax = yMin + (height / self.#scale);
            function rubberbandIntersect(node) {
                return xMax >= node.left && xMin <= node.right && yMin <= node.bottom && yMax >= node.top;
            }
            const selected = [];
            const nodes = self.getNodes();
            nodes.forEach((node) => { if (rubberbandIntersect(node)) selected.push(node); });
            nodes.forEach((node) => {
                if (selected.includes(node)) node.addClass('NodeSelected');
                else node.removeClass('NodeSelected');
            });
        }
        this.input.onPointerDown(inputPointerDown);
        let rect = {};
        function resizerDown() {
            rect = self.minimap.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('Left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$2, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$2, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('Right')) {
                const newWidth = Math.min(Math.max(MIN_W$2, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$2, rect.height + diffY), window.innerHeight - rect.top);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            self.drawMiniMap();
            self.drawLines();
        }
        Interaction.makeResizeable(this.minimap, mapResizers, [ RESIZERS.LEFT, RESIZERS.TOP ], resizerDown, resizerMove);
        let translating = false;
        function calculateOffset(clientX, clientY) {
            const mapRect = self.minimap.dom.getBoundingClientRect();
            const nodesRect = self.nodes.dom.getBoundingClientRect();
            const percentX = ((mapRect.width / 2) - (clientX - mapRect.left)) / (mapRect.width / 2);
            const percentY = ((mapRect.height / 2) - (clientY - mapRect.top)) / (mapRect.height / 2);
            const bounds = self.nodeBounds(MAP_BUFFER, self.nodes.children, MIN_MAP_SIZE);
            if (! bounds.isFinite) return;
            if (self.#drawWidth > self.#drawHeight) {
                const ratio = (self.#drawWidth / self.#drawHeight);
                const x = bounds.center().x - ((bounds.width() / 2) * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * ratio * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            } else {
                const ratio = (self.#drawHeight / self.#drawWidth);
                const x = bounds.center().x - ((bounds.width() / 2) * ratio * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            }
            self.zoomTo();
        }
        function mapPointerDown(event) {
            self.stopAnimation();
            self.minimap.dom.setPointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grabbing');
            calculateOffset(event.clientX, event.clientY);
            translating = true;
        }
        function mapPointerUp(event) {
            self.minimap.dom.releasePointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grab');
            translating = false;
        }
        function mapPointerMove(event) {
            if (! translating) return;
            calculateOffset(event.clientX, event.clientY);
        }
        this.minimap.onPointerDown(mapPointerDown);
        this.minimap.onPointerUp(mapPointerUp);
        this.minimap.onPointerMove(mapPointerMove);
    }
    getScale() {
        return this.#scale;
    }
    addNode() {
        for (let i = 0, l = arguments.length; i < l; i++) {
            const node = arguments[i];
            if (this.nodes) {
                node.graph = this;
                this.nodes.add(node);
                node.setStyle('zIndex', this.nodes.children.length);
            }
        }
    }
    getNodes() {
        return this.nodes.children;
    }
    removeNode(removeNode) {
        if (! removeNode || ! removeNode.isElement) return;
        const currentZ = removeNode.zIndex;
        const nodes = this.nodes.children;
        const lengthBefore = nodes.length;
        nodes.remove(removeNode);
        const lengthAfter = nodes.length;
        if (lengthBefore === lengthAfter) return;
        nodes.forEach((node) => {
            if (node.zIndex > currentZ) node.setStyle('zIndex', `${node.zIndex - 1}`);
        });
    }
    nodeBounds(buffer = 0, nodes = this.nodes.children, minSize = undefined) {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
        };
        nodes.forEach((node) => {
            bounds.x.min = Math.min(bounds.x.min, node.left);
            bounds.x.max = Math.max(bounds.x.max, node.right);
            bounds.y.min = Math.min(bounds.y.min, node.top);
            bounds.y.max = Math.max(bounds.y.max, node.bottom);
        });
        if ((bounds.x.max > bounds.x.min) && (bounds.y.max > bounds.y.min)) {
            bounds.isFinite = true;
            bounds.center = function() {
                const x = bounds.x.min + ((bounds.x.max - bounds.x.min) / 2);
                const y = bounds.y.min + ((bounds.y.max - bounds.y.min) / 2);
                return { x, y };
            };
            bounds.width = () => { return (bounds.x.max - bounds.x.min); };
            bounds.height = () => { return (bounds.y.max - bounds.y.min); };
            bounds.x.min -= buffer; bounds.x.max += buffer;
            bounds.y.min -= buffer; bounds.y.max += buffer;
            if (minSize) {
                if (bounds.width() < minSize) {
                    const addX = (minSize - bounds.width()) / 2;
                    bounds.x.min -= addX;
                    bounds.x.max += addX;
                }
                if (bounds.height() < minSize) {
                    const addY = (minSize - bounds.height()) / 2;
                    bounds.y.min -= addY;
                    bounds.y.max += addY;
                }
            }
        }
        return bounds;
    }
    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (! this.nodes) return;
        const nodes = this.nodes.children;
        nodes.sort((x, y) => x.zIndex - y.zIndex);
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.isNode) callback(node);
        }
    }
    changeGridType(type = GRAPH_GRID_TYPES.LINES) {
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 1;
        const B2 = BORDER * 2;
        this.gridType = type;
        if (type === GRAPH_GRID_TYPES.LINES) {
            const squares = new Canvas(SIZE, SIZE);
            const ctx = squares.ctx;
            ctx.clearRect(0, 0, squares.width, squares.height);
            ctx.globalAlpha = 0.45;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 1;
            ctx.lineWidth = 4;
            ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).cssString();
            ctx.strokeRect(0, 0, HALF, HALF);
            ctx.strokeRect(HALF, HALF, HALF, HALF);
            ctx.strokeRect(HALF, 0, HALF, HALF);
            ctx.strokeRect(0, HALF, HALF, HALF);
            this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        } else if (type === GRAPH_GRID_TYPES.DOTS) {
            const radius = SIZE / 25;
            const dots = new Canvas(SIZE, SIZE);
            const ctx = dots.ctx;
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0, 0, dots.width, dots.height);
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    ctx.beginPath();
                    ctx.ellipse(HALF * i, HALF * j, radius, radius, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            this.grid.setStyle('background-image', `url('${dots.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        }
    }
    connect() {
        if (this.activeItem && this.connectItem) {
            const active = this.activeItem;
            const connect = this.connectItem;
            if (active.type === NODE_TYPES.OUTPUT) {
                active.connect(connect);
            } else if (connect.type === NODE_TYPES.OUTPUT) {
                connect.connect(active);
            }
        }
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.drawLines();
    }
    disconnect(item) {
        this.traverseNodes((node) => {
            node.outputList.children.forEach((output) => {
                const index = output.connections.indexOf(item);
                if (index > -1) {
                    output.connections.splice(index, 1);
                    item.reduceIncoming();
                }
                if (output.connections.length === 0) {
                    output.removeClass('ItemConnected');
                }
            });
        });
    }
    drawLines() {
        if (! this.lines) return;
        if (this.dom.style.display === 'none') return;
        const LINE_THICKNESS = 4;
        const self = this;
        const lines = this.lines;
        const linesRect = lines.dom.getBoundingClientRect();
        const xMin = linesRect.left;
        const xMax = linesRect.right;
        const yMin = linesRect.top;
        const yMax = linesRect.bottom;
        const ctx = lines.ctx;
        ctx.clearRect(0, 0, lines.width, lines.height);
        function scaleX(x) { return (x / linesRect.width) * lines.width; }
        function scaleY(y) { return (y / linesRect.height) * lines.height; }
        function drawLine(x1, y1, x2, y2, color1, color2 = color1) {
            if (! Number.isFinite(x1) || Number.isNaN(x1)) return;
            if (! Number.isFinite(x2) || Number.isNaN(x2)) return;
            if (! Number.isFinite(y1) || Number.isNaN(y1)) return;
            if (! Number.isFinite(y2) || Number.isNaN(y2)) return;
            ctx.strokeStyle = color1;
            if (color2 != null && color1 !== color2) {
                const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                gradient.addColorStop(0, color1);
                gradient.addColorStop(1, color2);
                ctx.strokeStyle = gradient;
            }
            ctx.lineWidth = LINE_THICKNESS * self.#scale;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            switch (self.curveType) {
                case GRAPH_LINE_TYPES.STRAIGHT:
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.ZIGZAG:
                    const xOffset = Math.abs((x2 - x1) * 0.25);
                    ctx.lineTo(x1 + xOffset, y1);
                    ctx.lineTo(x2 - xOffset, y2);
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.CURVE:
                default:
                    const curveOffset = Math.abs((x2 - x1) * 0.5);
                    ctx.bezierCurveTo(x1 + curveOffset, y1, x2 - curveOffset, y2, x2, y2);
                    break;
            }
            ctx.stroke();
        }
        function drawConnection(x1, y1, x2, y2, radius = 10, color1 = '#ffffff', color2 = color1, drawPoints = false) {
            const left = (x1 < x2) ? x1 : x2;
            const right = (x1 < x2) ? x2 : x1;
            const top = (y1 < y2) ? y1 : y2;
            const bottom = (y1 < y2) ? y2 : y1;
            if (! (xMax >= left && xMin <= right && yMin <= bottom && yMax >= top)) return;
            x1 = scaleX(x1);
            y1 = scaleY(y1);
            x2 = scaleX(x2);
            y2 = scaleY(y2);
            ctx.globalAlpha = 1.0;
            if (drawPoints) {
                const radiusX = scaleX(radius);
                const radiusY = scaleY(radius);
                ctx.fillStyle = color1;
                ctx.beginPath();
                ctx.ellipse(x1, y1, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = color2;
                ctx.beginPath();
                ctx.ellipse(x2, y2, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                ctx.fill();
            }
            drawLine(x1, y1, x2, y2, color1, color2);
        }
        const pointSize = parseFloat(Css.toPx('0.21429em', this.dom)) * this.#scale;
        this.traverseNodes((node) => {
            if (! node.outputList) return;
            node.outputList.children.forEach((item) => {
                const rectOut = item.point.dom.getBoundingClientRect();
                const x1 = rectOut.left + (rectOut.width / 2);
                const y1 = rectOut.top + (rectOut.height / 2);
                const color1 = item.node.colorString();
                item.connections.forEach((input) => {
                    const rectIn = input.point.dom.getBoundingClientRect();
                    const x2 = rectIn.left + (rectIn.width / 2);
                    const y2 = rectIn.top + (rectIn.height / 2);
                    const color2 = input.node.colorString();
                    drawConnection(x1, y1, x2, y2, pointSize, color1, color2);
                });
            });
        });
        if (this.activeItem) {
            const rect = this.activeItem.point.dom.getBoundingClientRect();
            const x1 = rect.left + (rect.width / 2);
            const y1 = rect.top + (rect.height / 2);
            const x2 = this.activePoint.x;
            const y2 = this.activePoint.y;
            const color = this.activeItem.node.colorString();
            const forward = this.activeItem.type === NODE_TYPES.OUTPUT;
            const drawPoints = ! this.connectItem;
            if (forward) drawConnection(x1, y1, x2, y2, pointSize, color, color, drawPoints);
            else drawConnection(x2, y2, x1, y1, pointSize, color, color, drawPoints);
        }
    }
    drawMiniMap() {
        if (! this.mapCanvas) return;
        if (this.dom.style.display === 'none') return;
        const bounds = this.nodeBounds(MAP_BUFFER, this.nodes.children, MIN_MAP_SIZE);
        if (! bounds.isFinite) return;
        const map = this.mapCanvas;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);
        this.#drawWidth = map.width;
        this.#drawHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.mapCanvas.ratio();
        if (ratioX > ratioY) {
            this.#drawWidth *= (ratioY / ratioX);
            adjustX = (this.#drawWidth - map.width) / 2;
        } else {
            this.#drawHeight *= (ratioX / ratioY);
            adjustY = (this.#drawHeight - map.height) / 2;
        }
        const rect = this.dom.getBoundingClientRect();
        const scaled = {};
        const centerX = rect.left + ((rect.right - rect.left) / 2);
        const centerY = rect.top + ((rect.bottom - rect.top) / 2);
        scaled.left = (centerX - ((rect.width / this.#scale) / 2)) - this.#offset.x;
        scaled.top = (centerY - ((rect.height / this.#scale) / 2)) - this.#offset.y;
        scaled.width = rect.width / this.#scale;
        scaled.height = rect.height / this.#scale;
        const x = (this.#drawWidth * ((scaled.left - bounds.x.min) / bounds.width())) - adjustX;
        const y = (this.#drawHeight * ((scaled.top - bounds.y.min) / bounds.height())) - adjustY;
        const w = this.#drawWidth * (scaled.width / bounds.width());
        const h = this.#drawHeight * (scaled.height / bounds.height());
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
        ctx.fillRect(x, y, w, h);
        const widthScale = this.minimap.getWidth() / this.mapCanvas.width;
        const heightScale = this.minimap.getHeight() / this.mapCanvas.height;
        ctx.globalAlpha = 0.75;
        ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.TEXT)).cssString();
        ctx.lineWidth = 2 / widthScale;
        ctx.beginPath(); ctx.moveTo(x + 0, y); ctx.lineTo(x + 0, y + h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + w, y); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.lineWidth = 2 / heightScale;
        ctx.beginPath(); ctx.moveTo(x, y + 0); ctx.lineTo(x + w, y + 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.globalAlpha = 0.5;
        ctx.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            ctx.fillStyle = node.colorString();
            const x = this.#drawWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (node.width / bounds.width());
            const y = this.#drawHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (node.height / bounds.height());
            ctx.beginPath();
            ctx.roundRect(x - adjustX, y - adjustY, w, h, 0);
            ctx.fill();
        });
    }
    centerView(resetZoom = true, animate = true) {
        const selected = [];
        this.traverseNodes((node) => { if (node.hasClass('NodeSelected')) selected.push(node); });
        const bounds = this.nodeBounds(0, (selected.length > 0) ? selected : this.nodes.children);
        this.focusView(bounds.center().x, bounds.center().y, resetZoom, animate);
    }
    focusView(targetX, targetY, resetZoom = false, animate = true) {
        if (targetX == null || targetY == null) return;
        const rect = this.nodes.dom.getBoundingClientRect();
        this.#targetX = ((rect.width / 2) / this.#scale) - targetX;
        this.#targetY = ((rect.height / 2) / this.#scale) - targetY;
        this.#targetZoom = ((resetZoom) ? 1.0 : this.#scale) * 1000;
        if (animate) {
            const self = this;
            this.#animateStart = performance.now();
            this.#animateLast = performance.now();
            this.#startZoom = this.#scale * 1000;
            this.#animateTimer = setInterval(() => {
                this.#animating = true;
                function damp(x, y, lambda, dt) { return lerp(x, y, 1 - Math.exp(- lambda * dt)); }
                function lerp(x, y, t) { return (1 - t) * x + t * y; }
                const elapsed = (performance.now() - self.#animateStart) / 1000;
                const dt = (performance.now() - self.#animateLast) / 1000;
                self.#offset.x = damp(self.#offset.x, self.#targetX, 15, dt);
                self.#offset.y = damp(self.#offset.y, self.#targetY, 15, dt);
                self.#startZoom = damp(self.#startZoom, self.#targetZoom, 15 * (elapsed + 0.5), dt);
                const diffX = Math.abs(self.#offset.x - self.#targetX);
                const diffY = Math.abs(self.#offset.y - self.#targetY);
                const diffZ = Math.abs(self.#startZoom - self.#targetZoom);
                if (diffX < 0.5 && diffY < 0.5 && diffZ < 0.01) self.stopAnimation();
                if (elapsed > 2.5) self.stopAnimation();
                self.zoomTo(self.#startZoom / 1000);
                self.#animateLast = performance.now();
            }, ANIMATE_INTERVAL);
        } else {
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    #animating = false;
    #animateTimer = undefined;
    #animateStart = 0;
    #animateLast = 0;
    #targetX = 0;
    #targetY = 0;
    #startZoom = 0;
    #targetZoom = 0;
    stopAnimation() {
        clearInterval(this.#animateTimer);
        if (this.#animating) {
            this.#animating = false;
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    zoomTo(zoom, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, ZOOM_MIN), ZOOM_MAX) * 100) / 100;
        const nodes = this.nodes;
        const grid = this.grid;
        if (clientX != undefined && clientY != undefined) {
            const before = nodes.dom.getBoundingClientRect();
            nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }
        nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;
        this.#previous.x = this.#offset.x;
        this.#previous.y = this.#offset.y;
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');
        const resizeables = document.querySelectorAll(`.Node`);
        resizeables.forEach(el => {
            if (zoom < 0.5) el.classList.add('TooSmall');
            else el.classList.remove('TooSmall');
        });
        this.drawMiniMap();
        this.drawLines();
    }
}

const MIN_W$1 = 200;
const MIN_H$1 = 100;
const _color1 = new Iris();
const _color2 = new Iris();
class Node extends Div {
    #color = new Iris();
    #style = {};
    #needsUpdate = true;
    #startPosition = { x: 0, y: 0 };
    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super();
        const self = this;
        this.addClass('Node');
        this.dom.setAttribute('tabindex', '-1');
        this.isNode = true;
        this.graph = undefined;
        this.#color.set(color);
        const panel = new Div().addClass('NodePanel');
        const border = new Div().addClass('NodeBorder');
        const sizers = new Div().addClass('NodeResizers');
        this.addToSelf(sizers, panel, border);
        this.contents = function() { return panel; };
        this.header = new Div().setClass('NodeHeaderTitle').setStyle('display', 'none');
        const lists = new Div().setClass('NodeInterior');
        this.inputList = new Div().setClass('NodeItemList');
        this.outputList = new Div().setClass('NodeItemList');
        lists.add(this.inputList, this.outputList);
        this.add(this.header, lists);
        this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
        this.dom.addEventListener('focusin', () => Interaction.bringToTop(self.dom));
        this.dom.addEventListener('displayed', () => Interaction.bringToTop(self.dom));
        this.dom.addEventListener('pointerdown', () => Interaction.bringToTop(self.dom));
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! self.graph || ! self.graph.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }
        let rect = {};
        function resizerDown() {
            rect.left = self.left;
            rect.top = self.top;
            rect.width = self.width;
            rect.height = self.height;
            nodePointerDown();
        }
        function resizerMove(resizer, diffX, diffY) {
            const scale = self.getScale();
            diffX *= (1 / scale);
            diffY *= (1 / scale);
            if (resizer.hasClassWithString('Left')) {
                const newWidth = Math.max(roundNearest(rect.width - diffX), MIN_W$1);
                const newLeft = rect.left + (rect.width - newWidth);
                self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Top')) {
                const newHeight = Math.max(roundNearest(rect.height - diffY), MIN_H$1);
                const newTop = rect.top + (rect.height - newHeight);
                self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('Right')) {
                const newWidth = Math.max(roundNearest(rect.width + diffX), MIN_W$1);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Bottom')) {
                const newHeight = Math.max(roundNearest(rect.height + diffY), MIN_H$1);
                self.setStyle('height', `${newHeight}px`);
            }
        }
        Interaction.makeResizeable(this, sizers, resizers, resizerDown, resizerMove);
        let styleTimeout = undefined;
        const observer = new MutationObserver(() => {
            self.needsUpdate = true;
            clearTimeout(styleTimeout);
            styleTimeout = setTimeout(() => self.#updateSizes(), 4);
        });
        observer.observe(this.dom, { attributes: true, attributeFilter: [ 'style', 'class' ] });
        this.setStyle(
            'left', `${roundNearest(parseFloat(x))}px`,
            'top', `${roundNearest(parseFloat(y))}px`,
            'width', `${parseFloat(width)}px`,
            'height', `${parseFloat(height)}px`,
        );
        let watchForSingleClick = false;
        let singleClickTimer;
        function dragDown() {
            if (! self.graph) return;
            self.graph.getNodes().forEach((node) => node.setStartPosition(node.left, node.top));
        }
        function dragMove(diffX, diffY) {
            watchForSingleClick = false;
            if (! self.graph) return;
            self.graph.getNodes().forEach((node) => {
                if (node.hasClass('NodeSelected')) {
                    node.setStyle('left', `${roundNearest(node.getStartPosition().x + diffX)}px`);
                    node.setStyle('top', `${roundNearest(node.getStartPosition().y + diffY)}px`);
                }
            });
        }
        Interaction.makeDraggable(self, self, false, dragDown, dragMove);
        function nodePointerDown(event) {
            if (event && event.button !== 0) {
                if (self.graph) setTimeout(() => self.graph.input.dom.dispatchEvent(event), 0);
                return;
            }
            if (self.graph) {
                const nodes = self.graph.getNodes();
                if (self.zIndex !== nodes.length) {
                    nodes.forEach(node => node.setStyle('zIndex', `${node.zIndex - 1}`));
                    self.setStyle('zIndex', nodes.length);
                }
            }
            if (! self.hasClass('NodeSelected')) {
                const selected = document.querySelectorAll(`.NodeSelected`);
                selected.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
                self.addClass('NodeSelected');
            }
            watchForSingleClick = ! watchForSingleClick;
            self.dom.ownerDocument.addEventListener('pointerup', nodePointerUp);
        }
        function nodePointerUp() {
            clearTimeout(singleClickTimer);
            singleClickTimer = setTimeout(() => {
                if (watchForSingleClick) {
                    const selected = document.querySelectorAll(`.NodeSelected`);
                    selected.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
                    self.addClass('NodeSelected');
                    watchForSingleClick = false;
                }
            }, 250);
            self.dom.ownerDocument.removeEventListener('pointerup', nodePointerUp);
        }
        this.onPointerDown(nodePointerDown);
        function nodeDoubleClick() {
            if (! self.graph) return;
            self.graph.centerView(false , true );
        }
        this.onDblClick(nodeDoubleClick);
        this.dom.addEventListener('destroy', function() {
            if (observer) observer.disconnect();
        }, { once: true });
    }
    get needsUpdate() { return this.#needsUpdate; }
    set needsUpdate(update) { this.#needsUpdate = update; }
    #updateSizes() {
        if (! this.#needsUpdate) return;
        const computed = getComputedStyle(this.dom);
        const style = this.#style;
        style.left = parseFloat(computed.left);
        style.top = parseFloat(computed.top);
        style.width = parseFloat(computed.width);
        style.height = parseFloat(computed.height);
        style.right = style.left + style.width;
        style.bottom = style.top + style.height;
        style.zIndex = parseInt(computed.zIndex);
        this.#needsUpdate = false;
        const self = this;
        if (this.graph) setTimeout(() => {
            self.graph.drawMiniMap();
            self.graph.drawLines();
        }, 20);
    }
    get left()   { this.#updateSizes(); return this.#style.left; }
    get top()    { this.#updateSizes(); return this.#style.top; }
    get width()  { this.#updateSizes(); return this.#style.width; }
    get height() { this.#updateSizes(); return this.#style.height; }
    get right()  { this.#updateSizes(); return this.#style.right; }
    get bottom() { this.#updateSizes(); return this.#style.bottom; }
    get zIndex() { this.#updateSizes(); return this.#style.zIndex; }
    getScale() {
        return (this.graph ? this.graph.getScale() : 1.0);
    }
    getStartPosition() { return this.#startPosition; }
    setStartPosition(x = 0, y = 0) { this.#startPosition.x = x; this.#startPosition.y = y; }
    addItem(item) {
        item.node = this;
        switch (item.type) {
            case NODE_TYPES.INPUT: this.inputList.add(item); break;
            case NODE_TYPES.OUTPUT: this.outputList.add(item); break;
        }
    }
    createHeader(text = '', iconUrl) {
        if (this.header.children.length > 0) return;
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('NodeHeaderIcon').add(icon);
        const textHolder = new Span().setClass('NodeHeaderText').setTextContent(text);
        this.header.add(iconHolder, textHolder);
        this.header.setStyle('display', '');
        this.applyColor();
        this.name = text;
    }
    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.75), rgba(${colorDark}, 0.75))`);
        Css.setVariable('--node-color', _color1.set(this.#color).rgbString(), this.dom);
    }
    colorString() {
        return this.#color.cssString();
    }
}

class NodeItem extends Div {
    constructor({
        quantity = 1,
        type = NODE_TYPES.INPUT,
        title = '',
    } = {}) {
        super(title);
        const self = this;
        this.addClass('NodeItem');
        const disconnect = new VectorBox(IMAGE_CLOSE);
        this.point = new Div().addClass('NodeItemPoint');
        this.detach = new Div().addClass('NodeItemDetach').add(disconnect);
        this.add(this.point, this.detach);
        this.connections = [];
        this.incoming = 0;
        this.quantity = quantity;
        this.type = type;
        this.node = this;
        switch (type) {
            case NODE_TYPES.INPUT: this.addClass('NodeLeft'); break;
            case NODE_TYPES.OUTPUT: this.addClass('NodeRight'); break;
        }
        this.graph = () => { return (self.node && self.node.graph) ? self.node.graph : undefined; };
        function pointPointerDown(event) {
            if (event.button !== 0) return;
            if (! self.graph()) return;
            event.stopPropagation();
            event.preventDefault();
            self.point.dom.ownerDocument.addEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.addEventListener('pointerup', pointPointerUp);
            self.point.addClass('ActiveItem');
            self.graph().activeItem = self;
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.point.removeClass('ActiveItem');
            self.graph().connect();
            self.point.dom.ownerDocument.removeEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.removeEventListener('pointerup', pointPointerUp);
        }
        function pointPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerEnter(event) {
            if (self.graph() && self.graph().activeItem) {
                if (self.type !== self.graph().activeItem.type) {
                    self.graph().connectItem = self;
                    if (self.graph().activeItem) self.point.addClass('ActiveItem');
                    self.point.addClass('HoverPoint');
                }
            } else {
                self.point.addClass('HoverPoint');
            }
        }
        function pointPointerLeave(event) {
            if (self.graph()) {
                self.graph().connectItem = undefined;
                if (self.graph().activeItem !== self) self.point.removeClass('ActiveItem');
            }
            self.point.removeClass('HoverPoint');
        }
        this.point.onPointerDown(pointPointerDown);
        this.point.onPointerEnter(pointPointerEnter);
        this.point.onPointerLeave(pointPointerLeave);
        function breakPointerDown(event) {
            if (! self.hasClass('ItemConnected')) return;
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            self.disconnect();
        }
        this.detach.onPointerDown(breakPointerDown);
    }
    connect(item) {
        if (item === this) return;
        if (! this.connections.includes(item)) {
            if (this.connections.length >= this.quantity) {
                this.connections[this.connections.length - 1].reduceIncoming();
                this.connections.length = Math.max(0, this.connections.length - 1);
            }
            if (this.connections.length < this.quantity) {
                item.increaseIncoming();
                this.connections.push(item);
            }
        }
        if (this.connections.length > 0) {
            this.addClass('ItemConnected');
        } else {
            this.removeClass('ItemConnected');
        }
    }
    disconnect() {
        switch (this.type) {
            case NODE_TYPES.OUTPUT:
                for (let i = 0; i < this.connections.length; i++) {
                    this.connections[i].reduceIncoming();
                }
                this.connections.length = 0;
                break;
            case NODE_TYPES.INPUT:
                if (this.graph()) this.graph().disconnect(this);
                break;
        }
        this.removeClass('ItemConnected');
        if (this.graph()) this.graph().drawLines();
    }
    increaseIncoming() {
        this.incoming++;
        this.addClass('ItemConnected');
    }
    reduceIncoming() {
        if (this.incoming > 0) this.incoming--;
        if (this.incoming === 0) this.removeClass('ItemConnected');
    }
}

const RESIZE_MODE = {
    FIXED:      'fixed',
    STRETCH:    'stretch',
};
const MIN_W = 300;
const MIN_H = 150;
class Window extends Panel {
    #resizeMode = RESIZE_MODE.FIXED;
    #lastKnownRect;
    #maximized = false;
    #titleBar = undefined;
    constructor({
        style = PANEL_STYLES.FANCY,
        resizeMode = RESIZE_MODE.FIXED,
        width = 600,
        height = 600,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super({ style, bringToTop: true });
        const self = this;
        this.addClass('Window');
        this.isWindow = true;
        this.#resizeMode = resizeMode;
        let rect = {};
        function resizerDown() {
            Interaction.bringToTop(self.dom);
            rect = self.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (self.#resizeMode === RESIZE_MODE.FIXED) {
                if (resizer.hasClassWithString('Left')) {
                    const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                    const newWidth = rect.right - newLeft;
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                    const newHeight = rect.bottom - newTop;
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                    self.setStyle('height', `${newHeight}px`);
                }
            } else if (self.#resizeMode === RESIZE_MODE.STRETCH) {
                const newLeft = Math.max(0, rect.left + diffX);
                const newTop = Math.max(0, rect.top + diffY);
                const newRight = Math.min(window.innerWidth - (rect.left + MIN_W), Math.max(0, (window.innerWidth - rect.right) - diffX));
                const newBottom = Math.min(window.innerHeight - (rect.top + MIN_H), Math.max(0, (window.innerHeight - rect.bottom) - diffY));
                if (resizer.hasClassWithString('Left')) self.setStyle('left', `${newLeft}px`);
                if (resizer.hasClassWithString('Top')) self.setStyle('top', `${newTop}px`);
                if (resizer.hasClassWithString('Right')) self.setStyle('right', `${newRight}px`);
                if (resizer.hasClassWithString('Bottom')) self.setStyle('bottom', `${newBottom}px`);
            }
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove);
        this.setStyle('left', '0', 'top', '0');
        if (resizeMode === RESIZE_MODE.FIXED) {
            this.setStyle('width', `${parseInt(width)}px`);
            this.setStyle('height', `${parseInt(height)}px`);
        } else if (resizeMode === RESIZE_MODE.STRETCH) {
            if (String(width).includes('%')) this.setStyle('right', `${window.innerWidth - (window.innerWidth * (parseFloat(width)/100))}px`);
            else this.setStyle('right', `${window.innerWidth - parseInt(Css.toPx(width))}px`);
            if (String(height).includes('%')) this.setStyle('bottom', `${window.innerHeight - (window.innerHeight * (parseFloat(height)/100))}px`);
            else this.setStyle('bottom', `${window.innerHeight - parseInt(Css.toPx(height))}px`);
        }
        window.addEventListener('resize', () => {
            const rect = self.dom.getBoundingClientRect();
            if (resizeMode === RESIZE_MODE.FIXED) {
                if (rect.right > window.innerWidth) self.setStyle('left', `${Math.max(0, window.innerWidth - rect.width)}px`);
                if (rect.bottom > window.innerHeight) self.setStyle('top', `${Math.max(0, window.innerHeight - rect.height)}px`);
            }
        });
        this.dom.addEventListener('displayed', () => self.center(), { once: true });
    }
    addTitleBar(title = '', draggable = false, scale = 1.3) {
        if (! this.#titleBar) {
            this.#titleBar = new TitleBar(this, title, draggable, scale);
            this.addToSelf(this.#titleBar);
        } else {
            this.#titleBar.setTitle(title);
        }
    }
    setTitle(title = '') {
        if (this.#titleBar) this.#titleBar.setTitle(title);
    }
    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
        if (this.#resizeMode === RESIZE_MODE.STRETCH) this.setStyle('right', `${side}px`, 'bottom', `${top}px`);
    }
    toggleMinMax() {
        if (! this.#maximized) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('right', `0`);
            this.setStyle('top', `0`);
            this.setStyle('bottom', `0`);
            this.dom.style.removeProperty('width');
            this.dom.style.removeProperty('height');
            this.#maximized = true;
        } else {
            const newLeft = Math.max(0, Math.min(window.innerWidth - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(window.innerHeight - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.dom.style.removeProperty('right');
            this.dom.style.removeProperty('bottom');
            this.#maximized = false;
        }
    }
}
class TitleBar extends Div {
    constructor(parent, title = '', draggable = false, scale = 1.3) {
        if (! parent || ! parent.isElement) return console.warn(`TitleBar: Missing parent element`);
        super();
        this.setClass('TitleBar');
        this.addClass('PanelButton');
        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);
        this.setTitle(title);
        if (draggable) Interaction.makeDraggable(this, parent, true );
    }
    setTitle(title = '') {
        this.setInnerHtml(title);
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        this.setStyle('width', Css.toEm(`${width}px`));
    }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = "/**\n *\t\tUnits\n *          px      Pixels\n *          %       Percentage relative to the parent element\n *          em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *          rem     Relative to the font-size of the root element\n *          ch      Relative to the width of the character '0' of the current font\n *          ex      Relative to the height of a lowercase letter ('x') of the current font\n *          cap     Relative to the height of a capital letter of the current font\n *          vw      Relative to 1% of the width of the viewport (browser window)\n *          vh      Relative to 1% of the width of the viewport (browser window)\n *          vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *          vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n    --darklight:             16,  16,  16;\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n    --midlight:              85,  85,  85;\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n    --highlight:            255, 255, 255;\n    --icon-dark:              0,  90,  87;      /* #005A57 icon darkened            dark classic aqua */\n    --icon:                   0, 180, 175;      /* #00B4AF icon color               classic aqua */\n    --icon-light:            90, 255, 250;      /* #5AFFFA icon brightened          light clasic aqua */\n    --complement:           255, 113,   0;      /* #FF7100 icon shifted 180°        orange */\n    --triadic1:             216,   0, 127;      /* #D8007F icon shifted 120°        pink */\n    --triadic2:             165, 243,   0;      /* #A5F300 complement shifted 120°  lime green */\n    --triadic3:             113,  25, 185;      /* #7119B9 icon shifted 90°         purple */\n    --triadic4:             255, 253,  84;      /* #FFFD54 complement shifted 90°   yellow */\n    --triadic5:             232,  51,  37;      /* #E83325 icon shifted 150°        red */\n    --triadic6:             100, 216,  64;      /* #64D840 complement shifted 150°  green */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   1.0;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:\t\t\t14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.2em;              /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --tab-size:             2.5em;              /* Tab button diameter */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* ..in seconds */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Drop Shadows:        'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(var(--minus) var(--pixel) var(--pad-micro) rgba(0, 0, 0, 0.75));\n}\n";
var stylesheet$a="/**\n *\t\tUnits\n *          px      Pixels\n *          %       Percentage relative to the parent element\n *          em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *          rem     Relative to the font-size of the root element\n *          ch      Relative to the width of the character '0' of the current font\n *          ex      Relative to the height of a lowercase letter ('x') of the current font\n *          cap     Relative to the height of a capital letter of the current font\n *          vw      Relative to 1% of the width of the viewport (browser window)\n *          vh      Relative to 1% of the width of the viewport (browser window)\n *          vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *          vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n    --darklight:             16,  16,  16;\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n    --midlight:              85,  85,  85;\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n    --highlight:            255, 255, 255;\n    --icon-dark:              0,  90,  87;      /* #005A57 icon darkened            dark classic aqua */\n    --icon:                   0, 180, 175;      /* #00B4AF icon color               classic aqua */\n    --icon-light:            90, 255, 250;      /* #5AFFFA icon brightened          light clasic aqua */\n    --complement:           255, 113,   0;      /* #FF7100 icon shifted 180°        orange */\n    --triadic1:             216,   0, 127;      /* #D8007F icon shifted 120°        pink */\n    --triadic2:             165, 243,   0;      /* #A5F300 complement shifted 120°  lime green */\n    --triadic3:             113,  25, 185;      /* #7119B9 icon shifted 90°         purple */\n    --triadic4:             255, 253,  84;      /* #FFFD54 complement shifted 90°   yellow */\n    --triadic5:             232,  51,  37;      /* #E83325 icon shifted 150°        red */\n    --triadic6:             100, 216,  64;      /* #64D840 complement shifted 150°  green */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   1.0;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:\t\t\t14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.2em;              /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --tab-size:             2.5em;              /* Tab button diameter */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* ..in seconds */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Drop Shadows:        'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(var(--minus) var(--pixel) var(--pad-micro) rgba(0, 0, 0, 0.75));\n}\n";
styleInject(css_248z$a);

var css_248z$9 = "/********** BASE ELEMENTS **********/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgba(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.Text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** SCROLLBARS **********/\n\n*::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n\n/********** MISC **********/\n\n/** Grayscale filter for disabled items */\n.Disabled {\n    filter: contrast(75%) grayscale(100%);\n    opacity: 0.7;\n    pointer-events: none;\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.Unselectable {\n    user-select: none;\n}\n";
var stylesheet$9="/********** BASE ELEMENTS **********/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgba(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.Text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** SCROLLBARS **********/\n\n*::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n*::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n\n/********** MISC **********/\n\n/** Grayscale filter for disabled items */\n.Disabled {\n    filter: contrast(75%) grayscale(100%);\n    opacity: 0.7;\n    pointer-events: none;\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.Unselectable {\n    user-select: none;\n}\n";
styleInject(css_248z$9);

var css_248z$8 = "/********** ELEMENT: Input (number, text, etc) **********/\n\ninput {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.25);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n}\n\ninput:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\ninput:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\ninput.YesDrop {\n    color: rgb(0, 255, 0);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(0, 255, 0);\n    outline: var(--border-micro) solid rgb(0, 255, 0);\n    border-radius: 0;\n}\n\ninput.NoDrop {\n    color: red;\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid red;\n    outline: var(--border-micro) solid red;\n    border-radius: 0;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/** Hide Arrow Spinners - Firefox */\ninput[type=number] {\n    -moz-appearance: textfield;\n}\n\n/********** ELEMENT: Button **********/\n\n.Button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-large);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.Button:not(.Selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--highlight), 0.1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n}\n\n.Button:not(.Selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.Button.Selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.Button:disabled {\n    pointer-events: none;\n}\n\n.Button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.BorderlessButton {\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.6em;\n    min-width: 1.75em;\n}\n\n.BorderlessButton:not(.Selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.BorderlessButton:not(.Selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: Input.Checkbox **********/\n\n/* Container */\n.Checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.CheckboxInput {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.CheckboxButton {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.CheckboxInput:checked + .CheckboxButton {\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.CheckboxInput:checked:hover + .CheckboxButton {\n    background-color: rgba(var(--highlight), 0.5);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Button: Unchecked */\n.CheckboxButton:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.CheckboxInput:checked + .CheckboxButton:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.CheckboxInput:hover + .CheckboxButton:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.Dropdown.Selected, .Dropdown:not(.Selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.ColorInputButton {\n    position: absolute;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.DropColor {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: .DropArrow (adds a little down arrow on right side of element) **********/\n\n.DropArrow {\n    padding-right: 1.4em;\n}\n.DropArrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* DropArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.DropArrow:hover::after, .DropArrow.Selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.DropArrow.Selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: .Number (Number Box) **********/\n\n.Number {\n    font-size: 100%;\n}\n\n/********** ELEMENT: Slider **********/\n\n.SlideContainer {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.TickMarks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.Slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.Slider:hover, .Slider:focus, .Slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.Slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.Slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-webkit-slider-thumb:hover, .Slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.Slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.Slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-moz-range-thumb:hover, .Slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.Slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: Text Area **********/\n\ntextarea {\n    color: rgba(var(--text), 1);\n    background-color: #222;\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-small) var(--pad-large);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\ntextarea.success {\n    border-color: #8b8 !important;\n}\n\ntextarea.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n";
var stylesheet$8="/********** ELEMENT: Input (number, text, etc) **********/\n\ninput {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.25);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n}\n\ninput:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\ninput:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\ninput.YesDrop {\n    color: rgb(0, 255, 0);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(0, 255, 0);\n    outline: var(--border-micro) solid rgb(0, 255, 0);\n    border-radius: 0;\n}\n\ninput.NoDrop {\n    color: red;\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid red;\n    outline: var(--border-micro) solid red;\n    border-radius: 0;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/** Hide Arrow Spinners - Firefox */\ninput[type=number] {\n    -moz-appearance: textfield;\n}\n\n/********** ELEMENT: Button **********/\n\n.Button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-large);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.Button:not(.Selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--highlight), 0.1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n}\n\n.Button:not(.Selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.Button.Selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.Button:disabled {\n    pointer-events: none;\n}\n\n.Button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.BorderlessButton {\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.6em;\n    min-width: 1.75em;\n}\n\n.BorderlessButton:not(.Selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.BorderlessButton:not(.Selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: Input.Checkbox **********/\n\n/* Container */\n.Checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.CheckboxInput {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.CheckboxButton {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.CheckboxInput:checked + .CheckboxButton {\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.CheckboxInput:checked:hover + .CheckboxButton {\n    background-color: rgba(var(--highlight), 0.5);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Button: Unchecked */\n.CheckboxButton:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.CheckboxInput:checked + .CheckboxButton:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.CheckboxInput:hover + .CheckboxButton:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.Dropdown.Selected, .Dropdown:not(.Selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.ColorInputButton {\n    position: absolute;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.DropColor {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: .DropArrow (adds a little down arrow on right side of element) **********/\n\n.DropArrow {\n    padding-right: 1.4em;\n}\n.DropArrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* DropArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.DropArrow:hover::after, .DropArrow.Selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.DropArrow.Selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: .Number (Number Box) **********/\n\n.Number {\n    font-size: 100%;\n}\n\n/********** ELEMENT: Slider **********/\n\n.SlideContainer {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.TickMarks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.Slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.Slider:hover, .Slider:focus, .Slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.Slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.Slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-webkit-slider-thumb:hover, .Slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.Slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.Slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-moz-range-thumb:hover, .Slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.Slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: Text Area **********/\n\ntextarea {\n    color: rgba(var(--text), 1);\n    background-color: #222;\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-small) var(--pad-large);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\ntextarea.success {\n    border-color: #8b8 !important;\n}\n\ntextarea.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "/********** .AbsoluteBox **********/\n\n.AbsoluteBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** .AssetBox / .MiniAssetBox **********/\n\n.AssetBox {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n\n    outline: none; /* for macos */\n}\n\n.MiniAssetBox {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.MiniAssetBox:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.MiniAssetBox:active, .MiniAssetBox:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.MiniAssetBox:focus > *, .MiniAssetBox:active > * {\n    filter: brightness(100%);\n}\n\n.MiniAssetBox:hover > * {\n    filter: brightness(150%);\n}\n\n/********** .DockerLeft / .DockerRight **********/\n\n.DockerCorner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* DockerCorner */\n    background: transparent;\n}\n\n.DockerTopLeft {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.DockerTopRight {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.DockerBottomLeft {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.DockerBottomRight {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/********** .FlexBox **********/\n\n.FlexBox {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** .Row **********/\n\n.Row {\n    width: 100%;\n    padding: 0 var(--border-small);\n    margin: var(--pad-x-small) 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** .ShadowBox **********/\n\n.ShadowBox { /* Affects Toolbar Icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.ShadowBox.NoShadow {\n    width: 100%;\n    height: 100%;\n}\n\n.ShadowBox:not(.NoShadow) > * {\n    filter: var(--drop-shadow);\n}\n\n/********** .VectorBox **********/\n\n.VectorBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.EnlargeIcon {\n    position: absolute;\n    overflow: hidden;\n    left: -20%;\n    top: -20%;\n    width: 140%;\n    height: 140%;\n}\n";
var stylesheet$7="/********** .AbsoluteBox **********/\n\n.AbsoluteBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** .AssetBox / .MiniAssetBox **********/\n\n.AssetBox {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n\n    outline: none; /* for macos */\n}\n\n.MiniAssetBox {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.MiniAssetBox:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.MiniAssetBox:active, .MiniAssetBox:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.MiniAssetBox:focus > *, .MiniAssetBox:active > * {\n    filter: brightness(100%);\n}\n\n.MiniAssetBox:hover > * {\n    filter: brightness(150%);\n}\n\n/********** .DockerLeft / .DockerRight **********/\n\n.DockerCorner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* DockerCorner */\n    background: transparent;\n}\n\n.DockerTopLeft {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.DockerTopRight {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.DockerBottomLeft {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.DockerBottomRight {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/********** .FlexBox **********/\n\n.FlexBox {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** .Row **********/\n\n.Row {\n    width: 100%;\n    padding: 0 var(--border-small);\n    margin: var(--pad-x-small) 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** .ShadowBox **********/\n\n.ShadowBox { /* Affects Toolbar Icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.ShadowBox.NoShadow {\n    width: 100%;\n    height: 100%;\n}\n\n.ShadowBox:not(.NoShadow) > * {\n    filter: var(--drop-shadow);\n}\n\n/********** .VectorBox **********/\n\n.VectorBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.EnlargeIcon {\n    position: absolute;\n    overflow: hidden;\n    left: -20%;\n    top: -20%;\n    width: 140%;\n    height: 140%;\n}\n";
styleInject(css_248z$7);

var css_248z$6 = "/********** .MenuShow (Show menu that was previously hidden) **********/\n\n.Menu.MenuShow {\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n    pointer-events: auto;\n}\n\n/********** .Menu **********/\n\n/* Normal Menu Styling */\n.Menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    border: 1px solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.Menu:not(.MenuShow).SlideDown {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.Menu:not(.MenuShow).SlideUp {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.SelectMenu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* SelectMenu */\n}\n\n/* Menu Item */\n.MenuItem {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.MenuItem:not(.Disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.MenuIcon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    flex: 0 0 auto;\n    filter: var(--drop-shadow);\n}\n\n/* Text */\n.MenuText {\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.MenuShortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.MenuShortcutCharacter {\n    /* background-color: blueviolet;\n    border: solid 1px; */\n    text-align: center;\n}\n\n/* Separator */\n.MenuSeparator {\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.SubMenuItem::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.SubMenuItem:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.MenuItem .Menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.MenuMouseTriangle {\n    position: absolute;\n}\n\n.MenuRight {\n    text-align: left;\n    vertical-align: middle;\n    width: 50%;\n}\n\n/************ .ToolbarButton **********/\n\n.ToolbarButton {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.ButtonBackground {\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none; /* for macos */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n    z-index: -1;\n}\n\n/* Hover */\n.ToolbarButton:not(.Selected):enabled:hover .ButtonBackground {\n    filter: brightness(125%);\n}\n\n/* Active / Selected */\n.ToolbarButton:not(.Selected):enabled:active,\n.ToolbarButton.Selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.ToolbarButton:not(.Selected):enabled:active .ButtonBackground,\n.ToolbarButton.Selected:enabled .ButtonBackground {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Gray Background */\n.GrayButton:enabled .ButtonBackground {\n    filter: grayscale(90%);\n}\n.GrayButton:not(.Selected):enabled:hover .ButtonBackground {\n    filter: brightness(125%) grayscale(90%);\n}\n.GrayButton:not(.Selected):enabled:active .ButtonBackground,\n.GrayButton.Selected:enabled .ButtonBackground {\n    filter: brightness(50%) grayscale(90%);\n}\n\n/* Complement Background */\n.ComplementButton:enabled .ButtonBackground {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--complement), 0.9), rgba(var(--complement), 0.65));\n}\n\n/* Disabled Button */\n.ToolbarButton:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    background-image: linear-gradient(to right, rgba(var(--complement), 0.05), rgba(var(--complement), 0.05));\n    box-shadow: none;\n}\n.ToolbarButton:disabled {\n    filter: none;\n}\n.ToolbarButton:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.ButtonLeft, .ButtonLeft .ButtonBackground {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15),\n        inset var(--pixel) 0 var(--pixel) rgba(var(--black), 0.15);\n}\n.ButtonMiddle, .ButtonMiddle .ButtonBackground {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15);\n}\n.ButtonRight, .ButtonRight .ButtonBackground {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15),\n        inset var(--minus) 0 var(--pixel) rgba(var(--white), 0.15);\n}\n\n/********** .ToolbarSeparator / .ToolbarSpacer **********/\n\n.ToolbarSeparator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.ToolbarSpacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
var stylesheet$6="/********** .MenuShow (Show menu that was previously hidden) **********/\n\n.Menu.MenuShow {\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n    pointer-events: auto;\n}\n\n/********** .Menu **********/\n\n/* Normal Menu Styling */\n.Menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    border: 1px solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.Menu:not(.MenuShow).SlideDown {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.Menu:not(.MenuShow).SlideUp {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.SelectMenu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* SelectMenu */\n}\n\n/* Menu Item */\n.MenuItem {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.MenuItem:not(.Disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.MenuIcon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    flex: 0 0 auto;\n    filter: var(--drop-shadow);\n}\n\n/* Text */\n.MenuText {\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.MenuShortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.MenuShortcutCharacter {\n    /* background-color: blueviolet;\n    border: solid 1px; */\n    text-align: center;\n}\n\n/* Separator */\n.MenuSeparator {\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.SubMenuItem::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.SubMenuItem:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.MenuItem .Menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.MenuMouseTriangle {\n    position: absolute;\n}\n\n.MenuRight {\n    text-align: left;\n    vertical-align: middle;\n    width: 50%;\n}\n\n/************ .ToolbarButton **********/\n\n.ToolbarButton {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.ButtonBackground {\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none; /* for macos */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n    z-index: -1;\n}\n\n/* Hover */\n.ToolbarButton:not(.Selected):enabled:hover .ButtonBackground {\n    filter: brightness(125%);\n}\n\n/* Active / Selected */\n.ToolbarButton:not(.Selected):enabled:active,\n.ToolbarButton.Selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.ToolbarButton:not(.Selected):enabled:active .ButtonBackground,\n.ToolbarButton.Selected:enabled .ButtonBackground {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Gray Background */\n.GrayButton:enabled .ButtonBackground {\n    filter: grayscale(90%);\n}\n.GrayButton:not(.Selected):enabled:hover .ButtonBackground {\n    filter: brightness(125%) grayscale(90%);\n}\n.GrayButton:not(.Selected):enabled:active .ButtonBackground,\n.GrayButton.Selected:enabled .ButtonBackground {\n    filter: brightness(50%) grayscale(90%);\n}\n\n/* Complement Background */\n.ComplementButton:enabled .ButtonBackground {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--complement), 0.9), rgba(var(--complement), 0.65));\n}\n\n/* Disabled Button */\n.ToolbarButton:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    background-image: linear-gradient(to right, rgba(var(--complement), 0.05), rgba(var(--complement), 0.05));\n    box-shadow: none;\n}\n.ToolbarButton:disabled {\n    filter: none;\n}\n.ToolbarButton:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.ButtonLeft, .ButtonLeft .ButtonBackground {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15),\n        inset var(--pixel) 0 var(--pixel) rgba(var(--black), 0.15);\n}\n.ButtonMiddle, .ButtonMiddle .ButtonBackground {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15);\n}\n.ButtonRight, .ButtonRight .ButtonBackground {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n    box-shadow: /* pop-out-shadow */\n        inset 0 var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset 0 var(--minus) var(--pixel) rgba(var(--black), 0.15),\n        inset var(--minus) 0 var(--pixel) rgba(var(--white), 0.15);\n}\n\n/********** .ToolbarSeparator / .ToolbarSpacer **********/\n\n.ToolbarSeparator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.ToolbarSpacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
styleInject(css_248z$6);

var css_248z$5 = "/********** .Panel / .SimplePanel / .FancyPanel(s) **********/\n\n.Panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    z-index: 0; /* Panel */\n}\n\n.Panel.BringToTop {\n    z-index: 1; /* Panel.BringToTop */\n}\n\n.SimplePanel {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.FancyPanelOuter {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.FancyPanelBorder {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.FancyPanelInside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** .Scroller ********/\n\n.Scroller {\n    overflow: auto;\n}\n\n/********** .Shrinkable **********/\n\n.Shrinkable {\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-small);\n    margin-bottom: var(--pad-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n    overflow: hidden;\n}\n\n.ShrinkTitle {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n\n    font-size: 110%;\n\n    cursor: pointer;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    padding-left: 0.5em;\n    padding-right: var(--pad-large);\n}\n.ShrinkTitle:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.Shrinkable:not(.Expanded) .ShrinkTitle {\n    border-bottom: 0;\n}\n.Shrinkable.Expanded .ShrinkTitle {\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.4);\n}\n\n.ShrinkIcon > * {\n    filter: var(--drop-shadow);\n}\n\n.ShrinkIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.ShrinkText {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.5em;\n}\n\n.ShrinkArrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    transform: translateY(25%);\n    z-index: 101; /* ShrinkArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.Shrinkable.Expanded .ShrinkTitle .ShrinkArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.ShrinkTitle:hover .ShrinkArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n\n.ShrinkBody {\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n    pointer-events: auto;\n}\n.Shrinkable:not(.Expanded) .ShrinkBody {\n    pointer-events: none;\n    display: none;\n}\n\n/********** .Tabbed **********/\n\n.Tabbed {\n    position: relative;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.TabPanels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.TabPanels .Panel.Hidden {\n    display: none;\n    pointer-events: none;\n}\n\n.TabPanels .Panel:not(.Hidden) {\n    display: block;\n    pointer-events: auto;\n}\n\n/* Collection of Tabs */\n.Tabs {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n}\n\n.Tabs.LeftSide {\n    left: calc((var(--tab-size) / -2.0) + 0.3em);\n}\n\n.Tabs.RightSide {\n    left: calc(100% - ((var(--tab-size) / 2.0) + 0.65em));\n}\n\n.TabButton {\n    --tab-timing: 200ms;\n\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-radius: var(--tab-size);\n    color: rgba(var(--text), 1.0);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.TabButton.Selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n.TabButton > .VectorBox {\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.TabButton:hover > * {\n    filter: brightness(120%);\n}\n\n.TabButton.Selected:hover > * {\n    filter: brightness(120%);\n}\n\n.TabButton.Selected > * {\n    filter: none;\n}\n\n/* On Click */\n.TabButton:active > .TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--black), 0.5),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.25);\n}\n.TabButton:active > .VectorBox {\n    transform: translate(-1px, 1px);\n}\n\n/* Border, shadow holder */\n.TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--white), 0.25),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.5);\n    cursor: pointer;\n    position: absolute;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    border: 0.21em solid rgb(var(--icon));\n    border-radius: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.TabButton.Selected .TabIcon {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/* Tab Image */\n.TabButton .VectorBox {\n    position: absolute;\n    border-radius: var(--tab-size);\n    background-color: rgba(var(--darklight), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.5));\n    width: 95%;\n    height: 95%;\n    overflow: hidden;\n}\n\n/* Tab Image SVG Shadow */\n.TabButton .VectorBox > * {\n    filter: var(--drop-shadow);\n}\n\n/* Title Bar Class for top of Tabbed Panel */\n.TabTitle {\n    --font-size-increase:   1.3;\n    --border-radius-title:  0.35714em;\n\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--border-radius-title) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-small);\n    margin-top: var(--pad-micro);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n}\n\n/********** .Titled **********/\n\n.Titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.TitleArrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.75em;\n    transform: translateY(25%);\n    z-index: 101; /* TitleArrow */\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.Titled.Expanded .TabTitle .TitleArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.TabTitle:hover .TitleArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n";
var stylesheet$5="/********** .Panel / .SimplePanel / .FancyPanel(s) **********/\n\n.Panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    z-index: 0; /* Panel */\n}\n\n.Panel.BringToTop {\n    z-index: 1; /* Panel.BringToTop */\n}\n\n.SimplePanel {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.FancyPanelOuter {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.FancyPanelBorder {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.FancyPanelInside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** .Scroller ********/\n\n.Scroller {\n    overflow: auto;\n}\n\n/********** .Shrinkable **********/\n\n.Shrinkable {\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-small);\n    margin-bottom: var(--pad-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n    overflow: hidden;\n}\n\n.ShrinkTitle {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n\n    font-size: 110%;\n\n    cursor: pointer;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    padding-left: 0.5em;\n    padding-right: var(--pad-large);\n}\n.ShrinkTitle:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.Shrinkable:not(.Expanded) .ShrinkTitle {\n    border-bottom: 0;\n}\n.Shrinkable.Expanded .ShrinkTitle {\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.4);\n}\n\n.ShrinkIcon > * {\n    filter: var(--drop-shadow);\n}\n\n.ShrinkIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.ShrinkText {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.5em;\n}\n\n.ShrinkArrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    transform: translateY(25%);\n    z-index: 101; /* ShrinkArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.Shrinkable.Expanded .ShrinkTitle .ShrinkArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.ShrinkTitle:hover .ShrinkArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n\n.ShrinkBody {\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n    pointer-events: auto;\n}\n.Shrinkable:not(.Expanded) .ShrinkBody {\n    pointer-events: none;\n    display: none;\n}\n\n/********** .Tabbed **********/\n\n.Tabbed {\n    position: relative;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.TabPanels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.TabPanels .Panel.Hidden {\n    display: none;\n    pointer-events: none;\n}\n\n.TabPanels .Panel:not(.Hidden) {\n    display: block;\n    pointer-events: auto;\n}\n\n/* Collection of Tabs */\n.Tabs {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n}\n\n.Tabs.LeftSide {\n    left: calc((var(--tab-size) / -2.0) + 0.3em);\n}\n\n.Tabs.RightSide {\n    left: calc(100% - ((var(--tab-size) / 2.0) + 0.65em));\n}\n\n.TabButton {\n    --tab-timing: 200ms;\n\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-radius: var(--tab-size);\n    color: rgba(var(--text), 1.0);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.TabButton.Selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n.TabButton > .VectorBox {\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.TabButton:hover > * {\n    filter: brightness(120%);\n}\n\n.TabButton.Selected:hover > * {\n    filter: brightness(120%);\n}\n\n.TabButton.Selected > * {\n    filter: none;\n}\n\n/* On Click */\n.TabButton:active > .TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--black), 0.5),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.25);\n}\n.TabButton:active > .VectorBox {\n    transform: translate(-1px, 1px);\n}\n\n/* Border, shadow holder */\n.TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--white), 0.25),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.5);\n    cursor: pointer;\n    position: absolute;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    border: 0.21em solid rgb(var(--icon));\n    border-radius: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.TabButton.Selected .TabIcon {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/* Tab Image */\n.TabButton .VectorBox {\n    position: absolute;\n    border-radius: var(--tab-size);\n    background-color: rgba(var(--darklight), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.5));\n    width: 95%;\n    height: 95%;\n    overflow: hidden;\n}\n\n/* Tab Image SVG Shadow */\n.TabButton .VectorBox > * {\n    filter: var(--drop-shadow);\n}\n\n/* Title Bar Class for top of Tabbed Panel */\n.TabTitle {\n    --font-size-increase:   1.3;\n    --border-radius-title:  0.35714em;\n\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--border-radius-title) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-small);\n    margin-top: var(--pad-micro);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n}\n\n/********** .Titled **********/\n\n.Titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.TitleArrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.75em;\n    transform: translateY(25%);\n    z-index: 101; /* TitleArrow */\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.Titled.Expanded .TabTitle .TitleArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.TabTitle:hover .TitleArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "/***** Gooey Panel *****/\n\n.Gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
var stylesheet$4="/***** Gooey Panel *****/\n\n.Gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
styleInject(css_248z$4);

var css_248z$3 = "/********** .PropertyList **********/\n\n.PropertyList {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.PropertyHeaderTitle {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.5em);\n    overflow: hidden;\n    font-size: 110%;\n    background-color: rgba(var(--icon), 0.35);\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--radius-large);\n    margin: var(--pad-small) 0.25em;\t\t/* vertical | horizontal */\n    padding: var(--pad-small) 0.5em;\t\t/* vertical | horizontal */\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.PropertyHeaderIcon > * {\n    filter: var(--drop-shadow);\n}\n\n.PropertyHeaderIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.PropertyHeaderText {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.PropertyRow {\n    position: relative;\n    min-height: 1.7em;\n}\n\n.PropertyRow:hover .PropertyLeft {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.PropertyRow:hover .PropertyLeft .Image {\n    filter: brightness(250%);\n}\n\n.PropertySpace {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.PropertyLeft {\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: 1.7em;\n\n    text-align: left;\n    text-transform: capitalize;\n}\n.LeftTabSpacing {\n    padding-left: 1em;\n}\n\n.PropertyRight {\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: 1.7em;\n}\n\n.PropertyLeftHalf { width: 50% !important; }\n.PropertyLeftFifth { width: 45% !important; }\n.PropertyLeftThird { width: 30% !important; }\n\n.PropertyRightHalf { width: calc(50% - var(--pad-small)) !important; }\n.PropertyRightFifth { width: calc(55% - var(--pad-small)) !important; }\n.PropertyRightThird { width: calc(70% - var(--pad-small)) !important; }\n\n.PropertyFull {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: 1.7em;\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.PropertyFull > * {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton),\n.PropertyRight > .Input:not(.PropertyTinyRow),\n.PropertyRight > .Number:not(.PropertyTinyRow),\n.PropertyRight > .SlideContainer:not(.PropertyTinyRow) {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton):not(.MenuButton) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.PropertyTinyRow {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: 1.7em;\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of PropertyList, fixed size */\n.PropertyButton {\n    position: relative;\n    height: 1.7em;\n    width: 2.1em;\n}\n\n/* Button appearing in right column of PropertyList, flex box */\n.PropertyButtonFlex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: 1.7em;\n    white-space: nowrap;\n}\n\n/********** .TreeList **********/\n\n.TreeList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: auto;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n\n    margin: var(--pad-x-small);\n\n    cursor: default;\n    outline: none; /* for macos */\n}\n\n/********** .TreeList .Option **********/\n\n.TreeList .Option {\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.TreeList .Option:hover {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.TreeList .Option.Active {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.TreeList .Option.ActiveTop {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.TreeList .Option.ActiveBottom {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.TreeList .Option.Drag:not(.Active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.TreeList .Option.DragTop:not(.Active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.TreeList .Option.DragBottom:not(.Active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** .TreeList .Opener **********/\n\n.TreeList .Opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.TreeList .Opener.Open:after {\n    content: '-';\n}\n\n.TreeList .Opener.Closed:after {\n    content: '+';\n}\n";
var stylesheet$3="/********** .PropertyList **********/\n\n.PropertyList {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.PropertyHeaderTitle {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.5em);\n    overflow: hidden;\n    font-size: 110%;\n    background-color: rgba(var(--icon), 0.35);\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--radius-large);\n    margin: var(--pad-small) 0.25em;\t\t/* vertical | horizontal */\n    padding: var(--pad-small) 0.5em;\t\t/* vertical | horizontal */\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.PropertyHeaderIcon > * {\n    filter: var(--drop-shadow);\n}\n\n.PropertyHeaderIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.PropertyHeaderText {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.PropertyRow {\n    position: relative;\n    min-height: 1.7em;\n}\n\n.PropertyRow:hover .PropertyLeft {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.PropertyRow:hover .PropertyLeft .Image {\n    filter: brightness(250%);\n}\n\n.PropertySpace {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.PropertyLeft {\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: 1.7em;\n\n    text-align: left;\n    text-transform: capitalize;\n}\n.LeftTabSpacing {\n    padding-left: 1em;\n}\n\n.PropertyRight {\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: 1.7em;\n}\n\n.PropertyLeftHalf { width: 50% !important; }\n.PropertyLeftFifth { width: 45% !important; }\n.PropertyLeftThird { width: 30% !important; }\n\n.PropertyRightHalf { width: calc(50% - var(--pad-small)) !important; }\n.PropertyRightFifth { width: calc(55% - var(--pad-small)) !important; }\n.PropertyRightThird { width: calc(70% - var(--pad-small)) !important; }\n\n.PropertyFull {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: 1.7em;\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.PropertyFull > * {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton),\n.PropertyRight > .Input:not(.PropertyTinyRow),\n.PropertyRight > .Number:not(.PropertyTinyRow),\n.PropertyRight > .SlideContainer:not(.PropertyTinyRow) {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton):not(.MenuButton) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.PropertyTinyRow {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: 1.7em;\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of PropertyList, fixed size */\n.PropertyButton {\n    position: relative;\n    height: 1.7em;\n    width: 2.1em;\n}\n\n/* Button appearing in right column of PropertyList, flex box */\n.PropertyButtonFlex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: 1.7em;\n    white-space: nowrap;\n}\n\n/********** .TreeList **********/\n\n.TreeList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: auto;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.75); /* inner-glow */\n\n    margin: var(--pad-x-small);\n\n    cursor: default;\n    outline: none; /* for macos */\n}\n\n/********** .TreeList .Option **********/\n\n.TreeList .Option {\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.TreeList .Option:hover {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.TreeList .Option.Active {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.TreeList .Option.ActiveTop {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.TreeList .Option.ActiveBottom {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.TreeList .Option.Drag:not(.Active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.TreeList .Option.DragTop:not(.Active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.TreeList .Option.DragBottom:not(.Active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** .TreeList .Opener **********/\n\n.TreeList .Opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.TreeList .Opener.Open:after {\n    content: '-';\n}\n\n.TreeList .Opener.Closed:after {\n    content: '+';\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/***** GRAPH *****/\n\n.GraphInput, .GraphGrid, .GraphNodes, .GraphLines {\n    position: absolute;\n    top: 0;\n\tleft: 0;\n    width: 100%;\n    height: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n/* Div used for processing user input */\n.GraphInput {\n    background: transparent;\n    z-index: -1; /* GraphInput */\n}\n\n/* Background div that holds tiled grid */\n.GraphGrid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.GraphNodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.GraphLines {\n    pointer-events: none;\n}\n\n/* Shows rubber band box */\n.GraphBandBox {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** MINIMAP *****/\n\n.MiniMap {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.MiniMapCanvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.MiniMapResizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/***** NODE *****/\n\n.Node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.Node:hover, .Node.NodeSelected {\n    filter: brightness(120%);\n}\n\n.Node.NodeSelected {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n\n.Node.TooSmall .Resizer {\n    pointer-events: none;\n}\n\n.NodePanel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n\tpadding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.NodeBorder {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n\tpadding: 0;\n}\n\n.Node.NodeSelected .NodeBorder {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.NodeResizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** NODE HEADER *****/\n\n.NodeHeaderTitle {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.NodeHeaderIcon .VectorBox {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-x-small) rgb(var(--shadow)));\n}\n\n.NodeHeaderIcon .Image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.NodeHeaderIcon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.NodeHeaderText {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** NODE ITEM *****/\n\n.NodeInterior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.NodeItemList {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.NodeItem {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.NodeLeft {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.NodeRight {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.NodeItemPoint {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* NodeItemPoint */\n}\n\n.NodeLeft .NodeItemPoint {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.NodeRight .NodeItemPoint {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.NodeItemPoint::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.NodeItem.ItemConnected .NodeItemPoint::after,\n.NodeItem .NodeItemPoint.ActiveItem::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.Node.NodeSelected .NodeItemPoint {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.NodeItemPoint.HoverPoint, .Node.NodeSelected .NodeItemPoint.HoverPoint,\n.NodeItemPoint.ActiveItem, .Node.NodeSelected .NodeItemPoint.ActiveItem {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item detacher */\n.NodeItemDetach {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.NodeRight .NodeItemDetach {\n    left: calc(100% + 0.7em);\n}\n.NodeLeft .NodeItemDetach {\n    left: calc(0em - 1.7em);\n}\n\n/* Increases mouse over hit area */\n.NodeItemDetach::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.NodeItem.ItemConnected .NodeItemDetach {\n    pointer-events: all;\n}\n\n.NodeItem.ItemConnected:hover .NodeItemDetach {\n    opacity: 1;\n}\n\n.NodeItemDetach .Image {\n    filter: var(--drop-shadow);\n}\n\n.NodeItem.ItemConnected .NodeItemDetach:hover {\n    filter: brightness(100%);\n}\n";
var stylesheet$2="/***** GRAPH *****/\n\n.GraphInput, .GraphGrid, .GraphNodes, .GraphLines {\n    position: absolute;\n    top: 0;\n\tleft: 0;\n    width: 100%;\n    height: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n/* Div used for processing user input */\n.GraphInput {\n    background: transparent;\n    z-index: -1; /* GraphInput */\n}\n\n/* Background div that holds tiled grid */\n.GraphGrid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.GraphNodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.GraphLines {\n    pointer-events: none;\n}\n\n/* Shows rubber band box */\n.GraphBandBox {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** MINIMAP *****/\n\n.MiniMap {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.MiniMapCanvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.MiniMapResizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/***** NODE *****/\n\n.Node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.Node:hover, .Node.NodeSelected {\n    filter: brightness(120%);\n}\n\n.Node.NodeSelected {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n\n.Node.TooSmall .Resizer {\n    pointer-events: none;\n}\n\n.NodePanel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n\tpadding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.NodeBorder {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n\tpadding: 0;\n}\n\n.Node.NodeSelected .NodeBorder {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.NodeResizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** NODE HEADER *****/\n\n.NodeHeaderTitle {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.NodeHeaderIcon .VectorBox {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-x-small) rgb(var(--shadow)));\n}\n\n.NodeHeaderIcon .Image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.NodeHeaderIcon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.NodeHeaderText {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** NODE ITEM *****/\n\n.NodeInterior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.NodeItemList {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.NodeItem {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.NodeLeft {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.NodeRight {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.NodeItemPoint {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* NodeItemPoint */\n}\n\n.NodeLeft .NodeItemPoint {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.NodeRight .NodeItemPoint {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.NodeItemPoint::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.NodeItem.ItemConnected .NodeItemPoint::after,\n.NodeItem .NodeItemPoint.ActiveItem::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.Node.NodeSelected .NodeItemPoint {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.NodeItemPoint.HoverPoint, .Node.NodeSelected .NodeItemPoint.HoverPoint,\n.NodeItemPoint.ActiveItem, .Node.NodeSelected .NodeItemPoint.ActiveItem {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item detacher */\n.NodeItemDetach {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.NodeRight .NodeItemDetach {\n    left: calc(100% + 0.7em);\n}\n.NodeLeft .NodeItemDetach {\n    left: calc(0em - 1.7em);\n}\n\n/* Increases mouse over hit area */\n.NodeItemDetach::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.NodeItem.ItemConnected .NodeItemDetach {\n    pointer-events: all;\n}\n\n.NodeItem.ItemConnected:hover .NodeItemDetach {\n    opacity: 1;\n}\n\n.NodeItemDetach .Image {\n    filter: var(--drop-shadow);\n}\n\n.NodeItem.ItemConnected .NodeItemDetach:hover {\n    filter: brightness(100%);\n}\n";
styleInject(css_248z$2);

var css_248z$1 = "/***** .PanelButton *****/\n\n.PanelButton {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(0, 0, 0, 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 101; /* Panel Button */\n}\n\n.PanelButton:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.PanelButton:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/***** .CloseButton *****/\n\n.CloseButton {\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #e24c4b;\n    outline: none;\n    opacity: 0;\n    overflow: hidden;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n.CloseButton.ItemShown {\n    background-color: #e24c4b;\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.CloseButton:hover {\n    background-color: #e24c4b;\n}\n\n.CloseButton.ItemHidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.CloseImage {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.CloseButton:hover .CloseImage {\n    opacity: 1.0;\n}\n\n/***** .Resizeable *****/\n\n.Resizer {\n    position: absolute;\n    pointer-events: all;\n    opacity: 0.0;                           /* NOTE: Change to 1.0 to see 'Resizers' */\n    z-index: 99; /* Resizer */\n}\n\n.ResizerLeft {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.ResizerTopLeft {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerTop {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.ResizerTopRight {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerRight {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.ResizerBottomRight {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerBottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.ResizerBottomLeft {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n/***** .TitleBar *****/\n\n.TitleBar {\n    color: rgba(var(--highlight), 0.75);\n    border-radius: 9999px;\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    text-shadow: var(--minus) calc(var(--pixel) * 1.5) rgba(var(--shadow), 0.5);\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/***** .Window *****/\n\n.Window {\n    position: fixed;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: 200; /* Window */\n}\n\n.Window.BringToTop {\n    z-index: 201; /* Window */\n}\n\n.Window.BringToTop .TitleBar {\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n}\n";
var stylesheet$1="/***** .PanelButton *****/\n\n.PanelButton {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(0, 0, 0, 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 101; /* Panel Button */\n}\n\n.PanelButton:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.PanelButton:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/***** .CloseButton *****/\n\n.CloseButton {\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #e24c4b;\n    outline: none;\n    opacity: 0;\n    overflow: hidden;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n.CloseButton.ItemShown {\n    background-color: #e24c4b;\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.CloseButton:hover {\n    background-color: #e24c4b;\n}\n\n.CloseButton.ItemHidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.CloseImage {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.CloseButton:hover .CloseImage {\n    opacity: 1.0;\n}\n\n/***** .Resizeable *****/\n\n.Resizer {\n    position: absolute;\n    pointer-events: all;\n    opacity: 0.0;                           /* NOTE: Change to 1.0 to see 'Resizers' */\n    z-index: 99; /* Resizer */\n}\n\n.ResizerLeft {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.ResizerTopLeft {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerTop {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.ResizerTopRight {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerRight {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.ResizerBottomRight {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerBottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.ResizerBottomLeft {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n/***** .TitleBar *****/\n\n.TitleBar {\n    color: rgba(var(--highlight), 0.75);\n    border-radius: 9999px;\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    text-shadow: var(--minus) calc(var(--pixel) * 1.5) rgba(var(--shadow), 0.5);\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/***** .Window *****/\n\n.Window {\n    position: fixed;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: 200; /* Window */\n}\n\n.Window.BringToTop {\n    z-index: 201; /* Window */\n}\n\n.Window.BringToTop .TitleBar {\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n}\n";
styleInject(css_248z$1);

var css_248z = ".Tooltip, .InfoBox {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.Tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.Tooltip.Updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.InfoBox {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.InfoBox.Updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
var stylesheet=".Tooltip, .InfoBox {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.Tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.Tooltip.Updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.InfoBox {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.InfoBox.Updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
styleInject(css_248z);

export { ALIGN, AbsoluteBox, AssetBox, BACKGROUNDS, Break, Button, CLOSE_SIDES, CORNERS, Canvas, Checkbox, Color, ColorScheme, Css, Div, Docker, Dropdown, Element, FlexBox, FlexSpacer, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, Gooey, Graph, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, Image, Interaction, Iris, LEFT_SPACING, Menu, MenuItem, MenuSeparator, MenuShortcut, NODE_TYPES, Node, NodeItem, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES, POSITION, PROPERTY_SIZE, Panel, Popper, PropertyList, RESIZERS, RESIZE_MODE, Row, ShadowBox, Shrinkable, Slider, Span, TAB_SIDES, TOOLTIP_Y_OFFSET, TRAIT, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, ToolbarSpacer, TreeList, Utils, VectorBox, Window, tooltipper };
