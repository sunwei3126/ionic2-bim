import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { AllWorksOrderPage } from '../all-works-order/all-works-order';

@Component({
  selector: 'page-operations',
  templateUrl: 'operations.html'
})
export class OperationsPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  	
  }
  ionViewDidLoad() {
   	this.items = this.getItems();//获取工单提醒列表
  }
  getItems(){
  	return [{
  		time:"13年12月01日",
  		img:"head.png",
  		name:"问题类型",
  		tit:"设备地址1",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		time:"13年12月02日",
  		img:"head.png",
  		name:"问题类型",
  		tit:"设备地址2",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		time:"13年12月03日",
  		img:"head.png",
  		name:"问题类型",
  		tit:"设备地址3",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	}];
  }
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //下拉刷新
  doRefresh(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.items.unshift({
		  		time:"13年12月01日",
		  		img:"head.png",
		  		name:"问题类型",
		  		tit:"设备地址"+(this.items.length+1),
		  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //上拉加载
  doInfinite(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.items.push({
		  		time:"13年12月01日",
		  		img:"head.png",
		  		name:"问题类型",
		  		tit:"设备地址"+(this.items.length+1),
		  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //查看所有工单
  AllWorksOrderPage(){
  	this.navCtrl.push(AllWorksOrderPage,{});
  }
}
