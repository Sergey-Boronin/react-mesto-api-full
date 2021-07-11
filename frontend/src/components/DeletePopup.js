import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup(props) {

    return(
        // eslint-disable-next-line no-undef
        <PopupWithForm name="delete" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        </PopupWithForm>
    )
}

export default DeletePopup;