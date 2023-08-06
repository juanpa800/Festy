interface ButtonProps {
  children: JSX.Element;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {children}
    </button>
  );
};
export default Button;
