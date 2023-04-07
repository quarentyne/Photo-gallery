import { useOutletContext } from "react-router-dom"

type TContextType = { searchQuery: string };

export const useSearchQueryState = () => {
  return useOutletContext<TContextType>();
} ;