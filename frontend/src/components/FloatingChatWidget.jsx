import { useState } from "react";
import CopilotChat from "./CopilotChat"; // your existing iframe component
import agentImg from "/agent.png"; // replace with your image path

const FloatingChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "28px",
            width: "400px",
            height: "540px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 14px 34px rgba(0,0,0,0.25)",
            zIndex: 9999,
          }}
        >
          <CopilotChat />
        </div>
      )}

      {/* LABEL / CLOUD — only show when closed */}
      {!open && (
        <div
          style={{
            position: "fixed",
            bottom: "115px",
            right: "28px",
            background: "#ffffff",
            padding: "9px 14px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            fontSize: "13px",
            fontWeight: 500,
            zIndex: 9999,
          }}
        >
          BriskBold Properties Assistant
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "35px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "transparent",
          padding: 0,
          boxShadow: "0 10px 22px rgba(0,0,0,0.28)",
          zIndex: 10000,
          fontSize: "32px",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {open ? "×" : <img src={agentImg} alt="Agent" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
      </button>
    </>
  );
};

export default FloatingChatWidget;
