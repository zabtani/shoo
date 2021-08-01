class Header extends Component {
  #searchBarEl;
  #mainBackButtonEl;
  #title;
  constructor(renderHook, title) {
    super(renderHook, false);
    this.#title = title;
    this.render();
  }

  #generate_searchBar() {
    const input = this.createElement('input', 'searchBar', [
      new ElementAttribute('type', 'text'),
      new ElementAttribute('id', 'mainSearchBar'),
    ]);
    input.addEventListener('input', () => {
      let backBtnStatus = true;
      if (input.value === '') {
        backBtnStatus = false;
      }
      this.revealMainBackButton(backBtnStatus);
      App.filterProdList(input.value);
    });
    return input;
  }
  #generate_mainBackButton() {
    const button = this.createElement('button', 'mainBackButton', [
      new ElementAttribute('id', 'mainBackBtn'),
    ]);
    button.textContent = 'Back to all products';
    button.addEventListener('click', () => {
      button.classList.remove('visible');
      this.#searchBarEl.value = '';
      App.filterProdList('');
    });
    return button;
  }
  revealMainBackButton(reveal = true) {
    if (reveal) {
      this.#mainBackButtonEl.classList.add('visible');
    } else {
      this.#mainBackButtonEl.classList.remove('visible');
    }
  }
  #generate_mobileHamburger(target) {
    const mobileMenuButton = this.createElement('div', false, [
      new ElementAttribute('id', 'hamburger'),
    ]);
    const burgerLine1 = this.createElement('div', 'hamburger-line');
    const burgerLine2 = this.createElement('div', 'hamburger-line');
    const burgerLine3 = this.createElement('div', 'hamburger-line');
    mobileMenuButton.append(burgerLine1, burgerLine2, burgerLine3);
    mobileMenuButton.addEventListener('click', () => {
      target.classList.toggle('folded');
      document.body.style.overflow = target.classList.contains('folded')
        ? 'scroll'
        : 'hidden';
      const cartIsOpen = App.cart.cartEl.classList.contains('active');
      cartIsOpen && App.cart.toggleDisplay();
    });
    return mobileMenuButton;
  }
  render() {
    const headerEl = this.createRootElement('header');
    const topConEl = this.createElement('div', 'folded', [
      new ElementAttribute('id', 'headerTopCon'),
    ]);
    this.h1El = this.createElement('h1');
    this.h1El.textContent = this.#title;

    const navBarEl = this.createElement('div', false, [
      new ElementAttribute('id', 'navbar'),
    ]);
    const hamburgerEl = this.#generate_mobileHamburger(topConEl);
    topConEl.append(hamburgerEl, this.h1El, navBarEl);
    const bottomConEl = this.createElement('div', false, [
      new ElementAttribute('id', 'headerBottomCon'),
    ]);
    const iconEl = this.createElement('i', 'fas fa-search');
    this.#searchBarEl = this.#generate_searchBar();
    this.#mainBackButtonEl = this.#generate_mainBackButton();
    bottomConEl.append(this.#searchBarEl, this.#mainBackButtonEl, iconEl);
    headerEl.append(topConEl, bottomConEl);
  }
}
