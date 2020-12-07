import axios from 'axios';

class organizationPosts {
    apiUrl = "http://localhost:8080/api/v1/post/"

    getPosts(orgID) {
        return axios.get(this.apiUrl + orgID);
    }

    post(orgID, post) {
        return axios.post(this.apiUrl + orgID, post);
    }

    delete(orgID, id) {
        return axios.delete(this.apiUrl + orgID + "/" + id);
    }
}

export default new organizationPosts();