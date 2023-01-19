
class Debug {

    constructor() {
        this.display = document.createElement('div');

        this.display.style.cssText = `
            position: absolute;
            left: 0;
            bottom: 0;
        `;

    }

    update() {
        this.display.innerHTML = `
            programs: ${renderer}
        `;
    }

}