/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductCategory } from './pages/ProductCategory';
import { ProductMaterials } from './pages/ProductMaterials';
import { ProductConsumables } from './pages/ProductConsumables';
import { ProductGlassCeramics } from './pages/ProductGlassCeramics';
import { ProductSoftware } from './pages/ProductSoftware';
import { Product3DPrinters } from './pages/Product3DPrinters';
import { ProductCadCam } from './pages/ProductCadCam';
import { ProductMillingMachines } from './pages/ProductMillingMachines';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { DigitalAssessment } from './pages/DigitalAssessment';
import { ClinicWorkflow } from './pages/ClinicWorkflow';
import { Products } from './pages/Products';
import { CoursesEvents } from './pages/CoursesEvents';
import { TechnicalSupport } from './pages/TechnicalSupport';
import { HelpCenter } from './pages/HelpCenter';
import { GenericPage } from './pages/GenericPage';
import { ProductAsigaMaxUv } from './pages/ProductAsigaMaxUv';
import { FAQ } from './pages/FAQ';
import { Downloads } from './pages/Downloads';
import { News } from './pages/News';
import { CaseStudies } from './pages/CaseStudies';
import { ArticleDetail } from './pages/ArticleDetail';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Products Routes */}
          <Route path="products" element={<Products />} />
          {/* Specific Product Category Routes */}
          <Route path="products/3d-printers" element={<Product3DPrinters />} />
          <Route path="products/3d-printers/asiga-max-uv" element={<ProductAsigaMaxUv />} />
          <Route path="products/cad-cam" element={<ProductCadCam />} />
          <Route path="products/milling-machines" element={<ProductMillingMachines />} />
          <Route path="products/materials" element={<ProductMaterials />} />
          <Route path="products/consumables" element={<ProductConsumables />} />
          <Route path="products/glass-ceramics" element={<ProductGlassCeramics />} />
          <Route path="products/software" element={<ProductSoftware />} />
          
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/lab-digital-transformation" element={<DigitalAssessment />} />
          <Route path="services/clinic-digital-workflow" element={<ClinicWorkflow />} />
          
          <Route path="courses-events" element={<CoursesEvents />} />
          <Route path="technical-support" element={<TechnicalSupport />} />
          <Route path="support/help-center" element={<HelpCenter />} />
          <Route path="support/faq" element={<FAQ />} />
          <Route path="support/downloads" element={<Downloads />} />
          
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<ArticleDetail />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:id" element={<ArticleDetail />} />
          
          {/* Catch-all for other SEO pages (Services, Contact, etc.) */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<GenericPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

