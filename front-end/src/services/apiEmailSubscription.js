import api from '../utils/apiEmail'

const APIEmail = {
  getEmail: async () => {
    let response = await api.get(`/email-sub`)
    return response
  },
  createEmail: async (data) => {
    let response = await api.post(`/email-sub`, data)
    return response
  },
};

export default APIEmail;