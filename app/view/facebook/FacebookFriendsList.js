Ext.define('RaterDashboard.view.facebook.FacebookFriendsList', {
  extend: 'Ext.Container',
  xtype: 'facebookFriendsList',
  config: {
    layout: {
      type: 'vbox',
      //pack: 'center',
      //align: 'center'
    },
    items: [
      {
	         xtype: 'panel',
	         html: '<div class="fb-login-button" data-max-rows="2" data-size="large" data-show-faces="true" data-auto-logout-link="true"></div>'
      },
      {
         /* xtype: 'panel',
          //layout: 'hbox',
          layout: {
                    type:"hbox",
                    pack:"end"
                },
          style: 'padding:10px;',
          cls: 'fbTitlebarCls',*/
          docked: 'top',
                xtype: 'toolbar',
                layout: {
                    type:"hbox",
                    pack:"end"
                },
          cls: 'fbTitlebarCls',
          items: 
          [
              {
                  xtype: 'searchfield',
                  //flex: 1,
                  cls: 'searchfieldCls',
                  inputCls: 'searchfieldInputCls',
                  placeHolder: 'Search'
              },
              {
                  xtype: 'spacer'
              },
          	 /* {
                  xtype: 'button',
                  //cls: 'scheduleBtnCls',
                  itemId: 'faceBookPostBtnId',
                  cls: 'fbBtnCls',
                  text: "What's in Your Mind?"
          	  },
              {
                  xtype: 'button',
                  //cls: 'scheduleBtnCls',
                  itemId: 'faceBookPhotoBtnId',
                  //icon: './resources/images/camera.png',
                  cls: 'fbBtnCls',
                  iconCls: 'fbIconBtnCls',

                  //text: "Photo"
              } */
          ]
      },
      {
          xtype: 'list',
          flex: 1,
          store: 'FBFriendsList',
          itemTpl: new Ext.XTemplate(
                    '<table border="0px" style="padding:0px; margin-bottom:0px;">',
                      '<tr>',
                        '<td style="width:10%; min-width:50px;"><img src="{uid:this.setAvatar}" height="auto" width="auto"/></td>',
                        '<td style="width:80%; font-size: 1.2em; font-weight: bold;">',
                            '<div>{name} </div>',
                        '</td>',
                      '</tr>',
                    '</table>',
                    {
                        setAvatar: function(uid){
                              return "https://graph.facebook.com/" + uid + "/picture?type=small";
                        }
                    }
                ),
        /*  itemTpl: new Ext.XTemplate(
                    '<div style="display:flex;">',
                       // '<img src="{user.profile_image_url_https}" height=60 width=60/>',
                        '<img src="{uid:this.setAvatar}" height="60" width="auto"/>',
                        '<div style="flex:1;padding-left: 0.5em;">',
                            '<div style="width:100%;">{name} </div>',
                        '</div>',
                    '</div>',
                    {
                        setAvatar: function(uid){
                              return "https://graph.facebook.com/" + uid + "/picture?type=large";
                        }
                    }
                ),*/
                //"https://graph.facebook.com/1392625674362877/picture?type=large"
      }
    ]
  }
});