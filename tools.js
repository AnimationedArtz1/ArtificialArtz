// Clean and Stable Tools Page Implementation
// Refined ArtificialArtz Tools Page with Textarea Inputs
const ToolsPage = () => {
    const { useState, useCallback } = React;
    
    // Main state
    const [activeTool, setActiveTool] = useState('hook');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [copySuccess, setCopySuccess] = useState('');
    
    // Simplified textarea states for all tools
    const [hookInput, setHookInput] = useState('');
    const [hookTone, setHookTone] = useState('professional');
    const [youtubeInput, setYoutubeInput] = useState('');
    const [youtubeType, setYoutubeType] = useState('tutorial');
    const [blogInput, setBlogInput] = useState('');
    const [blogType, setBlogType] = useState('how-to');
    
    // New tools state
    const [socialInput, setSocialInput] = useState('');
    const [socialType, setSocialType] = useState('general');
    const [taglineInput, setTaglineInput] = useState('');
    const [taglineStyle, setTaglineStyle] = useState('modern');
    const [seoInput, setSeoInput] = useState('');
    const [seoType, setSeoType] = useState('blog');
    const [taskInput, setTaskInput] = useState('');
    const [taskCriteria, setTaskCriteria] = useState('urgency');
    const [colorInput, setColorInput] = useState('');
    const [colorMood, setColorMood] = useState('professional');
    
    // Scratchpad state for free typing
    const [scratchpadText, setScratchpadText] = useState('');
    
    // Scratchpad handlers
    const handleScratchpadChange = useCallback((e) => {
        setScratchpadText(e.target.value);
    }, []);
    
    const copyScratchpadText = () => {
        if (!scratchpadText.trim()) {
            alert('Nothing to copy! Type something first.');
            return;
        }
        copyToClipboard(scratchpadText);
    };
    
    const clearScratchpad = () => {
        setScratchpadText('');
    };
    
    const pasteScratchpadToTool = () => {
        if (!scratchpadText.trim()) {
            alert('Nothing to paste! Type something in the scratchpad first.');
            return;
        }
        
        if (activeTool === 'hook') {
            setHookInput(scratchpadText);
        } else if (activeTool === 'youtube') {
            setYoutubeInput(scratchpadText);
        } else if (activeTool === 'blog') {
            setBlogInput(scratchpadText);
        } else if (activeTool === 'social') {
            setSocialInput(scratchpadText);
        } else if (activeTool === 'tagline') {
            setTaglineInput(scratchpadText);
        } else if (activeTool === 'seo') {
            setSeoInput(scratchpadText);
        } else if (activeTool === 'task') {
            setTaskInput(scratchpadText);
        } else if (activeTool === 'color') {
            setColorInput(scratchpadText);
        }
        
        // Visual feedback
        setCopySuccess('✅ Pasted to tool input!');
        setTimeout(() => setCopySuccess(''), 2000);
    };
    
    const handleHookInputChange = useCallback((e) => {
        setHookInput(e.target.value);
    }, []);
    
    const handleHookToneChange = useCallback((e) => {
        setHookTone(e.target.value);
    }, []);
    
    const handleYoutubeInputChange = useCallback((e) => {
        setYoutubeInput(e.target.value);
    }, []);
    
    const handleYoutubeTypeChange = useCallback((e) => {
        setYoutubeType(e.target.value);
    }, []);
    
    const handleBlogInputChange = useCallback((e) => {
        setBlogInput(e.target.value);
    }, []);
    
    const handleBlogTypeChange = useCallback((e) => {
        setBlogType(e.target.value);
    }, []);
    
    // New tools handlers
    const handleSocialInputChange = useCallback((e) => {
        setSocialInput(e.target.value);
    }, []);
    
    const handleSocialTypeChange = useCallback((e) => {
        setSocialType(e.target.value);
    }, []);
    
    const handleTaglineInputChange = useCallback((e) => {
        setTaglineInput(e.target.value);
    }, []);
    
    const handleTaglineStyleChange = useCallback((e) => {
        setTaglineStyle(e.target.value);
    }, []);
    
    const handleSeoInputChange = useCallback((e) => {
        setSeoInput(e.target.value);
    }, []);
    
    const handleSeoTypeChange = useCallback((e) => {
        setSeoType(e.target.value);
    }, []);
    
    const handleTaskInputChange = useCallback((e) => {
        setTaskInput(e.target.value);
    }, []);
    
    const handleTaskCriteriaChange = useCallback((e) => {
        setTaskCriteria(e.target.value);
    }, []);
    
    const handleColorInputChange = useCallback((e) => {
        setColorInput(e.target.value);
    }, []);
    
    const handleColorMoodChange = useCallback((e) => {
        setColorMood(e.target.value);
    }, []);
    
    // Hook Generator Component with Textarea
    const HookGenerator = () => {
        const generateHooks = async () => {
            if (!hookInput.trim()) {
                alert('Please paste your topic/content!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            // Extract topic from pasted content (first line or key phrases)
            const topic = hookInput.split('\n')[0].trim() || hookInput.trim();
            
            const hookTemplates = {
                professional: [
                    `🚀 Ready to transform your ${topic}? Here's what industry leaders don't tell you...`,
                    `💡 The ${topic} strategy that increased ROI by 300% (real case study inside)`,
                    `🎯 Stop wasting time on ${topic}. Here's the system that actually works:`,
                    `⚡ ${topic} breakthrough: How we achieved results in 48 hours`,
                    `🔥 The ${topic} mistake 95% of businesses make (and how to avoid it)`,
                    `📈 ${topic} made simple: 3 steps that changed everything`
                ],
                funny: [
                    `😂 Me trying to understand ${topic} vs Me after this hack...`,
                    `🤡 POV: You've been doing ${topic} wrong this whole time`,
                    `😅 ${topic} be like: 'I'm about to end this person's whole career'`,
                    `🙃 When someone says ${topic} is easy but you're over here like...`
                ],
                casual: [
                    `Hey, quick question about ${topic}... anyone else struggling?`,
                    `Okay but can we talk about ${topic} for a sec?`,
                    `${topic} update: I think I finally figured it out`,
                    `Real talk: ${topic} changed my perspective on everything`
                ],
                educational: [
                    `📚 ${topic} 101: Essential concepts everyone should know`,
                    `🎓 Advanced ${topic} techniques: Beyond the basics`,
                    `📖 ${topic} fundamentals: Building a strong foundation`,
                    `🔬 Research-backed ${topic} strategies that actually work`
                ]
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
                
                const selectedHooks = hookTemplates[hookTone] || hookTemplates.professional;
                const shuffled = [...selectedHooks].sort(() => Math.random() - 0.5);
                
                setResults(shuffled.slice(0, 4).map((hook, index) => ({
                    id: index + 1,
                    text: hook,
                    engagement: Math.floor(Math.random() * 500) + 100
                })));
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            // Beta Test Notice
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'space-y-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-3 text-center sm:text-left' }, '📝 Paste Your Content Here (Mobile Friendly)'),
                    React.createElement('textarea', {
                        placeholder: 'Tap here and paste your topic/content...\n\nExample:\nAI automation for small businesses\n\nTip: Use voice-to-text for easy input!',
                        value: hookInput,
                        onChange: handleHookInputChange,
                        rows: 6,
                        className: 'w-full p-4 text-lg bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300 resize-none touch-manipulation'
                    }),
                    React.createElement('div', { className: 'flex justify-between items-center mt-2' },
                        React.createElement('span', { className: 'text-xs text-gray-400' }, `${hookInput.length} characters`),
                        hookInput.length > 0 && React.createElement('button', {
                            onClick: () => setHookInput(''),
                            className: 'text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded transition-colors'
                        }, '🗋 Clear')
                    )
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-3 text-center sm:text-left' }, '🎨 Choose Tone'),
                    React.createElement('select', {
                        value: hookTone,
                        onChange: handleHookToneChange,
                        className: 'w-full p-4 text-lg bg-gray-800 border-2 border-gray-600 rounded-xl text-white focus:border-accent focus:outline-none transition-all duration-300 touch-manipulation'
                    },
                        React.createElement('option', { value: 'professional' }, '💼 Professional & Authoritative'),
                        React.createElement('option', { value: 'funny' }, '😂 Funny & Engaging'),
                        React.createElement('option', { value: 'casual' }, '💬 Casual & Friendly'),
                        React.createElement('option', { value: 'educational' }, '📚 Educational & Informative')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateHooks,
                disabled: loading || !hookInput.trim(),
                className: 'w-full bg-gradient-to-r from-accent-light to-accent hover:from-accent hover:to-accent-light disabled:opacity-50 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none touch-manipulation shadow-lg active:scale-95'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner mr-3' }),
                'Generating Amazing Hooks...'
            ) : React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('span', { className: 'mr-2' }, '✨'),
                'Generate Viral Hooks',
                React.createElement('span', { className: 'ml-2' }, '🚀')
            ))
        );
    };
    
    // YouTube Ideas Component with Mobile-Friendly Textarea
    const YouTubeIdeas = () => {
        const generateIdeas = async () => {
            if (!youtubeInput.trim()) {
                alert('Please paste your niche/audience content!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            // Extract niche and target from pasted content
            const lines = youtubeInput.split('\n').map(line => line.trim()).filter(line => line);
            const niche = lines[0] || youtubeInput.trim();
            const target = lines[1] || 'viewers';
            
            const ideaTemplates = {
                tutorial: [
                    {
                        title: `Complete ${niche} Guide for ${target} (2025)`,
                        outline: [`Introduction to ${niche} basics`, `Step-by-step implementation`, `Common mistakes to avoid`, `Advanced tips and tricks`],
                        duration: '15-20 mins',
                        difficulty: 'Beginner'
                    },
                    {
                        title: `${niche} in 10 Minutes: Quick Start for ${target}`,
                        outline: [`Essential concepts overview`, `Practical demonstration`, `Real-world examples`, `Next steps and resources`],
                        duration: '8-12 mins',
                        difficulty: 'Beginner'
                    }
                ],
                review: [
                    {
                        title: `Top 5 ${niche} Tools for ${target} (Honest Review)`,
                        outline: [`Tool comparison matrix`, `Pros and cons analysis`, `Pricing breakdown`, `Personal recommendations`],
                        duration: '12-18 mins',
                        difficulty: 'Intermediate'
                    }
                ]
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const selectedIdeas = ideaTemplates[youtubeType] || ideaTemplates.tutorial;
                
                setResults(selectedIdeas.slice(0, 3).map((idea, index) => ({
                    ...idea,
                    id: index + 1,
                    views: `${Math.floor(Math.random() * 900 + 100)}K`,
                    likes: `${Math.floor(Math.random() * 50 + 10)}K`
                })));
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            // Beta Test Notice
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'space-y-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-3 text-center sm:text-left' }, '🎥 Paste Your Content Here (Mobile Friendly)'),
                    React.createElement('textarea', {
                        placeholder: 'Tap here and paste your niche and target audience...\n\nExample:\nLine 1: AI automation\nLine 2: small business owners\n\nTip: Use voice-to-text for easy input!',
                        value: youtubeInput,
                        onChange: handleYoutubeInputChange,
                        rows: 6,
                        className: 'w-full p-4 text-lg bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-all duration-300 resize-none touch-manipulation'
                    }),
                    React.createElement('div', { className: 'flex justify-between items-center mt-2' },
                        React.createElement('span', { className: 'text-xs text-gray-400' }, `${youtubeInput.length} characters`),
                        youtubeInput.length > 0 && React.createElement('button', {
                            onClick: () => setYoutubeInput(''),
                            className: 'text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded transition-colors'
                        }, '🗋 Clear')
                    )
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-3 text-center sm:text-left' }, '🎦 Video Type'),
                    React.createElement('select', {
                        value: youtubeType,
                        onChange: handleYoutubeTypeChange,
                        className: 'w-full p-4 text-lg bg-gray-800 border-2 border-gray-600 rounded-xl text-white focus:border-accent focus:outline-none transition-all duration-300 touch-manipulation'
                    },
                        React.createElement('option', { value: 'tutorial' }, '🎓 Tutorial/How-to Guide'),
                        React.createElement('option', { value: 'review' }, '⭐ Review/Comparison')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateIdeas,
                disabled: loading || !youtubeInput.trim(),
                className: 'w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:opacity-50 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none touch-manipulation shadow-lg active:scale-95'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner mr-3' }),
                'Generating Viral Ideas...'
            ) : React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('span', { className: 'mr-2' }, '🎬'),
                'Generate YouTube Ideas',
                React.createElement('span', { className: 'ml-2' }, '🚀')
            ))
        );
    };
    
    // Blog Outline Builder Tool with Textarea
    const BlogOutlineBuilder = () => {
        const generateOutline = async () => {
            if (!blogInput.trim()) {
                alert('Please paste your blog topic!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            // Extract topic from pasted content
            const topic = blogInput.split('\n')[0].trim() || blogInput.trim();
            
            const outlineTemplates = {
                'how-to': {
                    structure: [
                        { section: 'Introduction', subsections: [`What is ${topic}?`, 'Why it matters', 'What you\'ll learn'] },
                        { section: 'Step-by-Step Guide', subsections: ['Step 1: Getting started', 'Step 2: Implementation', 'Step 3: Optimization'] },
                        { section: 'Common Mistakes', subsections: ['Pitfall #1 and solution', 'Pitfall #2 and solution'] },
                        { section: 'Conclusion', subsections: ['Key takeaways', 'Next steps'] }
                    ],
                    wordCount: '1500-2000'
                },
                'listicle': {
                    structure: [
                        { section: 'Introduction', subsections: [`Hook about ${topic}`, 'Why this list matters'] },
                        { section: 'Item 1', subsections: ['Detailed explanation', 'Benefits/features'] },
                        { section: 'Item 2', subsections: ['Detailed explanation', 'Benefits/features'] },
                        { section: 'Item 3', subsections: ['Detailed explanation', 'Benefits/features'] },
                        { section: 'Conclusion', subsections: ['Summary of top picks', 'Final recommendations'] }
                    ],
                    wordCount: '1200-1800'
                }
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const template = outlineTemplates[blogType];
                const outline = {
                    title: topic,
                    type: blogType,
                    estimatedWords: template.wordCount,
                    readTime: `${Math.ceil(parseInt(template.wordCount.split('-')[0]) / 200)}-${Math.ceil(parseInt(template.wordCount.split('-')[1]) / 200)} min`,
                    seoScore: Math.floor(Math.random() * 20) + 80,
                    structure: template.structure
                };
                
                setResults([outline]);
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            // Beta Test Notice
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, 'Paste Your Content Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your blog topic here...\ne.g., Best AI Tools for Small Business 2025',
                        value: blogInput,
                        onChange: handleBlogInputChange,
                        rows: 4,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, 'Blog Type'),
                    React.createElement('select', {
                        value: blogType,
                        onChange: handleBlogTypeChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'how-to' }, '📝 How-to Guide'),
                        React.createElement('option', { value: 'listicle' }, '📋 Listicle')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateOutline,
                disabled: loading || !blogInput.trim(),
                className: 'w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Crafting Perfect Outline...'
            ) : '📝 Generate Blog Outline')
        );
    };
    
    // Social Media Calendar Tool
    const SocialMediaCalendar = () => {
        const generateCalendar = async () => {
            if (!socialInput.trim()) {
                alert('Please paste your business/topic content!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            const topic = socialInput.split('\n')[0].trim() || socialInput.trim();
            
            const calendarTemplates = {
                general: {
                    week1: [
                        `Monday Motivation: Share your ${topic} success story`,
                        `Tuesday Tips: 3 quick ${topic} hacks everyone should know`,
                        `Wednesday Wisdom: Behind the scenes of ${topic}`,
                        `Thursday Thoughts: Common ${topic} mistakes to avoid`,
                        `Friday Fun: ${topic} memes that hit different`,
                        `Saturday Spotlight: Customer using ${topic}`,
                        `Sunday Summary: This week in ${topic}`
                    ],
                    week2: [
                        `Monday Mindset: Why ${topic} matters now more than ever`,
                        `Tuesday Tutorial: Step-by-step ${topic} guide`,
                        `Wednesday Q&A: Your ${topic} questions answered`,
                        `Thursday Trends: What's new in ${topic}`,
                        `Friday Facts: 5 surprising ${topic} statistics`,
                        `Saturday Stories: Real ${topic} transformation`,
                        `Sunday Strategy: Planning your ${topic} week`
                    ]
                },
                business: {
                    week1: [
                        `Monday Momentum: How ${topic} drives business growth`,
                        `Tuesday Tools: Essential ${topic} resources for professionals`,
                        `Wednesday Wins: Client success with ${topic}`,
                        `Thursday Thoughts: Industry insights on ${topic}`,
                        `Friday Features: New ${topic} capabilities`,
                        `Saturday Spotlight: Team member expertise in ${topic}`,
                        `Sunday Strategy: ${topic} planning for next week`
                    ],
                    week2: [
                        `Monday Market: ${topic} trends and predictions`,
                        `Tuesday Training: ${topic} best practices`,
                        `Wednesday Workshop: Live ${topic} demonstration`,
                        `Thursday Testimonial: Client reviews on ${topic}`,
                        `Friday FAQ: Common ${topic} questions`,
                        `Saturday Solutions: Problem-solving with ${topic}`,
                        `Sunday Sync: Week's ${topic} highlights`
                    ]
                }
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const template = calendarTemplates[socialType];
                setResults([
                    {
                        title: `${topic} Social Media Calendar`,
                        type: socialType,
                        weeks: [
                            { weekNum: 1, posts: template.week1 },
                            { weekNum: 2, posts: template.week2 }
                        ],
                        totalPosts: template.week1.length + template.week2.length,
                        engagement: Math.floor(Math.random() * 30) + 70
                    }
                ]);
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            // Beta Test Notice
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '📅 Paste Your Business/Topic Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your business or topic here...\ne.g., Digital Marketing Agency, Fitness Coach, Tech Startup',
                        value: socialInput,
                        onChange: handleSocialInputChange,
                        rows: 4,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🎯 Calendar Type'),
                    React.createElement('select', {
                        value: socialType,
                        onChange: handleSocialTypeChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'general' }, '🌐 General/Personal Brand'),
                        React.createElement('option', { value: 'business' }, '💼 Business/Professional')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateCalendar,
                disabled: loading || !socialInput.trim(),
                className: 'w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Creating Your Calendar...'
            ) : '📅 Generate Social Calendar')
        );
    };
    
    // Tagline Generator Tool
    const TaglineGenerator = () => {
        const generateTaglines = async () => {
            if (!taglineInput.trim()) {
                alert('Please paste your business/brand content!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            const brand = taglineInput.split('\n')[0].trim() || taglineInput.trim();
            
            const taglineTemplates = {
                modern: [
                    `${brand}: Where innovation meets simplicity`,
                    `Redefining ${brand} for the digital age`,
                    `${brand} reimagined. Results delivered.`,
                    `The future of ${brand} starts here`,
                    `${brand}: Powered by possibility`,
                    `Elevating ${brand} beyond expectations`
                ],
                classic: [
                    `${brand}: Excellence in every detail`,
                    `Trusted ${brand} since day one`,
                    `Quality ${brand} you can count on`,
                    `${brand}: Built to last, designed to inspire`,
                    `Experience the difference with ${brand}`,
                    `${brand}: Where tradition meets innovation`
                ],
                bold: [
                    `${brand}: Disrupt. Create. Dominate.`,
                    `Break barriers. Choose ${brand}.`,
                    `${brand}: Unleash your potential`,
                    `Don't settle. Choose ${brand}.`,
                    `${brand}: Be bold. Be different.`,
                    `Revolutionary ${brand} for game-changers`
                ]
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const selectedTaglines = taglineTemplates[taglineStyle];
                setResults(selectedTaglines.map((tagline, index) => ({
                    id: index + 1,
                    text: tagline,
                    style: taglineStyle,
                    length: tagline.length,
                    memorable: Math.floor(Math.random() * 20) + 80
                })));
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '✨ Paste Your Brand/Business Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your brand or business name here...\ne.g., TechFlow Solutions, Green Energy Co, Creative Studio',
                        value: taglineInput,
                        onChange: handleTaglineInputChange,
                        rows: 4,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🎨 Tagline Style'),
                    React.createElement('select', {
                        value: taglineStyle,
                        onChange: handleTaglineStyleChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'modern' }, '🚀 Modern & Innovative'),
                        React.createElement('option', { value: 'classic' }, '🏆 Classic & Trustworthy'),
                        React.createElement('option', { value: 'bold' }, '🔥 Bold & Disruptive')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateTaglines,
                disabled: loading || !taglineInput.trim(),
                className: 'w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Crafting Perfect Taglines...'
            ) : '✨ Generate Taglines')
        );
    };
    
    // SEO Title Builder Tool
    const SEOTitleBuilder = () => {
        const generateSEOTitles = async () => {
            if (!seoInput.trim()) {
                alert('Please paste your content topic!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            const topic = seoInput.split('\n')[0].trim() || seoInput.trim();
            const year = new Date().getFullYear();
            
            const seoTemplates = {
                blog: [
                    `The Complete Guide to ${topic} (${year} Edition)`,
                    `${topic}: Everything You Need to Know in ${year}`,
                    `How to Master ${topic} - Step by Step Guide`,
                    `Top 10 ${topic} Tips That Actually Work`,
                    `${topic} Explained: Beginner to Expert in 30 Days`,
                    `The Ultimate ${topic} Checklist for ${year}`
                ],
                product: [
                    `Best ${topic} Products - Reviewed & Compared ${year}`,
                    `${topic} Reviews: Top Picks for ${year}`,
                    `${topic} Buying Guide - What to Look For`,
                    `Top-Rated ${topic} Products You Need in ${year}`,
                    `${topic} Comparison: Features, Prices & Reviews`,
                    `${topic} - Which One Should You Choose?`
                ],
                service: [
                    `Professional ${topic} Services - Get Results Fast`,
                    `${topic} Services: Transform Your Business Today`,
                    `Expert ${topic} Solutions for Modern Businesses`,
                    `${topic} Services That Deliver Real ROI`,
                    `Why Choose Our ${topic} Services in ${year}`,
                    `${topic} Services: From Strategy to Success`
                ]
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const selectedTitles = seoTemplates[seoType];
                setResults(selectedTitles.map((title, index) => ({
                    id: index + 1,
                    title: title,
                    length: title.length,
                    seoScore: Math.floor(Math.random() * 15) + 85,
                    readability: Math.floor(Math.random() * 10) + 90,
                    clickPotential: Math.floor(Math.random() * 20) + 75
                })));
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '📝 Paste Your Topic Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your content topic here...\ne.g., Digital Marketing, AI Tools, Web Development',
                        value: seoInput,
                        onChange: handleSeoInputChange,
                        rows: 4,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🎯 Content Type'),
                    React.createElement('select', {
                        value: seoType,
                        onChange: handleSeoTypeChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'blog' }, '📝 Blog Post/Article'),
                        React.createElement('option', { value: 'product' }, '📺 Product/Review'),
                        React.createElement('option', { value: 'service' }, '💼 Service/Business')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generateSEOTitles,
                disabled: loading || !seoInput.trim(),
                className: 'w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Optimizing SEO Titles...'
            ) : '🔍 Generate SEO Titles')
        );
    };
    
    // Task Prioritizer Tool - Enhanced with Smart Logic
    const TaskPrioritizer = () => {
        const prioritizeTasks = async () => {
            if (!taskInput.trim()) {
                alert('Please paste your task list!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            const tasks = taskInput.split('\n').filter(task => task.trim());
            
            // Enhanced keyword detection with better scoring
            const analyzeTask = (task) => {
                const lowerTask = task.toLowerCase();
                
                // Urgency indicators (higher score = more urgent)
                const urgencyKeywords = {
                    critical: ['urgent', 'asap', 'emergency', 'critical', 'crisis', 'fire', 'broke', 'down'],
                    deadline: ['deadline', 'due', 'submit', 'deliver', 'launch', 'release', 'publish'],
                    timebound: ['today', 'tomorrow', 'this week', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
                    client: ['client', 'customer', 'meeting', 'presentation', 'demo', 'call', 'appointment']
                };
                
                // Impact indicators (higher score = more impact)
                const impactKeywords = {
                    revenue: ['revenue', 'money', 'profit', 'sales', 'income', 'budget', 'cost', 'pricing'],
                    growth: ['growth', 'scale', 'expand', 'marketing', 'strategy', 'plan', 'roadmap'],
                    client: ['client', 'customer', 'user', 'stakeholder', 'partner', 'team'],
                    product: ['product', 'feature', 'development', 'build', 'create', 'design', 'fix'],
                    business: ['business', 'company', 'organization', 'department', 'process', 'workflow']
                };
                
                // Effort indicators (higher score = less effort/easier)
                const effortKeywords = {
                    easy: ['quick', 'simple', 'easy', 'fast', 'brief', 'short', 'minor'],
                    communication: ['email', 'call', 'message', 'text', 'contact', 'reply', 'respond'],
                    review: ['review', 'check', 'verify', 'confirm', 'approve', 'read', 'look'],
                    update: ['update', 'edit', 'change', 'modify', 'adjust', 'tweak'],
                    complex: ['build', 'create', 'develop', 'design', 'research', 'analyze', 'implement']
                };
                
                // Calculate scores based on keyword presence and context
                let urgencyScore = 0.3; // Base score
                let impactScore = 0.3;
                let effortScore = 0.3;
                
                // Urgency scoring
                Object.entries(urgencyKeywords).forEach(([category, keywords]) => {
                    const matches = keywords.filter(keyword => lowerTask.includes(keyword)).length;
                    if (matches > 0) {
                        switch(category) {
                            case 'critical': urgencyScore += matches * 0.3; break;
                            case 'deadline': urgencyScore += matches * 0.25; break;
                            case 'timebound': urgencyScore += matches * 0.2; break;
                            case 'client': urgencyScore += matches * 0.15; break;
                        }
                    }
                });
                
                // Impact scoring
                Object.entries(impactKeywords).forEach(([category, keywords]) => {
                    const matches = keywords.filter(keyword => lowerTask.includes(keyword)).length;
                    if (matches > 0) {
                        switch(category) {
                            case 'revenue': impactScore += matches * 0.3; break;
                            case 'growth': impactScore += matches * 0.25; break;
                            case 'client': impactScore += matches * 0.2; break;
                            case 'product': impactScore += matches * 0.15; break;
                            case 'business': impactScore += matches * 0.1; break;
                        }
                    }
                });
                
                // Effort scoring (inverted - high effort tasks get lower scores)
                Object.entries(effortKeywords).forEach(([category, keywords]) => {
                    const matches = keywords.filter(keyword => lowerTask.includes(keyword)).length;
                    if (matches > 0) {
                        switch(category) {
                            case 'easy': effortScore += matches * 0.3; break;
                            case 'communication': effortScore += matches * 0.25; break;
                            case 'review': effortScore += matches * 0.2; break;
                            case 'update': effortScore += matches * 0.15; break;
                            case 'complex': effortScore -= matches * 0.2; break; // Reduces effort score
                        }
                    }
                });
                
                // Normalize scores to 0-1 range
                urgencyScore = Math.min(urgencyScore, 1);
                impactScore = Math.min(impactScore, 1);
                effortScore = Math.max(0.1, Math.min(effortScore, 1)); // Keep minimum 0.1
                
                // Estimate time based on keywords and task complexity
                let estimatedMinutes = 60; // Default
                if (lowerTask.match(/quick|simple|easy|email|call|check|review/)) {
                    estimatedMinutes = Math.floor(Math.random() * 30) + 15; // 15-45 min
                } else if (lowerTask.match(/update|edit|modify|meeting|presentation/)) {
                    estimatedMinutes = Math.floor(Math.random() * 60) + 30; // 30-90 min
                } else if (lowerTask.match(/build|create|develop|design|research|implement/)) {
                    estimatedMinutes = Math.floor(Math.random() * 240) + 120; // 2-6 hours
                } else {
                    estimatedMinutes = Math.floor(Math.random() * 90) + 30; // 30-120 min
                }
                
                // Categorize task type
                let category = 'General';
                if (lowerTask.match(/email|call|message|contact|meeting/)) category = 'Communication';
                else if (lowerTask.match(/build|create|develop|code|program/)) category = 'Development';
                else if (lowerTask.match(/design|ui|ux|visual|graphics/)) category = 'Design';
                else if (lowerTask.match(/marketing|social|content|blog/)) category = 'Marketing';
                else if (lowerTask.match(/plan|strategy|research|analyze/)) category = 'Planning';
                else if (lowerTask.match(/admin|paperwork|document|report/)) category = 'Administrative';
                
                return {
                    urgencyScore,
                    impactScore,
                    effortScore,
                    estimatedMinutes,
                    category
                };
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const scoredTasks = tasks.map((task, index) => {
                    const analysis = analyzeTask(task);
                    
                    // Calculate total priority score based on selected criteria
                    let totalScore;
                    if (taskCriteria === 'urgency') {
                        totalScore = analysis.urgencyScore * 0.6 + analysis.impactScore * 0.3 + analysis.effortScore * 0.1;
                    } else if (taskCriteria === 'impact') {
                        totalScore = analysis.impactScore * 0.6 + analysis.urgencyScore * 0.3 + analysis.effortScore * 0.1;
                    } else { // effort/quick wins
                        totalScore = analysis.effortScore * 0.5 + analysis.impactScore * 0.3 + analysis.urgencyScore * 0.2;
                    }
                    
                    return {
                        task: task.trim(),
                        priority: totalScore,
                        urgency: Math.round(analysis.urgencyScore * 100),
                        impact: Math.round(analysis.impactScore * 100),
                        effort: Math.round(analysis.effortScore * 100),
                        estimatedTime: analysis.estimatedMinutes,
                        category: analysis.category,
                        timeDisplay: analysis.estimatedMinutes >= 60 ? 
                            `${Math.floor(analysis.estimatedMinutes / 60)}h ${analysis.estimatedMinutes % 60}m` : 
                            `${analysis.estimatedMinutes}m`
                    };
                }).sort((a, b) => b.priority - a.priority);
                
                // Add ranking and priority levels
                const results = scoredTasks.map((item, index) => ({
                    ...item,
                    rank: index + 1,
                    priorityLevel: index < Math.ceil(scoredTasks.length * 0.3) ? 'High' : 
                                  index < Math.ceil(scoredTasks.length * 0.7) ? 'Medium' : 'Low'
                }));
                
                setResults(results);
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '✅ Paste Your Task List Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your tasks here (one per line)...\ne.g.:\nFinish project proposal\nCall client about deadline\nUpdate website content\nReview marketing campaign',
                        value: taskInput,
                        onChange: handleTaskInputChange,
                        rows: 6,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🎯 Prioritization Criteria'),
                    React.createElement('select', {
                        value: taskCriteria,
                        onChange: handleTaskCriteriaChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'urgency' }, '⏰ Urgency First'),
                        React.createElement('option', { value: 'impact' }, '📊 Impact First'),
                        React.createElement('option', { value: 'effort' }, '⚡ Quick Wins First')
                    )
                )
            ),
            React.createElement('button', {
                onClick: prioritizeTasks,
                disabled: loading || !taskInput.trim(),
                className: 'w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Analyzing Task Priority...'
            ) : '✅ Prioritize Tasks')
        );
    };
    
    // Color Palette Creator Tool
    const ColorPaletteCreator = () => {
        const generatePalette = async () => {
            if (!colorInput.trim()) {
                alert('Please paste your brand/project description!');
                return;
            }
            
            setLoading(true);
            setResults([]);
            
            const project = colorInput.split('\n')[0].trim() || colorInput.trim();
            
            const colorPalettes = {
                professional: [
                    { name: 'Corporate Blue', colors: ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'], desc: 'Trust and reliability' },
                    { name: 'Executive Gray', colors: ['#1f2937', '#4b5563', '#6b7280', '#9ca3af', '#f3f4f6'], desc: 'Sophisticated and modern' },
                    { name: 'Success Green', colors: ['#134e4a', '#059669', '#10b981', '#34d399', '#d1fae5'], desc: 'Growth and prosperity' }
                ],
                creative: [
                    { name: 'Sunset Vibes', colors: ['#7c2d12', '#ea580c', '#f97316', '#fb923c', '#fed7aa'], desc: 'Energy and creativity' },
                    { name: 'Purple Dream', colors: ['#581c87', '#7c3aed', '#8b5cf6', '#a78bfa', '#e0e7ff'], desc: 'Innovation and luxury' },
                    { name: 'Ocean Breeze', colors: ['#0c4a6e', '#0284c7', '#0ea5e9', '#38bdf8', '#bae6fd'], desc: 'Calm and refreshing' }
                ],
                warm: [
                    { name: 'Autumn Warmth', colors: ['#92400e', '#d97706', '#f59e0b', '#fbbf24', '#fef3c7'], desc: 'Cozy and inviting' },
                    { name: 'Rose Gold', colors: ['#9f1239', '#e11d48', '#f43f5e', '#fb7185', '#fecdd3'], desc: 'Elegant and romantic' },
                    { name: 'Earth Tones', colors: ['#78350f', '#a16207', '#ca8a04', '#eab308', '#fef08a'], desc: 'Natural and grounded' }
                ],
                minimal: [
                    { name: 'Monochrome', colors: ['#000000', '#404040', '#808080', '#c0c0c0', '#ffffff'], desc: 'Clean and timeless' },
                    { name: 'Soft Neutrals', colors: ['#374151', '#6b7280', '#9ca3af', '#d1d5db', '#f9fafb'], desc: 'Subtle and refined' },
                    { name: 'Beige Minimalism', colors: ['#78716c', '#a8a29e', '#d6d3d1', '#e7e5e4', '#fafaf9'], desc: 'Warm and understated' }
                ]
            };
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const selectedPalettes = colorPalettes[colorMood];
                setResults(selectedPalettes.map((palette, index) => ({
                    id: index + 1,
                    name: palette.name,
                    colors: palette.colors,
                    description: palette.desc,
                    project: project,
                    mood: colorMood,
                    accessibility: Math.floor(Math.random() * 15) + 85,
                    harmony: Math.floor(Math.random() * 10) + 90
                })));
                
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        return React.createElement('div', { className: 'space-y-6' },
            React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6' },
                React.createElement('p', { className: 'text-yellow-300 text-sm' },
                    '⚠️ Beta Test Note: For now, paste your input (typing issue being fixed). ',
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Hire me on Fiverr'),
                    ' or ',
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'text-yellow-200 hover:text-white underline'
                    }, 'Bionluk'),
                    ' for custom versions.'
                )
            ),
            
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-6' },
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🎨 Paste Your Brand/Project Here'),
                    React.createElement('textarea', {
                        placeholder: 'Paste your brand or project description...\ne.g., Modern Tech Startup, Organic Food Blog, Luxury Fashion Brand',
                        value: colorInput,
                        onChange: handleColorInputChange,
                        rows: 4,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors resize-none'
                    })
                ),
                React.createElement('div', {},
                    React.createElement('label', { className: 'block text-sm font-medium mb-2' }, '🌈 Color Mood'),
                    React.createElement('select', {
                        value: colorMood,
                        onChange: handleColorMoodChange,
                        className: 'w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors'
                    },
                        React.createElement('option', { value: 'professional' }, '💼 Professional & Corporate'),
                        React.createElement('option', { value: 'creative' }, '🎨 Creative & Vibrant'),
                        React.createElement('option', { value: 'warm' }, '🌅 Warm & Inviting'),
                        React.createElement('option', { value: 'minimal' }, '✨ Minimal & Clean')
                    )
                )
            ),
            React.createElement('button', {
                onClick: generatePalette,
                disabled: loading || !colorInput.trim(),
                className: 'w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 disabled:opacity-50 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none'
            }, loading ? React.createElement('div', { className: 'flex items-center justify-center' },
                React.createElement('div', { className: 'loading-spinner' }),
                'Creating Color Harmony...'
            ) : '🎨 Generate Color Palette')
        );
    };

    // Enhanced copy to clipboard function with mobile feedback
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess('✅ Copied to clipboard!');
            // Add haptic feedback for mobile
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
            setTimeout(() => setCopySuccess(''), 3000);
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            textArea.setSelectionRange(0, 99999);
            try {
                document.execCommand('copy');
                setCopySuccess('✅ Copied!');
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            } catch (err) {
                setCopySuccess('⚠️ Copy failed - please copy manually');
            }
            document.body.removeChild(textArea);
            setTimeout(() => setCopySuccess(''), 3000);
        });
    };

    // Auto-copy all results function with mobile optimization
    const copyAllResults = () => {
        if (results.length === 0) return;
        
        let allText = '';
        let title = '';
        
        if (activeTool === 'hook') {
            title = '🎉 VIRAL HOOKS GENERATED:\n\n';
            allText = results.map((result, index) => `${index + 1}. ${result.text}`).join('\n\n');
        } else if (activeTool === 'youtube') {
            title = '🎬 YOUTUBE VIDEO IDEAS:\n\n';
            allText = results.map((result, index) => 
                `${index + 1}. ${result.title}\n🕐 Duration: ${result.duration} | 🎯 Difficulty: ${result.difficulty}\n📈 Est. Views: ${result.views} | 👍 Est. Likes: ${result.likes}\n📝 Outline: ${result.outline.join(', ')}\n`
            ).join('\n');
        } else if (activeTool === 'blog') {
            const outline = results[0];
            title = '📝 BLOG OUTLINE GENERATED:\n\n';
            allText = `🎨 Title: ${outline.title}\n📊 Type: ${outline.type}\n📄 Est. Words: ${outline.estimatedWords}\n🕑 Read Time: ${outline.readTime}\n🎯 SEO Score: ${outline.seoScore}%\n\n📝 STRUCTURE:\n\n${outline.structure.map((s, i) => `${i + 1}. ${s.section}:\n${s.subsections.map(sub => `   • ${sub}`).join('\n')}`).join('\n\n')}`;
        } else if (activeTool === 'social') {
            const calendar = results[0];
            title = '📅 SOCIAL MEDIA CALENDAR GENERATED:\n\n';
            allText = `🎨 Title: ${calendar.title}\n🎯 Type: ${calendar.type}\n📊 Total Posts: ${calendar.totalPosts}\n🔥 Engagement Score: ${calendar.engagement}%\n\n📅 CALENDAR:\n\n${calendar.weeks.map(week => `Week ${week.weekNum}:\n${week.posts.map((post, i) => `${i + 1}. ${post}`).join('\n')}`).join('\n\n')}`;
        } else if (activeTool === 'tagline') {
            title = '✨ TAGLINES GENERATED:\n\n';
            allText = results.map((result, index) => `${index + 1}. ${result.text} (${result.style} style)`).join('\n\n');
        } else if (activeTool === 'seo') {
            title = '🔍 SEO TITLES GENERATED:\n\n';
            allText = results.map((result, index) => `${index + 1}. ${result.title}\n   SEO Score: ${result.seoScore}% | Readability: ${result.readability}% | Click Potential: ${result.clickPotential}%`).join('\n\n');
        } else if (activeTool === 'task') {
            title = '✅ TASK PRIORITY LIST:\n\n';
            allText = results.map((result, index) => `${index + 1}. ${result.task}\n   Priority: ${result.priorityLevel} | Category: ${result.category} | Time: ${result.timeDisplay}\n   Urgency: ${result.urgency}% | Impact: ${result.impact}% | Effort: ${result.effort}%`).join('\n\n');
        } else if (activeTool === 'color') {
            title = '🎨 COLOR PALETTES GENERATED:\n\n';
            allText = results.map((result, index) => `${index + 1}. ${result.name}\n   Colors: ${result.colors.join(', ')}\n   Description: ${result.description}\n   Accessibility: ${result.accessibility}% | Harmony: ${result.harmony}%`).join('\n\n');
        }
        
        const fullText = title + allText + '\n\n✨ Generated by ArtificialArtz Tools - Get custom solutions at fiverr.com/s/0bx48oy';
        copyToClipboard(fullText);
    };

    // Results Display
    const renderResults = () => {
        if (results.length === 0) return null;

        if (activeTool === 'hook') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '🎉 Generated Hooks:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-accent hover:bg-accent-light px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg flex items-center space-x-2'
                    }, 
                        React.createElement('span', {}, '📋'),
                        React.createElement('span', {}, 'Copy All Hooks'),
                        React.createElement('span', {}, '🚀')
                    )
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'p-4 bg-gray-800 rounded-lg border-l-4 border-accent hover:bg-gray-750 transition-colors'
                    },
                        React.createElement('div', { className: 'flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2' },
                            React.createElement('span', { className: 'font-medium text-accent text-lg' }, `Hook #${result.id}`),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.text),
                                className: 'bg-accent hover:bg-accent-light px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation shadow-md flex items-center space-x-1'
                            }, 
                                React.createElement('span', {}, '📋'),
                                React.createElement('span', {}, 'Copy')
                            )
                        ),
                        React.createElement('p', { className: 'text-gray-200' }, result.text)
                    )
                )
            );
        }

        if (activeTool === 'youtube') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '🎬 YouTube Video Ideas:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy All Ideas')
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-red-500 transition-colors'
                    },
                        React.createElement('div', { className: 'flex justify-between items-start mb-3' },
                            React.createElement('h4', { className: 'font-bold text-lg text-red-400' }, result.title),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.title),
                                className: 'text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white transition-colors'
                            }, 'Copy')
                        ),
                        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 mb-4' },
                            React.createElement('div', { className: 'text-sm text-gray-400' },
                                React.createElement('p', {}, `🕐 Duration: ${result.duration}`),
                                React.createElement('p', {}, `🎯 Difficulty: ${result.difficulty}`)
                            ),
                            React.createElement('div', { className: 'text-sm text-gray-400' },
                                React.createElement('p', {}, `👀 Est. Views: ${result.views}`),
                                React.createElement('p', {}, `👍 Est. Likes: ${result.likes}`)
                            )
                        ),
                        React.createElement('div', {},
                            React.createElement('h5', { className: 'font-medium mb-2 text-gray-300' }, 'Video Outline:'),
                            React.createElement('ul', { className: 'space-y-1' },
                                result.outline.map((point, i) =>
                                    React.createElement('li', {
                                        key: i,
                                        className: 'text-gray-400 text-sm ml-4'
                                    }, `• ${point}`)
                                )
                            )
                        )
                    )
                )
            );
        }

        if (activeTool === 'blog') {
            const outline = results[0];
            return React.createElement('div', { className: 'mt-8' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '📝 Blog Outline Generated:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy Full Outline')
                ),
                React.createElement('div', { className: 'bg-gray-800 rounded-lg p-6 border border-gray-700' },
                    React.createElement('div', { className: 'flex justify-between items-start mb-4' },
                        React.createElement('h4', { className: 'text-xl font-bold text-green-400' }, outline.title),
                        React.createElement('button', {
                            onClick: () => copyToClipboard(`Blog Outline: ${outline.title}\n\n${outline.structure.map(s => `${s.section}:\n${s.subsections.map(sub => `- ${sub}`).join('\n')}`).join('\n\n')}`),
                            className: 'bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white text-sm transition-colors'
                        }, 'Copy Outline')
                    ),
                    React.createElement('div', { className: 'grid md:grid-cols-3 gap-4 mb-6 text-sm' },
                        React.createElement('div', { className: 'text-gray-400' }, `📄 ${outline.estimatedWords} words`),
                        React.createElement('div', { className: 'text-gray-400' }, `🕑 ${outline.readTime} read`),
                        React.createElement('div', { className: 'text-green-400' }, `🎯 SEO Score: ${outline.seoScore}%`)
                    ),
                    React.createElement('div', { className: 'space-y-4' },
                        outline.structure.map((section, index) =>
                            React.createElement('div', {
                                key: index,
                                className: 'border-l-4 border-green-500 pl-4'
                            },
                                React.createElement('h5', { className: 'font-bold text-lg mb-2' }, `${index + 1}. ${section.section}`),
                                React.createElement('ul', { className: 'space-y-1' },
                                    section.subsections.map((sub, i) =>
                                        React.createElement('li', {
                                            key: i,
                                            className: 'text-gray-400 ml-4'
                                        }, `• ${sub}`)
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        // New tools results
        if (activeTool === 'social') {
            const calendar = results[0];
            return React.createElement('div', { className: 'mt-8' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '📅 Social Media Calendar Generated:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy Full Calendar')
                ),
                React.createElement('div', { className: 'bg-gray-800 rounded-lg p-6 border border-gray-700' },
                    React.createElement('h4', { className: 'text-xl font-bold text-pink-400 mb-4' }, calendar.title),
                    React.createElement('div', { className: 'grid md:grid-cols-3 gap-4 mb-6 text-sm' },
                        React.createElement('div', { className: 'text-gray-400' }, `🎯 Type: ${calendar.type}`),
                        React.createElement('div', { className: 'text-gray-400' }, `📊 Posts: ${calendar.totalPosts}`),
                        React.createElement('div', { className: 'text-pink-400' }, `🔥 Engagement: ${calendar.engagement}%`)
                    ),
                    React.createElement('div', { className: 'space-y-6' },
                        calendar.weeks.map((week, weekIndex) =>
                            React.createElement('div', {
                                key: weekIndex,
                                className: 'border-l-4 border-pink-500 pl-4'
                            },
                                React.createElement('h5', { className: 'font-bold text-lg mb-3 text-pink-300' }, `Week ${week.weekNum}`),
                                React.createElement('div', { className: 'grid gap-2' },
                                    week.posts.map((post, postIndex) =>
                                        React.createElement('div', {
                                            key: postIndex,
                                            className: 'bg-gray-700 p-3 rounded-lg text-gray-200 text-sm flex justify-between items-center'
                                        },
                                            React.createElement('span', {}, post),
                                            React.createElement('button', {
                                                onClick: () => copyToClipboard(post),
                                                className: 'text-xs bg-pink-500 hover:bg-pink-600 px-2 py-1 rounded text-white transition-colors'
                                            }, 'Copy')
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        if (activeTool === 'tagline') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '✨ Generated Taglines:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy All Taglines')
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-750 transition-colors'
                    },
                        React.createElement('div', { className: 'flex justify-between items-start mb-2' },
                            React.createElement('span', { className: 'font-medium text-yellow-400 text-sm' }, `${result.style} Style | ${result.length} chars`),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.text),
                                className: 'bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white text-xs transition-colors'
                            }, 'Copy')
                        ),
                        React.createElement('p', { className: 'text-gray-200 text-lg font-medium' }, result.text),
                        React.createElement('div', { className: 'text-xs text-gray-400 mt-2' }, `Memorable Score: ${result.memorable}%`)
                    )
                )
            );
        }

        if (activeTool === 'seo') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '🔍 SEO Titles Generated:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy All Titles')
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'p-4 bg-gray-800 rounded-lg border-l-4 border-blue-500 hover:bg-gray-750 transition-colors'
                    },
                        React.createElement('div', { className: 'flex justify-between items-start mb-3' },
                            React.createElement('h4', { className: 'text-blue-400 font-medium text-lg' }, result.title),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.title),
                                className: 'bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white text-xs transition-colors'
                            }, 'Copy')
                        ),
                        React.createElement('div', { className: 'grid md:grid-cols-3 gap-4 text-xs text-gray-400' },
                            React.createElement('div', {}, `SEO Score: ${result.seoScore}%`),
                            React.createElement('div', {}, `Readability: ${result.readability}%`),
                            React.createElement('div', {}, `Click Potential: ${result.clickPotential}%`)
                        ),
                        React.createElement('div', { className: 'text-xs text-gray-500 mt-2' }, `${result.length} characters`)
                    )
                )
            );
        }

        if (activeTool === 'task') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '✅ Task Priority List:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy Priority List')
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: `p-4 bg-gray-800 rounded-lg border-l-4 hover:bg-gray-750 transition-colors ${
                            result.priorityLevel === 'High' ? 'border-red-500' : 
                            result.priorityLevel === 'Medium' ? 'border-yellow-500' : 'border-green-500'
                        }`
                    },
                        React.createElement('div', { className: 'flex justify-between items-start mb-3' },
                            React.createElement('div', { className: 'flex items-center space-x-3' },
                                React.createElement('span', { 
                                    className: `text-xs px-2 py-1 rounded font-semibold ${
                                        result.priorityLevel === 'High' ? 'bg-red-500 text-white' : 
                                        result.priorityLevel === 'Medium' ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white'
                                    }`
                                }, `#${result.rank} ${result.priorityLevel}`),
                                React.createElement('span', { className: 'text-xs bg-blue-600 text-white px-2 py-1 rounded' }, result.category),
                                React.createElement('span', { className: 'text-xs text-gray-400' }, `⏱️ ${result.timeDisplay}`)
                            ),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.task),
                                className: 'bg-teal-500 hover:bg-teal-600 px-3 py-1 rounded text-white text-xs transition-colors'
                            }, 'Copy')
                        ),
                        React.createElement('p', { className: 'text-gray-200 mb-3 font-medium' }, result.task),
                        React.createElement('div', { className: 'grid md:grid-cols-3 gap-4 text-xs' },
                            React.createElement('div', { className: 'flex items-center' },
                                React.createElement('span', { className: 'text-red-400 mr-1' }, '🔥'),
                                React.createElement('span', { className: 'text-gray-400' }, `Urgency: ${result.urgency}%`)
                            ),
                            React.createElement('div', { className: 'flex items-center' },
                                React.createElement('span', { className: 'text-blue-400 mr-1' }, '📎'),
                                React.createElement('span', { className: 'text-gray-400' }, `Impact: ${result.impact}%`)
                            ),
                            React.createElement('div', { className: 'flex items-center' },
                                React.createElement('span', { className: 'text-green-400 mr-1' }, '⚡'),
                                React.createElement('span', { className: 'text-gray-400' }, `Effort: ${result.effort}%`)
                            )
                        )
                    )
                )
            );
        }

        if (activeTool === 'color') {
            return React.createElement('div', { className: 'mt-8 space-y-4' },
                React.createElement('div', { className: 'flex justify-between items-center mb-4' },
                    React.createElement('h3', { className: 'text-xl font-bold' }, '🎨 Color Palettes Generated:'),
                    React.createElement('button', {
                        onClick: copyAllResults,
                        className: 'bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors'
                    }, '📋 Copy All Palettes')
                ),
                results.map((result, index) =>
                    React.createElement('div', {
                        key: index,
                        className: 'p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-rose-500 transition-colors'
                    },
                        React.createElement('div', { className: 'flex justify-between items-start mb-4' },
                            React.createElement('h4', { className: 'text-xl font-bold text-rose-400' }, result.name),
                            React.createElement('button', {
                                onClick: () => copyToClipboard(result.colors.join(', ')),
                                className: 'bg-rose-500 hover:bg-rose-600 px-3 py-1 rounded text-white text-sm transition-colors'
                            }, 'Copy Colors')
                        ),
                        React.createElement('p', { className: 'text-gray-300 mb-4' }, result.description),
                        React.createElement('div', { className: 'flex space-x-2 mb-4' },
                            result.colors.map((color, colorIndex) =>
                                React.createElement('div', {
                                    key: colorIndex,
                                    className: 'flex flex-col items-center space-y-1'
                                },
                                    React.createElement('div', {
                                        className: 'w-12 h-12 rounded-lg border border-gray-600 cursor-pointer hover:scale-110 transition-transform',
                                        style: { backgroundColor: color },
                                        onClick: () => copyToClipboard(color),
                                        title: `Click to copy ${color}`
                                    }),
                                    React.createElement('span', { className: 'text-xs text-gray-400' }, color)
                                )
                            )
                        ),
                        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4 text-xs text-gray-400' },
                            React.createElement('div', {}, `Accessibility: ${result.accessibility}%`),
                            React.createElement('div', {}, `Harmony: ${result.harmony}%`)
                        )
                    )
                )
            );
        }

        return null;
    };

    return React.createElement('div', { className: 'min-h-screen py-8 px-4' },
        React.createElement('div', { className: 'max-w-5xl mx-auto' },
            React.createElement('div', { className: 'text-center mb-12' },
                React.createElement('h1', { className: 'text-4xl font-bold mb-4 gradient-text' }, 'AI Tools for Growth'),
                React.createElement('p', { className: 'text-xl text-gray-400 mb-6' }, 'Professional-grade AI tools to boost your content creation'),
                React.createElement('div', { className: 'bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 max-w-2xl mx-auto' },
                    React.createElement('p', { className: 'text-yellow-300' }, '⚡ Demo tools for portfolio showcase. For custom automation solutions and premium tools, hire me on Fiverr or Bionluk!')
                )
            ),
            
            // Free Typing Scratchpad Area
            React.createElement('div', { className: 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/50 rounded-2xl p-6 mb-12 shadow-2xl' },
                React.createElement('div', { className: 'text-center mb-4' },
                    React.createElement('h2', { className: 'text-2xl font-bold text-blue-300 mb-2 flex items-center justify-center' },
                        React.createElement('span', { className: 'mr-2' }, '✏️'),
                        'Free Typing Space',
                        React.createElement('span', { className: 'ml-2' }, '📝')
                    ),
                    React.createElement('p', { className: 'text-blue-200 text-sm' }, 'Type freely here without any issues, then copy & paste to tools below!')
                ),
                
                React.createElement('div', { className: 'space-y-4' },
                    React.createElement('textarea', {
                        placeholder: 'Start typing here... No focus issues, just pure typing freedom!\n\nExample:\n- AI automation for restaurants\n- Social media marketing tips\n- Blog post about productivity\n\nType anything you want, then use the buttons below!',
                        value: scratchpadText,
                        onChange: handleScratchpadChange,
                        rows: 8,
                        className: 'w-full p-4 text-lg bg-gray-800/90 border-2 border-blue-400/50 rounded-xl text-white placeholder-gray-300 focus:border-blue-300 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm'
                    }),
                    
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-3 items-center justify-between' },
                        React.createElement('div', { className: 'flex items-center space-x-2 text-sm text-blue-300' },
                            React.createElement('span', {}, '📊'),
                            React.createElement('span', {}, `${scratchpadText.length} characters`),
                            scratchpadText.split('\n').length > 1 && React.createElement('span', {}, `• ${scratchpadText.split('\n').length} lines`)
                        ),
                        
                        React.createElement('div', { className: 'flex flex-wrap gap-2 justify-center' },
                            React.createElement('button', {
                                onClick: copyScratchpadText,
                                disabled: !scratchpadText.trim(),
                                className: 'bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg flex items-center space-x-2'
                            },
                                React.createElement('span', {}, '📋'),
                                React.createElement('span', {}, 'Copy Text')
                            ),
                            
                            React.createElement('button', {
                                onClick: pasteScratchpadToTool,
                                disabled: !scratchpadText.trim(),
                                className: 'bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg flex items-center space-x-2'
                            },
                                React.createElement('span', {}, '📎'),
                                React.createElement('span', {}, 'Paste to Tool')
                            ),
                            
                            React.createElement('button', {
                                onClick: clearScratchpad,
                                disabled: !scratchpadText.trim(),
                                className: 'bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg flex items-center space-x-2'
                            },
                                React.createElement('span', {}, '🗋'),
                                React.createElement('span', {}, 'Clear')
                            )
                        )
                    )
                )
            ),
            
            // Tool Navigation
            React.createElement('div', { className: 'flex justify-center mb-12' },
                React.createElement('div', { className: 'bg-gray-800 p-2 rounded-xl shadow-lg' },
                    ['hook', 'youtube', 'blog', 'social', 'tagline', 'seo', 'task', 'color'].map(tool =>
                        React.createElement('button', {
                            key: tool,
                            onClick: () => { setActiveTool(tool); setResults([]); },
                            className: `px-8 py-3 rounded-lg font-medium transition-all duration-300 ${activeTool === tool ? 'bg-gradient-to-r from-accent-light to-accent text-white shadow-lg transform scale-105' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`
                        }, tool === 'hook' ? '✨ Hook Generator' : 
                           tool === 'youtube' ? '🎬 YouTube Ideas' : 
                           tool === 'blog' ? '📝 Blog Outline' :
                           tool === 'social' ? '📅 Social Calendar' :
                           tool === 'tagline' ? '✨ Taglines' :
                           tool === 'seo' ? '🔍 SEO Titles' :
                           tool === 'task' ? '✅ Task Prioritizer' :
                           tool === 'color' ? '🎨 Color Palette' : tool)
                    )
                )
            ),
            
            // Tool Content
            React.createElement('div', { className: 'bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700' },
                activeTool === 'hook' ? React.createElement(HookGenerator) :
                activeTool === 'youtube' ? React.createElement(YouTubeIdeas) :
                activeTool === 'blog' ? React.createElement(BlogOutlineBuilder) :
                activeTool === 'social' ? React.createElement(SocialMediaCalendar) :
                activeTool === 'tagline' ? React.createElement(TaglineGenerator) :
                activeTool === 'seo' ? React.createElement(SEOTitleBuilder) :
                activeTool === 'task' ? React.createElement(TaskPrioritizer) :
                activeTool === 'color' ? React.createElement(ColorPaletteCreator) :
                React.createElement(HookGenerator)
            ),
            
            // Enhanced Copy Success Message for Mobile
            copySuccess && React.createElement('div', {
                className: 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center space-x-2 animate-bounce border-2 border-green-400'
            }, 
                React.createElement('span', { className: 'text-lg' }, copySuccess),
                React.createElement('div', { className: 'w-2 h-2 bg-white rounded-full animate-pulse' })
            ),
            
            // Results Display
            renderResults(),
            
            // CTA Section
            React.createElement('div', { className: 'mt-16 text-center bg-gradient-to-r from-accent-light to-accent p-8 rounded-xl' },
                React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Need Custom AI Solutions?'),
                React.createElement('p', { className: 'text-lg mb-6' }, 'These are just demo tools. Get custom automation workflows built for your business.'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                    React.createElement('a', {
                        href: 'https://www.fiverr.com/s/0bx48oy',
                        target: '_blank',
                        className: 'bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                    }, 'Hire on Fiverr'),
                    React.createElement('a', {
                        href: 'https://www.bionluk.com/artificialartz',
                        target: '_blank',
                        className: 'border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors'
                    }, 'Hire on Bionluk')
                )
            )
        )
    );
};
