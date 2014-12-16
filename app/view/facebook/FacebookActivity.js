Ext.define('RaterDashboard.view.facebook.FacebookActivity', {
  extend: 'Ext.Container',
  xtype: 'facebookActivity',
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
              {
                  xtype: 'button',
                  //cls: 'scheduleBtnCls',
                  itemId: 'faceBookInviteFriendsBtnId',
                  cls: 'fbBtnCls',
                  text: "Invite Friends"
              },
          	  {
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
              }
          ]
      },
      {
          xtype: 'list',
          flex: 1,
          store: 'FBHomePageFeeds',
          itemTpl: new Ext.XTemplate(
                    '<div style="display:flex;">',
                       // '<img src="{user.profile_image_url_https}" height=60 width=60/>',
                        '<img src="{uid:this.setAvatar}" height=60 width="auto"/>',
                        '<div style="flex:1;padding-left: 0.5em;">',
                            '<div style="width:100%;"><b style="width:50%;">{name}</b> <span style="width:50%;float: right;text-align: right;"> {updated_time:this.setTime} </span></div>',
                            '<div>{message}</div>',
                            '{picture:this.getImages}',
                        '</div>',
                    '</div>',
                    {
                        getImages : function(picture){
                            var imgs = ""
                            //if(media && media.length){
                                //media.forEach(function(data){
                                  console.log("picture: " + picture);
                                  if(picture == "" || picture == undefined || picture=="undefined")
                                  {
                                    return images;
                                  }
                                  else
                                  {
                                      console.log("picture in: " + picture);
                                      imgs="<img height='80px' width='auto' src='" + picture + "' style='padding: 0.1em;' />";
                                  }
                             //   });
                            //}
                            return imgs;
                        },
                        setTime : function(date){
                            var dateText  = date.getHours() + ":" + date.getMinutes();
                              return dateText;
                        },
                        setAvatar: function(uid){
                              return "https://graph.facebook.com/" + uid + "/picture?type=large";
                        }
                    }
                ),
/*
          itemTpl: Ext.create('Ext.XTemplate','<div style="min-height:70px;">',
                      '<div class="avatarCls" style="height:50px; width:50px; float: left; background-image: url(\'{uid:this.setAvatar}\');background-size: contain;background-position: center;background-repeat: no-repeat;"> </div>',
                      //'<div style="float:right;">
                          '<div>',
                              '<span>{name} </span>',
                              '<span>{updated_time} </span>',
                          '</div>',
                          '<div><pre>{message} </pre></div>',
                      //'</div>' +
                   '</div>',{
                        setAvatar: function(uid){
                              return "https://graph.facebook.com/" + uid + "/picture?type=large";
                        }
                   }),
          */
        /*  itemTpl: '<div style="min-height:70px;">' +
                      '<div class="avatarCls" style="height:50px; width:50px; float: left; background-image: url(\'{avatar}\');background-size: contain;background-position: center;background-repeat: no-repeat;"> </div>' +
                      //'<div style="float:right;">' +
                          '<div>' +
                              '<span>{name} </span>' + 
                              '<span>{updated_time} </span>' + 
                          '</div>' +
                          '<div>{message} </div>'+
                      //'</div>' +
                   '</div>'
        */
                   //"https://graph.facebook.com/1392625674362877/picture?type=large"
      }
    ]
  }
});