import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <div className="mt-10 container mx-auto">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
