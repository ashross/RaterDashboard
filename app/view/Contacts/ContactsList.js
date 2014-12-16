Ext.define('RaterDashboard.view.Contacts.ContactsList', {
  extend: 'Ext.Container',
  xtype: 'contactsList',
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
                        xtype: 'searchfield',
                        itemId: 'searchContactsListId',
                        placeHolder: 'Search',
                        cls: 'twitterSearchFieldCls'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Past Invitation',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'refreshIconBtnCls',
                        cls: 'refreshBtnCls',
                        itemId: 'contactsRefreshBtnId'
                    } 
                ]
        },
        {
            xtype: 'list',
            flex: 1,
            store: 'Contacts',
            itemId: 'contactListId',
            itemTpl: '<div> {name} </div> <div> {num} </div>'
        }
    ]
  }
});