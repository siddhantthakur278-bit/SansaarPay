import React from "react";
import {
  QrCode,
  Contact,
  Smartphone,
  Landmark,
  History,
  Receipt,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { useToast } from "./ToastContext";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ icon: Icon, label, color, onClick }) => (
  <div
    className="flex flex-col items-center gap-2 cursor-pointer group"
    onClick={onClick}
  >
    <div
      className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-sm transition-transform group-active:scale-95 group-hover:opacity-90`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center max-w-[70px] leading-tight">
      {label}
    </span>
  </div>
);

const QuickActions = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleActionClick = (actionName) => {
    showToast(`${actionName} feature opened!`, "success");

    // Navigate to appropriate pages
    switch (actionName) {
      case "Scan any QR code":
        setTimeout(() => navigate("/qr-scanner"), 500);
        break;
      case "Pay contacts":
        setTimeout(() => navigate("/contacts"), 800);
        break;
      case "Pay phone number":
        setTimeout(() => navigate("/payment"), 600);
        break;
      case "Bank transfer":
        setTimeout(() => navigate("/payment"), 700);
        break;
      case "Self transfer":
        setTimeout(() => navigate("/payment"), 500);
        break;
      case "Pay bills":
        setTimeout(() => navigate("/payment"), 600);
        break;
      case "Mobile recharge":
        setTimeout(() => navigate("/payment"), 500);
        break;
      default:
        break;
    }
  };

  const actions = [
    {
      icon: QrCode,
      label: "Scan any QR code",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Scan any QR code"),
    },
    {
      icon: Contact,
      label: "Pay contacts",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Pay contacts"),
    },
    {
      icon: Smartphone,
      label: "Pay phone number",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Pay phone number"),
    },
    {
      icon: Landmark,
      label: "Bank transfer",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Bank transfer"),
    },
    {
      icon: History,
      label: "Self transfer",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Self transfer"),
    },
    {
      icon: Receipt,
      label: "Pay bills",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Pay bills"),
    },
    {
      icon: Smartphone,
      label: "Mobile recharge",
      color: "bg-blue-600",
      onClick: () => handleActionClick("Mobile recharge"),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-y-6 gap-x-2 p-6 bg-white">
      {actions.map((action, index) => (
        <ActionButton key={index} {...action} />
      ))}
    </div>
  );
};

export default QuickActions;
