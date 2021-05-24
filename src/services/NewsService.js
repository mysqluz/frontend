import {getAPI} from "@/axios-api";

export default {
    index() {
        return getAPI
            .get('/news/')
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .get('/news/' + credentials)
            .then(response => response.data);
    },
};
