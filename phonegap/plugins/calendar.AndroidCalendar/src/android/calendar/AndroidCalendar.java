package calendar;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.ContentResolver;
import android.content.ContentUris;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.provider.CalendarContract;
import android.provider.CalendarContract.Attendees;
import android.provider.CalendarContract.Events;
import android.widget.Toast;

@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
public class AndroidCalendar extends CordovaPlugin {
	
	public static final String ACTION_ADD_CALENDAR = "addCalendar";
	public static final String ACTION_OPEN_CALENDAR = "openCalendar";
	public static final String ACTION_CHECK_EVENT = "checkEvent";
	public static final String ACTION_EDIT_EVENT = "editEvent";
	public static final String ACTION_CODE_OPEN_DATE_EVENT = "openDateEvent";
	public static String uristring;
	public static long id;
	public long startTime;
	public long endtime;
	private int eventBeforeCount;
	public static final Integer RESULT_CODE_ADD = 1;
	public static final Integer RESULT_CODE_OPEN=0;
	public static final Integer RESULT_CODE_EDIT=2;
	public static final Integer RESULT_CODE_OPEN_DATE_EVENT=3;
	private CallbackContext callback;

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		callback = callbackContext;
		// TODO this plugin may work fine on 3.0 devices, but have not tested it
		// yet, so to be sure:

		if (ACTION_ADD_CALENDAR.equals(action)) {
			try {
				return addCalendar(args);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else if (ACTION_OPEN_CALENDAR.equals(action)) {
			return openCalendarEvent(args);

		} else if (ACTION_CHECK_EVENT.equals(action)) {
			return checkEvent(args);
		}
		else if (ACTION_EDIT_EVENT.equals(action)) {
			return editCalendar(args);
		}
		else if (ACTION_CODE_OPEN_DATE_EVENT.equals(action)) {
			return openCalendarDateEvent(args);
		}

		return true;
	}

	/**
	 * Add Calendar On calling addCalendarEvent() from javascript.Add event to
	 * calendar.
	 * 
	 * @param args
	 * @return
	 * @throws JSONException
	 * @throws ParseException 
	 */

	@SuppressLint("NewApi")
	public boolean addCalendar(JSONArray args) throws JSONException, ParseException {

		long eventID = 208;
		Uri uri = ContentUris.withAppendedId(Events.CONTENT_URI, eventID);

		// getContentResolver().delete(uri, null, null);
		final JSONObject jsonFilter = args.getJSONObject(0);
		String calendarEventID = jsonFilter.optString("EventId");
		String sdate=jsonFilter.optString("startDate");
		String edate=jsonFilter.optString("endDate");
        String location=jsonFilter.optString("location");
		long startDate=getDateTime(sdate);
		long endDate=getDateTime(edate);
		
		//long beginDate=Long.parseLong(jsonFilter.optString("StartTime"));
		//long endDate=Long.parseLong(jsonFilter.optString("EndTime"));
		Intent intent = new Intent(Intent.ACTION_INSERT, Events.CONTENT_URI);

		intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME,
				startDate);
		intent.putExtra(CalendarContract.EXTRA_EVENT_END_TIME,
				endDate);
		intent.putExtra(Events.TITLE, jsonFilter.optString("title"));
		intent.putExtra(Events.DESCRIPTION, jsonFilter.optString("Desc"));
		intent.putExtra(Events.AVAILABILITY, Events.AVAILABILITY_BUSY);
        intent.putExtra(Events.EVENT_LOCATION, location);
		intent.putExtra(Events._ID, eventID);

		eventBeforeCount = noCreatedEvents();
		this.cordova.startActivityForResult(this, intent, RESULT_CODE_ADD);

		uristring = uri.toString();
		return true;

	}

