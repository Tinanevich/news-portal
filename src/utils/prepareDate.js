const prepareDate = (value)=> {
    const NewDate = new Date(value);
    return {
        day: NewDate.getDay(),
        month: NewDate.getMonth() + 1
    }
}

export default prepareDate;