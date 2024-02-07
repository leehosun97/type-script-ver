import { useEffect, useState } from "react";

export default function useFetch<T>(url: any) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
