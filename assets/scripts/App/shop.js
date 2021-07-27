class Shop {
  constructor() {
    this.render();
  }
  render() {
    const renderTargetEL = document.getElementById('app');
    this.header = new Header(renderTargetEL.id, appData.websiteTitle);
    this.productsList = new ProductsList(renderTargetEL.id, appData.products);
    new Categories(
      'navbar',
      appData.categories,
      appData.info,
      this.productsList
    );
    this.cart = new Cart('headerTopCon');
    this.listBackDropEl = this.cart.backDrop();
    renderTargetEL.append(this.listBackDropEl);
  }
}
