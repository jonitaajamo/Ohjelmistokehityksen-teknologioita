package fi.book.store.bookstore;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fi.book.store.bookstore.domain.Book;
import fi.book.store.bookstore.domain.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BookstoreApplication {

	private static final Logger log = LoggerFactory.getLogger(BookstoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

	@Bean
	public CommandLineRunner bookstore(BookRepository repository) {
		return (args) -> {

			log.info("add one book");
			repository.save(new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, 912312311, 19.90));

			for (Book book : repository.findAll()) {
				log.info(book.toString());
			}

		};
	}
}
