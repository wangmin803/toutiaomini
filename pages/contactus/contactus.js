// pages/contactus/contactus.js
Page({
  callPhone: function () {
    tt.makePhoneCall({
      phoneNumber: "15935154726"
    });
  }, onShow: function () {
    tt.getStorage({
      key: "contactus_bottom",
      success: function (res) {
        if (res.data == "1") {
          tt.pageScrollTo({
            scrollTop: 800
          });
          tt.removeStorage({ key: "contactus_bottom" });
        }
      }
    });
    

  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/contactus/contactus'
    };
  }, addPhone: function () {
    tt.addPhoneContact({
      firstName: '王经理', //联系人姓名 
      weChatNumber: "mumengmeng",
      mobilePhoneNumber: '13835016858', //联系人手机号  
      addressState: "山西省",
      addressCity: "山西省太原市",
      addressStreet: "小店区国药大厦8层",
      organization: "山西景铭科技有限公司",
      email: "22982728@qq.com",
      title: "总经理"
    });
  }
});
