class MyDrawer extends HTMLElement {

    static get observedAttributes() {
        return ['disabled', 'open'];
    }

    get open() {
        return this.hasAttribute("open");
    }

    set open(val) {
        if (val) {
            this.setAttribute("open", "");
        } else {
            this.removeAttribute("open");
        }
        this.toggleDrawer();
    }

    get disabled() {
        return this.hasAttribute("disabled");
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute("disabled", "");
        } else {
            this.removeAttribute("disabled");
        }
    }

    constructor() {
        super();

        this.querySelector('.open').addEventListener('click', event => {
            if(this.disabled) {
                return;
            } else {
                this.open = !this.open;
            }
        })
    }

    toggleDrawer() {

    }
}

window.customElements.define("my-drawer", MyDrawer);
