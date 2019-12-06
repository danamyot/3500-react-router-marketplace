const itemList = [
  {
    id: "asewq",
    name: "Boat",
    description: "Nice boats. 50% off. wow.",
    price: 10000,
    remaining: 3,
    image: "/boat.png",
    sellerId: "ewio",
    reviewIds: ["1192", "3021"]
  },
  {
    id: "wqwasq",
    name: "Lawn Chairs",
    description: "Luxurious, comfortable, elegant lawn chairs.",
    price: 50,
    remaining: 15,
    image: "/lawnchair.jpg",
    sellerId: "xcvb",
    reviewIds: ["1205", "6644", "2048"]
  },
  {
    id: "ewsdfa",
    name: "Bowling Ball",
    description: "Brand-spankin' new bowling ball.",
    price: 110,
    remaining: 10,
    image: "/bowlingball.jpg",
    sellerId: "xcvb",
    reviewIds: ["2047", "2038", "3029"]
  },
  {
    id: "aodief",
    name: "Red Car",
    description: "A new car!",
    price: 25000,
    remaining: 5,
    image: "/car.jpg",
    sellerId: "xkfr",
    reviewIds: ["2341", "0949", "7922"]
  },
  {
    id: "widsao",
    name: "Burger",
    description: "Burger. Need more?",
    price: 5,
    remaining: 100,
    image: "/burger.jpg",
    sellerId: "xkfr",
    reviewIds: ["0489", "2390", "3959"]
  }
];
const sellerList = [
  {
    id: "ewio",
    name: "Jack Frost",
    rating: "5 stars"
  },
  {
    id: "xcvb",
    name: "Hank Green",
    rating: "2 stars"
  },
  {
    id: "xkfr",
    name: "Sue Barnes",
    rating: "4 stars"
  }
];
const productReviews = [
  {
    id: "1192",
    productId: "asewq",
    reviewer: "13ek",
    rating: 3,
    comment:
      "Too slow, doesn't work on land. Looks great in my garage though! Makes all the neighbours jealous."
  },
  {
    id: "2047",
    productId: "ewsdfa",
    reviewer: "8jd6",
    rating: 5,
    comment:
      "Wow! I bowled my first perfect game with this ball. 300 club, baby :D"
  },
  {
    id: "0489",
    productId: "widsao",
    reviewer: "13ek",
    rating: 1,
    comment: "Tastes like shit."
  },
  {
    id: "1205",
    productId: "wqwasq",
    reviewer: "3mtj",
    rating: 4,
    comment:
      "These look great on my deck, very comfortable. Wish there were more color choices."
  },
  {
    id: "6644",
    productId: "wqwasq",
    reviewer: "omm3",
    rating: 2,
    comment:
      "It broke when my husband sat in it, the day after the warrenty expired."
  },
  {
    id: "2390",
    productId: "widsao",
    reviewer: "wemk",
    rating: 5,
    comment: "This burger is so delicious. Worth the import fees."
  },
  {
    id: "2341",
    productId: "aodief",
    reviewer: "3mtj",
    rating: 3,
    comment:
      "Solid car, it gets me from A to B. No air conditioning in the base model."
  },
  {
    id: "2048",
    productId: "wqwasq",
    reviewer: "13ek",
    rating: 5,
    comment: "Wife loves these, can't complain"
  },
  {
    id: "0949",
    productId: "aodief",
    reviewer: "8jd6",
    rating: 5,
    comment: "All the ladies love me in this car."
  },
  {
    id: "3021",
    productId: "asewq",
    reviewer: "wemk",
    rating: 1,
    comment:
      "I've owned boats my whole life, I know when a boat is good. This one is not."
  },
  {
    id: "3959",
    productId: "widsao",
    reviewer: "lkm4",
    rating: 4,
    comment: "It's not the best burger, but it's cheap and near my work."
  },
  {
    id: "3029",
    productId: "ewsdfa",
    reviewer: "wemk",
    rating: 4,
    comment: "BAM! Pins drop when they see this bad boy coming."
  },
  {
    id: "2038",
    productId: "ewsdfa",
    reviewer: "13ek",
    rating: 4,
    comment:
      "All my friends think I'm a professional with this ball. The colors are cool."
  },
  {
    id: "7922",
    productId: "aodief",
    reviewer: "lkm4",
    rating: 4,
    comment: "Good price, reliable, can't complain"
  }
];

const reviewerList = [
  {
    id: "13ek",
    name: "Sam Samson",
    reviews: ["1192", "0489", "2048", "2038"]
  },
  {
    id: "8jd6",
    name: "Karl Marx",
    reviews: ["2047", "0949"]
  },
  {
    id: "3mtj",
    name: "Jannie Wendigo",
    reviews: ["1205", "2341"]
  },
  {
    id: "omm3",
    name: "Marge Bouvier",
    reviews: ["6644"]
  },
  {
    id: "wemk",
    name: "Frank Lesson",
    reviews: ["2390", "3021", "3029"]
  },
  {
    id: "lkm4",
    name: "Bran Bland",
    reviews: ["7922", "3959"]
  }
];

export { itemList, sellerList, productReviews, reviewerList };
