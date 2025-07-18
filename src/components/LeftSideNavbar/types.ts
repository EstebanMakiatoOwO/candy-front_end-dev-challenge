import type { SVGProps } from 'react';

export interface NavItemType {
  path: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
}