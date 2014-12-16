Ext.define('RaterDashboard.controller.Twitter',{
    extend:'Ext.app.Controller',
    
    config:{
    	refs: {
            twitterLoginBtn: 'button[itemId=twitterBtnId]',
    		authorizeBtn: 'button[itemId=idBtnTwitterAuthorize]',
    		searchTimeline: 'searchfield[itemId=idSearchTimeline]' 
    	},
    	control: {
            twitterLoginBtn: {
                tap: 'twitterLoginBtnTapped'
            },
    		authorizeBtn: {
    			tap: 'onTapBtnTwitterAuthorize'
    		},
    		searchTimeline: {
    			change: 'onSearchTimeline'
    		}
    	}
    },

    twitterLoginBtnTapped: function(){
         Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('twitterActivity');   
    },

    onTapBtnTwitterAuthorizeNew: function(){
        //debugger;
    	var options = {
				consumerKey: 'PwE7u8Nusi6qZcNbebPZ5MNOD', // YOUR Twitter CONSUMER_KEY
				consumerSecret: 'mlBpy0w00NuuZBIOhQswXR12FsFwtGJ21g7IrxfpQTqf2xzTDG', // YOUR Twitter CONSUMER_SECRET
			    callbackUrl: "https://twitter.com" 
			};
			//oauth = OAuth(options);
        window.oauth = OAuth(options);
			
		oauth.get('https://api.twitter.com/oauth/request_token',
			function(data) {
				console.log("Success: ",data);
				var twitterWindow = window.open('https://api.twitter.com/oauth/authorize?'+data.text, '_blank', 'location=yes');
                twitterWindow.addEventListener('loadstart',function(event){
                    var jsonUrlParams = JSON.parse('{"'+event.url.split("?")[1].replace(/\=/g,'":"').replace(/\&/g,'","')+'"}');
                    oauth.get('https://api.twitter.com/oauth/access_token?'+event.url.split("?")[1],
                        function(data) {
                            oauth.setAccessToken([jsonUrlParams.oauth_token, jsonUrlParams.oauth_token_secret]);
                        },
                        function(data){
                            console.log("ERROR: "+data);
                        }
                    );
                });

			},function(data) {
	        	console.log("ERROR: "+data);
	        }
	    );
	},


    onTapBtnTwitterAuthorize: function(){
        alert("in");
        var options = {
                consumerKey: 'PwE7u8Nusi6qZcNbebPZ5MNOD', // YOUR Twitter CONSUMER_KEY
                consumerSecret: 'mlBpy0w00NuuZBIOhQswXR12FsFwtGJ21g7IrxfpQTqf2xzTDG', // YOUR Twitter CONSUMER_SECRET
                callbackUrl: "https://twitter.com"
            },
            oauth = OAuth(options);
        //window.oauth = OAuth(options);
        //alert("1");
        oauth.get('https://api.twitter.com/oauth/request_token',
            function(data) {
                //alert("2");
                requestParams = data.text;
                console.log("Success: ",data);
                alert("data: " + JSON.stringify(data));
                var twitterWindow = window.open('https://api.twitter.com/oauth/authorize?'+data.text, '_blank', 'location=no');
                //if(window.phonegap){
                if(true){
                    //alert("3");
                    twitterWindow.addEventListener('loadstart',function(event){
                        var jsonUrlParams;
                        if(event.url.match("https://twitter.com")){
                            //alert("4");
                            alert("event: " + JSON.stringify(event));
                            alert("event: " + JSON.stringify(event.url));
                            jsonUrlParams = JSON.parse('{"'+event.url.split("?")[1].replace(/\=/g,'":"').replace(/\&/g,'","')+'"}');
                            oauth.get('https://api.twitter.com/oauth/access_token?'+event.url.split("?")[1],
                                function(data) {
                                    twitterWindow.close();
                                    //alert("5");
                                    alert("data access_token: " + JSON.stringify(data));
                                    //alert("jsonUrlParams.oauth_token: " + jsonUrlParams.oauth_token);
                                    //alert("jsonUrlParams.oauth_token_secret: " + jsonUrlParams.oauth_token_secret);
                                    //oauth.setAccessToken([jsonUrlParams.oauth_token, jsonUrlParams.oauth_token_secret]);
                                    oauth.get('https://api.twitter.com/1.1/statuses/home_timeline.json?count=10', 
                                        function(data){
                                            alert("6");
                                            alert("data: " + JSON.stringify(data));
                                        }, 
                                        function(err){
                                            alert("7");
                                            alert("error: " + JSON.stringify(err));
                                        }
                                    );
                                },
                                function(data){
                                    alert("8");
                                    alert("error");
                                    alert("error data :  " + JSON.stringify(data));
                                    console.log("ERROR: "+data);
                                }
                            );
                        }
                    });
                }else{   // for testing purpose in development in desktop
                    var interval = window.setInterval(function(){
                        var url;
                        console.log("INTERVAL TWITTER WINDOW");
                        if(twitterWindow)
                        {
                            if(twitterWindow.closed){
                                window.clearInterval(interval);
                            }
                        }

                        if(twitterWindow)
                        {
                            url = twitterWindow.document.URL;
                        }
                        if((url && url.match("https://twitter.com")) || data.text.match("oauth_token=")){
                            window.clearInterval(interval);
                            if(twitterWindow)
                            {
                                twitterWindow.close();
                            }
                            //alert(url.split("?")[1]);
                            oauth.get('https://api.twitter.com/oauth/access_token?'+url.split("?")[1],
                                function(data) {
                                   // debugger;
                                    oauth.get('https://api.twitter.com/1.1/statuses/home_timeline.json?'+data.text+
                                        +'&oauth_consumer_key=PwE7u8Nusi6qZcNbebPZ5MNOD&oauth_signature_method=HMAC-SHA1'
                                        +'&oauth_timestamp='+(Date.now()/1000).toFixed(),
                                        function(data) {
                                           //debugger;
                                        },
                                        function(data){
                                            //debugger;
                                            console.log("ERROR: "+data);
                                        }
                                    );
                                    /*Ext.Ajax.request({
                                            url : 'https://api.twitter.com/1.1/statuses/home_timeline.json',
                                            headers: {
                                               'Content-Type': 'application/x-www-form-urlencoded',
                                               'Authorization': 'OAuth oauth_consumer_key="PwE7u8Nusi6qZcNbebPZ5MNOD",oauth_token="486556282-vUWMs1WNa6xvyXH6lYWdlVIfgGj7BP7tKZeqLqAV",oauth_token_secret="qjWS6OJvVPBl4pLR4dB61dV3xqo5hU7mMkWXjDFhs4ssB",oauth_signature_method="HMAC-SHA1",oauth_callback="https://twitter.com",oauth_nonce="2479653059",oauth_timestamp='+(Date.now()/1000).toFixed()
                                            },
                                            success : function(response, options) {
                                                debugger;
                                                Ext.Msg.alert("Success");
                                            },
                                            failure : function(response, options) {
                                                console.log("Failure" + response.responseText + " " + options.responseText);
                                            }
                                        });
                                    */
                                },
                                function(data){
                                    //debugger;
                                    console.log("ERROR: "+data);
                                }
                            );
                        }
                    },1000);
                }


            },function(data) {
                console.log("ERROR: "+data);
            }
        );
    },


    onSearchTimeline: function(){
        alert("in search");
    	//debugger;
    }
});


/*
working

https://api.twitter.com/1.1/statuses/home_timeline.json?oauth_consumer_key=DC0sePOBbQ8bYdC8r4Smg&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1418648443&oauth_nonce=-726876059&oauth_version=1.0&oauth_token=2904748999-ox8vjdGsCebftSXwRIl8lE9oNVpvdMBQPrWnidH&oauth_signature=pmtoWbXBZaYQPU74dd7r6pG1rV8%3D

*/