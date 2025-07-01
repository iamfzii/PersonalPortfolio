import { lazy } from "react";

// Lazy load heavy components to improve initial load time
export const LazyProjectsSection = lazy(() => import("@/components/projects-section"));
export const LazyDemonstrationsSection = lazy(() => import("@/components/demonstrations-section"));
export const LazyEnhancedPDFGenerator = lazy(() => import("@/components/enhanced-pdf-generator"));
export const LazyUnifiedDesignControls = lazy(() => import("@/components/unified-design-controls-fixed"));
export const LazyTwoColumnResumeExport = lazy(() => import("@/components/two-column-resume-export"));
export const LazyHTMLResumeExport = lazy(() => import("@/components/html-resume-export"));