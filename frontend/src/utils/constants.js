
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_state_invalid',
    errorClass: 'popup__error_visible'
} 

export const overlay = document.querySelectorAll('.popup');

export const editButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.profile__title');
export const jobInput = document.querySelector('.profile__subtitle');
export const addButton = document.querySelector('.profile__button-add');
export const popupAvatar = document.querySelector('.popup_type_profile');
export const avatar = document.querySelector('.profile__image');
export const changeAvatarButton = document.querySelector('.profile__cursor');
export const closeButtonAvatar = document.querySelector('.popup__close_avatar');
export const saveAvatar = document.querySelector('.popup__save_avatar');
export const popupEdit = document.querySelector('.popup_type_edit');
export const closeButtonEdit = document.querySelector('.popup__close_edit');
export const addNameInput = document.querySelector('.popup__input_type_name');
export const addJobInput = document.querySelector('.popup__input_type_job');
export const formEdit = document.querySelector('.popup__form_edit');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const closeButtonNewCard = document.querySelector('.popup__close_new-card');
export const formNewCard = document.querySelector('.popup__form_new-card');
export const addNewCard = document.querySelector('.popup__save_new-card');
export const inputLink = document.querySelector('.popup__input_type_link');
export const inputTitle = document.querySelector('.popup__input_type_title');
export const popupPicture = document.querySelector('.popup__image');           
export const popupImage = document.querySelector('.popup_type_image');         
export const popupSubtitle = document.querySelector('.popup__subtitle');      
export const popupImageClose = document.querySelector('.popup__close_image');  


export const popupDeleteSelector = document.querySelector('.popup_type_delete');
export const popupDeleteSave = document.querySelector('.popup__save_delete');
export const popupDeleteClose = document.querySelector('.popup__close_delete');


export const list = '.elements';
export const cardSelector = '.template';
export const ESC_CODE = 'Escape';