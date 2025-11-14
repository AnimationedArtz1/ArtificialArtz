// Services, Pricing, About, Contact Pages

// New Services Page: Otonom İçerik Motoru
const ServicesPage = () => {
    return React.createElement('div', { className: 'min-h-screen page-transition' },
        // Hero
        React.createElement('section', { className: 'py-16 px-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20' },
            React.createElement('div', { className: 'max-w-5xl mx-auto text-center' },
                React.createElement('h1', { className: 'text-4xl md:text-5xl font-extrabold mb-4 gradient-text' }, 'Otonom İçerik Motoru'),
                React.createElement('p', { className: 'text-xl text-gray-300 mb-8 max-w-3xl mx-auto' }, 'AI destekli içerik motoru: Blog, sosyal medya ve e-posta için tutarlı, çok kanallı içerik üretimi ve dağıtımı. Ölçeklenebilir, ölçümlenebilir, sürekli.'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow'
                    }, 'Get Started Now'),
                    React.createElement('button', {
                        onClick: () => { if (window.appNavigate) window.appNavigate('pricing'); else window.location.hash = '#/pricing'; },
                        className: 'border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200'
                    }, 'See Pricing')
                )
            )
        ),
        
        // What it does
        React.createElement(Section, { title: 'Ne Yapar?', subtitle: 'Markanız için 7/24 çalışan, kanallar arası tutarlılık sağlayan içerik üretim ve dağıtım sistemi.' },
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
                [
                    'Blog, LinkedIn, X ve e-posta için tek kaynaktan çok formatlı içerik',
                    'Marka tonu ve stiline göre tutarlı üretim',
                    'Takvimli planlama ve otomatik yayınlama',
                    'SEO brifleri ve anahtar kelime kapsaması',
                    'Görsel ve kısa video varyasyonları',
                    'Raporlama ve performans geri beslemesi'
                ].map((f, i) => React.createElement('div', { key: i, className: 'p-5 bg-gray-900 rounded-xl border border-gray-700 flex items-start' },
                    React.createElement('span', { className: 'text-green-400 mr-3 mt-0.5' }, '✓'),
                    React.createElement('span', { className: 'text-gray-300' }, f)
                ))
            )
        ),
        
        // How it works
        React.createElement(Section, { title: 'Nasıl Çalışır?', subtitle: 'Basit, şeffaf ve ölçeklenebilir bir akış.' },
            React.createElement('ol', { className: 'grid md:grid-cols-2 gap-6 list-decimal list-inside' },
                [
                    'Keşif ve içerik stratejisi: Hedef kitle, ana temalar, yayın takvimi',
                    'Kurulum: n8n akışları + cto.new üzerinde üretim şablonları',
                    'Üretim: Haftalık/aylık içerik paketlerinin otomatik oluşturulması',
                    'Dağıtım: Kanal bazlı formatlama + zamanlama + UTM ile ölçüm'
                ].map((step, i) => React.createElement('li', { key: i, className: 'p-5 bg-gray-900 rounded-xl border border-gray-700 text-gray-300' }, step))
            )
        ),
        
        // Stack
        React.createElement(Section, { title: 'Kullanılan Teknolojiler', subtitle: 'Modern otomasyon yığını ile güvenilir altyapı.' },
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
                [
                    { icon: '⚙️', title: 'n8n', desc: 'No/low-code orkestrasyon, zamanlama, hata yönetimi, entegrasyonlar' },
                    { icon: '🧠', title: 'cto.new', desc: 'Tekrarlanabilir şablonlar, üretim mantığı, geliştirici verimliliği' }
                ].map((item, i) => React.createElement('div', { key: i, className: 'p-6 bg-gray-900 rounded-xl border border-gray-700 flex items-start' },
                    React.createElement('div', { className: 'text-2xl mr-3' }, item.icon),
                    React.createElement('div', {},
                        React.createElement('h4', { className: 'font-semibold text-accent' }, item.title),
                        React.createElement('p', { className: 'text-gray-300 text-sm' }, item.desc)
                    )
                ))
            )
        ),

        // CTA
        React.createElement(Section, { title: 'Hemen Başlayalım', subtitle: '3–5 gün içinde çalışan bir içerik motoruna sahip olun.' },
            React.createElement('div', { className: 'text-center' },
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'bg-gradient-to-r from-accent-light to-accent text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow'
                    }, 'Hemen Başla'),
                    React.createElement('button', {
                        onClick: () => { if (window.appNavigate) window.appNavigate('pricing'); else window.location.hash = '#/pricing'; },
                        className: 'border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors duration-200'
                    }, 'Paketleri Gör')
                ),
                React.createElement('p', { className: 'text-gray-400 text-sm mt-4' }, 'Aylık abonelik odaklıdır. İsteğe bağlı tek seferlik kurulum da yapılır.')
            )
        )
    );
};

