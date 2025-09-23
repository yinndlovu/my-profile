import { createPortal } from "react-dom";

const Tooltip = ({ children, targetRect }: { children: React.ReactNode; targetRect: DOMRect | null }) => {
  if (!targetRect) return null;

  return createPortal(
    <div
      className="tech-tooltip"
      style={{
        top: targetRect.top - 60, 
        left: targetRect.left + targetRect.width / 2,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;