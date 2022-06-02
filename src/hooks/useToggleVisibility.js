import { useEffect } from 'react';
import { useStateValue } from '@/context/StateProvider';
import { SET_NOT_VISIBLE, SET_VISIBLE } from '@/context/types';
import useIntersectionObserver from './useIntersectionObserver';

export default function useToggleVisibility(ref) {
  const [{ visible }, dispatch] = useStateValue();
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    const id = ref.current.id;
    if (isVisible) {
      dispatch({ type: SET_VISIBLE, payload: id });
    } else {
      if (visible.length > 1) {
        dispatch({ type: SET_NOT_VISIBLE, payload: id });
      }
    }
    return () => {
      if (visible.length > 1 && visible[0] === !id) {
        dispatch({ type: SET_NOT_VISIBLE, payload: id });
      }
    };
  }, [visible.length, isVisible]);
}
