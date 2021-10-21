OUTDIR=dist

all: dirs scss scripts assets server

dirs:
	mkdir -p $(OUTDIR)

server:
	go generate
	go build -o $(OUTDIR)
	strip $(OUTDIR)/portfolio

scss:
	sass -s compressed views/index.scss:$(OUTDIR)/css/index.css

scripts:
	esbuild --minify --outdir=dist/js --sourcemap scripts/darkMode.ts

assets:
	cp -r assets dist

clean:
	rm -r dist views/*.go
