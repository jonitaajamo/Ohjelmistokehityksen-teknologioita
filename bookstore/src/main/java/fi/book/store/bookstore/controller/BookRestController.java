package fi.book.store.bookstore.controller;

import fi.book.store.bookstore.domain.Book;
import fi.book.store.bookstore.domain.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookRestController {
    @Autowired
    private BookRepository repository;

    @RequestMapping(value="/books", method = RequestMethod.GET)
    public @ResponseBody List<Book> bookListRest() {
        return (List<Book>) repository.findAll();
    }

    @RequestMapping(value="/books/{id}", method = RequestMethod.GET)
    public @ResponseBody Book findBookRest (@PathVariable("id") Long bookId) {
        return repository.findOne(bookId);
    }

    

}
