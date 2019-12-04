//app.js
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
      goDetail: function (id,tname) {



         tt.navigateTo({
        url: '../detail/detail?id='+id+'&tname='+tname
     });
      
  },

        goMoreList: function (type) {
            if(type=='gxrd'){
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=gqrd'
                    });``
            }
              if(type=='sbzc'){
               tt.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=sbzc'
                    });``
            }
       
  }

  


});