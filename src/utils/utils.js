const formatDate = (date) => {
    const dateObject = date instanceof Date ? date : new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Months in JavaScript are zero-based
    const year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    // Format hours in 12-hour format (am/pm)
    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Format numbers to two digits
    const formattedDay = ('0' + day).slice(-2);
    const formattedMonth = ('0' + month).slice(-2);
    const formattedHours = ('0' + hours).slice(-2);
    const formattedMinutes = ('0' + minutes).slice(-2);

    const formattedDate = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes} ${amPm}`;

    return formattedDate;
}

export {
    formatDate
}