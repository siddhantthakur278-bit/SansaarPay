import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Wallet, History as HistIcon } from "lucide-react";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import People from "./components/People";
import BottomNav from "./components/BottomNav";
import { ToastProvider, useToast } from "./components/ToastContext";
import QRScannerPage from "./pages/QRScannerPage";
import ContactsPage from "./pages/ContactsPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import BankBalancePage from "./pages/BankBalancePage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import OffersPage from "./pages/OffersPage";
import LandingPage from "./pages/LandingPage";
import "./App.css";

/* ─── Business tile ──────────────────────────────────────── */
const BizTile = ({ name, icon, grad, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      background: "none",
      border: "none",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "18px",
        background: grad,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "1.35rem",
        color: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.13)",
        transition: "transform 0.13s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
    >
      {icon}
    </div>
    <span
      style={{
        fontSize: "0.6875rem",
        fontWeight: 500,
        color: "var(--sp-text-secondary)",
      }}
    >
      {name}
    </span>
  </button>
);

/* ─── Offer card ─────────────────────────────────────────── */
const OfferCard = ({ emoji, label, bgCol, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: bgCol,
      border: "none",
      borderRadius: "16px",
      padding: "16px 10px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      flex: 1,
      transition: "transform 0.13s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <span style={{ fontSize: "2rem" }}>{emoji}</span>
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "var(--sp-text-primary)",
      }}
    >
      {label}
    </span>
  </button>
);

/* ─── Row action button (bank balance / history) ─────────── */
const RowAction = ({ icon: Icon, label, iconColor, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      background: "var(--sp-surface)",
      border: "1.5px solid var(--sp-border)",
      borderRadius: "14px",
      cursor: "pointer",
      transition: "background 0.14s, box-shadow 0.14s",
      fontFamily: "'Inter', sans-serif",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(26,35,126,0.03)";
      e.currentTarget.style.boxShadow = "var(--sp-shadow-sm)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "var(--sp-surface)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "12px",
          background: "rgba(26,35,126,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          style={{
            width: 18,
            height: 18,
            color: iconColor || "var(--sp-primary-light)",
          }}
        />
      </div>
      <span
        style={{
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "var(--sp-text-primary)",
        }}
      >
        {label}
      </span>
    </div>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--sp-text-muted)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
);

