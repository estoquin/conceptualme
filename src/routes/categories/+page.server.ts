import type { PageServerLoad } from './$types';
import { getAllCategories } from '$lib/database/categories';

const ICON_MAP: Record<string, string> = {
    frontend: 'Code',
    backend: 'Server',
    devops: 'Settings',
    design: 'Palette',
    databases: 'Database',
    cybersecurity: 'Shield',
    cloud: 'Cloud',
    hardware: 'Cpu',
    mobile: 'Smartphone',
    networking: 'Globe',
    'ai-ml': 'Brain',
    blockchain: 'Bitcoin',
    automation: 'Zap',
    'open-source': 'GitBranch',
    languages: 'Terminal',
    architecture: 'Layers',
    emerging: 'Atom',
    productivity: 'Box'
};

export const load: PageServerLoad = async () => {
    const categories = await getAllCategories();
    return { categories, iconMap: ICON_MAP };
};
