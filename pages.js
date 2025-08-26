// Enhanced Services Page Component
const ServicesPage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedPlatform, setSelectedPlatform] = useState('fiverr');

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Service packages data
    const servicePackages = {
        fiverr: [
            {
                id: 1,
                title: 'Transform Your Business with AI: Consulting + Setup',
                pitch: 'Get expert AI consultation and complete automation setup tailored to your business needs.',
                tiers: [
                    { name: 'Basic', price: '$150', features: ['1-hour consultation', 'Basic AI workflow setup', 'Documentation', '7-day support'] },
                    { name: 'Standard', price: '$450', features: ['3-hour consultation', '3 AI workflows', 'Integration setup', 'Video tutorials', '14-day support'] },
                    { name: 'Premium', price: '$900', features: ['5-hour consultation', '5 AI workflows', 'Full integration', 'Training session', '30-day support', 'Performance monitoring'] }
                ],
                gradient: 'from-purple-600 to-blue-600',
                icon: '🤖'
            },
            {
                id: 2,
                title: 'Build Custom AI Apps & Workflows (n8n + Qoder)',
                pitch: 'Custom AI applications and automated workflows built with cutting-edge tools.',
                tiers: [
                    { name: 'Basic', price: '$100', features: ['1 custom workflow', 'n8n setup', 'Basic integration', '5-day delivery'] },
                    { name: 'Standard', price: '$300', features: ['3 custom workflows', 'Advanced integrations', 'Qoder AI setup', '7-day delivery', 'Code documentation'] },
                    { name: 'Premium', price: '$600', features: ['5 custom workflows', 'Full AI app development', 'Advanced features', '10-day delivery', 'Complete training', 'Source code'] }
                ],
                gradient: 'from-green-600 to-teal-600',
                icon: '⚡'
            },
            {
                id: 3,
                title: 'Optimize Hosting & VM for AI Tools',
                pitch: 'Professional server optimization and hosting setup for AI applications.',
                tiers: [
                    { name: 'Basic', price: '$120', features: ['Server audit', 'Basic optimization', 'Security setup', '3-day delivery'] },
                    { name: 'Standard', price: '$350', features: ['Full server setup', 'Performance tuning', 'AI tool installation', 'Monitoring setup', '5-day delivery'] },
                    { name: 'Premium', price: '$700', features: ['Enterprise setup', 'High-availability config', 'Auto-scaling', 'Backup systems', 'Monitoring dashboard', '7-day delivery'] }
                ],
                gradient: 'from-orange-600 to-red-600',
                icon: '🚀'
            }
        ],
        bionluk: [
            {
                id: 1,
                title: 'İşinizi AI ile Dönüştürüyorum: Danışmanlık + Kurulum',
                pitch: 'İşinize özel AI danışmanlığı ve komple otomasyon kurulumu alın.',
                tiers: [
                    { name: 'Temel', price: '1.500 TL', features: ['1 saatlik danışmanlık', 'Temel AI iş akışı kurulumu', 'Dokümantasyon', '7 günlük destek'] },
                    { name: 'Standart', price: '4.500 TL', features: ['3 saatlik danışmanlık', '3 AI iş akışı', 'Entegrasyon kurulumu', 'Video eğitimleri', '14 günlük destek'] },
                    { name: 'Premium', price: '9.000 TL', features: ['5 saatlik danışmanlık', '5 AI iş akışı', 'Tam entegrasyon', 'Eğitim seansı', '30 günlük destek', 'Performans izleme'] }
                ],
                gradient: 'from-purple-600 to-blue-600',
                icon: '🤖'
            },
            {
                id: 2,
                title: 'Özel AI Uygulamaları ve Akışlar Geliştiriyorum',
                pitch: 'En son teknolojilerle özel AI uygulamaları ve otomatik iş akışları.',
                tiers: [
                    { name: 'Temel', price: '1.000 TL', features: ['1 özel iş akışı', 'n8n kurulumu', 'Temel entegrasyon', '5 günlük teslimat'] },
                    { name: 'Standart', price: '3.000 TL', features: ['3 özel iş akışı', 'Gelişmiş entegrasyonlar', 'Qoder AI kurulumu', '7 günlük teslimat', 'Kod dokümantasyonu'] },
                    { name: 'Premium', price: '6.000 TL', features: ['5 özel iş akışı', 'Tam AI uygulama geliştirme', 'İleri özellikler', '10 günlük teslimat', 'Komple eğitim', 'Kaynak kodu'] }
                ],
                gradient: 'from-green-600 to-teal-600',
                icon: '⚡'
            },
            {
                id: 3,
                title: 'AI Çözümleri için Hosting & VM Optimizasyonu',
                pitch: 'AI uygulamaları için profesyonel sunucu optimizasyonu ve hosting kurulumu.',
                tiers: [
                    { name: 'Temel', price: '1.200 TL', features: ['Sunucu denetimi', 'Temel optimizasyon', 'Güvenlik kurulumu', '3 günlük teslimat'] },
                    { name: 'Standart', price: '3.500 TL', features: ['Tam sunucu kurulumu', 'Performans ayarlaması', 'AI araç kurulumu', 'İzleme kurulumu', '5 günlük teslimat'] },
                    { name: 'Premium', price: '7.000 TL', features: ['Kurumsal kurulum', 'Yüksek erişilebilirlik config', 'Otomatik ölçekleme', 'Yedekleme sistemleri', 'İzleme paneli', '7 günlük teslimat'] }
                ],
                gradient: 'from-orange-600 to-red-600',
                icon: '🚀'
            }
        ]
    };

    const faqs = [
        {
            question: "How quickly can you deliver automation solutions?",
            answer: "Most projects are completed within 24-48 hours for standard packages. Custom solutions typically take 3-7 days depending on complexity. I prioritize fast delivery without compromising quality."
        },
        {
            question: "Do you provide ongoing support after delivery?",
            answer: "Yes! All packages include 30 days of free support and troubleshooting. I also offer monthly maintenance packages for complex systems that need regular updates."
        },
        {
            question: "What if the automation doesn't work as expected?",
            answer: "I guarantee all deliverables work as specified. If there are issues, I'll fix them for free within the support period. Client satisfaction is my top priority."
        },
        {
            question: "Can you integrate with my existing tools?",
            answer: "Absolutely! I specialize in connecting different platforms and tools. Whether it's Shopify, WordPress, HubSpot, or custom APIs, I can make them work together seamlessly."
        },
        {
            question: "How do you ensure data security and privacy?",
            answer: "I follow industry best practices for data security, use secure API connections, and never store sensitive client data. All automations are built with privacy and security in mind."
        },
        {
            question: "What's the difference between Fiverr and Bionluk services?",
            answer: "Bionluk is for Turkish customers and communication, while Fiverr serves international customers worldwide. Both offer the same quality services with platform-appropriate communication and support."
        }
    ];

    return React.createElement('div', { className: 'min-h-screen py-8 px-4' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            // Header
            React.createElement('div', { className: 'text-center mb-16' },
                React.createElement('h1', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'My Freelance Services'),
                React.createElement('p', { className: 'text-xl text-gray-300 mb-6 max-w-3xl mx-auto' },
                    'Professional AI automation solutions that save time, increase efficiency, and drive real business results.'
                ),
                React.createElement('div', { className: 'flex items-center justify-center space-x-8 text-sm text-gray-400' },
                    React.createElement('div', { className: 'flex items-center' },
                        React.createElement('span', { className: 'text-green-400 mr-2' }, '✓'),
                        'Fast 24-48h delivery'
                    ),
                    React.createElement('div', { className: 'flex items-center' },
                        React.createElement('span', { className: 'text-green-400 mr-2' }, '✓'),
                        '98% satisfaction rate'
                    ),
                    React.createElement('div', { className: 'flex items-center' },
                        React.createElement('span', { className: 'text-green-400 mr-2' }, '✓'),
                        '30-day support included'
                    )
                )
            ),

            // Capabilities Showcase
            React.createElement('section', { className: 'mb-16' },
                React.createElement('h2', { className: 'text-3xl font-bold mb-8 text-center' }, 'What I Specialize In'),
                React.createElement('div', { className: 'grid lg:grid-cols-2 gap-8' },
                    [
                        {
                            title: "AI Content Automation",
                            description: "Complete content creation and distribution systems that scale your output without sacrificing quality.",
                            capabilities: ["Blog post automation", "Social media scheduling", "SEO content optimization", "Multi-platform distribution"],
                            icon: "📝"
                        },
                        {
                            title: "Workflow Integration",
                            description: "Connect your existing tools and platforms into seamless, automated workflows that eliminate manual tasks.",
                            capabilities: ["CRM automation", "E-commerce integration", "Email marketing flows", "Data synchronization"],
                            icon: "🔗"
                        },
                        {
                            title: "Lead Generation Systems",
                            description: "Automated lead capture, scoring, and nurturing systems that turn visitors into customers.",
                            capabilities: ["Lead scoring automation", "Follow-up sequences", "Conversion tracking", "Customer journey mapping"],
                            icon: "🎯"
                        },
                        {
                            title: "Business Process Optimization",
                            description: "Streamline your operations with intelligent automation that adapts to your business needs.",
                            capabilities: ["Task automation", "Report generation", "Data processing", "Performance monitoring"],
                            icon: "⚙️"
                        }
                    ].map((capability, index) =>
                        React.createElement('div', {
                            key: index,
                            className: 'bg-gray-900 p-8 rounded-xl border border-gray-700 card-hover'
                        },
                            React.createElement('div', { className: 'flex items-center mb-4' },
                                React.createElement('div', { className: 'text-4xl mr-4' }, capability.icon),
                                React.createElement('h3', { className: 'text-2xl font-bold text-accent' }, capability.title)
                            ),
                            React.createElement('p', { className: 'text-gray-300 mb-6' }, capability.description),
                            React.createElement('div', { className: 'grid grid-cols-2 gap-3' },
                                capability.capabilities.map((cap, i) =>
                                    React.createElement('div', {
                                        key: i,
                                        className: 'flex items-center text-sm text-gray-400'
                                    },
                                        React.createElement('span', { className: 'text-green-400 mr-2' }, '✓'),
                                        cap
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            
            // Enhanced Service Packages with Platform Toggle
            React.createElement('section', { className: 'mb-16' },
                React.createElement('div', { className: 'text-center mb-12' },
                    React.createElement('h2', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'Service Packages'),
                    React.createElement('p', { className: 'text-xl text-gray-400 mb-8 max-w-2xl mx-auto' }, 
                        'Choose your platform and discover tailored automation solutions designed for real business results.'
                    ),
                    
                    // Platform Toggle Buttons
                    React.createElement('div', { className: 'flex justify-center mb-8' },
                        React.createElement('div', { className: 'bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-700' },
                            React.createElement('button', {
                                onClick: () => setSelectedPlatform('fiverr'),
                                className: `px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                    selectedPlatform === 'fiverr' 
                                        ? 'bg-gradient-to-r from-accent-light to-accent text-white shadow-lg scale-105' 
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`
                            }, '🌍 Fiverr (International)'),
                            React.createElement('button', {
                                onClick: () => setSelectedPlatform('bionluk'),
                                className: `px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ml-2 ${
                                    selectedPlatform === 'bionluk' 
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                }`
                            }, '🇹🇷 Bionluk (Türkiye)')
                        )
                    ),
                    
                    // Platform Info Badge
                    React.createElement('div', { className: 'inline-block' },
                        React.createElement('div', { 
                            className: `px-4 py-2 rounded-full text-sm border-2 ${
                                selectedPlatform === 'fiverr' 
                                    ? 'bg-accent/10 border-accent/30 text-accent' 
                                    : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                            }`
                        }, selectedPlatform === 'fiverr' ? '🌐 Serving clients worldwide with English communication' : '🇹🇷 Türk müşterilere özel hizmet ve Türkçe iletişim')
                    ),
                    
                    // Portfolio Link
                    React.createElement('div', { className: 'mt-6' },
                        React.createElement('a', {
                            href: 'https://artificialartz.xyz',
                            target: '_blank',
                            className: 'inline-flex items-center text-gray-400 hover:text-accent transition-colors text-sm'
                        },
                            React.createElement('span', { className: 'mr-2' }, '💼'),
                            'View Complete Portfolio & Case Studies',
                            React.createElement('span', { className: 'ml-1 text-xs' }, '↗')
                        )
                    )
                ),
                
                // Service Cards Grid
                React.createElement('div', { className: 'grid lg:grid-cols-2 xl:grid-cols-3 gap-8' },
                    servicePackages[selectedPlatform].map((service) =>
                        React.createElement('div', {
                            key: service.id,
                            className: 'bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden group'
                        },
                            // Service Header
                            React.createElement('div', { className: `p-6 bg-gradient-to-r ${service.gradient} relative overflow-hidden` },
                                React.createElement('div', { className: 'absolute inset-0 bg-black/20' }),
                                React.createElement('div', { className: 'relative z-10' },
                                    React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                                        React.createElement('div', { className: 'text-4xl' }, service.icon),
                                        React.createElement('div', { className: 'text-xs bg-white/20 px-3 py-1 rounded-full' }, `Gig #${service.id}`)
                                    ),
                                    React.createElement('h3', { className: 'text-xl font-bold text-white mb-3 leading-tight' }, service.title),
                                    React.createElement('p', { className: 'text-white/90 text-sm' }, service.pitch)
                                )
                            ),
                            
                            // Pricing Tiers
                            React.createElement('div', { className: 'p-6' },
                                React.createElement('div', { className: 'space-y-4 mb-6' },
                                    service.tiers.map((tier, index) =>
                                        React.createElement('div', {
                                            key: index,
                                            className: `p-4 rounded-lg border-2 transition-all duration-300 hover:scale-102 ${
                                                index === 1 
                                                    ? 'border-accent bg-accent/5 ring-1 ring-accent/20' 
                                                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                                            }`
                                        },
                                            React.createElement('div', { className: 'flex justify-between items-center mb-3' },
                                                React.createElement('div', {},
                                                    React.createElement('h4', { className: 'font-bold text-white flex items-center' },
                                                        tier.name,
                                                        index === 1 && React.createElement('span', { className: 'ml-2 text-xs bg-accent text-white px-2 py-1 rounded-full' }, 'Popular')
                                                    ),
                                                    React.createElement('div', { className: 'text-2xl font-bold text-accent' }, tier.price)
                                                )
                                            ),
                                            React.createElement('ul', { className: 'space-y-2' },
                                                tier.features.slice(0, 3).map((feature, i) =>
                                                    React.createElement('li', {
                                                        key: i,
                                                        className: 'text-gray-300 text-sm flex items-center'
                                                    },
                                                        React.createElement('span', { className: 'text-green-400 mr-2 text-xs' }, '✓'),
                                                        feature
                                                    )
                                                ),
                                                tier.features.length > 3 && React.createElement('li', {
                                                    className: 'text-gray-400 text-xs italic'
                                                }, `+${tier.features.length - 3} more features`)
                                            )
                                        )
                                    )
                                ),
                                
                                // CTA Button
                                React.createElement('a', {
                                    href: selectedPlatform === 'fiverr' ? 'https://www.fiverr.com/s/e6AREEj' : 'https://www.bionluk.com/artificialartz',
                                    target: '_blank',
                                    className: `block w-full text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl ${
                                        selectedPlatform === 'fiverr'
                                            ? 'bg-gradient-to-r from-accent-light to-accent hover:from-accent hover:to-accent-light text-white'
                                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                                    }`
                                },
                                    React.createElement('span', { className: 'flex items-center justify-center' },
                                        React.createElement('span', { className: 'mr-2' }, selectedPlatform === 'fiverr' ? '🚀' : '💼'),
                                        `Order on ${selectedPlatform === 'fiverr' ? 'Fiverr' : 'Bionluk'}`,
                                        React.createElement('span', { className: 'ml-2' }, '→')
                                    )
                                )
                            )
                        )
                    )
                )
            ),

            // Benefits Section Enhanced
            React.createElement('section', { className: 'mb-16' },
                React.createElement('div', { className: 'bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl' },
                    React.createElement('h2', { className: 'text-3xl font-bold mb-8 text-center' }, 'Why Choose ArtificialArtz?'),
                    React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
                        [
                            { icon: '🚀', title: 'Lightning Fast', desc: 'Most projects delivered within 24-48 hours. No waiting weeks for results.' },
                            { icon: '🔧', title: 'Custom Built', desc: 'Every solution is tailored specifically for your business needs and workflows.' },
                            { icon: '📊', title: 'Proven Results', desc: '150+ successful projects with measurable ROI improvements for clients.' },
                            { icon: '🔑', title: 'Turnkey Solutions', desc: 'Complete setup, documentation, and training. You get a working system, not just code.' },
                            { icon: '🛡️', title: 'Ongoing Support', desc: '30-day free support included. I\'m here to ensure your success long-term.' },
                            { icon: '🌍', title: 'Global Experience', desc: 'Serving clients worldwide with 98% satisfaction rate across all platforms.' }
                        ].map((benefit, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'text-center p-6 bg-gray-900 rounded-lg card-hover'
                            },
                                React.createElement('div', { className: 'text-4xl mb-4' }, benefit.icon),
                                React.createElement('h3', { className: 'font-bold mb-3 text-accent' }, benefit.title),
                                React.createElement('p', { className: 'text-gray-300 text-sm' }, benefit.desc)
                            )
                        )
                    )
                )
            ),

            // FAQ Section
            React.createElement('section', { className: 'mb-16' },
                React.createElement('h2', { className: 'text-3xl font-bold text-center mb-12' }, 'Frequently Asked Questions'),
                React.createElement('div', { className: 'max-w-4xl mx-auto space-y-4' },
                    faqs.map((faq, index) =>
                        React.createElement('div', {
                            key: index,
                            className: 'bg-gray-900 rounded-lg border border-gray-700 overflow-hidden'
                        },
                            React.createElement('button', {
                                onClick: () => toggleFaq(index),
                                className: 'w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors'
                            },
                                React.createElement('h3', { className: 'font-semibold text-lg pr-4' }, faq.question),
                                React.createElement('span', {
                                    className: `text-accent transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`
                                }, '▼')
                            ),
                            openFaq === index && React.createElement('div', {
                                className: 'px-6 pb-6 text-gray-300 animate-in'
                            }, faq.answer)
                        )
                    )
                )
            ),
            
            // Enhanced CTA Section
            React.createElement('section', { className: 'text-center bg-gradient-to-br from-accent-light via-accent to-purple-600 p-12 rounded-xl neon-glow' },
                React.createElement('h2', { className: 'text-3xl font-bold mb-4' }, 'Ready to Transform Your Business?'),
                React.createElement('p', { className: 'text-xl mb-6' }, 'Ready to transform your business with AI automation?'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center mb-6' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/e6AREEj',
                        target: '_blank',
                        className: 'bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg btn-primary'
                    }, '🚀 Quick Start on Fiverr'),
                    
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105 btn-primary'
                    }, '💼 Custom Solutions on Bionluk')
                ),
                React.createElement('p', { className: 'text-sm opacity-90' }, 'Free consultation included • Same-day response • Expert support')
            )
        )
    );
};

