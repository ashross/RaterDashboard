Ext.define('RaterDashboard.store.TwitterHomeTimelines', {
    extend: 'Ext.data.Store',
    config: {
		model: 'RaterDashboard.model.TwitterHomeTimeline',
/*		autoLoad:true,
		proxy:
		{
			type: 'ajax',
			url : '',
			//method	: "POST",
			extraParams : {
				action:"get_ads",
				output:"json"
			},
			actionMethods : {
				read   : 'POST'
			},
			reader:{
				type: "json"
			//		rootProperty:''
			}
		}
	}
});*/


		data : [
   {
    "created_at": "Sat Nov 29 08:37:08 +0000 2014",
    "id": 538612612506738700,
    "id_str": "538612612506738688",
    "text": "Team of “Taarak Mehta Ka Ooltah Chashma” created this website for Swachh Bharat Mission, which I urge you to visit. http://t.co/rHbQrD5S6v",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 715,
    "favorite_count": 1133,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "http://t.co/rHbQrD5S6v",
          "expanded_url": "http://www.tmkocmycleanindia.com",
          "display_url": "tmkocmycleanindia.com",
          "indices":  [
            116,
            138
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:36:42 +0000 2014",
    "id": 538612502612164600,
    "id_str": "538612502612164608",
    "text": "I salute the cast & crew of “Taarak Mehta Ka Ooltah Chashma” for their unwavering commitment to Swachh Bharat Mission http://t.co/V4ZuFqrq8c",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 433,
    "favorite_count": 825,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "http://t.co/V4ZuFqrq8c",
          "expanded_url": "http://www.indiatvnews.com/entertainment/bollywood/taarak-mehta-ka-ooltah-chashma-promote-clean-india--18804.html",
          "display_url": "indiatvnews.com/entertainment/…",
          "indices":  [
            122,
            144
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:35:22 +0000 2014",
    "id": 538612169953509400,
    "id_str": "538612169953509376",
    "text": "These kids from Kochi & Kerala Blasters team chip in towards a Clean India. Now thats a wonderful GOAL! http://t.co/i5rthM0TN2",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 381,
    "favorite_count": 689,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "http://t.co/i5rthM0TN2",
          "expanded_url": "http://www.indiansuperleague.com/features/1395-campaign-clean-india-kochi-kids-show-how-it-is-done",
          "display_url": "indiansuperleague.com/features/1395-…",
          "indices":  [
            108,
            130
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:31:55 +0000 2014",
    "id": 538611298561716200,
    "id_str": "538611298561716224",
    "text": "Am really delighted by Prasoon Joshi's participation in Swachh Bharat Mision. It will add strength to the Mission. https://t.co/H86VZMQwTf",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 372,
    "favorite_count": 653,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "https://t.co/H86VZMQwTf",
          "expanded_url": "https://www.youtube.com/watch?v=dz-v36Vw5nw&feature=youtu.be",
          "display_url": "youtube.com/watch?v=dz-v36…",
          "indices":  [
            115,
            138
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:23:14 +0000 2014",
    "id": 538609113912340500,
    "id_str": "538609113912340480",
    "text": "I consider myself blessed to have closely interacted with Pujya Pramukh Swami Maharaj for years. He has deeply inspired me.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 466,
    "favorite_count": 780,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:22:40 +0000 2014",
    "id": 538608970119000060,
    "id_str": "538608970119000064",
    "text": "My Pranams to Pujya Pramukh Swami Maharaj on his 94th birthday. His is a life dedicated to peace, harmony & service to society.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 460,
    "favorite_count": 763,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:19:33 +0000 2014",
    "id": 538608187667394560,
    "id_str": "538608187667394562",
    "text": "These elections are crucial for Jharkhand's future. BJP ensures development that will change the face of Jharkhand. http://t.co/77QdV7X9se",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 316,
    "favorite_count": 575,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "http://t.co/77QdV7X9se",
          "expanded_url": "http://nm4.in/1rEUHHz",
          "display_url": "nm4.in/1rEUHHz",
          "indices":  [
            116,
            138
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 08:18:48 +0000 2014",
    "id": 538607998160363500,
    "id_str": "538607998160363520",
    "text": "Spoke at the Ranchi rally. Earlier spoke at Jamshedpur. Urged people of Jharkhand to elect a BJP Govt. with a full majority.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 312,
    "favorite_count": 579,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 01:59:41 +0000 2014",
    "id": 538512590528200700,
    "id_str": "538512590528200704",
    "text": "India will not develop till the Northeast develops. We are committed to realising the potential of the Northeast & accelerating its progress",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 1273,
    "favorite_count": 2180,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 01:58:25 +0000 2014",
    "id": 538512274420281340,
    "id_str": "538512274420281344",
    "text": "I would visit Assam, Manipur, Tripura & Nagaland & attend a wide range of programmes that would connect me to all sections of society.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 733,
    "favorite_count": 1412,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 01:56:46 +0000 2014",
    "id": 538511859096096800,
    "id_str": "538511859096096768",
    "text": "Rich natural resources combined with talent of our youth gives our Northeast the potential to play a key role in our development journey.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 634,
    "favorite_count": 1226,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 01:56:04 +0000 2014",
    "id": 538511681714794500,
    "id_str": "538511681714794496",
    "text": "Later today, I would embark on my visit to the Northeast. I am eagerly looking forward to being there & interacting with people.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 556,
    "favorite_count": 1207,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Sat Nov 29 01:55:04 +0000 2014",
    "id": 538511431310655500,
    "id_str": "538511431310655488",
    "text": "Will address rallies in Jamshedpur & Ranchi in Jharkhand today.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 427,
    "favorite_count": 921,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Fri Nov 28 14:36:33 +0000 2014",
    "id": 538340675490557950,
    "id_str": "538340675490557952",
    "text": "People of J&K see a new ray of hope. They are determined to end this 'turn by turn' looting & will vote for progress. http://t.co/hD0M1mVTEc",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 779,
    "favorite_count": 1589,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [
         {
          "url": "http://t.co/hD0M1mVTEc",
          "expanded_url": "http://nm4.in/1AYAZcA",
          "display_url": "nm4.in/1AYAZcA",
          "indices":  [
            126,
            148
          ]
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Fri Nov 28 14:36:13 +0000 2014",
    "id": 538340592007147500,
    "id_str": "538340592007147520",
    "text": "A vote for BJP is a vote to end corruption, loot & emotional blackmailing that has become a part of J&K’s political culture for last few yrs",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 790,
    "favorite_count": 1451,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Fri Nov 28 14:35:13 +0000 2014",
    "id": 538340339556180000,
    "id_str": "538340339556179968",
    "text": "The heavy voter turnout in Phase 1 gave a clear message from people of J&K to the world- the ballot has prevailed & the bullet is rejected.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 742,
    "favorite_count": 1325,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Fri Nov 28 14:34:29 +0000 2014",
    "id": 538340154532839400,
    "id_str": "538340154532839424",
    "text": "Addressed rallies in Udhampur & Poonch. Wonderful atmosphere during the rallies. http://t.co/VmtAROmxej",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 756,
    "favorite_count": 1586,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [],
      "media":  [
      	{
      		"media_url_https": "https://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
      	},
      	{
      		"media_url_https": "https://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
      	},
         {
          "id": 538340151814914050,
          "id_str": "538340151814914048",
          "indices":  [
            85,
            107
          ],
          "media_url": "http://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
          "media_url_https": "https://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
          "url": "http://t.co/VmtAROmxej",
          "display_url": "pic.twitter.com/VmtAROmxej",
          "expanded_url": "http://twitter.com/narendramodi/status/538340154532839424/photo/1",
          "type": "photo",
          "sizes":  {
            "thumb":  {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small":  {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "medium":  {
              "w": 600,
              "h": 337,
              "resize": "fit"
            },
            "large":  {
              "w": 1024,
              "h": 576,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities":  {
      "media":  [
         {
          "id": 538340151814914050,
          "id_str": "538340151814914048",
          "indices":  [
            85,
            107
          ],
          "media_url": "http://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
          "media_url_https": "https://pbs.twimg.com/media/B3iRhA1CAAAF-AS.jpg",
          "url": "http://t.co/VmtAROmxej",
          "display_url": "pic.twitter.com/VmtAROmxej",
          "expanded_url": "http://twitter.com/narendramodi/status/538340154532839424/photo/1",
          "type": "photo",
          "sizes":  {
            "thumb":  {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small":  {
              "w": 340,
              "h": 191,
              "resize": "fit"
            },
            "medium":  {
              "w": 600,
              "h": 337,
              "resize": "fit"
            },
            "large":  {
              "w": 1024,
              "h": 576,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  },
   {
    "created_at": "Thu Nov 27 17:40:48 +0000 2014",
    "id": 538024656226500600,
    "id_str": "538024656226500608",
    "text": "Thanksgiving greetings to all friends in USA. We thank Almighty for the constant blessings. Have a wonderful day.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 1373,
    "favorite_count": 2713,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Thu Nov 27 14:27:08 +0000 2014",
    "id": 537975916966985700,
    "id_str": "537975916966985728",
    "text": "I thank the people of Nepal for their warm hospitality. My thanks to PM Koirala for being a wonderful host during the SAARC Summit.",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 1325,
    "favorite_count": 2745,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  []
    },
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  },
   {
    "created_at": "Thu Nov 27 14:26:00 +0000 2014",
    "id": 537975632106618900,
    "id_str": "537975632106618880",
    "text": "With leaders of SAARC Nations during the retreat earlier today. http://t.co/MtlRuunsY8",
    "truncated": false,
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user":  {
      "id": 18839785,
      "id_str": "18839785",
      "name": "Narendra Modi",
      "screen_name": "narendramodi",
      "location": "India",
      "profile_location": null,
      "description": "Prime Minister of India",
      "url": "http://t.co/i7NW4Bof2G",
      "entities":  {
        "url":  {
          "urls":  [
             {
              "url": "http://t.co/i7NW4Bof2G",
              "expanded_url": "http://www.narendramodi.in",
              "display_url": "narendramodi.in",
              "indices":  [
                0,
                22
              ]
            }
          ]
        },
        "description":  {
          "urls":  []
        }
      },
      "protected": false,
      "followers_count": 8274046,
      "friends_count": 1055,
      "listed_count": 14573,
      "created_at": "Sat Jan 10 17:18:56 +0000 2009",
      "favourites_count": 0,
      "utc_offset": 19800,
      "time_zone": "New Delhi",
      "geo_enabled": false,
      "verified": true,
      "statuses_count": 6428,
      "lang": "en",
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "F4EDD4",
      "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/434657864661995521/cTePSWkz.jpeg",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/454954067488288768/fU6NY-EI_normal.jpeg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/18839785/1405150974",
      "profile_link_color": "4E7096",
      "profile_sidebar_border_color": "FFFFFF",
      "profile_sidebar_fill_color": "D5DFED",
      "profile_text_color": "233863",
      "profile_use_background_image": true,
      "default_profile": false,
      "default_profile_image": false,
      "following": true,
      "follow_request_sent": false,
      "notifications": false
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "retweet_count": 974,
    "favorite_count": 2464,
    "entities":  {
      "hashtags":  [],
      "symbols":  [],
      "user_mentions":  [],
      "urls":  [],
      "media":  [
         {
          "id": 537975607842201600,
          "id_str": "537975607842201600",
          "indices":  [
            64,
            86
          ],
          "media_url": "http://pbs.twimg.com/media/B3dF9wtCYAAvvrZ.jpg",
          "media_url_https": "https://pbs.twimg.com/media/B3dF9wtCYAAvvrZ.jpg",
          "url": "http://t.co/MtlRuunsY8",
          "display_url": "pic.twitter.com/MtlRuunsY8",
          "expanded_url": "http://twitter.com/narendramodi/status/537975632106618880/photo/1",
          "type": "photo",
          "sizes":  {
            "medium":  {
              "w": 600,
              "h": 390,
              "resize": "fit"
            },
            "thumb":  {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small":  {
              "w": 340,
              "h": 221,
              "resize": "fit"
            },
            "large":  {
              "w": 650,
              "h": 423,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "extended_entities":  {
      "media":  [
         {
          "id": 537975607842201600,
          "id_str": "537975607842201600",
          "indices":  [
            64,
            86
          ],
          "media_url": "http://pbs.twimg.com/media/B3dF9wtCYAAvvrZ.jpg",
          "media_url_https": "https://pbs.twimg.com/media/B3dF9wtCYAAvvrZ.jpg",
          "url": "http://t.co/MtlRuunsY8",
          "display_url": "pic.twitter.com/MtlRuunsY8",
          "expanded_url": "http://twitter.com/narendramodi/status/537975632106618880/photo/1",
          "type": "photo",
          "sizes":  {
            "medium":  {
              "w": 600,
              "h": 390,
              "resize": "fit"
            },
            "thumb":  {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small":  {
              "w": 340,
              "h": 221,
              "resize": "fit"
            },
            "large":  {
              "w": 650,
              "h": 423,
              "resize": "fit"
            }
          }
        }
      ]
    },
    "favorited": false,
    "retweeted": false,
    "possibly_sensitive": false,
    "lang": "en"
  }
]
	}
});
