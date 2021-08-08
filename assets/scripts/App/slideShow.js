class SlideShow {
  index = 0; //index for sliding
  pictures = []; //pictures of this instance (provided while render)
  onLargeDisplay = false; //state of display size
  // slides pictures base on value given (start = 0,forward=1,backwards=-1,restart to first picture = 'restart')
  slide(value) {
    if (this.index === 0 && value === 'restart') return; //if restart action, and slideshow index already points on 0 (first picture,just return).
    this.pictures[this.index].classList.remove('visible'); //in not,hide current visible picture.
    if (value === 'restart') {
      //if restart action:
      this.pictures[0].classList.add('visible'); //show first picture.
      this.index = 0; //set index to 0.
      return; //finish here.
    }
    this.index += value; //update index base on value given
    if (this.index < 0) this.index = this.pictures.length - 1; //if smaller then 0 (first) set index to the highest index of pictures array(last picture)
    if (this.index > this.pictures.length - 1) this.index = 0; //if bigger then the highest index of pictures array(last picture) set index to 0 (first picture)
    this.pictures[this.index].classList.add('visible'); //base on the index calculated, show the right picture on the slideshow.
    // App.fadeElement(this.pictures[this.index], 10); //fade it in with fadeElement static method.
  }
  //toggle the dislay of the slideshow from normal in content attached to, to large (that hide content attached to) in the help of magnifier.
  toggleDisplay() {
    for (const iconEl of this.slideShow.magnifierIconCon.children) {
      //go trhow the icons attached to the slideshow icons container
      iconEl.classList.toggle('none'); //show the hidden,hide the visible.(replace batween +/- magnifier)
    }
    this.slideShow.classList.toggle('large'); //toggle the class of the slide show for large/small display.
    this.slideShow.hiddenOnToggleEl.classList.toggle('none'); //hide/show content attached to.
    if (!this.onLargeDisplay) {
      App.domAnimator.fade(this.slideShow, 20);
    }
    this.onLargeDisplay = !this.onLargeDisplay; //define state of this display.
  }
  //generate navigatiom arrows to the slideshow shile render, incase more then one picture.
  generateArrows() {
    const arrowR = document.createElement('div'); //make right arrow.
    arrowR.textContent = '❯'; //its text content.
    arrowR.className = 'arrow right'; //give class.
    arrowR.addEventListener('click', () => {
      //event of slide forward.
      this.slide(1);
    });
    const arrowL = document.createElement('div'); //make left arrow.
    arrowL.textContent = '❮'; //its text content.
    arrowL.className = 'arrow'; //give class.
    arrowL.addEventListener('click', () => {
      this.slide(-1); //event of slide backwards.
    });
    const arrowsCon = document.createElement('div'); //make a container for those arrows.
    arrowsCon.className = 'arrows-container'; //give class.
    arrowsCon.append(arrowL, arrowR); //append arrows to container.
    return arrowsCon; //return arrows container to the rendered slideshow.
  }
  //generate picture to the slideshow rendered (base on url+cover params).
  generatePicture(url, cover) {
    const picture = document.createElement('div'); //foreach imgs provided,make a picture elmenet
    picture.style.backgroundImage = `url(${url})`; // define url base on param
    picture.className = 'picture'; //give class
    if (cover) picture.style.backgroundSize = 'cover'; //base on boolean param - if type of background is cover - deifne in css
    this.pictures.push(picture); //push picture to class pictures array
    return picture; // return the picture to where slideshow render
  }
  generateMagnifier() {
    const magnifierIconCon = document.createElement('div'); //make magnifier icon container
    magnifierIconCon.className = 'magnifier-container'; //give class
    const magnifierIcon = document.createElement('i'); //make magnifier icon
    magnifierIcon.className = 'fas fa-search-plus'; //give class
    const reMagnifierIcon = document.createElement('i'); // make re magnifier icon
    reMagnifierIcon.className = 'fas fa-search-minus none'; //give class
    magnifierIconCon.append(magnifierIcon, reMagnifierIcon); //append icons to container
    magnifierIconCon.addEventListener('click', () => {
      this.slideShow.toggleDisplay(); //define container with event (toggle display of the slideshow)
    });
    return magnifierIconCon; //return the container to where slideshow render
  }
  restartSlideShow(autoSlide) {
    if (this.onLargeDisplay) this.slideShow.toggleDisplay(); //if its on large display, toggle it.
    if (autoSlide) return; // //if it on auto slide mode (param), finish here.
    this.slide('restart'); //if not auto slide, slide with restart to get index back to 0 and show first picture.
  }
  runAutoSlide(sec) {
    this.slideShow.classList.add('auto_ss');
    //automatic slide base on sec
    setInterval(() => {
      if (!this.onLargeDisplay) this.slide(1);
    }, sec);
  }
  //renders  a slideShow gallery:
  render(imgs, hiddenOnToggleEl, autoSlide = false, cover = false) {
    console.log(hiddenOnToggleEl);
    this.slideShow = document.createElement('div'); //make slideshow element avilable for this instance
    this.slideShow.className = 'slide-show'; // give class
    this.slideShow.hiddenOnToggleEl = hiddenOnToggleEl; //define element to hide on toggle avilable for this instance
    const moreThenOneImg = imgs.length > 1; // if more then one img provided,generate arrows container
    if (moreThenOneImg) {
      const arrowsCon = this.generateArrows(); //generate arrows container
      this.slideShow.append(arrowsCon); //append to slideshow
    }
    const loadingBg = document.createElement('div'); //make background element
    loadingBg.className = 'bg'; //give class
    this.slideShow.magnifierIconCon = this.generateMagnifier(); // make magnifier icon container
    this.slideShow.append(this.slideShow.magnifierIconCon, loadingBg); // append magnifier + loadingBg
    imgs.forEach((url) => {
      const picture = this.generatePicture(url, cover); //make picture element base on each url
      this.slideShow.append(picture); //append this picture to the slide show
    }); //define toggle display for this slideshow
    this.slideShow.toggleDisplay = () => {
      this.toggleDisplay(); //call this toggle display
    }; //define restart method for this slideshow,to zeroize in end of usage
    this.slideShow.restart = () => {
      this.restartSlideShow(autoSlide); //call this restart slide show, with automatic slide boolean
    }; //if set on automatic sliding and there is more then on image
    if (autoSlide && moreThenOneImg) {
      this.runAutoSlide(autoSlide); //call run auto slide
    }
    this.slide(0); //slide withe value of 0 to show first picture after slideshow has been rendered.
    return this.slideShow; //return this slide show for who ever ask for it.
  }
}
