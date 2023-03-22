package com.ArgProyecto.Baltazar_Ponce.Repository;

import com.ArgProyecto.Baltazar_Ponce.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
