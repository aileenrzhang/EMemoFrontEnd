import axios from 'axios';

class organizationPosts {
    apiUrl = "http://localhost:8080/api/v1/post/"

    getPosts(orgID) {
        return axios.get(this.apiUrl + orgID);
    }
}

export default new organizationPosts();