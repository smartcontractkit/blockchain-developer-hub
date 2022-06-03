import { useEffect } from 'react';
import { useStateValue } from '@/context/StateProvider';
import { SET_NOT_VISIBLE, SET_VISIBLE } from '@/context/types';
import useIntersectionObserver from './useIntersectionObserver';
import useScrollDirection from './useScrollDirection';

export default function useToggleVisibility(ref) {
  const [{ visible, blogHeadings }, dispatch] = useStateValue();
  const isVisible = useIntersectionObserver(ref);
  const { scrolledUp } = useScrollDirection();

  useEffect(() => {
    const id = ref.current.id;
    if (isVisible) {
      dispatch({ type: SET_VISIBLE, payload: id });
    } else {
      if (visible.length > 1 || (blogHeadings && scrolledUp && visible[0] === blogHeadings[0].id)) {
        // if there are more than one visible element or if the first visible element is the first heading of the blog
        dispatch({ type: SET_NOT_VISIBLE, payload: id });
      }
    }
    return () => {
      if (visible.length > 1) {
        dispatch({ type: SET_NOT_VISIBLE, payload: id });
      }
    };
  }, [visible.length, isVisible]);
}
