import { Product } from "../types/Product";
import { Tenant } from "../types/Tenants";

const TEMPORARYoneProduct: Product = {
  id: 1,
  image: "/tmp/burguer.png",
  categoryName: "Tradicional",
  name: "Texas Burguer",
  price: 25.5,
  description:
    "2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa, Pão brioche artesanal",
};

export const useApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "b7burguer":
        return {
          slug: "b7burguer",
          name: "B7Burguer",
          mainColor: "#FF0000",
          secondColor: "#00FF00",
        };
        break;
      case "b7pizza":
        return {
          slug: "b7pizza",
          name: "B7Pizza",
          mainColor: "#0000FF",
          secondColor: "#FF0000",
        };
        break;
      default:
        return false;
    }
  },

  getAllProducts: async () => {
    let products = [];
    for (let q = 0; q < 10; q++) {
      products.push(TEMPORARYoneProduct);
    }
    return products;
  },

  getProduct: async (id: string) => {
    return TEMPORARYoneProduct;
  },
});
