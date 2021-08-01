class Categories extends Component {
  categories;

  constructor(renderHook, categoriesObj, infoPagesObj, productsList) {
    super(renderHook);
    this.prodList = productsList;
    this.infoPages = new infoPages('app', infoPagesObj);
    this.prodList.hiddenInfoOnFilter = () => {
      this.infoPages.hide();
    };
    this.fetchCategories(categoriesObj);
  }
  fetchCategories(categoriesObj) {
    this.categories = categoriesObj;
    this.renderCategories();
  }
  category(category) {
    const mainCategory = this.createElement('li', 'dropdown');
    const mainCategoryText = this.createElement('a', 'dropbtn');
    mainCategoryText.textContent = category.title;
    mainCategory.append(mainCategoryText);
    const subCategories = this.subCategories(category);
    mainCategory.append(subCategories);
    return mainCategory;
  }

  subCategories(category) {
    const subCategoriesContainer = this.createElement(
      'div',
      'dropdown-content'
    );
    let subs = [];
    let subExistance = category.subs.length > 0;
    let linkEventHandler;
    let linkTextHandler;
    if (subExistance) {
      subs = category.subs;
      category.dynamic = false;
      linkEventHandler = (sub) => {
        this.prodList.hide();
        const infoPage = sub.value;
        this.infoPages.display(infoPage);
      };
      linkTextHandler = (sub) => {
        return sub.title;
      };
    } else {
      // DYNAMIC
      category.dynamic = true;
      linkEventHandler = (sub) => {
        this.prodList.filter(sub, category.value);
      };
      if (category.range) {
        linkTextHandler = (sub) => {
          let text = category.subTextPattern.replace('val2', sub[0]);
          text = text.replace('val1', sub[1]);
          return text;
        };
        //DYNAMIC+RANGE
        let lowestRange = category.range.lowestRangeValue;
        const ranges = category.range.rangeBreakPoints;
        ranges.forEach((range) => {
          const sub = [range, lowestRange];
          lowestRange = range;
          subs.push(sub);
        });
      } else {
        console.log(category.value);
        subs = this.prodList.propertyValues(category.value); //sub category for each value of property
        linkTextHandler = (sub) => {
          if (category.subTextPattern) {
            return category.subTextPattern.replace('val', sub);
          } else {
            return sub;
          }
        };
      }
    }
    subs.forEach((sub) => {
      const a = this.createElement('a');
      a.addEventListener('click', () => {
        const topConFolded = App.header.topConEl.classList.contains('folded');
        if (!topConFolded) {
          App.header.toggleDisplay();
        }
        App.revealBackButton();
        linkEventHandler(sub);
      });

      a.textContent = linkTextHandler(sub);
      subCategoriesContainer.append(a);
    });

    return subCategoriesContainer;
  }
  renderCategories() {
    this.categories.forEach((categoryObj) => {
      const categoryEl = this.category(categoryObj);
      this.categoriesUl.append(categoryEl);
    });
  }
  render() {
    this.categoriesUl = this.createRootElement('ul', 'categories-list');
    if (this.categories && this.categories.length > 0) {
      this.renderCategories();
    }
  }
}
