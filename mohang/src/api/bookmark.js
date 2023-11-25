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
