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
            if(type=='gqrd'){
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=gqrd'
                    });``
            }
              if(type=='sbzc'){
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=sbzc'
                    });``
            }
                if(type=='rjzzq'){
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=rjzzq'
                    });``
            }
       
  }

  


});
