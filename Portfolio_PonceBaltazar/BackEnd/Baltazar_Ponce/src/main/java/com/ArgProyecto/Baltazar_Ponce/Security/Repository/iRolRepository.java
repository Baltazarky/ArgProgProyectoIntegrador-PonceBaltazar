
package com.ArgProyecto.Baltazar_Ponce.Security.Repository;

import com.ArgProyecto.Baltazar_Ponce.Security.Entity.Rol;
import com.ArgProyecto.Baltazar_Ponce.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
