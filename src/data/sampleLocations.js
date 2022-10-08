const mapLabels = [
  {
    title: "Police Station - I",
    add: 0.0015,
    sub: 0.0046,
    locationImage: "https://plus.unsplash.com/premium_photo-1661688982337-da3f793f424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageSmall: require("../../assets/mapIconsSmall/police.png"),
    imageLarge: require("../../assets/mapIconsLarge/police.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Police Station - II",
    add: 0.0025,
    sub: 0.0036,
    locationImage: "https://plus.unsplash.com/premium_photo-1661688982337-da3f793f424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageSmall: require("../../assets/mapIconsSmall/police.png"),
    imageLarge: require("../../assets/mapIconsLarge/police.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Library - I",
    add: -0.0065,
    sub: -0.0026,
    locationImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
    imageSmall: require("../../assets/mapIconsSmall/bookStore.png"),
    imageLarge: require("../../assets/mapIconsLarge/bookStore.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Library - II",
    add: -0.0025,
    sub: -0.0056,
    locationImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
    imageSmall: require("../../assets/mapIconsSmall/bookStore.png"),
    imageLarge: require("../../assets/mapIconsLarge/bookStore.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Library - III",
    add: -0.0005,
    sub: -0.0046,
    locationImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
    imageSmall: require("../../assets/mapIconsSmall/bookStore.png"),
    imageLarge: require("../../assets/mapIconsLarge/bookStore.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Mobile Store - I",
    add: -0.00315,
    sub: -0.0016,
    locationImage: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageSmall:require("../../assets/mapIconsSmall/mobile.png"),
    imageLarge: require("../../assets/mapIconsLarge/mobile.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Mobile Store - II",
    add: 0.0035,
    sub: -0.0026,
    locationImage: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageSmall:require("../../assets/mapIconsSmall/mobile.png"),
    imageLarge: require("../../assets/mapIconsLarge/mobile.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Mobile Store - III",
    add: -0.00215,
    sub: 0.0076,
    locationImage: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageSmall:require("../../assets/mapIconsSmall/mobile.png"),
    imageLarge: require("../../assets/mapIconsLarge/mobile.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Mobile Store - IV",
    add: -0.00315,
    sub: -0.0046,
    locationImage: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    imageSmall:require("../../assets/mapIconsSmall/mobile.png"),
    imageLarge: require("../../assets/mapIconsLarge/mobile.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Cafe Coffee Day - I",
    add: +0.00915,
    sub: 0.0036,
    locationImage: "https://images.unsplash.com/photo-1515701238541-0cb8d3165120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imageSmall:  require("../../assets/mapIconsSmall/coffee.png"),
    imageLarge: require("../../assets/mapIconsLarge/coffee.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    title: "Cafe Coffee Day - II",
    add: +0.00015,
    sub: 0.0076,
    locationImage: "https://images.unsplash.com/photo-1515701238541-0cb8d3165120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imageSmall:  require("../../assets/mapIconsSmall/coffee.png"),
    imageLarge: require("../../assets/mapIconsLarge/coffee.png"),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export default mapLabels;
