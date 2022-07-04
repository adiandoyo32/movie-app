import { useEffect, useRef, useState } from "react";
import "./modal.scss";
import { BiX } from "react-icons/bi";

interface ModalProps {
  id?: string;
  active: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ id, active, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${isActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

interface ModalContentProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

export const ModalContent: React.FC<ModalContentProps> = (props) => {
    const contentRef = useRef<any | null>(null);

    const closeModal = () => {
        contentRef.current?.parentNode?.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
            <BiX />
            </div>
        </div>
    )
}

export default Modal;
