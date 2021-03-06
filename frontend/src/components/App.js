import React from 'react'
import Header from './Header' 
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Login from './Login'
import InfoTooltip from './InfoTooltip'
import Register from './Register'
import ProtectedRoute from './ProtectedRoute'
import * as auth from '../utils/auth'

function App() {

    const [cards, setCards] = React.useState([]) 
    const [currentUser, setCurrentUser] = React.useState({});
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); 
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false); 
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false); 
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isPopupImageOpen, setPopupImageOpen] = React.useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [resSuccess, setResSuccess] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const history = useHistory();

    React.useEffect(() => {   
        if(loggedIn) {
            const token = localStorage.getItem('token');
            api.getUserInfoMe(token)
            .then((res) => {
                if(res) {
                    setCurrentUser(res);
                }
              
            })
            .catch((err) => console.log(err));
            
            api.getInitialCards(token)
            .then((res) => {
              setCards(res);
            })
            .catch((err) => console.log(err));
            }
        }, [loggedIn]);

    function handleLogin() {
        setLoggedIn(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleInfoTooltipClick() {
        setInfoTooltipOpen(true);
    }

    function handleCardClick(card) {
        setPopupImageOpen(true)
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setPopupImageOpen(false)
        setInfoTooltipOpen(false)
    }

    function handleOverlayClose(evt) {
        if(evt.target === evt.currentTarget) {
            closeAllPopups()
        }
    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if(evt.key === 'Escape') {
                closeAllPopups()
                console.log('esc')
            }
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose)
        }
    })
    
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err=>console.log(err));
    }

    function handleDeleteCard(card) {
        api.delCard(card._id)
        .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id)
        )})
        .catch(err=>console.log(err))
    }

    function handleUpdateUser(data) {
        api.changeUserInfo(data)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        })
        .catch(err=>console.log(err))
    }

    function handleUpdateAvatar(data) {
        api.editAvatar(data)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        }) 
        .catch(err=>console.log(err))
    }

    function handleAddPlaceSubmit(data) {
        api.postNewCard(data)
        .then((data) => {
            setCards([data, ...cards])
            closeAllPopups()
        })
        .catch(err=>console.log(err))
    }

    function signOut() {
        localStorage.removeItem('token');
        history.push('/signin');
        setLoggedIn(false);
    }

    function handleRegisterSubmit(password, email) {
        auth.register(password, email)
        .then((res) => {
            if(res) {
                history.push('/signin')
                setInfoTooltipOpen(true)
                setResSuccess(true)
                setMessage('');
            } 
        })
        .catch((err) => {
            setInfoTooltipOpen(true)
            setResSuccess(false)
            if(err === 400) {
            setMessage('?????????????????????? ?????????????????? ???????? ???? ??????????')
            } 
        }) 
    }

    function handleLoginSubmit(password, email) {
        return auth.authorize(password, email)

        .then((data) => {
            if(data.token) {
                handleLogin(); 
                history.push('/');  
            }
        })
        .catch((err) => {
            if(err === 400) {
                console.log('???? ?????????????? ???????????? ???? ??????????')
            } 
            if(err === 401) {
                console.log('???????????????????????? ?? ?????????? email ???? ????????????')
            }    
        })
    }

    React.useEffect(() => {
        function tokenChek() {
            const token = localStorage.getItem("token");
            if(token) {
                auth.getContent(token)
                .then((res) => {
                    if(res) {  
                        setEmail(res.email);
                        handleLogin();
                        history.push('/');  
                    }
                })
                .catch((err) => {
                    if(err === 401) {
                        console.log('?????????? ???? ?????????????? ?????? ???????????????? ????????????')
                    }
                    if(err === 401) {
                        console.log('*???????????????????? ???????????????????????? ??????????')
                    }
                })
            }
    } tokenChek();
    }, [loggedIn, history])
    return (
    <>
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header email={email} onSignOut={signOut} />  
                    <Switch>
                        <ProtectedRoute 
                            exact path="/"
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                            cards={cards}
                            onCardLike={handleCardLike}
                            onCardDelete={handleDeleteCard}
                            loggedIn={loggedIn}
                            component={Main}
                        /> 

                        <Route path="/signup">
                            <Register onRegister={handleRegisterSubmit} />
                        </Route>
                        <Route path="/signin">
                            <Login onLogin={handleLoginSubmit} />
                        </Route>
                        <Route>
                            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
                        </Route>
                        
                    </Switch>
                
                <Footer />

                <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onOverlayClose={handleOverlayClose} 
                onUpdateUser={handleUpdateUser}>
                </EditProfilePopup>

                <EditAvatarPopup 
                isOpen={isEditAvatarPopupOpen} 
                onClose={closeAllPopups} 
                onOverlayClose={handleOverlayClose} 
                onUpdateAvatar={handleUpdateAvatar}>
                </EditAvatarPopup>

                <AddPlacePopup 
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups} 
                onOverlayClose={handleOverlayClose} 
                onAddCard={handleAddPlaceSubmit}>
                </AddPlacePopup>
                    
                <ImagePopup 
                card={selectedCard} 
                isOpen={isPopupImageOpen} 
                onClose={closeAllPopups} 
                onOverlayClose={handleOverlayClose}
                /> 

                <InfoTooltip 
                isOpen={isInfoTooltipOpen} 
                onClose={closeAllPopups} 
                onOverlayClose={handleOverlayClose} 
                onSign={handleInfoTooltipClick} 
                onResponse={resSuccess}
                regSuccess='???? ?????????????? ????????????????????????????????!'
                regUnsaccess='??????-???? ?????????? ???? ??????...'
                onMessage={message}
                /> 

                <PopupWithForm name="delete" title="???? ???????????????"/>
            </CurrentUserContext.Provider>
        </div>
    </>  
  );
}

export default App;
