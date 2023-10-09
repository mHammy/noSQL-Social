function dateFormat(timestamp) {
    const date = new Date(timestamp); // Convert timestamp to Date object
    const day = ('0' + date.getDate()).slice(-2); // Format day to have 2 digits
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Format month to have 2 digits
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

module.exports = dateFormat;