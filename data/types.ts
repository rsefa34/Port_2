export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Commercial' | 'Social Media' | 'Documentary' | 'Music Video';
  thumbnailUrl: string;
  videoUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  description: string;
}

export interface Skill {
  name: string;
  category: 'AI' | 'Editing' | 'Color' | 'Design';
  iconName: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export type FilterType = 'All' | Project['category'];