import { Setting } from "./pages/Setting";
import { TimeDisplay } from "./pages/TimeDisplay";
import { LocationProvider, ErrorBoundary, Router, Route } from "preact-iso";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          {[
            <Route path="/" component={TimeDisplay} />,
            <Route path="/setting" component={Setting} />,
          ]}
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
