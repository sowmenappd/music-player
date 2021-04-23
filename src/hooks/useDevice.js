import { currentDevice } from "atomize";

export const isMobile = () => {
  return currentDevice() === "xs" || currentDevice() === "sm";
};

export const isTablet = () => {
  return currentDevice() === "md";
};

export const isDesktop = () => {
  return currentDevice() === "lg" || currentDevice() === "xl";
};
