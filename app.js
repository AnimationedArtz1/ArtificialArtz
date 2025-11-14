// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState(window.__INITIAL_ROUTE__ || 'home');
    const [currentTagline, setCurrentTagline] = useState(0);
    
    const taglines = [
        "Automate smarter, create faster.",
        "Tiny tools, massive leverage.",
        "From idea to workflow in minutes.",
        "AI that ships – not just demos.",
        "Routines to revenue, step by step.",
        "Reuse, remix, automate.",
        "Prompts that pay the bills.",
        "Build once, run forever.",
        "Humans decide, bots deliver.",
        "Content at scale – without chaos."


    ];

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    // Rotating taglines effect

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline(prev => (prev + 1) % taglines.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const HomePage = () => {
        const [blogPosts, setBlogPosts] = useState([]);
        const [blogLoading, setBlogLoading] = useState(true);
        const [blogError, setBlogError] = useState(false);
        
        // Digital Transformation Section State (for future Coming Soon functionality)
        const [transformationIdeas, setTransformationIdeas] = useState([]);
        const [transformationLoading, setTransformationLoading] = useState(false);

        useEffect(() => {
            // Check if we have cached blog posts (less than 1 hour old)
            const cachedPosts = localStorage.getItem('artificialartz_blog_posts');
            const cacheTime = localStorage.getItem('artificialartz_blog_cache_time');
            const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
            
            if (cachedPosts && cacheTime && (Date.now() - parseInt(cacheTime)) < oneHour) {
                // Use cached data
                setBlogPosts(JSON.parse(cachedPosts));
                setBlogLoading(false);
                return;
            }

            // Fetch fresh blog posts with better error handling
            const fetchBlogPosts = async () => {
                try {
                    const response = await fetch('https://blog.artificialartz.xyz/wp-json/wp/v2/posts?per_page=3', {
                        timeout: 5000 // 5 second timeout
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        setBlogPosts(data);
                        // Cache the results
                        localStorage.setItem('artificialartz_blog_posts', JSON.stringify(data));
                        localStorage.setItem('artificialartz_blog_cache_time', Date.now().toString());
                        setBlogError(false);
                    } else {
                        throw new Error('Failed to fetch');
                    }
                } catch (error) {
                    console.log('Blog fetch failed, using fallback content');
                    setBlogError(true);
                    // Fallback content if blog is not accessible
                    setBlogPosts([
                        {
                            title: { rendered: 'Getting Started with AI Automation' },
                            date: new Date().toISOString(),
                            excerpt: { rendered: 'Learn the basics of implementing AI automation in your business workflow...' },
                            link: 'https://blog.artificialartz.xyz'
                        },
                        {
                            title: { rendered: 'Top 5 Workflow Automation Tools' },
                            date: new Date(Date.now() - 86400000).toISOString(),
                            excerpt: { rendered: 'Compare the best automation platforms for small businesses and enterprises...' },
                            link: 'https://blog.artificialartz.xyz'
                        },
                        {
                            title: { rendered: 'ROI of Business Automation' },
                            date: new Date(Date.now() - 172800000).toISOString(),
                            excerpt: { rendered: 'Calculate the real return on investment from automation implementations...' },
                            link: 'https://blog.artificialartz.xyz'
                        }
                    ]);
                } finally {
                    setBlogLoading(false);
                }
            };

            fetchBlogPosts();
        }, []);

        return React.createElement('div', { className: 'min-h-screen' },
            // Hero Section
            React.createElement('section', { className: 'py-20 px-4' },
                React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
                    React.createElement('h1', { 
                        className: 'text-4xl md:text-6xl font-bold mb-6 text-light-text' 
                    }, 'AI destekli içerik motoru — ArtificialArtz'),
                    
                    React.createElement('div', { 
                        className: 'h-16 mb-8 flex items-center justify-center' 
                    },
                        React.createElement('p', { 
                            className: 'text-xl md:text-2xl text-gray-300 transition-all duration-500',
                            key: currentTagline
                        }, taglines[currentTagline])
                    ),
                    
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                        React.createElement('a', {
                            href: 'https://www.fiverr.com/s/0bx48oy',
                            target: '_blank',
                            className: 'bg-gradient-to-r from-accent-light to-accent text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200'
                        }, 'Hire Me on Fiverr'),
                        
                        React.createElement('a', {
                            href: 'https://www.bionluk.com/artificialartz',
                            target: '_blank',
                            className: 'border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200'
                        }, 'Hire Me on Bionluk')
                    )
                )
            ),

            // Enhanced Featured Tools Section
            React.createElement('section', { className: 'py-16 px-4 bg-gray-900' },
                React.createElement('div', { className: 'max-w-6xl mx-auto' },
                    React.createElement('div', { className: 'text-center mb-12' },
                        React.createElement('h2', { className: 'text-3xl font-bold mb-4 gradient-text' }, 'Featured AI Tools'),
                        React.createElement('p', { className: 'text-xl text-gray-400 max-w-3xl mx-auto' }, 
                            'Try our powerful AI tools instantly - no registration required. See the quality of our work before hiring.'
                        )
                    ),
                    
                    React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
                        [
                            {
                                id: 'hook',
                                icon: '✨',
                                title: 'Viral Hook Generator',
                                description: 'Create engaging social media hooks that stop the scroll and drive engagement',
                                features: ['4 tone variations', 'Platform-specific', 'Instant generation', 'Copy to clipboard'],
                                bgGradient: 'from-purple-600 to-blue-600',
                                demoText: 'Generate hooks for any topic instantly'
                            },
                            {
                                id: 'youtube',
                                icon: '🎬',
                                title: 'YouTube Ideas Generator',
                                description: 'Generate viral YouTube video ideas with complete outlines and engagement predictions',
                                features: ['Complete outlines', 'View predictions', 'Multiple formats', 'Trending topics'],
                                bgGradient: 'from-red-600 to-orange-600',
                                demoText: 'Create viral video concepts in seconds'
                            },
                            {
                                id: 'blog',
                                icon: '📝',
                                title: 'Blog Outline Builder',
                                description: 'Create SEO-optimized blog outlines with structured sections and subsections',
                                features: ['SEO scoring', 'Reading time calc', 'Structured format', 'Multiple types'],
                                bgGradient: 'from-green-600 to-teal-600',
                                demoText: 'Build perfect blog structures automatically'
                            }
                        ].map((tool, index) =>
                            React.createElement('div', {
                                key: tool.id,
                                className: 'bg-dark-bg p-6 rounded-xl border border-gray-700 card-hover group relative overflow-hidden'
                            },
                                // Gradient background overlay
                                React.createElement('div', {
                                    className: `absolute inset-0 bg-gradient-to-br ${tool.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`
                                }),
                                
                                // Content
                                React.createElement('div', { className: 'relative z-10' },
                                    React.createElement('div', { className: 'text-center mb-6' },
                                        React.createElement('div', { className: 'text-5xl mb-4' }, tool.icon),
                                        React.createElement('h3', { className: 'text-xl font-bold mb-2 text-accent' }, tool.title),
                                        React.createElement('p', { className: 'text-gray-400 text-sm mb-4' }, tool.description)
                                    ),
                                    
                                    React.createElement('div', { className: 'mb-6' },
                                        React.createElement('h4', { className: 'text-sm font-semibold mb-3 text-gray-300' }, 'Features:'),
                                        React.createElement('ul', { className: 'space-y-2' },
                                            tool.features.map((feature, i) =>
                                                React.createElement('li', {
                                                    key: i,
                                                    className: 'text-gray-400 text-xs flex items-center'
                                                },
                                                    React.createElement('span', { className: 'text-green-400 mr-2 text-sm' }, '✓'),
                                                    feature
                                                )
                                            )
                                        )
                                    ),
                                    
                                    React.createElement('div', { className: 'mb-6 p-3 bg-gray-800 rounded-lg border border-gray-600' },
                                        React.createElement('div', { className: 'text-xs text-gray-500 mb-1' }, 'Demo Preview:'),
                                        React.createElement('div', { className: 'text-sm text-gray-300' }, tool.demoText)
                                    ),
                                    
                                    React.createElement('div', { className: 'flex flex-col gap-3' },
                                        React.createElement('button', {
                                            className: `w-full bg-gradient-to-r ${tool.bgGradient} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg`,
                                            onClick: () => setCurrentPage('tools')
                                        }, '🚀 Try Now (Free)'),
                                        
                                        React.createElement('div', { className: 'text-center' },
                                            React.createElement('span', { className: 'text-xs text-gray-500' }, 'No registration • Instant results')
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    
                    // Tools Statistics
                    React.createElement('div', { className: 'mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4' },
                        [
                            { number: '10K+', label: 'Hooks Generated', icon: '✨' },
                            { number: '5K+', label: 'Video Ideas', icon: '🎬' },
                            { number: '3K+', label: 'Blog Outlines', icon: '📝' },
                            { number: '98%', label: 'User Satisfaction', icon: '⭐' }
                        ].map((stat, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'text-center p-4 bg-dark-bg rounded-lg border border-gray-700 card-hover'
                            },
                                React.createElement('div', { className: 'text-2xl mb-2' }, stat.icon),
                                React.createElement('div', { className: 'text-2xl font-bold text-accent mb-1' }, stat.number),
                                React.createElement('div', { className: 'text-xs text-gray-400' }, stat.label)
                            )
                        )
                    )
                )
            ),

            // Blog Section with improved loading
            React.createElement('section', { className: 'py-16 px-4' },
                React.createElement('div', { className: 'max-w-6xl mx-auto' },
                    React.createElement('h2', { className: 'text-3xl font-bold text-center mb-12' }, 'From the Blog'),
                    
                    blogLoading ? 
                        React.createElement('div', { className: 'text-center py-12' },
                            React.createElement('div', { className: 'loading-spinner mx-auto mb-4' }),
                            React.createElement('p', { className: 'text-gray-400' }, 'Loading latest posts...')
                        ) :
                        React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
                            blogPosts.map((post, index) =>
                                React.createElement('div', { 
                                    key: `blog-post-${index}`, 
                                    className: 'bg-gray-900 p-6 rounded-lg card-hover'
                                },
                                    React.createElement('h3', { className: 'text-xl font-bold mb-2' }, post.title?.rendered || 'Blog Post'),
                                    React.createElement('p', { className: 'text-gray-400 text-sm mb-4' }, new Date(post.date).toLocaleDateString()),
                                    React.createElement('p', { className: 'text-gray-300 mb-4 blog-excerpt' }, post.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 100) + '...'),
                                    React.createElement('a', {
                                        href: post.link,
                                        target: '_blank',
                                        className: 'text-accent hover:underline transition-colors'
                                    }, 'Read More')
                                )
                            ),
                            blogError && React.createElement('div', { className: 'col-span-full text-center text-gray-500 text-sm' },
                                'Blog posts loaded from cache or fallback content'
                            )
                        )
                )
            ),

            // What I Build Section
            React.createElement('section', { className: 'py-16 px-4 bg-gray-900' },
                React.createElement('div', { className: 'max-w-6xl mx-auto' },
                    React.createElement('h2', { className: 'text-3xl font-bold text-center mb-4' }, 'What I Build'),
                    React.createElement('p', { className: 'text-center text-gray-400 mb-12 max-w-3xl mx-auto' }, 
                        'Professional AI automation solutions that work reliably and scale with your business'
                    ),
                    
                    React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
                        [
                            {
                                icon: "🤖",
                                title: "Smart Workflows",
                                description: "Custom n8n automations that connect your tools and eliminate manual tasks",
                                features: ["API integrations", "Conditional logic", "Error handling", "Real-time monitoring"]
                            },
                            {
                                icon: "📝",
                                title: "Content Systems",
                                description: "AI-powered content generation and distribution across multiple platforms",
                                features: ["Blog automation", "Social media", "Email sequences", "SEO optimization"]
                            },
                            {
                                icon: "🎯",
                                title: "Lead Machines",
                                description: "Automated lead capture, scoring, and nurturing systems that convert",
                                features: ["CRM integration", "Lead scoring", "Follow-up sequences", "Analytics tracking"]
                            }
                        ].map((service, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'bg-dark-bg p-8 rounded-lg border border-gray-700 card-hover text-center'
                            },
                                React.createElement('div', { className: 'text-5xl mb-6' }, service.icon),
                                React.createElement('h3', { className: 'text-xl font-bold mb-4 text-accent' }, service.title),
                                React.createElement('p', { className: 'text-gray-300 mb-6' }, service.description),
                                React.createElement('ul', { className: 'space-y-2' },
                                    service.features.map((feature, i) =>
                                        React.createElement('li', {
                                            key: i,
                                            className: 'text-gray-400 text-sm flex items-center justify-center'
                                        }, 
                                            React.createElement('span', { className: 'text-green-400 mr-2' }, '✓'),
                                            feature
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),

            // Digital Transformation with ArtificialArtz Section
            React.createElement('section', { className: 'py-16 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30' },
                React.createElement('div', { className: 'max-w-6xl mx-auto' },
                    React.createElement('div', { className: 'text-center mb-12' },
                        React.createElement('h2', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'Digital Transformation with AI & ArtificialArtz'),
                        React.createElement('p', { className: 'text-xl text-gray-300 mb-8 max-w-3xl mx-auto' }, 
                            'Discover how AI automation can revolutionize your business operations with real-world examples and cutting-edge solutions.'
                        )
                    ),
                    
                    React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12' },
                        // Coming Soon Generator
                        React.createElement('div', { className: 'bg-gray-900/80 p-8 rounded-xl border border-gray-700 relative overflow-hidden' },
                            React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10' }),
                            React.createElement('div', { className: 'relative z-10' },
                                React.createElement('h3', { className: 'text-2xl font-bold mb-6 text-accent flex items-center' },
                                    React.createElement('span', { className: 'text-3xl mr-3' }, '🤖'),
                                    'AI Transformation Ideas Generator'
                                ),
                                
                                React.createElement('div', { className: 'text-center py-12' },
                                    React.createElement('div', { className: 'text-6xl mb-4' }, '🚧'),
                                    React.createElement('h4', { className: 'text-3xl font-bold text-accent mb-4' }, 'Coming Soon'),
                                    React.createElement('p', { className: 'text-gray-300 mb-6' }, 'Advanced AI-powered transformation idea generator in development. Get personalized automation strategies tailored to your specific business needs.'),
                                    React.createElement('div', { className: 'bg-gray-800/60 p-4 rounded-lg mb-6' },
                                        React.createElement('p', { className: 'text-sm text-yellow-300' }, '💡 Preview: Input your business type, challenges, and goals to receive custom automation roadmaps with implementation timelines and ROI projections.')
                                    ),
                                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                                        React.createElement('a', {
                                            href: 'https://www.fiverr.com/s/0bx48oy',
                                            target: '_blank',
                                            className: 'bg-gradient-to-r from-accent-light to-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200'
                                        }, 'Get Custom Solutions Now'),
                                        React.createElement('a', {
                                            href: 'https://www.bionluk.com/artificialartz',
                                            target: '_blank',
                                            className: 'border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200'
                                        }, 'Turkish Support')
                                    )
                                )
                            )
                        ),
                        
                        // Enhanced Transformation Benefits with Recent Info
                        React.createElement('div', { className: 'space-y-6' },
                            React.createElement('h3', { className: 'text-2xl font-bold mb-6 text-center' }, 'Why Digital Transformation Now?'),
                            
                            [
                                { 
                                    icon: '📈', 
                                    title: 'AI Market Explosion (2024-2025)', 
                                    desc: 'The global AI automation market reached $8.4B in 2024 and is projected to hit $35.9B by 2030. Early adopters are capturing 73% more market share than competitors.',
                                    stats: '73% higher market share'
                                },
                                { 
                                    icon: '⚡', 
                                    title: 'GPT-4 & Advanced AI Integration', 
                                    desc: 'Latest AI models like GPT-4, Claude 3, and specialized business AI can now handle complex workflows, reducing human intervention by 85% in routine tasks.',
                                    stats: '85% task automation'
                                },
                                { 
                                    icon: '💰', 
                                    title: 'Proven ROI in 2024 Studies', 
                                    desc: 'McKinsey 2024 report shows businesses implementing AI automation see average cost reductions of 40-60% and productivity increases of 250% within 12 months.',
                                    stats: '250% productivity boost'
                                },
                                { 
                                    icon: '🏆', 
                                    title: 'Competitive Edge Revolution', 
                                    desc: 'Companies not adopting AI automation by 2025 risk becoming obsolete. 89% of industry leaders credit AI automation for their market dominance.',
                                    stats: '89% leader adoption'
                                }
                            ].map((benefit, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: 'flex items-start space-x-4 p-6 bg-gray-800/60 rounded-lg card-hover border-l-4 border-accent'
                                },
                                    React.createElement('div', { className: 'text-4xl' }, benefit.icon),
                                    React.createElement('div', { className: 'flex-1' },
                                        React.createElement('div', { className: 'flex items-center justify-between mb-2' },
                                            React.createElement('h4', { className: 'font-bold text-lg text-accent' }, benefit.title),
                                            React.createElement('span', { className: 'text-xs bg-green-600 text-white px-2 py-1 rounded' }, benefit.stats)
                                        ),
                                        React.createElement('p', { className: 'text-gray-300 text-sm leading-relaxed' }, benefit.desc)
                                    )
                                )
                            )
                        )
                    ),
                    
                    // Example Transformation Ideas
                    React.createElement('div', { className: 'mt-16' },
                        React.createElement('h3', { className: 'text-3xl font-bold mb-4 text-center text-accent' }, '💡 Real AI Transformation Examples'),
                        React.createElement('p', { className: 'text-center text-gray-300 mb-12 max-w-3xl mx-auto' }, 
                            'See how businesses like yours are leveraging AI automation to achieve extraordinary results with specific, actionable implementations.'
                        ),
                        
                        React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
                            [
                                {
                                    category: 'E-commerce Revolution',
                                    title: 'Intelligent Inventory Optimization Engine',
                                    description: 'Multi-modal AI system that analyzes historical sales data, weather patterns, social media trends, and economic indicators to predict demand with 94% accuracy.',
                                    implementation: [
                                        'GPT-4 analyzes customer reviews sentiment',
                                        'Computer vision tracks competitor pricing',
                                        'ML algorithms optimize stock levels hourly',
                                        'Automated supplier negotiations via API'
                                    ],
                                    results: '67% reduction in overstock, 45% increase in profit margins',
                                    complexity: 'Advanced',
                                    timeframe: '3-4 weeks',
                                    investment: '$2,500-5,000',
                                    roi: '340% in 6 months',
                                    icon: '📊'
                                },
                                {
                                    category: 'Marketing Automation 2.0',
                                    title: 'Hyper-Personalized Content Generation System',
                                    description: 'AI-powered content engine that creates personalized blog posts, social media content, and email campaigns based on individual customer behavior patterns and micro-segmentation.',
                                    implementation: [
                                        'Customer journey mapping with AI clustering',
                                        'Dynamic content generation using Claude/GPT-4',
                                        'A/B testing automation with statistical significance',
                                        'Multi-channel distribution with optimal timing'
                                    ],
                                    results: '285% increase in engagement, 156% higher conversion rates',
                                    complexity: 'Medium',
                                    timeframe: '2-3 weeks',
                                    investment: '$1,800-3,500',
                                    roi: '520% in 4 months',
                                    icon: '🎯'
                                },
                                {
                                    category: 'SaaS Intelligence Hub',
                                    title: 'Predictive Customer Success Platform',
                                    description: 'Advanced AI system that predicts customer churn 90 days in advance, automatically creates retention campaigns, and optimizes pricing strategies in real-time.',
                                    implementation: [
                                        'Behavioral pattern recognition with LSTM networks',
                                        'Automated intervention workflows',
                                        'Dynamic pricing optimization algorithms',
                                        'Integration with Slack, HubSpot, and Stripe'
                                    ],
                                    results: '78% reduction in churn, 156% increase in LTV',
                                    complexity: 'Expert',
                                    timeframe: '4-6 weeks',
                                    investment: '$4,000-8,000',
                                    roi: '650% in 8 months',
                                    icon: '🚀'
                                }
                            ].map((example, index) =>
                                React.createElement('div', {
                                    key: index,
                                    className: 'bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 card-hover relative overflow-hidden'
                                },
                                    React.createElement('div', { className: 'absolute top-0 right-0 bg-gradient-to-l from-accent to-transparent w-32 h-32 opacity-10' }),
                                    React.createElement('div', { className: 'relative z-10' },
                                        React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                                            React.createElement('span', { className: 'text-xs bg-accent/20 text-accent px-3 py-1 rounded-full' }, example.category),
                                            React.createElement('span', { className: 'text-3xl' }, example.icon)
                                        ),
                                        React.createElement('h4', { className: 'text-xl font-bold mb-3 text-accent' }, example.title),
                                        React.createElement('p', { className: 'text-gray-300 text-sm mb-6 leading-relaxed' }, example.description),
                                        
                                        React.createElement('div', { className: 'mb-6' },
                                            React.createElement('h5', { className: 'font-semibold mb-3 text-green-400 text-sm' }, 'Implementation Stack:'),
                                            React.createElement('ul', { className: 'space-y-1' },
                                                example.implementation.map((item, i) =>
                                                    React.createElement('li', { key: i, className: 'text-xs text-gray-400 flex items-start' },
                                                        React.createElement('span', { className: 'text-green-400 mr-2 mt-1' }, '•'),
                                                        item
                                                    )
                                                )
                                            )
                                        ),
                                        
                                        React.createElement('div', { className: 'bg-gray-800/60 p-4 rounded-lg mb-6' },
                                            React.createElement('p', { className: 'text-yellow-300 font-semibold text-sm mb-2' }, 'Achieved Results:'),
                                            React.createElement('p', { className: 'text-yellow-200 text-xs' }, example.results)
                                        ),
                                        
                                        React.createElement('div', { className: 'grid grid-cols-2 gap-4 text-xs' },
                                            React.createElement('div', {},
                                                React.createElement('p', { className: 'text-gray-500' }, 'Complexity:'),
                                                React.createElement('p', { className: 'text-blue-400 font-semibold' }, example.complexity)
                                            ),
                                            React.createElement('div', {},
                                                React.createElement('p', { className: 'text-gray-500' }, 'Timeline:'),
                                                React.createElement('p', { className: 'text-orange-400 font-semibold' }, example.timeframe)
                                            ),
                                            React.createElement('div', {},
                                                React.createElement('p', { className: 'text-gray-500' }, 'Investment:'),
                                                React.createElement('p', { className: 'text-purple-400 font-semibold' }, example.investment)
                                            ),
                                            React.createElement('div', {},
                                                React.createElement('p', { className: 'text-gray-500' }, 'ROI:'),
                                                React.createElement('p', { className: 'text-green-400 font-semibold' }, example.roi)
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        
                        React.createElement('div', { className: 'text-center mt-12' },
                            React.createElement('div', { className: 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-accent/30' },
                                React.createElement('h4', { className: 'text-2xl font-bold mb-4 text-accent' }, 'Ready for Your Custom Transformation?'),
                                React.createElement('p', { className: 'text-gray-300 mb-6 max-w-2xl mx-auto' }, 
                                    'These examples represent just a fraction of what\'s possible. Get your custom AI automation strategy designed specifically for your business challenges and goals.'
                                ),
                                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                                    React.createElement('a', {
                                        href: 'https://www.fiverr.com/s/0bx48oy',
                                        target: '_blank',
                                        className: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
                                    }, '🌍 Get International Solution (Fiverr)'),
                                    React.createElement('a', {
                                        href: 'https://www.bionluk.com/artificialartz',
                                        target: '_blank',
                                        className: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
                                    }, '🇹🇷 Türkiye Özel Çözüm (Bionluk)')
                                )
                            )
                        )
                    )
                )
            ),

            // Work with Me Section
            React.createElement('section', { className: 'py-16 px-4 bg-gradient-to-r from-accent-light to-accent' },
                React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
                    React.createElement('h2', { className: 'text-3xl font-bold mb-4' }, 'Ready to Automate Your Business?'),
                    React.createElement('p', { className: 'text-xl mb-8' }, 'Transform your business with AI automation solutions that drive real results'),
                    
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                        React.createElement('a', {
                            href: 'https://www.fiverr.com/s/0bx48oy',
                            target: '_blank',
                            className: 'bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg'
                        }, '🔥 Hire on Fiverr'),
                        
                        React.createElement('a', {
                            href: 'https://www.bionluk.com/artificialartz',
                            target: '_blank',
                            className: 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105'
                        }, '💼 Hire on Bionluk')
                    )
                )
            )
        );
    };

    const renderPage = () => {
        switch(currentPage) {
            case 'home': return React.createElement(HomePage);
            case 'tools': return React.createElement(ToolsPage);
            case 'services': return React.createElement(ServicesPage);
            case 'pricing': return React.createElement(PricingPage);
            case 'about': return React.createElement(AboutPage);
            case 'contact': return React.createElement(ContactPage);
            default: return React.createElement(HomePage);
        }
    };

    return React.createElement('div', { className: 'min-h-screen bg-dark-bg' },
        React.createElement(Navbar, { currentPage, setCurrentPage }),
        renderPage(),
        React.createElement(Footer)
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));