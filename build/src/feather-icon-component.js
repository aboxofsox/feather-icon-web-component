import feather_icon from './feather-sprite.svg.proxy.js';

class FeatherIcon extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.textContent = `
            .feather {
                width: ${this.hasAttribute('width') ? this.getAttribute('width') + 'px' : '24px'};
                height: ${this.hasAttribute('height') ? this.getAttribute('height') + 'px' : '24px'};
                stroke: ${this.hasAttribute('color') ? this.getAttribute('color') : 'currentColor'};
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
            }
        `;

        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // this.svg.className = 'feather';
        this.svg.setAttribute('class', 'feather');
        
        this.use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // this.use.href = `./src/feather-sprite.svg#${this.getAttribute('icon') || 'feather'}`
        this.use.setAttribute('href', `${feather_icon}#${this.icon || 'feather'}`);

        this.svg.appendChild(this.use);

        [style, this.svg].forEach(e => shadow.appendChild(e));
        this.use.setAttribute('href', `${feather_icon}#${this.icon || 'feather'}`);
    }

    static get observedAttributes() {
        return ['icon', 'href']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name == 'icon') {
            this.use.setAttribute('href', `${feather_icon}#${newValue}`);
        }
    }
}

customElements.define('feather-icon', FeatherIcon);