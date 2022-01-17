import { useEffect, useState } from "react";

export const URL = window.location.host.includes('localhost') ? "http://" + window.location.host + '/' : "https://" + window.location.host + '/'
export const DEBUG = true



export const range = (n): number[] => {
    console.log(n)
    // Array.range(5) --> [0,1,2,3,4]
    return Array.apply(null, Array(n)).map((x, i) => i)
};

export function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function posY(elm) {
    var test = elm, top = 0;

    while (!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if (!!window.innerWidth) { return window.innerHeight; }
    else if (de && !isNaN(de.clientHeight)) { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if (window.pageYOffset) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

export function checkvisible(elm) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return (y > (vpH + st));
}

export const useKeyPress = (targetKey) => {

    // State for keeping track of whether key is pressed

    const [keyPressed, setKeyPressed] = useState(false);



    // If pressed key is our target key then set to true

    function downHandler({ key }) {
        if (key === targetKey) {
            console.log(key)
            setKeyPressed(true);

        }

    }



    // If released key is our target key then set to false

    const upHandler = ({ key }) => {

        if (key === targetKey) {

            setKeyPressed(false);

        }

    };



    // Add event listeners

    useEffect(() => {

        window.addEventListener('keydown', downHandler);

        window.addEventListener('keyup', upHandler);

        // Remove event listeners on cleanup

        return () => {

            window.removeEventListener('keydown', downHandler);

            window.removeEventListener('keyup', upHandler);

        };

    }, []); // Empty array ensures that effect is only run on mount and unmount



    return keyPressed;

}

export const myCustomLocale = {
    // months list by order
    months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],

    // week days by order
    weekDays: [
        {
            name: 'Воскресенье', // used for accessibility 
            short: 'Вс', // displayed at the top of days' rows
            isWeekend: true, // is it a formal weekend or not?
        },
        {
            name: 'Понедельник',
            short: 'Пн',
        },
        {
            name: 'Вторник',
            short: 'Вт',
        },
        {
            name: 'Среда',
            short: 'Ср',
        },
        {
            name: 'Четверг',
            short: 'Чт',
        },
        {
            name: 'Пятница',
            short: 'Пт',
        },
        {
            name: 'Суббота',
            short: 'Сб',
            isWeekend: true,
        },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
        return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
        return digit;
    },

    // texts in the date picker
    nextMonth: 'Next Month',
    previousMonth: 'Previous Month',
    openMonthSelector: 'Open Month Selector',
    openYearSelector: 'Open Year Selector',
    closeMonthSelector: 'Close Month Selector',
    closeYearSelector: 'Close Year Selector',
    defaultPlaceholder: 'Select...',

    // for input range value
    from: 'от',
    to: 'до',


    // used for input value when multi dates are selected
    digitSeparator: ',',

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
}

export const mergeArrays = (...arrays): number[] => {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) => {
        if (newArray.includes(item)) {
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}


export const cloneArray = (array: any[]) => {
    return JSON.parse(JSON.stringify(array))
}
export const cloneObject = (obj: {}) => {
    return JSON.parse(JSON.stringify(obj))

}
export const uniqueArray = (array) => {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};


