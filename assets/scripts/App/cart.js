class Cart extends Component {
  #cart = { items: [] };
  quantity = ' Units';
  delButtonText = '-1';

  constructor(renderHook) {
    super(renderHook);
  }
  get totalCartAmount() {
    const sum = this.#cart.items.reduce((prevValue, curItem) => {
      const prodTotalCharge = curItem.amount * curItem.price;
      return prevValue + prodTotalCharge;
    }, 0);

    return sum.toFixed(2);
  }
  set cartItems(value) {
    this.#cart.items = value;
    this.updateTotal();
  }
  backDrop() {
    this.backdrop = this.createElement('div', 'backdrop');
    this.backdrop.addEventListener('click', () => {
      this.toggleDisplay();
    });
    return this.backdrop;
  }
  toggleBackDrop() {
    this.backdrop.classList.toggle('visible');
  }

  render() {
    this.cartEl = this.createRootElement('div', 'cart');
    const titleEl = this.createElement('h2');
    titleEl.textContent = 'Your Sweets';
    this.productsEl = this.createElement('div', 'cart-products');
    this.totalEl = this.createElement('div', 'cart-total');
    const buttonsContainerEl = this.createElement(
      'div',
      'cart-buttons-container'
    );
    const orderButtonEl = this.createElement('button', 'order-button');
    orderButtonEl.textContent = 'Order';
    this.toggleButtonEl = this.createElement('button', 'toggle-button');
    this.toggleButtonEl.textContent = 'Open Cart';
    this.toggleButtonEl.addEventListener('click', () => {
      const activeCart = this.cartEl.classList.contains('active');
      if (this.#cart.items.length === 0 && !activeCart) {
        this.noItemsAlert();
        return;
      }
      this.toggleDisplay();
    });
    const cartIconEl = this.createElement(
      'i',
      'cart-icon  fas fa-shopping-cart'
    );
    buttonsContainerEl.append(cartIconEl, this.toggleButtonEl, orderButtonEl);
    this.cartEl.append(
      titleEl,
      buttonsContainerEl,
      this.productsEl,
      this.totalEl
    );
  }
  noItemsAlert() {
    setTimeout(() => {
      this.totalEl.textContent = '';
    }, 1000);
    this.totalEl.textContent = 'empty cart!';
  }
  shine() {
    this.totalEl.classList.toggle('flash');
    setTimeout(() => {
      this.totalEl.classList.toggle('flash');
    }, 380);
  }
  locateItem(productName) {
    for (const item of this.#cart.items) {
      if (item.name === productName) {
        return item;
      }
    }
  }
  add(product) {
    this.shine();
    const item = this.locateItem(product.name);
    if (item) {
      item.amount++;
      this.updateAmount(item);
      this.updateTotal();
      return;
    }
    const newItem = {
      name: product.name,
      amount: 1,
      price: product.price,
    };
    this.#cart.items.push(newItem);
    this.updateTotal();
    //  this.cartItems = this.#cart.items; // ??inn use?
    this.renderProduct(product, newItem.amount);
  }

  decrease(product) {
    let onCart = true;
    // this.cart.totalCost = 1 * (this.cart.totalCost - product.price).toFixed(2);
    const item = this.locateItem(product.name);
    item.amount--;
    if (item.amount === 0) {
      const index = this.#cart.items.indexOf(item);
      this.#cart.items.splice(index, 1);
      onCart = false;
    }
    this.updateAmount(item);

    this.updateTotal();
    return onCart;
  }

  toggleDisplay() {
    this.toggleButtonEl.textContent = !this.cartEl.classList.contains('active')
      ? 'Back'
      : 'Open Cart';
    App.domAnimator.fade(this.cartEl);
    this.cartEl.classList.toggle('active');
    this.toggleBackDrop();
  }

  updateAmount(item) {
    for (const element of this.productsEl.children) {
      if (element.id === item.name) {
        element.getElementsByClassName(
          'cart-item-amount'
        )[0].textContent = `${item.amount} ${this.quantity}`;
      }
    }
  }

  updateTotal() {
    if (this.totalCartAmount == 0) {
      this.noItemsAlert();
      if (this.cartEl.classList.contains('active')) this.toggleDisplay();
      return;
    }
    const upadtedTotal = this.totalCartAmount;
    this.totalEl.innerHTML = `Total: $${upadtedTotal}`;
  }

  renderProduct(product, amount) {
    const prodInfoEl = this.createElement('div', 'cart-product-info', [
      new ElementAttribute('id', product.name),
    ]);
    const prodInfoAmountEl = this.createElement('div', 'cart-item-amount');
    prodInfoAmountEl.textContent = `${amount} ${this.quantity}`;
    const prodInfoTitleEl = this.createElement('div', 'cart-item-title');
    prodInfoTitleEl.textContent = `${product.name} `;
    const prodInfoPriceEl = this.createElement('div');
    prodInfoPriceEl.textContent = ` $${product.price}`;
    const textConEl = this.createElement('div', 'cart-item-text-container');
    const innerTextConEl = this.createElement(
      'div',
      'cart-item-inner-text-container'
    );
    innerTextConEl.append(prodInfoAmountEl, prodInfoPriceEl);
    textConEl.append(prodInfoTitleEl, innerTextConEl);
    prodInfoEl.append(textConEl);
    const delButton = this.createElement('button');
    delButton.textContent = '-';
    delButton.addEventListener('click', () => {
      const onCart = this.decrease(product);
      if (!onCart) {
        prodInfoEl.classList.add('vanish');
        setInterval(() => {
          prodInfoEl.remove();
        }, 400);
      }
    });
    const addButton = this.createElement('button');
    addButton.textContent = '+';
    addButton.addEventListener('click', () => {
      this.add(product);
    });
    const buttonsConEl = this.createElement(
      'div',
      'cart_amout_buttons_container'
    );
    buttonsConEl.append(addButton, delButton);
    prodInfoEl.append(buttonsConEl);
    const cartItemImg = this.createElement('img', 'cart-item-img', [
      new ElementAttribute('src', product.imgs.main),
    ]);
    prodInfoEl.prepend(cartItemImg);
    this.productsEl.append(prodInfoEl);
  }
}
