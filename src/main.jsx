import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ErrorBoundary component for catching errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-black text-brand-bone flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-display uppercase tracking-wider text-brand-red mb-4">
            Something went wrong
          </h1>
          <p className="text-brand-muted max-w-md mb-6">
            An unexpected error occurred. Please refresh the page to return to BlackIron Gym.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-brand-red text-white font-display uppercase tracking-wider rounded-sm"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);