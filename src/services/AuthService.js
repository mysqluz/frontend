import {getAPI} from "@/axios-api";

export default {
    login(credentials) {
        return getAPI
            .post('/auth/login/', credentials)
            .then(response => response.data);
    },
    signUp(credentials) {
        return getAPI
            .post('/auth/register/', credentials)
            .then(response => response.data);
    },
    getSecretContent() {
        return getAPI.get(url + 'secret-route/').then(response => response.data);
    }
};
