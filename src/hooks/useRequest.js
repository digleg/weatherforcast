import { useAxios } from "../context";
import { useCallback, useEffect, useState } from "react";

export function useRequest(url, method, config = {}) {
  const [state, setState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });
  const connector = useAxios();

  const fetch = useCallback(async () => {
    try {
      setState({
        ...state,
        isLoading: true,
      });
      const { data } = await connector.request({ url, method, ...config });
      setState({
        ...state,
        isLoading: false,
        data,
      });
    } catch (e) {
      setState({
        ...state,
        isLoading: false,
        error: e,
      });
    }
  }, [url, method, JSON.stringify(config)]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [state.data, state.error, state.isLoading, fetch];
}

export const useGet = (url, params = {}, config = {}) =>
  useRequest(url, "GET", { ...config, params });
// export const usePost = (url, data={}, config={})=> useRequest(url,'POST', {...config, data });
// export const usePatch = (url, data={}, config={})=> useRequest(url,'PATCH', {...config, data });
// export const usePut = (url, data={}, config={})=> useRequest(url,'PUT', {...config, data });
// export const useDelete = (url, data={}, config={})=> useRequest(url,'DELETE', {...config, data });
