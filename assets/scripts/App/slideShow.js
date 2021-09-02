class SlideShow {
  index = 0;
  pictures = [];
  onLargeDisplay = false;
  slide(value) {
    if (this.index === 0 && value === 'restart') return;
    this.pictures[this.index].classList.remove('visible');
    if (value === 'restart') {
      this.pictures[0].classList.add('visible');
      this.index = 0;
      return;
    }
    this.index += value;
    if (this.index < 0) this.index = this.pictures.length - 1;
    if (this.index > this.pictures.length - 1) this.index = 0;
    this.pictures[this.index].classList.add('visible');
  }
  toggleDisplay() {
    for (const iconEl of this.slideShow.magnifierIconCon.children) {
      iconEl.classList.toggle('none');
    }
    this.slideShow.classList.toggle('large');
    this.slideShow.hiddenOnToggleEl.classList.toggle('none');
    if (!this.onLargeDisplay) {
      App.domAnimator.fade(this.slideShow, 20);
    }
    this.onLargeDisplay = !this.onLargeDisplay;
  }
  generateArrows() {
    const arrowR = document.createElement('div');
    arrowR.textContent = '❯';
    arrowR.className = 'arrow right';
    arrowR.addEventListener('click', () => {
      this.slide(1);
    });
    const arrowL = document.createElement('div');
    arrowL.textContent = '❮';
    arrowL.className = 'arrow';
    arrowL.addEventListener('click', () => {
      this.slide(-1);
    });
    const arrowsCon = document.createElement('div');
    arrowsCon.className = 'arrows-container';
    arrowsCon.append(arrowL, arrowR);
    return arrowsCon;
  }
  generatePicture(url) {
    const picture = document.createElement('div');
    picture.style.backgroundImage = `url(${url})`;
    picture.className = 'picture';
    this.pictures.push(picture);
    return picture;
  }
  generateMagnifier() {
    const magnifierIconCon = document.createElement('div');
    magnifierIconCon.className = 'magnifier-container';
    const magnifierIcon = document.createElement('i');
    magnifierIcon.className = 'fas fa-search-plus';
    const reMagnifierIcon = document.createElement('i');
    reMagnifierIcon.className = 'fas fa-search-minus none';
    magnifierIconCon.append(magnifierIcon, reMagnifierIcon);
    magnifierIconCon.addEventListener('click', () => {
      this.slideShow.toggleDisplay();
    });
    return magnifierIconCon;
  }
  restartSlideShow() {
    if (this.onLargeDisplay) this.slideShow.toggleDisplay();
    this.slide('restart');
  }

  render(imgs, hiddenOnToggleEl) {
    this.slideShow = document.createElement('div');
    this.slideShow.className = 'slide-show';
    this.slideShow.hiddenOnToggleEl = hiddenOnToggleEl;
    const moreThenOneImg = imgs.length > 1;
    if (moreThenOneImg) {
      const arrowsCon = this.generateArrows();
      this.slideShow.append(arrowsCon);
    }
    const loadingBg = document.createElement('div');
    loadingBg.className = 'bg';
    this.slideShow.magnifierIconCon = this.generateMagnifier();
    this.slideShow.append(this.slideShow.magnifierIconCon, loadingBg);
    imgs.forEach((url) => {
      const picture = this.generatePicture(url);
      this.slideShow.append(picture);
    });
    this.slideShow.toggleDisplay = () => {
      this.toggleDisplay();
    };
    this.slideShow.restart = () => {
      this.restartSlideShow();
    };
    this.slide(0);
    return this.slideShow;
  }
}
