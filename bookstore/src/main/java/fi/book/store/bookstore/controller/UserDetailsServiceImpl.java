package fi.book.store.bookstore.controller;

import fi.book.store.bookstore.domain.User;
import fi.book.store.bookstore.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository repository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.repository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User currentUser = repository.findByUsername(username);
        UserDetails user = new org.springframework.security.core.userdetails.User(username, currentUser.getPasswordHash(),
                AuthorityUtils.createAuthorityList(currentUser.getRole()));
        return user;
    }
}
