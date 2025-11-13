// Shared Components and Utilities
const { useState, useEffect } = React;

// Global helper to read config from window or data attributes
(function initAppConfigHelper() {
    const getCalendlyUrl = () => {
        try {
            const body = document.body || {};
            const dataUrl = (body.dataset && body.dataset.calendlyUrl) || '';
            const winUrl = (window.APP_CONFIG && window.APP_CONFIG.calendlyUrl) || '';
            return winUrl || dataUrl || 'https://calendly.com/YOUR_CALENDLY_USERNAME/intro-call';
        } catch (e) {
            return 'https://calendly.com/YOUR_CALENDLY_USERNAME/intro-call';
        }
    };
    window.getCalendlyUrl = getCalendlyUrl;
})();

// Reusable Section wrapper
const Section = ({ title, subtitle, children, className = '' }) => (
    React.createElement('section', { className: `py-16 px-4 ${className}` },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            title && React.createElement('h2', { className: 'text-3xl font-bold text-center mb-4 gradient-text' }, title),
            subtitle && React.createElement('p', { className: 'text-center text-gray-300 mb-10 max-w-3xl mx-auto' }, subtitle),
            children
        )
    )
);

// Reusable Pricing Card
const PricingCard = ({ name, popular, description, priceEUR, priceTRY, features = [], ctaLabel = 'Book Demo', onCta, note }) => (
    React.createElement('div', { className: 'bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-accent/50 transition-all duration-300 card-hover overflow-hidden' },
        React.createElement('div', { className: 'p-6 border-b border-gray-700 relative' },
            popular && React.createElement('span', { className: 'absolute top-4 right-4 text-xs bg-accent text-white px-2 py-1 rounded-full' }, 'Popular'),
            React.createElement('h3', { className: 'text-xl font-bold mb-1 text-accent' }, name),
            description && React.createElement('p', { className: 'text-gray-300 text-sm' }, description)
        ),
        React.createElement('div', { className: 'p-6' },
            React.createElement('div', { className: 'flex items-end justify-between mb-6' },
                React.createElement('div', { className: 'space-y-1' },
                    React.createElement('div', { className: 'text-2xl font-extrabold text-white' }, `€${priceEUR}/mo`),
                    React.createElement('div', { className: 'text-sm text-gray-400' }, `₺${priceTRY}/ay`)
                ),
                React.createElement('div', { className: 'text-xs text-gray-500' }, 'Monthly subscription')
            ),
            React.createElement('ul', { className: 'space-y-2 mb-6' },
                features.map((f, i) => (
                    React.createElement('li', { key: i, className: 'text-gray-300 text-sm flex items-start' },
                        React.createElement('span', { className: 'text-green-400 mr-2 mt-0.5' }, '✓'), f)
                ))
            ),
            note && React.createElement('div', { className: 'text-xs text-gray-400 bg-gray-800/60 p-3 rounded mb-4' }, note),
            React.createElement('a', {
                href: window.getCalendlyUrl(),
                target: '_blank',
                rel: 'noopener noreferrer',
                onClick: onCta,
                className: 'block w-full text-center py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-accent-light to-accent hover:from-accent hover:to-accent-light text-white transition-all duration-300 transform hover:scale-105 shadow-lg'
            }, ctaLabel)
        )
    )
);

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'Tools', 'Services', 'Pricing', 'About', 'Contact'];

    return React.createElement('nav', {
        className: 'bg-dark-bg border-b border-gray-800 sticky top-0 z-50'
    }, 
        React.createElement('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        },
            React.createElement('div', {
                className: 'flex justify-between items-center h-16'
            },
                // Logo
                React.createElement('div', {
                    className: 'flex items-center'
                },
                    React.createElement('img', {
                        src: './logo.png',
                        alt: 'ArtificialArtz Logo',
                        className: 'w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 object-cover border-2 border-accent/30 hover:border-accent',
                        onClick: () => setCurrentPage('home'),
                        onError: (e) => {
                            // Fallback to AA if logo fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }
                    }),
                    React.createElement('div', {
                        className: 'w-10 h-10 rounded-full bg-gradient-to-r from-accent-light to-accent flex items-center justify-center text-white font-bold text-lg cursor-pointer hidden',
                        onClick: () => setCurrentPage('home')
                    }, 'AA')
                ),
                
                // Navigation Links
                React.createElement('div', {
                    className: 'hidden md:flex items-center space-x-6'
                },
                    // Regular navigation items
                    navItems.map(item =>
                        React.createElement('button', {
                            key: item,
                            className: `text-light-text hover:text-accent transition-colors duration-200 ${currentPage === item.toLowerCase() ? 'text-accent' : ''}`,
                            onClick: () => setCurrentPage(item.toLowerCase())
                        }, item)
                    ),
                    // Blog link (external)
                    React.createElement('a', {
                        key: 'blog',
                        href: 'https://blog.artificialartz.xyz',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'text-light-text hover:text-accent transition-colors duration-200 flex items-center space-x-1'
                    },
                        React.createElement('span', {}, 'Blog'),
                        React.createElement('span', { className: 'text-xs' }, '↗')
                    ),
                    // Book demo CTA
                    React.createElement('a', {
                        href: window.getCalendlyUrl(),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'ml-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow'
                    }, 'Book Demo')
                ),
                
                // Mobile menu button
                React.createElement('div', {
                    className: 'md:hidden'
                },
                    React.createElement('button', {
                        className: 'text-light-text hover:text-accent transition-colors duration-200',
                        onClick: () => setMobileMenuOpen(!mobileMenuOpen)
                    }, mobileMenuOpen ? '✕' : '☰')
                )
            ),
            
            // Mobile menu
            mobileMenuOpen && React.createElement('div', {
                className: 'md:hidden border-t border-gray-800 py-4'
            },
                React.createElement('div', {
                    className: 'flex flex-col space-y-3'
                },
                    // Regular mobile navigation items
                    navItems.map(item =>
                        React.createElement('button', {
                            key: item,
                            className: `text-light-text hover:text-accent transition-colors duration-200 text-left px-4 py-2 ${currentPage === item.toLowerCase() ? 'text-accent bg-gray-800' : ''}`,
                            onClick: () => {
                                setCurrentPage(item.toLowerCase());
                                setMobileMenuOpen(false);
                            }
                        }, item)
                    ),
                    // Blog link (external) for mobile
                    React.createElement('a', {
                        key: 'blog-mobile',
                        href: 'https://blog.artificialartz.xyz',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'text-light-text hover:text-accent transition-colors duration-200 text-left px-4 py-2 flex items-center space-x-2',
                        onClick: () => setMobileMenuOpen(false)
                    },
                        React.createElement('span', {}, 'Blog'),
                        React.createElement('span', { className: 'text-xs' }, '↗')
                    ),
                    React.createElement('a', {
                        href: window.getCalendlyUrl(),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'mx-4 mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:scale-105 transition-transform duration-200 shadow',
                        onClick: () => setMobileMenuOpen(false)
                    }, 'Book Demo')
                )
            )
        )
    );
};

