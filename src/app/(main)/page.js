import { redirect } from "next/navigation";

const category = "01";
const Home = async () => {
  redirect(`/category/${category}`);
};
export default Home;
