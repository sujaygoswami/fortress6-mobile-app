import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // { path: '', redirectTo: 'firstview', pathMatch: 'full' },


  { path: '', loadChildren: './firstview/firstview.module#FirstviewPageModule' },

  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
 
  { path: 'test-routing', loadChildren: './test-routing/test-routing.module#TestRoutingPageModule' },

  { path: 'foundation', loadChildren: './foundation/foundation.module#FoundationPageModule' },

  { path: 'navigation-panel', loadChildren: './navigation-panel/navigation-panel.module#NavigationPanelPageModule' },

  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },

  { path: 'our-services', loadChildren: './our-services/our-services.module#OurServicesPageModule' },

  { path: 'service-detail/:id', loadChildren: './service-detail/service-detail.module#ServiceDetailPageModule' },
  
  { path: 'our-services-content', loadChildren: './services/our-services-content/our-services-content.module#OurServicesContentPageModule' },
  
  { path: 'platforms', loadChildren: './platforms/platforms.module#PlatformsPageModule' },
  
  { path: 'platform-detail', loadChildren: './platform-detail/platform-detail.module#PlatformDetailPageModule' },

  
  
  
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
