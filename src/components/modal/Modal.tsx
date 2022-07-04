import { useEffect, useRef, useState } from "react";
import "./modal.scss";

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

export const ModalContent: React.FC<ModalProps> = (props) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const closeModal = () => {
        // contentRef.current?.parentNode?.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

export default Modal;
