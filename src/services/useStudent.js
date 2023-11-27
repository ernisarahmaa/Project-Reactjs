import { services } from '.';

export default () => {
  const studentList = async (page = 1, q) => {
    try {
      const response = await services.get('students', {
        params: {
          page: page,
          search: q,
        },
      });
      return response;
    } catch (e) {
      throw e;
    }
  };

  const addStudent = async body => {
    try {
      const response = await services.post('students', body);
      return response;
    } catch (e) {
      throw e?.response?.data?.message;
    }
  };

  return {
    addStudent,
    studentList,
  };
};
