import { Tenant } from "../types/Tenants";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
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
});
