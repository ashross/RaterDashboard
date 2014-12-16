Ext.define("RaterDashboard.view.Contacts.ContactsCardGroup", {
  extend: 'Ext.Container',
  xtype: 'contactsCardGroup',
  requires: [
    'RaterDashboard.view.Contacts.ContactsList'
  ],
  config: {
    layout: 'card',
    items: [
      {
	       xtype: 'contactsList'
      }
    ]
  }
});