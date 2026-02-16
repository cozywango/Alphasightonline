import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    // Check if GA is already initialized to avoid duplicate initializations
    if (!window.ga4Initialized) {
      ReactGA.initialize("G-6D528RSF32");
      window.ga4Initialized = true;
    }
  }, []);

  useEffect(() => {
    // Send pageview with a custom path whenever the route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

// Add type definition for the global window object to include the initialization flag
declare global {
  interface Window {
    ga4Initialized: boolean;
  }
}

export default GoogleAnalytics;
