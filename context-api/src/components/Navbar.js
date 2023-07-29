import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
class Navbar extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(themeContext) => {
                        const {isDarkTheme, darkTheme, lightTheme} = themeContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;
                        const {isLoggedIn, changeAuthStatus} = authContext;
                        return(
                            <nav style ={{background: theme.background, color: theme.text, height: '120px'}}>
                                <h2 style={{textAlign : 'center'}}>
                                    Mugundh's Academy
                                </h2>
                                <p onClick={changeAuthStatus} style={{textAlign: 'center'}}>{isLoggedIn ? 'logged in' : 'logged out'}</p>
                                <div className='ui three buttons'>
                                    <button className='ui button'>Overview</button>
                                    <button className='ui button'>Contact</button>
                                    <button className='ui button'>Support</button>
                                </div>
                            </nav>
                        )
                    }}

                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
        )
        }
    }

export default Navbar;
