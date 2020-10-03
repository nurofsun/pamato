import * as React from 'react';

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
const months = [ 
    'January', 'February', 'March',
    'April', 'May', 'Juny',
    'July', 'August', 'September',
    'November', 'October','December'
]

function dateBeautify() {
    let now = new Date();
    let dayIndex = now.getDay(),
        date = now.getDate(),
        monthIndex = now.getMonth(),
        year = now.getFullYear();

    return {
        day: days[dayIndex],
        date: date,
        month: months[monthIndex + 1],
        year
    }
}

function PamatoDate() {
    let now = dateBeautify();
    return(
        <time className="PamatoDate">
            <span className="today">
                {now.day}
            </span>
            <p>
                <span>{now.date}, {now.month} {now.year}</span>
            </p>
        </time>
    )
}

export default PamatoDate;
