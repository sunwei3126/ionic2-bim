import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WorkOrderPage } from '../pages/work-order/work-order';
import { OperationsPage } from '../pages/operations/operations';
import { AllWorksOrderPage } from '../pages/all-works-order/all-works-order';
import { KhbxPage } from '../pages/all-works-order/khbx/khbx';
import { RcjxPage } from '../pages/all-works-order/rcjx/rcjx';
import { YfxwhPage } from '../pages/all-works-order/yfxwh/yfxwh';
import { BjydPage } from '../pages/all-works-order/bjyd/bjyd';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {


  }


//openPage(page) {
//  // Reset the content nav to have just this page
//  // we wouldn't want the back button to show in this scenario
//  this.nav.setRoot(page.component);
//}
}
