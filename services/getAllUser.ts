import { UserResponse } from '../constants/type';
import axiosInstance from '../utils/axiosConfig';

export const fetchAllUsers = async (page: number, limit: number): Promise<UserResponse> => {
  try {
    const skip = page * limit;
    const response = await axiosInstance.get('/users', {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
