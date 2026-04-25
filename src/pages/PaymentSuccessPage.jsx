import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, RefreshCw, Download } from "lucide-react";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    contact = { name: "Recipient" },
    amount = 0,
    note = "",
  } = location.state || {};

  const [tick, setTick] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTick(true), 120);
    return () => clearTimeout(t);
  }, []);

  const txnId = "TXN" + Date.now().toString().slice(-8);
  const now = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div
      className="app-shell animated-bg"
      style={{ background: "var(--sp-bg)" }}
    >
      {/* Top gradient strip */}
      <div style={{ height: 6, background: "var(--sp-gradient-success)" }} />

      {/* Success hero */}
      <div
        style={{
          background: "var(--sp-gradient-success)",
          padding: "36px 24px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Animated check circle */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            transform: tick ? "scale(1)" : "scale(0.4)",
            opacity: tick ? 1 : 0,
            transition:
              "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s",
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.8rem",
            fontWeight: 500,
            marginBottom: "6px",
            letterSpacing: "0.04em",
          }}
        >
          PAYMENT SUCCESSFUL
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: "2.4rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          ₹{Number(amount).toLocaleString("en-IN")}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.8125rem",
            marginTop: "4px",
          }}
        >
          Sent to <strong style={{ color: "#fff" }}>{contact.name}</strong>
        </p>
      </div>

      {/* Receipt card */}
      <div style={{ padding: "0 16px", marginTop: "-24px" }}>
        <div
          className="sp-card"
          style={{
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "var(--sp-shadow-md)",
          }}
        >
          {/* rows */}
          {[
            { label: "To", value: contact.name },
            note ? { label: "Note", value: note } : null,
            { label: "Transaction ID", value: txnId, mono: true },
            { label: "Date & Time", value: now },
            { label: "Paid from", value: "HDFC Bank •••• 4589" },
          ]
            .filter(Boolean)
            .map((row, i, arr) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "11px 0",
                  borderBottom:
                    i < arr.length - 1 ? "1px solid var(--sp-divider)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--sp-text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: row.mono ? "0.75rem" : "0.875rem",
                    fontWeight: 600,
                    color: "var(--sp-text-primary)",
                    fontFamily: row.mono
                      ? "'Courier New', monospace"
                      : "'Inter', sans-serif",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}

          {/* Download receipt */}
          <button
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px",
              background: "rgba(0,137,123,0.08)",
              border: "1.5px solid rgba(0,137,123,0.2)",
              borderRadius: "12px",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--sp-accent)",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Download style={{ width: 15, height: 15 }} />
            Download Receipt
          </button>
        </div>
      </div>

      {/* CTA buttons */}
      <div
        style={{
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button
          onClick={() => navigate("/payment", { state: { contact } })}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "14px",
            border: "none",
            background: "var(--sp-gradient-hero)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9375rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "var(--sp-shadow-md)",
          }}
        >
          <RefreshCw style={{ width: 16, height: 16 }} />
          Send Again
        </button>
        <button
          onClick={() => navigate("/home")}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "14px",
            border: "1.5px solid var(--sp-border)",
            background: "var(--sp-surface)",
            color: "var(--sp-text-primary)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <Home style={{ width: 16, height: 16 }} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
