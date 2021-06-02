import {getAPI} from "@/axios-api";

export default {
    index(page=1) {
        return getAPI
            .get('/users/?offset=' + (page - 1) * 12)
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .get('/users/' + credentials)
            .then(response => response.data);
    },
};
