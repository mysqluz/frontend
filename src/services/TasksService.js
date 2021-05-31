import {getAPI} from "@/axios-api";

export default {
    index() {
        return getAPI
            .get('/problems/')
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
