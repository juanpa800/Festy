interface ButtonProps {
  children: JSX.Element;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-negro hover:bg-gris text-blanco font-bold py-2 px-4 rounded-xl m-3"
    >
      {children}
    </button>
  );
};
export default Button;
