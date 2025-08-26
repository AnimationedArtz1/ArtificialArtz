// Shared Components - Updated with Blog link
const { useState, useEffect } = React;

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    className: 'hidden md:flex space-x-8'
                },
                    // Regular navigation items
                    ['Home', 'Tools', 'Services', 'About', 'Contact'].map(item =>
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
                    )
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
                    ['Home', 'Tools', 'Services', 'About', 'Contact'].map(item =>
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
                    )
                )
            )
        )
    );
};

// Footer Component
const Footer = () => {
    return React.createElement('footer', {
        className: 'bg-gray-900 border-t border-gray-800 py-8'
    },
        React.createElement('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        },
            React.createElement('div', {
                className: 'flex flex-col md:flex-row justify-between items-center'
            },
                React.createElement('div', {
                    className: 'flex items-center space-x-3 mb-4 md:mb-0'
                },
                    React.createElement('img', {
                        src: './logo.png',
                        alt: 'ArtificialArtz Logo',
                        className: 'w-8 h-8 rounded-full object-cover border border-accent/30',
                        onError: (e) => {
                            // Fallback to text if logo fails to load
                            e.target.style.display = 'none';
                        }
                    }),
                    React.createElement('div', {
                        className: 'text-gray-400'
                    }, '© 2025 ArtificialArtz')
                ),
                
                React.createElement('div', {
                    className: 'flex space-x-6'
                },
                    React.createElement('a', {
                        href: 'https://www.youtube.com/@Artificial-Artz0',
                        target: '_blank',
                        className: 'text-gray-400 hover:text-accent transition-colors duration-200'
                    }, 'YouTube'),
                    React.createElement('a', {
                        href: 'https://x.com/ArtzArtificial',
                        target: '_blank',
                        className: 'text-gray-400 hover:text-accent transition-colors duration-200'
                    }, 'X'),
                    React.createElement('a', {
                        href: 'https://www.linkedin.com/in/artificial-artz/',
                        target: '_blank',
                        className: 'text-gray-400 hover:text-accent transition-colors duration-200'
                    }, 'LinkedIn')
                )
            )
        )
    );
};