import * as React from "react";
import { Pizza } from "src/types";

interface IProps {
  url: string;
}

interface IReturn {
  failed: boolean;
  data: Pizza[];
  loading: boolean;
}

const useRequest = ({ url }: IProps): IReturn => {
  const [failed, setFailed] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Pizza[]>([]);

  React.useEffect(() => {
    async function fetchData<T>(): Promise<T> {
      const res = await fetch(url);
      const body = await res.json();
      return body;
    }

    (async () => {
      try {
        setLoading(true);
        const data = await fetchData<Pizza[]>();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setFailed(true);
        console.log(error);
      }
    })();
  }, [url]);

  return {
    failed,
    loading,
    data,
  };
};

export { useRequest };
