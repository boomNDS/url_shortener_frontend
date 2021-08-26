
import Swal from 'sweetalert2'
export const validURL = urlText => {
    var pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    return !!pattern.test(urlText);
}

export const showAlert = (icon, title, text) => {
    Swal.fire(
        {
            icon: icon,
            title: title,
            text: text,
        }
    )
}