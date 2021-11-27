import { NextPage } from "next";
import { useRouter } from "next/router";
const UserDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>User Detail : {id}</div>;
};

export default UserDetail;
