class infoPages extends Component {
  #openPage;
  constructor(renderHook, infoPagesData) {
    super(renderHook);
    this.#fetchInfoPages(infoPagesData);
  }
  #fetchInfoPages(data) {
    this.infoPagesData = data;
    this.renderInfoPages();
  }
  renderInfoPages() {
    this.infoPagesData.forEach((pageData) => {
      const page = this.createElement('section', 'info', [
        new ElementAttribute('id', pageData.value),
      ]);
      const title = this.createElement('h3');
      title.textContent = pageData.title;
      const paragraph = this.createElement('p');
      paragraph.textContent = pageData.content;
      page.append(title);
      if (pageData.pageImg) {
        const pageImg = document.createElement('div');
        pageImg.style.backgroundImage = `url(${pageData.pageImg})`;
        pageImg.className = 'pageImage';
        page.append(pageImg);
      }
      page.append(paragraph);
      this.infoPagesEl.append(page);
    });
  }
  render() {
    this.infoPagesEl = this.createRootElement('div', 'infoPages');
    if (this.infoPagesData) {
      this.renderInfoPages();
    }
  }

  hide() {
    if (this.#openPage) {
      this.#openPage.classList.remove('visible');
      this.#openPage = false;
    }
  }

  display(infoValue) {
    if (this.#openPage && this.#openPage.id === infoValue) {
      return;
    }
    this.hide();
    for (const element of this.infoPagesEl.children) {
      if (element.id === infoValue) {
        element.classList.add('visible');
        this.#openPage = element;
      }
    }
  }
}
