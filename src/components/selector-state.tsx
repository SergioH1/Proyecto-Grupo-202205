export function SelectorState() {
    function sendData() {}
    return (
        <>
            <form onSubmit={sendData}>
                <select name="select" id="select">
                    <option value="al-bcso">Alabama</option>
                    <option value="az-mcso">Arizona</option>
                </select>
                <button type="submit">Buscar</button>
            </form>
        </>
    );
}
