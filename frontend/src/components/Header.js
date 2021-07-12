import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

function Header(props) {
    return (
        <header className="header">
            <div className="header__wrapper">
            <div className="header__logo"></div>
            <Switch>
                <Route exact path="/">
                    <div className="header__container">
                        <p className="header__email">{props.email}</p>
                        <Link to="signin" className="header__link" onClick={props.onSignOut}>Выйти</Link>
                    </div>
                </Route>

                <Route path="/signin">
                    <Link to="signup" className="header__link">Зарегистрироваться</Link>
                </Route>

                <Route path="/signup">
                    <Link to="signin" className="header__link">Войти</Link>
                </Route>
            </Switch>
            </div>
        </header>    
    )
} 
export default Header;