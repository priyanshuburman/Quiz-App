function Button({ children, onClick }) {
  return (
    <button className="option bg-brown text-white" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
