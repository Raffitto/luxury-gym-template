import { Component } from 'react'
import { grindGymLbConfig } from '../data/clients/grindGymLbConfig'

const fallback = grindGymLbConfig

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('[AppErrorBoundary]', error)
  }

  render() {
    if (this.state.hasError) {
      const mapsUrl =
        fallback.location?.googleMapsUrl ||
        'https://www.google.com/maps/search/?api=1&query=Grind+Gym+WJF6+MQ4+Mtaileb+Lebanon'

      return (
        <div
          style={{
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: '#000',
            color: '#f2f2f2',
            fontFamily: 'system-ui, sans-serif',
            textAlign: 'center',
          }}
        >
          <p style={{ letterSpacing: '0.2em', fontSize: '0.65rem', opacity: 0.6 }}>GRIND GYM</p>
          <h1 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>Grind Gym · Mtaileb</h1>
          <p style={{ marginTop: '1rem', maxWidth: '20rem', lineHeight: 1.5, opacity: 0.85 }}>
            {fallback.hero?.subline || 'Built through discipline.'}
          </p>
          <a
            href={mapsUrl}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              background: '#e10600',
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.12em',
              fontSize: '0.75rem',
            }}
          >
            Get Directions
          </a>
        </div>
      )
    }

    return this.props.children
  }
}
