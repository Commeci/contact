export default function InputEl({
    info,
    data,
    setData,
    showError,
    setShowError,
}) {
    const handleInputChange = (e) => {
        const value = e.target.value;

        if (info.pattern) {
            const regex = new RegExp(info.pattern);
            setShowError(!regex.test(value));
        }
        setData(value);
    };

    return (
        <div className="input-el">
            <div className="input-div">
                <label>{info.type}</label>
                <input
                    type="text"
                    placeholder={info.type}
                    value={data}
                    onChange={handleInputChange}
                />
            </div>
            {showError && <p className="error-msg">{info.errorMessage}</p>}
        </div>
    );
}
