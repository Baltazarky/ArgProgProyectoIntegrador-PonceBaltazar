package com.ArgProyecto.Baltazar_Ponce.CORS;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class CustomInterceptor implements HandlerInterceptor {

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
      throws Exception {
    // Lógica para manejar la solicitud antes de que se maneje
    // Puedes agregar headers de respuesta en este método
    return true; // Si se devuelve false, se detendrá el procesamiento de la solicitud
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
      ModelAndView modelAndView) throws Exception {
    // Lógica para manejar la solicitud después de que se maneje, pero antes de que se renderice la vista (si corresponde)
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
      Exception ex) throws Exception {
    // Lógica para manejar la solicitud después de que se haya completado, incluida la renderización de la vista (si corresponde)
  }
}