export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Premium quality white cotton t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    category: "Basic",
    inStock: true
  },
  {
    id: 2,
    name: "Vintage Black Graphic Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    description: "Retro-inspired black t-shirt with vintage graphic design. Made from soft cotton blend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    category: "Graphic",
    inStock: true
  },
  {
    id: 3,
    name: "Navy Blue Polo Shirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    description: "Classic navy blue polo shirt with collar and button placket. Perfect for smart casual occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue"],
    category: "Polo",
    inStock: true
  },
  {
    id: 4,
    name: "Striped Long Sleeve Shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Comfortable striped long sleeve shirt in blue and white. Great for layering or wearing alone.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue/White Stripes"],
    category: "Long Sleeve",
    inStock: true
  },
  {
    id: 5,
    name: "Red Henley Shirt",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    description: "Classic red henley shirt with button placket. Made from premium cotton for comfort.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red"],
    category: "Henley",
    inStock: true
  },
  {
    id: 6,
    name: "Gray Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description: "Cozy gray hoodie with kangaroo pocket and drawstring hood. Perfect for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray"],
    category: "Hoodie",
    inStock: true
  },
  {
    id: 7,
    name: "Green Flannel Shirt",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Warm green flannel shirt with classic plaid pattern. Ideal for cooler weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green Plaid"],
    category: "Flannel",
    inStock: true
  },
  {
    id: 8,
    name: "Black V-Neck Tee",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    description: "Sleek black v-neck t-shirt with a flattering cut. Made from soft, breathable cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    category: "V-Neck",
    inStock: true
  },
  {
    id: 9,
    name: "White Button-Down Shirt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Crisp white button-down shirt perfect for business or formal occasions. Wrinkle-resistant fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    category: "Dress Shirt",
    inStock: true
  },
  {
    id: 10,
    name: "Purple Crew Neck Sweater",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    description: "Warm purple crew neck sweater made from premium wool blend. Perfect for layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple"],
    category: "Sweater",
    inStock: true
  },
  {
    id: 11,
    name: "Orange Tank Top",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Lightweight orange tank top perfect for warm weather. Made from breathable cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Orange"],
    category: "Tank Top",
    inStock: true
  },
  {
    id: 12,
    name: "Denim Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    description: "Classic denim shirt with button closure. Versatile piece that works for casual or smart casual looks.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue Denim"],
    category: "Denim",
    inStock: true
  },
  {
    id: 13,
    name: "Yellow Short Sleeve Polo",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    description: "Bright yellow polo shirt with classic collar. Great for summer activities and casual wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow"],
    category: "Polo",
    inStock: true
  },
  {
    id: 14,
    name: "Black Long Sleeve Henley",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    description: "Sleek black long sleeve henley with button placket. Perfect for layering or wearing alone.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    category: "Henley",
    inStock: true
  },
  {
    id: 15,
    name: "Pink Graphic Tee",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    description: "Fun pink graphic t-shirt with modern design. Made from soft cotton blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink"],
    category: "Graphic",
    inStock: true
  },
  {
    id: 16,
    name: "Brown Leather Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    description: "Premium brown leather jacket with classic styling. Perfect for adding edge to any outfit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown"],
    category: "Jacket",
    inStock: true
  },
  {
    id: 17,
    name: "Blue Chambray Shirt",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Lightweight blue chambray shirt perfect for summer. Versatile piece for casual wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Light Blue"],
    category: "Chambray",
    inStock: true
  },
  {
    id: 18,
    name: "White Baseball Tee",
    price: 31.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Classic white baseball tee with contrasting sleeves. Comfortable and stylish.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White/Black"],
    category: "Baseball Tee",
    inStock: true
  },
  {
    id: 19,
    name: "Green Military Style Shirt",
    price: 47.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    description: "Rugged green military-style shirt with multiple pockets. Perfect for outdoor activities.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive Green"],
    category: "Military",
    inStock: true
  },
  {
    id: 20,
    name: "Coral Short Sleeve Shirt",
    price: 33.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Vibrant coral short sleeve shirt perfect for summer. Made from breathable cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Coral"],
    category: "Short Sleeve",
    inStock: true
  },
  {
    id: 21,
    name: "Black Thermal Long Sleeve",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    description: "Warm black thermal long sleeve shirt with ribbed texture. Perfect for layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    category: "Thermal",
    inStock: true
  },
  {
    id: 22,
    name: "White Linen Shirt",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    description: "Lightweight white linen shirt perfect for hot weather. Natural fabric that breathes well.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    category: "Linen",
    inStock: true
  },
  {
    id: 23,
    name: "Navy Striped T-Shirt",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    description: "Classic navy striped t-shirt with white stripes. Timeless design that never goes out of style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy/White Stripes"],
    category: "Striped",
    inStock: true
  },
  {
    id: 24,
    name: "Gray Quarter-Zip Pullover",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    description: "Comfortable gray quarter-zip pullover with zippered neckline. Perfect for transitional weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray"],
    category: "Pullover",
    inStock: true
  },
  {
    id: 25,
    name: "Red Plaid Flannel",
    price: 46.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Classic red plaid flannel shirt with button closure. Warm and comfortable for cooler days.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red Plaid"],
    category: "Flannel",
    inStock: true
  },
  {
    id: 26,
    name: "Black Mock Neck Sweater",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    description: "Sleek black mock neck sweater with modern fit. Made from premium wool blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    category: "Sweater",
    inStock: true
  },
  {
    id: 27,
    name: "White V-Neck Tank",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Clean white v-neck tank top perfect for layering or wearing alone in warm weather.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    category: "Tank Top",
    inStock: true
  },
  {
    id: 28,
    name: "Blue Oxford Shirt",
    price: 58.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    description: "Classic blue oxford shirt with button-down collar. Perfect for business casual or smart casual wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
    category: "Oxford",
    inStock: true
  },
  {
    id: 29,
    name: "Green Hoodie with Zipper",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description: "Comfortable green zip-up hoodie with full zipper closure. Perfect for casual wear and layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green"],
    category: "Hoodie",
    inStock: true
  },
  {
    id: 30,
    name: "Charcoal Gray T-Shirt",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    description: "Essential charcoal gray t-shirt with comfortable fit. Made from soft cotton blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal Gray"],
    category: "Basic",
    inStock: true
  }
];
