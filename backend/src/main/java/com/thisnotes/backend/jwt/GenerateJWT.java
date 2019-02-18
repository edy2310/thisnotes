package com.thisnotes.backend.jwt;



import java.io.UnsupportedEncodingException;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

public class GenerateJWT {
	
	
	public static String generate() throws IllegalArgumentException, UnsupportedEncodingException {
		try {
		    Algorithm algorithm = Algorithm.HMAC256("secret");
		    String token = JWT.create()
		        .withIssuer("auth0")
		        .sign(algorithm);
		    return token;
		} catch (JWTCreationException exception){
		    return exception.toString();
		}		
		
	}
}
