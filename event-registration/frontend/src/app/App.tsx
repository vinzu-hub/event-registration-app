import { useState, FormEvent, useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import './styles.css';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize particles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Particle configuration
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: ['grab', 'bubble'],
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 200,
            links: {
              opacity: 0.5,
              color: '#a78bfa',
            },
          },
          bubble: {
            distance: 250,
            size: 8,
            duration: 2,
            opacity: 0.8,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#6366f1', '#a855f7', '#ec4899', '#8b5cf6', '#f472b6'],
        },
        links: {
          color: '#a78bfa',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.05,
          },
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ['circle', 'triangle', 'star'],
        },
        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('🎉 Registration Successful!');
        setMessageType('success');
        setFormData({ name: '', email: '', event: '' });
      } else {
        if (data.message?.includes('already exists') || data.error?.includes('already exists')) {
          setMessage('⚠️ Registration already exists!');
        } else {
          setMessage(data.message || data.error || '⚠️ Registration failed!');
        }
        setMessageType('error');
      }
    } catch (error) {
      setMessage('⚠️ Connection error. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="background-gradient"></div>
      
      {/* Moving Background Shapes */}
      <div className="moving-shapes">
        <div className="shape shape-circle shape-1"></div>
        <div className="shape shape-square shape-2"></div>
        <div className="shape shape-triangle shape-3"></div>
        <div className="shape shape-circle shape-4"></div>
        <div className="shape shape-square shape-5"></div>
        <div className="shape shape-triangle shape-6"></div>
        <div className="shape shape-circle shape-7"></div>
        <div className="shape shape-square shape-8"></div>
        <div className="shape shape-hexagon shape-9"></div>
        <div className="shape shape-circle shape-10"></div>
      </div>

      {/* Interactive Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      
      {/* Main Content */}
      <div className="content-wrapper">
        <div className="glass-card">
          <div className="card-header">
            <h1 className="title">Event Registration</h1>
            <p className="subtitle">Join us for an unforgettable experience</p>
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="event" className="form-label">Select Event</label>
              <select
                id="event"
                value={formData.event}
                onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                className="form-select"
                required
              >
                <option value="">Choose an event</option>
                <option value="Tech Fest">Tech Fest</option>
                <option value="Cultural Event">Cultural Event</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="button-content">
                  <span className="spinner"></span>
                  Registering...
                </span>
              ) : (
                'Register Now'
              )}
            </button>
          </form>

          {/* Message Display */}
          {message && (
            <div className={`message message-${messageType}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}