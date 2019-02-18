package com.thisnotes.backend.Repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.thisnotes.backend.Models.Admins;

public interface AdminsRepository extends MongoRepository<Admins, String> {
	Admins findById(ObjectId id);
}
