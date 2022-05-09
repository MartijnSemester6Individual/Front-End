const SubmitButton = ({ buttonText }) => {
  return (
    <div className="form-group">
      <button
        type="submit"
        className="bg-infiniot-green mt-4 w-full cursor-pointer rounded-xl p-3 text-center text-white"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
