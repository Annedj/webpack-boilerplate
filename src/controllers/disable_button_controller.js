import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['btn', 'link']

  connect() {
    console.log("Hello from your first Stimulus controller");
  }

  disable() {
    this.btnTarget.setAttribute('disabled', '');
    this.btnTarget.innerText = 'Bingo!';
    this.linkTarget.classList.remove('d-none');
  }

  reset() {
    this.btnTarget.removeAttribute('disabled');
    this.btnTarget.innerText = 'Click me!';
    this.linkTarget.classList.add('d-none');
  }
}
