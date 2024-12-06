export interface Resource {
  name: string;
  allocation: number;
}

export interface Risk {
  title: string;
  level: 'high' | 'medium' | 'low';
  description: string;
  mitigation?: string;
}
