//go:generate jade -pkg=views -writer -basedir views -d views index.pug
package main

import (
	"log"
	"net/http"

	"github.com/keesvv/portfolio/views"
)

func main() {
	// Static content
	fs := http.FileServer(http.Dir("./css"))
	http.Handle("/static/css/", http.StripPrefix("/static/css", fs))

	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		views.Index(rw)
	})

	log.Println("server started")
	http.ListenAndServe(":8080", http.DefaultServeMux)
}
