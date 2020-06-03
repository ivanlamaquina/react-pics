import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fBQPEXCd_KpYsVsni1yPdXt_GtkMRfXLI1HBBM5znpg'
  }
});
