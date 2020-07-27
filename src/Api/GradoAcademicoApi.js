import FetchApi from './FetchApi';

const GradoAcademicoApi = {
  getGradoAcademico: async (parameters) => {
    const data = await FetchApi.get(`api/GradoAcademicoApi`);
    //console.warn('dataapi',data);
    return data;
  },
};

export default GradoAcademicoApi;
