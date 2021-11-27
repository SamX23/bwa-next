import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Sorry</h1>
      <h3 className="title-not-found">Page not found</h3>
    </div>
  );
};

export default Custom404;
