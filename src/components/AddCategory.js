import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    const [newCategory, setNewCategory] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (newCategory.trim().length > 2) {
            setCategories( cats => [newCategory, ...cats]);
            setNewCategory('');
        }
        
    }

    const handleOnChange = (e) => {
        setNewCategory(e.target.value);
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type = "text" value={newCategory} onChange={handleOnChange} placeholder="Escriba más de 3 letras y enter"/> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
