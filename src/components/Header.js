import React from 'react';

const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
}

const Header = () => {
    return (
        <div>
            <div className="header-wrapper"  >
                <div className="details">
                <h1 >Welcome to 30 Days of React</h1>
                <p>JavaScript Library</p>
                <p>Getting Started React</p>
                <h4>Asabeneh Yetayeh</h4>
                <span>{showDate(new Date())}</span>
                <p>Select country for your next holiday</p>
                </div>
               
                
            </div>
        </div>
    );
};

export default Header;