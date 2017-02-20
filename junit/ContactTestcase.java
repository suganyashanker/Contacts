package junit;

import static org.junit.Assert.*;
import mail.DeleteServlet;
import mail.EditServlet;

import org.junit.Test;
import mail.ContactServlet;
import static org.mockito.Mock.*;
import static org.mockito.Mockito.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ContactTestcase {

	
     
	
	@Test // original method is tested
	public void test() {
		ContactServlet contact = new ContactServlet();
		assertTrue(contact.dataStore("mv"));
		assertFalse(contact.dataStore(""));
	}
	@Test //method is mocked
	public void test1()  {
		ContactServlet mock = mock(ContactServlet.class);
	    // define return value for method dataStore()
		when(mock.dataStore("")).thenReturn(true);
 verify(mock, never()).dataStore("");                   // not called
		 assertEquals(false, mock.dataStore("b"));
		 assertEquals(true, mock.dataStore(""));
 verify(mock, atLeastOnce()).dataStore("b");            // at least once called
		 assertEquals(true, mock.dataStore(""));
		 assertEquals(false, mock.dataStore("a"));
		 assertEquals(true, mock.dataStore(""));
 verify(mock, times(3)).dataStore("");                  // number of times called
	    // TODO use mock in test.... 
		
	}
	
	@Test
	public void test2()  {
		ContactServlet mock =spy(new ContactServlet());
		 
		// will be called:
		when(mock.dataStore("")).thenReturn(false);
 
		// will not be called:
		doReturn(true).when(mock).dataStore("a");
		 assertEquals(true, mock.dataStore("asdfgh"));
		 assertEquals(false, mock.dataStore(""));
	}
	
	 @Test
	    public void testServlet() throws Exception {
		// ContactServlet mock = new ContactServlet();
	        HttpServletRequest request = mock(HttpServletRequest.class);       
	        HttpServletResponse response = mock(HttpServletResponse.class);    

	       
	        new ContactServlet().doPost(request, response);
	        

	       // verify(request, atLeast(1)).getParameter("name"); 
	      
	    }

	 }
