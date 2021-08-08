class ProductItem extends Component {
  #product;
  constructor(renderHook, product) {
    super(renderHook, false);
    this.#product = product;
    this.render();
  }

  render() {
    this.#product.element = this.createRootElement('li', 'product-item');
    const img = this.createElement('img', 'product-img', [
      new ElementAttribute('src', this.#product.imgs.main),
      new ElementAttribute('alt', this.#product.name),
    ]);
    img.addEventListener('click', () => {
      App.expandProductOnList(this.#product);
    });
    const imgIcon = this.createElement('i', 'fas fa-info-circle');
    const imgIconCon = this.createElement('div', 'more-de');
    imgIconCon.append(imgIcon);
    const imgCon = this.createElement('div', 'img-container');
    if (this.#product.discount) {
      const discountTag = this.createElement('div', 'discount-tag');
      const discountTagText = this.createElement('span', 'discount-tag-text');
      discountTagText.textContent = this.#product.discount + '%';
      imgCon.append(discountTagText, discountTag);
    }
    imgCon.append(img, imgIconCon);
    const title = this.createElement('h2');
    title.textContent = this.#product.name;
    const price = this.createElement('div', 'pr');
    price.textContent = '$' + this.#product.price;
    if (this.#product.discount) {
      const originalPrice = this.createElement('div', 'original_pr', [
        new ElementAttribute('id', 'originalPrice'),
      ]);
      originalPrice.textContent = '$' + this.#product.originalPrice;
      price.append(originalPrice);
    }
    const desc = this.createElement('div', 'de');
    desc.textContent = this.#product.description;
    const genere = this.createElement('div', 'ge');
    genere.textContent = 'Genere: ' + this.#product.genere;
    const brand = this.createElement('div', 'br');
    brand.textContent = 'brand: ' + this.#product.brand;
    const contentCon = this.createElement('div', 'content-container');
    const tagsCon = this.createElement('div');
    tagsCon.append(genere, brand);
    contentCon.append(title, price, desc, tagsCon);
    const addBtn = this.createElement('button', 'add_btn');
    addBtn.textContent = 'Add to cart';
    addBtn.addEventListener('click', () => {
      App.addProdToCart(this.#product);
    });
    const mainCon = this.createElement('div', 'main-data');
    const extraInfo = this.createElement('p');
    mainCon.append(imgCon, contentCon, extraInfo, addBtn);
    extraInfo.textContent = this.#product.extraData;
    const extraCon = this.createElement('div', 'extra-data');
    this.#product.element.slideShow = new SlideShow().render(
      this.#product.imgs.extra,
      mainCon
    );
    extraCon.append(this.#product.element.slideShow);
    this.#product.element.append(mainCon, extraCon);
  }
}
