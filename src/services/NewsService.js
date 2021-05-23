import {getAPI} from "@/axios-api";

export default {
    index() {
        return getAPI
            .get('/news/')
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .post('/news/', credentials)
            .then(response => response.data);
    },
};
