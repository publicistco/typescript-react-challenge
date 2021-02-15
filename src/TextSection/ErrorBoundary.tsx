import React from 'react';

interface Props {
    id: string;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
      super(props);

      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): State {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
  }

  render() {
      if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Failed to render for: {this.props.id}</h1>;
      }

      return this.props.children;
  }
}
