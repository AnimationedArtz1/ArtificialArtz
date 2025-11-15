'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="max-w-md space-y-6">
            <h1 className="text-3xl font-bold text-white">Oops! Something went wrong</h1>
            <p className="text-white/60">
              We apologize for the inconvenience. An error occurred while rendering this page.
            </p>
            {this.state.error?.message ? (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                <p className="text-sm font-mono text-red-300">{this.state.error.message}</p>
              </div>
            ) : null}
            <div className="flex gap-3 justify-center">
              <Button onClick={() => this.setState({ hasError: false })}>Try Again</Button>
              <Button variant="secondary" onClick={() => window.location.href = '/'}>
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
