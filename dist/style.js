"use strict";
var PageStyler = /** @class */ (function () {
    function PageStyler() {
        // Theme settings
        this.lightThemeText = '#000';
        this.darkThemeText = '#fff';
        this.lightTheme = '#F9F6EE';
        this.darkTheme = '#333333';
        // global settings
        this.borderVal = '1px solid #000';
        this.borderRadVal = '3px';
        this.buttonPadding = '0.5rem';
        this.shadowVal = '2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.44)';
        this.cardPadding = '1rem';
        this.cardBody = document.createElement('div');
        this.cardBody.classList.add('card');
        this.cardBody.innerHTML =
            "<h1>Card Header</h1>\n\t\t<p>This isnt a card</p>\n\t\t<button>Button</button>";
        document.body.appendChild(this.cardBody);
        this.buttons = this.cardBody.querySelector('button');
    }
    PageStyler.prototype.applyCardStyling = function () {
        this.cardBody.style.border = this.borderVal;
        this.cardBody.style.borderRadius = this.borderRadVal;
        this.cardBody.style.boxShadow = this.shadowVal;
        this.cardBody.style.padding = this.cardPadding;
        this.cardBody.style.width = '10%';
    };
    PageStyler.prototype.applyButtonStyling = function () {
        this.buttons.style.padding = this.buttonPadding;
        this.buttons.style.boxShadow = this.shadowVal;
    };
    return PageStyler;
}());
var pageStyler = new PageStyler();
pageStyler.applyCardStyling();
pageStyler.applyButtonStyling();
//# sourceMappingURL=style.js.map