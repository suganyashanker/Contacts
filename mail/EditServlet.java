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
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.repackaged.com.google.gson.Gson;

public class EditServlet extends HttpServlet {
	public void doPut(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
		String name = req.getParameter("name");
		System.out.println(name);
		Filter propertyFilter =
    		    new FilterPredicate("Name", FilterOperator.EQUAL, name);
		System.out.println(propertyFilter);
    		Query q = new Query("contacts").setFilter(propertyFilter);
    		System.out.println(q);
    		PreparedQuery pq = ds.prepare(q);
    		System.out.println(pq);
    		
    		Map<String, String> contact_info_map = new TreeMap<String, String>();
    		
    		
    	        for (Entity categorylist : pq.asIterable()) {
    			
    			String contact_name = (String) categorylist.getProperty("Name");
    			String job = (String) categorylist.getProperty("Job");
    			String company = (String) categorylist.getProperty("company");
    			String email = (String) categorylist.getProperty("EMail-ID");
    			String worknum = (String) categorylist.getProperty("Work_Number");
    			String mobnum = (String) categorylist.getProperty("Mobile_Number");
    			String address = (String) categorylist.getProperty("Address");
        		contact_info_map.put("name",contact_name );
        		contact_info_map.put("job",job );
        		contact_info_map.put("company",company );
        		contact_info_map.put("email",email );
        		contact_info_map.put("worknum",worknum );
        		contact_info_map.put("mobnum",mobnum );
        		contact_info_map.put("address",address );
        		
    			
    		}
    		
		Gson gson = new Gson();
		String json = gson.toJson(contact_info_map);
		System.out.printf("JSON: %s", json.toString());

		resp.setContentType("application/json");

		resp.getWriter().println(json);
		
		
		
	}

}
