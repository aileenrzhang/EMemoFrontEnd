import axios from 'axios';

class organizationPosts {
    apiUrl = "/api/v1/post/"

    getPosts(orgID) {
        return axios.get(this.apiUrl + orgID);
    }
}

export default new organizationPosts();