import { useEffect } from 'react';
import useIntersection from '@/helpers/useIntersection';
import { useStateValue } from '@/context/StateProvider';
import { SET_NOT_VISIBLE, SET_VISIBLE } from '@/context/types';

export default function useToggleVisibility(ref) {
  const [{ visible }, dispatch] = useStateValue();
  const isVisible = useIntersection(ref);

  useEffect(() => {
    const id = ref.current.id;
    if (isVisible) {
      dispatch({ type: SET_VISIBLE, payload: id });
    } else {
      dispatch({ type: SET_NOT_VISIBLE, payload: id });
    }
    return () => dispatch({ type: SET_NOT_VISIBLE, payload: id });
  }, [visible.length, isVisible]);
}
