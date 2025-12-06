export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Commercial' | 'Social Media' | 'Documentary' | 'Music Video';
  thumbnailUrl: string;
  videoUrl: string; // Placeholder for actual video source
  aspectRatio: 'landscape' | 'portrait' | 'square';
  description: string;
}

export interface Skill {
  name: string;
  category: 'AI' | 'Editing' | 'Color' | 'Design';
  iconName: string; // Used to map to a visual representation
  color: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export type FilterType = 'All' | Project['category'];