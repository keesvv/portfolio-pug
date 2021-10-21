//go:generate jade -pkg=views -writer -basedir views -d views index.pug
package main

import (
	"log"
	"net/http"

	"github.com/keesvv/portfolio/views"
)

func serveStatic(path string, publicPath string) {
	fs := http.FileServer(http.Dir(path))
	http.Handle(publicPath+"/", http.StripPrefix(publicPath, fs))
}

func main() {
	// Static content
	serveStatic("./css", "/static/css")
	serveStatic("./js", "/static/js")
	serveStatic("./assets", "/static/assets")

	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		views.Index(rw)
	})

	log.Println("server started")
	http.ListenAndServe(":8080", http.DefaultServeMux)
}
