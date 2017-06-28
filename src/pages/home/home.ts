import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { WorkOrderPage } from '../work-order/work-order';
import { OperationsPage } from '../operations/operations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public notices = {};
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
   	this.notices = this.getNotices();//获取首页提醒数量
  }
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //工单提醒
  WorkOrderPage(){
  	this.navCtrl.push(WorkOrderPage,{});
  }
  //运维管理
  OperationsPage(){
  	this.navCtrl.push(OperationsPage,{});
  }
  //首页提醒数量
  getNotices(){
  	return {"sb":"2","gd":"3","tz":"0","yw":"4","zc":"0","kj":"4"};
  }
}
