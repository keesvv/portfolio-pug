OUTDIR=dist

all: dirs scss server

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

clean:
	rm -r dist
