import { createContext, useContext, useState, cloneElement, useCallback } from "react";
import { createPortal } from "react-dom";

interface ModalContextValue {
    openName: string;
    close: () => void;
    open: (name: string) => void;
  }
  
  const ModalContext = createContext<ModalContextValue | null>(null);

function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal compound components must be used inside <Modal>");
  return context;
}

/* ───────── Root provider ───────── */
export function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = useCallback(() => setOpenName(""), []);
  const open = useCallback((name: string) => setOpenName(name), []);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

/* ───────── Trigger button ───────── */
function Open({
  children,
  opens,
}: {
  children: React.ReactElement<any>;
  opens: string;
}) {
  const { open } = useModal();

  return cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      open(opens);
    },
  });
}

/* ───────── Modal window ───────── */
function Window({
  children,
  name,
  noClose = false,
}: {
  children: React.ReactElement<any>;
  name: string;
  noClose?: boolean;
}) {
  const { openName, close } = useModal();

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center p-4"
      onClick={noClose ? undefined : close}
    >
      <div
        className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-[720px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {!noClose && (
          <button
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg-alt border border-border-default flex items-center justify-center text-text-muted hover:text-primary-dark hover:border-primary transition-all duration-200 z-10"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        <div className="p-8 min-[600px]:p-10">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ───────── Attach sub-components ───────── */
Modal.Open = Open;
Modal.Window = Window;

