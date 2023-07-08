import { useSelector } from 'react-redux';
import { createLoadingSelector } from '../store/loading/selectors';

export const useLoading = (...loadingActions: string[]) => {
  console.log({ loadingActions });
  return useSelector(createLoadingSelector(loadingActions));
};
