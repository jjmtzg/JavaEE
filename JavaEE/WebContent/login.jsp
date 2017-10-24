<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>LogIn</title>
	</head>
	<body>
		<form action="LoginService" method="post">
			<input type="text" name="correo"id="correo" placeholder="Correo:">
			<input type="password" name="password" id="password" placeholder="Pass:">
			<button type="submit">LogIn</button>			
		</form>
	</body>
</html>