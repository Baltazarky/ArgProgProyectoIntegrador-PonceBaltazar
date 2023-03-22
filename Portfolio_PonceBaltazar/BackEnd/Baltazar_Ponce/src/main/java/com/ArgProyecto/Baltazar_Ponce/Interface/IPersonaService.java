package com.ArgProyecto.Baltazar_Ponce.Interface;

import com.ArgProyecto.Baltazar_Ponce.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto por ID
    public void deletePersona(Long id);
    
    //Buscar un objeto por ID
    public Persona findPersona(Long id);
}

