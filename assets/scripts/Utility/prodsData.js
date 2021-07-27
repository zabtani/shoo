const appData = {
  websiteTitle: 'BonDeBonBon',
  categories: [
    { title: 'Brands', value: 'brand', subs: [] }, //when subs is empty, will get categories dynamically
    { title: 'Geners', value: 'genere', subs: [] },
    {
      title: 'Discounts',
      value: 'discount',
      subTextPattern: 'val% discount',
      subs: [],
    },
    {
      title: 'Prices',
      value: 'price',
      subTextPattern: '$val1 to $val2',
      range: {
        lowestRangeValue: 5,
        rangeBreakPoints: [25, 50, 100],
      },
      subs: [], //well get it dynamically base on range data
    },
    {
      title: 'About',
      value: 'info',
      subs: [
        { title: 'Our product', value: 'ourprod' }, //static sub categories as mention bellow
        { title: 'History', value: 'his' },
        { title: 'Team', value: 'team' },
      ],
    },
  ],
  info: [
    {
      title: 'Fine As a Diamond',
      value: 'ourprod',
      imgUrls: [
        'https://chowhound3.cbsistatic.com/2014/09/28373_alfajores_3000.jpg',
        'https://www.highlandchocolatier.com/img/info/iain-s-best-seller-----32.95_35_adv.jpg',
        'https://i.ytimg.com/vi/HKsX50RY7Io/maxresdefault.jpg',
      ],
      content:
        'It is our firm commitment to source more and more cacao directly. By using beans harvested from our own cacao farm, we have the unique opportunity to work directly with farmers. It ensures farmers a sustainable livelihood by providing safe and correct working conditions, higher average wages and no child labour.Through our own cacao farm, we can also ensure our chocolate is of superior quality due to the richness of the terroir and the ideal climate conditions, generous sunshine and abundant water. These natural growing conditions are met with the exceptional savoir-faire of our experts. Their mastery of the critical fermentation phase allows for the release of the cacao beans distinct aromas, which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate.',
    },
    {
      title: 'Once Upon a time..',
      value: 'his',
      content:
        "The Good family has been making candy since the 1940's. Randy's grandmother began in Kennard, Indiana in the early 1960's. Randy took over his family's candy shop in 1992. In 2003 he built a brand new facility, making Good's the newest and largest candy shop in central Indiana.",
    },
    {
      title: 'this is our famliy',
      value: 'team',
      imgUrls: [
        'https://origins.virunga.org/wp-content/uploads/sites/3/2020/11/DominqueWithTeam.jpg',
      ],
      content:
        'It is our firm commitment to source more and more cacao directly. By using beans harvested from our own cacao farm, we have the unique opportunity to work directly with farmers. It ensures farmers a sustainable livelihood by providing safe and correct working conditions, higher average wages and no child labour.Through our own cacao farm, we can also ensure our chocolate is of superior quality due to the richness of the terroir and the ideal climate conditions, generous sunshine and abundant water. These natural growing conditions are met with the exceptional savoir-faire of our experts. Their mastery of the critical fermentation phase allows for the release of the cacao beans distinct aromas, which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate. which creates the unique and complex character of our chocolate.',
    },
  ],
  products: [
    [
      {
        name: 'Alfahor',
        imgs: {
          main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Alfajor_H.jpg/1920px-Alfajor_H.jpg',
          extra: [
            'https://cdn.shopify.com/s/files/1/0514/7531/6896/collections/Alfajores_con_Brillo_1024x1024.png?v=1606035461',
            'https://landingpadba.com/wp-content/uploads/2016/10/alfajor-1-min-620x536.jpg',
            'https://img.theculturetrip.com/wp-content/uploads/2017/05/alfajor.jpg',
          ],
        },

        price: 10.99,
        description: 'Best alfahor in won the world winner championship',
        brand: 'havana',
        genere: 'Latin',
        discounts: 10,
      },
      {
        name: 'Bonbon',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          extra: [
            'https://cdn.shopify.com/s/files/1/0043/5086/9550/products/MeltdownArtisan_BonBon_25Pack_3cad18c6-f926-49e7-a7ba-f1b0c319430b_1024x1024@2x.jpg?v=1580728130',
            'https://cdn.cupcakeproject.com/wp-content/uploads/2018/01/Bonbons-05.jpg',
            'https://cdn11.bigcommerce.com/s-cz9zi6z6xn/images/stencil/1280x1280/products/199/404/giftsetbonmac__26718.1591047270.png?c=1',
          ],
        },
        price: 9.99,
        description: 'High quality bonbon chocolate',
        brand: 'nadge',
        genere: 'Latin',
        discounts: false,
      },
      {
        name: 'Macron',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2013/11/12_Pink_Macaron_Travel.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/superhero-1.png',
          ],
        },
        price: 13.99,
        description: 'Macron holiday chocolate pack',
        brand: 'coco',
        genere: 'Latin',
        discounts: false,
      },
      {
        name: 'Super hero',
        imgs: {
          main: 'https://i.pinimg.com/originals/9b/3f/56/9b3f56b39a7161094eacdb2777f83b92.jpg',
          extra: [
            'http://www.gaggifts.com/assets/images/SUPICE_6.jpg',
            'https://i.etsystatic.com/6552851/r/il/f0638f/1317004994/il_570xN.1317004994_zzh5.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/14/f3/b8/16/batman-chocolate-fudge.jpg',
          ],
        },
        price: 23.99,
        description: 'superHeros shaped  chocolate',
        brand: 'milka',
        genere: 'Shaped',
        discounts: 15,
      },
      {
        name: 'Strawberry Cake',
        imgs: {
          main: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strawberry-cake-jpg-1522267153.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 17.99,
        description: 'High quality strawberry cake',
        brand: 'milka',
        genere: 'cakes',
        discounts: false,
      },
      {
        name: 'Funcky Egg',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2020/03/funky-egg-milk.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 97.99,
        description: 'Funky egg for the holiday',
        brand: 'nadge',
        genere: 'Eggs',
        discounts: 50,
      },
      {
        name: 'Mini Egges',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/mini-decor-eggs-2.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 44.99,
        description: 'Mini Egges for the holiday',
        brand: 'havana',
        genere: 'Shaped',
        discounts: 10,
      },
      {
        name: 'Rabbit Egg',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/92523180_105939217647158_3209483604089263577_n-copy.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 77.99,
        description: 'Huge rabbit egg for the holiday',
        brand: 'coco',
        genere: 'Eggs',
        discounts: 20,
      },
      {
        name: 'Unicorn Egg',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2021/03/LARGE-UNICORN-EGG.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 45.99,
        description: 'Huge egg unicorn shpe for the holiday',
        brand: 'milka',
        genere: 'Eggs',
        discounts: false,
      },
      {
        name: 'Chocolate tablet',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2013/06/BAR_Q_PRODUCT.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 11.99,
        description: 'Tasty classic tablet',
        brand: 'havana',
        genere: 'tablet',
        discounts: 20,
      },
      {
        name: 'Mini Chocolate Cake',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2020/04/mini-choc-site.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 12.99,
        description: 'Home made coco cake',
        brand: 'coco',
        genere: 'cakes',
        discounts: 10,
      },
      {
        name: 'Postcards',
        imgs: {
          main: 'https://www.nadege-patisserie.com/wp-content/uploads/2020/03/Postcards.png',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 9.99,
        description: 'Post cards for the holiday pack of 5!',
        brand: 'milka',
        genere: 'postcards',
        discounts: false,
      },
      {
        name: 'Luxury mix',
        imgs: {
          main: 'https://ikachocolate.com/wp-content/uploads/2014/02/56.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'mix of 25 mini chocolate!',
        brand: 'nadge',
        genere: 'combinations',
        discounts: 15,
      },
      {
        name: 'Famliy pack',
        imgs: {
          main: 'https://ikachocolate.com/wp-content/uploads/2020/08/10__0002_P1246015.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'best chocolates of coco!',
        brand: 'coco',
        genere: 'combinations',
        discounts: false,
      },
      {
        name: 'Lovers gift',
        imgs: {
          main: 'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 189.99,
        description: 'milkas lovers day pack!',
        brand: 'milka',
        genere: 'combinations',
        discounts: false,
      },
      {
        name: 'Dream pack',
        imgs: {
          main: 'https://ikachocolate.com/wp-content/uploads/2020/08/P1256814a-1-1024x1024.jpg',
          extra: [
            'https://ikachocolate.com/wp-content/uploads/2020/01/1246166a.jpg',
            'https://www.nadege-patisserie.com/wp-content/uploads/2019/12/9-pc-bonbons-scaled.jpg',
          ],
        },
        price: 289.99,
        description: 'havana spiceal pack!',
        brand: 'havana',
        genere: 'combinations',
        discounts: false,
      },
    ],
    [
      {
        productDemoData:
          'Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods. The earliest signs of use are associated with Olmec sites (within what would become Mexico’s post-colonial territory) suggesting consumption of chocolate beverages, dating from the 19th century BC.[1][2] The majority of Mesoamerican people made chocolate beverages, including the Maya and Aztecs.[3] The English word "chocolate" comes, via Spanish, from the Classical Nahuatl word xocolātl.[4]',
      },
    ],
  ],
};
