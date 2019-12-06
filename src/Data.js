const itemList = [
  {
    id: "asewq",
    description: "Nice boats. 50% off. wow.",
    price: 10000,
    remaining: 3,
    image: "/boat.png",
    sellerId: "ewio",
    reviewIds: ["1192", "3021"]
  },
  {
    id: "wqwasq",
    description: "Lawn chairs.",
    price: 50,
    remaining: 15,
    image: "/lawnchair.jpg",
    sellerId: "xcvb",
    reviewIds: ["1205", "6644", "2048"]
  },
  {
    id: "ewsdfa",
    description: "Brand-spankin' new bowling ball.",
    price: 110,
    remaining: 10,
    image: "/bowlingball.jpg",
    sellerId: "xcvb",
    reviewIds: ["2047", "2038"]
  },
  {
    id: "aodief",
    description: "A new car!",
    price: 25000,
    remaining: 5,
    image: "/car.jpg",
    sellerId: "xkfr",
    reviewIds: ["2341", "0949", "7922"]
  },
  {
    id: "widsao",
    description: "Burger. Need more?",
    price: 5,
    remaining: 100,
    image: "/burger.jpg",
    sellerId: "xkfr",
    reviewIds: ["0489", "2390", "3029"]
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
    reviewer: "13ek",
    rating: 3,
    comment:
      "Too slow, doesn't work on land. Looks great in my garage though! Makes all the neighbours jealous."
  },
  {
    id: "2047",
    reviewer: "8jd6",
    rating: 5,
    comment:
      "Wow! I bowled my first perfect game with this ball. 300 club, baby :D"
  },
  {
    id: "0489",
    reviewer: "13ek",
    rating: 1,
    comment: "Tastes like shit."
  },
  {
    id: "1205",
    reviewer: "3mtj",
    rating: 4,
    comment:
      "These look great on my deck, very comfortable. Wish there were more color choices."
  },
  {
    id: "6644",
    reviewer: "omm3",
    rating: 2,
    comment: "It broke the day after the warrenty expired."
  },
  {
    id: "2390",
    reviewer: "wemk",
    rating: 5,
    comment: "This burger is so delicious. Worth the import fees."
  },
  {
    id: "2341",
    reviewer: "3mtj",
    rating: 3,
    comment:
      "Solid car, it gets me from A to B. No air conditioning in the base model."
  },
  {
    id: "2048",
    reviewer: "13ek",
    rating: 5,
    comment: "Wife loves these, can't complain"
  },
  {
    id: "0949",
    reviewer: "8jd6",
    rating: 5,
    comment: "All the ladies love me in this car."
  },
  {
    id: "3021",
    reviewer: "wemk",
    rating: 1,
    comment:
      "I've owned boats my whole life, I know when a boat is good. This one is not."
  },
  {
    id: "3029",
    reviewer: "wemk",
    rating: 4,
    comment: "It's not the best burger, but it's cheap and near my work."
  },
  {
    id: "2038",
    reviewer: "13ek",
    rating: 4,
    comment:
      "All my friends think I'm a professional with this ball. The colors are cool."
  },
  {
    id: "7922",
    reviewer: "lkm4",
    rating: 4,
    comment: "Good price, reliable, can't complain"
  }
];
export { itemList, sellerList, productReviews };
