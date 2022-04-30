export default {
    getCookie(name) {
        let cookieValue = "";
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        cookieValue = cookieValue.split('&semicolon').join(';');
        return cookieValue.split('&linebreak').join('\n');
    },
    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        value = value.split(';').join('&semicolon');
        value = value.split('\n').join('&linebreak');
        document.cookie = `${name}=${value}${expires}; path=/`;
    },
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    },
}