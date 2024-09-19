import { useState, useEffect, useCallback, useRef } from 'react';
import { UserPost } from '../constants/type';
import { fetchAllPosts } from '../services/getAllPost';

const PAGE_SIZE = 4;

const useGetAllPosts = () => {
  const [posts, setPosts] = useState<UserPost[]>([]);
  const [postLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMorePost, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const isLoadingRef = useRef(false);

  const loadPosts = useCallback(async () => {
    if (!hasMorePost || isLoadingRef.current) {
      return;
    }

    setLoading(true);
    isLoadingRef.current = true;

    try {
      const fetchedPosts: any = await fetchAllPosts(page, PAGE_SIZE);

      setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);

      const totalPosts = fetchedPosts[0]?.total ?? 0;
      setHasMore(fetchedPosts.length === PAGE_SIZE && posts.length < totalPosts);

      setPage(prevPage => prevPage + 1);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  }, [hasMorePost, page, posts.length]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return { posts, postLoading, error, loadPosts, hasMorePost };
};

export default useGetAllPosts;
