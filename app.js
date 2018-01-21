(function () {
'use strict';

angular.module('ShoppingListCheckOff', [] )
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var ctrl1=this;
	ctrl1.toBuy= ShoppingListCheckOffService.getToBuyList();

	ctrl1.buyItem= function(index,item){
	ShoppingListCheckOffService.buyItem(index,item);

	};


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
	var ctrl2=this;
	ctrl2.bought=ShoppingListCheckOffService.gettoBoughtList();
	



	

}

function ShoppingListCheckOffService(){
	var service=this;
	var toBuyList=[{ name: "cookies", quantity: 30 }, { name: "chips", quantity: 3 }, { name: "drinks", quantity: 7 }, { name: "vegetables", quantity: 2 }, { name: "fruits", quantity: 7 }];
    var toBoughtList=[];
    service.getToBuyList= function (){
    	return toBuyList;
    }
    service.gettoBoughtList= function(){
    	return toBoughtList
    }
    service.buyItem= function(index, item){
    	toBoughtList.push(item);
    	toBuyList.splice(index, 1);
    }

		
	
}

})();