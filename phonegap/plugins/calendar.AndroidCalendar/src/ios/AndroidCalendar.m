
//
//  MyCalendarPlugin.m
//  ETS
//
//  Created by udaya.kumar.m on 19/06/14.
//
//

#import "AndroidCalendar.h"
#import <EventKitUI/EventKitUI.h>
#import <EventKit/EventKit.h>

@interface AndroidCalendar()
{
    EKEventStore *eventStore;
    EKEvent *customEvent;
}
@end

@implementation AndroidCalendar

- (CDVPlugin*) initWithWebView:(UIWebView*)theWebView
{
    self = (AndroidCalendar *)[super initWithWebView:theWebView];
    if (self) {
		//[self setup];
        [self initEventStoreWithCalendarCapabilities];
    }
    return self;
}

- (void)initEventStoreWithCalendarCapabilities {
    __block BOOL accessGranted = NO;
    eventStore= [[EKEventStore alloc] init];
    if([eventStore respondsToSelector:@selector(requestAccessToEntityType:completion:)]) {
        dispatch_semaphore_t sema = dispatch_semaphore_create(0);
        [eventStore requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error) {
            accessGranted = granted;
            dispatch_semaphore_signal(sema);
        }];
        dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
    } else { // we're on iOS 5 or older
        accessGranted = YES;
    }
}

-(NSArray*)findEKEventsWithTitle: (NSString *)title
                        location: (NSString *)location
                         message: (NSString *)message
                       startDate: (NSDate *)startDate
                         endDate: (NSDate *)endDate {
    
    // Build up a predicateString - this means we only query a parameter if we actually had a value in it
    NSMutableString *predicateString= [[NSMutableString alloc] initWithString:@""];
    if (title.length > 0) {
        [predicateString appendString:[NSString stringWithFormat:@"title == '%@'" , title]];
    }
    if (location.length > 0) {
        [predicateString appendString:[NSString stringWithFormat:@" AND location == '%@'" , location]];
    }
    if (message.length > 0) {
        [predicateString appendString:[NSString stringWithFormat:@" AND notes == '%@'" , message]];
    }
    
    NSPredicate *matches = [NSPredicate predicateWithFormat:predicateString];
    
    NSArray *datedEvents = [eventStore eventsMatchingPredicate:[eventStore predicateForEventsWithStartDate:startDate endDate:endDate calendars:nil]];
    
    
    NSArray *matchingEvents = [datedEvents filteredArrayUsingPredicate:matches];
    
    
    return matchingEvents;
}


-(void)createEventObject:(CDVInvokedUrlCommand*)command{
    // Import arguments
    //        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:@"calshow://"]];
    
    self.mCallBackId    =   command.callbackId;
    
    CDVPluginResult *pluginResult  = nil;
    NSDictionary* values = [command.arguments objectAtIndex:0];
    
    NSString* title      = [values objectForKey:@"title"];
    NSString* location   = [values objectForKey:@"location"];
    NSString* message    = [values objectForKey:@"Desc"];
    NSString* startDate  = [values objectForKey:@"startDate"];
    //NSString* startDate  = @"10/13/2014 12:45:48 AM";
    NSString* endDate    = [values objectForKey:@"endDate"];
    
    //creating the dateformatter object
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setTimeZone:[NSTimeZone systemTimeZone]];
    [formatter setLocale:[NSLocale systemLocale]];
    [formatter setDateFormat:@"MM/dd/yyyy hh:mm:ss a"];
    NSDate *myStartDate = [formatter dateFromString:startDate];
    NSDate *myEndDate = [formatter dateFromString:endDate];
   
    
    customEvent = [EKEvent eventWithEventStore: eventStore];
    customEvent.title = title;
    customEvent.location = location;
    customEvent.notes = message;
    customEvent.startDate = myStartDate;
    
    customEvent.endDate = myEndDate;
    customEvent.calendar = eventStore.defaultCalendarForNewEvents;
    EKAlarm *reminder = [EKAlarm alarmWithRelativeOffset:-2*60*60];
    [customEvent addAlarm:reminder];
}

-(void)addCalendar:(CDVInvokedUrlCommand*)command{
    
    
    self.mCallBackId    =   command.callbackId;

    [self createEventObject:command];
    
    EKEventEditViewController *controller = [[EKEventEditViewController alloc] init];
    controller.event = customEvent;
    controller.eventStore = eventStore;
    controller.editViewDelegate = self;
    [self.viewController presentViewController:controller animated:YES completion:nil];
}

-(void)openCalendar:(CDVInvokedUrlCommand*)command{
    
    
    self.mCallBackId    =   command.callbackId;

    // Fetch the EKEvent from the event id
    NSDictionary* eventData      = [command.arguments objectAtIndex:0];
    NSString* eventId     = [eventData objectForKey:@"EventId"];
    EKEvent* event = [self fromBase64:eventId];
    
    EKEventViewController *controller = [EKEventViewController new];
    controller.event = event;
    controller.allowsEditing = NO;
    controller.delegate = self;
    UINavigationController *nav = [[UINavigationController alloc]
                                   initWithRootViewController:controller];
    [self.viewController presentViewController:nav animated:YES completion:nil];

}