	/**
	 * Edit a calendar event.
	 * 
	 * @param args
	 * @return
	 * @throws JSONException
	 */
	@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
	@SuppressLint("InlinedApi")
	private boolean openCalendarEvent(JSONArray args) throws JSONException {

		final JSONObject jsonFilter = args.getJSONObject(0);
		String calendarEventID=jsonFilter.optString("EventId");
		long eventId=Long.parseLong(calendarEventID);
		Uri uri = ContentUris.withAppendedId(Events.CONTENT_URI, eventId);
		String[] time=getTime(calendarEventID);
		long beginDate=Long.parseLong(time[0]);
		long endDate=Long.parseLong(time[1]);
		Intent intent = new Intent(Intent.ACTION_VIEW)
		   .setData(uri);
		intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, beginDate);
		intent.putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endDate);
		this.cordova.startActivityForResult(this, intent, RESULT_CODE_OPEN);

		
		
		return true;
	
	}
	private boolean openCalendarDateEvent(JSONArray args) throws JSONException{
		
		final JSONObject jsonFilter = args.getJSONObject(0);
		String calendarEventID = jsonFilter.optString("EventId");
		String[] time=getTime(calendarEventID);
		long startMills=Long.parseLong(time[0]);
		Uri.Builder builder = CalendarContract.CONTENT_URI.buildUpon();
		builder.appendPath("time");
		ContentUris.appendId(builder, startMills);
		Intent intent = new Intent(Intent.ACTION_VIEW)
		    .setData(builder.build());
		this.cordova.startActivityForResult(this, intent, RESULT_CODE_ADD);
		return true;
		
		
	} 
	
	private boolean editCalendar(JSONArray args) throws JSONException{
		final JSONObject jsonFilter = args.getJSONObject(0);
		String calendarEventID = jsonFilter.optString("EventId");
		String[] time=getTime(calendarEventID);
		long beginDate=Long.parseLong(time[0]);
		long endDate=Long.parseLong(time[1]);
		Intent intent = new Intent(Intent.ACTION_EDIT);
		intent.setData(Uri.parse("content://com.android.calendar/events/"
				+ String.valueOf(calendarEventID)));
		intent.putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, beginDate);
		intent.putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endDate);
		intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK
				| Intent.FLAG_ACTIVITY_SINGLE_TOP
				| Intent.FLAG_ACTIVITY_CLEAR_TOP
				| Intent.FLAG_ACTIVITY_NO_HISTORY
				| Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
		this.cordova.startActivityForResult(this, intent, RESULT_CODE_ADD);
		
		
		return true;
	}

	/**
	 * Logic for checking how many events are present.
	 * 
	 * @return int noEvents
	 */
	
	private int noCreatedEvents() {
		int noEvents = -1;
		Uri caluri = CalendarContract.Events.CONTENT_URI;
		Cursor cur1, cur2;
		ContentResolver cr = this.cordova.getActivity().getContentResolver();
		cur1 = cr.query(caluri, new String[] { Events.CALENDAR_ID, Events._ID,
				Events.TITLE, Events.DESCRIPTION, Events.DTSTART, Events.DTEND,
				Events.EVENT_LOCATION }, null, null, null);

		if (cur1 != null) {
			noEvents = cur1.getCount();
		}

		return noEvents;
	}

	@SuppressLint("NewApi")
	@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
		if ((requestCode == RESULT_CODE_ADD)||(requestCode == RESULT_CODE_EDIT)) {
			int newEventCount = noCreatedEvents();
			if (newEventCount > eventBeforeCount) {
				ContentResolver cr = this.cordova.getActivity()
						.getContentResolver();
				Uri caluri = CalendarContract.Events.CONTENT_URI;
				Uri atteuri = CalendarContract.Attendees.CONTENT_URI;
				Cursor cur1, cur2;
				String EventId = null;
				try {
					cur1 = cr.query(caluri,
							new String[] { Events.CALENDAR_ID, Events._ID,
									Events.TITLE, Events.DESCRIPTION,
									Events.DTSTART, Events.DTEND,
									Events.EVENT_LOCATION }, null, null, null);
					if (cur1 != null) {
						cur1.moveToLast();
						// while (cur1.moveToNext())
						{
							String event_Title = cur1.getString(cur1
									.getColumnIndex(Events.TITLE));
							String event_Desc = cur1.getString(cur1
									.getColumnIndexOrThrow(Events.DESCRIPTION));
							Date event_Start = new Date(cur1.getLong(cur1
									.getColumnIndex(Events.DTSTART)));
							Date event_end = new Date(cur1.getLong(cur1
									.getColumnIndex(Events.DTEND)));

							String event_loc = cur1.getString(cur1
									.getColumnIndex(Events.EVENT_LOCATION));
							String all_attendee = null;
							String all_Emails = null;

							String cal_ID = cur1.getString(cur1
									.getColumnIndex(Events.CALENDAR_ID));
							String event_ID = cur1.getString(cur1
									.getColumnIndex(Events._ID));
							cur2 = cr.query(atteuri, new String[] {
									Attendees.ATTENDEE_NAME,
									Attendees.ATTENDEE_EMAIL },
									Attendees.EVENT_ID + "=" + event_ID, null,
									null);
							if (cur2 != null) {
								while (cur2.moveToNext()) {
									String attendee_name = cur2
											.getString(cur2
													.getColumnIndex(Attendees.ATTENDEE_NAME));
									String attendee_Email = cur2
											.getString(cur2
													.getColumnIndex(Attendees.ATTENDEE_EMAIL));

									all_attendee += "\n" + attendee_name;
									all_Emails += "\n" + attendee_Email;
								}
								cur2.close();
							}

							EventId = event_ID ;
							id = Long.parseLong(event_ID);
						}
						cur1.close();

					}
					callback.success("" + EventId);
					// edit.setText(all);
					System.out.println("My log--------" + EventId);
					callback.success();
				} catch (Exception e) {

				}

			} else {
				callback.error("Unable to add event (" + resultCode + ").");
			}

		}
	}

	/**
	 * Retrive the calendar time in type long
	 * 
	 * @param date
	 * @return long mills
	 * @throws ParseException
	 */
	public long getDate(Date date) throws ParseException {

		DateFormat formatter = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");
		String reportDate = formatter.format(date);
		Date covertedDate = formatter.parse(reportDate);
		long mills = covertedDate.getTime();

		return mills;

	}
	public long getDateTime(String date) throws ParseException{
		if(date.equals("")||!date.equals("null")){
		DateFormat formatter = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");
		Date covertedDate = formatter.parse(date);
		long mills = covertedDate.getTime();
		return mills;
		}
		return 0;
	}

	/**
	 * Used to Convert String to Long
	 * 
	 * @param time
	 * @return
	 */
	public long longConverter(String time) {
		long mills = Long.valueOf(time);
		return mills;

	}

	/**
	 * Checks whether the event is there or not
	 * 
	 * @param args
	 * @return
	 * @throws JSONException 
	 */
	@SuppressWarnings("null")
	@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
	public boolean checkEvent(JSONArray args) throws JSONException {
		String count = null;
		final JSONObject jsonFilter = args.getJSONObject(0);
		String calendarEventID = jsonFilter.optString("EventId");
		ContentResolver cr = this.cordova.getActivity()
				.getContentResolver();
		Uri caluri = CalendarContract.Events.CONTENT_URI;
		try {
			Cursor  cur1 = cr.query(caluri,
					new String[] { Events.CALENDAR_ID, Events._ID,
							Events.TITLE, Events.DESCRIPTION,
							Events.DTSTART, Events.DTEND,
							Events.EVENT_LOCATION },  "deleted != 1", null, null);
			if (cur1 != null) {
				cur1.moveToFirst();
				// while (cur1.moveToNext())
				do{
					String event_Id = cur1.getString(cur1
							.getColumnIndex(Events._ID));
					if(event_Id.equals(calendarEventID)){
					//	cur1.close();
						callback.success("true");
					}
				}while(cur1.moveToNext());
			}
			cur1.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return false;
	}
	/**
	 * Fetch the start and End date with time.
	 * @param EventId
	 * @return
	 * @throws JSONException
	 */
	public String[] getTime(String EventId) throws JSONException {
		ContentResolver cr = this.cordova.getActivity()
				.getContentResolver();
		Uri caluri = CalendarContract.Events.CONTENT_URI;
		try {
			Cursor  cur1 = cr.query(caluri,
					new String[] { Events.CALENDAR_ID, Events._ID,
							Events.TITLE, Events.DESCRIPTION,
							Events.DTSTART, Events.DTEND,
							Events.EVENT_LOCATION }, null, null, null);
			if (cur1 != null) {
				cur1.moveToFirst();
				// while (cur1.moveToNext())
				do{
					String event_Id = cur1.getString(cur1
							.getColumnIndex(Events._ID));
					if(event_Id.equals(EventId)){
						Date event_Start = new Date(cur1.getLong(cur1
								.getColumnIndex(Events.DTSTART)));
						Date event_end = new Date(cur1.getLong(cur1
								.getColumnIndex(Events.DTEND)));
						
						long start_event = getDate(event_Start);
						long end_Event = getDate(event_end);
						
						String[] time=getParsedTime(start_event +";"+end_Event);
						
						return time;
					}
				}while(cur1.moveToNext());
			}
			cur1.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	/**
	 * Split the start and end date
	 * @param time
	 * @return
	 */
	
	public String[] getParsedTime(String time){
		 String[] parts = time.split(";");
		
		 return parts;
	}
	
}
