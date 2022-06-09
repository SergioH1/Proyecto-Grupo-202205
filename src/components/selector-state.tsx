import { SyntheticEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrisionersContext } from '../context/prisioner-context';

export function SelectorState() {
    const { loadFiltered } = useContext(PrisionersContext);

    let navigate = useNavigate();

    function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        navigate('/home');
    }
    function handleChange(ev: SyntheticEvent) {
        const evTarget = ev.target as HTMLFormElement;
        console.log(evTarget.value);

        loadFiltered(evTarget.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <select name="select" id="select" onChange={handleChange}>
                    <option value="al-bcso">Alabama</option>
                    <option value="az-mcso">Arizona</option>
                </select>
                <button type="submit">Buscar</button>
            </form>
        </>
    );
}