// Footer Component (with contact CTA)
const Footer = () => {
    return React.createElement('footer', {
        className: 'bg-gray-900 border-t border-gray-800'
    },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
            // Contact CTA
            React.createElement('div', { className: 'py-10 border-b border-gray-800 text-center' },
                React.createElement('h3', { className: 'text-2xl font-bold mb-3' }, 'Have a project in mind?'),
                React.createElement('p', { className: 'text-gray-300 mb-6' }, 'Let\'s design your AI destekli içerik motoru together.'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: window.getCalendlyUrl(),
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'bg-gradient-to-r from-accent-light to-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow'
                    }, 'Book Demo'),
                    React.createElement('button', {
                        onClick: () => { if (window.appNavigate) window.appNavigate('contact'); else window.location.hash = '#/contact'; },
                        className: 'border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200'
                    }, 'Contact')
                )
            ),
            // Bottom bar
            React.createElement('div', { className: 'py-8 flex flex-col md:flex-row justify-between items-center' },
                React.createElement('div', {
                    className: 'flex items-center space-x-3 mb-4 md:mb-0'
                },
                    React.createElement('img', {
                        src: './logo.png',
                        alt: 'ArtificialArtz Logo',
                        className: 'w-8 h-8 rounded-full object-cover border border-accent/30',
                        onError: (e) => { e.target.style.display = 'none'; }
                    }),
                    React.createElement('div', { className: 'text-gray-400' }, '© 2025 ArtificialArtz')
                ),
                React.createElement('div', { className: 'flex space-x-6' },
                    React.createElement('a', { href: 'https://www.youtube.com/@Artificial-Artz0', target: '_blank', className: 'text-gray-400 hover:text-accent transition-colors duration-200' }, 'YouTube'),
                    React.createElement('a', { href: 'https://x.com/ArtzArtificial', target: '_blank', className: 'text-gray-400 hover:text-accent transition-colors duration-200' }, 'X'),
                    React.createElement('a', { href: 'https://www.linkedin.com/in/artificial-artz/', target: '_blank', className: 'text-gray-400 hover:text-accent transition-colors duration-200' }, 'LinkedIn')
                )
            )
        )
    );
};
