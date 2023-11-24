import axios from "axios";
import apiInstance from ".";
import { BASE_URL } from "../static";

const getEvents = async () => {
  try {
    const response = await apiInstance.get("/mypage/events");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getAllEvents = async () => {
//   try {
//     await apiInstance.get("/posts").then((res) => {
//       console.log(res.data);
//       return res.data;
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

const getAllEvents = async () => {
  try {
    await axios.get("data/events.json").then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getAllEvents = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/posts`, {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
export { getEvents, getAllEvents };
