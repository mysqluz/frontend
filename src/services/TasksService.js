import {getAPI} from "@/axios-api";

export default {
    index(page=1) {
        return getAPI
            .get('/tasks/?offset=' + (page - 1) * 12)
            .then(response => response.data);
    },
    show(credentials) {
        return getAPI
            .get('/tasks/' + credentials)
            .then(response => response.data);
    },
    submit(data) {
        return getAPI.post('/tasks/', data )
            .then(response => {
                console.log('problem send');
                return response;
            })
            .catch(err => {
                console.log(err)
            })
    },
};
