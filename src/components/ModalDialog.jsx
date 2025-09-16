import { useEffect, useRef } from 'react';

export default function ModalDialog({ isOpen }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      className="animate-in fade-in zoom-in backdrop:animate-in backdrop:fade-in m-auto w-auto h-fit max-w-md p-0 rounded-lg shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm backdrop:duration-300 starting:scale-95 backdrop:starting:opacity-0">
      <div className="flex flex-col">
        <header className="flex ">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21">
            <path
              fill="#fff"
              d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-brand-grey-900">
            Message Sent!
          </h2>
          <button className="flex h-8 w-8 items-center justify-center rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">
            <span className="text-xl leading-none" aria-hidden="true">
              x
            </span>
            <span className="sr-only">Close modal</span>
          </button>
        </header>
        <main className="px-6 py-4 sm:px-6">
          <p>
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </main>
      </div>
    </dialog>
  );
    
}