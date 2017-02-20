package mail;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Key;




public class DeleteServlet extends HttpServlet {
	public void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println("delete servlet");
		String contactname=req.getParameter("name"); 
		System.out.println(contactname);
		DatastoreService ds = DatastoreServiceFactory.getDatastoreService();        
		 Key employeeKey = KeyFactory.createKey("contacts",contactname );
	    ds.delete(employeeKey);
	    resp.getWriter().println("Entity is delete");
	}
}
