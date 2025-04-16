import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Filtre7Eau custom colors
                'water': {
                    light: '#E8F4F8',
                    DEFAULT: '#1EAEDB',
                    dark: '#0FA0CE',
                },
                'eco': {
                    light: '#F2FCE2',
                    DEFAULT: '#7FB069',
                    dark: '#4A7C59',
                },
                'sand': {
                    light: '#F8F6F0',
                    DEFAULT: '#EEE9E0',
                    dark: '#D3CFC4',
                },
                'neutral': {
                    light: '#F1F1F1',
                    DEFAULT: '#C8C8C9',
                    dark: '#AAADB0',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    }
                },
                'wave': {
                    '0%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-5px) translateY(2px)' },
                    '50%': { transform: 'translateX(0) translateY(5px)' },
                    '75%': { transform: 'translateX(5px) translateY(2px)' },
                    '100%': { transform: 'translateX(0)' }
                },
                'ripple': {
                    '0%': {
                        transform: 'scale(0.95)',
                        opacity: '0.7'
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        opacity: '0.9'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                },
                'slide-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'wave': 'wave 5s ease-in-out infinite',
                'ripple': 'ripple 1.5s ease-in-out',
                'slide-in': 'slide-in 0.6s ease-out'
			},
            fontFamily: {
                'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                'display': ['Helvetica', 'Arial', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': 'linear-gradient(135deg, #1EAEDB 0%, #0FA0CE 100%)',
                'eco-gradient': 'linear-gradient(90deg, #F2FCE2 0%, #7FB069 100%)',
                'water-pattern': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
                'sand-pattern': 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
