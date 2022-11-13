import { useState } from "react";

const useReadMore = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerRead = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen: isOpen, handlerRead: handlerRead };
};

export default useReadMore;