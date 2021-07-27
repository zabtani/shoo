//product item original DOM creation without 'make':



/*


*/

function render() {

  const productEL = App.createElementt(['li', { class: 'product-item' }]); //
  const mainEl = App.createElementt(['div', { class: 'main-data' }]); //
  const imgConEl = App.createElement('div', false, 'img-container');
  const imgEl = document.createElement('img');
  imgEl.addEventListener('click', () => {
    this.expand();
  });
  imgEl.src = this.product.img;
  imgEl.alt = this.product.img;
  const imgIconConEl = App.createElement('div', false, 'more-de');
  const imgIconEl = App.createElement('i', false, 'fas fa-info-circle');
  imgIconConEl.append(imgIconEl);
  imgConEl.append(imgEl, imgIconConEl);
  const productTitleEl = App.createElement('h2', this.product.name, false);
  const productPriceEl = App.createElement('div', this.product.price, 'pr');
  const productDescriptionEl = App.createElement(
    'div',
    this.product.description,
    'de'
  );
  const productGenereEl = App.createElement('div', this.product.genere, 'ge');
  const productBrandEl = App.createElement('div', this.product.brand, 'br');
  const addButtonEl = App.createElement('button', 'add to cart', false);
  addButtonEl.addEventListener('click', () => {
    App.addProdToCart(this.product);
  });

  mainEl.append(
    imgConEl,
    productTitleEl,
    productPriceEl,
    productDescriptionEl,
    productGenereEl,
    productBrandEl,
    addButtonEl
  );
  const extraEl = App.createElement('div', false, 'extra-data');
  const extraInfoEl = App.createElement('p', this.product.extraData, false);
  extraEl.append(extraInfoEl);
  productEL.append(mainEl, extraEl);
  this.product.element = productEL;
  return productEL;
}

function renderheader() {
  //header element
  const headerEl = document.createElement('header'); //
  this.headerEl = headerEl; //
  //header bottom container//
  const bottomConEl = document.createElement('div'); //
  bottomConEl.id = 'h_bc'; //
  //search bar input//
  const searchBarEl = document.createElement('input'); //
  this.searchBar = searchBarEl; //
  searchBarEl.type = 'text'; //
  searchBarEl.id = 'h_bc_sb'; //
  searchBarEl.addEventListener('input', () => {
    //
    App.filterProdList(searchBarEl.value); //
  }); //
  //search icon
  const iconEl = document.createElement('i'); //
  iconEl.classList = 'fas fa-search'; //
  //navigation bar
  const navBarEl = document.createElement('div'); //
  navBarEl.id = 'nb'; //

  const h1El = document.createElement('h1'); //
  h1El.textContent = this.title; //
  const categoriesEl = this.categories();
  navBarEl.append(h1El, categoriesEl);
  bottomConEl.append(searchBarEl, iconEl);
  headerEl.append(navBarEl, bottomConEl);
  return headerEl;
}
