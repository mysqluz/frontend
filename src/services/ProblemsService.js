import {getAPI} from "@/axios-api";

export default {
    index() {
        return getAPI
            .get('/problems/')
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .get('/problems/' + credentials)
            .then(response => response.data);
    },
};
