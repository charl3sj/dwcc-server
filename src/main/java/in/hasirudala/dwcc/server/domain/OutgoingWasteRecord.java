package in.hasirudala.dwcc.server.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Audited
@Entity
@Table(name = "outgoing_waste_records")
public class OutgoingWasteRecord extends BaseEntity {
    @Column(nullable = false)
    @NotNull
    private Date fromDate;

    @Column(nullable = false)
    @NotNull
    private Date toDate;

    @Column
    private Double totalQuantity;

    @Column
    private Double sanitaryWasteQuantity;

    @JsonManagedReference
    @OneToMany(mappedBy = "record", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OutgoingWasteEntry> entries = new HashSet<>();

    @Column(name = "notes")
    private String note;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dwcc_id", nullable = false)
    @NotNull
    private Dwcc dwcc;

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public Double getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(Double totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public Double getSanitaryWasteQuantity() {
        return sanitaryWasteQuantity;
    }

    public void setSanitaryWasteQuantity(Double sanitaryWasteQuantity) {
        this.sanitaryWasteQuantity = sanitaryWasteQuantity;
    }

    public Dwcc getDwcc() {
        return dwcc;
    }

    public void setDwcc(Dwcc dwcc) {
        this.dwcc = dwcc;
    }

    public Long getDwccId() {
        return this.dwcc.getId();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Set<OutgoingWasteEntry> getEntries() {
        return entries;
    }

    public void setEntries(Set<OutgoingWasteEntry> entries) {
        this.entries = entries;
    }

    public void addEntry(OutgoingWasteEntry entry) {
        this.entries.add(entry);
        entry.setRecord(this);
    }

    public Set<Long> getEntryIds() {
        return entries.stream().map(BaseEntity::getId).collect(Collectors.toSet());
    }
}
