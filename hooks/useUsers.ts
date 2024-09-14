import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchAllUsers } from '../services/getAllUser';
import { User, UserResponse } from '../constants/type';

const PAGE_SIZE = 4;

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  // Use a ref to manage loading state to avoid multiple triggers
  const isLoadingRef = useRef(false);

  const loadUsers = useCallback(async () => {
    if (!hasMore || isLoadingRef.current) {
      return;
    }

    setLoading(true);
    isLoadingRef.current = true;
    try {
      const response = await fetchAllUsers(page, PAGE_SIZE);
      const { users: userData, total } = response as UserResponse;

      setUsers(prevUsers => [...prevUsers, ...userData]);

      setHasMore(userData.length === PAGE_SIZE && users.length < total);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  }, [hasMore, page, users.length]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading, error, loadMore: loadUsers, hasMore };
};

export default useUsers;
