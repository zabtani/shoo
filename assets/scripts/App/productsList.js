class ProductsList extends Component {
  hideInfoOnFilter;
  listWithContent;
  #products = [];
  constructor(renderHook, productsObj) {
    super(renderHook, false);
    productsObj[0].forEach((p) => {
      const product = new Product(
        p.name,
        p.imgs,
        p.price,
        p.description,
        p.brand,
        p.genere,
        p.discounts,
        productsObj[1][0].productDemoData
      );
      this.#products.push(product);
    });
    this.render();
  }

  propertyValues(property) {
    //return array of all possible properties of a product property (brand/genere for example,used for dynamic category).
    const valuesArr = []; //possible values array
    this.#products.forEach((product) => {
      //check in each product if property not includes in values array,
      if (
        product[property] !== false &&
        !valuesArr.includes(product[property])
      ) {
        valuesArr.push(product[property]); //if not,push it.
      }
    });
    return valuesArr; //return the possible values array
  }
  hide() {
    if (!this.productsListEl.classList.contains('none'))
      this.productsListEl.classList.add('none');
  }
  expandProduct(product) {
    window.scrollTo(0, 0);
    App.revealBackButton();
    this.filter(product.name, 'name', 'slide');
    product.element.classList.add('p_expand');
    this.expandedProduct = product.element;
  }
  set hiddenInfoOnFilter(hiddenInfoFunction) {
    this.hideInfoOnFilter = hiddenInfoFunction;
  }
  closeExpandedProduct() {
    this.expandedProduct.classList.remove('p_expand', 'slide');
    const slideShow = this.expandedProduct.slideShow;
    slideShow.restart();
    this.expandedProduct = false;
  }

  filter(filter, property = 'name', effect = 'fade') {
    this.noItemsEl.classList.add('none');
    this.listWithContent = false;
    if (this.expandedProduct) this.closeExpandedProduct();
    this.hideInfoOnFilter();
    if (this.productsListEl.classList.contains('none')) {
      this.productsListEl.classList.remove('none');
    }
    this.#products.forEach((product) => {
      //conditions to filter a product
      let filterd;
      if (!product[property]) {
        //if this property contains falsey value, filter it.
        filterd = true;
      } else if (typeof product[property] === 'number') {
        if (typeof filter === 'object' && property === 'price') {
          filterd = !(
            filter[0] >= product[property] && product[property] >= filter[1]
          );
        } else {
          filterd = product[property] !== filter;
        }
        //if property type
      } else {
        filterd = !product[property]
          .toUpperCase()
          .includes(filter.toUpperCase());
      }
      const productCl = product.element.classList;
      //if the prod will get filtered:
      if (!filterd) {
        if (productCl.contains('none')) {
          productCl.remove('none');
        }
      } else {
        productCl.add('none');
      }
      if (!productCl.contains('none')) {
        if (!this.listWithContent) this.listWithContent = true;
        if (effect === 'fade') {
          App.domAnimator.fade(product.element, 30);
        } else if (effect === 'slide') {
          App.domAnimator.slideIn(product.element);
        }
      }
    });
    if (!this.listWithContent) {
      this.noItemsEl.classList.remove('none');
    }
  }

  render() {
    this.productsListEl = this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'productlist'),
    ]);
    for (const product of this.#products) {
      new ProductItem('productlist', product);
    }
    this.noItemsEl = this.createRootElement('div', 'no-items none');
    this.noItemsEl.textContent = 'Sorry, no such a candy!';
    this.productsListEl.prepend(this.noItemsEl);
  }
}
