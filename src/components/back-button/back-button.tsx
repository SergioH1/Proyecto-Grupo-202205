export function BackButton() {
    function goBack() {
        window.history.back();
    }
    return (
        <button onClick={goBack}>
            <img className="arrow-back" src="./svg/flecha-back.svg" alt="" />
        </button>
    );
}
