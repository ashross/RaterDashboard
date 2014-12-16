Ext.define('RaterDashboard.view.twitter.TwitterActivity', {
  extend: 'Ext.Container',
  xtype: 'twitterActivity',
  config: {
    layout: {
      type: 'vbox',
      //pack: 'center',
      //align: 'center'
    },
    items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                cls: 'twitterToolbarCsl',
                layout: {
                    type:"hbox",
                    //pack:"end"
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'idBtnTwitterAuthorize',
                        text: 'Login',
                        //hidden: true,
                        ui: 'plain'
                    },
                    {
                        xtype: 'searchfield',
                        itemId: 'idSearchTimeline',
                        placeHolder: 'Search',
                        cls: 'twitterSearchFieldCls'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Tweet',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'fbIconBtnCls'
                        //text: 'Camera',
                        //ui: 'plain'
                    }
                ]
            },
            {
                xtype:'list',
                flex: 1,
                store: 'TwitterHomeTimelines',
                //itemTpl: '<div><img src="{user.profile_image_url_https}"/>{text}{}"/></div>',
                itemTpl: new Ext.XTemplate(
                    '<div style="display:flex;">',
                        '<img src="{user.profile_image_url_https}" height=60 width=60/>',
                        '<div style="flex:1;padding-left: 0.5em;">',
                            '<div><b>{user.name}</b></div>',
                            '<div>{text}</div>',
                            '{[this.getImages(values.entities.media)]}',
                        '</div>',
                    '</div>',
                    {
                        getImages : function(media){
                            var imgs = ""
                            if(media && media.length){
                                media.forEach(function(data){
                                    imgs+="<img height=80 src='"+data.media_url_https+"' style='padding: 0.1em;'>"
                                });
                            }
                            return imgs;
                        }
                    }
                )
            }
    ]
  }
});