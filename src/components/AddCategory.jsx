import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('Submit');
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategories(prevState => [inputValue,...prevState ]);
            //Aqui el setCategories puede recibir un callback que recibe el estado anterior y retorna todo el estado y lo nuevo que queremos agregar
            setInputValue('');

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
