import RoutesList from "../../../routes";

export type HeaderClasses = {
  [key in RoutesList]: {
    headerClass: string;
    headerContainerClass: string;
  };
};
