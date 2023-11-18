
//Sidebar Items 
import React, { lazy } from 'react'
export const sidebarItems = [
  { label: "Chemicals", route: "/chemicals" },
  { label: "Glassware", route: "/glassware" },
  { label: "Instruments", route: "/instruments" },
  { label: "Plasticware", route: "/plasticware" },
  { label: "Consumables", route: "/consumables" },
  { label: "Filtration", route: "/filtration" },
  { label: "Buffer & Volumetric", route: "/buffer-volumetric" },
  { label: "Corrosion Coupons", route: "/corrosian-coupons" },
  { label: "Chromatography", route: "/chromatography" },
];

// Import components using React.lazy()
export const BufferVolumetric = lazy(() => import('./BufferVolumetric'));
export const Chemicals = lazy(() => import('./Chemicals'));
export const Glassware = lazy(() => import('./Glassware'));
export const Instruments = lazy(() => import('./Instruments'));
export const Chromatography = lazy(() => import('./Chromatography'));
export const Consumables = lazy(() => import('./Consumables'));
export const CorrosionCoupons = lazy(() => import('./CorrosionCoupons'));
export const Filtration = lazy(() => import('./Filtration'));
export const Plasticware = lazy(() => import('./Plasticware'));

// Create an object with lazy-loaded components
// export default {
//   BufferVolumetric: LazyBufferVolumetric,
//   Chemicals: LazyChemicals,
//   Glassware: LazyGlassware,
//   Instruments: LazyInstruments,
//   Chromatography: LazyChromatography,
//   Consumables: LazyConsumables,
//   CorrosionCoupons: LazyCorrosionCoupons,
//   Filtration: LazyFiltration,
//   Plasticware: LazyPlasticware,
// };


// export * from './BufferVolumetric';
// export * from './Chemicals';
// export * from './Glassware';
// export * from './Instruments';
// export * from './Chromatography';
// export * from './Consumables';
// export * from './CorrosionCoupons';
// export * from './Filtration';
// export * from './Plasticware';