// Enhanced About Page Component (from previous version)
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
                    'Our team of AI automation experts turning complex workflows into simple, profitable systems'
                )
            ),

            // Story Section
            React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12 mb-16' },
                React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl card-hover' },
                    React.createElement('h2', { className: 'text-2xl font-bold mb-6 text-accent' }, 'Our Story'),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed mb-6' },
                        "We're not your typical automation team. While others build complex systems that break, we create simple automations that just work. Based globally and serving clients worldwide through Fiverr and Bionluk, we're committed to making AI accessible to everyone."
                    ),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed mb-6' },
                        "We started with a simple problem: businesses drowning in repetitive tasks while AI sits unused. Our solution: practical automation that generates real ROI, not fancy demos. We believe in delivering results that matter."
                    ),
                    React.createElement('p', { className: 'text-lg text-gray-300 leading-relaxed' },
                        "150+ projects later, our clients save thousands of hours and generate millions in content. Our approach: Keep it simple, make it work, deliver results. Join our growing community of successful automations."
                    )
                ),
                
                React.createElement('div', { className: 'space-y-6' },
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-green-400' }, '🎯 Mission'),
                        React.createElement('p', { className: 'text-gray-300' }, 'We make AI automation accessible and affordable for every business, regardless of technical expertise or budget. Your success is our mission.')
                    ),
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-blue-400' }, '🚀 Vision'),
                        React.createElement('p', { className: 'text-gray-300' }, 'A world where teams focus on strategy and creativity while AI handles the repetitive work. We\'re building the future of work together.')
                    ),
                    React.createElement('div', { className: 'bg-gray-800 p-6 rounded-lg card-hover' },
                        React.createElement('h3', { className: 'text-xl font-bold mb-3 text-purple-400' }, '⭐ Values'),
                        React.createElement('p', { className: 'text-gray-300' }, 'Practical solutions over hype. Your success over complexity. Reliability without shortcuts. We stand by our work.')
                    )
                )
            ),

            // Enhanced Capabilities & Specializations
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-16' },
                React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl card-hover' },
                    React.createElement('h3', { className: 'text-2xl font-bold mb-6 text-accent flex items-center' },
                        '🎯 What We Create',
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
                        '🛠️ Our Process',
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
                React.createElement('p', { className: 'text-xl mb-8' }, 'Let\'s build something amazing that actually works for your business. Message us via Fiverr or Bionluk to get started.'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
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

// Contact Page Component - Simplified Platform Selection (from previous version)
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
                React.createElement('h1', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'Get In Touch'),
                React.createElement('p', { className: 'text-xl text-gray-300 mb-8 max-w-2xl mx-auto' },
                    'Message us via Fiverr or Bionluk to discuss your AI automation project. We\'re here to help you succeed!'
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
                            href: 'https://www.fiverr.com/s/0bx48oy',
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
                    href: 'https://www.fiverr.com/s/0bx48oy',
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

// Pricing Page Component
const PricingPage = () => {
    const packages = [
        {
            name: 'Başlangıç',
            description: 'Kurulum + MVP içerik motoru',
            eur: 290,
            try: '9.900',
            features: [
                'Tek seferlik strateji oturumu',
                '1 kanal otomasyon (Blog veya LinkedIn)',
                '4 içerik/ay',
                'Temel SEO brif',
                'Basit raporlama paneli'
            ],
            note: 'Tek seferlik kurulum seçeneği: €490 / ₺17.000'
        },
        {
            name: 'Haftalık İçerik',
            description: 'Haftalık üretim ve dağıtım',
            eur: 690,
            try: '23.000',
            popular: true,
            features: [
                '3 kanal otomasyon (Blog + LinkedIn + X)',
                '8–12 içerik/ay',
                'Görsel/GIF varyasyonları',
                'Takvimli yayınlama',
                'A/B başlık testleri',
                'Aylık performans raporu'
            ],
            note: 'Önerilen: Abonelik. Tek seferlik pilot: €790 / ₺26.000'
        },
        {
            name: 'İtibar Arttırıcı',
            description: 'Çok kanallı, çok formatlı, ileri raporlama',
            eur: 1190,
            try: '39.000',
            features: [
                '5+ kanal (ekstra e-posta/Medium/Reddit)',
                'Çok dilli üretim (isteğe bağlı)',
                'Haftalık 1 kampanya + 3 mikro içerik',
                'İleri SEO brif ve backlink entegrasyonu',
                'Sosyal dinleme ve kriz takibi',
                'Detaylı KPI raporu ve öneriler'
            ],
            note: 'Aylık taahhüt ile indirim. Tek seferlik kampanya kurulumu: €1.490 / ₺49.000'
        }
    ];

    return React.createElement('div', { className: 'min-h-screen py-8 px-4' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            React.createElement('div', { className: 'text-center mb-12' },
                React.createElement('h1', { className: 'text-4xl font-bold gradient-text mb-3' }, 'Pricing'),
                React.createElement('p', { className: 'text-gray-300 text-lg' }, 'Aylık abonelik odaklı. Berlin (€) ve Türkiye (₺) fiyatları birlikte gösterilir.')
            ),
            React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
                packages.map(p => React.createElement(PricingCard, {
                    key: p.name,
                    name: p.name,
                    popular: p.popular,
                    description: p.description,
                    priceEUR: p.eur,
                    priceTRY: p.try,
                    features: p.features,
                    note: p.note
                }))
            ),
            React.createElement('div', { className: 'text-center mt-10 text-sm text-gray-400' }, 'Fiyatlara KDV dahil değildir. Ödemeler Stripe/İBAN ile yapılabilir.'),
            React.createElement('div', { className: 'text-center mt-6' },
                React.createElement('a', {
                    href: 'https://www.fiverr.com/s/0bx48oy',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'inline-block bg-gradient-to-r from-accent-light to-accent text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow'
                }, 'Get Started')
            )
        )
    );
};
