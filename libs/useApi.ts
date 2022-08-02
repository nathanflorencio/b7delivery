export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "b7burguer":
        return {
          name: "B7Burguer",
          mainColor: "#FF0000",
          secondColor: "#00FF00",
        };
        break;
      case "b7pizza":
        return {
          name: "B7Pizza",
          mainColor: "#0000FF",
          secondColor: "#00FF00",
        };
        break;
      default:
        return false;
    }
  },
});
