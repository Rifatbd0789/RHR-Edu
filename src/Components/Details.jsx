import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const dublicate = datas.find((data) => data.id === id);
  const { name } = dublicate;
  return (
    <div>
      <h1>This is Details{name}</h1>
    </div>
  );
};

export default Details;
