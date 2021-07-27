class Product {
  //define a product obj base on params.
  constructor(
    p_name,
    p_imgs,
    p_price,
    p_description,
    p_brand,
    p_genere,
    p_discount,
    p_extraInfo
  ) {
    this.name = p_name;
    this.imgs = p_imgs;
    this.discount = p_discount;
    if (this.discount) {
      this.originalPrice = p_price;
      this.price = 1 * (p_price * (1 - this.discount / 100)).toFixed(2);
    } else {
      this.price = p_price;
    }
    this.description = p_description;
    this.brand = p_brand;
    this.genere = p_genere;
    this.extraData = p_extraInfo;
  }
}
