//app.js
var util = require('./utils/util.js');
var network_util = require('./utils/network_util.js');
var json_util = require('./utils/json_util.js');
App({
 
  
 
  onLaunch: function () {   },

  onShow: function () {

       

 

   
    },

  goContactus: function () {
     tt.switchTab({
          url: '../contactus/contactus'
        });

  },

  goSbzc: function () {
       tt.switchTab({
          url: '../sbzc/sbzc'
        });
  },


   goGxrd: function () {
      tt.switchTab({
          url: '../gxrd/gxrd'
        });
  },


        goMoreList: function (type) {
          
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type='+type
                    });``
        
       
  },
     setNbt: function (type) {
                if(type=='gqrd'){
                            tt.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原高企认证"
                            })
                    }
                        else if(type=='sbzc'){
                            tt.setNavigationBarTitle({
                                title: "山西商标注册,太原商标注册"
                            })
                    }
                        else if(type=='rjzzq'){
                            tt.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }   else if(type=='all'){
                            tt.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原软件著作权,商标注册"
                            })
                    }
                    
                    else {
                            tt.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }

     }


});
