const productos = [
  // {
  //   id: "01",
  //   name: "Cafe Barista",
  //   description:
  //     "Café en granos de alta calidad, especialmente seleccionado para baristas que buscan aroma intenso y sabor equilibrado en cada taza.",
  //   stock: 24,
  //   price: 16000,
  //   img: "/img-cafe-en-granos/cafe-granos-1.jpg",
  //   category: "Cafes",
  // },

  {
    // id: "02",
    name: "Cafe Torremolinos Mixto",
    description:
      "Café en granos Torremolinos: mezcla premium con aroma profundo y sabor equilibrado, ideal para preparar un espresso perfecto.",
    stock: 36,
    price: 12000,
    img: "/img-cafe-en-granos/cafe-granos-2.png",
    category: "Cafes",
  },

  {
    // id: "03",
    name: "Cafe Guatemala",
    description:
      "Café en granos Guatemala: de origen 100% guatemalteco, con notas a cacao y frutas dulces, cuerpo medio y aroma envolvente.",
    stock: 48,
    price: 15000,
    img: "/img-cafe-en-granos/cafe-granos-3.png",
    category: "Cafes",
  },

  {
    // id: "04",
    name: "Cafe Torremolinos Brasil",
    description:
      "Café en granos Torremolinos Exclusivo Brasil: selección premium de granos brasileños con cuerpo intenso, notas a chocolate y nuez, y un final suave y aromático.",
    stock: 12,
    price: 24000,
    img: "/img-cafe-en-granos/cafe-granos-4.png",
    category: "Cafes",
  },

  {
    // id: "05",
    name: "Cafetera con Espumador",
    description:
      "Cafetera de barista con espumador: prepara espressos perfectos y cremosas bebidas con leche gracias a su potente sistema de extracción y vaporizador integrado.",
    stock: 3,
    price: 250000,
    img: "/img-cafeteras/cafetera.jpg",
    category: "Cafeteras",
  },

  {
    // id: "06",
    name: "Cafetera de Filtro",
    description:
      "Cafetera de filtro: práctica y eficiente, ideal para preparar varias tazas de café con aroma intenso y sabor equilibrado en cada infusión.",
    stock: 5,
    price: 80000,
    img: "/img-cafeteras/cafetera-2.jpg",
    category: "Cafeteras",
  },

  {
    // id: "07",
    name: "Cafetera de Embolo",
    description:
      "Cafetera de émbolo: método clásico y sencillo que resalta los sabores naturales del café, ofreciendo una bebida aromática y de cuerpo completo",
    stock: 10,
    price: 250000,
    img: "/img-cafeteras/cafetera-3.png",
    category: "Cafeteras",
  },

  {
    // id: "08",
    name: "Cafetera con Espumador",
    description:
      "Cafetera de barista con espumador de leche: diseñada para amantes del café, combina precisión y potencia para lograr espressos intensos y leche perfectamente espumada.",
    stock: 4,
    price: 170000,
    img: "/img-cafeteras/cafetera-4.jpg",
    categoty: "Cafeteras",
  },

  {
    // id: "09",
    name: "Cafetera Italiana",
    description:
      "Cafetera italiana: clásica y fácil de usar, ideal para preparar un café intenso y aromático con cuerpo pleno en cada taza.",
    stock: 10,
    price: 75000,
    img: "/img-cafeteras/cafetera-5.jpg",
    category: "Cafeteras",
  },

  {
    // id: "10",
    name: "Sobres de azucar",
    description:
      "Sobres de azúcar: prácticos y fáciles de usar, ideales para endulzar bebidas de manera rápida y cómoda.",
    stock: 200,
    price: 10000,
    img: "/img-insumos/insumos-azucar.jpg",
    category: "Insumos",
  },

  {
    // id: "11",
    name: "Azucarera",
    description:
      "Azucarera de vidrio: elegante y funcional, perfecta para almacenar azúcar manteniendo su frescura y agregando estilo a tu mesa o barra de café.",
    stock: 48,
    price: 15000,
    img: "/img-insumos/insumos-azucarera.png",
    category: "Insumos",
  },

  {
    // id: "12",
    name: "Espumador",
    description:
      "Espumador de leche: práctico y rápido, permite crear espuma cremosa y suave para cafés, capuchinos y bebidas especiales en casa o en la barra.",
    stock: 36,
    price: 20000,
    img: "/img-insumos/insumos-espumador.jpg",
    category: "Insumos",
  },

  {
    // id: "13",
    name: "Revolvedor",
    description:
      "Revolvedores de madera: sencillos y ecológicos, ideales para mezclar café, té u otras bebidas sin alterar su sabor.",
    stock: 200,
    price: 5000,
    img: "/img-insumos/insumos-revolvedor.jpg",
    category: "Insumos",
  },

  {
    // id: "14",
    name: "Servilletero",
    description:
      "Servilleteros: prácticos y elegantes, mantienen las servilletas organizadas y al alcance, perfectos para mesas y barras de café.",
    stock: 50,
    price: 7000,
    img: "/img-insumos/insumos-servilletero.jpg",
    category: "Insumos",
  },

  {
    // id: "15",
    name: "Vasos Descartables",
    description:
      "Vasos descartables: cómodos y resistentes, ideales para disfrutar bebidas calientes o frías de manera rápida y práctica, sin complicaciones de limpieza.",
    stock: 350,
    price: 5000,
    img: "/img-insumos/insumos-vaso-descartable.jpg",
    category: "Insumos",
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Ha habido un error! Vuelva a intentarlo mas tarde.");
      } else {
        resolve(productos);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let prod = productos.find((producto) => producto.id === id);
      resolve(prod);
    }, 1000);
  });
};
