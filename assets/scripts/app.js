class App {
  static init() {
    this.domAnimator = new DomAnimator();
    const { cart, productsList, header } = new Shop();
    this.cart = cart;
    this.prodList = productsList;
    this.header = header;
  }

  static revealBackButton() {
    this.header.revealMainBackButton();
  }
  static currentSearchValue() {
    return this.header.searchBar.value;
  }
  static expandProductOnList(product) {
    this.prodList.expandProduct(product);
  }
  static filterProdList(searchVal, property) {
    this.prodList.filter(searchVal, property);
  }
  static addProdToCart(prod) {
    this.cart.add(prod);
  }
  static fadeElement(el, speed) {
    return this.domAnimator.fade(el, speed);
  }
  static slide(el) {
    this.domAnimator.slideIn(el);
  }
}

App.init();