-(NSString*)base64Encode:(EKEvent*)custEvent{

    NSString *plainString = [[NSString alloc]init];
    NSString *stringSeparator = @">;<";
    plainString = [plainString stringByAppendingString:custEvent.title];
    plainString = [plainString stringByAppendingString:stringSeparator];
    plainString = [plainString stringByAppendingString:custEvent.location];
    plainString = [plainString stringByAppendingString:stringSeparator];
    plainString = [plainString stringByAppendingString:custEvent.notes];
    plainString = [plainString stringByAppendingString:stringSeparator];
    
    NSString *startDateStr = [NSString stringWithFormat:@"%@",custEvent.startDate];
    plainString = [plainString stringByAppendingString:startDateStr];
    plainString = [plainString stringByAppendingString:stringSeparator];
    NSString *endDateStr = [NSString stringWithFormat:@"%@",custEvent.endDate];
    plainString = [plainString stringByAppendingString:endDateStr];


    
    /*NSData *plainData = [plainString dataUsingEncoding:NSUTF8StringEncoding];
    NSString *base64String = [plainData base64EncodedStringWithOptions:0];
    NSLog(@"%@", base64String); // Zm9v
    
    return base64String;*/
    return plainString;
}


-(EKEvent*)fromBase64:(NSString*)base64String{
    EKEvent* myEvent = NULL;
    NSString *stringSeparator = @">;<";
  /*  NSData *decodedData = [[NSData alloc] initWithBase64EncodedString:base64String options:0];
    NSString *decodedString = [[NSString alloc] initWithData:decodedData encoding:NSUTF8StringEncoding];*/
    
    NSArray *myWords = [base64String componentsSeparatedByString:stringSeparator];
    myEvent = [EKEvent eventWithEventStore: eventStore];
    myEvent.title = myWords[0];
    myEvent.location = myWords[1];
    myEvent.notes = myWords[2];


    NSString* startDate = myWords[3];
        NSDateFormatter *fmt = [[NSDateFormatter alloc] init];
    [fmt setTimeZone:[NSTimeZone systemTimeZone]];
    [fmt setLocale:[NSLocale systemLocale]];
    [fmt setDateFormat:@"yyyy-MM-dd HH:mm:ss Z"];
    myEvent.startDate = [fmt dateFromString:startDate];
    
    NSString* endDate = myWords[4];
    NSDateFormatter *fmt1 = [[NSDateFormatter alloc] init];
    [fmt1 setTimeZone:[NSTimeZone systemTimeZone]];
    [fmt1 setLocale:[NSLocale systemLocale]];
    [fmt1 setDateFormat:@"yyyy-MM-ddHH:mm:ss Z"];
    myEvent.endDate = [fmt dateFromString:endDate];

 
    
    return myEvent;
}


-(BOOL)checkEvent:(CDVInvokedUrlCommand*)command{
    // Get the appropriate calendar
    
    
    self.mCallBackId    =   command.callbackId;
    
    // Get the Event* from base64 encoded eventID
    // get the event id for the event
    // Frist get the eventid
    NSDictionary* eventData      = [command.arguments objectAtIndex:0];
    NSString* eventId     = [eventData objectForKey:@"EventId"];
    EKEvent* event = [self fromBase64:eventId];
    
    NSArray *retrievedEvents =  [self findEKEventsWithTitle:event.title location:event.location message:event.notes startDate:event.startDate endDate:event.endDate];
    if (retrievedEvents.count > 0) {
        [self execCallback:@"true"];
    }
    else
         [self execCallbackfalse];
    return true;
}




#pragma mark EKEventEditViewDelegate
- (void)eventEditViewController:(EKEventEditViewController *)controller didCompleteWithAction:(EKEventEditViewAction)action
{
    if(action == EKEventEditViewActionSaved)
    {
        // Get the event
        EKEvent* createdEvent = controller.event;
        if( NULL != createdEvent){
            // get the event id for the event
              NSString* base64EventID = [self base64Encode:createdEvent];
            
            [self execCallback:base64EventID];
        }
    }
    
    if (action == EKEventEditViewActionCanceled) {
        [self execCallbackfalse];
    }
    [self.viewController dismissViewControllerAnimated:YES completion:nil];

    
}


- (void)eventViewController:(EKEventViewController *)controller didCompleteWithAction:(EKEventViewAction)action
{
    [self.viewController dismissViewControllerAnimated:YES completion:nil];
    
}

- (void) execCallback:(NSString*)eventId
{
    
    CDVPluginResult *result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK messageAsString:eventId];
    
    [self.commandDelegate sendPluginResult:result
                                callbackId:self.mCallBackId];
}
- (void) execCallbackfalse
{
    CDVPluginResult *result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_ERROR];
    
    [self.commandDelegate sendPluginResult:result
                                callbackId:self.mCallBackId];
}

@end
