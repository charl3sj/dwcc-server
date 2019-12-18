package in.hasirudala.dwcc.server.repository;

import in.hasirudala.dwcc.server.domain.IncomingWasteItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@Repository
//@RepositoryRestResource(collectionResourceRel = "incomingDtd", path = "incomingDtd")
public interface IncomingWasteItemRepository extends JpaRepository<IncomingWasteItem, Long> {
}
