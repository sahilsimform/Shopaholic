import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sahil",
      email: "sahil@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Payal",
      email: "payal@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "1",
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      isFeatured: true,
      featuredImage: "/images/banner1.jpg",
      price: 1245,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: "2",
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      isFeatured: true,
      featuredImage: "/images/banner2.jpg",
      price: 2025,
      brand: "Adidas",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: "3",
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 1681,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: "4",
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 1754,
      brand: "Oliver",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      id: "5",
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 2000,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      id: "6",
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 2046,
      brand: "Casely",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};

export default data;
