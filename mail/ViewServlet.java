package mail;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.repackaged.com.google.gson.Gson;

@SuppressWarnings("serial")
public class ViewServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		Query q1 = new Query("contacts").addSort("Name", SortDirection.ASCENDING);
		PreparedQuery pq = ds.prepare(q1);
		
		Map<String, List<String>> category_map = new TreeMap<String, List<String>>();
		List<String> category_list = new LinkedList<String>();
		
		for (Entity categorylist : pq.asIterable()) {
			String contact_name = (String) categorylist.getProperty("Name");
			category_list.add(contact_name);
			System.out.println(category_list);
		}
		
		category_map.put("contact_name", category_list);
		Gson gson = new Gson();
		String json = gson.toJson(category_map);
		System.out.printf("JSON: %s", json.toString());

		resp.setContentType("application/json");

		resp.getWriter().println(json);
		}
}
