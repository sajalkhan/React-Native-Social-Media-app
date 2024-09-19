import { User } from '../constants/type';
import axiosInstance from '../utils/axiosConfig';

export const fetchUser = async (userId: number): Promise<User> => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);

    const userData = response.data;

    const user: User = {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      maidenName: userData.maidenName,
      age: userData.age,
      gender: userData.gender,
      email: userData.email,
      phone: userData.phone,
      username: userData.username,
      image: userData.image,
    };

    return user;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
