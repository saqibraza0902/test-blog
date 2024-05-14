import BlogBox from "@/ui/components/BlogBox";
import { get_featured_blogs } from "@/utils/function";
import { IBlog, IBlogSection } from "@/utils/types";
interface IProp {
  mydata: IBlogSection;
}
const BlogSection = async ({ mydata }: IProp) => {
  const data = await get_featured_blogs();

  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-SuisseBold w-1/12 lg:w-full text-6xl text-black">
        {mydata.title}
      </h2>
      <p className="font-Suisse text-lg text-black">{mydata.description}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-4 lg:ml-0">
        {data?.map((item: IBlog, i: number) => (
          <BlogBox item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
