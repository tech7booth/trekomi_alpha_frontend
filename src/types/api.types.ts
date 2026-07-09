/**
 * Every backend endpoint responds with this envelope shape:
 * { message: string; data: T }
 * RTK Query's `transformResponse` unwraps `.data` before it ever
 * reaches components/hooks, so consumers work with the real payload
 * directly instead of reaching into `.data.data` everywhere.
 */
export interface ApiEnvelope<T> {
  message: string;
  data: T;
}