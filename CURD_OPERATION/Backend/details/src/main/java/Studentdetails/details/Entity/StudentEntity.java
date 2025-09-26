package Studentdetails.details.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Student_ID")
    private Long id;
    @Column(name = "Student_NAME")
    private String name;
    @Column(name = "Student_EMAIL")
    private String email;
    @Column(name ="Student_NUMBER")
    private Long number;
    @Column(name = "Student_COURSE")
    private String course;


}
