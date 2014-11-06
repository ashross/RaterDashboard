//
//  MyCalendarPlugin.h
//  ETS
//
//  Created by udaya.kumar.m on 19/06/14.
//
//

#import <UIKit/UIKit.h>
#import <EventKitUI/EventKitUI.h>
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import <Cordova/CDVInvokedUrlCommand.h>
#import <Cordova/CDVScreenOrientationDelegate.h>
#import <Cordova/CDVWebViewDelegate.h>

@interface AndroidCalendar : CDVPlugin<EKEventEditViewDelegate,EKEventViewDelegate>

-(void)addCalendar:(CDVInvokedUrlCommand*)command;
-(void)openCalendar:(CDVInvokedUrlCommand*)command;
-(BOOL)checkEvent:(CDVInvokedUrlCommand*)command;

@property(strong,nonatomic)NSString *mCallBackId;

@end
