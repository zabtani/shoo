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
      if (pageData.imgUrls) {
        const slideShow = new SlideShow().render(
          pageData.imgUrls,
          page,
          pageData.imgUrls.length > 1 ? 8000 : false,
          true
        );
        page.append(slideShow);
        page.slideShow = slideShow;
      }
      page.append(paragraph);
      this.infoPagesEl.append(page);
    });
  }
  render() {
    this.infoPagesEl = this.createRootElement('div', 'infoPages');
    if (this.infoPagesData) {
      // is that a must in all classes? why should i check if  is there and to render here at all if fetch will give it to me in conatrctur? ?
      this.renderInfoPages();
    }
  }

  hide() {``
    if (this.#openPage) {
      this.#openPage.classList.remove('visible');
      const slideShow = this.#openPage.slideShow;
      if (slideShow) {
        slideShow.restart();
      }
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
