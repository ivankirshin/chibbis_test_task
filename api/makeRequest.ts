const makeRequest = async (path: URL | string): Promise<unknown> => {
  try {
    const response = await fetch(path.toString());
    return response.json();
  } catch (e) {
    console.error('Ошибка при запросе');
    throw e;
  }
};

export default makeRequest;
