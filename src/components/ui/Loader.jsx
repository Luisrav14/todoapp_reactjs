import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <Spinner color="primary" size="lg" />
    </div>
  );
};

export default Loader;
