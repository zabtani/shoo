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
    button.textContent = 'Go Back';
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
  toggleDisplay() {
    this.topConEl.classList.toggle('folded');
    document.body.style.overflow = this.topConEl.classList.contains('folded')
      ? 'scroll'
      : 'hidden';
  }
  #generate_mobileHamburger() {
    const mobileMenuButton = this.createElement('div', false, [
      new ElementAttribute('id', 'hamburger'),
    ]);
    const burgerLine1 = this.createElement('div', 'hamburger-line');
    const burgerLine2 = this.createElement('div', 'hamburger-line');
    const burgerLine3 = this.createElement('div', 'hamburger-line');
    mobileMenuButton.append(burgerLine1, burgerLine2, burgerLine3);
    mobileMenuButton.addEventListener('click', () => {
      this.toggleDisplay();
      const cartIsOpen = App.cart.cartEl.classList.contains('active');
      cartIsOpen && App.cart.toggleDisplay();
    });
    return mobileMenuButton;
  }
  render() {
    const headerEl = this.createRootElement('header');
    this.topConEl = this.createElement('div', 'folded', [
      new ElementAttribute('id', 'headerTopCon'),
    ]);
    this.h1El = this.createElement('h1');
    this.h1El.textContent = this.#title;

    const navBarEl = this.createElement('div', false, [
      new ElementAttribute('id', 'navbar'),
    ]);
    const hamburgerEl = this.#generate_mobileHamburger();
    this.topConEl.append(hamburgerEl, this.h1El, navBarEl);
    const bottomConEl = this.createElement('div', false, [
      new ElementAttribute('id', 'headerBottomCon'),
    ]);
    const iconEl = this.createElement('i', 'fas fa-search');
    const searchBarConEl = this.createElement('div', 'searchBarCon');
    this.#searchBarEl = this.#generate_searchBar();
    this.#mainBackButtonEl = this.#generate_mainBackButton();
    searchBarConEl.append(iconEl, this.#searchBarEl);
    bottomConEl.append(searchBarConEl, this.#mainBackButtonEl);
    headerEl.append(this.topConEl, bottomConEl);
  }
}
