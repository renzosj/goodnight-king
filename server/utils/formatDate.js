const dayjs =require ("dayjs");

module.exports = (date) => {
    const formattedDate = dayjs(date).format("MMMM D, YYYYY")

    return formattedDate 
}