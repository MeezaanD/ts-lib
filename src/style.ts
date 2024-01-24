class PageStyler {
	private cardBody: HTMLElement;
	private buttons: HTMLElement;

	// Theme settings
	lightThemeText = '#000';
	darkThemeText = '#fff';
	lightTheme = '#F9F6EE';
	darkTheme = '#333333';

	// global settings
	borderVal = '1px solid #000';
	borderRadVal = '3px';
	buttonPadding = '0.5rem';
	shadowVal = '2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.44)';

	cardPadding = '1rem';

	constructor() {
		this.cardBody = document.createElement('div');
		this.cardBody.classList.add('card');
		this.cardBody.innerHTML = 
		`<h1>Card Header</h1>
		<p>This isnt a card</p>
		<button>Button</button>`
		document.body.appendChild(this.cardBody);

		this.buttons = this.cardBody.querySelector('button') as HTMLButtonElement;
		
	}

	applyCardStyling() {
		this.cardBody.style.border = this.borderVal;
		this.cardBody.style.borderRadius = this.borderRadVal;
		this.cardBody.style.boxShadow = this.shadowVal;
		this.cardBody.style.padding = this.cardPadding;
		this.cardBody.style.width = '10%'
	}

	applyButtonStyling() {
		this.buttons.style.padding = this.buttonPadding;
		this.buttons.style.boxShadow = this.shadowVal;
	}
}

const pageStyler = new PageStyler();
pageStyler.applyCardStyling();
pageStyler.applyButtonStyling();
