import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const dispatch = useAppDispatch();
