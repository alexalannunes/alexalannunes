interface GtagEvent {
  (command: "event", eventName: string, params?: Record<string, unknown>): void;
}

interface Window {
  gtag?: GtagEvent;
}
