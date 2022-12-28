import { useState } from "react";

export const Search = ({ onNewPokemon }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 0) return;

        setInputValue('');
        onNewPokemon(inputValue.trim());
    };



    return (
        <form action="" onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar pokemon"
                value={inputValue}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Buscar
            </button>
        </form>
    )
}

