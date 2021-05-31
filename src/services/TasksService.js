import {getAPI} from "@/axios-api";

export default {
    index() {
        return getAPI
            .get('/problems/')
            .then(response => response.data);
    },
    submit(credentials) {
        return getAPI
            .post('/tasks/' + credentials)
            .then(response => response.data);
    },
};