/* ─── Main content ───────────────────────────────────────── */
function AppContent() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [setupDone, setSetupDone] = useState(false);
  const [balanceHidden, setBalanceHidden] = useState(false);

  const BUSINESSES = [
    {
      name: "Zomato",
      icon: "Z",
      grad: "linear-gradient(135deg,#e53935,#ef5350)",
    },
    {
      name: "Swiggy",
      icon: "Sw",
      grad: "linear-gradient(135deg,#e65100,#ff7043)",
    },
    {
      name: "Airtel",
      icon: "Ai",
      grad: "linear-gradient(135deg,#c62828,#ef5350)",
    },
    { name: "Jio", icon: "J", grad: "linear-gradient(135deg,#0d47a1,#1565c0)" },
  ];

  return (
    <div className="app-shell animated-bg">
      <Header />

      <main style={{ flex: 1, overflowY: "auto", paddingBottom: "100px" }}>
        {/* ── Setup Banner ─────────────────────────────────── */}
        {!setupDone && (
          <div style={{ padding: "12px 16px 0" }}>
            <div
              style={{
                background:
                  "linear-gradient(135deg,rgba(26,35,126,0.07),rgba(57,73,171,0.05))",
                border: "1.5px solid rgba(26,35,126,0.12)",
                borderRadius: "14px",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "var(--sp-primary)",
                    marginBottom: 3,
                  }}
                >
                  Activate SansaarPay Balance
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--sp-text-secondary)",
                  }}
                >
                  Pay without a bank account
                </p>
              </div>
              <button
                onClick={() => {
                  setSetupDone(true);
                  showToast("SansaarPay balance activated!", "success");
                }}
                style={{
                  background: "var(--sp-gradient-hero)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "8px 18px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  flexShrink: 0,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Set Up
              </button>
            </div>
          </div>
        )}

        {/* ── Balance Card ─────────────────────────────────── */}
        <div style={{ padding: "14px 16px 0" }}>
          <div
            className="float-soft"
            style={{
              background: "var(--sp-gradient-hero)",
              borderRadius: "20px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "var(--sp-shadow-md)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: "4px",
                  letterSpacing: "0.04em",
                }}
              >
                SANSAARPAY WALLET
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {balanceHidden ? "₹ ••••••" : "₹ 12,345"}
                </span>
                <button
                  onClick={() => setBalanceHidden(!balanceHidden)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.7)",
                    padding: 0,
                  }}
                >
                  {balanceHidden ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "4px",
                }}
              >
                siddhant@sansaarpay
              </p>
            </div>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Quick Actions ─────────────────────────────────── */}
        <div style={{ marginTop: "12px" }}>
          <QuickActions />
        </div>

        <div className="sp-divider" style={{ margin: "4px 0" }} />

        {/* ── People ───────────────────────────────────────── */}
        <People />

        <div className="sp-divider" style={{ margin: "4px 0" }} />

        {/* ── Businesses ───────────────────────────────────── */}
        <section
          style={{ background: "var(--sp-surface)", padding: "20px 16px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h2 className="sp-section-title">Popular Businesses</h2>
            <button
              onClick={() => showToast("Exploring businesses", "info")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: "none",
                border: "1.5px solid var(--sp-border)",
                borderRadius: "50px",
                padding: "5px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--sp-primary-light)",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              More
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {BUSINESSES.map((b) => (
              <BizTile
                key={b.name}
                {...b}
                onClick={() => {
                  showToast(`Opening ${b.name}`, "success");
                  setTimeout(() => navigate("/payment"), 600);
                }}
              />
            ))}
          </div>
        </section>

        <div className="sp-divider" style={{ margin: "4px 0" }} />

        {/* ── Offers & Rewards ─────────────────────────────── */}
        <section
          style={{ background: "var(--sp-surface)", padding: "20px 16px" }}
        >
          <h2 className="sp-section-title" style={{ marginBottom: "14px" }}>
            Offers & Rewards
          </h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <OfferCard
              emoji="🎁"
              label="Rewards"
              bgCol="rgba(26,35,126,0.07)"
              onClick={() => navigate("/offers")}
            />
            <OfferCard
              emoji="🏷️"
              label="Offers"
              bgCol="rgba(233,30,99,0.07)"
              onClick={() => navigate("/offers")}
            />
            <OfferCard
              emoji="🤝"
              label="Referrals"
              bgCol="rgba(0,137,123,0.08)"
              onClick={() => navigate("/offers")}
            />
          </div>
        </section>

        <div className="sp-divider" style={{ margin: "4px 0" }} />

        {/* ── Footer actions ────────────────────────────────── */}
        <section
          style={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <RowAction
            icon={Wallet}
            label="Check Bank Balance"
            onClick={() => navigate("/bank-balance")}
          />
          <RowAction
            icon={HistIcon}
            label="Transaction History"
            onClick={() => navigate("/history")}
          />
        </section>

        {/* ── Footer note ───────────────────────────────────── */}
        <div style={{ padding: "12px 16px 8px", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              color: "var(--sp-text-muted)",
              fontSize: "0.70rem",
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>256-bit SSL secured · Regulated by RBI</span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<AppContent />} />
          <Route path="/qr-scanner" element={<QRScannerPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/bank-balance" element={<BankBalancePage />} />
          <Route path="/history" element={<TransactionHistoryPage />} />
          <Route path="/offers" element={<OffersPage />} />
        </Routes>
      </ToastProvider>
    </Router>
  );
}

export default App;
