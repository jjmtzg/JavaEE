

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Prueba
 */
@WebServlet(description = "Mi primer servlete para hacer pruebas", urlPatterns = { "/Prueba" })
public class Prueba extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Prueba() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String dato="";
		dato="";
		dato=request.getParameter("nombre");
		Persona persona=new Persona();
		Gson gson=new Gson();
		persona=gson.fromJson(dato, Persona.class);
		PrintWriter printWriter=new PrintWriter(response.getWriter());
		System.out.println(persona.getNombre());
		printWriter.println(dato);
	}

}
