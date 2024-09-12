import { Home, Plus, Settings } from "lucide-react"

export const routes = [
    {
        icon: Home,
        href: '/',
        label: 'Home',
        protected: false
    },
    {
        icon: Plus,
        href: '/character/new',
        label: 'Create',
        protected: true
    },
    {
        icon: Settings,
        href: '/settings',
        label: 'Settings',
        protected: false
    },
]