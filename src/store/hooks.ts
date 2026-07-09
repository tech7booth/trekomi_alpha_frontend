import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./index";

/**
 * Typed wrappers around react-redux hooks.
 * Always import these instead of the raw useDispatch / useSelector
 * to get full type inference on state and actions.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;