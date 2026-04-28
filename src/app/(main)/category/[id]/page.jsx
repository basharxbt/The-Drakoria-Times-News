import { getCategories, getNews } from "@/lib/data";
import Leftside from "@/page-components/Leftside";
import NewsCard from "@/page-components/NewsCard";
import NoNews from "@/page-components/NoNews";
import RightSide from "@/page-components/RightSide";

const CategoryNews = async ({ params }) => {
  const { id } = await params;

  const category = await getCategories();
  const news = await getNews(id);
  console.log(news);
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto ">
      <div className="col-span-3">
        <h2 className="font-semibold text-2xl">All Category</h2>
        <Leftside activeId={id} category={category}></Leftside>
      </div>
      <div className="col-span-6">
        <h2 className="font-semibold text-2xl">Latest News</h2>
        {news.length > 0 ? (
          <NewsCard news={news} id={id}></NewsCard>
        ) : (
          <NoNews></NoNews>
        )}
      </div>
      <div className="col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default CategoryNews;
