public class Login 
{
	private String correo;
	private String password;
	public Login() 
	{
		// TODO Auto-generated constructor stub
	}
	public String getCorreo() 
	{
		return correo;
	}
	public void setCorreo(String correo) 
	{
		this.correo = correo;
	}
	public String getPassword() 
	{
		return password;
	}
	public void setPassword(String password) 
	{
		this.password = password;
	}
	public boolean verificarPassword(String password)
	{
		if(password.equals(this.password))
			return true;
		else
			return false;
	}
}
