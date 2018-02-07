package fi.book.store.bookstore;

import fi.book.store.bookstore.domain.Book;
import fi.book.store.bookstore.domain.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BookstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}
	@Bean
	public CommandLineRunner bookstore(BookRepository repository) {
		return (args) -> {
			log.info("save a couple of students");
			repository.save(new Book("John", "Johnson", "john@john.com"));
			repository.save(new Student("Katy", "Kateson", "kate@kate.com"));

			log.info("fetch all students");
			for (Student student : repository.findAll()) {
				log.info(student.toString());
			}

		};
}
