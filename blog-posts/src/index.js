import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment'
import profile1 from './images/pic-1.jpg'
import UserCard from './UserCard'

const App = () => {
    
    return(
        <div className = 'ui comments'>
            <UserCard>
                <SingleComment name='Alex' date='Today at 5.00 pm' text='It is amazing' pic={profile1}/>
            </UserCard>
            <UserCard>
                <SingleComment name='Jack' date='Today at 12.00 pm' text='I love it' pic={profile1}/>
            </UserCard>
            <UserCard>
                <SingleComment name='Sarah' date='Today at 6.00 am' text='Great job' pic={profile1}/>
            </UserCard>
        </div>  
    )
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)