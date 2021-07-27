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

  render() {
    const headerEl = this.createRootElement('header');
    const topConEl = this.createElement('div', false, [
      new ElementAttribute('id', 'headerTopCon'),
    ]);
    this.h1El = this.createElement('h1');
    this.h1El.textContent = this.#title;

    const navBarEl = this.createElement('div', false, [
      new ElementAttribute('id', 'navbar'),
    ]);

    topConEl.append(this.h1El, navBarEl);
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
