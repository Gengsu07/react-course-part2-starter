import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.toString())
  // const id = searchParams.get("id").toString();

  const location = useLocation();
  // console.log(location)
  return <p>User {params.id}</p>;
};

export default UserDetailPage;
