import api from '../utils/apiOverview'

const APIOverview = {
  getOverview: async () => {
    let response = await api.get(`/overview`)
    return response
  }
};

export default APIOverview;