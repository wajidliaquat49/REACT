function Button({ text, width, bgColor, textColor, borderColor }) {
  {
    return (
      <button
        className={`p-3   rounded   m-1  ${width ? width : "w - 20"} ${
          bgColor ? bgColor : "bg-blue-500 "
        } ${textColor ? textColor : "text-green-500"} ${
          borderColor ? borderColor : "border-2 border-blue-500"
        }`}
      >
        {text}
      </button>
    );
  }
}
export default Button;
