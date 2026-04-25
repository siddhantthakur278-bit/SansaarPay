import React, { useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  PlusCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ACCOUNTS = [
  {
    name: "HDFC Bank",
    number: "XXXX 4589",
    balance: 8345.23,
    type: "Savings",
    grad: "linear-gradient(135deg,#0277bd,#039be5)",
    initial: "H",
  },
  {
    name: "ICICI Bank",
    number: "XXXX 1234",
    balance: 4000.44,
    type: "Current",
    grad: "linear-gradient(135deg,#c62828,#e53935)",
    initial: "I",
  },
  {
    name: "SBI Bank",
    number: "XXXX 5678",
    balance: 0.0,
    type: "Savings",
    grad: "linear-gradient(135deg,#1a237e,#3949ab)",
    initial: "S",
  },
];

const TOTAL = ACCOUNTS.reduce((s, a) => s + a.balance, 0);

const BankBalancePage = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const fmt = (n) =>
    hidden
      ? "••••••"
      : `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <div className="app-shell animated-bg">
      {/* Header */}
      <div
        style={{
          background: "var(--sp-gradient-hero)",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          onClick={() => navigate("/home")}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ArrowLeft style={{ width: 18, height: 18, color: "#fff" }} />
        </button>
        <h1
          style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", flex: 1 }}
        >
          Bank Balance
        </h1>
        <button
          onClick={() => setHidden(!hidden)}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {hidden ? (
            <Eye style={{ width: 16, height: 16, color: "#fff" }} />
          ) : (
            <EyeOff style={{ width: 16, height: 16, color: "#fff" }} />
          )}
        </button>
      </div>

      {/* Total balance hero */}
      <div
        style={{
          background: "var(--sp-gradient-hero)",
          padding: "24px 24px 44px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "8px",
          }}
        >
          TOTAL BALANCE
        </p>
        <p
          style={{
            color: "#fff",
            fontSize: "2.6rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "6px",
          }}
        >
          {fmt(TOTAL)}
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
          Across {ACCOUNTS.length} bank accounts
        </p>

        {/* Mini stat pills */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "50px",
              padding: "5px 12px",
            }}
          >
            <TrendingUp style={{ width: 13, height: 13, color: "#80cbc4" }} />
            <span
              style={{ color: "#80cbc4", fontSize: "0.72rem", fontWeight: 600 }}
            >
              ↑ ₹45,000 received
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(255,255,255,0.12)",
              borderRadius: "50px",
              padding: "5px 12px",
            }}
          >
            <TrendingDown style={{ width: 13, height: 13, color: "#ef9a9a" }} />
            <span
              style={{ color: "#ef9a9a", fontSize: "0.72rem", fontWeight: 600 }}
            >
              ↓ ₹1,089 spent
            </span>
          </div>
        </div>
      </div>

      {/* Account cards */}
      <div
        style={{
          padding: "0 16px",
          marginTop: "-20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {ACCOUNTS.map((acc, i) => (
          <div
            key={i}
            className="sp-card"
            style={{
              padding: "16px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--sp-shadow-sm)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "13px",
                  background: acc.grad,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  color: "#fff",
                }}
              >
                {acc.initial}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--sp-text-primary)",
                    marginBottom: "2px",
                  }}
                >
                  {acc.name}
                </p>
                <p
                  style={{ fontSize: "0.72rem", color: "var(--sp-text-muted)" }}
                >
                  {acc.number} · {acc.type}
                </p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "0.9375rem",
                  color:
                    acc.balance > 0
                      ? "var(--sp-text-primary)"
                      : "var(--sp-text-muted)",
                }}
              >
                {fmt(acc.balance)}
              </p>
              <p
                style={{
                  fontSize: "0.65rem",
                  color:
                    acc.balance > 0
                      ? "var(--sp-accent)"
                      : "var(--sp-text-muted)",
                  fontWeight: 500,
                  marginTop: "2px",
                }}
              >
                {acc.balance > 0 ? "Available" : "No balance"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ padding: "16px" }}>
        <div
          className="sp-card"
          style={{ padding: "16px", borderRadius: "16px" }}
        >
          <p className="sp-section-title" style={{ marginBottom: "14px" }}>
            Quick Actions
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {[
              {
                label: "Add Money",
                color: "rgba(26,35,126,0.07)",
                border: "rgba(26,35,126,0.15)",
                text: "var(--sp-primary)",
              },
              {
                label: "Withdraw",
                color: "rgba(0,137,123,0.07)",
                border: "rgba(0,137,123,0.2)",
                text: "var(--sp-accent)",
              },
            ].map((a) => (
              <button
                key={a.label}
                style={{
                  padding: "13px",
                  borderRadius: "12px",
                  background: a.color,
                  border: `1.5px solid ${a.border}`,
                  color: a.text,
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <PlusCircle style={{ width: 15, height: 15 }} />
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "0.68rem",
          color: "var(--sp-text-muted)",
          paddingBottom: "20px",
        }}
      >
        Last synced: {new Date().toLocaleTimeString("en-IN")}
      </p>
    </div>
  );
};

export default BankBalancePage;
