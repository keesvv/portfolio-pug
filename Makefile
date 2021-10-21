OUTDIR=dist

all: dirs scss scripts assets server

dirs:
	mkdir -p $(OUTDIR)

server:
	go generate
	go build -o $(OUTDIR)
	strip $(OUTDIR)/portfolio

scss:
	sass -s compressed scss/index.scss:$(OUTDIR)/css/index.css

scripts:
	tsc

assets:
	cp -r assets dist

clean:
	rm -r dist
