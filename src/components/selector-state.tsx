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
        loadFiltered(evTarget.value);
    }
    return (
        <>
            <div className="selector-container">
                <form className="form" onSubmit={handleSubmit}>
                    <select
                        className="selector"
                        name="select"
                        defaultValue={'default'}
                        id="select"
                        onChange={handleChange}
                    >
                        <option value={'default'} disabled>
                            Choose an option
                        </option>
                        <option value="az-mcso" selected={true}>
                            Arizona
                        </option>
                        <option value="al-bcso">Alabama</option>
                        <option value="ar-acso">Arkansas</option>
                        <option value="fl-giso">California</option>
                    </select>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </>
    );
}
