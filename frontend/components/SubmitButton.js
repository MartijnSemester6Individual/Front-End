
const SubmitButton = ({ buttonText }) => {
    return (
        <div className="form-group">
            <button
                type="submit"
                className="w-full p-3 mt-4 text-center text-white cursor-pointer bg-infiniot-green rounded-xl"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default SubmitButton;
