import { useSearchParams } from "react-router-dom";

const index = () => {
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name");
  return <div>Thank you for your interest, {userName}</div>;
};

export default index;
