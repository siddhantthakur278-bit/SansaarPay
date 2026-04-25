import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroPoster from "../assets/hero.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className={`landing-page ${videoFailed ? "landing-static" : ""}`}>
      {!videoFailed && (
        <video
          className="landing-video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          onError={() => setVideoFailed(true)}
        >
          <source
            src="https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <div className="landing-aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="landing-overlay" />

      <div className="landing-content">
        <div className="landing-brand-pill">SansaarPay</div>
        <h1>Fast, Secure, Beautiful Payments</h1>
        <p>
          Pay contacts, scan QR, track transactions, and manage rewards in one
          smooth app.
        </p>
        <button className="landing-cta" onClick={() => navigate("/home")}>
          Enter App
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
