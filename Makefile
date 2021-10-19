OUTDIR=dist

all: dirs scss scripts server

dirs:
	mkdir -p $(OUTDIR)

server:
	go generate
	go build -o $(OUTDIR)
	strip $(OUTDIR)/portfolio

scss:
	sass -s compressed scss:$(OUTDIR)/css

scss-watch:
	sass -w scss:$(OUTDIR)/css

scripts:
	tsc

clean:
	rm -r dist
