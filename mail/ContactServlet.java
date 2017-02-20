package mail;

import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.http.*;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.repackaged.com.google.gson.Gson;

@SuppressWarnings("serial")
public class ContactServlet extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		BufferedReader reader = req.getReader();
		Gson gson = new Gson();
		System.out.println("servlet");
		Contacts person = gson.fromJson(reader, Contacts.class);
		String contactname = person.name;
		String job=person.job;
		String company=person.company;
		String contactemail = person.email;
		String mobile_num = person.mobnum;
		String work_num = person.worknum;
		String contactaddress = person.address;
		System.out.println(contactname + " " + job + " " + company + " " + contactemail + " " + mobile_num + " " + work_num + " " + contactaddress);
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		Entity contact3 = new Entity("contacts",contactname);
		contact3.setProperty("Name", contactname);
		contact3.setProperty("Job", job);
		contact3.setProperty("company", company);
		contact3.setProperty("EMail-ID", contactemail);
		contact3.setProperty("Mobile_Number", mobile_num);
		contact3.setProperty("Work_Number", work_num);
		contact3.setProperty("Address", contactaddress);

		datastore.put(contact3);
		resp.getWriter().println("Data stored in database");
	}
}
