import Link from "next/link";

const Leftside = ({ activeId, category }) => {
  return (
    <ul className="text-center my-5">
      {category.map((cat) => (
        <li key={cat.category_id}>
          <Link
            className={` font-semibold  rounded block my-2 py-2 px-4 hover:bg-red-400 hover:text-white ${activeId === cat.category_id && "bg-red-400 text-white"}`}
            key={cat.category_id}
            href={`/category/${cat.category_id}`}
          >
            {cat.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Leftside;
