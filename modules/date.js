export function getCurrentDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).slice(-2);
    let hour = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);

    return `${day}.${month}.${year} ${hour}:${minute}`;
}
