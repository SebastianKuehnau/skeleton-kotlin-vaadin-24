package org.vaadin.example.endpoints

import com.vaadin.flow.server.auth.AnonymousAllowed
import com.vaadin.hilla.BrowserCallable

@BrowserCallable
@AnonymousAllowed
class KotlinEndpoint {

    fun sayHello(name: String): String {
        return if (name.isEmpty()) {
            "Hello stranger"
        } else {
            "Hello $name"
        }
    }
}