const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const form = new FormData();

form.append('filename', '')
form.append('attachment', fs.createReadStream('/Users/syedhassanashraf/Desktop/latest.png'));

const headers = form.getHeaders();

headers.authorization = ``;

axios({
  method: 'post',
  url: 'https://api.clickup.com/api/v2/task/7zw3vy/attachment',
  data: form,
  headers,
})
  .then(() => console.log('success'))
  .catch((e) => console.log(e));