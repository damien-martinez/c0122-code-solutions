
var orderHistory = [
  // order 1
  {
    // still order 1 with 1 product purchase
    productInfo: [
      {
        productName: 'Javascript for impatient programmers',
        productPrice: 31.55,
        category: 'book',
        bookInfo: {
          author: 'Rauschmayer, Dr. Axel'
        },
        productImage: 'image url will go here'

      }
    ],
    orderInfo: {
      orderPlaced: '8/4/2020',
      total: 34.00,
      shipTo: 'JS Master',
      orderNumber: '114-3941689-8772232',
      returnWindow: '9/7/2020',
      orderQuantity: 1,
      delivered: true,
      deliveredDate: '8/8/2020',
      handedToResident: false
    },
    customerInteraction: {
      buyItAgain: false,
      writeAReview: undefined,
      getProductSupport: null
    }
  },

  // // order 2
  {
  // still order 2 with 1 product
    productInfo: [
      {
        productName: 'The Timeless Way of Building',
        productPrice: 41.33,
        category: 'book',
        bookInfo: {
          author: 'Alexander, Christopher'
        },
        productImage: 'image url will go here'
      }
    ],
    orderInfo: {
      orderPlaced: '7/19/2020',
      total: 44.53,
      shipTo: 'JS Master',
      orderNumber: '113-9984268-1280257',
      returnWindow: '8/19/2020',
      orderQuantity: 1,
      delivered: true,
      deliveredDate: '7/20/2020',
      handedToResident: true
    },
    customerInteraction: {
      buyItAgain: false,
      writeAReview: undefined,
      getProductSupport: null
    }
  },

  // // order 3
  {
    // still order 3 with 1 product
    productInfo: [
      {
        productName: 'Gamecube Controller Adapter Super Smash Bros Switch Gamecube Adapter...',
        productPrice: 15.98,
        category: 'video-game-accessory',
        bookInfo: {
          author: null
        },
        productImage: 'image url will go here'
      }
    ],
    orderInfo: {
      orderPlaced: '7/4/2020',
      total: 17.22,
      shipTo: 'JS Master',
      orderNumber: '114-2875557-9059409',
      returnWindow: '8/5/2020',
      orderQuantity: 1,
      delivered: true,
      deliveredDate: '7/7/2020',
      handedToResident: true
    },
    customerInteraction: {
      buyItAgain: false,
      writeAReview: undefined,
      getProductSupport: null
    }
  },

  // // order 4
  {
    // still order 4 with 2 products
    productInfo: [
      {
        productName: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        productPrice: 94.95,
        category: 'video-game-accessory',
        bookInfo: {
          author: null
        },
        productImage: 'image url will go here'
      },
      {
        productName: 'The Art of Sql',
        productPrice: 33.99,
        category: 'book',
        bookInfo: {
          author: 'Faroult, Stephanie'
        },
        productImage: 'image url will go here'
      }
    ],
    orderInfo: {
      orderPlaced: '7/3/2020',
      total: 138.93,
      shipTo: 'JS Master',
      orderNumber: '113-2883117',
      returnWindow: '8/4/2020',
      orderQuantity: 2,
      delivered: true,
      deliveredDate: '7/5/2020',
      handedToResident: false
    },
    customerInteraction: {
      buyItAgain: false,
      writeAReview: undefined,
      getProductSupport: undefined
    }
  }

];

console.log(orderHistory);
