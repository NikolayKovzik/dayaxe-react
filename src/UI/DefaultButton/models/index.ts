export type DefaultButtonProps = {
  className: string[];
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent) => void;
};