// Enhanced About Page Component
const AboutPage = () => {
    return React.createElement('div', { className: 'min-h-screen py-8 px-4' },
        React.createElement('div', { className: 'max-w-5xl mx-auto' },
            // Hero Section
            React.createElement('div', { className: 'text-center mb-16' },
                React.createElement('div', { className: 'w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden border-4 border-accent/30 hover:border-accent transition-colors duration-300' },
                    React.createElement('img', {
                        src: './logo.png',
                        alt: 'ArtificialArtz Logo',
                        className: 'w-full h-full object-cover hover:scale-110 transition-transform duration-300',
                        onError: (e) => {
                            // Fallback to AA if logo fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-r', 'from-accent-light', 'to-accent');
                            e.target.parentElement.innerHTML = '<span class="text-4xl font-bold text-white">AA</span>';
                        }
                    })
                ),
                React.createElement('h1', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'About ArtificialArtz'),
                React.createElement('p', { className: 'text-xl text-gray-300 max-w-2xl mx-auto' },
                    'Solo AI automation specialist turning complex workflows into simple, profitable systems'
                )
            ),

            // Story Section
            React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12 mb-16' },
                React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl card-hover' },
                    React.createElement('h2', { className: 'text-2xl font-bold mb-6 text-accent' }, 'My Story'),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed mb-6' },
                        "I'm not your typical developer. While others build complex systems that break, I create simple automations that just work. Based in Berlin, serving clients globally through Fiverr and Bionluk."
                    ),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed mb-6' },
                        "Started with a simple problem: businesses drowning in repetitive tasks while AI sits unused. My solution: practical automation that generates real ROI, not fancy demos."
                    ),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed' },
                        "150+ projects later, my clients save thousands of hours and generate millions in content. My approach: Keep it simple, make it work, deliver results."
                    )
                ),
                
                React.createElement('div', { className: 'space-y-6' },
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-green-400' }, '🎯 Mission'),
                        React.createElement('p', { className: 'text-gray-300' }, 'Make AI automation accessible to every business, regardless of technical expertise or budget.')
                    ),
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-400' }, '🚀 Vision'),
                        React.createElement('p', { className: 'text-gray-300' }, 'A world where humans focus on strategy and creativity while AI handles the repetitive work.')
                    ),
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-purple-400' }, '⭐ Values'),
                        React.createElement('p', { className: 'text-gray-300' }, 'Practical solutions over hype. Client success over complexity. Fast delivery without shortcuts.')
                    )
                )
            ),

            // Enhanced Capabilities & Specializations
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-16' },
                React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl card-hover' },
                    React.createElement('h3', { className: 'text-2xl font-bold mb-6 text-accent flex items-center' },
                        '🎯 What I Create',
                        React.createElement('span', { className: 'ml-3 text-sm bg-accent/20 px-2 py-1 rounded' }, 'Specialized Solutions')
                    ),
                    React.createElement('div', { className: 'space-y-6' },
                        [
                            { icon: '🤖', title: 'AI Content Engines', desc: 'Automated content creation and distribution systems that scale your brand' },
                            { icon: '🔗', title: 'Workflow Connectors', desc: 'Seamless integrations between your existing tools and platforms' },
                            { icon: '📊', title: 'Lead Generation Machines', desc: 'Automated lead capture, scoring, and nurturing systems' },
                            { icon: '📧', title: 'Email Automation Systems', desc: 'Smart email sequences that convert prospects into customers' },
                            { icon: '🛒', title: 'E-commerce Automations', desc: 'Product listing, inventory, and customer service automation' },
                            { icon: '📈', title: 'Analytics & Reporting', desc: 'Automated data collection and business intelligence systems' }
                        ].map((capability, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'flex items-start space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors'
                            },
                                React.createElement('div', { className: 'text-2xl' }, capability.icon),
                                React.createElement('div', {},
                                    React.createElement('h4', { className: 'font-semibold text-white mb-1' }, capability.title),
                                    React.createElement('p', { className: 'text-gray-400 text-sm' }, capability.desc)
                                )
                            )
                        )
                    )
                ),
                
                React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl card-hover' },
                    React.createElement('h3', { className: 'text-2xl font-bold mb-6 text-accent flex items-center' },
                        '🛠️ Implementation Approach',
                        React.createElement('span', { className: 'ml-3 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded' }, 'Proven Process')
                    ),
                    React.createElement('div', { className: 'space-y-6' },
                        [
                            { step: '1', title: 'Discovery & Planning', desc: 'Understand your current workflows and identify automation opportunities' },
                            { step: '2', title: 'Custom Development', desc: 'Build tailored solutions using the right tools for your specific needs' },
                            { step: '3', title: 'Testing & Optimization', desc: 'Thorough testing and performance optimization before deployment' },
                            { step: '4', title: 'Documentation & Training', desc: 'Complete documentation and training to ensure smooth operation' },
                            { step: '5', title: 'Ongoing Support', desc: '30-day support period with monitoring and maintenance' }
                        ].map((step, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'flex items-start space-x-4 p-4 bg-gray-800 rounded-lg'
                            },
                                React.createElement('div', { 
                                    className: 'w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0' 
                                }, step.step),
                                React.createElement('div', {},
                                    React.createElement('h4', { className: 'font-semibold text-white mb-1' }, step.title),
                                    React.createElement('p', { className: 'text-gray-400 text-sm' }, step.desc)
                                )
                            )
                        )
                    )
                )
            ),

            // CTA Section
            React.createElement('div', { className: 'text-center bg-gradient-to-r from-accent-light to-accent p-12 rounded-xl' },
                React.createElement('h2', { className: 'text-3xl font-bold mb-4' }, 'Ready to Work Together?'),
                React.createElement('p', { className: 'text-xl mb-8' }, 'Let\'s build something amazing that actually works for your business'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/e6AREEj',
                        target: '_blank',
                        className: 'bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-primary'
                    }, '🚀 Start Project on Fiverr'),
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-all duration-300 transform hover:scale-105 btn-primary'
                    }, '💼 Custom Solutions on Bionluk')
                )
            )
        )
    );
};

