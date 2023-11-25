import apiInstance from ".";

export const getBookMarkEvent = async () => {
  try {
    const response = await apiInstance.get("/bookmark/list");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const addBookMarkEvent = async (eventId) => {
  try {
    const response = await apiInstance.post(`/bookmark/add`, {
      postId: eventId,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteBookMarkEvent = async (eventId) => {
  try {
    const response = await apiInstance.delete(`/bookmark/delete/${eventId}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
