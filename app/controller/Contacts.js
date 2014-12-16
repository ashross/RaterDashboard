Ext.define('RaterDashboard.controller.Contacts',{
    extend:'Ext.app.Controller',
    
    config:{
    	refs: {
            //twitterLoginBtn: 'button[itemId=twitterBtnId]',
            contactsTab: 'contactsCardGroup',
            contactsRefreshBtn: 'button[itemId=contactsRefreshBtnId]',
            searchFieldContactsList: 'searchfield[itemId=searchContactsListId]',
            contactList: 'list[itemId=contactListId]'
    	},
    	control: {
            contactsTab: {
                activate: 'contactsTabPressed'
            },
            contactsRefreshBtn: {
                tap: 'getContactsList'
            },
            searchFieldContactsList:{
                keyup: 'searchFieldValueChange'
            },
            contactList: {
                itemsingletap: 'sendSms'
            }
    	/*	authorizeBtn: {
    			tap: 'onTapBtnTwitterAuthorize'
    		},
    		searchTimeline: {
    			change: 'onSearchTimeline'
    		} */
    	}
    },

    searchFieldValueChange: function(ths){
        var value = ths.getValue();
        console.log(value);
        var contactsStore = Ext.getStore('Contacts');
        contactsStore.clearFilter();
        
        contactsStore.filter([
            Ext.create('Ext.util.Filter', {property: "name", value: value, }),
        ]);
    },

    contactsTabPressed: function(){
        var contactsStore = Ext.getStore('Contacts');
        if(contactsStore.getCount() > 0)
        {
          return;
        }
        this.getContactsList();
    },

    sendSms: function( ths, index, target, record){
        window.plugins.socialsharing.shareViaSMS(
            'I am using this awesome RaterDashboard App. Check it!',
            record.data.num,
            function(msg) {
                alert('ok: ' + msg);
            }, 
            function(msg) {
                alert('error: ' + msg);
            }
        );
    },

    getContactsList: function(){
          if(navigator.contacts)
          {
            var options      = new ContactFindOptions();
            options.filter   = "";
            options.multiple = true;
            options.desiredFields = [
                navigator.contacts.fieldType.id,
                //navigator.contacts.fieldType.displayName,
                navigator.contacts.fieldType.name,
                navigator.contacts.fieldType.phoneNumbers
                //navigator.contacts.fieldType.nickname
            ];
            var fields = [
                navigator.contacts.fieldType.displayName,
                navigator.contacts.fieldType.name
            ];
            navigator.contacts.find(fields, 
              function(contacts){ //onSuccess
                    //alert('Found ' + contacts.length + ' contacts.');
                    //alert(JSON.stringify(contacts));
                    var contactsArr = [];
                    for(var i=0; i<contacts.length; i++){
                        contactsArr.push({
                            uid: contacts[i].id,
                            name: contacts[i].name.formatted,
                            num: (contacts[i].phoneNumbers.length > 0) ? contacts[i].phoneNumbers[0].value : ""
                        });
                    }
                    var contactsStore = Ext.getStore('Contacts');
                    contactsStore.removeAll(true);
                    contactsStore.add(contactsArr);
                   // alert(contactsStore.getCount());
              },
              function(contactError){ // onError
                    alert("Error in contacts");
                    alert(JSON.stringify(contactError));
              },options);
          }
          else
          {
            alert("Contacts Plugin has not been configured")
          }
    },


});