// Contact Page Component - Simplified Platform Selection
const ContactPage = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('fiverr');

    // Platform content data
    const platformContent = {
        fiverr: {
            title: 'Contact Us via Freelance Platforms',
            subtitle: 'You can contact us via our Bionluk or Fiverr profiles. Share your projects with us!',
            description: 'Choose your preferred platform to get started with professional AI automation services.',
            benefits: [
                'Fast 24-48h delivery',
                'Professional English communication',
                'International payment methods',
                'Proven track record worldwide'
            ]
        },
        bionluk: {
            title: 'Freelance Platformları ile İletişim',
            subtitle: 'Bize ulaşmak için Bionluk veya Fiverr profillerimizden iletişime geçebilirsiniz. Projelerinizi bizimle paylaşın!',
            description: 'Profesyonel AI otomasyon hizmetleri için tercih ettiğiniz platformu seçin.',
            benefits: [
                'Hızlı 24-48 saat teslimat',
                'Türkçe iletişim ve destek',
                'Yerel ödeme yöntemleri',
                'Türk müşterilere özel çözümler'
            ]
        }
    };

    return React.createElement('div', { className: 'min-h-screen py-8 px-4' },
        React.createElement('div', { className: 'max-w-4xl mx-auto' },
            // Header Section
            React.createElement('div', { className: 'text-center mb-16' },
                React.createElement('h1', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'Contact Us'),
                React.createElement('p', { className: 'text-xl text-gray-300 mb-8 max-w-2xl mx-auto' },
                    'Ready to transform your business with AI automation? Let\'s start your project today!'
                ),
                
                // Platform Toggle Buttons
                React.createElement('div', { className: 'flex justify-center mb-8' },
                    React.createElement('div', { className: 'bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-700' },
                        React.createElement('button', {
                            onClick: () => setSelectedPlatform('fiverr'),
                            className: `px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                selectedPlatform === 'fiverr' 
                                    ? 'bg-gradient-to-r from-accent-light to-accent text-white shadow-lg scale-105' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`
                        }, '🌍 Fiverr (International)'),
                        React.createElement('button', {
                            onClick: () => setSelectedPlatform('bionluk'),
                            className: `px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ml-2 ${
                                selectedPlatform === 'bionluk' 
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`
                        }, '🇹🇷 Bionluk (Türkiye)')
                    )
                ),
                
                // Platform Info Badge
                React.createElement('div', { className: 'inline-block' },
                    React.createElement('div', { 
                        className: `px-4 py-2 rounded-full text-sm border-2 ${
                            selectedPlatform === 'fiverr' 
                                ? 'bg-accent/10 border-accent/30 text-accent' 
                                : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                        }`
                    }, selectedPlatform === 'fiverr' ? '🌐 Serving clients worldwide with English communication' : '🇹🇷 Türk müşterilere özel hizmet ve Türkçe iletişim')
                )
            ),
            
            // Main Content Section
            React.createElement('div', { className: 'bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden' },
                // Header with gradient
                React.createElement('div', { 
                    className: `p-8 text-center ${
                        selectedPlatform === 'fiverr' 
                            ? 'bg-gradient-to-r from-accent-light to-accent' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`
                },
                    React.createElement('h2', { className: 'text-3xl font-bold text-white mb-4' }, 
                        platformContent[selectedPlatform].title
                    ),
                    React.createElement('p', { className: 'text-white/90 text-lg leading-relaxed max-w-2xl mx-auto' }, 
                        platformContent[selectedPlatform].subtitle
                    )
                ),
                
                // Content Body
                React.createElement('div', { className: 'p-8' },
                    React.createElement('div', { className: 'text-center mb-8' },
                        React.createElement('p', { className: 'text-gray-300 text-lg mb-6' }, 
                            platformContent[selectedPlatform].description
                        )
                    ),
                    
                    // Benefits Grid
                    React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-8' },
                        platformContent[selectedPlatform].benefits.map((benefit, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors'
                            },
                                React.createElement('span', { 
                                    className: `mr-3 text-lg ${
                                        selectedPlatform === 'fiverr' ? 'text-accent' : 'text-blue-400'
                                    }`
                                }, '✓'),
                                React.createElement('span', { className: 'text-gray-200' }, benefit)
                            )
                        )
                    ),
                    
                    // CTA Buttons
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                        React.createElement('a', {
                            href: 'https://www.fiverr.com/s/e6AREEj',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: `group px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center ${
                                selectedPlatform === 'fiverr'
                                    ? 'bg-gradient-to-r from-accent-light to-accent hover:from-accent hover:to-accent-light text-white'
                                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white'
                            }`
                        },
                            React.createElement('div', { className: 'flex items-center justify-center' },
                                React.createElement('span', { className: 'mr-2' }, '🚀'),
                                'Order on Fiverr',
                                React.createElement('span', { className: 'ml-2' }, '→')
                            )
                        ),
                        
                        React.createElement('a', {
                            href: 'https://www.bionluk.com/artificialartz',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: `group px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center ${
                                selectedPlatform === 'bionluk'
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-white'
                            }`
                        },
                            React.createElement('div', { className: 'flex items-center justify-center' },
                                React.createElement('span', { className: 'mr-2' }, '💼'),
                                'Order on Bionluk',
                                React.createElement('span', { className: 'ml-2' }, '→')
                            )
                        )
                    )
                )
            ),
            
            // Enhanced CTA Cards
            React.createElement('div', { className: 'mt-12 grid md:grid-cols-2 gap-6' },
                React.createElement('a', {
                    href: 'https://www.fiverr.com/s/e6AREEj',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white p-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl'
                },
                    React.createElement('div', { className: 'text-4xl mb-4' }, '🚀'),
                    React.createElement('h3', { className: 'font-bold text-xl mb-3' }, 'Hire on Fiverr'),
                    React.createElement('p', { className: 'text-green-100 mb-4' }, 'Quick projects & standard services'),
                    React.createElement('div', { className: 'text-sm text-green-200' }, 'Fast delivery • Proven results')
                ),
                
                React.createElement('a', {
                    href: 'https://www.bionluk.com/artificialartz',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl'
                },
                    React.createElement('div', { className: 'text-4xl mb-4' }, '💼'),
                    React.createElement('h3', { className: 'font-bold text-xl mb-3' }, 'Hire on Bionluk'),
                    React.createElement('p', { className: 'text-blue-100 mb-4' }, 'Custom solutions & consulting'),
                    React.createElement('div', { className: 'text-sm text-blue-200' }, 'Türkçe destek • Özel çözümler')
                )
            ),
            
            // Contact Information
            React.createElement('div', { className: 'mt-12 text-center bg-gray-800 p-6 rounded-xl border border-gray-600' },
                React.createElement('h3', { className: 'text-lg font-bold mb-3 text-accent' }, 'Response Time'),
                React.createElement('p', { className: 'text-gray-300' }, 'I typically respond within 2-4 hours during business hours (CET timezone)')
            )
        )
    );
};