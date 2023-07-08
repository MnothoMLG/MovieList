import { useSelector } from 'react-redux';
import { createLoadingSelector } from '../store/loading/selectors';

export const useLoading = (...loadingActions: string[]) => {
  console.log(
    { loadingActions },
    'result',
    useSelector(createLoadingSelector(loadingActions))
  );
  return useSelector(createLoadingSelector(loadingActions));
};
