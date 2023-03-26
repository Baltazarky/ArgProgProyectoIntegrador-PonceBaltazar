
package com.ArgProyecto.Baltazar_Ponce.Security.Service;

import com.ArgProyecto.Baltazar_Ponce.Security.Entity.Rol;
import com.ArgProyecto.Baltazar_Ponce.Security.Enums.RolNombre;
import com.ArgProyecto.Baltazar_Ponce.Security.Repository.iRolRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    iRolRepository irolRepository;
    
    public Optional<Rol> getByRolnombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }
    
    public void save(Rol rol){
        irolRepository.save(rol);
    }
}
