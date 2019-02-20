package com.thisnotes.backend.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.thisnotes.backend.Models.Student;

public interface StudentsRepository extends CrudRepository<Student, Integer> {

}
