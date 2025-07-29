import { Truck, Boxes, Thermometer, ShoppingBasket, Cpu, Warehouse, Plane, Ship, Train, Map, Globe } from 'lucide-react';

export const shipperSolutions = [
  { href: '/shippers/ftl', label: 'Full Truckload (FTL)', icon: Truck },
  { href: '/shippers/ltl', label: 'Less-than-Truckload (LTL)', icon: Boxes },
  { href: '/shippers/flatbed', label: 'Flatbed', icon: Truck },
  { href: '/shippers/temperature-controlled', label: 'Temperature Controlled', icon: Thermometer },
  { href: '/shippers/produce', label: 'Produce', icon: ShoppingBasket },
  { href: '/shippers/managed-transportation', label: 'Managed Transportation', icon: Cpu },
  { href: '/shippers/warehousing', label: 'Warehousing', icon: Warehouse },
  { href: '/shippers/expedited', label: 'Expedited', icon: Plane },
  { href: '/shippers/drayage', label: 'Drayage', icon: Ship },
  { href: '/shippers/intermodal', label: 'Intermodal', icon: Train },
  { href: '/shippers/canada-us-cross-border', label: 'Canada-US Cross-Border', icon: Map },
  { href: '/shippers/mexico-cross-border', label: 'Mexico Cross-Border', icon: Globe },
];
