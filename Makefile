MAIN := webgl-survey
SRC := $(patsubst %.md,%.tex, $(filter-out $(MAIN).md, $(wildcard **/*.md)))
OPT := --variable linkcolor=blue --variable urlcolor=blue --no-highlight

all : $(MAIN).pdf cleanmisc

$(MAIN).pdf : $(SRC) $(MAIN).md
	pandoc $(MAIN).md $(OPT) --latex-engine=xelatex -s -o $(MAIN).tex
	xelatex $(MAIN)
	bibtex $(MAIN)
	xelatex $(MAIN)
	xelatex $(MAIN)

%.tex : %.md
	pandoc $< $(OPT) -o $@

clean : cleanmisc
	rm -f $(SRC) $(MAIN).tex

rebuild : clean all

cleanmisc:
	rm -f *~ *.aux *.dvi *.bbl *.blg *.log *.out *.toc
