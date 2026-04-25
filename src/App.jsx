import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import QuickActions from "./components/QuickActions";
import People from "./components/People";
import { History, ShieldCheck, Plus, ChevronRight } from "lucide-react";
import { ToastProvider, useToast } from "./components/ToastContext";
import QRScannerPage from "./pages/QRScannerPage";
import ContactsPage from "./pages/ContactsPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import BankBalancePage from "./pages/BankBalancePage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import OffersPage from "./pages/OffersPage";

function AppContent() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [setupComplete, setSetupComplete] = useState(false);

  const handleSetupComplete = () => {
    setSetupComplete(true);
    showToast("SansarPay balance setup complete!", "success");
  };

  const handleBusinessClick = (businessName) => {
    showToast(`Opening ${businessName} payment`, "success");
    setTimeout(() => navigate("/payment"), 600);
  };

  const handleOfferClick = (offerType) => {
    navigate("/offers");
  };

  const handleBankBalance = () => {
    navigate("/bank-balance");
  };

  const handleTransactionHistory = () => {
    navigate("/history");
  };

  const handleFABClick = () => {
    navigate("/contacts");
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl overflow-hidden font-sans flex flex-col">
      {/* Status Bar (Simulated) */}
      <div className="bg-white px-6 py-2 flex justify-between items-center text-xs font-medium text-gray-500">
        <span>SansarPay</span>
        <div className="flex gap-2">
          <span>LTE</span>
          <span>85%</span>
        </div>
      </div>

      <Header />

      <main className="flex-1 overflow-y-auto pb-20">
        {/* Banner */}
        {!setupComplete && (
          <div className="p-4">
            <div className="bg-blue-50 rounded-2xl p-4 flex items-center justify-between border border-blue-100">
              <div>
                <h3 className="font-semibold text-blue-900 text-sm">
                  Setup SansarPay balance
                </h3>
                <p className="text-xs text-blue-700 mt-1">
                  Make payments without a bank account
                </p>
              </div>
              <button
                className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                onClick={handleSetupComplete}
              >
                Finish
              </button>
            </div>
          </div>
        )}

        <QuickActions />

        <div className="h-2 bg-gray-100" />

        <People />

        <div className="h-2 bg-gray-100" />

        {/* Businesses Section */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Businesses</h2>
            <button
              className="flex items-center text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-gray-200 hover:bg-blue-50 transition-colors"
              onClick={() => showToast("Exploring businesses", "info")}
            >
              Explore
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-y-6 gap-x-2">
            {[
              { name: "Zomato", icon: "Z", color: "bg-red-500" },
              { name: "Swiggy", icon: "S", color: "bg-orange-500" },
              { name: "Airtel", icon: "A", color: "bg-red-600" },
              { name: "Jio", icon: "J", color: "bg-blue-700" },
            ].map((biz, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 cursor-pointer group"
                onClick={() => handleBusinessClick(biz.name)}
              >
                <div
                  className={`w-14 h-14 rounded-full ${biz.color} flex items-center justify-center text-white text-xl font-bold shadow-sm transition-transform group-active:scale-95 group-hover:opacity-90`}
                >
                  {biz.icon}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {biz.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2 bg-gray-100" />

        {/* Offers & Rewards */}
        <div className="p-6 bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Offers and rewards
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Rewards", icon: "🎁", color: "bg-blue-50" },
              { label: "Offers", icon: "🏷️", color: "bg-pink-50" },
              { label: "Referrals", icon: "🤝", color: "bg-green-50" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 cursor-pointer group"
                onClick={() => handleOfferClick(item.label)}
              >
                <div
                  className={`w-full aspect-square rounded-2xl ${item.color} flex items-center justify-center text-2xl group-hover:scale-105 transition-transform`}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 space-y-4">
          <button
            className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            onClick={handleBankBalance}
          >
            <div className="flex items-center gap-4">
              <History className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-800">
                Check bank balance
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button
            className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            onClick={handleTransactionHistory}
          >
            <div className="flex items-center gap-4">
              <History className="w-6 h-6 text-blue-600" />
              <span className="font-medium text-gray-800">
                See transaction history
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="p-8 text-center text-gray-400 text-xs">
          <div className="flex items-center justify-center gap-1 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>SECURED WITH SansarPay</span>
          </div>
          <p>UPI ID: siddhant@sansarpay</p>
        </div>
      </main>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center text-blue-600 transition-transform active:scale-95 z-20 md:absolute md:bottom-10 md:right-10 hover:bg-blue-50 hover:shadow-2xl"
        onClick={handleFABClick}
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
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
