const WHATSAPP_NUMBER = "919315622678";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[80] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] flex items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{
        bottom: "max(20px, env(safe-area-inset-bottom))",
        right: "max(20px, env(safe-area-inset-right))",
      }}
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.11 17.34c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.15-.19.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.43 1.05 2.82 1.19 3.01.15.2 2.04 3.11 5.04 4.24.71.3 1.27.48 1.7.61.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
        <path d="M16.01 3.2c-7.07 0-12.81 5.73-12.81 12.81 0 2.25.58 4.44 1.69 6.38L3 29l6.79-1.78a12.74 12.74 0 0 0 6.22 1.59h.01c7.07 0 12.81-5.74 12.81-12.81 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.07-3.75zm0 23.46h-.01a10.56 10.56 0 0 1-5.38-1.48l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.62 10.62 0 0 1-1.64-5.67c0-5.87 4.77-10.64 10.64-10.64 2.84 0 5.52 1.11 7.53 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.77 10.64-10.64 10.64z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
