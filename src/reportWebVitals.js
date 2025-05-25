import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

/**
 * Measures web vitals and sends them to the provided callback function.
 *
 * @param {(metric: import('web-vitals').Metric) => void} onPerfEntry
 */

const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
