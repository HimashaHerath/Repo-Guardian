const axios = require('axios');

const githubUsername = process.env.GITHUB_USERNAME;
const githubToken = process.env.GITHUB_TOKEN;

async function getRepos() {
    const response = await axios.get(\https://api.github.com/users/\/repos\, {
        headers: {
            'Authorization': \	oken \\
        }
    });
    return response.data.map(repo => repo.name);
}

module.exports = { getRepos };
