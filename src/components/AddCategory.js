import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    const [newCategory, setNewCategory] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (newCategory.trim().length > 0) {
            setCategories( cats => [newCategory, ...cats]);
            setNewCategory('');
        }
        
    }

    const handleOnChange = (e) => {
        setNewCategory(e.target.value);
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type = "text" value={newCategory} onChange={handleOnChange}/> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
