import RoutesList from "../../../routes";
import { HeaderClasses } from "../models";

const classes: HeaderClasses = {
  [RoutesList.DEFAULT]: {
    headerClass: "header--default",
    headerContainerClass: "header__container--default",
  },
  [RoutesList.HELP]: {
    headerClass: "header--help",
    headerContainerClass: "header__container--help",
  },
  [RoutesList.HOW_IT_WORKS]: {
    headerClass: "header--how-it-works",
    headerContainerClass: "header__container--how-it-works",
  },
  [RoutesList.NOT_FOUND]: {
    headerClass: "header--not-found",
    headerContainerClass: "header__container--not-found",
  },
  [RoutesList.PARTNERS]: {
    headerClass: "header--partners",
    headerContainerClass: "header__container--partners",
  },
};

export default classes;
