import {getAPI} from "@/axios-api";

export default {
    index(page=1) {
        return getAPI
            .get('/problems/?offset=' + (page - 1) * 12)
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .get('/problems/' + credentials)
            .then(response => response.data);
    },
};
